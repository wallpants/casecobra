import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Button } from "./ui/button";

export const NavBar = async () => {
   const { getUser } = getKindeServerSession();
   const user = await getUser();
   const isAdmin = user?.email === process.env.ADMIN_EMAIL;

   return (
      <nav className="sticky  z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
         <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
               <Link href="/" className="flex z-40 font-semibold">
                  case<span className="text-green-600">cobra</span>
               </Link>
               <div className="h-full flex items-center space-x-4">
                  {user ? (
                     <>
                        <Button size="sm" variant="ghost" asChild>
                           <Link href="/api/auth/logout">Sign out</Link>
                        </Button>
                        {isAdmin ? (
                           <Button size="sm" variant="ghost" asChild>
                              <Link href="/api/auth/logout">Dashboard ✨</Link>
                           </Button>
                        ) : null}
                        <Button size="sm" className="hidden sm:flex item-center gap-1" asChild>
                           <Link href="/configure/upload">
                              Create case
                              <ArrowRightIcon className="ml-1.5 h-5 w-5" />
                           </Link>
                        </Button>
                     </>
                  ) : (
                     <>
                        <Button size="sm" variant="ghost" asChild>
                           <Link href="/api/auth/register">Sign up</Link>
                        </Button>
                        <Button size="sm" variant="ghost" asChild>
                           <Link href="/api/auth/login">Login</Link>
                        </Button>

                        <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                        <Button size="sm" className="hidden sm:flex item-center gap-1" asChild>
                           <Link href="/configure/upload">
                              Create case
                              <ArrowRightIcon className="ml-1.5 h-5 w-5" />
                           </Link>
                        </Button>
                     </>
                  )}
               </div>
            </div>
         </MaxWidthWrapper>
      </nav>
   );
};
