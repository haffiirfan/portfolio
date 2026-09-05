import { ArrowUpRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNavToggle } from "./ui/resizable-navbar";

type SheetDemoProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SheetDemo({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SheetDemoProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (path === "/" || path === "") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (path.includes("#")) {
      const [targetPathPart, hash] = path.split("#");
      const targetPath = targetPathPart || "/";

      if (location.pathname === targetPath) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(`${targetPath}#${hash}`);
      }
      return;
    }

    navigate(path.startsWith("/") ? path : `/${path}`);
  };

  return (
    <Sheet
      open={isMobileMenuOpen} // controlled open state
      onOpenChange={(open) => setIsMobileMenuOpen(open)} // sync state with sheet
    >
      <SheetTrigger asChild>
        <MobileNavToggle
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </SheetTrigger>

      <SheetContent side="right" className="bg-black border-none">
        <SheetHeader>
         {/* <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={50}
        height={50}
      /> */}
        </SheetHeader>
        <SheetDescription className="mt-7">

<div className="grid flex-1 auto-rows-min gap-6 px-4">
  {[
  { label: "Home", path: "/" },
  { label: "About", path: "/#resume" },
  { label: "FYP", path: "/#project" },
  { label: "All Projects", path: "/all-projects" },
  { label: "Contact", path: "/#contact" },
].map((item) => (
  <Link
    key={item.path}
    to={item.path}
    className="flex items-center py-4 px-3 border-b text-lg border-[#FFFFFF33] text-white justify-between"
    onClick={(e) => handleMobileNavClick(e, item.path)}
  >
    <p id="sidebar-items">{item.label}</p>
    <ArrowUpRight />
  </Link>
))}

</div>

</SheetDescription>
        <SheetFooter>
          {/* footer content */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

