import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { temples } from "@/lib/data/temples";
import { TempleCard } from "@/components/TempleCard";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroStats } from "@/components/hero/HeroStats";

export default function Home() {
  const featuredTemples = temples.slice(0, 6);
  
  const categories = [
    { name: "Jyotirlinga", count: 12, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop" },
    { name: "Divya Desam", count: 108, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop" },
    { name: "Shakti Peeth", count: 51, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop" },
    { name: "Char Dham", count: 4, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[100svh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/thebgimg.png"
            alt="Majestic Indian temple gopuram glowing at sunset"
            fill
            className="object-cover object-[87.4%_15%] sm:object-[72%_1%] animate-kenburns"
            sizes="100vw"
            preload
          />
          {/* Gradients to ensure text readability on the left and bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        </div>

        {/* Content — vertically centred, grows to fill available space */}
        <div className="relative z-10 flex-1 flex items-center">
          <HeroContent />
        </div>

        {/* Stats Bar — sits in the normal flow at the bottom of the hero */}
        <HeroStats />
      </section>

      {/* Featured Temples Section */}
      <section className="py-24 bg-background w-full">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Featured Temples</h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
                Curated architectural marvels and highly revered shrines to begin your spiritual journey.
              </p>
            </div>
            <Link href="/temples" className="inline-flex items-center text-primary font-medium hover:underline group whitespace-nowrap">
              Explore All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemples.map((temple) => (
              <TempleCard key={temple.id} temple={temple} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-24 bg-secondary w-full border-y border-border">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Sacred Paths</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover temples by their spiritual significance and ancient classifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link href={`/temples?category=${category.name}`} key={category.name} className="group block relative h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm font-medium">{category.count} Destinations</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-32 bg-background w-full relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12 relative z-10 flex flex-col items-center text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground max-w-3xl leading-tight">
            "A temple is not merely a structure of stone, but a living embodiment of the divine."
          </h2>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl">
            Join thousands of seekers in discovering the hidden stories, architectural genius, and spiritual essence of India.
          </p>
          <Link href="/temples" className="mt-12 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg">
            Start Discovering
          </Link>
        </div>
      </section>
    </div>
  );
}
