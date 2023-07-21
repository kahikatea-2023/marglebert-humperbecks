import * as elements from 'typed-html'

interface Props {
  query?: Record<string, unknown>
}

export function SearchInput(props: Props) {
  return (
    <div class="flex flex-row justify-end">
      <form action="/search" method="get">
        <label for="search-input">Search</label>
        <input
          id="search-input"
          class="border-solid border-2 border-gray-400"
          type="search"
          name="q"
          placeholder="Search for an album"
          value={props.query ? (props.query.q as string) : ''}
        />
        <button class="border-solid border-2 border-gray-400">Search</button>
      </form>
    </div>
  )
}
