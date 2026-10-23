
import { Construction } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-6">
      <h1 className="flex flex-wrap items-center justify-center gap-4 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Under Construction
        <Construction
          size={48}
          strokeWidth={1.8}
          className="shrink-0"
        />
      </h1>
    </div>
  );
};

export default Contact;
