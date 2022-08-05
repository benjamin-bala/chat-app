import React from 'react';
import './index.css';

export default function Login(){
    const passwordInput = document.querySelector("#password");
    // const usernameInput = document.querySelector("#username");
    // const usernameError = document.querySelector(".username_error");
    // const passwordError = document.querySelector(".password_error");
    // const toggle =document.querySelector("toggle_password");

    const toggleVisibility = (e) => {
        if(passwordInput.type === "password"){
            e.target.innerHTML = "hide";
            passwordInput.type = "text";
        }
        else if(passwordInput.type === "text"){
            e.target.innerHTML = "show";
            passwordInput.type = "password"
        }
    }

    // const validateLoginForm = () => {
    //     if(usernameInput.value === " "){
    //         usernameError.innerHTML = "Please enter your Chatgram username or phone number.";
    //     }
    //     else if(passwordInput.value === " "){
    //         passwordError.innerHTML = "Please enter your password.";
    //     }
    // }

    return(
        <div className="Login">
            <aside>
                <div className="container">
                <h1 className='company_name'>Chatgram</h1>
                <h1>Login</h1>
                <h4>Keep up with family &#38; friends!</h4>
                <form id="form">
                    <div className="form__field">
                        <input type="text" placeholder='Phone Number or Username'id='username'/>
                        <span className="username_error"></span>
                    </div>

                    <div className="form__field">
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder='Password'
                        />
                        <span onClick={toggleVisibility} className="toggle_password">show</span>
                        <span className="password_error"></span>
                    </div>
                    
                    <a href="http://" target="_blank" rel="noopener noreferrer">Forgot your password?</a>

                    <button type="submit">LOGIN</button>
                </form>
                </div>
            </aside>
        </div>
    );
}