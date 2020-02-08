import React from 'react';
import BigInfo from './components/BigInfo'
import FavoriteCityPack from './components/FavoriteCityPack'
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.css'

const {store, persistor} = configureStore();

function App() {
  return (
    <div>
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-2">Погода сейчас</h1>
            </div>
        </div>
        <BigInfo />
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <FavoriteCityPack/>
            </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
