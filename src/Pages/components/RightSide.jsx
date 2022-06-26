import React from 'react';
import Rectangle from '../images/Rectangle.svg';
import Img from '../images/img.svg';

const RightSide = () => {
    return (
        
        <div>
          <img src={Rectangle}  style={{width: '100%', height: '100%'}}/>
          <img src={Img}  style={{position: 'absolute', bottom: '100px', right: '50px', width: '75vh'}}/>

          <div>
          </div>


          
        </div>
        
    )
}

export default RightSide;