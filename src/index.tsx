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
    const searchQuery = query.q as string
    const sort = query.sort as string

    const dbQuery = db.select().from(albums)
    if (searchQuery.length > 0) {
      dbQuery.where(
        or(
          like(albums.title, `%${searchQuery}%`),
          like(albums.artist, `%${searchQuery}%`),
          like(albums.availability, `%${searchQuery}%`),
          like(albums.releaseDate, `%${searchQuery}%`),
          like(albums.description, `%${searchQuery}%`)
        )
      )
    }

    const validSorts = [
      'artist',
      'title',
      'releaseDate',
      'format',
      'availability',
      'price',
    ]

    if (validSorts.includes(sort)) {
      dbQuery.orderBy((albums as any)[sort]) // this is a hack
    }

    let result: Album[] = await dbQuery.all()

    return html(
      <Layout>
        <div>
          <Header query={query} />
          <SearchPage results={result} query={query} />
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
