import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { Layout } from './layout'
import { Header } from './components/Header'
import { SearchPage } from './components/SearchPage'
import { HomePage } from './components/HomePage'
import { Album, albums } from './db/schema'
import { db } from './db'
import { Card } from './components/Card'

// Daph changes:

const app = new Elysia()
  .use(html())
  .get('/', ({ html }) => {
    const albums: Album[] = [
      {
        id: 1,
        title: 'The Miseducation of Lauryn Hill',
        artist: 'Lauryn Hill',
        price: 12.99,
        img: 'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Miseducation_of_Lauryn_Hill.jpg',
        availability: false,
        format: 'Vinyl',
        releaseDate: 1998,
      },
      {
        id: 2,
        title: 'The Miseducation of Lauryn Hill',
        artist: 'Lauryn Hill',
        price: 12.99,
        img: 'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Miseducation_of_Lauryn_Hill.jpg',
        availability: false,
        format: 'Vinyl',
        releaseDate: 1998,
      },
      {
        id: 3,
        title: 'The Miseducation of Lauryn Hill',
        artist: 'Lauryn Hill',
        price: 12.99,
        img: 'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Miseducation_of_Lauryn_Hill.jpg',
        availability: false,
        format: 'Vinyl',
        releaseDate: 1998,
      },
      {
        id: 4,
        title: 'The Miseducation of Lauryn Hill',
        artist: 'Lauryn Hill',
        price: 12.99,
        img: 'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Miseducation_of_Lauryn_Hill.jpg',
        availability: false,
        format: 'Vinyl',
        releaseDate: 1998,
      },
    ]
    return html(
      <Layout>
        <div>
          <Header />
          <HomePage albums={albums} />
        </div>
      </Layout>
    )
  })
  .get('/search', async ({ html, query, headers }) => {
    const searchQuery = query.q
    const sort = query.sort
    const order = query.order

    console.log({ sort, order })
    if (headers['hx-request'] === 'true') {
      const results = await db.select().from(albums).all()
      return html(<Card {...results[0]} />)
    }
    console.log({ searchQuery, sort, order })

    const results = await db.select().from(albums).all()
    return html(
      <Layout>
        <div>
          <Header query={query} />
          <SearchPage results={results} query={query} />
        </div>
      </Layout>
    )
  })
  // no need to have a public folder
  // this route will serve the css as a static file
  .get('/styles.css', () => Bun.file('./src/input.css'))
  .listen(3000)

console.log(
  `🦊 Elysia is running at on port http://${app.server?.hostname}:${app.server?.port}...`
)
