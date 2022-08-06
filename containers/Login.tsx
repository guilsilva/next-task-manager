/* eslint-disable @next/next/no-img-element */
import React, { useState, MouseEvent } from 'react';
import { executeRequest } from '../services/apiServices';
import { NextPage } from 'next';


type LoginProps = {
    setAccessToken(e : String) : void
}

export const Login:NextPage<LoginProps> = ({setAccessToken}) => {
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const doLogin = async(evento: MouseEvent) => {
        try{
            evento.preventDefault();
            setError('');
            if(!login || !password){
                return setError('Favor informar usuário e senha.');
            }

            const body = {login, password};

            const result = await executeRequest('login', 'POST', body);
            if (!result || !result.data){
                return setError("Ocorreu erro ao processar login, tente novamente!");
            }

            const {name, email, token} = result.data;
            localStorage.setItem('accessToken', token);
            localStorage.setItem('userName', name);
            localStorage.setItem('userMail', email);

            setAccessToken(token);

            console.log(result);
        }catch(e : any){
            console.log(e);
            if(e?.response?.data?.error){
                return setError(e?.response?.data?.error);
            }
            setError("Ocorreu erro ao processar login, tente novamente!");
        }
    }
    
    return(
        <div className="container-login">
            <img src="/logo.svg" alt="Logo Fiap" className="logo"/>
            <form>
                <p className="error">{error}</p>
                <div className="input">
                    <img src="/mail.svg" alt="Informe seu Login"/>
                    <input type="text" placeholder="login"
                        value={login}
                        onChange={evento => setLogin(evento.target.value)}/>
                </div>
                <div className="input">
                    <img src="/lock.svg" alt="Informe sua senha"/>
                    <input type="password" placeholder="senha"
                        value={password}
                        onChange={evento => setPassword(evento.target.value)}/>
                </div>
                <button onClick={doLogin}>Login</button>
            </form>
        </div>
    )
}