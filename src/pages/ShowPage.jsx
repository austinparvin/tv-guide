import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowPage = (props) => {
  const [showCast, setShowCast] = useState()
  const [showDetails, setShowDetails] = useState({})
  const showId = props.match.params.showId

  const getShowsCast = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=37569221602edd820d2cf3580496deaa&language=en-US`
    )
    setShowCast(resp.data)
  }

  const getShowsDetails = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=37569221602edd820d2cf3580496deaa&language=en-US&page=1`
    )
    setShowDetails(resp.data)
  }

  useEffect(() => {
    getShowsCast()
    getShowsDetails()
  }, [])

  const createComponent = () => {
    if (showCast) {
      return (
        <main>
          <section
            style={{
              width: '400',
              height: 600,
              backgroundImage: `url(https://image.tmdb.org/t/p/w400${showDetails.poster_path})`,
              backgroundRepeat: 'no-repeat',
            }}
          ></section>
          <h1>{showDetails.name}</h1>
          <h1>{showDetails.first_air_date}</h1>
          <ul>
            {showCast.cast.map((castMember) => {
              return <li>{castMember.name}</li>
            })}
          </ul>
        </main>
      )
    } else {
      return <h1>loading</h1>
    }
  }
  return createComponent()
}

export default ShowPage
