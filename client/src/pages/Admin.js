import React, { useState } from 'react'
import ModalItemCreate from '../components/modals/ModalItemCreate'

const Admin = () => {
    const [ModalItemCreateActive, setModalItemCreateActive] = useState(false)
    return (
        <div className="admin">
            <button className='button button-create' onClick={() => setModalItemCreateActive(true)}>Добавить товар</button>
            <ModalItemCreate active={ModalItemCreateActive} setActive={setModalItemCreateActive}></ModalItemCreate>
        </div>
    )
}

export default Admin