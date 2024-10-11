import { useRef } from "react";


export default function App() {
    // const [inputsV , setInputs] = useState();
    const inputsV1 = useRef();
    const inputsV2 = useRef();
    const inputsV3 = useRef();



    const sayHello = () => {
        let UserName = inputsV1.current.value;
        let Email = inputsV2.current.value;
        let Password = inputsV3.current.value;

  
        localStorage.setItem("UserName", UserName);
        localStorage.setItem("Email", Email);
        localStorage.setItem("Password", Password);



      



    }  



    return (
        <div>
            <div className="login">
                {/* <i class="fa-solid fa-user"></i> */}
                <form action="">
                    <h1>Register Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="userName" required ref={inputsV1} />
                    </div>
                    <div className="input-box">
                        <input type="Email" placeholder="Email" required ref={inputsV2} />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required ref={inputsV3} />
                    </div>
                    <button className="btn" onClick={sayHello}>Send</button>
                </form>
            </div>
        </div>
    )
}
