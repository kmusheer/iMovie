import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import '../home.scss'
import useFetch from '../../../customHook/useFetch'
import Carousal from '../../../components/carousal/Carousal'


const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");

  const {data, loading} = useFetch(`/trending/all/${endPoint}`)
  const onTabChange = (tab)=>{ 
    setEndPoint(tab === "Day" ? "day" : "week");
  }

  return (
    <div className='crouselSection'>
      <ContentWrapper>
        <span className="crouselTilte">Trending</span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending