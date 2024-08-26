// app/cv/page.tsx

import { getProfile } from "@/app/sanity/sanity.query";
import type { ProfileType } from "@/app/types";
import { BiFile } from "react-icons/bi";

export default async function Dowmload() {
  const profile: ProfileType[] = await getProfile();

  return (
    
    <main className=" flex justify-items-center justify-center">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="">
            {/* grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center  */}
            
                <div className="  text-white hover:text-blue-800 duration-200">
                  
                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                    className="flex items-center justify-center gap-x-2 bg-black border border-blue-50 hover:border-blue-800 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
                  >
                    <BiFile className="text-base" /> Download Resumé
                  </a>
                </div>
                
            </section>

          
</div>
))}
</main>
);
}


