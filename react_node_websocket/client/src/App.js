import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3001');

function App() {
	const [code, setCode] = useState(0);
	const [status, setStatus] = useState('');
	const [video, setVideo] = useState(1);
	
	useEffect(() => {
		socket.on('code', (code) => setCode(code));
		socket.on('status', (status) => {
			setStatus(status)
			if (status === 'received') setVideo(3);
		});
		setTimeout(() => setVideo(2), 14000);
	}, []);
	return (
		<div>
			<h2>{ code }</h2>
			<h2>{ status }</h2>
			{ video === 1 && <iframe src="https://player.vimeo.com/video/415281101?autoplay=1&color=55CCC3" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>}
			{ video === 2 && <iframe src="https://player.vimeo.com/video/415281217?autoplay=1&loop=1&color=55CCC3" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>}
			{ video === 3 && <iframe src="https://player.vimeo.com/video/415281295?autoplay=1&color=55CCC3" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>}
		</div>
	);
}

export default App;
