---
date: 2020-06-30T00:00:00Z
title: Zappr
categories: [Web app]
tags: [C-sharp, .NET_Core, API, Angular, GraphQL, Apollo, Typescript, SQLServer]
thumb: https://i.imgur.com/pn4EWZd.jpg
images:
  [
    https://i.imgur.com/iJFQzvw.jpg,
    https://i.imgur.com/pn4EWZd.jpg,
    https://i.imgur.com/KyPes5C.png,
    https://i.imgur.com/G3ohxjF.png,
  ]
cta:
  - icon: "fab fa-github"
    link: https://github.com/dantederuwe-hogent/zappr-frontend
    text: frontend
  - icon: "fab fa-github"
    link: https://github.com/dantederuwe-hogent/zappr-backend
    text: backend
---

## About the project

Zappr is a web application that enhances your local TV community.

This project was built for the course Web Applications IV of my eductation in Applied Information technology.
It is for educational purposes only.

### Features

#### Discover

This is the homepage of the application. Here you can find TV shows that air today and in the following week.
At the top there obviously is a [search](https://i.imgur.com/bM3w0zb.jpg) functionality, used to search any series.

#### Authentication

Naast het bladeren door series kunt u ook _een account maken_ en hiermee inloggen om zo toegang te krijgen tot verdere features.
Other than browsing through series, you can _make an account_ and log in, to gain access to other features.

#### Favorites and watchlist

When logged in, you can [mark series as favorite or add them to your personal watchlist](https://i.imgur.com/egoTu7E.png).

#### Other

There is a 404 page, _so that's something_ ¯\\\_(ツ)\_/¯

### Future plans

#### Series

- Comments and ratings
- Get a list of seasons and episodes
- View actors and their characters (and maybe mark some actors as favorite)

#### Afleveringen

- Marking an episode as seen
- Rating an episode

#### Profiel

- Your ratings
- Friends / followers (?)

## All technologies used

- Frontend
  - Angular
  - Apollo Angular
  - Typescript
  - GraphQL
  - RxJs
  - ngBootstrap
  - ngx-drag-scroll
  - Bootstrap
  - SCSS
- Backend
  - .NET Core 3.1
  - GraphQL
  - GraphQL-dotnet Nuget Package (+ authorization)
  - Identity Framework
  - Entity Framework Core
  - Microsoft SQL Server
  - BCrypt
  - Newtonsoft JSON

## Special thanks to

- My lecturers for feedback and support
- [TVMaze API](https://www.tvmaze.com/api) for the data
- [Stackoverflow](https://stackoverflow.com/), with in particular [dglozano](https://stackoverflow.com/users/10648865/dglozano), for answering [my question](https://stackoverflow.com/questions/60832540/ef-core-multiple-many-to-many-relationships-between-the-same-entities)
- The graphQL-dotnet [Github](https://github.com/graphql-dotnet/graphql-dotnet) and [docs](https://graphql-dotnet.github.io/), with in particular [this issue-thread](https://github.com/graphql-dotnet/authorization/issues/63#issuecomment-553877731)
- The [Apollo-angular docs](https://www.apollographql.com/docs/angular/)
- The [ngx-drag-scroll npm library](https://ngx-drag-scroll.fanjin.io/)
- Countless YouTubers
- Countless blogs, forums, websites...

_PS: The name Zappr is a homophone of 'zapper', the flemish word for TV remote_
