import React from 'react';
import { Header } from './layout/header/header';
import { Main } from './layout/sections/main/main';
import { Amazing } from './layout/sections/amazing/amazing';
import { BestNft } from './layout/sections/bestNFT/bestNFT';
import { Popular } from './layout/sections/popular/popular';
import { Subscribe } from './layout/sections/subscribe/subscribe';
import { Footer } from './layout/footer/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Amazing />
            <BestNft />
            <Popular />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;
