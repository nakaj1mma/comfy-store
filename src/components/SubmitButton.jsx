import { useNavigation } from 'react-router-dom'

const SubmitButton = ({ text }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <button
      type='submit'
      className='btn btn-primary uppercase btn-block'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className=' loading loading-dots ' />
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  )
}

export default SubmitButton
