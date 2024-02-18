import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ width, height, id }: { width: string, height: string, id: string | null | undefined }) => {
	const opts = {
		height: height,
		width: width,
		playerVars: {
		},
	};

	return (
		<div style={{ position: 'relative', width: '100%', height: '100%' }}>
			{id ? (
				<YouTube videoId={id} opts={opts} style={{ width: '100%', height: '100%' }} />
			) : (
				<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
					<p style={{ color: 'white' }}>Нет видео</p>
				</div>
			)}
		</div>
	);
};

export default YouTubePlayer;