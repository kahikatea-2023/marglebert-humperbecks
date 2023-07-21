import { faker } from "@faker-js/faker";
import { Album } from "./schema";

export function seedGenerator() {
  faker.seed(42);

  const images = [
    "https://i.scdn.co/image/ab67616d00001e02a6abbc30288e0ac3d5b6bf3f",
    "https://i.scdn.co/image/ab67616d00001e0277ae4a5e5ab1cc74194a4158",
    "https://i.scdn.co/image/ab67616d00001e0265563003026cc2f4951e8164",
    "https://i.scdn.co/image/ab67616d00001e02a761a6c5a15dcd7b837b42c2",
    "https://i.scdn.co/image/ab67616d00001e020fb08616c78d44ceb4c8d061",
    "https://i.scdn.co/image/ab67616d00001e0260624c0781fd787c9aa4699c",
    "https://i.scdn.co/image/ab67616d00001e021ae967e4a02c7a39eb3c189b",
    "https://i.scdn.co/image/ab67616d00001e026ef89a63afe94445d25b7233",
    "https://i.scdn.co/image/ab67616d00001e02003381f0f8b9eb37a06eeb3f",
    "https://i.scdn.co/image/ab67616d00001e023b248f42fb53c64faf1d748e",
  ];
  
  const albums = [] as Omit<Album, "id">[];

  for (let i = 0; i < 200; i++) {
    const artist = faker.person.fullName()
    const title = faker.music.songName()

    albums.push({
      title,
      artist,
      releaseDate: faker.number.int({ min: 1960, max: 2023 }),
      price: Number(faker.number.int({ min: 15, max: 60 }).toFixed(2)),
      format: ["LP", "2 LP", "CD"][faker.number.int({ min: 0, max: 2 })],
      availability: faker.datatype.boolean(),
      img: images[faker.number.int({ min: 0, max: images.length - 1 })],
      description: descriptionMaker(artist, title)
    });
  }

  return albums;
}

function descriptionMaker (artist: string, title: string): string {
  switch(faker.number.int({ min: 1, max: 5 })) {
    case 1: return `It takes an extraordinary artist to re-imagine some of the most beloved songs of the 20th century and make them completely their own. And that's precisely what ${artist} has accomplished with their brand-new album, ${title}.`
    case 2: return `${artist}'s ${title} is a memoir and a love letter. It is the story of their life, their growth and revelations, the wisdom of their hometown and the wisdom they could only gain once they left.`
    case 3: return `${artist}'s ${title} is is their tenth solo studio album and first of new material since 2014's self-titled record.`
    case 4: return `${title} is the new album by ${artist}, the LA-based singer-songwriter, producer, archer and Dr. Mario enthusiast ("I keep my Switch in my back pocket most days").`
    case 5: return `${artist} is a singer, songwriter, composer, producer and multi-instrumentalist based in South London. Primarily using their voice, a cello, and an array of effects units, they write ambient pop songs that are intimate, atmospheric, and totally enchanting.`
    default: return ""
  }
}