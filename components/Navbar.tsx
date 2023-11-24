import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/icons/logo.png";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./ModeToggle";

// export default function Navbar() {
//   return (
//     <header className="py-6 md:px-16  border-black  px-6 border-b z-30 md:mb-28 mb-20">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         <Link href="/"> <Image src={Logo} width={25} height={25} alt="logo" /> </Link>
//         <nav className="hidden md:block">
//           <ul className="flex items-center gap-x-8">

//             <li> <Link href="/about" className="hover:text-blue-800 duration-300"> About </Link> </li>
          
//             <li> <Link href="/contact"   className="hover:text-blue-800 duration-300"> Contact Me</Link> </li>

//             <li> <Link href="/resume"   className="hover:text-blue-800 duration-300">Dowmload Resume </Link> </li>

//             <li> <Link href="/projects" className="hover:text-blue-800 duration-300">Projects</Link> </li>
//             <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange> <ModeToggle/>  </ThemeProvider>

//           </ul>
      
//         </nav>
//       </div>

//       <div className='md:hidden'>
                    
//                      <Sheet>
//                         <SheetTrigger>
//                             <Menu className='w-8 h-8' />
//                         </SheetTrigger>
//                         <SheetContent > 
                        

                           
//                        <Link href={"/"}> <Image src={Logo} width={25} height={25} alt="logo" /></Link> 
//                          {/* flex flex-col text-xl gap-y-3 */}
//                             <ul className=' justify-evenly '>
                             
//                                 <li className='text-center'><Link href="/about"className="hover:text-blue-800 duration-300"> About </Link></li>
//                                 <li className='text-center'><Link href="/contact" className="hover:text-blue-800 duration-300"> Contact Me</Link></li>
//                                 <li className='text-center'> <Link href="/resume" className="hover:text-blue-800 duration-300" >Dowmload Resume </Link></li>
//                                 <li className='text-center'><Link href="/projects"className="hover:text-blue-800 duration-300">Projects</Link></li>
//                             </ul>
//                         </SheetContent>
//                     </Sheet>

//                 </div>

//     </header>
//   );
// }

// "use client"

export default function Navbar() {
  return (
    <header className="py-4 md:px-8 px-4 border-b z-30 mb-8 md:mb-16 lg:mb-20 xl:mb-24">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/"> 
          <Image src={Logo} width={40} height={40} alt="logo" />
        </Link>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger >
              <Menu className="w-10 h-10" />
            </SheetTrigger>
            
              <SheetContent>
                <ul className="flex flex-col items-center gap-y-3">
                  <li><Link href="/about" className="hover:text-blue-800 duration-300">About</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-800 duration-300">Contact Me</Link></li>
                  <li><Link href="/resume" className="hover:text-blue-800 duration-300">Resume</Link></li>
                  <li><Link href="/projects" className="hover:text-blue-800 duration-300">Projects</Link></li>
                  <li><Link href="/job" className="hover:text-blue-800 duration-300">Job</Link></li>
                  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <ModeToggle />
          </ThemeProvider>
                </ul>
              </SheetContent>
            
          </Sheet>
        </div>

         {/* Desktop Navigation  */}
        <nav className="hidden md:flex items-center gap-x-8">
          <ul className="flex items-center gap-x-8">
            <li><Link href="/about" className="hover:text-blue-800 duration-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-800 duration-300">Contact Me</Link></li>
            <li><Link href="/resume" className="hover:text-blue-800 duration-300"> Resume</Link></li>
            <li><Link href="/projects" className="hover:text-blue-800 duration-300">Projects</Link></li>
            <li><Link href="/job" className="hover:text-blue-800 duration-300">Job</Link></li>
          </ul>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <ModeToggle />
          </ThemeProvider>
        </nav>
      </div>
    </header>
  );
}
