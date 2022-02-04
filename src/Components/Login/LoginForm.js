import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import {UserContext} from "../../UserContext";


const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const {userLogin, error, loading} = React.useContext(UserContext);

    async function handleSubmit(event){
        event.preventDefault();

    if(username.validade() && password.validade()){
        userLogin(username.value, password.value);
    }
}
  return(
      <section className="animeLeft">
          <h1 className="title">Login</h1>
          <form action="" onSubmit={handleSubmit}>
              <Input 
              type= "text"
              name= "email"
              label="Usúario"
              placeholder= "dog@dog.com"
              {...username} 
              />
              <Input 
              type= "password"
              name= "password"
              label="Senha"
              placeholder= "********"
              {...password}
              />
              {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
              {error && <p style={{
                color: "white",
                fontFamily: "cursive", 
                background: "red",
                width: "130px",
                padding: "5px",
                marginTop: "10px",
                borderRadius: "5px",
                opacity: "0.5"
            }}>{error}</p>}
          </form>
          <Link to="/login/criar">Cadastro</Link>
      </section>
  )
};

export default LoginForm;
