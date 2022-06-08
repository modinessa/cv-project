import './index.scss';
import React from 'react';
import  {Provider } from 'react-redux';
import { store } from './store/store';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

import{ makeServer } from './services/server';
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
  </React.StrictMode>
);

