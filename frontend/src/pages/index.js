import React from 'react';

import Chart from '../components/chartpage'
import '../css/mainpage.css'

const MainPage = () => {
    const page = ""

    return(
        <>
            <div className='wrapper'>
                <div className='main-page'>
                    <h1> 차트 보기 </h1>
                    <Chart/>
                </div>
            </div>
        </>
    )
}
export default MainPage;