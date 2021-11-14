import React from 'react'

import logo from '../images/LogoSm.png'

const Nav: React.FC = () => {

    return (
        <div className='flex'>
            <img src={logo} alt='Titan sword logo with no text' className='w-16 h-16' />

            {/* Move this in to a useEffect toshow/hide the nav box */}
            <nav className='flex flex-col invisible'>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
