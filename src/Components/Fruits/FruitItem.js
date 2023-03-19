import React from 'react';
import FruitsCategory from '../FruitsCategory/FruitsCategory';
import SearchInput from '../SearchInput/SearchInput';
import FruitItemDetail from './FruitItemDetail';

const FruitItem = () => {
    return (
        <div>
            <SearchInput/>
            <FruitsCategory/>
            <h1>From Item</h1>
            <FruitItemDetail/>
        </div>
    );
};

export default FruitItem;