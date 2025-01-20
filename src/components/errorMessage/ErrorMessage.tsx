import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  error: Error
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className={styles.Error}>{error.message}</div>
  )
}