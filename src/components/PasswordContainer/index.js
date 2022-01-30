import React, { useState, useCallback} from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { PasswordInput } from './stylesPasswordContainer.js';

export default function PasswordContainer({password, setPassword}) {
    const [typePassword, setTypePassword] = useState('password');

    const handleTypePassword = useCallback(() => {
        if(typePassword === 'password'){
            setTypePassword('text');
        }else{
            setTypePassword('password');
        }

    }, [typePassword])

    return (
        <PasswordInput>
            <input type={typePassword} placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" required/>
            <label htmlFor="password" onClick={handleTypePassword}>
                {typePassword === 'password' ? (
                    <FiEyeOff color="black" size={30} />
                ): (
                    <FiEye color="black" size={30}/>
                )}
                
            </label>
        </PasswordInput>
    );
}