
import { getProfile } from "@/app/sanity/sanity.query";
import type { ProfileType } from "@/app/types";
import Front from '@/components/Front';
 

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
    
    <Front/>
   

    </main>
  );
}




