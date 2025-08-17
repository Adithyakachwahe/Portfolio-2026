import AppRouter from './router';
import './styles/globals.css';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  );
}

export default App;