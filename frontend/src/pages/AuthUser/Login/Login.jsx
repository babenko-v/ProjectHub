import { useState } from 'react';

function Registration() {
    const [registrationForm, setRegistrationForm] = useState({
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
                <h1>Email: {registrationForm.email}</h1>
                <h1>Password: {registrationForm.password}</h1>
            </div>
        </div>
    );
}

export default Registration;