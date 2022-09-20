const CategoryField = (props: { objectKey: string; value: number; onFieldUpdate: any }) => {
  return (
    <div
      className='flex flex-row items-start justify-between align-middle mx-2'
      key={props.objectKey}
    >
      <div className='flex flex-row m-1 '>
        <p>
          {props.objectKey}: {props.value}
        </p>
      </div>
      <div className='flex flex-row m-1 '>
        <button
          onClick={() => {
            props.onFieldUpdate(props.value + 1)
          }}
          className='bg-green-700/95 shadow z-50 m-l-1 px-2 rounded-l-lg text-green-100  hover:bg-green-500'
        >
          +
        </button>
        <button
          onClick={() => {
            props.onFieldUpdate(props.value - 1)
          }}
          className='bg-green-200/95 shadow z-50 m-r-1 items-center px-2 rounded-r-lg text-green-700  border-y border-r border-green-700 hover:bg-green-300'
        >
          −
        </button>
      </div>
    </div>
  )
}

export default CategoryField
