import React from "react";
import './progressBar.css'

function ProgressBar(props) {
    const {
        value,
        progressBar
    } = props;

  return (
      <div className='Animation'>
        <div className="progress__container">
        <progress value={value} max={progressBar} className="spin circle loader"></progress>
        <div className="progress__content">
        </div>
        </div>
        <progress value={value} max={progressBar}></progress>
        {value}
      </div>
    )

}
export default ProgressBar