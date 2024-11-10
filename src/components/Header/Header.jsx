import React from 'react';
import './Header.scss';
import SearchComponent from '../Search/Search';

const HeaderComponent = () => {
    return (
        <header>
            <div class="header">
                <div>Dev Blog</div>
                <SearchComponent></SearchComponent>
            </div>
        </header>
    );
};

export default HeaderComponent;