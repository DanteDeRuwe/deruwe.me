---
date: 2020-06-30T00:00:00.000+00:00
title: Zappr
categories:
- Web app
tags:
- C-sharp
- dotnetcore
- API
- Angular
- GraphQL
- Apollo
- Typescript
- SQLServer
thumb: https://i.imgur.com/pn4EWZd.jpg
images:
- https://i.imgur.com/iJFQzvw.jpg
- https://i.imgur.com/pn4EWZd.jpg
- https://i.imgur.com/KyPes5C.png
- https://i.imgur.com/G3ohxjF.png
cta:
- icon: fas fa-bolt
  link: https://zappr.deruwe.me
  text: Live Webapp
- icon: fab fa-github
  link: https://github.com/dantederuwe-hogent/zappr-frontend
  text: frontend
- icon: fab fa-github
  link: https://github.com/dantederuwe-hogent/zappr-backend
  text: backend

---
## About the project

Zappr is a web application that enhances your local TV community.

This project was initially built for the course Web Applications IV of my education in Applied Information technology. I now continue it in my free time.  
  
Zappr is for educational purposes only.

### Features

#### Discover

This is the homepage of the application. Here you can find TV shows that air today and in the following week. At the top, there obviously is a search functionality, used to search any series.

#### Authentication

Other than browsing through series, you can _make an account_ and log in, to gain access to other features.

#### Favorites and watchlist

When logged in, you can mark series as favorite or add them to your personal watchlist.

#### Other

There is a 404 page, _so that's something_ ¯\\_(ツ)_/¯

### Future plans

#### Series

* Comments and ratings
* Get a list of seasons and episodes
* View actors and their characters (and maybe mark some actors as favorite)

#### Episodes

* Marking an episode as seen
* Rating an episode

#### Profile

* Your ratings
* Friends/followers (?)

## All technologies used

* Frontend
  * Angular
  * Apollo Angular
  * Typescript
  * GraphQL
  * RxJs
  * ngBootstrap
  * ngx-drag-scroll
  * Bootstrap
  * SCSS
* Backend
  * .NET Core 3.1
  * GraphQL
  * GraphQL-dotnet Nuget Package (+ authorization)
  * Identity Framework
  * Entity Framework Core
  * Microsoft SQL Server
  * BCrypt
  * Newtonsoft JSON

## Special thanks to

[TVMaze API](https://www.tvmaze.com/api) for the data

_PS: The name Zappr is a homophone of 'zapper', the Flemish word for TV-remote_