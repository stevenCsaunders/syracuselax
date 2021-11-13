import React from 'react'
import Nav from './Nav'

const Header: React.FC = () => {
    return (
        <header className="text-center bg-gradient-to-br from-Green-light to-blue px-4">
            <Nav />
            <h1 className='font-bold text-3xl '>
                Syracuse Youth Lacrosse
            </h1>
            <h2 className='text-lg'>The Syracuse Youth LAX Program is for boys and gilrs grades K-8</h2>
        </header>
    )
}

export default Header;
