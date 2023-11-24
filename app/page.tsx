import Image from 'next/image'
import { getProfile } from "@/app/sanity/sanity.query";
import type { ProfileType } from "@/app/types";
import Logo from "@/app/icons/logo.png";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        <Image src={Logo} width={400} height={100} alt="logo" />
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.headline}
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {data.shortBio}
              </p>
              
            </div>
          ))}
       
      </section>

    </main>
  );
}


     {/* flex items-center gap-x-3 mb-5  hover:text-blue-800 duration-300 */}