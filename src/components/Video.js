import ReactPlayer from 'react-player';
import StyledVideo from './styles/StyledVideo';
import StyledVideoWrapper from './styles/StyledVideoWrapper';
const Video = ({ active, autoplay, endcallback, progresscallback }) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        width='100%'
        height='100%'
        style={{ postion: 'absolute', top: '0' }}
        playing={autoplay}
        controls={true}
        url={active.video}
        onEnded={endcallback}
        onProgress={progresscallback}
      />
    </StyledVideoWrapper>
  </StyledVideo>
);

export default Video;
