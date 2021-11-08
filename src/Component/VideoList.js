import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onSelectedVideo}) => {

    const renderList = videos.map((video) => {
        return <VideoItem 
        key={video.id.videoId}
        onSelectedVideo={onSelectedVideo} 
        video={video} />
    })

    return <div className="ui relaxed divided list">{renderList}</div>
}

export default VideoList;