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
    albums.push({
      title: faker.music.songName(),
      artist: faker.person.fullName(),
      releaseDate: faker.number.int({ min: 1960, max: 2023 }),
      price: Number(faker.number.int({ min: 15, max: 60 }).toFixed(2)),
      format: ["LP", "2 LP", "CD"][faker.number.int({ min: 0, max: 2 })],
      availability: false,
      img: images[faker.number.int({ min: 0, max: images.length - 1 })],
    });
  }
  
  return albums;
}

