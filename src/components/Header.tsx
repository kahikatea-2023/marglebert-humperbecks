import * as elements from 'typed-html'

export function Header() {
  return (
    <header class="bg-red-500">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center gap-4">
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
    </header>
  )
}
