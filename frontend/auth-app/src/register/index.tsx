import { Fragment } from "react";
import { useForm } from 'react-hook-form';
import { registerUser } from "../hooks/useHooks";
import { useNavigate } from "react-router";

export interface RegisterFormValues {
    name: string;
    email: string;
    password: string
}

export function Register() {

    const navigate = useNavigate()

  async function onSubmit(formData: RegisterFormValues) {
        try {
          await  registerUser(formData);
            navigate('/message')

        }catch(err){
            console.error(err)
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>();
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Enter your username</label>
                <input id="name" type="text" placeholder="username"
                    {...register('name', { required: true })}
                />
                {errors.name && <p>{errors.name.message}</p>}

                <label htmlFor="email">Enter you email</label>
                <input id="email" type="text" placeholder="example@mail.com"
                   {...register('email', {required: true})}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <label htmlFor="password">Enter your password</label>
                <input id="password" type="password"
                    {...register('password', { required: true })}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <button>Create account</button>
            </form>
        </Fragment>
    )
}
