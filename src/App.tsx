import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from './app/store';
import { Route, Routes } from 'react-router-dom';
import WindmillComponent from './features/windmills/windmill';
import SolarSite from './features/solar/solar';
import Navbar from './Navbar';
import Home from './Home';
import ListOfSites from './features/sites/ListOfSites';

import './assets/style.scss';
import SelectedSite from './features/sites/SelectedSite';

function App() {
  const windmills = useSelector((state: RootState) => state.windmills);
  const solar = useSelector((state: RootState) => state.solar);

  // Testing
  console.log(typeof windmills);
  console.log(windmills);
  console.log(solar);
  console.log(solar[0]);

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/sites" element={<ListOfSites />}>

          <Route path="windmills"  element={<WindmillComponent millList={windmills}/>} >
            <Route path="windmill" element={<SelectedSite />} />
          </Route>
          <Route path="solarpanels"  element={<SolarSite solarPanels={solar}/>} />

        </Route>

      </Routes>
    </>
  );
}

export default App;
