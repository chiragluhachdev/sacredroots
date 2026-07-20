import Link from "next/link";
import { ArrowLeft, Map } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary mb-8">
        <Map className="h-12 w-12" />
      </div>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Wandering off the path</h2>
      <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10">
        It seems the sacred site you are looking for is not found in our records or has been moved.
      </p>
      <Link href="/temples" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors shadow-md">
        <ArrowLeft className="mr-2 h-4 w-4" /> Return to Temples
      </Link>
    </div>
  );
}
