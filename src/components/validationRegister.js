const validationRegister = (values) => {


    let errors={};
    
    if (!values.fullname){
        errors.fullname="Nome é obrigatório.";
    }
    if (!values.email) {
        errors.email="Email é obrigatório."
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email="Email é invalido.";
    }
    if (!values.password){
        errors.password="Senha é obrigatório.";
    } if(!values.dts) {
        errors.dts="Data de nascimento obrigatório."
    } if(!values.cpf) {
        errors.cpf="                                                                                                                                    "
    } if(!values.cep) {                                                            
        errors.cep="                                                                                                                                      "
    } if(!values.address) {                 
        errors.address="                                                                                          "
    } if(!values.nresi) {                   
        errors.nresi="                                                                      "
    }
    else if(values.password.length < 5) {
        errors.password="Senha deve conter mais do 6 caracteres."
    }

    return errors;
}

export default validationRegister
