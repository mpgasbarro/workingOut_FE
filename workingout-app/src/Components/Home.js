import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<section>
				<Carousel>
					<Carousel.Item interval={500}>
						<img
							className='firstSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-6.jpg'
							alt='First slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className='secondSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-7.jpg'
							alt='second slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img
							className='thirdSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Muhammad-Ali-quote.jpg'
							alt='Third slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className='fourthSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2012/07/428266-1536x1024.jpg'
							alt='Fourth slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img
							className='fifthSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Many-of-lifes-failures.jpg'
							alt='Fifth slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className='sixthSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/DESIGN-IS-DESTINY.jpg'
							alt='sixth slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className='seventhSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-18.jpg'
							alt='seventh slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className='eighthSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2012/07/334240.jpg'
							alt='Eighth slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className='ninthSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Never-give-up.jpg'
							alt='ninth slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className='tenthSlide'
							src='https://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-4.jpg'
							alt='tenth slide'
						/>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className='eleventhSlide'
							src='https://external-preview.redd.it/JOqi_n3w84_kIcQTt6LwAx5A33PxJ5fP0RKlZbTD58k.jpg?auto=webp&s=3258576f7df0884eae51310261fe182b8f7d16d9'
							alt='tenth slide'
						/>
					</Carousel.Item>
				</Carousel>
			</section>
		);
	}
}

export default Home;
