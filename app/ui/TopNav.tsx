/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9Yias8DjR7V
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export default function Component() {
  return (
    <nav className="fixed inset-x-0 top-0 flex h-14 shadow z-50 md:px-40 px-12 bg-blue-primary">
      <nav className="  w-full h-full flex align-center text-white">
      <Link className="flex items-center space-x-2 text-xl font-medium md:space-x-4 lg:space-x-6" href="https://mpsharma.com">
        M P Sharma
      </Link>
      </nav>
      <nav className="ml-auto flex items-center space-x-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-6">
              <Link className="flex w-full items-center py-2 text-sm font-medium" href="#">
                About
              </Link>
              <Link className="flex w-full items-center py-2 text-sm font-medium" href="#">
                Contact
              </Link>
              <Link className="flex w-full items-center py-2 text-sm font-medium" href="#">
                Achievements
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
      <nav className="ml-auto hidden md:flex items-center space-x-4 text-white">
        <Link aria-current="page" className="text-sm font-medium hover:underline" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Contact
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Achievements
        </Link>
      </nav>
    </nav>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
