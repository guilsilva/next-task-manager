/* eslint-disable @next/next/no-img-element */
import React, { useState, MouseEvent } from 'react';

export const Login = () => {
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const doLogin = (evento: MouseEvent) => {
        try{
            evento.preventDefault();
            setError('');
            if(!login || !password){
                return setError('Favor informar usuário e senha.');
            }

            const body = {login, password};
        }catch(e){
            console.log(e);
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