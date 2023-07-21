import { db } from './index'
import { albums } from './schema'
import { seedGenerator } from './dataForSeeds'

async function seed() {
  await db.insert(albums).values(seedGenerator()).returning().get()
  const rows = await db.select().from(albums).all()
  console.log(rows)
}

seed()
