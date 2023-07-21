import * as elements from 'typed-html'

export function SearchInput() {
  return (
    <div class="flex flex-row justify-end">
      <form action="/search" method="post">
        <label for="search-input">Search</label>
        <input
          id="search-input"
          class="border-solid border-2 border-gray-400"
          type="search"
          name="q"
          placeholder="Search for an album"
        />
        <button class="border-solid border-2 border-gray-400">Search</button>
      </form>
    </div>
  )
}
