import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import "./Contact.css";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

function AddContact() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Create new contact</h3>
            <Formik
                initialValues={
                    {
                        name: "",
                        email: "",
                        phone: "",
                        message: ""
                    }
                }
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .required("Name is not empty!"),
                        email: Yup.string()
                            .required("Email is not empty!")
                            .matches(/^[\w.]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){1,2}$/, "Email is not matches formatter!"),
                        phone: Yup.string()
                            .required("Phone is not empty!")
                    })
                }
                onSubmit={(contact, {setSubmitting}) => {
                    dispatch({type: "ADD", payload: contact});

                    setTimeout(() => {
                        setSubmitting(false)
                        toast.success("Add new success!", {position: "top-center"})
                        navigate("/contact")
                    }, 0)
                }}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <Field type="text" className="form-control" id="name" name="name"/>
                        <ErrorMessage name="name" className="form-err" component="span"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <Field type="text" className="form-control" id="email" name="email"/>
                        <ErrorMessage name="email" className="form-err" component="span"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone">Phone</label>
                        <Field type="text" className="form-control" id="phone" name="phone"/>
                        <ErrorMessage name="phone" className="form-err" component="span"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message">Message</label>
                        <Field as="textarea" className="form-control" id="message" name="message"/>
                    </div>
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddContact;