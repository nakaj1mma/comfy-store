import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()

  const errorMessages = {
    400: 'Bad request. Please check the data you entered.',
    401: 'You are not authorized. Please log in to continue.',
    403: 'Access denied. You do not have permission to view this page.',
    404: 'Page not found. The page might have been removed or never existed.',
    408: 'Request timeout. The server took too long to respond.',
    429: 'Too many requests. Please try again later.',
    500: 'Internal server error. Something went wrong on our side.',
    502: 'Bad gateway. Please try again later.',
    503: 'Service unavailable. The server is currently unavailable.',
    504: 'Gateway timeout. The server did not respond in time.',
    default: 'An unknown error occurred. Please try again later.',
  }

  const status = error?.status || error?.response?.status
  const message =
    errorMessages[status] || error?.message || errorMessages.default

  return (
    <main className=' grid min-h-[100vh] place-items-center px-8'>
      <div className='text-center'>
        <p className=' text-center font-semibold text-9xl text-primary'>
          {status}
        </p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
          {error.statusText}
        </h1>
        <p className=' mt-6 text-lg leading-7'>{message}</p>
        <div className='mt-10'>
          <Link to='/' className='btn btn-secondary uppercase'>
            go back home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Error
