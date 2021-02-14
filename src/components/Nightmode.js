import StyledNightmode from './styles/StyledNightmode';
const Nightmode = ({ nightModeCallback, nightmode }) => (
  <StyledNightmode>
    <span>Nightmode:</span>
    <label className='switch'>
      <input type='checkbox' checked={nightmode} onChange={nightModeCallback} />
      <span className='slide round'></span>
    </label>
  </StyledNightmode>
);

export default Nightmode;
