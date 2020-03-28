import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShowCard from '../components/ShowCard'

const HomePage = () => {
  const [shows, setShows] = useState([])
  const [featuredShow, setFeaturedShow] = useState({})

  const getShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=37569221602edd820d2cf3580496deaa&language=en-US&page=1'
    )
    setShows(resp.data.results)
    setFeaturedShow(
      resp.data.results[Math.floor(Math.random() * resp.data.results.length)]
    )
  }

  useEffect(() => {
    getShows()
  }, [])

  const createComponent = () => {
    if (featuredShow) {
      return (
        <main>
          <section className="top-rated">
            <header>Featured</header>
            <ShowCard
              key={featuredShow.id}
              id={featuredShow.id}
              img={featuredShow.poster_path}
              score={featuredShow.popularity}
              title={featuredShow.name}
              description={featuredShow.overview}
            />
          </section>
          <section className="top-rated">
            <header>Top Rated</header>
            {shows.map((show) => {
              return (
                <ShowCard
                  key={show.id}
                  id={show.id}
                  img={show.poster_path}
                  score={show.popularity}
                  title={show.name}
                  description={show.overview}
                />
              )
            })}
          </section>
        </main>
      )
    } else {
      return <h1>loading</h1>
    }
  }

  return createComponent()
}

export default HomePage
