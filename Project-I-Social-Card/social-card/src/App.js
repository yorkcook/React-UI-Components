import React from 'react';
import './App.css';

import HeaderContent from './components/HeaderComponents/HeaderContent';

import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

import CardBanner from './components/CardComponents/CardBanner'

import CardContent from './components/CardComponents/CardContent'

import HeaderTitle from './components/HeaderComponents/HeaderTitle'

import CardContainer from './components/CardComponents/CardContainer'

const App = () => {
  return (
    <div>
        <ImageThumbnail />

        <HeaderTitle />
        
        <HeaderContent />
        
        <CardBanner />

        <CardContent />

        <CardContainer />
        
    </div>
  );
};

export default App;
