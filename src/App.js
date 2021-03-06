import React, { Suspense, useEffect, useState } from 'react'
import Spinner from "./components/UI/Spinner";
import HomePage from './pages/HomePage';
/* import {useAxios} from './custom-hooks/useAxios' */
import { Route } from 'react-router-dom'
import Entidades from './pages/Entidades';
import Gerir from './pages/Gerir';
import FichaEntidades from './pages/FichaEntidades';
import Layout from './components/Layout/Layout'
import EntidadesCarteira from './pages/EntidadesCarteira'


function App() {

  const [qlikTicket, setQlikTicket] = useState('');


  useEffect(() => {

   

  }, [])

  const qlikConfig = () => {
    setTimeout(() => {
        console.log('IMAGE LOADED, FETCHING QLIK CONFIG...');
        import('./qlikConfig/qlikConfig').then(res => null); 
    }, 2000)
}

  /* const Layout = React.lazy(() => import('./components/Layout/Layout')); */

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
          <Route path="/carteira" exact>
            <EntidadesCarteira />
          </Route>
          <Route path="/fichaentidades" exact>
            <FichaEntidades />
          </Route>

          <img src={`https://gestcomqap-ebu.internal.vodafone.com/imgticket/resources/img/core/dark_noise_16x16.png?qlikTicket=${qlikTicket}`} alt="" onLoad={qlikConfig} style={{display:'none'}}/>
        </Layout>
      </Suspense>
    </div >
  );
}

export default App;
