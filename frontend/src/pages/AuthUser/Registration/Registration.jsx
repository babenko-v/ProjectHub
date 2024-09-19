import { useState } from 'react';

function Registration() {
    const [registrationForm, setRegistrationForm] = useState({
        name: '',
        email: '',
        programming_area : '',
        password: ''
    });


    return (
        <div className="container mx-auto cont">
            <form action="#" method="POST">
                <div className="master_2">
                    <h2 className="header_regist">Registration</h2>
                    <div className="input">

                        <input
                            className="form-control mx-auto my-3"
                            placeholder="Ім'я"
                            type="text"
                            name="username"
                            value={registrationForm.name}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, name: event.target.value}))}
                        />

                        <input
                            className="form-control mx-auto my-3"
                            placeholder="Прізвище"
                            type="text"
                            name="programming_area"
                            value={registrationForm.programming_area}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, programming_area: event.target.value}))}
                        />

                        <input
                            className="form-control mx-auto my-3"
                            placeholder="Ваш email"
                            type="email"
                            name="useremail"
                            value={registrationForm.email}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, email: event.target.value}))}
                        />

                        <input
                            className="form-control mx-auto my-3"
                            placeholder="Пароль"
                            type="password"
                            name="password"
                            value={registrationForm.password}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, password: event.target.value}))}
                        />

                    </div>
                    <div className="md-mx-auto btn-reg">
                        <button className='button_left' type="submit">Зареєструватися</button>
                        <button className='button_right' type="reset">Уже маю аккаунт</button>
                    </div>
                </div>
            </form>

            <div>
                <h1>Name: {registrationForm.name}</h1>
                <h1>Surname: {registrationForm.programming_area}</h1>
                <h1>Email: {registrationForm.email}</h1>
                <h1>Password: {registrationForm.password}</h1>
            </div>
        </div>
    );
}

export default Registration;