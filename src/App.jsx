import { useState } from 'react'
import TextBox from '../components/TextBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3 className='ml-4 mt-4'>this is a text-box.</h3>
        <TextBox/>
      </div>
    </>
  )
}

export default App
