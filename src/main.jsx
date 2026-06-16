import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import LabLLM from './LabLLM.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <LabLLM />
  </>
);
