import { Menu } from "lucide-react";
import { Button } from "./ui/button";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-primary px-10 py-4 font-extrabold text-primary-foreground">
      <div className="logo">Homepage</div>
      <div className="hamburger block md:hidden">
        <Sheet>
          <SheetTrigger asChild>

              <Menu className="hover:cursor-pointer" />

          </SheetTrigger>
          <SheetContent className="w-3/6">
          <div className="flex flex-col text-center">
              <div className=" text-2xl font-bold">
                Abiral<span className="text-primary">Sanchar</span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
