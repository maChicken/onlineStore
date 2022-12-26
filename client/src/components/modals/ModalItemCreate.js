import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import {createItem} from '../../http/itemAPI'

const ModalItemCreate = observer(({active, setActive}) => {
    // Закрытие модального окна через Escape
    document.addEventListener('keydown', function (e){
        if (e.code === "Escape") {
                setActive(false)
            }
        })
    // Данные из инпутов
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [composition, setComposition] = useState('')
    const [price, setPrice] = useState(0)
    const [year, setYear] = useState(0)
    const [file, setFile] = useState(null)
    // Добавление, удалиение, изменение размеров
    const [size, setSize] = useState([])
    const addSize = () => {
        setSize([...size, {size: '', rest: '' }].map((n, i) => ({ id: i, ...n })))
    }
    const removeSize = (i) => {
        setSize(size.filter(el => el.id !== i))
    }
    const changeSize = (key, value, number) => {
        setSize(size.map(el => el.id === number ? {...el, [key]: value} : el))
    }
    // Работа с фалйами
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', file)
        formData.append('description', description)
        formData.append('composition', composition)
        formData.append('price', price)
        formData.append('year', year)
        formData.append('size', JSON.stringify(size))
        createItem(formData).then(data => setActive(false))
    }

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
                            <input className="input" required placeholder="Введите название товара" name="itemName" value={name} onChange={e => setName(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Описание
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите описание товара" name="itemDesctiption" value={description} onChange={e => setDescription(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Состав
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите состав товара" name="itemComposition" value={composition} onChange={e => setComposition(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Цена
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите цену товара" name="itemCoast" type="number" value={price} onChange={e => setPrice(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Год
                        </div>
                        <div className="string__input">
                            <input className="input" required placeholder="Введите год производства" name="itemCoast" type="number" value={year} onChange={e => setYear(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="form__string">
                        <div className="string__title">
                            Файл
                        </div>
                        <div className="string__input">
                            <input className="input" required name="itemImg" type="file" onChange={selectFile}></input>
                        </div>
                    </div>
                    <button className="button button-add" type="button" onClick={addSize}>добавить размер</button>
                    <div className="string-size">
                        {size.map( el =>
                            <div className="size__input" key={el.id}>
                                <input className="input input-size" name="inputSize" placeholder="Размер" value={el.size} onChange={(e) => changeSize('size', e.target.value, el.id)}></input>
                                <input className="input input-size" name="inputRest" placeholder="Количество" value={el.rest} onChange={(e) => changeSize('rest', e.target.value, el.id)}></input>
                                <button className="button" onClick={() => removeSize(el.id)}>удалить</button>
                            </div>
                        )}
                    </div>
                    <button className="button button-modal" type="button" onClick={addItem}>добавить</button>
                </form>
            </div>
        </div>
        )}
        </>
    )
})

export default ModalItemCreate