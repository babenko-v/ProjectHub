import { useState } from 'react';

function Registration() {
    const [registrationForm, setRegistrationForm] = useState({
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
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
                            name="surname"
                            value={registrationForm.surname}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, surname: event.target.value}))}
                        />

                        <input
                            className="form-control mx-auto my-3"
                            placeholder="Номер телефону"
                            type="tel"
                            name="phoneNumber"
                            value={registrationForm.phoneNumber}
                            onChange={(event) => setRegistrationForm(prev => ({...prev, phoneNumber: event.target.value}))}
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
                <h1>Surname: {registrationForm.surname}</h1>
                <h1>Phone Number: {registrationForm.phoneNumber}</h1>
                <h1>Email: {registrationForm.email}</h1>
                <h1>Password: {registrationForm.password}</h1>
            </div>
        </div>
    );
}

export default Registration;