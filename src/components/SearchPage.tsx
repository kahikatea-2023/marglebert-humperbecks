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
    <body>
      <h1>Search Results</h1>
      <div>
        <h2>Displaying Items 1- 20 of 1409</h2>
        <section>
          <button>Sort by</button>
        </section>
        {/* Card List */}
        <div class="text-left">
          <a href={`/search?q=${query.q}&sort=artist`}>artist</a>
          <a href={`/search?q=${query.q}&sort=title`}>title</a>
          <a href={`/search?q=${query.q}&sort=price`}>price</a>
          <a href={`/search?q=${query.q}&sort=releaseDate`}>Release Date</a>
          <a href={`/search?q=${query.q}&sort=format`}>Format</a>
          <a href={`/search?q=${query.q}&sort=availability`}>Availability</a>
        </div>
        <div
          id="results"
          class="flex flex-col p-3 border-solid border-2 border-gray-400"
        >
          {results.map((result) => (
            <Card {...result} />
          ))}
        </div>
      </div>
    </body>
  )
}
