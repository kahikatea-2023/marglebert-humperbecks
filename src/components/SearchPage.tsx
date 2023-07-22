import * as elements from 'typed-html'
import { Album } from '../db/schema'
import { Card } from './Card'
import { SortColumns } from './SortColumns'
import { Link } from './Link'

export function SearchPage({
  results,
  query,
}: {
  query: Record<string, unknown>
  results: Album[]
}) {
  return (
    <main>
      <div class="space-y-10">
        <div class="flex gap-4">
          <aside>
            <h3>Filter by:</h3>
            <div>
              <h4 class="bg-gray-300">Format</h4>
              <ul>
                <li>
                  <Link href={`/search?q=${query.q}&format=2 LP`}>2 LP</Link>
                </li>
                <li>
                  <Link href={`/search?q=${query.q}&format=CD`}>CD</Link>
                </li>
                <li>
                  <Link href={`/search?q=${query.q}&format=LP`}>LP</Link>
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
            <h1>Search Results</h1>
            <div>
              <h2>Displaying Items 1- 20 of 1409</h2>
            </div>
            <SortColumns query={query} />
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
