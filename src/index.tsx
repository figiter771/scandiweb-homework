import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainStoreFront from './Components/MainStorefront/MainStoreFront';
import { Provider } from 'react-redux';
import { store } from './State/Store/Store';
import { client } from '@tilework/opus';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

client.setEndpoint("http://localhost:4000");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/shop/:category' component={MainStoreFront} />
          <Route exact path="/" render={() => {
            return (
              <Redirect to="/shop/home" />
            )
          }}
          />
          <Route exact path="/shop" render={() => {
            return (
              <Redirect to="/shop/home" />
            )
          }}
          />
          {/* <Route path='/explore/:name'>
            <ExploreDetail data={data} />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
