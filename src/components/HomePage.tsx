import * as elements from 'typed-html'

export function HomePage() {
  return (
    <div class="flex flex-row">
      <aside class="bg-slate-300 basis-1/12">Aside</aside>
      <main class="bg-slate-700 grow">main</main>
    </div>
  )
}
