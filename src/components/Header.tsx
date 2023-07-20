import * as elements from 'typed-html'

export function Header() {
  return (
    <header class="bg-red-500 flex items-stretch">
      <div class="flex items-center gap-4">
        <h1 class="text-7xl font-bold leading-tight text-gray-900">Marbecks</h1>
        <div>
          <h1 class="text-3xl font-bold leading-tight text-gray-900 tracking-tighter">
            RECORD SHOP
          </h1>
          <h2 class="text-3xl font-bold  text-gray-900 tracking-widest">
            EST. 1934
          </h2>
        </div>
      </div>
      {/* TODO: This needs to be moved to the left  */}
      <div class="place-self-end">
        <p class="text-white uppercase">
          New Zealand's Leading Music Specialist
        </p>
      </div>
    </header>
  )
}
