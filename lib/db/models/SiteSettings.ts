import mongoose, { Schema, Document } from 'mongoose';

export interface ISiteSettings extends Document {
  hero: {
    title: string;
    subtitle: string;
    backgroundImageUrl: string;
  };
  footer: {
    mission: string;
    contactEmail: string;
    facebookUrl: string;
    twitterUrl: string;
    instagramUrl: string;
    youtubeUrl: string;
  };
  maintenanceMode: boolean;
}

const SiteSettingsSchema: Schema = new Schema({
  hero: {
    title: { type: String, default: "Discover India's Sacred Architecture" },
    subtitle: { type: String, default: "A premium directory of temples, heritage, and spirituality." },
    backgroundImageUrl: { type: String, default: "/thebgimg.png" },
  },
  footer: {
    mission: { type: String, default: "Dedicated to preserving, documenting, and celebrating the profound spiritual heritage and architectural marvels of temples across India." },
    contactEmail: { type: String, default: "contact@sacredroots.in" },
    facebookUrl: { type: String, default: "#" },
    twitterUrl: { type: String, default: "#" },
    instagramUrl: { type: String, default: "#" },
    youtubeUrl: { type: String, default: "#" },
  },
  maintenanceMode: { type: Boolean, default: false }
}, { timestamps: true });

// There should only ever be one settings document. We can hardcode an ID or always fetch the first one.
export default mongoose.models.SiteSettings || mongoose.model<ISiteSettings>('SiteSettings', SiteSettingsSchema);
