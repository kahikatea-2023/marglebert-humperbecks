import * as elements from 'typed-html'
import { Link } from './SortColumn'

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
        <button>Sort by</button>
      </section>
      <div class="text-left">
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
