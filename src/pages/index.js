import React, { useEffect, useState } from 'react';    

  export default () => {    
    const [status, setStatus ] = useState('loading...');    
    const [images, setImages] = useState([]);    

    return (
      <>    
        <h1>Images to load here...</h1>
      </>        
    )    
}