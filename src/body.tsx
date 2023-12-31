const body = (content) => <!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Mablix</title>

    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <link rel="stylesheet" href="/styles/output.css" />
    <script
      src="https://unpkg.com/htmx.org@1.9.3"
      integrity="sha384-lVb3Rd/Ca0AxaoZg5sACe8FJKF0tnUgR2Kd7ehUOG5GCcROv5uBIZsOqovBAcWua"
      crossorigin="anonymous"
    ></script>
  </head>

  <body>
    {content}
  </body>
</html>
