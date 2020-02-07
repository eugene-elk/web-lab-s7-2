import React from 'react';
import BigInfo from './components/BigInfo'
import FavoriteCityPack from './components/FavoriteCityPack'
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

const {store, persistor} = configureStore();

function App() {
  return (
    <div>
        <div class="header">
            <h1>Погода сейчас</h1>
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
