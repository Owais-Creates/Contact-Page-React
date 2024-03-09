import './Form.css'
import Button from '../Buttons/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [text, setText] = useState(" ");

    const submit = (e) => {
        e.preventDefault()
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
    }

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

                    <form onSubmit={submit} >

                        <div className="form_control">
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' />
                        </div>

                        <div className="form_control">
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" name='email' />
                        </div>

                        <div className="form_control">
                            <label htmlFor="text">Text</label>
                            <textarea name="Text" id="" cols="10" rows="5"></textarea>
                        </div>

                        <div className="submit_btn">
                            <Button text="submit" />
                        </div>

                        <div className="output">
                            <span>{`Name --> ${name}`} </span>
                            <span>{`Email --> ${email}`}</span>
                            <span>{`Text --> ${text}`} </span>
                        </div>

                    </form>

                </div>

                <div className="form-right">
                    <img src="/Images/service.svg" alt="" />
                </div>

            </div>
        </>
    )
}

export default Form

