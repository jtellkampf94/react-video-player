import { useEffect, useState } from "react";

const ControlBar = ({ nowPlaying, videos }) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    if (videos.length > 0) {
      const player = document.getElementById("player");
      if (player) player.playbackRate = playbackRate;
    }
  }, [nowPlaying, videos]);

  const handlePlaybackSpeed = e => {
    setPlaybackRate(parseFloat(e.target.value));
    document.getElementById("player").playbackRate = parseFloat(e.target.value);
  };

  const handlePlay = () => {
    if (play) {
      document.getElementById("player").pause();
    } else {
      document.getElementById("player").play();
    }
    setPlay(!play);
  };

  return (
    <div>
      <button onClick={handlePlay}>{play ? "Pause" : "play"}</button>
      <label htmlFor="playbackRate">Playback speed:</label>
      <select
        name="playbackRate"
        id="playbackRate"
        onChange={handlePlaybackSpeed}
      >
        <option value="0.25">0.25x</option>
        <option value="0.5">0.5x</option>
        <option value="0.75">0.75x</option>
        <option value="1" selected>
          Normal
        </option>
        <option value="1.25">1.25x</option>
        <option value="1.5">1.5x</option>
        <option value="1.75">1.75x</option>
        <option value="2">2x</option>
      </select>
    </div>
  );
};

export default ControlBar;
