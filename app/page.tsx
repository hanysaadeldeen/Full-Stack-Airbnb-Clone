import { Button } from "@/components/ui/button";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      hello there
      <Toaster position="top-center" reverseOrder={false} />
      <Button>Button</Button>
    </div>
  );
}
