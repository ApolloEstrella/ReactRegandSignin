import React from "react";
///import { NavLink } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice';



const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required"),
    confirmpassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
        )
    })
});


const Contact = () =>  {
    const count = useSelector((state) => state.counter.value)
    const username = useSelector((state) => state.counter.username)
    const dispatch = useDispatch()
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Formik
                            initialValues={{ email: "", password: "", confirmpassword: "" }}
                            validationSchema={LoginSchema}
                            onSubmit={(values) => {
                                console.log(values);
                                //dispatch(increment("jane"));
                                 
                                dispatch(increment({ type: "ACTIVITY", username: values.email }));



                                //this.isSubmitting = false;
                                //alert("Form is validated! Submitting the form...");
                            }}
                        >
                            {({ touched, errors, isSubmitting, values }) =>
                                !isSubmitting ? (
                                    <div> 
                                        <div className="row mb-5">
                                            <div className="col-lg-12 text-center">
                                                <h1 className="mt-5">Signin</h1>
                                            </div>
                                        </div>
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter email"
                                                    autocomplete="off"
                                                    className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
                                                />

                                                <ErrorMessage
                                                    component="div"
                                                    name="email"
                                                    className="invalid-feedback"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password" className="mt-3">
                                                    Password
                                                </label>
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter password"
                                                    className={`mt-2 form-control
						${touched.password && errors.password
                                                            ? "is-invalid"
                                                            : ""
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="password"
                                                    className="invalid-feedback"
                                                />
                                            </div>                                        
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block mt-4"
                                            >
                                                Submit
                                            </button>
                                        </Form>
                                    </div>
                                ) : (
                                    <div>

                                        <div className="alert alert-success mt-3">
                                            Welcome to ABC Corp. !!!
                                        </div>
                                    </div>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        );
     
}

export default Contact;
