import React from 'react';
import './App.css';

import HeaderContent from './components/HeaderComponents/HeaderContent';

import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

import CardBanner from './components/CardComponents/CardBanner'

import CardContent from './components/CardComponents/CardContent'

const App = () => {
  return (
    <div>
        <ImageThumbnail />
        
        <HeaderContent />
        
        <CardBanner />

        <CardContent />
        
    </div>
  );
};

export default App;
