import React, { Component } from 'react';
import { Carousel } from 'react-materialize';
import './App.css';

import NavigationBar from './components/NavigationBar';
import JumboImage from './components/JumboImage';
import Article from './components/Article';
import Footer from './components/Footer';


class App extends Component {

	render() {
		return (
			<div>
				<NavigationBar />
				<JumboImage />

				{/* Articles Section */}
				<div className="container">
					<div className="row">
						<Article image={"images/3d1fee75a1.jpeg"}/>
						<Article image={"images/fc897e6ff5.jpeg"}/>
					</div>
				</div>

				{/* react-materialize */}
				<Carousel images={[
					"images/carousel-nature1.jpeg",
					"images/carousel-nature2.jpeg",
					"images/carousel-nature3.jpeg",
					"images/carousel-nature4.jpeg",
					"images/carousel-nature5.jpeg"
				]} />

				<Footer />
			</div>
		);
	}
}

export default App;
