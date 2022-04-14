import React from "react";

function ProgressBar(props) {
    const {
        INITIAL_COUNT,
        value,
    } = props;

  return (
      <div className='Animation'>
        <progress value={value} max={INITIAL_COUNT}></progress>
        {value}
      </div>
    )

}
export default ProgressBar