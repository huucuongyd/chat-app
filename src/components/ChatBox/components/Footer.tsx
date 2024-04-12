import tym from '../../../assets/heart.png';
import smile from '../../../assets/smile-hand-drawn-emoticon.png'

export default function InputFooter() {
    return(
        <div className="input-footer">
            <div className="input">
                <div className="icon">
                    <img src={smile}/>
                </div>
                <input 
                    className="input-chat"
                    placeholder='Type something ...'
                />
                <button className="send-btn"><img src={tym}/></button>
            </div>
        </div>
    )
}