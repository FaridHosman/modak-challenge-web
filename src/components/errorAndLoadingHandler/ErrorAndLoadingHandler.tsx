import { ErrorMessage } from "@components/errorMessage/ErrorMessage"
import Loader from "@components/loader/Loader"

interface ErrorAndLoadingHandlerProps {
  children: React.ReactNode,
  isLoading?: boolean,
  error: Error | null
}

export function ErrorAndLoadingHandler({ children, isLoading, error }: ErrorAndLoadingHandlerProps) {
  if (error) {
    return <ErrorMessage error={error} />
  } else if (isLoading) {
    return <div data-testid="loader"><Loader /></div>
  } else {
    return <>{children}</>
  }
}