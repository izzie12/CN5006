import React, { useEffect, useState } from 'react'

const LabQ2 = () => {
  const [value, setValue] = useState("")
  const [displayEmoji, setDisplayEmoji] = useState(false)
  const [image, setImage] = useState("")


  useEffect(() => {

    switch (value.toLowerCase()) {
      case "love":
        setImage("Love")
        setDisplayEmoji(true)
        break;
      case "like":
        setImage("like")
        setDisplayEmoji(true)
        break;
      case "sad":
        setImage("sad")
        setDisplayEmoji(true)
        break;
      default:
        setDisplayEmoji(false)

      // code block
    }
  }, [value])

  return (
    <div styles={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
    }}>
      <h1> Write a word in the text box below</h1>
      <input styles={{
        width: "20px",
        outline: "none",

      }} type="text" placeholder="Write a word" onChange={(e) => { setValue(e.target.value) }}></input>
      {displayEmoji ? (<img styles={{
        display: "inline"
      }} src={`images/${image}.png`} alt={`image`} />) : null}
    </div>
  )
}

export default LabQ2