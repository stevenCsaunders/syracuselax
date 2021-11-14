import React from 'react'
import Nav from './Nav'

const Header: React.FC = () => {
    return (
        <header className="text-white text-center bg-intro bg-cover px-4 rounded-bl-10xl p-5">
            <Nav />
            <h1 className='font-bold text-3xl text-white'>
                Syracuse Youth Lacrosse
            </h1>
            <h2 className='text-lg text-white'>The Syracuse Youth LAX Program is for boys and gilrs grades K-8</h2>
        </header>
    )
}

export default Header;
