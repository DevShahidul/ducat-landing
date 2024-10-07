import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

function Header () {
   return (
      <header className="flex items-center justify-between px-6 md:px-10 xl:px-20 py-3 md:py-4 xl:py-8">
         <Link href="/">
            <Image src="/assets/images/main-logo.png" width={222} height={46} alt="Ducat" />
         </Link>
         <nav className="flex items-center gap-6">
            <Link href="/#vault">Vault</Link>
            <Link href="/#liquidations">Liquidations</Link>
            <Link href="/#documentation">Documentation</Link>
            <Link href="/#vault">Vault</Link>
            <Link href="/#vault">Vault</Link>
            <Button asChild>
               <Link href="/">Launch App</Link>
            </Button>
         </nav>
      </header>
   )
}

export default Header