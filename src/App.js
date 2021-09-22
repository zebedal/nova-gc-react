import React, { Suspense, useEffect, useState } from 'react'
import Spinner from "./components/UI/Spinner";
import HomePage from './pages/HomePage';
/* import {useAxios} from './custom-hooks/useAxios' */
import { Route } from 'react-router-dom'
import Entidades from './pages/Entidades';
import Gerir from './pages/Gerir';
import FichaEntidades from './pages/FichaEntidades';
import Layout from './components/Layout/Layout'


function App() {

  const [qlikTicket, setQlikTicket] = useState('');


  useEffect(() => {

    const getTicket = async () => {
      try {
        const res = await fetch('https://gcsupport-ebu.internal.vodafone.com/webservices/GC40services.asmx/QlikAuthentication', {
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          method: 'POST',
          body: new URLSearchParams({ userName: 'NevesS3', password: '' })
        })
        const data = await res.text()
        setQlikTicket(data)

      } catch (e) {
        console.log(e)
      }
    }
    /* getTicket() */

  }, [])



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
          <Route path="/fichaentidades" exact>
            <FichaEntidades />
          </Route>

          {/* <div style={{ background: 'white', position: 'fixed', top: 0, left:'450px',zIndex:'999999999', padding: '20px' }}>
  
            {!qlikTicket && <Spinner text="A carregar ticket do QLik" />}
            {qlikTicket &&
              <div>
                <p>Ticket carregado: {qlikTicket}</p>
                <img src={`http://gestcomqap-ebu.internal.vodafone.com/imgticket/resources/img/core/dark_noise_16x16.png?qlikTicket=${qlikTicket}`} alt="" />
              </div>
            }
          </div> */}
        </Layout>
      </Suspense>
    </div >
  );
}

export default App;
