"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleLogout = () => {
    mutate();
  };
  
  return (
    <div className="">
      <p>Only visible to authorized users.</p>
      <Button variant={"outline"} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
