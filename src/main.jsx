import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import WorkflowReviewPage from './WorkflowReviewPage.jsx';
import './styles.css';
import './brand-override.css';

const WORKFLOW_REVIEW_PATH = '/services/ai-workflow-review';

function WorkflowReviewRoute() {
  const navigate = (path) => {
    window.location.assign(path);
  };

  return (
    <main className="lab-site">
      <header className="site-header">
        <a className="brand" href="/" aria-label="LAB AI & Tech Solutions home">
          <span className="brand-mark">LAB</span>
          <span>AI & Tech Solutions</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/#approach">Approach</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>
      <WorkflowReviewPage navigate={navigate} />
      <footer className="footer">
        <div>
          <strong>Steven Lees · LAB AI & Tech Solutions</strong>
          <p>Built with AI assistance. Reviewed by a human before publication.</p>
        </div>
        <div className="footer-boundary">
          <span className="status">Staging build</span>
          <p>Not approved for public launch.</p>
        </div>
      </footer>
    </main>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(window.location.pathname === WORKFLOW_REVIEW_PATH ? <WorkflowReviewRoute /> : <App />);
