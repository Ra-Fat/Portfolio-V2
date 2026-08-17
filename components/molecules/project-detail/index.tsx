// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { X, Play, ExternalLink } from "lucide-react";
// import { cn } from "@/lib/utils";

// type Project = {
//   name: string;
//   description: string;
//   image_banner: string;
//   techstack: string[];
//   date: string;
//   image_gallery: string[];
//   video_demo: string;
//   github_link: string;
//   hosting_link: string;
// };

// type Props = {
//   project: Project;
//   onClose: () => void;
// };

// const getYouTubeId = (url: string) => {
//   const match = url.match(
//     /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/,
//   );
//   return match ? match[1] : null;
// };

// type MediaItem = { type: "video"; id: string } | { type: "image"; src: string };

// export const ProjectDetail = ({ project, onClose }: Props) => {
//   const videoId = getYouTubeId(project.video_demo);

//   const media: MediaItem[] = [
//     ...(videoId ? [{ type: "video", id: videoId } as MediaItem] : []),
//     ...project.image_gallery.map(
//       (src) => ({ type: "image", src }) as MediaItem,
//     ),
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const active = media[activeIndex];

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10">
//       <div className="relative w-full max-w-6xl flex flex-col gap-4">
//         {/* header */}
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
//               {project.name}
//             </h2>
//             <p className="text-secondary text-sm">{project.date}</p>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors"
//             aria-label="Close"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-4 h-[70vh]">
//           {/* main preview */}
//           <div className="relative flex-1 lg:flex-[3] rounded-2xl overflow-hidden border border-white/10 bg-black">
//             {active?.type === "video" ? (
//               <iframe
//                 key={active.id}
//                 src={`https://www.youtube.com/embed/${active.id}`}
//                 title={project.name}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full h-full"
//               />
//             ) : (
//               <Image
//                 src={
//                   active?.type === "image" ? active.src : project.image_banner
//                 }
//                 alt={project.name}
//                 fill
//                 className="object-contain bg-black"
//               />
//             )}

//             <a
//               href={project.github_link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="absolute bottom-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white backdrop-blur-md transition-colors"
//               aria-label="View on GitHub"
//             >
//               {/* <Github size={18} /> */}
//             </a>
//           </div>

//           {/* preview stack — video first, images after */}
//           <div className="flex lg:flex-col gap-3 lg:w-56 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pr-1">
//             {media.map((item, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActiveIndex(i)}
//                 className={cn(
//                   "relative shrink-0 w-40 h-24 lg:w-full lg:h-28 rounded-xl overflow-hidden border transition-all",
//                   activeIndex === i
//                     ? "border-primary ring-2 ring-primary/60"
//                     : "border-white/10 hover:border-white/30",
//                 )}
//               >
//                 <Image
//                   src={
//                     item.type === "video"
//                       ? `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`
//                       : item.src
//                   }
//                   alt={`${project.name} preview ${i + 1}`}
//                   fill
//                   className="object-cover"
//                 />
//                 {item.type === "video" && (
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                     <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center">
//                       <Play
//                         size={16}
//                         className="text-white fill-white ml-0.5"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* actions */}
//         <div className="flex items-center gap-3">
//           <a
//             href={project.hosting_link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors"
//           >
//             Visit site <ExternalLink size={14} />
//           </a>
//           <a
//             href={project.github_link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors"
//           >
//             {/* <Github size={16} /> Source code */}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
