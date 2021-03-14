+++
categories = ["android app", "web app"]
date = 2020-12-19T23:00:00Z
images = []
tags = ["c-sharp", "dotnetcore", "api", "angular", "typescript", "android", "kotlin"]
thumb = "/uploads/damienhero.png"
title = "Damien Experience"
[[cta]]
icon = "iconify icon:fa-brands:github"
link = "https://github.com/DanteDeRuwe/DamienExperience-Backend"
text = "backend"
[[cta]]
icon = "iconify icon:fa-brands:github"
link = "https://github.com/DanteDeRuwe/DamienExperience-Web"
text = "web"
[[cta]]
icon = "iconify icon:fa-brands:github"
link = "https://github.com/DanteDeRuwe/DamienExperience-Android"
text = "android"

+++
## About the project

Damien Experience is a set of web and android apps created for charity organization Action Damien (Damiaanactie). The apps are used to organize guided walks of 50 or 100km to raise money for the treatment of poverty-caused illnesses like lepra and tuberculosis in third-world countries.

This project was built for the course "Projects III" of my education in Applied Information technology. The primary objective of the course is "the development of a complex, high-quality application from a customer according to an agile or software development methodology.

#### **Definition of the project scope, as given by the customer**

> The Damien Foundation aims to organize a walking tour. Participants in this walk can view and follow the planned route via their smartphone. It must also be possible for others (such as family and friends) to follow participants from a web application, if the relevant participants agree to this. It is also possible for the participants and their followers to chat with each other. Registration for the walk must also be possible via the web application (this also includes the payment process). Potential participants should also have the opportunity to learn more about the walk, read the regulations, buy T-shirts, see the routes and their points of interest, and so on. The so ware solutions must remain maintainable for the annual walks. So administrators must be able to manage routes and information.

#### **Technical project requirements, as given by the lecturers:**

* A mobile application for Android devices, built with Kotlin.
* A modern single-page web application made with Angular and Typescript.
* A shared backend API, built with .NET, linked to a database.

#### **Methodologies**

**Agile (Scrum)** 

During this project, the Agile principle was used, more specifically with the agile methodology “Scrum”. We worked in sprints of 2 weeks in which we always held a so-called planning poker session at the beginning of that sprint. Everyone had full say in the estimates of each user story. Furthermore, a stand-up was also done almost daily in groups where an evaluation was made of what had been completed, what had priority, and who was going to work on what. This made it possible to keep everyone up to date on the status of the project at all times. Often the tasks were also further divided here. At the end of the sprints, a retrospective was organized to discuss how we can do better next time. 

**Pair programming**

The main approach during programming was to use pair programming. This is a strategy in which two programmers always work on the same block of code. Making use of this reduced the risk of misunderstandings and made it possible for everyone to work at the same level. If people were less experienced with a certain technology, there was always someone to assist.

**Test driven design (TDD) and testing in general:**

We wrote most of our tests before writing the actual code. making refactoring and keeping a consistent code style possible. It also ensured our code was designed "testable" by default.  
  
We also made sure that tests were automated: with every pull request on Github, a so-called Github Action will automatically run all tests. The pull request can only be merged if all tests pass.

Initially, it went very well to maintain this discipline, but as the project got bigger and smaller optimizations had to be done, the tests were kept less and less up-to-date. Certainly a work point, but we are still proud of the test suite we now have.

**Version control**

The master branch of each Github repository was locked and feature branches and pull requests were used. Each pull request had to be checked and approved by at least  1 reviewer. It is therefore not possible to make a change alone. This ensures that a "fresh look" is cast at the code. We have always tried to be consistent in this by having as many reviews as possible done by team members who did not participate in the feature itself.