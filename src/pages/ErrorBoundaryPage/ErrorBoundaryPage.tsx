import { Button } from '../../components/UI/Button/Button';
import styles from './ErrorBoundaryPage.module.scss';

export const ErrorBoundaryPage = () => {
  return (
    <div className={styles.errorBoundary}>
      <h1 className={styles.title}>Sorry, something went wrong</h1>
      <Button
        classname={styles.button}
        onClick={() => window.location.reload()}
      >
        Reload page
      </Button>
    </div>
  );
};
