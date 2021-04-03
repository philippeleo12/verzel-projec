import React from 'react';
import useForm from './useForm';
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  lineAnim,
} from "../animation";
import MaskedInput from '../components/MaskedInput';



const SigninTodo = ({ submitForm }) => {

    const {handleChange, handleFormSubmit, values, errors} = useForm(
        submitForm
    );
    
    return (
        <Movie>
            <motion.h2 variants={fade}>Faça seu Login</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
        <div className="container-regis">
            <div className="app-wrapper">
                <div className="logo-regis">
                    <img src={logo}  />
                    <h2 className="title">Crie sua conta!</h2>
                </div>
                <form className="form-wrapper">
                    <div className='form-dis'>
                                <div className="form-1">
                                    <div className="name">
                                        <label className="label">Nome Completo:</label>
                                        <input 
                                        className='input'
                                        type="text"
                                        name="fullname"
                                        value={values.fullname} 
                                        onChange={handleChange}
                                        />
                                        {errors.fullname && <p className="erro">{errors.fullname}</p>}
                                    </div>

                                    <div className="name">
                                        <label className="label">E-mail:</label>
                                        <input
                                        className='input'
                                        type="email"
                                        name="email"
                                        value={values.email} 
                                        onChange={handleChange}
                                        />
                                        {errors.email && <p className="erro">{errors.email}</p>}
                                    </div>

                                    <div className="name">
                                        <label className="label">Senha:</label>
                                        <input
                                        className='input'
                                        type="password"
                                        name="password"
                                        value={values.password} 
                                        onChange={handleChange}
                                        />
                                        {errors.password && <p className="erro">{errors.password}</p>}
                                    </div>

                                    <div className="name">
                                        <label className="label">Data de Nascimento:</label>
                                        <div className='input'>
                                            <MaskedInput
                                                    name="dts"
                                                    mask="99/99/9999"
                                                    value={values.dts}
                                                    onChange={handleChange}
                                            />
                                        </div>
                                        {errors.dts && <p className="erro">{errors.dts}</p>}
                                    </div>
                                </div>    
                            
                            
                                <div className="form-2">
                                    <div className="name">
                                        <label className="label">CPF:</label>
                                        <div className='input'>
                                            <MaskedInput
                                                    name="cpf"
                                                    mask="999.999.999-99"
                                                    value={values.cpf}
                                                    onChange={handleChange}
                                            />
                                        </div>
                                        {errors.cpf && <p className="erro">{errors.cpf}</p>}
                                    </div>

                                    <div className="name">
                                        <label className="label">CEP da residencia:</label>
                                        <div className='input'>
                                            <MaskedInput
                                                    className="input"
                                                    name="cep"
                                                    mask="99999-999"
                                                    value={values.cep}
                                                    onChange={handleChange}
                                            />
                                        </div>
                                        {errors.cep && <p className="erro">{errors.cep}</p>}
                                    </div>

                                    <div className="name">
                                        <label className="label">Endereço:</label>
                                        <input
                                        className='input'
                                        type="text"
                                        name="address"
                                        value={values.address} 
                                        onChange={handleChange}
                                        />
                                        {errors.address && <p className="erro">{errors.address}</p>}
                                    </div>

                                    <div className="name">
                                        <label className="label">N° da Residencia:</label>
                                        <input
                                        className='input'
                                        type="text"
                                        name="nresi"
                                        value={values.nresi} 
                                        onChange={handleChange}
                                        />
                                        {errors.nresi && <p className="erro">{errors.nresi}</p>}
                                    </div>
                                </div> 
                    </div>
                        <Link to="/login">
                            <Hide>
                              <FormButton type='submit'>Entrar</FormButton>
                            </Hide>
                        </Link>
                </form>
            </div>
        </div>
        </Movie>
    )
}

export default SigninTodo
