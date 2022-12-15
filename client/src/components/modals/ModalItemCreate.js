import React, { useContext } from 'react'
import { Context } from '../../index'

const ModalItemCreate = ({active, setActive}) => {
    const {item} = useContext(Context)
    // Закрытие модального окна через Escape
    document.addEventListener('keydown', function (e){
        if (e.code === "Escape") {
                setActive(false)
            }
        })
    // // Опредение логина или регистрации
    // const [isLogin, setLogin] = useState(true)
    // Модальное окно
    return (
        <>
        {active && (
        <div className="modal" onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <form className="form__auth">
                    <div className="form__string">
                        <div className="string__title">
                            Название
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите название товара" name="itemName"></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Описание
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите описание товара" name="itemDesctiption"></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Состав
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите состав товара" name="itemComposition"></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Цена
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите цену товара" name="itemCoast" type="number"></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Файл
                        </div>
                        <div className="string__input">
                            <input className="input" required name="itemImg" type="file"></input>
                        </div>
                    </div>
                    <button className="button button-modal" type="button">готово</button>
                </form>
            </div>
        </div>
        )}
        </>
    )
}

export default ModalItemCreate