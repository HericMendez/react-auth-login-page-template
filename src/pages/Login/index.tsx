import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import styles from './styles.module.css'
export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Não deu certo.");
            }
        }
    }

    return (
        <div className={styles.container}>
                 <br/>
            <h2>Bem-vindo!</h2>
            <div className={styles.login_box}>
            <input
                type="text"
                value={email}
                onChange={handleEmailInput}
                placeholder="Digite seu e-mail"
            />
 
  
            <input
                type="password"
                value={password}
                onChange={handlePasswordInput}
                placeholder="Digite sua senha"
            />       
                     <br/>
            <button onClick={handleLogin}>Logar</button>
            </div>
        </div>
    );
}