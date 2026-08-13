import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import './brand-override.css';

createRoot(document.getElementById('root')).render(<App />);
