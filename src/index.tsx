import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THE BETH STACK</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="/styles.css" rel="stylesheet">
</head>

${children}
`;
const app = new Elysia()
  .use(html())
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <body class="bg-slate-300">here is the body</body>
      </BaseHtml>,
    ),
  )
  .get("/styles.css", () => Bun.file("./src/input.css"))
  .listen(3000);

console.log(`🦊 Elysia is running at on port ${app.server.port}...`);
