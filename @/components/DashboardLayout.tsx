import { ReactNode, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useRouter } from "next/router";
import { Toaster } from "@/components/ui/sonner";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Articles", link: "/dashboard/article" },
    { name: "Categories", link: "/dashboard/category" },
  ];
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-primary-foreground px-4 py-2">
        <div className="logo font-bold">abiral</div>
        <div className="flex flex-row gap-5">
          {navLinks.map((navLink) => (
            <Link key={navLink.name} href={navLink.link}>
              <div
                className={`  ${
                  router.asPath === navLink.link
                    ? "bg-primary"
                    : "bg-secondary-foreground"
                } rounded-md p-2 text-primary-foreground`}
              >
                {navLink.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="avatar">
          <Avatar>
            <AvatarImage src="https://github.com/prabincankod.png" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {mounted && (
        <div className="mx-6 my-3">
          {children}
          <Toaster richColors />
        </div>
      )}
    </>
  );
};
export default DashboardLayout;
