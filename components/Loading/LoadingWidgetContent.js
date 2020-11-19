const LoadingWidgetContent = () => {
  return (

    <div className="col-span-1">
      <div className="p-5 border border-teal-200 bg-white rounded-md shadow-md flex items-center space-x-5 animate-pulse">
        <div>
          <div className="h-12 w-12 rounded-full bg-teal-300"></div>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <div className="w-7/12 py-1 rounded bg-teal-300"></div>
          <div className="w-full py-3 rounded bg-teal-300"></div>
          <div className="w-7/12 py-2 rounded bg-teal-300"></div>
        </div>
      </div>
    </div>

  )
}

export default LoadingWidgetContent