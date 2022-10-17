import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import './Login.css'

const Login = () => {
    const handleSubmit = values => {
        axios.post('http://doasanguepoa-bff.herokuapp.com/usuario/login', values)
        //axios.post('http://localhost:3333/usuario/login', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data.token)
                    history.push('/')
                }
            })
    }

    const validations = yup.object().shape({
        cpf: yup.number().min(11).required(),
        senha: yup.string().min(2).required()
    })
    return (
        <>
            <h1>Login</h1>
            <p>Fill the fields to continue</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="cpf"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="cpf"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="senha"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="senha"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Login</button>
                </Form>
            </Formik>
        </>
    )
}

export default Login
