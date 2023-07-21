import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { Layout } from './layout'
import { Header } from './components/Header'
import { SearchPage } from './components/SearchPage'
import { HomePage } from './components/HomePage'
import { Album, albums } from './db/schema'
import { Card } from './components/Card'
import { db } from './db'
import { getTableColumns, ilike, or, eq, like } from 'drizzle-orm'

// Daph changes:

const app = new Elysia()
  .use(html())
  .get('/', async ({ html }) => {
    const rows: Album[] = await db.select().from(albums).all()
    return html(
      <Layout>
        <div>
          <Header />
          <HomePage albums={rows} />
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

    // const results = await db.select().from(albums).all()

    // const filteredResults = results.filter((album) => album.title.includes(searchQuery) || album.artist.includes(searchQuery))
    // console.log("filtered results", filteredResults);

    // TODO: figure out why this db drizzle doesn't wizzle on the htmxsizzle
    const dbResults = await db
      .select()
      .from(albums)
      .where(like(albums.artist, `%dean%`))
      .all()

    return html(
      <Layout>
        <div>
          <Header query={query} />
          <SearchPage results={dbResults} query={query} />
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
