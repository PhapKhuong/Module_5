import {Component} from "react";
import Ex9Home from "./Ex9Home";

class Ex9LogIn extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                email: "",
                password: "",
                isRemember: ""
            },
            isValid: false
        }
    }

    handleChange(email, password) {
        this.setState({
            form: {
                email: email,
                password: password
            }
        })
        this.checkValidForm();
    }

    handleChangeCheckbox(remember) {
        this.setState({
            isRemember: remember
        })
        this.checkValidForm();
    }

    checkValidForm() {
        let {email, password} = this.state.form;
        let value = email && password;
        this.setState({
            isValid: !!value
        })
    }

    handleSubmit() {
        if (this.state.isValid) {
            return <Ex9Home/>
        }
    }

    render() {
        return (
            <div>
                <div className="container d-flex align-items-center text-center">
                    <div className="form-signin">
                        <form>
                            <img className="mb-4"
                                 src="https://awbi.org/wp-content/uploads/2023/04/1-1.jpg"
                                 alt="" width="72" height="100"/>
                            <h1 className="h3 mb-3 fw-normal">Sign in</h1>
                            <div className="form-floating">
                                <input className="form-control email" type="email" name="email"
                                       placeholder="name@example.com" value={this.state.email}
                                       onChange={(event) => {
                                           this.handleChange(event.target.value, this.state.form.password)
                                       }}/>
                                <label>Email address</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control password" type="password" name="password"
                                       placeholder="Password" value={this.state.password}
                                       onChange={(event) => {
                                           this.handleChange(this.state.form.email, event.target.value)
                                       }}/>
                                <label>Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value={this.state.isRemember}
                                           onChange={(event) => {
                                               this.handleChangeCheckbox(event.target.value)
                                           }}/> Remember me
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="button"
                                    onClick={() => this.handleSubmit()}>Sign in
                            </button>
                            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ex9LogIn;