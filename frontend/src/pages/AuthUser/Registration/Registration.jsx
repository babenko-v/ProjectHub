import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Registration() {
    const [registrationForm, setRegistrationForm] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();  // чтобы предотвратить перезагрузку страницы

        try {
            await axios.post('http://127.0.0.1:8000/auth/registration/', {
                email: registrationForm.email,
                username: registrationForm.username,
                password: registrationForm.password,
                password2: registrationForm.password2,  // исправляем здесь
            });

            navigate('/landing');
            console.log('Успешная регистрация');
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    }


    return (
        <div className="container mx-auto cont">
            <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="master_2">
                    <h2 className="header_regist">Registration</h2>
                    <div className="input">

                        <input
                            className="form-control mx-auto my-3"
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={registrationForm.username}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, username: event.target.value}))}
                        />

                        {/*<input*/}
                        {/*    className="form-control mx-auto my-3"*/}
                        {/*    placeholder="Прізвище"*/}
                        {/*    type="text"*/}
                        {/*    name="programming_area"*/}
                        {/*    value={registrationForm.programming_area}*/}
                        {/*    onChange={(event) => setRegistrationForm(prev => ({*/}
                        {/*        ...prev,*/}
                        {/*        programming_area: event.target.value*/}
                        {/*    }))}*/}
                        {/*/>*/}

                        <input
                            className="form-control mx-auto my-3"
                            placeholder="Email"
                            type="email"
                            name="useremail"
                            value={registrationForm.email}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, email: event.target.value}))}
                        />

                        <input
                            className="form-control mx-auto my-3"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={registrationForm.password}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, password: event.target.value}))}
                        />

                        <input
                            className="form-control mx-auto my-3"
                            placeholder="Password_2"
                            type="password"
                            name="password"
                            value={registrationForm.password2}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, password2: event.target.value}))}
                        />

                    </div>
                    <div className="md-mx-auto btn-reg">
                        <button className='button_left' type="submit">Зареєструватися</button>
                        <button className='button_right' type="reset">Уже маю аккаунт</button>
                    </div>
                </div>
            </form>

            <div>
                <h1>Username: {registrationForm.username}</h1>
                {/*<h1>Surname: {registrationForm.programming_area}</h1>*/}
                <h1>Email: {registrationForm.email}</h1>
                <h1>Password: {registrationForm.password}</h1>
                <h1>Password_2: {registrationForm.password2}</h1>
            </div>
        </div>
    );
}

export default Registration;