import PlaylistItems from './PlaylistItems';
import PlaylistHeader from '../PlaylistHeader';
import Nightmode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';
const Playlist = (props) => (
  <StyledPlaylist>
    <Nightmode />
    <PlaylistHeader />
    <PlaylistItems />
  </StyledPlaylist>
);

export default Playlist;
