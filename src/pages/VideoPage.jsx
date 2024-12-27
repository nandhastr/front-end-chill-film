/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import VideoData from "../components/VideoData";

const VideoPage = () => {
    const { id } = useParams();
    const videoId = Number(id);
    const video = VideoData.find((item) => item.id === videoId);

    if (video) {
            
        return (
            <div className="video-page">
                <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
                {video.videoUrl ? <iframe width="100%" height="400" src="https://youtu.be/SqcY0GlETPk?si=QMLQa4Ig9eONz9uY" title={video.title} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <p>Video tidak tersedia</p>}
            </div>
        );
    } else {
        return <div>Video tidak ditemukan</div>;
    }
};

export default VideoPage;
