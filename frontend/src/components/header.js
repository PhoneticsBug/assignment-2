import React from 'react'
import '../css/header.css'

const HeaderComponent = () => {

    return (
        <div className='header'> 
            <p className='logo-component'> logo! </p>
            <button className='tag-component'> menu1 </button>
            <button className='tag-component'> menu2 </button>
            <button className='tag-component'> menu3 </button>
            <button className='tag-component  '> menu4 </button>

        </div>
    )
}
export default HeaderComponent;