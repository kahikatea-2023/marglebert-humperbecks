import * as elements from 'typed-html'
import { Album } from '../db/schema'
import { Aside } from './Aside'

export function HomePage({ albums }: { albums: Album[] }) {
  return (
    <div class="flex flex-row gap-3 mt-2">
      <Aside />
      <main class="grow rounded border">
        <div class="grid grid-cols-2 gap-4 p-3">
          {albums.map((album) => (
            <div class="flex p-3 bg-gray-200 gap-4">
              <img src={album.img} alt={album.title} class="w-40" />
              <div class="flex flex-col gap-2">
                <div>
                  <p class="text-orange-700">{album.title}</p>
                  <p>{album.artist}</p>
                </div>
                <p class="italic">
                  {album.description.split(' ').slice(0, 50)}
                </p>
                <p>${album.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
