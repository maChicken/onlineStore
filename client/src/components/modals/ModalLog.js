import React, { useState } from 'react'

const ModalLog = ({active, setActive}) => {
    // Закрытие модального окна через Escape
    document.addEventListener('keydown', function (e){
        if (e.code === "Escape") {
                setActive(false)
            }
        })
    // Опредение логина или регистрации
    const [isLogin, setLogin] = useState(true)
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
                            <input className="input" required placeholder="Введите электронную почту" name="mail"></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Пароль
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите пароль" name="password"></input>
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
                    <button className="button button-modal" type="button">готово</button>
                </form>
            </div>
        </div>
        )}
        </>
    )
}

export default ModalLog