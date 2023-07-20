import { InferModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("albums", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  content: text("name").notNull(),
});

export type Todo = InferModel<typeof todos>;
