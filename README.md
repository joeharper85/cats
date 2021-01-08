
## Cat gallery

This has been implemented using React, Redux and Router. Axios has been used for handling API calls, and styling/layout is taken care of by Semantic React UI.

### To build and run

NPM is used so just clone the repo then 

npm install

npm start

in the repo root dir

### Some thoughts

Currently the way state is refreshed from the API is a little unoptimised - it would be better to fetch an individual vote etc from the API and add to state rather than refreshing the whole collection. For our purposes it doesn't matter, but if we were expecting this to be hammered by a large number of users or to have very large collections of cats it could start to cause performance issues.

Redux is pretty overkill for a project of this size, but hooks make it so easy to wire up that I thought it was worth using as a demonstration of knowledge.

