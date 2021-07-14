import React, { Suspense } from 'react'
import Spinner from "./components/UI/Spinner";
import HomePage from './pages/HomePage';


function App() {

  const Layout = React.lazy(() => import('./components/Layout'));

  return (

    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Layout>
            <HomePage />
        </Layout>
      </Suspense>
    </div >
  );
}

export default App;
