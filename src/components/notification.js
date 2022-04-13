import {useEffect} from 'react'
import mp3File from './Notification.mp3';

function Notification() {

  useEffect(() => {
    const audio = new Audio(mp3File);
    audio.play()
  }, []);

  return <div />

};
export default Notification