// // app/cv/page.tsx

// import { getProfile } from "@/app/sanity/sanity.query";
// import type { ProfileType } from "@/app/types";
// import { BiFile } from "react-icons/bi";

// export default async function Dowmload() {
//   const profile: ProfileType[] = await getProfile();

//   return (
    
//     <main className=" flex justify-items-center justify-center">
//       {profile &&
//         profile.map((data) => (
//           <div key={data._id}>
//             <section className="">
//             {/* grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center  */}
            
//                 <div className="  text-white hover:text-blue-800 duration-200">
                  
//                   <a
//                     href={`${data.resumeURL}?dl=${data.fullName}_resume`}
//                     className="flex items-center justify-center gap-x-2 bg-black border border-blue-50 hover:border-blue-800 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
//                   >
//                     <BiFile className="text-base" /> Download Resumé
//                   </a>
//                 </div>
                
//             </section>

          
// </div>
// ))}
// </main>
// );
// }



import { getProfile } from "@/app/sanity/sanity.query";
import type { ProfileType } from "@/app/types";
import { BiFile } from "react-icons/bi";

export default async function Download() {
  const profiles: ProfileType[] = await getProfile();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      {profiles && profiles.length > 0 ? (
        profiles.map((profile) => (
          <div key={profile._id} className="mb-6 text-center">
            <section className="mb-4">
              {profile.imageURL && (
                <img
                  src={profile.imageURL}
                  alt={profile.fullName}
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
              )}
            </section>
            <div className="text-white hover:text-blue-800 duration-200">
              <a
                href={`${profile.resumeURL}?dl=${profile.fullName}_resume`}
                className="flex items-center justify-center gap-x-2 bg-black border border-blue-50 hover:border-blue-800 rounded-md duration-200 py-2 px-4 text-center cursor-pointer font-medium"
              >
                <BiFile className="text-base" /> Download Resumé
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No profiles available.</p>
      )}
    </main>
  );
}

