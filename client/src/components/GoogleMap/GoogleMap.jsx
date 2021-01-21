import React, { useRef, useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMap() {
	const mapComponent = useRef();
	const mapStyles = {
		height: '100%',
		width: '100%',
		borderRadius: 'inherit',
	};

	const [isNight, setIsNight] = useState(false);

	useEffect(() => {
		const nightMapStyles = [
			{
				elementType: 'geometry',
				stylers: [
					{
						color: '#242f3e',
					},
				],
			},
			{
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#746855',
					},
				],
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [
					{
						color: '#242f3e',
					},
				],
			},
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#d59563',
					},
				],
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#d59563',
					},
				],
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [
					{
						color: '#263c3f',
					},
				],
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#6b9a76',
					},
				],
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [
					{
						color: '#38414e',
					},
				],
			},
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [
					{
						color: '#212a37',
					},
				],
			},
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#9ca5b3',
					},
				],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [
					{
						color: '#746855',
					},
				],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [
					{
						color: '#1f2835',
					},
				],
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#f3d19c',
					},
				],
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [
					{
						color: '#2f3948',
					},
				],
			},
			{
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#d59563',
					},
				],
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [
					{
						color: '#17263c',
					},
				],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#515c6d',
					},
				],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [
					{
						color: '#17263c',
					},
				],
			},
		];

		function bewteen(hours, min, max) {
			return min < hours || hours < max;
		}

		const date = new Date();
		if (bewteen(date.getHours(), 18, 6)) {
			setIsNight(true);
		}
		const additionalOptions = {};
		const position = { lat: 10.110294821483663, lng: -84.4597565526761 };
		const loader = new Loader({
			apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
			version: 'weekly',
			...additionalOptions,
		});
		loader.load().then(() => {
			let map = new window.google.maps.Map(mapComponent.current, {
				center: position,
				zoom: 16,
				disableDefaultUI: true,
				zoomControl: true,
				zoomControlOptions: {
					position: window.google.maps.ControlPosition.RIGHT_CENTER,
				},
				fullscreenControl: true,
				fullscreenControlOptions: {
					position: window.google.maps.ControlPosition.LEFT_TOP,
				},
				styles: isNight && nightMapStyles,
			});
			new window.google.maps.Marker({
				position: position,
				map: map,
			});
		});
	}, [isNight]);

	return <div style={mapStyles} ref={mapComponent}></div>;
}
