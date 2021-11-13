import React from 'react'
import MenuItemsCompany from './MenuItemsCompany'
import MenuItemsConnect from './MenuItemsConnect'
import MenuItemsProduct from './MenuItemsProduct'

function Nav() {
    return (
        <nav className='flex gap-4'>
            <div className=''></div>
            <MenuItemsCompany />
            <MenuItemsConnect />
            <MenuItemsProduct />
        </nav>
    )
}

export default Nav
