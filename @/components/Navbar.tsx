import { Menu } from "lucide-react";
import { Button } from "./ui/button";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-primary px-10 py-4 font-extrabold text-primary-foreground">
      <div className="logo">Homepage</div>
    </div>
  );
};

export default Navbar;
