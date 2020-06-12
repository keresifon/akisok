import React from "react"
//import { Carousel, Image } from 'grommet';
//import { Image } from '@bit/grommet.grommet.image';
import {Carousel} from  'react-bootstrap'


const Slide = () => {
  return (
    <>
    <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="//images.ctfassets.net/2v4z45mmn098/GCNVEma3b73ontCT0UiaP/e4afdf6962b4ab32f0a7c4cc58d586ed/7182752725_5409ac9483_o-725x375.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>The Spirit of A People</h1>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="//images.ctfassets.net/2v4z45mmn098/HrRvMGw2Yduv1xoHBRagL/92588219db46318f9720e34fc1a18aa4/IMG_2926-725x375.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>BROOKS STREET ROAD & BIO PRESERVE CONSTRUCTION</h1>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="//images.ctfassets.net/2v4z45mmn098/5ZNyD0NmUorpOD72Ab3fgt/8a0ec29a4871cc57184fa6906d0101a4/7182749629_379498e490_o-725x375.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>THE E-LIBRARY</h1>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
</div>
  </>
  )
}

export default Slide
