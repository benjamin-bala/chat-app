import './index.css';
import Emoji from '../../Assets/face-smile.svg';

export default function Message() {
    return(
        <div className="Message">
            <div className="emoji_container">
                <img src={Emoji} alt="smile" className='emoji'/>
            </div>
            <div className="message_body">
                <input type="text" name="message" id="message"  placeholder='Message'/>
            </div>
            <div className="send_message">
                <p>Send</p>
            </div>
        </div>
    )
}