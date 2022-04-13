import React, {useState} from 'react';
import '../modal.css';
import Notification from './notification';
import ModalExtraTime from './modalExtraTime';

const Modal = props => { 
  const { show , close , timer } = props;
  const [showModalExtra, setshowModalExtra] = useState(false);

  // Return null if false
  if (!show) {
    document.body.style.overflow = 'unset';
    return null;
  }
  const handleToggleModalExtra = () => {
    setshowModalExtra(!showModalExtra);
  }

  return (
    
      <div className="modal-ui1">
        <Notification />
        <h3 className="mdhead">Modal Heading</h3>  
        <div className="mdbody">Modal Body</div> 
        <div className="mdactions">
          <button className="btnui" type="button" onClick={handleToggleModalExtra}>OK</button>
          <button onClick={close} className="btnui btnui2" name="close">Close</button>
        </div>
        <ModalExtraTime showModalExtra={showModalExtra} closeModalExtra={handleToggleModalExtra} />
      </div>
  );
}
export default Modal;