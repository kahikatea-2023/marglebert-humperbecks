import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { Layout } from './layout'
import { Header } from './components/Header'
import { SearchPage } from './components/SearchPage'
import { SearchInput } from './components/SearchInput'
import { HomePage } from './components/HomePage'

// Daph changes: 

const app = new Elysia()
  .use(html())
  .get('/', ({ html }) =>
    html(
      <Layout>
        <body class="bg-slate-300">
          <Header />
          {/* TODO: Will need to add a HomePage component here */}
          <HomePage />
        </body>
      </Layout>
    )
  )
  .get('/search', ({html}) => {
    return html(
      <Layout>
          <body class="bg-slate-300">
            <Header />
            <SearchPage/>
          </body>
        </Layout>
    )
  }
  )

  // Returns a re-directs???
    .post('/search', ({query}) => {
      const albums = ['a', 'b', 'c', 'd']
      // ATTEMPT 2
      if (typeof query === "string") {
        const filteredResults = albums.filter(album => album == query)
        return filteredResults
        // DB version would be like this: 
        // contacts = await db.searchContacts(query)
      }
      else {
        const allAlbums = [...albums]
        return allAlbums
        // DB version would be like this: 
        // contacts = await db.getAllContacts()
      }

      // ATTEMPT 1
      // const searchQuery = request.args.get("q")
      // const fakeSearch = "a"
      // const albums = ['a', 'b', 'c', 'd']
      // const filteredResults = albums.filter(album => album == fakeSearch)

      // return html(
      //   <Layout>
      //       <body class="bg-slate-300">
      //         <Header />
      //         <SearchPage {...filteredResults}/>
      //       </body>
      //     </Layout>
      // )
    }
      
    
  // From todos BETH example repo
    //   async ({ params }) => {
    //     const oldTodo = await db
    //       .select()
    //       .from(albums)
    //       .where(eq(todos.id, params.id))
    //       .get();
    //     const newTodo = await db
    //       .update(todos)
    //       .set({ completed: !oldTodo.completed })
    //       .where(eq(todos.id, params.id))
    //       .returning()
    //       .get();
    //     return <TodoItem {...newTodo} />;
    //   },
    //   {
    //     params: t.Object({
    //       id: t.Numeric(),
    //     }),
    //   }
    // )

  // From the hypermedia book: 
      // @app.route("/contacts")
      // def contacts():
      // search = request.args.get("q")
      // if search is not None:
      //     contacts_set = Contact.search(search) (1)
      // else:
      //     contacts_set = Contact.all()
      // return render_template("index.html", contacts=contacts_set) (2)

    // This is where the search logic happens.
    // We simply re-render the index.html template every time, no matter what.


  )
  // no need to have a public folder
  // this route will serve the css as a static file
  .get('/styles.css', () => Bun.file('./src/input.css'))
  .listen(3000)

console.log(
  `🦊 Elysia is running at on port http://${app.server?.hostname}:${app.server?.port}...`
)
