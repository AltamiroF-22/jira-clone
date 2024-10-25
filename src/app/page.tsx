import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex">
      <Button disabled size="lg">
        Click me
      </Button>
      <Button variant="destructive" size="lg">
        Click me
      </Button>
      <Button variant="outline" size="lg">
        Click me
      </Button>
      <Button variant="ghost" size="lg">
        ghost
      </Button>
      <Button variant="muted" size="lg">
        Click me
      </Button>
      <Button variant="secondary" size="lg">
        secondary
      </Button>
      <Button variant="teritary" size="lg">
        secondary
      </Button>
      <Input />
      <p className=" text-red-500 font-semibold">junior </p>
    </div>
  );
}
