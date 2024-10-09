import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

function Header () {
   return (
      <header className="sticky top-0 left-0 z-50 flex items-center justify-between px-6 md:px-10 xl:px-20 py-3 md:py-4 xl:py-8 font-[family-name:var(--font-aeonik-pro)] bg-dark/95 backdrop-blur-sm before:h-36 before:w-full before:top-full before:left-0 before:absolute before:bg-gradient-to-b before:from-background/90 before:to-transparent">
         <Link href="/">
            <Image src="/assets/images/main-logo.png" width={222} height={46} alt="Ducat" />
         </Link>
         <nav className="flex items-center gap-6 overflow-clip">
            <Link href="/#vault">Vault</Link>
            <Link href="/#liquidations">Liquidations</Link>
            <Link href="/#documentation">Documentation</Link>
            <Link href="/#vault">Vault</Link>
            <Link href="/#vault">Vault</Link>
            <div className="relative z-10 after:absolute after:w-full after:h-full after:inset-0 after:bg-gradient-to-r after:from-gstart after:to-gstart after:blur-md after:z-[-1] after:transition-all after:duration-300 after:opacity-0 hover:after:opacity-100">
               <Button asChild className="overflow-hidden relative z-10 before:absolute before:z-[-1] before:w-full before:h-full before:bg-[linear-gradient(276.52deg,_rgba(255,_255,_255,_0)_-3.74%,_rgba(255,_255,_255,_0)_18.8%,_rgba(255,_255,_255,_0.5)_54.89%,_rgba(255,_255,_255,_0)_81.5%,_rgba(255,_255,_255,_0)_103.83%)] before:animate-moveover">
                  <Link href="/">Launch App</Link>
               </Button>
            </div>
         </nav>
      </header>
   )
}

export default Header