import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import '../home.scss'
import useFetch from '../../../customHook/useFetch'
import Carousal from '../../../components/carousal/Carousal'


const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const {data, loading} = useFetch(`/${endPoint}/popular`)

  const onTabChange = (tab)=>{ 
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  }
console.log("endPoint123",endPoint);
  return (
    <div className='crouselSection'>
      <ContentWrapper>
        <span className="crouselTilte">What's Popular</span>
        <SwitchTabs data={["Movies","Tv Show"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousal endPoint={endPoint} data={data?.results} loading={loading} />
    </div>
  )
}

export default Popular