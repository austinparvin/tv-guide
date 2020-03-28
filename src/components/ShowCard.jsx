import React from 'react'
import { Link } from 'react-router-dom'

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

export default ShowCard
