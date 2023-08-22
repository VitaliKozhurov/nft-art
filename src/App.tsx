import React from 'react';
import { Header } from './layout/header/header';
import { Main } from './layout/sections/main/main';
import { Amazing } from './layout/sections/amazing/amazing';
import { BestNft } from './layout/sections/bestNFT/bestNFT';
import { Popular } from './layout/sections/popular/popular';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Amazing />
            <BestNft />
            <Popular />
        </div>
    );
}

export default App;
