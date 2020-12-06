import { useState } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';


export const UserForm = ({onSubmit, onCancel, user, title,btnValue}) =>{

const formik = useFormik({
    initialValues:{
        firstName:user?user.firstName:'',
        lastName:user?user.lastName:'',
        email:user?user.email:'',
        role:user?user.role:''
    },
    onSubmit: (values) => {
        onSubmit(values);
    },
     validationSchema: Yup.object({
        firstName: Yup.string()
        .min(5,'El nombre tiene que tener 5 caracteres minimo')
        .max(20,'El nombre tiene que tener 20 caracteres maximo')
        .required('El nombre es requerido'),
        lastName: Yup.string()
        .min(5,'El apellido tiene que tener 5 caracteres minimo')
        .max(20,'El apellido tiene que tener 20 caracteres maximo')
        .required('El apellido es requerido'),
        email: Yup.string()
        .required('El email es requerido'),
        role:Yup.string()
        .min(5,'El rol tiene que tener 5 caracteres minimo')
        .max(20,'El rol tiene que tener 20 caracteres maximo')
        .required('El rol es requerido')
    }) 
});
const {
    errors, 
    touched, 
    isValid, 
    values, 
    handleChange,
    handleSubmit,
    handleBlur} = formik;
    return(
        <div className="container-form-user">
            <h2 class="title-form">
                {title}
            </h2>
            <pre>
                Error: {JSON.stringify(formik.errors.name)}
            </pre>
            <pre>
                Touched: {JSON.stringify(formik.touched.name)}
            </pre>
            <form onSubmit={handleSubmit} class="form">
                <div className="container-input">
                    <label class="label-user-form">First Name</label>
                    <input 
                    className={
                        clsx(
                            'input',
                            {
                                'is-danger':errors.firstName && touched.firstName,
                                'is-success':!errors.firstName && touched.firstName
                            }
                        )}
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        placeholder="First name"
                        />
                </div>
                {errors.firstName && touched.firstName ? (
                    <p class="help is-danger">
                        {errors.firstName}
                    </p>
                ) : null}
                <div className="container-input">
                <label class="label-user-form">last Name</label>
                    <input 
                    className={
                        clsx(
                            'input',
                            {
                                'is-danger':errors.lastName && touched.lastName,
                                'is-success':!errors.lastName && touched.lastName
                            }
                        )}
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        placeholder="Last name"
                        />
                </div>
                {errors.lastName && touched.lastName ? (
                    <p class="help is-danger">
                        {errors.lastName}
                    </p>
                ) : null}
                <div className="container-input">
                <label class="label-user-form">Email</label>
                    <input 
                    className={
                        clsx(
                            'input',
                            {
                                'is-danger':errors.email && touched.email,
                                'is-success':!errors.email && touched.email
                            }
                        )}
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        placeholder="Email"
                        />
                </div>
                {errors.email && touched.email ? (
                    <p class="help is-danger">
                        {errors.email}
                    </p>
                ) : null}
                <div className="container-input">
                <label class="label-user-form">Role</label>
                    <input 
                    className={
                        clsx(
                            'input',
                            {
                                'is-danger':errors.role && touched.role,
                                'is-success':!errors.role && touched.role
                            }
                        )}
                        type="text"
                        name="role"
                        value={values.role}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        placeholder="Role"
                        />
                </div>
                {errors.role && touched.role ? (
                    <p class="help is-danger">
                        {errors.role}
                    </p>
                ) : null}
                <div className="container-input group-button">
					<div>
						<button className="button info"
							disabled={!formik.isValid}>
							{btnValue}
						</button>
					</div>
					<div>
                        <button className="button danger" type="button" onClick={onCancel}>
							Cancel
						</button>
					</div>
				</div>
            </form>
        </div>
    )
}