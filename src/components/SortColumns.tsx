import * as elements from 'typed-html'

export function SortColumns({ query }: { query: Record<string, unknown> }) {
  return (
    <div>
      <section>
        <button>Sort by</button>
      </section>
      <div class="text-left">
        <a
          href={`/search?q=${query.q}&sort=artist&direction=${
            query.direction === 'desc' ? 'asc' : 'desc'
          }
              `}
        >
          Artist
        </a>
        <a
          href={`/search?q=${query.q}&sort=title&direction=${
            query.direction === 'desc' ? 'asc' : 'desc'
          }`}
        >
          Title
        </a>
        <a
          href={`/search?q=${query.q}&sort=price&direction=${
            query.direction === 'desc' ? 'asc' : 'desc'
          }`}
        >
          Price
        </a>
        <a
          href={`/search?q=${query.q}&sort=releaseDate&direction=${
            query.direction === 'desc' ? 'asc' : 'desc'
          }`}
        >
          Release Date
        </a>
        <a
          href={`/search?q=${query.q}&sort=format&direction=${
            query.direction === 'desc' ? 'asc' : 'desc'
          }`}
        >
          Format
        </a>
        <a
          href={`/search?q=${query.q}&sort=availability&direction=${
            query.direction === 'desc' ? 'asc' : 'desc'
          }`}
        >
          Availability
        </a>
      </div>
    </div>
  )
}
