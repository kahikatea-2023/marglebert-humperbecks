import * as elements from 'typed-html'
import { Album } from '../db/schema'

export function Card({
  img,
  artist,
  title,
  releaseDate,
  price,
  availability,
  description,
}: Album) {
  return (
    <div class="flex flex-1 justify-between border-solid p-2 border-2 border-gray-600">
      {/* Img div */}
      <div class="border-solid border-2 border-gray-400 w-40 h-40">
        <img src={img} alt="spinning record gif" />
      </div>
      {/* Text div */}
      <div class="w-3/4">
        <p class="text-orange-400">{artist}</p>
        <p class="italic">{title}</p>({releaseDate})<p>{description}</p>
      </div>
      {/* Buttons on end */}
      <div>
        {availability ? (
          <button class="rounded p-1 bg-gray-200 border-solid border-2 border-gray-600">
            Add to Cart
          </button>
        ) : null}
        <p>
          Price <span>${price}</span>
        </p>
        <p class={availability ? 'text-green-600' : 'text-red-600'}>
          {availability ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    </div>
  )
}
