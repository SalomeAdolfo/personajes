import React from 'react'
import '../styles/LogInStyles.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { route as baseURL } from '../utils/route';

function LogInPage() {
    const navigate = useNavigate()

    const autoCloseSuccessAlert = (message, icon) => {
        Swal.fire({
            icon: icon,
            html: message,
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            }
        })
    }

    return (
        <section className='container-sm container_form__logIn'>
            <h1>Inicio de sesión</h1>
            <Formik
                initialValues={{
                    usuario: '',
                    password: ''
                }}
                onSubmit={(values) => {
                    async function logIn() {
                        const res = await fetch(`${baseURL}auth/signIn`, {
                            method: 'POST',
                            credentials: 'include',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: values.usuario,
                                password: values.password
                            })
                        })
                        if (res.ok) {

                            window.sessionStorage.setItem('userData', JSON.stringify({ usuario: values.usuario }));
                            autoCloseSuccessAlert(`Bienvenido ${values.usuario}`, 'success')
                            navigate('/alfa_systemV2', { replace: true })
                        }
                        if (res.status === 401 || res.status === 500 || res.status === 400) {
                            autoCloseSuccessAlert('Error de acceso', 'error')
                            console.clear()
                        }
                    }
                    logIn()
                }}
                validationSchema={Yup.object().shape({
                    usuario: Yup.string().required('El usuario es requerido'),
                    password: Yup.string().required('Password requerida')
                })}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} className='container__form_data'>
                        <div className="mb-3 sectionInput">
                            <span>Usuario:</span>
                            <input
                                autoFocus
                                type='text'
                                name='usuario'
                                className='form-control'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete='current-user'
                                value={values.usuario} />
                            {errors.usuario && touched.usuario && <div className='error__message'>{errors.usuario}</div>}
                        </div>
                        <div className='mb-3 sectionInput'>
                            <span>Password:</span>
                            <input
                                type='password'
                                name='password'
                                className='form-control'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete='current-password'
                                value={values.password} />
                            {errors.password && touched.password && <div className='error__message'>{errors.password}</div>}
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" className='btn btn-primary p-3'>
                                Enviar
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </section>
    )
}

export default LogInPage