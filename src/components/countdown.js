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
        setStatus(STATUS.STOPPED)
      }
    },
    status === STATUS.STARTED ? 1000 : null,
  )

  const handleToggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <h1>React Pomodoro</h1>
      {status === "Stopped" && (
        <button onClick={handleStart} type="button">
        Start
        </button>
      )}
      {status === "Started" && (
       <button onClick={handleStop} type="button">
        Stop </button> 
      )}
      <button onClick={handleReset} type="button">
        Reset
      </button>
      <button onClick={Increase} type="button">
          +
      </button>
      <button onClick={Decrease} type="button">
          -
      </button>
      <div style={{padding: 20}}>
        {twoDigits(minutesToDisplay)}:
        {twoDigits(secondsToDisplay)}
      </div>
      <Modal show={showModal} close={handleToggleModal} />
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
