import React, { useState } from 'react'
import './Meme.css'
import data from '../utils/data'

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: data[0].image
  })

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * data.length)
    const randomImage = data[randomNumber].image
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage
    }))
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <section>
        <div className='form'>
            <div className="input-boxes">
              <input 
                type="text" 
                name="topText" 
                id="topText" 
                placeholder='Top text' 
                onChange={handleChange}
                value={meme.topText}
              />
              <input 
                type="text" 
                name="bottomText" 
                id="bottomText" 
                placeholder='Button text' 
                onChange={handleChange} 
                value={meme.bottomText}
              />
            </div>
            <button type="submit" className='btn' onClick={getMemeImage}>
              Get new meme image 🖼🎲
            </button>
            <div className="meme">
              <img src={meme.randomImage} alt="meme" className='meme-image' />
              <h2 className="meme-text top">{meme.topText}</h2>
              <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    </section>
  )
}

export default Meme