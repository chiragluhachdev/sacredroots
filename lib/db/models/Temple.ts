import mongoose, { Schema, Document } from 'mongoose';

export interface ITemple extends Document {
  name: string;
  slug: string;
  state: string;
  district: string;
  deity: string;
  heroImage: string;
  overview: string;
  highlights: string[];
  facts: {
    architecture: string;
    builtBy: string;
    era: string;
    timeTaken: string;
  };
  history: string;
  info: {
    timings: string;
    entryFee: string;
    dressCode: string;
    bestTime: string;
  };
  gallery: string[];
  location: {
    address: string;
    mapEmbedUrl: string;
  };
  related: Array<{
    name: string;
    state: string;
    imageUrl: string;
    slug: string;
  }>;
}

const TempleSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  deity: { type: String, required: true },
  heroImage: { type: String, required: true },
  overview: { type: String, required: true },
  highlights: [{ type: String }],
  facts: {
    architecture: { type: String },
    builtBy: { type: String },
    era: { type: String },
    timeTaken: { type: String },
  },
  history: { type: String, required: true },
  info: {
    timings: { type: String },
    entryFee: { type: String },
    dressCode: { type: String },
    bestTime: { type: String },
  },
  gallery: [{ type: String }],
  location: {
    address: { type: String },
    mapEmbedUrl: { type: String },
  },
  related: [{
    name: { type: String },
    state: { type: String },
    imageUrl: { type: String },
    slug: { type: String },
  }],
}, { timestamps: true });

export default mongoose.models.Temple || mongoose.model<ITemple>('Temple', TempleSchema);
