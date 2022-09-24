import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel >
      
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src="https://media.elcinema.com/uploads/_320x_a64fac3a257ac69d36ca77c9df2f21ce57edf56fcdd5c03a80f481b24e749733.jpg"
          alt="the conjuring"
          style={{ width:600 , height:600}}
        />
        <Carousel.Caption>
        <h1>new in</h1>
      
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
      
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/n6UChiAOSTHGih2FBactLjA4Cdt.jpg"
          alt="le roi lion"
          style={{ width: 600 , height:600}}
        />

        <Carousel.Caption>
        <h1>new in</h1>
        

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/69BH9YefDbStihTi0FJhTJxmtDo.jpg"
          alt="Prey"
          style={{ width: 600 , height:600}}
        />

        <Carousel.Caption>
        <h1>new in</h1>
        
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Home