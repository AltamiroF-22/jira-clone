import { UserButton } from "@/features/auth/components/use-button";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between pt-4 px-6">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className=" text-muted-foreground">
          Monitor all of your projects and tasks here
        </p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};

export default Navbar;
