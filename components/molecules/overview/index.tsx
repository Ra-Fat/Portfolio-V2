export const Overview = () => {
  return (
    <section className="w-full h-full rounded-2xl text-white">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center shrink-0">
          <span className=" font-bold text-lg">RF</span>
        </div>

        <div>
          <h3 className=" font-bold text-lg leading-tight uppercase">
            ARafat Man
          </h3>
          <p className=" text-sm leading-snug mt-1">
            Software Engineer &amp; Full-Stack Developer
          </p>
        </div>
      </div>

      <p className="text-base leading-relaxed mt-6">
        I'm a Software Engineer with a passion for building beautiful,
        functional mobile and web applications. I specialize in Flutter
        development and full-stack solutions, combining technical expertise
        with creative problem-solving.
      </p>
    </section>
  );
};