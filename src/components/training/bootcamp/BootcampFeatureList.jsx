import FeatureCard from "@/components/Card/FeatureCard";

const BootcampFeatureList = ({ items = [], variant = "stack" }) => {
  if (!items.length) return null;

  const layout = variant === "grid" ? "grid gap-5 md:grid-cols-2" : "space-y-5";

  return (
    <div className={layout}>
      {items.map((item) => (
        <FeatureCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default BootcampFeatureList;

// const BootcampFeatureList = ({ items = [], variant = "stack" }) => {
//   if (!items.length) return null;

//   if (variant === "grid") {
//     return (
//       <div className="grid gap-5 md:grid-cols-2">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-2xl border border-quackred-100 bg-white p-5 shadow-lg"
//           >
//             <div className="flex items-start gap-3">
//               <div className="mt-1 flex h-6 w-6 px-2 items-center justify-center rounded-full bg-quackred-100 text-sm font-bold text-quackred-800">
//                 &#10003;
//               </div>

//               <div>
//                 <h4 className="text-xl font-bold">{item.title}</h4>
//               </div>
//             </div>
//             {item.description && (
//               <p className="mt-2 text-base leading-7 text-gray-900">{item.description}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {items.map((item, index) => (
//         <div key={index}>
//           <h4 className="text-2xl font-bold">{item.title}</h4>
//           {item.description && (
//             <p className="mt-3 text-lg leading-7 text-gray-900">{item.description}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BootcampFeatureList;
