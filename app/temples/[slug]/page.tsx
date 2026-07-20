import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Clock, Ticket, Camera, Shirt, Navigation, Calendar, Info } from "lucide-react";
import { temples } from "@/lib/data/temples";

interface TemplePageProps {
  params: Promise<{
    slug: string;
  }>;
}

import type { Metadata } from "next";

export async function generateMetadata({ params }: TemplePageProps): Promise<Metadata> {
  const { slug } = await params;
  const temple = temples.find((t) => t.slug === slug);

  if (!temple) {
    return {
      title: "Temple Not Found - Sacred Roots",
    };
  }

  return {
    title: `${temple.name} | Sacred Roots`,
    description: temple.description,
    openGraph: {
      title: `${temple.name} | Sacred Roots`,
      description: temple.description,
      images: [temple.coverImage],
    },
  };
}

export async function generateStaticParams() {
  return temples.map((temple) => ({
    slug: temple.slug,
  }));
}

export default async function TemplePage({ params }: TemplePageProps) {
  const { slug } = await params;
  const temple = temples.find((t) => t.slug === slug);

  if (!temple) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-background pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <Image 
            src={temple.coverImage} 
            alt={temple.name} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 w-full">
          <Link href="/temples" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Temples
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-white text-xs font-medium">
              {temple.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
              <MapPin className="mr-1.5 h-3.5 w-3.5" /> {temple.city}, {temple.state}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight">
            {temple.name}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            
            {/* Overview */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {temple.overview}
              </p>
            </section>

            {/* History & Architecture */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">History</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {temple.history}
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Architecture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {temple.architecture}
                </p>
              </div>
            </section>

            {/* Importance */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Spiritual Significance</h2>
              <p className="text-lg text-muted-foreground leading-relaxed bg-primary/5 p-6 rounded-2xl border border-primary/10 border-l-4 border-l-primary">
                {temple.importance}
              </p>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {temple.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                    <Image 
                      src={image} 
                      alt={`${temple.name} gallery image ${index + 1}`} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar / Quick Info */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 flex flex-col gap-6">
              
              {/* Deity Info */}
              <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 pb-4 border-b border-border flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" /> Deities
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Main Deity</p>
                    <p className="font-medium text-lg text-primary">{temple.mainDeity}</p>
                  </div>
                  {temple.otherDeities.length > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Other Deities</p>
                      <div className="flex flex-wrap gap-2">
                        {temple.otherDeities.map((deity) => (
                          <span key={deity} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border border-border">
                            {deity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Visitor Info */}
              <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">Visitor Information</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 p-2 bg-secondary rounded-lg text-primary"><Clock className="h-5 w-5" /></div>
                    <div>
                      <p className="font-medium text-foreground">Darshan Timings</p>
                      <p className="text-sm text-muted-foreground mt-1">{temple.timings}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 p-2 bg-secondary rounded-lg text-primary"><Ticket className="h-5 w-5" /></div>
                    <div>
                      <p className="font-medium text-foreground">Entry Fee</p>
                      <p className="text-sm text-muted-foreground mt-1">{temple.entryFee}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 p-2 bg-secondary rounded-lg text-primary"><Shirt className="h-5 w-5" /></div>
                    <div>
                      <p className="font-medium text-foreground">Dress Code</p>
                      <p className="text-sm text-muted-foreground mt-1">{temple.dressCode}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 p-2 bg-secondary rounded-lg text-primary"><Camera className="h-5 w-5" /></div>
                    <div>
                      <p className="font-medium text-foreground">Photography</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {temple.photographyAllowed ? "Allowed in designated areas" : "Strictly prohibited"}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 p-2 bg-secondary rounded-lg text-primary"><Calendar className="h-5 w-5" /></div>
                    <div>
                      <p className="font-medium text-foreground">Best Time to Visit</p>
                      <p className="text-sm text-muted-foreground mt-1">{temple.bestTimeToVisit}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Location Action */}
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${temple.latitude},${temple.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-md"
              >
                <Navigation className="h-5 w-5" /> Get Directions on Map
              </a>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
