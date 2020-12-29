# Tv Guide

A "TV guide" website that uses an API, and few pages to display what is currently showing.

# Objectives

- Work with an API to display data
- Work with React and React Router
- Use React Router to create the pages

# Includes: 

- [REACT](https://reactjs.org/docs/getting-started.html)
- [REACT ROUTER DOM](https://www.npmjs.com/package/react-router-dom)
- [RFC](https://reactjs.org/docs/components-and-props.html)
- [HOOKS](https://reactjs.org/docs/hooks-intro.html)

- [API INTEGRATION](https://sdg-words.herokuapp.com/api/words/random)

# Requirements 

- Use [The Movie Db API](https://developers.themoviedb.org/3/getting-started/introduction) 
- Create a home page that has:
  - the list of all "Top Rated" TV shows, returned from this API `https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1`
  - this page should also highlight a random "Top Rated" TV show at the top of the page
- Create a `/tv/:showId page` that shows all the details for a given show and the cast of the show. The cast and crew end point is `https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>&language=en-US`
 
## Live Site

[LIVE SITE](https://tv-guide-austinparvin.netlify.app/)

![TV Guide Live Site](http://g.recordit.co/vWwo4XTyP1.gif)

## Featured Code

### Deconstruction Props in a Child Component w/Link to details page created by React Router

```JSX
const ShowCard = ({ score, title, description, img, id }) => {
  return (
    <Link to={`/tv/${id}`}>
      <section className="movie-card">
        <section
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w400${img})`,
          }}
          className="movie-card-img"
        >
          {score}
        </section>
        <section className="movie-card-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </section>
      </section>
    </Link>
  )
}
 ```
 
