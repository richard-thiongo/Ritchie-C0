import axios from "axios";
import { useState } from "react";

const SignUp = () => {

    let [username,setUsername] = useState("")
    let [email,setEmail] = useState("")
    let [phone,setPhone] = useState("")
    let [password,setPassword] = useState("")

    let[loading, setLoading]= useState("");
    let [error,setError]= useState("");
    let [success,setSuccess] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            setLoading ("Please wait, loading...")
            setError("")

            const data = new FormData ()
            data.append("username",username)
            data.append("email",email)
            data.append("phone",phone)
            data.append("password",password)

            const response = await axios.post("https://richardthiongo.pythonanywhere.com/api/signup")
            setLoading("")
            setError("")
            setSuccess(response.data.success)
            setUsername("")
            setPassword("")
            setEmail("")
            setPhone("")

        } catch (error) {
            setLoading("")
            setError("Something went wrong")
        }
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-6 card shadow p-4 ">
                <h2>Sign Up</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>

                <form onSubmit={submitForm}>
                    <input type="text" className="form-control " required placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} /> <br />
                    <input type="email" className="form-control" required placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type="tel" className="form-control" required placeholder="Enter Phone no. " onChange={(e) => setPhone(e.target.value)} /> <br />
                    <input type="password" required placeholder="Enter Password" className="form-control" onChange={(e) => setPassword(e.target.value)} /> <br />
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </form>
            </div>
        
        </div>
     );
}
 
export default SignUp;