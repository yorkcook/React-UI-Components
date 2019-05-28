import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div>
          <h3>Lambda School</h3>  

          <h4>@LambdaSchool</h4>  

            {new Date().toDateString()};

        </div>
    );
}

export default HeaderTitle;