import Video from '../Video';
import { ThemeProvider } from 'styled-components';
import Playlist from '../containers/Playlist';
import StyledWbnPlayer from '../styles/StyledWbnPlayer';
const theme = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff',
};
const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#88a7b1',
  bgcolorPlayed: '#7d9979',
  border: 'solid 1px #353535',
  borderPlayed: 'none',
  color: '#353535',
};
const WbnPlayer = (props) => {
  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      <StyledWbnPlayer>
        <Video />
        <Playlist />
      </StyledWbnPlayer>
    </ThemeProvider>
  );
};

export default WbnPlayer;
