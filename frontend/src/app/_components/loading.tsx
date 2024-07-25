export function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center space-x-2">
      <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-black border-opacity-90 dark:border-white"></div>
      <div>Carregando...</div>
    </div>
  )
}
