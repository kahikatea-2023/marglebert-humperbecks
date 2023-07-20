import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { Layout } from './layout'
import { Header } from './components/Header'
import { SearchPage } from './components/SearchPage'
import { HomePage } from './components/HomePage'

const app = new Elysia()
  .use(html())
  .get('/', ({ html }) =>
    html(
      <Layout>
        <Header />
        <HomePage />
      </Layout>
    )
  )
  .get('/search', ({ html }) =>
    html(
      <Layout>
        <Header />
        <SearchPage />
      </Layout>
    )
  )
  .post(
    '/search',
    ({ html }) =>
      // Returns a re-directs:
      {
        /* add if condition if the q param exists or not */
      }
    // html(
    //   <Layout>
    //       <body class="bg-slate-300">
    //         <Header />
    //       </body>
    //     </Layout>
    // )
  )
  // no need to have a public folder
  // this route will serve the css as a static file
  .get('/styles.css', () => Bun.file('./src/input.css'))
  .listen(3000)

console.log(
  `🦊 Elysia is running at on port http://${app.server?.hostname}:${app.server?.port}...`
)
