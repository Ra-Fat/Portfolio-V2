"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { earthVertexShader } from "./earth/earth.vert";
import { earthFragmentShader } from "./earth/earth.frag";
import { atmosphereVertexShader } from "./atmosphere/atmosphere.vert";
import { atmosphereFragmentShader } from "./atmosphere/atmosphere.frag";


interface Earth3DProps {
  className?: string;
  style?: React.CSSProperties;
  textureBasePath?: string;
}

export default function Earth3D({
  className,
  style,
  textureBasePath = "/earth",
}: Earth3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(-3.2, 2.9, -1.2).normalize().multiplyScalar(5);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    // Lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000, 0); // transparent background
    container.appendChild(renderer.domElement);

    const setSize = () => {
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    setSize();

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const maxAnisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);

    const earthDayTexture = textureLoader.load(`${textureBasePath}/2k_earth_daymap.jpg`);
    earthDayTexture.colorSpace = THREE.SRGBColorSpace;
    earthDayTexture.anisotropy = maxAnisotropy;

    const earthNightTexture = textureLoader.load(`${textureBasePath}/night.jpg`);
    earthNightTexture.colorSpace = THREE.SRGBColorSpace;
    earthNightTexture.anisotropy = maxAnisotropy;

    // NOTE: original repo's script.js requested "textures/earth/specularClouds.jpg"
    // but the file actually ships at the textures root - fixed here.
    const earthSpecularCloudsTexture = textureLoader.load(`${textureBasePath}/specularClouds.jpg`);
    earthSpecularCloudsTexture.anisotropy = maxAnisotropy;

    const earthBumpTexture = textureLoader.load(`${textureBasePath}/8081_earthbump4k.jpg`);
    earthBumpTexture.anisotropy = maxAnisotropy;

    const earthMetalnessTexture = textureLoader.load(`${textureBasePath}/8081_earthspec4k.jpg`);
    earthMetalnessTexture.anisotropy = maxAnisotropy;

    // Earth
    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthMaterial = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {
        uDayTexture: new THREE.Uniform(earthDayTexture),
        uNightTexture: new THREE.Uniform(earthNightTexture),
        uSpecularCloudsTexture: new THREE.Uniform(earthSpecularCloudsTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(1, 1, 1).normalize()),
        uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(0x9fd8ff)),
        // NOTE: original repo set "uAtmosphereNightColor" here, which doesn't
        // exist in earth.frag (the uniform there is uAtmosphereTwilightColor),
        // so it was silently ignored. Fixed here to match the shader.
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(0x050c1f)),
      },
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.rotation.x = THREE.MathUtils.degToRad(23.5);
    scene.add(earth);

    // Atmosphere
    const atmosphereMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      transparent: true,
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: new THREE.Uniform(new THREE.Vector3(1, 1, 1).normalize()),
        uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(0x9fd8ff)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(0x050c1f)),
      },
    });
    const atmosphere = new THREE.Mesh(earthGeometry, atmosphereMaterial);
    atmosphere.scale.setScalar(1.025);
    scene.add(atmosphere);

    // Sun direction (static, matches original)
    const sunSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5);
    const sunDirection = new THREE.Vector3().setFromSpherical(sunSpherical);
    earthMaterial.uniforms.uSunDirection.value.copy(sunDirection);
    atmosphereMaterial.uniforms.uSunDirection.value.copy(sunDirection);

    // Drag to rotate / scroll to zoom
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 3;
    controls.maxDistance = 10;

    // Resize handling - watches the container, not the window,
    // so this works when embedded in a card/section rather than full-screen.
    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(container);

    // Animation loop
    const clock = new THREE.Clock();
    let frameId: number;
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      earth.rotation.y = elapsedTime * 0.1; // idle auto-spin
      controls.update(); // required for damping + drag inertia
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    tick();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();

      earthGeometry.dispose();
      earthMaterial.dispose();
      atmosphereMaterial.dispose();
      earthDayTexture.dispose();
      earthNightTexture.dispose();
      earthSpecularCloudsTexture.dispose();
      earthBumpTexture.dispose();
      earthMetalnessTexture.dispose();

      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [textureBasePath]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
    />
  );
}