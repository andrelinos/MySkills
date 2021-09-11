import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './src/pages/Home';

export default function App() {
    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#121016"
                barStyle="light-content"
            />
            <Home />
        </>
    );
}
