import * as elements from 'typed-html'

export function SearchInput() {
  return (
    <div class="flex flex-row justify-end">
      <input
        class="border-solid border-2 border-gray-400"
        type="search"
        placeholder="Search for an album"
      />
      <button class="border-solid border-2 border-gray-400">Search</button>
    </div>
  )
}
