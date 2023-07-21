import { InferModel } from 'drizzle-orm'
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

// this is the only table we need to define
export const albums = sqliteTable('albums', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  artist: text('artist').notNull(),
  releaseDate: integer('release_date', { mode: 'number' }).notNull(),
  price: real('price').notNull(),
  format: text('format').notNull(),
  availability: integer('availability', { mode: 'boolean' }),
  img: text('img').notNull(),
  description: text('description').notNull(),
})

// This is handy type that can be used for insert and select
export type Album = InferModel<typeof albums>
