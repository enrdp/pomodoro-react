import React from "react";

const ModalExtraTime = (props) => {

  const { showModalExtra,
          closeModalExtra,
          minutesToDisplay,
          secondsToDisplay
        } = props;

  // Return null if false
  if (!showModalExtra) {
    document.body.style.overflow = 'unset';
    return null;
 }
  return (
    <div className="modal-ui1 modalExtra_container">
      <h3 className="mdhead">Modal Extra Heading</h3>  
      <div className="mdbody">Modal Extra Body</div>
      <div className="modalExtraTime">
      <button className="button__increase" onClick={() => {props.Increase()}}>+</button>
      <div className="timer__extraTime">
        {props.twoDigits(minutesToDisplay)}:
        {props.twoDigits(secondsToDisplay)}
        </div>
        <button className="button__decrease" onClick={()=>{props.Decrease()}}>-</button>
      </div>
      <div className="mdactions">
        <button onClick={closeModalExtra} className="btnui btnui2 button__start" name="close">Set Timer</button>
      </div> 
    </div>
);
}
export default ModalExtraTime;
