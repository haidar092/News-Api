import React from 'react'
import  Loader  from './loader.gif';
const Spinner = ()=> {
   
        return (
            <div className="text-center">
              <img className="my-4 " src={Loader} alt="loader"  />  
            </div>
        )
    
}

export default Spinner;
