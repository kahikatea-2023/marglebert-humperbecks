import * as elements from 'typed-html'

export function SearchPage () {
  return ( 
  <body>
    <h1>Search Results</h1>
  <div>
    <h2>Displaying Items 1- 20 of 1409</h2>
    {/* Card List */}
    <div class="flex flex-col p-3 border-solid border-2 border-gray-400">
      {/* Card 1 */}
        <div class="flex flex-row flex-1 justify-between border-solid p-2 border-2 border-gray-600">
          {/* Img div */}
          <div class="border-solid border-2 border-gray-400 w-20 h-20">
          <img src="https://github.com/kahikatea-2023/marglebert-humperbecks/blob/main/src/public/record.gif?raw=true" alt="spinning record gif"/>
          </div>
          {/* Text div */}
          <div class="w-3/4">
            <p>Artist Name</p>
            <p>Album</p>
            <p>Description</p>
          </div>
          {/* Buttons on end */}
          <div>
            <button class="rounded p-1 bg-gray-200 border-solid border-2 border-gray-600">Add to Cart</button>
            <p>Price</p>
            <p>Stock</p>
          </div>
        </div>
      {/* Card 2 */}
           <div class="flex flex-row flex-1 justify-between border-solid p-2 border-2 border-gray-600">
          {/* Img div */}
          <div class="border-solid border-2 border-gray-400 w-20 h-20">
          <img src="https://github.com/kahikatea-2023/marglebert-humperbecks/blob/main/src/public/record.gif?raw=true" alt="spinning record gif"/>
          </div>
          {/* Text div */}
          <div class="w-3/4">
            <p>Artist Name</p>
            <p>Album</p>
            <p>Description</p>
          </div>
          {/* Buttons on end */}
          <div>
            <button class="p-1 bg-gray-200 border-solid border-2 border-gray-600">Add to Cart</button>
            <p>Price</p>
            <p>Stock</p>
          </div>
        </div>
      {/* Card 3 */}
           <div class="flex flex-row flex-1 justify-between border-solid p-2 border-2 border-gray-600">
          {/* Img div */}
          <div class="border-solid border-2 border-gray-400 w-20 h-20">
          <img src="https://github.com/kahikatea-2023/marglebert-humperbecks/blob/main/src/public/record.gif?raw=true" alt="spinning record gif"/>
          </div>
          {/* Text div */}
          <div class="w-3/4">
            <p>Artist Name</p>
            <p>Album</p>
            <p>Description</p>
          </div>
          {/* Buttons on end */}
          <div>
            <button class="p-1 bg-gray-200 border-solid border-2 border-gray-600">Add to Cart</button>
            <p>Price</p>
            <p>Stock</p>
          </div>
        </div>
      </div>
  </div>
  </body> );
}
