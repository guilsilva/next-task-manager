/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Login = () => {
    return(
        <div className="container-login">
            <img src="/logo.svg" alt="Logo Fiap" className="logo"/>
            <form>
                <div className="input">
                    <img src="/mail.svg" alt="Informe seu Login"/>
                    <input type="text" placeholder="login"/>
                </div>
                <div className="input">
                    <img src="/lock.svg" alt="Informe sua senha"/>
                    <input type="password" placeholder="senha"/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}