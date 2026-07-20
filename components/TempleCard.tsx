import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Temple } from "@/types/temple";
import { Badge } from "@/components/ui/badge";

interface TempleCardProps {
  temple: Temple;
}

export function TempleCard({ temple }: TempleCardProps) {
  return (
    <Link href={`/temples/${temple.slug}`} className="group block">
      <div className="flex flex-col gap-4 overflow-hidden rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:shadow-lg hover:border-border">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={temple.coverImage}
            alt={temple.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm hover:bg-background text-xs font-medium px-2.5 py-0.5">
              {temple.category}
            </Badge>
          </div>
        </div>
        
        <div className="flex flex-col flex-1 gap-2 pt-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-xl font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {temple.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="line-clamp-1">{temple.city}, {temple.state}</span>
          </div>
          
          <p className="mt-1 text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed">
            {temple.description}
          </p>
          
          <div className="mt-4 flex items-center justify-between pt-2 border-t border-border/50">
            <span className="text-xs font-medium text-foreground">Main Deity</span>
            <span className="text-xs font-medium text-primary line-clamp-1">{temple.mainDeity}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
