
## Cat gallery

This has been implemented using React, Redux and Router. Axios has been used for handling API calls, and styling/layout is taken care of by Semantic React UI. Developed using VSC and Prettier for formatting.

### To build and run

NPM is used so just clone the repo then 

npm install

npm start

in the repo root dir

The app is also deployed to github pages at

https://joeharper85.github.io/cats/

Due to how github pages likes to deploy things the initial url doesn't quite meet spec with the '/cats' endpoint. Clicking around the app you will see that the endpoints are correct. If you run locally the end points will be the specified '/' and '/upload' from the get go.

### Known issues

Only displaying 3 cats in a row max. Initially I was rolling my own grid system to dynamically change as width of the page was reduced which was working well, but then noticed Semantic has a Card.Group component which should do the same. Unfortunately it doesn't seem to be able to handle the idea of a maximum number of columns other than the default of 3, only a fixed number, which then scales very poorly as viewport size changes. In an ideal world I would back that change out and finish rolling my own grid system, or see if the Card.Group max size can be dynamically manipulated, but it'd be easy to slip down a rabbit hole and not resurface for a while so I thought best to get what I ahve over to you.

Active state of the List menu item isn't responding properly. It looks to me that it has an 'extra' active prop set for reasons I'm unsure of - even hard coding active to false doesn't resolve it. I spent a good 30 minutes chasing this before deciding my time was better spent elsewhere given the short timescale available.

### Some thoughts

Currently the way state is refreshed from the API is a little unoptimised - it would be better to fetch an individual vote etc from the API and add to state rather than refreshing the whole collection. For our purposes it doesn't matter, but if we were expecting this to be hammered by a large number of users or to have very large collections of cats it could start to cause performance issues.

Redux is pretty overkill for a project of this size, but hooks make it so easy to wire up that I thought it was worth using as a demonstration of knowledge.

