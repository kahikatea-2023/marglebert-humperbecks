import * as elements from 'typed-html'

export function Aside() {
  return (
    <nav class="flex flex-col gap-3">
      <ul>
        <li>
          <h3 class="bg-gray-300 rounded-tl rounded-tr font-light pl-2">
            Home
          </h3>
        </li>

        <li>
          <a href="/classical/best-versions/">Best Versions</a>
        </li>
        <li>
          <a href="/classical/sets/">Boxed Sets</a>
        </li>
        <li>
          <a href="/classical/specials/">Naxos 2023 releases</a>
        </li>
        <li>
          <a href="/classical/spotlight/">Classical Award Winners</a>
        </li>
        <li>
          <a href="/classical/rare/">Marbecks Collectables</a>
        </li>

        <li>
          <a href="/cd/specials/">On Sale</a>
        </li>
        <li>
          <a href="/cd/spotlight/">Hidden Treasures</a>
        </li>
        <li>
          <a href="/cd/rare/">Rare &amp; Collectable</a>
        </li>

        <li>
          <a href="/dvd/specials/">Must Watch!</a>
        </li>

        <li>
          <a href="/vouchers/">Gift Vouchers</a>
        </li>
        <li>
          <a href="/hardware/">Accessories</a>
        </li>
        <li>
          <a href="/hardware/storage/">Storage</a>
        </li>
      </ul>

      <ul>
        <li>
          <h3 class="bg-gray-300 rounded-tl rounded-tr font-light pl-2">
            Info
          </h3>
        </li>
        <li>
          <a href="/info/">Info / Help</a>
        </li>
        <li>
          <a href="/newsletters/">Newsletters</a>
        </li>
        <li>
          <a href="/about/">About Us</a>
        </li>
        <li>
          <a href="/privacy/">Privacy</a>
        </li>
      </ul>
    </nav>
  )
}
