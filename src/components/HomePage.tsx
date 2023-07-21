import * as elements from 'typed-html'
import { Albums } from '../db/schema'

export function HomePage({
  children,
  albums,
}: {
  children?: any
  albums: Albums[]
}) {
  return (
    <div class="flex flex-row">
      <aside class="bg-slate-300 basis-1/12">Aside</aside>
      <main class="grow">
        <div class="flex flex-row flex-wrap gap-4">
          {albums.map((album) => (
            <div class="w-1/4">
              <img src={album.img} alt={album.title} />
              <p>{album.title}</p>
              <p>{album.artist}</p>
              <p>{album.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
