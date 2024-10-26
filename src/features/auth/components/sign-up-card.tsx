import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DottedSeparator } from "@/components/dotteed-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          By Sign up, you agree to our{" "}
          <Link href="/privacy">
            <span className="text-blue-700">Privacy Police</span>
          </Link>{" "}
          and{" "}
          <Link href="/privacy">
            <span className="text-blue-700">Terms of Services.</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="text"
            value={""}
            onChange={() => {}}
            placeholder="Enter your name"
            disabled={false}
          />
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
          />

          <Input
            required
            type="password"
            value={""}
            min={8}
            max={256}
            onChange={() => {}}
            placeholder="Enter password"
            disabled={false}
          />

          <Button disabled={false} size="lg" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
      <div className="px-7 ">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          disabled={false}
          className="w-full"
          size="lg"
          variant="secondary"
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button
          disabled={false}
          className="w-full"
          size="lg"
          variant="secondary"
        >
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>
      </CardContent>
    </Card>
  );
};
