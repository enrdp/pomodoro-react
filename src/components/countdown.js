import React, {useState, useEffect, useRef} from 'react'
import Modal from './modal'

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

const INITIAL_COUNT = 3 //1500

function PomodoroApp() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
  const [status, setStatus] = useState(STATUS.STOPPED)
  const [showModal, setShowModal] = useState(false);
  const [disable, setDisable] = useState(false);

  const secondsToDisplay = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
  const minutesToDisplay = minutesRemaining % 60

  const handleStart = () => {
    setStatus(STATUS.STARTED)
  }
  const handleStop = () => {
    setStatus(STATUS.STOPPED)
  }
  const handleReset = () => {
    setStatus(STATUS.STOPPED)
    setSecondsRemaining(INITIAL_COUNT)
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
      }else {
        setSecondsRemaining(secondsRemaining - 60)
  }
}
}

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
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
    setShowModal(!showModal);
    setDisable(false);
  }
  
  return (
    <div className="App">
      <h1>React Pomodoro</h1>
      {status === "Stopped" && (
        <button onClick={handleStart} disabled={disable} type="button">
        Start
        </button>
      )}
      {status === "Started" && (
       <button onClick={handleStop} disabled={disable} type="button">
        Stop </button> 
      )}
      <button onClick={handleReset} disabled={disable} type="button">
        Reset
      </button>
      <button onClick={Increase} disabled={disable} type="button">
          +
      </button>
      <button onClick={Decrease} disabled={disable} type="button">
          -
      </button>
      <div style={{padding: 20}}>
        {twoDigits(minutesToDisplay)}:
        {twoDigits(secondsToDisplay)}
      </div>
      <Modal show={showModal} close={() => [handleToggleModal(), handleReset()]} />
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
