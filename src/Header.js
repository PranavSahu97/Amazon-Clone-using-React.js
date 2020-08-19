import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Header() {
    return (
        <nav className="header">
            {/* Logo on the left -> img and make it clickable to redirect to landing page*/}
            <Link to ="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            {/* Search box */}
            <div className = "header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className = "header__searchIcon" />`
            </div>
            
            
            {/* 3 links on the right */}

            {/* Create a header nav container to contain the 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                {/* We use Link over href as href causes page to refresh while link does not */}
                <Link to = "/login" className = "header__link"> 
                    <div className="header__option">
                        <span className = "header__optionLineOne">Hello Pranav</span>
                        <span className = "header__optionLineTwo">Sign in</span>
                    </div>
                    
                </Link>


                {/* 2nd link */}
                <Link to = "/" className = "header__link"> 
                    <div className="header__option">
                        <span className = "header__optionLineOne">Returns</span>
                        <span className = "header__optionLineTwo">& Orders</span>
                    </div>
                    
                </Link>

                {/* 3rd link */}
                <Link to = "/" className = "header__link"> 
                    <div className="header__option">
                        <span className = "header__optionLineOne">Your</span>
                        <span className = "header__optionLineTwo">Prime</span>
                    </div>
                    
                </Link>

                {/* Basket icon with number */}
                <Link to = "/checkout" className = "header__link"> 
                    <div className="header__optionBasket">
                        {/* shopping basket icon */}
                        <ShoppingCartIcon />
                        {/* number of items in the basket */}
                        <psan className = "header__optionLineTwo header__basketCount">0</psan>
                    </div>
                    
                </Link>

            </div>

            

        </nav>
    );
}

export default Header
