// app/contact/page.tsx

import { getProfile } from "@/app/sanity/sanity.query";
import type { ProfileType } from "@/app/types";
import { BiEnvelope } from "react-icons/bi";

export default async function Contact() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6  ">
              
            <a href={`mailto:${data.email}`}  className="flex items-center gap-x-2 hover:text-blue-800  duration-300  mb-5"  > <BiEnvelope className="text-lg" />
                     {data.email}
                    </a>
        
          
          <small className="hover:text-blue-800 duration-200 font-semibold flex items-center gap-x-3 mb-5">
           
        Phone : <span className="hover:text-blue-800 duration-200">03160105892</span>
            
          </small>

              
                 
          
              
                {Object.entries(data.socialLinks) .sort().map(([key, value], id) => (
                    <div key={id} >
                      <a  href={value} rel="noreferer noopener" className="flex items-center gap-x-3 mb-5  hover:text-blue-800 duration-300"> {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </div>
                  ))}
           
            </section>

          
          </div>
        ))}
    </main>
  );
}



