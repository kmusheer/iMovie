import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../customHook/useFetch'
import { useSelector } from 'react-redux'
import Img from "../../../components/lazyLoadImg/Img"
import Contentwrapper from "../../../components/contentWrapper/ContentWrapper"
import "./heroBanner.scss"

export const HeroBanner = () => {

  const [backGround, setBackGround] = useState("")
  const [query, setQuery] = useState("")
  const Navigat = useNavigate()
  const { data, loading } = useFetch("/movie/upcoming")
  const { url } = useSelector(state => state.home)


  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg)
  }, [data])

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      Navigat(`/search/${query}`)
    }
  }

  return (
    <>
      <div className='heroBanner'>
        {!loading && <div className="backdrop-img">
          <Img src={backGround} />
        </div>
        }
        <div className="opacity-layer"></div>
        <Contentwrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover.
              Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        </Contentwrapper>
      </div>
    </>
  )
}
