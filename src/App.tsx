import React from 'react';
import { Header } from './layout/header/header';
import { Main } from './layout/sections/main/main';
import { Amazing } from './layout/sections/amazing/amazing';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Amazing />
        </div>
    );
}

export default App;
