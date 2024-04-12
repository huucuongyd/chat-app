import './ChatBox.scss'
import Draggable from 'react-draggable';
import HeaderBoxChat from './components/Header';
import MessageBox from './components/MesssageBox';
import InputFooter from './components/Footer';

export default function ChatBox(){
    return(
        <Draggable
            defaultPosition={{x:window.innerWidth - 348, y:0}}
            handle='#handle'
        >
            <div className='ChatBox'>
                <HeaderBoxChat/>
                <MessageBox message='hehe'/>
                <InputFooter/>
            </div>
        </Draggable>
    )
}