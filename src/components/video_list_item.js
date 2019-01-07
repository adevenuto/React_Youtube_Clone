import React from 'react';

const videoListItem = ({video, onVideoSelect}) => {
	// console.log(video.snippet);
	const video_image_url = video.snippet.thumbnails.medium.url;
	const video_title = video.snippet.title;
	return 	<li onClick={() => onVideoSelect(video)} className="list-group-item video-list-containers">
				<div className="video-list media">
					<div className="media-left">
						<img src={video_image_url} height="75px" className="media-object" alt="Video Thumbnail"/>
					</div>
					<div className="media-body">
						<div className="media-heading"><h6>{video_title}</h6></div>
					</div>
				</div>
			</li>;
}

export default videoListItem;