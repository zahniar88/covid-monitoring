import LoadingWidgetContent from './LoadingWidgetContent'

const LoadingWidget = () => {
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
      
      <LoadingWidgetContent />
      <LoadingWidgetContent />
      <LoadingWidgetContent />
      
    </div>
  )
}

export default LoadingWidget