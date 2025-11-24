import type { Product } from "../models/Product";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Forest Daydream",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Soft and dreamy forest artwork.",
    longDescription:
      "A gentle and atmospheric painting of a young girl resting in a quiet forest glade. The muted tones and soft brushwork create a calming, nostalgic feeling — perfect for bedrooms, creative spaces, and cozy corners.",
  },
  {
    id: "2",
    title: "Mythic Battle",
    price: 150,
    imageURL:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Dramatic classical myth scene.",
    longDescription:
      "A powerful and dynamic baroque-inspired artwork depicting gods, warriors, and mythological chaos. This poster brings energy, storytelling and bold visual movement — ideal for living rooms or statement walls.",
  },
  {
    id: "3",
    title: "Hidden Valley",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Very Mystical fantasy landscape.",
    longDescription:
      "A richly detailed fantasy valley full of depth, atmosphere and imagination. Mist, mountains and golden light shape a world that feels both ancient and magical. Perfect for fantasy lovers and cozy interiors.",
  },
  {
    id: "4",
    title: "Castle at Dawn",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Majestic castle in morning light.",
    longDescription:
      "A fairytale-like castle standing tall against a warm dawn sky. This artwork blends history, fantasy, and romance — a timeless poster that adds elegance to hallways, bedrooms, and workspaces.",
  },
  {
    id: "5",
    title: "Old Country Road",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1579541513287-3f17a5d8d62c?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Calm rural nature scene. Beautiful trees",
    longDescription:
      "A soothing 19th-century landscape with soft colors and peaceful country charm. This poster brings quietness and natural beauty, perfect for minimalist homes or rustic interior styles.",
  },
  {
    id: "6",
    title: "Garden Party",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1584446922442-7ac6b8c118f3?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Whimsical animals at a feast.",
    longDescription:
      "A playful and surreal illustration where birds and woodland animals gather for a charming garden feast. Detailed, imaginative and full of personality — a perfect conversation piece.",
  },
  {
    id: "7",
    title: "Meadow Silence",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Dreamy peaceful meadow scene.",
    longDescription:
      "A tranquil moment captured in soft colors and gentle brushstrokes — a girl sitting quietly among flowers. This poster creates a warm, nostalgic and calming atmosphere.",
  },
  {
    id: "8",
    title: "Heavenly Chaos",
    price: 150,
    imageURL:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Powerful baroque energy. ",
    longDescription:
      "A dramatic and vibrant explosion of movement, figures and clouds inspired by classic baroque art. Perfect for anyone who loves expressive, bold and emotional artwork.",
  },
  {
    id: "9",
    title: "Mountain Refuge",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Atmospheric mountain home.",
    longDescription:
      "A rich and emotional landscape of a small home hidden within a rugged mountain scene. This poster brings depth, warmth and a sense of adventure — perfect for reading nooks or creative spaces.",
  },
  {
    id: "10",
    title: "Fairytale Castle",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Classic fairytale tower.",
    longDescription:
      "A dreamy fairytale castle rising from misty cliffs. Soft colors and magical atmosphere make this poster ideal for bedrooms, kids’ rooms or anyone who loves fantasy aesthetics.",
  },
  {
    id: "11",
    title: "Golden Fields",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1579541513287-3f17a5d8d62c?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Warm golden countryside.",
    longDescription:
      "A serene rural landscape painted in gentle golden tones. Perfect for adding warmth and calm to modern minimalist homes, Scandinavian interiors or rustic cottages.",
  },
  {
    id: "12",
    title: "Wildlife Gathering",
    price: 150,
    imageURL:
      "https://images.unsplash.com/photo-1584446922442-7ac6b8c118f3?w=700&auto=format&fit=crop&q=60",

    shortDescription: "Charming surreal animal scene.",
    longDescription:
      "A whimsical and humorous scene of birds and woodland animals gathered together. Rich in detail and personality, this artwork brings creativity and charm to any wall.",
  },
];

export const getProducts = async (): Promise<Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return PRODUCTS;
};

export const getProduct = async (id: string): Promise<Product | null> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const product = PRODUCTS.find((p) => p.id === id) ?? null;

  return product;
};
