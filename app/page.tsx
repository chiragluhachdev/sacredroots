import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TempleCard } from "@/components/TempleCard";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroStats } from "@/components/hero/HeroStats";
import { CategorySection } from "@/components/home/CategorySection";
import { ExploreIndiaSection } from "@/components/home/ExploreIndiaSection";
import { TempleOfTheWeekSection } from '@/components/home/TempleOfTheWeekSection';
import { UpcomingFestivalsSection } from '@/components/home/UpcomingFestivalsSection';
import connectToDatabase from '@/lib/db/connect';
import SiteSettings from '@/lib/db/models/SiteSettings';
import Temple from '@/lib/db/models/Temple';

export default async function Home() {
  await connectToDatabase();
  const settings = await SiteSettings.findOne().lean();
  const featuredTemples = await Temple.find({ featured: true }).limit(4).lean();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[100svh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={settings?.hero?.backgroundImageUrl || "/thebgimg.png"}
            alt="Majestic Indian temple gopuram glowing at sunset"
            fill
            className="object-cover object-[87.4%_15%] sm:object-[72%_1%] animate-kenburns"
            sizes="100vw"
            priority
          />
          {/* Gradients to ensure text readability on the left and bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        </div>

        {/* Content — vertically centred, grows to fill available space */}
        <div className="relative z-10 flex-1 flex items-center">
          <HeroContent 
            title={settings?.hero?.title} 
            titleHighlighted={settings?.hero?.titleHighlighted}
            subtitle={settings?.hero?.subtitle} 
            description={settings?.hero?.description}
          />
        </div>

        {/* Stats Bar — sits in the normal flow at the bottom of the hero */}
        <HeroStats />
      </section>

      {/* Featured Temples Section */}
      <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#0A1A14]">Featured Temples</h2>
            <p className="text-[#A3B3AA] mt-4 text-lg">Discover the most iconic spiritual destinations.</p>
          </div>
        </div>
        
        {featuredTemples.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTemples.map((temple: any) => (
              <TempleCard key={temple._id.toString()} temple={{
                id: temple._id.toString(),
                name: temple.name,
                state: temple.state,
                district: temple.district,
                city: temple.district, // using district as city
                mainDeity: temple.deity,
                otherDeities: [],
                description: temple.overview,
                overview: temple.overview,
                history: temple.history,
                architecture: temple.facts?.architecture || "",
                importance: "",
                festivals: [],
                timings: temple.info?.timings || "",
                entryFee: temple.info?.entryFee || "",
                dressCode: temple.info?.dressCode || "",
                photographyAllowed: true,
                latitude: 0,
                longitude: 0,
                bestTimeToVisit: temple.info?.bestTime || "",
                facilities: [],
                nearbyPlaces: [],
                coverImage: temple.heroImage,
                gallery: temple.gallery || [],
                category: temple.highlights?.[0] || "Temple",
                slug: temple.slug
              }} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-white rounded-2xl border border-[#E8E1D3]">
            <p className="text-gray-500">No temples found. Please add them via the Admin Panel.</p>
          </div>
        )}
      </section>

      <CategorySection />

      <ExploreIndiaSection />

      <TempleOfTheWeekSection />

      <UpcomingFestivalsSection />

    </div>
  );
}
