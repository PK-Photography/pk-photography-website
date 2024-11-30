// import { motion } from "framer-motion";
// import Image from "next/image";

// const projects = [
//   {
//     id: 1,
//     title: "Google Gemini",
//     subtitle: "Generative AI Apps",
//     imageUrl: "/images/gemini.jpg",
//     videoUrl: "/videos/gemini.mp4",
//     type: "video", // Can be 'image', 'video', or 'gif'
//     link: "#"
//   },
//   {
//     id: 2,
//     title: "Fingerspelling",
//     subtitle: "Learn the ABC in American Sign Language.",
//     gifUrl: "/images/fingerspelling.gif",
//     type: "gif", // For GIFs
//     link: "#"
//   },
//   {
//     id: 3,
//     title: "Bang & Olufsen",
//     subtitle: "See yourself in Sound.",
//     imageUrl: "/images/bang-olufsen.jpg",
//     type: "image", // For images
//     link: "#"
//   },
//   // Add more projects here
// ];

// export default function ProjectsSection() {
//   return (
//     <div className="mx-5">
//     <section className="py-16">
//       <h2 className="text-4xl font-semibold text-center mb-8">Our Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             className="relative   overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <a href={project.link} target="_blank" className="block">
//               <div className="relative w-full h-64">
//                 {/* Display the project type */}
//                 {project.type === "image" && (
//                   <Image
//                     src={project.imageUrl}
//                     alt={project.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-500 transform hover:scale-110"
//                   />
//                 )}

//                 {project.type === "video" && (
//                   <video
//                     className="w-full h-full object-cover"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                   >
//                     <source src={project.videoUrl} type="video/mp4" />
//                   </video>
//                 )}

//                 {project.type === "gif" && (
//                   <Image
//                     src={project.gifUrl}
//                     alt={project.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-500 transform hover:scale-110"
//                   />
//                 )}
//               </div>
//             </a>
//             {/* Project title and subtitle outside the card */}
//             <div className="p-4 text-center">
//               <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//               <p className="text-gray-600">{project.subtitle}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//     </div>
//   );
// }


export const Project = () => {
  return (
    <div>Project</div>
  )
}
