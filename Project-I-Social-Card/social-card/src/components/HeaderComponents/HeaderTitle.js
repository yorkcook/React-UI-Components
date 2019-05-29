import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div>
          <h3>Lambda School @LambdaSchool {new Date().toDateString()};</h3>  

        </div>
    );
}

export default HeaderTitle;