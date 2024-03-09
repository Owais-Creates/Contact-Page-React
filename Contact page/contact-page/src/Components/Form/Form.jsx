import './Form.css'
import Button from '../Buttons/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Form = () => {

    return (
        <>
            <div className="form-container">

                <div className="form-left">

                    <div className="top-buttons">
                        <Button text="Via support chat" icon={<MdMessage fontSize="20px" />} />
                        <Button text="Via Call" icon={<FaPhoneAlt fontSize="20px" />} />
                    </div>

                    <div className={'middle-button'}>
                        <Button isOutline={true} text="Via Email Form" icon={<IoMail fontSize="20px" />} />
                    </div>

                </div>

                <div className="form-right">
                    <img src="/Images/service.svg" alt="" />
                </div>

            </div>
        </>
    )
}

export default Form

 