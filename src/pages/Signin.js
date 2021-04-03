import React from 'react';
import useForm from '../components/useForm';
import MaskedInput from '../components/MaskedInput';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { FormButton } from '../components/LoginElements'


//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  lineAnim,
} from "../animation";

const SigninTodo = ({ submitForm }) => {

    const {handleChange, handleFormSubmit, values, errors} = useForm(
        submitForm
    );
    
    return (
        <ContactStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{ background: "#1b1b1b" }}
        >
        <Movie>       
          <motion.h2 variants={fade}>Crie sua conta</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <div className="container-regis">
              <div className="app-wrapper">
    
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
                      <Link to="/login/">
                            <Hide>
                              <FormButton type='submit'>Cadastrar</FormButton>
                            </Hide>
                        </Link>
                  </form>
              </div>
          </div>
          </Movie> 
    </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 1rem 10rem;
@media (max-width: 1300px) {
  padding: 2rem 2rem;
}

h2 {
  padding: 1rem 0rem;
}
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;




export default SigninTodo

