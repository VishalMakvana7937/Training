import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    // API call ko simulate krte h
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Submitting the data: ", data)

  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">First name:</label>
          <input {...register('firstName', { required: true, minLength: { value: 3, message: 'First name must be at least 3 characters long' } })} />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
          <br />
          <br />
          <label htmlFor="">Middle name:</label>
          <input {...register('middleName', { required: true, minLength: 3 })} />
          <br />
          <br />
          <label htmlFor="">Last name:</label>
          <input type="text" {...register('lastName', { required: true, minLength: 3, pattern: { value: /^[a-zA-Z]+$/, message: 'Last name must be only letters' } })} />
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
          <br />
          <br />
          <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submitting...' : 'Submit'} />
        </div>
      </form>
    </>
  )
}

export default App
