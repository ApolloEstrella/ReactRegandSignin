import React from "react";
import { NavLink } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

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

class Blogs extends React.Component {
    render() {
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Formik
                            initialValues={{ email: "", password: "", confirmpassword: "" }}
                            validationSchema={LoginSchema}
                            onSubmit={(values) => {
                                console.log(values);
                                //this.isSubmitting = false;
                                //alert("Form is validated! Submitting the form...");
                            }}
                        >
                            {({ touched, errors, isSubmitting, values }) =>
                                !isSubmitting ? (
                                    <div>
                                        <div className="row mb-5">
                                            <div className="col-lg-12 text-center">
                                                <h1 className="mt-5">Registration</h1>
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

                                            <div className="form-group">
                                                <label htmlFor="confirmpassword" className="mt-3">
                                                    Confirm Password
                                                </label>
                                                <Field
                                                    type="password"
                                                    name="confirmpassword"
                                                    placeholder="Enter password"
                                                    className={`mt-2 form-control
						${touched.confirmpassword && errors.confirmpassword
                                                            ? "is-invalid"
                                                            : ""
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="confirmpassword"
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
                                        <h1 className="p-3 mt-5">Form Submitted</h1>

                                        <div className="alert alert-success mt-3">
                                            Thank for your connecting with us. Here's what we got from
                                            you !
                                        </div>
                                        <ul className="list-group">
                                            <li className="list-group-item">Email: {values.email}</li>
                                            <li className="list-group-item">
                                                Password: {"******"}
                                            </li>
                                        </ul>
                                        <div>
                                            <NavLink to="/contact">
                                                    <button type="button" class="btn btn-success" style={{ marginTop: 10, width: "100%" }}>Signin</button>
                                            </NavLink>
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
}

export default Blogs;
