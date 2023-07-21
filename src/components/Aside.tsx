import * as elements from 'typed-html'

export function Aside() {
  return (
    <nav class="sidenav">
      <ul>
        <li>
          <h3>Home</h3>
        </li>

        <li class="bestversions">
          <a href="/classical/best-versions/">Best Versions</a>
        </li>
        <li class="sets">
          <a href="/classical/sets/">Boxed Sets</a>
        </li>
        <li class="specials">
          <a href="/classical/specials/">Naxos 2023 releases</a>
        </li>
        <li class="spotlight">
          <a href="/classical/spotlight/">Classical Award Winners</a>
        </li>
        <li class="rare">
          <a href="/classical/rare/">Marbecks Collectables</a>
        </li>

        <li class="specials">
          <a href="/cd/specials/">On Sale</a>
        </li>
        <li class="spotlight">
          <a href="/cd/spotlight/">Hidden Treasures</a>
        </li>
        <li class="rare">
          <a href="/cd/rare/">Rare &amp; Collectable</a>
        </li>

        <li class="specials">
          <a href="/dvd/specials/">Must Watch!</a>
        </li>

        <li class="vouchers">
          <a href="/vouchers/">Gift Vouchers</a>
        </li>
        <li class="hardware">
          <a href="/hardware/">Accessories</a>
        </li>
        <li class="storage">
          <a href="/hardware/storage/">Storage</a>
        </li>
      </ul>

      <ul class="misc">
        <li>
          <h3>Info</h3>
        </li>
        <li class="info">
          <a href="/info/">Info / Help</a>
        </li>
        <li class="newsletters">
          <a href="/newsletters/">Newsletters</a>
        </li>
        <li class="about">
          <a href="/about/">About Us</a>
        </li>
        <li class="privacy">
          <a href="/privacy/">Privacy</a>
        </li>
      </ul>
    </nav>
  )
}
