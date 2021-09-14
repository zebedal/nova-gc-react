import React, { Suspense } from 'react'
import Spinner from "./components/UI/Spinner";
import HomePage from './pages/HomePage';
/* import {useAxios} from './custom-hooks/useAxios' */
import {Route} from 'react-router-dom'
import Entidades from './pages/Entidades';
import Gerir from './pages/Gerir';
import FichaEntidades from './pages/FichaEntidades';

function App() {

  const Layout = React.lazy(() => import('./components/Layout/Layout'));

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
          <Route path="/gerir" exact>
              <Gerir />
          </Route>
          <Route path="/fichaentidades" exact>
              <FichaEntidades />
          </Route>
        </Layout>
      </Suspense>
    </div >
  );
}

export default App;
