import React from 'react';
import '../modal.css';

const Modal = props => { 
  const { show , close , timer } = props;

  // Return null if false
  if (!show) {
    document.body.style.overflow = 'unset';
    return null;
  }

  return (
      <div className="modal-ui1">
        <h3 className="mdhead">Modal Heading</h3>  
        <div className="mdbody">Modal Body</div> 
        <div className="mdactions">
          <button className="btnui" type="button" onClick={timer}>OK</button>
          <button onClick={close} className="btnui btnui2" name="close">Close</button>
        </div> 
      </div>
  );
}
export default Modal;