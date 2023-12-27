import { ReactNode, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-primary-foreground px-4 py-2">
        <div className="logo font-bold">abiral</div>
        <div className="avatar">
          <Avatar>
            <AvatarImage src="https://github.com/prabincankod.png" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {mounted && <div className="mx-6 my-3">{children}</div>}
    </>
  );
};
export default DashboardLayout;