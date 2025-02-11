import styles from './ErrorAndLoadingHandler.module.css'

interface ErrorAndLoadingHandlerProps {
  children: React.ReactNode,
  isLoading?: boolean,
  error: Error | null
  loader?: React.ReactNode
}

export function ErrorAndLoadingHandler({ children, isLoading, error, loader }: ErrorAndLoadingHandlerProps) {
  if (error) {
    return <div className={styles.Error}>Unable to fetch product data</div> // Or {error.message}
  } else if (isLoading) {
    return <div data-testid="loader">{loader}</div>
  } else {
    return <>{children}</>
  }
}