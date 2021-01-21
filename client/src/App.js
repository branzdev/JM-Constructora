import { useEffect, useRef, useState } from 'react';
import { Route } from 'react-router-dom';
//components
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Proyects from './components/Proyects/Proyects';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ImageGallery from './components/ImageGallery/ImageGallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ImageGalleryPage from './components/ImageGalleryPage/ImageGalleryPage';

function App() {
	const appRef = useRef();

	const getData = async () => {
		const response = await fetch('/testApi');
		const data = await response.json();
		if (response.status !== 200) throw Error(data.message);

		return data;
	};
	useEffect(() => {
		getData().then((res) => {
			console.log(res);
		});
	}, []);

	/*

	------dynamically setting header containers height

	useEffect(() => {
		const headerContainers = appRef.current.querySelectorAll(
			'.header-container'
		);
		const headerContainersHeight = `${headerContainers[0].scrollHeight}px`;
		headerContainers.forEach((hc) => {
			hc.style.height = headerContainersHeight;
		});
	}, []); */

	return (
		<div ref={appRef} className="App">
			<ScrollProgressBar />
			<Sidebar />
			<Navbar />
			<Route exact path="/">
				<Home />
				<Proyects />
				<ServicesSection />
				<ImageGallery />
				<About />
				<Contact />
			</Route>
			<Route path="/services">
				<ServicesPage />
			</Route>
			<Route path="/imageGallery">
				<ImageGalleryPage />
			</Route>
			<Route path="/">
				<Footer />
			</Route>
		</div>
	);
}

export default App;
