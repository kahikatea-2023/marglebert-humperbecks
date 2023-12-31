#About

This is a hackathon project to test the [BETH stack](https://www.youtube.com/watch?v=cpzowDDJj24&t=2s&pp=ygUKYmV0aCBzdGFjaA%3D%3D)

## Installation

### Packages

```bash
bun install
```

### DB

- If this is your first time installing the app

```
turso db create
```

- Copy the url and paste it inside `.env` file

- Genereate a token and paste it inside `.env` file

```bash
turso db tokens create <db-logical-name>
```

To migrate the schema:

```bash
bun run db:push
```

Because our db is hosted on a remote server, we need to use drizzle studio to connect to it

```bash
bun run db:studio
# this will be our "sqlite viewer"
```

## MVP

Build the following pages from [https://www.marbecks.co.nz/](https://www.marbecks.co.nz/) :

- '/'
- '/search'
- Add filtering feature so that users can filter by price range, release date or artistst

## Contributors

Daphne Simons
Jared Pinfold
Ahmad Anwar
