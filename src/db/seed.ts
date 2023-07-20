import { db } from './index'
import { albums } from './schema'

async function seed() {
  await db.insert(albums).values([]).returning().get()
  const rows = await db.select().from(albums).all()
  console.log(rows)
}

seed()
