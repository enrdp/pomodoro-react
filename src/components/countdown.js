import React, {useState, useEffect, useRef} from 'react'
import Modal from './modal'
import ProgressBar from './progressBar'
import '../App.css'
import './button.css'

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

const INITIAL_COUNT = 10 //1500

function PomodoroApp() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
  const [status, setStatus] = useState(STATUS.STOPPED)
  const [showModal, setShowModal] = useState(false);
  const [disable, setDisable] = useState(false);
  const [value, setValue] = useState(0);
  const [progressBar, setProgressBar] = useState(0)
  const [opacity, setOpacity] = useState('visible')

  const secondsToDisplay = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
  const minutesToDisplay = minutesRemaining % 60

  const handleStart = () => {
    setProgressBar(secondsRemaining)
    setStatus(STATUS.STARTED)
  }

  const handleStop = () => {
    setOpacity('visible')
    setStatus(STATUS.STOPPED)
  }
  const handleReset = () => {
    setStatus(STATUS.STOPPED)
    setSecondsRemaining(INITIAL_COUNT)
    setValue(0)
    setOpacity('visible')
  }
  const Increase = () => {
      if(status === "Stopped"){
          setSecondsRemaining(secondsRemaining - secondsToDisplay + 60)
      }
  }
  const Decrease = () => {
    if(status === "Stopped"){
      if(secondsRemaining <= 60){
        setSecondsRemaining(secondsRemaining)
      }else if(secondsRemaining % 60 !== 0){
        setSecondsRemaining(secondsRemaining - secondsToDisplay)
      }else{
        setSecondsRemaining(secondsRemaining - secondsToDisplay - 60)
  }
}
}
  useInterval(
    () => {
      if (secondsRemaining > 0 && value >= 0) {
        setSecondsRemaining(secondsRemaining - 1)
        setValue(value + 1)
        if(opacity === 'visible'){
          setOpacity('hidden')
        }else{
          setOpacity('visible')
        }
      } else {
        handleToggleModal()
        changeValueButton()
        setStatus(STATUS.STOPPED)
      }
      
    },
    status === STATUS.STARTED ? 1000 : null,
  )
  const changeValueButton = () => {
    setDisable(true);
  }

  const handleToggleModal = () => {
    //Disable Scroll
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
    setValue(0)
    setShowModal(!showModal);
    setDisable(false);
  }

  return (
    <div className="App">
      <div className='timer'>
      <ProgressBar
      value={value}
      progressBar={progressBar}
      />
      <div className='progress__timer'>
      <div className="showTimer">
        {twoDigits(minutesToDisplay)}<span className={opacity}>:</span>
        {twoDigits(secondsToDisplay)}
      </div>


      <div className='button__timer'>
      <button className="button__increase" onClick={Increase} disabled={disable} type="button">
          +
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
        </defs>
    </svg>
    {status === "Started" && (
    <button className="gooey-button gooey-button_stop" onClick={handleStop} disabled={disable} type="button">
                      Stop
            <span className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
        </span>
    </button>
    )}

{status === "Stopped" && (
    <button className="gooey-button" onClick={() => [handleStart()]} disabled={disable} type="button">
                      Start
            <span className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
        </span>
    </button>
)}
<button className="gooey-button gooey-button_reset" onClick={handleReset} disabled={disable} type="button">
                      Reset
            <span className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
        </span>
    </button>
      
      <button className="button__decrease" onClick={Decrease} disabled={disable} type="button">
          -
      </button>
      </div>
      </div>
      </div>

      <Modal
      Decrease={Decrease}
      Increase={Increase}
      twoDigits={twoDigits}
      secondsRemaining={secondsRemaining} 
      setSecondsRemaining={setSecondsRemaining} 
      secondsToDisplay={secondsToDisplay}
      minutesToDisplay={minutesToDisplay}
      show={showModal} 
      close={() => [handleToggleModal()]} 
      closeModal={()=>[handleToggleModal(),handleReset()]} 
      />

      
    </div>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])

}
export default PomodoroApp;
const twoDigits = (num) => String(num).padStart(2, '0')
