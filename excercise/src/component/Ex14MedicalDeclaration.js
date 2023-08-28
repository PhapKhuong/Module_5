import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";

export function Ex14MedicalDeclaration() {
    return (
        <div>
            <h1>TO KHAI Y TE</h1>
            <Formik
                initialValues={
                    {
                        name: "",
                        id: "",
                        year: 0,
                        gender: "0",
                        company: "",
                        status: false,
                        phone: "",
                        health: [],
                        note: ""
                    }
                }

                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .required("Ten khong duoc de trong"),
                        id: Yup.string()
                            .required("Id khong duoc de trong"),
                        year: Yup.number()
                            .min(1900),
                        phone: Yup.string()
                            .required("So dien thoai khong duoc de trong")
                    })
                }

                onSubmit={(value, {setSubmitting}) => {
                    console.log(value);
                    setTimeout(() => {
                        setSubmitting(false);
                        toast.success("Add new is success!")
                    }, 0)
                }}
            >
                <Form>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <Field type='text' className='form-control' id='name' name="name"/>
                        <ErrorMessage name="name" className="form-err" component='span'></ErrorMessage>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='id' className='form-label'>ID</label>
                        <Field type='text' className='form-control' id='id' name="id"/>
                        <ErrorMessage name="id" className="form-err" component='span'></ErrorMessage>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='year' className='form-label'>Year</label>
                        <Field type='number' className='form-control' id='year' name="year"/>
                        <ErrorMessage name="year" className="form-err" component='span'></ErrorMessage>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Gender</label>
                        <div>
                            <Field type='radio' className="form-check-input" id='gender1' name="gender" value="1"/>
                            <label htmlFor='gender1' className='form-label'>Male</label>
                        </div>
                        <div>
                            <Field type='radio' className="form-check-input" id='gender0' name="gender" value="0"/>
                            <label htmlFor='gender0' className='form-label'>Female</label>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='company' className='form-label'>Company</label>
                        <Field type='text' className='form-control' id='company' name="company"/>
                        <ErrorMessage name="company" className="form-err" component='span'></ErrorMessage>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Co the bao hiem y te</label>
                        <div>
                            <Field type="checkbox" className="form-check-input" name="status"></Field>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='phone' className='form-label'>Phone</label>
                        <Field type='text' className='form-control' id='phone' name="phone"/>
                        <ErrorMessage name="phone" className="form-err" component='span'></ErrorMessage>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Health</label>
                        <div>
                            <Field type="checkbox" className="form-check-input" name="health" id="first"
                                   value="health 1"></Field>
                            <label htmlFor="first">Health 1</label>
                        </div>
                        <div>
                            <Field type="checkbox" className="form-check-input" name="health" id="second"
                                   value="health 2"></Field>
                            <label htmlFor="first">Health 2</label>
                        </div>
                        <div>
                            <Field type="checkbox" className="form-check-input" name="health" id="third"
                                   value="health 3"></Field>
                            <label htmlFor="first">Health 3</label>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='note' className='form-label'>Note</label>
                        <Field as="textarea" className='form-control' id='note' name="phone"/>
                    </div>
                    <button type='submit' className='btn btn-outline-success'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}