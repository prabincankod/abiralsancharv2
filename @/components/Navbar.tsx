import { Menu } from "lucide-react"
import { Button } from "./ui/button"

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

const Navbar = () => {
    return (<div className="flex flex-row justify-between px-10 py-4 bg-primary items-center text-primary-foreground font-extrabold">
        <div className="logo">Homepage</div>
        <div className="hamburger md:hidden block">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline"><Menu /></Button>
                </SheetTrigger>
                <SheetContent>
                    <div className="grid gap-4 py-4">
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    </div>)
}

export default Navbar