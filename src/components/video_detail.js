import React from 'react';

const videoDetail = ({video}) => {
	if(!video) {
		return <div>loading....</div>;
	} else {
	const videoId = video.id.videoId;
	const videoUrl = `https://www.youtube.com/embed/${videoId}`;
	return 	<div className="video-detail">
				<div className="video-detail">
					<iframe
						title="youtube video frame" 
						allowFullScreen 
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						frameBorder="0"
						src={videoUrl} 
						className="embeded-responsive-item" 
						width="100%" 
						height="500px"
					></iframe>
				</div>
				<div className="details mb-2">
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
				</div>
			</div>
	}
};

export default videoDetail;