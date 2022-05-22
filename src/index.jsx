import { createRoot } from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import 'index.css';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
   <Provider store={store}>
      <PersistGate persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>
);
