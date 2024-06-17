import React from 'react'
import { FadeLoader } from 'react-spinners'
import './Loading.css'

const Loading = () => {
  return (
    <div class='loading'>
      <FadeLoader color="#36d7b7" />
    </div>
  )
}

export default Loading
