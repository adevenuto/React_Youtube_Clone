import React from 'react'; 

const searchList = ({videoTitle, currentVideo, video}) => {
	
	return 	<li onClick={() => currentVideo(video)}>
				{videoTitle}
			</li>
}

export default searchList;