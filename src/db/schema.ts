import { InferModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// this is the only table we need to define
export const todos = sqliteTable("albums", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  content: text("name").notNull(),
  // TODO: add release date, artist, price
});

export type Todo = InferModel<typeof todos>;
