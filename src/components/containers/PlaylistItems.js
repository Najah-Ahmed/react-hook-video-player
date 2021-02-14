import PlaylistItem from '../PlaylistItem';
import StyledPlaylistItems from '../styles/StyledPlaylistItems';
const PlaylistItems = ({ active, videos }) => (
  <StyledPlaylistItems>
    {videos.map((video) => {
      <PlaylistItem
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played}
      />;
    })}
  </StyledPlaylistItems>
);

export default PlaylistItems;
