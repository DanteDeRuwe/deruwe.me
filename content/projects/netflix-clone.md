---
date: 2021-04-02T00:00:00.000+00:00
title: Netflix Clone using microfrontends
categories:
- Modular web app
tags:
- Piral
- React
- Typescript
- Microfrontends
thumb: https://i.imgur.com/CH4qSIy.png
images:
- https://i.imgur.com/sQjrWzw.gif
- https://i.imgur.com/VM2Xmn2.gif
cta:
- icon: iconify icon:fa-solid:bolt
  link: https://netflix.deruwe.me
  text: Live Webapp
- icon: iconify icon:fa-brands:dev
  link: https://dev.to/dantederuwe/my-experiences-creating-a-netflix-clone-using-microfrontends-1n46
  text: Article
- icon: iconify icon:fa-brands:github
  link: https://github.com/dantederuwe/netflix-piral
  text: Main Repository

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/b392f8ac-0ec3-44e8-bf19-1bfda4a7dfbd/deploy-status)](https://app.netlify.com/sites/netflix-piral/deploys)
[![](https://img.shields.io/website?color=2b7489&style=flat-square&up_message=netflix.deruwe.me&url=https%3A%2F%2Fnetflix.deruwe.me)](https://netflix.deruwe.me)


<p>
    <span>A Netflix clone using</span>
    <span>
    <a target="_blank" href="https://reactjs.org">
        <img id="react-logo" src="https://i.imgur.com/gNxwwn1.png" height="10" />
        &nbsp;React
    </a>
    </span>
    <span className="text-lightgray">and</span>
    <span>
    <a target="_blank" href="https://piral.io">
        <img id="piral-logo" src="https://piral.io/logo-simple.f8667084.png" height="10" />
        &nbsp;Piral
    </a>
    </span>
</p>

**Read more**:  In [this DEVCommunity article](https://dev.to/dantederuwe/my-experiences-creating-a-netflix-clone-using-microfrontends-1n46), I go over my experiences.


## Application overview

You can find the application online on [netflix.deruwe.me](https://netflix.deruwe.me). 

This application is a Netflix clone with some basic functionalities. 
- There is a `Browse` page where the user can discover showcases of trending
  series and movies, top-rated ones, etc.
- Clicking a tile brings you straight to the `Watch` page.
- Of course, to find a specific movie or series, the user can also use the
  provided `Search` bar.
- Every media tile also has a `Favorites` toggle in the top right corner.
  Clicking it adds the series or movies to the user's favorites list, to be
  found on the favorites page.<br>
- The user can switch accounts via the `Profile` option in the top right. All
  favorites are linked to the specific account.

*It is worth noting that this demo project does not come with a custom backend: all data is coming from a 3rd party API, the accounts are dummy accounts, and the favorites are stored in localstorage.*




## Mentions

<div style="display: flex; gap: 1rem; flex-wrap: wrap">
  <blockquote class="twitter-tweet" data-conversation="none" data-dnt="true" data-theme="dark"><a href="https://twitter.com/reactnewsletter/status/1375489477196574725?ref_src=twsrc%5Etfw"></a></blockquote>
  <blockquote class="twitter-tweet" data-conversation="none" data-dnt="true" data-theme="dark"><a href="https://twitter.com/sebastienlorber/status/1376537886011559936?ref_src=twsrc%5Etfw"></a></blockquote>
  <blockquote class="twitter-tweet" data-conversation="none" data-dnt="true" data-theme="dark"><a href="https://twitter.com/florianrappl/status/1372594384613543939?ref_src=twsrc%5Etfw"></a></blockquote>
  <blockquote class="twitter-tweet" data-conversation="none" data-dnt="true" data-theme="dark"><a href="https://twitter.com/hackernoon/status/1373977770703917059?ref_src=twsrc%5Etfw"></a></blockquote>
</div>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Links to all code

This is the main repository for this web app. In this app shell, all
microfrontends are integrated.

[![App shell](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-piral&theme=radical&icon_color=e4740c&text_color=fff)](https://github.com/dantederuwe/netflix-piral)


This project consists of multiple microfrondends (in the Piral framework called "Pilets"). You can find the code for them here:


[![Browse pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-browse-pilet&theme=radical&icon_color=e4740c&text_color=fff)](https://github.com/dantederuwe/netflix-browse-pilet)
&nbsp;[![Profile pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-profile-pilet&theme=radical&icon_color=e4740c&text_color=fff)](https://github.com/dantederuwe/netflix-profile-pilet)
&nbsp;[![Watch pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-watch-pilet&theme=radical&icon_color=e4740c&text_color=fff)](https://github.com/dantederuwe/netflix-watch-pilet)
&nbsp;[![Favorites pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-favorites-pilet&theme=radical&icon_color=e4740c&text_color=fff)](https://github.com/dantederuwe/netflix-favorites-pilet)
&nbsp;[![Search pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-search-pilet&theme=radical&icon_color=e4740c&text_color=fff)](https://github.com/dantederuwe/netflix-search-pilet)


