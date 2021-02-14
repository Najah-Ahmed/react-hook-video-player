import PlaylistItems from './PlaylistItems';
import PlaylistHeader from '../PlaylistHeader';
import Nightmode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';
const Playlist = ({ video, active, nightmode, nightModeCallback }) => (
  <StyledPlaylist>
    <Nightmode nightModeCallback={nightModeCallback} nightmode={nightmode} />
    <PlaylistHeader active={active} total={video.length} />
    <PlaylistItems video={video} active={active} />
  </StyledPlaylist>
);

export default Playlist;
