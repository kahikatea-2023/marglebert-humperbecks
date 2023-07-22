import * as elements from 'typed-html'
import { Link } from './Link'

export function SortColumns({ query }: { query: Record<string, unknown> }) {
  const columns = [
    'artist',
    'title',
    'releaseDate',
    'format',
    'availability',
    'price',
  ]

  return (
    <div>
      <section>
        <h3>Sort by</h3>
      </section>
      <div class="space-x-3">
        {columns.map((column) => (
          <Link
            href={`/search?q=${query.q}&sort=${column}&direction=${
              query.direction === 'desc' ? 'asc' : 'desc'
            }`}
          >
            <span class="capitalize">{column}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
