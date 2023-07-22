import * as elements from 'typed-html'
import { Album } from '../db/schema'
import { Card } from './Card'

export function SearchPage({
  results,
  query,
}: {
  query: Record<string, unknown>
  results: Album[]
}) {
  return (
    <main>
      <h1>Search Results</h1>
      <div class="space-y-10">
        <div>
          <h2>Displaying Items 1- 20 of 1409</h2>
        </div>
        <div class="flex gap-4">
          <aside>
            <h3>Filter by</h3>
            <div>
              <h4 class="bg-gray-300">Format</h4>
              <ul>
                <li>
                  <a href={`/search?q=${query.q}&format=2 LP`}>2 LP</a>
                </li>
                <li>
                  <a href={`/search?q=${query.q}&format=CD`}>CD</a>
                </li>
                <li>
                  <a href={`/search?q=${query.q}&format=LP`}>LP</a>
                </li>
              </ul>
            </div>
            <div>
              <label for="price">Price</label>
              <input type="range" id="price" name="price" min="0" max="11" />
            </div>
          </aside>
          <div
            id="results"
            class="grow flex flex-col p-3 border-solid border-2 border-gray-400"
          >
            <section>
              <button>Sort by</button>
            </section>
            <div class="text-left">
              <a href={`/search?q=${query.q}&sort=artist`}>Artist</a>
              <a href={`/search?q=${query.q}&sort=title`}>Title</a>
              <a href={`/search?q=${query.q}&sort=price`}>Price</a>
              <a href={`/search?q=${query.q}&sort=releaseDate`}>Release Date</a>
              <a href={`/search?q=${query.q}&sort=format`}>Format</a>
              <a href={`/search?q=${query.q}&sort=availability`}>
                Availability
              </a>
            </div>
            {results.map((result) => (
              <Card {...result} />
            ))}
            d
          </div>
        </div>
      </div>
    </main>
  )
}
