import { useState } from "react";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(0);

  const handleChange = e => {
    setVideos([...e.target.files]);
  };

  const nextVideo = () => {
    const nextPlaying = nowPlaying + 1;
    setNowPlaying(nextPlaying > videos.length - 1 ? 0 : nextPlaying);
  };

  return (
    <div>
      {videos.length > 0 &&
        videos.map(video => (
          <video
            src={URL.createObjectURL(video)}
            type={video.type}
            controls
            width="320"
            height="240"
            autoPlay
            onEnded={nextVideo}
          />
        ))[nowPlaying]}
      <input
        type="file"
        accept="video/mp4, video/webm, video/ogg"
        onChange={handleChange}
        multiple
      />
    </div>
  );
};

export default App;
