import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', { username, password });
            const sessionId = response.data;
            localStorage.setItem('sessionId', sessionId); 
            navigate('/home');
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed');
        }
    };

    return (
        <div className='background login'>
            <h1 className='login_title'>Тавтай морилно уу.</h1>
            <form onSubmit={handleLogin} className='login_form'>
                <input 
                    type="text" 
                    placeholder="Нэвтрэх нэр" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className='login_email'
                />
                <input 
                    type="password" 
                    placeholder="Нууц үг" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className='login_password'
                />
                <button type="submit" className='btn'>Нэвтрэх</button>
            </form>
        </div>
    );
};

export default LoginPage;
