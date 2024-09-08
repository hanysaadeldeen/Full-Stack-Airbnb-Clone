import { Button } from "@/components/ui/button";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="pt-20 px-10">
      <h1>the content of the page</h1>
      <Button>Button</Button>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
