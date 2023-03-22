import LoadingIcon from './icons/LoadingIcon'

export default function Loading () {
  return (
    <div className='text-center'>
      <div role='status'>
        <LoadingIcon />
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}
