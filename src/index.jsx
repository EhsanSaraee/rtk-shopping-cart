import { createRoot } from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);