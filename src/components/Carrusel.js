import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import './Carrusel.css'


export default function Carrusel() {

  const items = [
    {
      src: 'img/1.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header',
      key: '1'
    },
    {
      src: 'img/2.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src: 'img/3.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3'
    }
  ];

  return (
    <div>
      <UncontrolledCarousel items={items} />
    </div>
  )
}
