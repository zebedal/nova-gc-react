import React, { Suspense, useEffect } from 'react'
import Spinner from "./components/UI/Spinner";
import HomePage from './pages/HomePage';
/* import {useAxios} from './custom-hooks/useAxios' */
import {Route} from 'react-router-dom'
import Entidades from './pages/Entidades';

function App() {

  const Layout = React.lazy(() => import('./components/Layout'));

  return (

    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Layout>
          <Route path="/" exact>
              <HomePage />
          </Route>
          <Route path="/entidades" exact>
              <Entidades />
          </Route>
        </Layout>
      </Suspense>
    </div >
  );
}

export default App;
