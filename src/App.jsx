import 'App.css';

import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { About, Blog, BlogPost, Home } from 'views';

import configureStore from './store/configureStore';

const store = configureStore();

function Redirection() {
  return <Redirect to='/home' />;
}

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route component={BlogPost} path='/blog/:id' />
        <Route component={Home} path='/home' />
        <Route component={About} path='/about' />
        <Route component={Blog} path='/blog' />
        <Route component={Redirection} path='/' />
      </Switch>
    </Provider>
  );
}

export default App;
