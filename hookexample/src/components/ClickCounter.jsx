import React, { useState } from 'react'

const ClickCounter = () => {
    const [clicks, setClicks] = useState(0);

    const clickIncrease = () => {
        setClicks(clicks + 1)
    }
    const clickDecrease = () => {
        setClicks(clicks - 1)
    }



  return (
    <div>
        <h1>Click Counter</h1>
        <p>Hi, Please Click the Button Below!</p><br></br>
        <p>The number of Clicks will be displayed below</p>
        <button type="button" onClick={clickIncrease} >Click to Increase</button>
        <button type="button" onClick={clickDecrease} >Click to Decrease</button>
        <p>You have clicked the button {clicks} times</p>
    </div>
  )
}

export default ClickCounter