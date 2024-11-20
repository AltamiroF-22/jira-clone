import { getCurrent } from "@/features/auth/action";
import { UserButton } from "@/features/auth/components/use-button";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await getCurrent();

  if (!currentUser) redirect("/sign-in");

  return (
    <div className="">
      <UserButton />
    </div>
  );
}
