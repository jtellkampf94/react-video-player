import { useState } from "react";

import ControlBar from "../ControlBar";
import { Main, Container, Video } from "./styles";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(0);
  const showPlayer = videos.length > 0;

  const handleChange = e => {
    setVideos([...e.target.files]);
  };

  const nextVideo = () => {
    const nextPlaying = nowPlaying + 1;
    setNowPlaying(nextPlaying > videos.length - 1 ? 0 : nextPlaying);
  };

  return (
    <Main>
      <Container>
        {showPlayer &&
          videos.map(video => (
            <Video
              src={URL.createObjectURL(video)}
              type={video.type}
              controls
              autoPlay
              onEnded={nextVideo}
              id="player"
            />
          ))[nowPlaying]}
      </Container>
      <input
        type="file"
        accept="video/mp4, video/webm, video/ogg"
        onChange={handleChange}
        multiple
      />
      {showPlayer && <ControlBar nowPlaying={nowPlaying} videos={videos} />}
    </Main>
  );
};

export default App;
