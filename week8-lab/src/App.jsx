import { useState } from 'react'
import Isaac from './assets/isaac.jpg'
import './App.css'
import KeyPadComponent from './components/Calculator'
import Button from './components/Button'

function App() {
  const [showMe, setShowMe] = useState(false)

  const showPicture = () => {
    setShowMe(!showMe)
  }

  return (
    <div style={{ display: "flex" }}>
      <div><KeyPadComponent /></div>
      
      <div >
        <Button label="Show Me" clickHandle={showPicture} />
        {showMe ? <img src={Isaac} alt='Isaac Ntegeka' /> : null}

      </div>
      <div>
        <Button label="Show Me" clickHandle={showPicture} />
        {showMe ? <img src={Isaac} alt='Isaac Ntegeka' /> : null}</div>


    </div>
     
      
  )
}

export default App
