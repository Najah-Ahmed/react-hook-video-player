import WbnPlayer from './WbnPlayer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlabalStyle';
const App = () => {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={WbnPlayer} />
          <Route exact path='/:activeVideo' component={WbnPlayer} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
