import React from 'react';
import './App.css';

import HeaderContent from './components/HeaderComponents/HeaderContent';

import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <div>
        <ImageThumbnail />
        <HeaderContent />
        
    </div>
  );
};

export default App;
