import React, {useState} from 'react';
import '../modal.css';
import Notification from './notification';
import ModalExtraTime from './modalExtraTime';

const Modal = (props) => { 
  const { show,
          close,
          closeModal,
          secondsRemaining, 
          setSecondsRemaining, 
          minutesToDisplay, 
          secondsToDisplay,
          Decrease,
          Increase,
          twoDigits
          } = props;

  const [showModalExtra, setshowModalExtra] = useState(false);
  const [disable, setDisable] = useState(false);


  // Return null if false
  if (!show) {
    document.body.style.overflow = 'unset';
    return null;
  }
  const handleToggleModalExtra = () => {
    setshowModalExtra(!showModalExtra);
    setDisable(false);
  }
  const changeValueButton = () => {
    setDisable(true);
  }
  const resetExtraTime = () => {
    setSecondsRemaining(60)
  }

  return (
      
      <div className="modal-ui1">
        <Notification />
        <h3 className="mdhead">Break Time</h3>  
        <div className="mdbody">Relax</div> 
        <div className="mdactions">
          <button className="btnui" type="button" disabled={disable} onClick={()=> [handleToggleModalExtra(), changeValueButton(), resetExtraTime()]}>Change Timer</button>
          <button onClick={()=> [close(),closeModal()]} className="btnui btnui2" disabled={disable} name="close">Close</button>
        </div>
        <ModalExtraTime
        Decrease={Decrease}
        Increase={Increase}
        twoDigits={twoDigits}
        secondsRemaining={secondsRemaining} 
        setSecondsRemaining={setSecondsRemaining} 
        secondsToDisplay={secondsToDisplay}
        minutesToDisplay={minutesToDisplay}
        showModalExtra={showModalExtra} 
        closeModalExtra={() => [handleToggleModalExtra(), close()]} 
        />
      </div>
      
  );
}
export default Modal;