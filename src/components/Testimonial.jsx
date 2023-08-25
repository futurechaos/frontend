import '../cssfiles/testimonial.css';
import Review from './testimonial-container/Review';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from 'react';

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='testimonial container-fluid'>
      <h1 className='testimonial-header'>Testimonials</h1>
      {isMobile ? (
        <Carousel showThumbs={false} showStatus={false}>

            <Review src="/images/testimonialpic.jpg"
              name="Steve Rogers" 
              p="Hello, I want to say that this website is one of the best websites I have ever visited. I mean look at Vivek's designing skills, it is out of the world. Hands down, Vivek is the world's best developer."/>

            <Review src="/images/testimonialpic.jpg"
              name="Bruce Wayne" 
              p="Hello, I want to say that this website is one of the best websites I have ever visited. I mean look at Vivek's designing skills, it is out of the world. Hands down, Vivek is the world's best developer."/>

            <Review src="/images/testimonialpic.jpg"
              name="Natalia Singh" 
              p="Hello, I want to say that this website is one of the best websites I have ever visited. I mean look at Vivek's designing skills, it is out of the world. Hands down, Vivek is the world's best developer."/>

        </Carousel>
      ) : (
        <div className="testimonial-footer">
          <Review src="/images/testimonialpic.jpg"
            name="Steve Rogers" 
            p="Hello, I want to say that this website is one of the best websites I have ever visited. I mean look at Vivek's designing skills, it is out of the world. Hands down, Vivek is the world's best developer."/>
          <Review src="/images/testimonialpic.jpg"
            name="Bruce Wayne" 
            p="Hello, I want to say that this website is one of the best websites I have ever visited. I mean look at Vivek's designing skills, it is out of the world. Hands down, Vivek is the world's best developer."/>
          <Review src="/images/testimonialpic.jpg"
            name="Natalia Singh" 
            p="Hello, I want to say that this website is one of the best websites I have ever visited. I mean look at Vivek's designing skills, it is out of the world. Hands down, Vivek is the world's best developer."/>
        </div>
      )}
    </div>
  )
}

export default Testimonial;
