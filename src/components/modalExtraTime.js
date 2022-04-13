import React from "react";

const ModalExtraTime = (props) => {

    const { showModalExtra , closeModalExtra } = props;

  // Return null if false
  if (!showModalExtra) {
    document.body.style.overflow = 'unset';
    return null;
  }
  return (
    <div className="modal-ui1">
      <h3 className="mdhead">Modal Extra Heading</h3>  
      <div className="mdbody">Modal Extra Body</div> 
      <div className="mdactions">
        <button onClick={closeModalExtra} className="btnui btnui2" name="close">Set Timer</button>
      </div> 
    </div>
);
}
export default ModalExtraTime;