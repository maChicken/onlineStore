import React, { useContext, useState } from 'react'
import {login, registration} from '../../http/userAPI'
import {Context} from '../../index'

const ModalLog = ({active, setActive}) => {
    // Закрытие модального окна через Escape
    document.addEventListener('keydown', function (e){
        if (e.code === "Escape") {
                setActive(false)
            }
        })
    //
    // Данные пользователя
    const {user} = useContext(Context)
    // Установка значения авторизация или регистрация (авторизация или нет)
    const [isLogin, setLogin] = useState(true)
    // Данные из инпутов
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    // Функция, которая срабатывает после нажатия кнопки готово
    const signIn = async () => {
        try {
            let user1
            // Формирование запроса
            if (isLogin) {
                user1 = await login(mail, password)
            } else {
                user1 = await registration(mail, password)
            }
            // Сохранение данных пользователся в UserSroe
            user.setUser(user1)
            user.setIsAuth(true)
            // Закрытие модального окан
            setActive(false)
        } catch(e) {
            alert(e.response.user1.message)
        }
    }
    // Модальное окно
    return (
        <>
        {active && (
            <div className="modal" onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="form__title">
                    <button className={isLogin ? "title" : "title passive"} onClick={() => setLogin(true)}>Вход</button>
                    <button className={!isLogin ? "title" : "title passive"} onClick={() => setLogin(false)}>Регитрация</button>
                </div>
                <form className="form__auth">
                    <div className="form__string">
                        <div className="string__title">
                            Mail
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите электронную почту" name="mail" value={mail} onChange={e => setMail(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Пароль
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите пароль" name="password" value={password} onChange={e => setPassword(e.target.value)} type="password"></input>
                        </div>
                    </div>
                    {isLogin ?
                    <></>
                    :
                    <div className="form__string">
                        <div className="string__title">
                            Повторите пароль
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите пароль" name="firstname"></input>
                        </div>
                    </div>
                    }
                    <button className="button button-modal" type="button" onClick={signIn}>готово</button>
                </form>
            </div>
        </div>
        )}
        </>
    )
}

export default ModalLog