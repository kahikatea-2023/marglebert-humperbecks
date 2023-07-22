import * as elements from 'typed-html'

export function Link({ children, href }: elements.Children & { href: string }) {
  return (
    <a href={href} class="hover:text-orange-400 hover:underline">
      {children}
    </a>
  )
}
