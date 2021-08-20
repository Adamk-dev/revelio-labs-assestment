import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import NewsList from '../components/NewsList';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const AppRouter = () => {


  const dmode = useSelector(state =>
    state?.configReducer?.mode
   );
  return (
    <div className = {`${dmode ? "darkMode" : ""}`}>

 
    <BrowserRouter className="">
      <div className = "container" >
        <Header />
        <Switch>
          <Route path="/" render={() => <Redirect to="/latest" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!['latest', 'starred'].includes(type)) {
                return <Redirect to="/" />;
              }
              return <NewsList type={type} />;
            }}
          />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
    </div>
  );
};

export default AppRouter;
