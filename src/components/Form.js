import cross from "../images/cross-svgrepo-com.svg"

function Form() {
    return (
        <form className="registrationForm displayNone" id="form">
            <div className="horizontalCenter form-title">
                Login
            </div>
            <div className="handleLoginEmail">
                <div>
                    <div className="userDataTitle">
                        Enter your username
                    </div>
                    <input className="formInp" placeholder="Your username..."></input>
                </div>
                
                <div>
                    <div className="userDataTitle">
                        Enter your password
                    </div>
                    <input onBlur={(e) => {
                        alert(e.target.value)
                    }} className="formInp" id="password" type="password" placeholder="Your password..."></input>
                </div>
            </div>
            <button className="absoluteCenter loginBtn" >
                Login
            </button>
        </form>
    )
}

export default Form