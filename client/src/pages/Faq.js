import React from 'react'

const Faq = () => {
    return (
        <div className="FAQ">
            <div className= "title faq__title">
                Полезная информация
            </div>
            <div className="faq__main">
                <div className="main__element">
                    <div className="element__title title">Дотсавка:</div>
                    <div className="element__text">Доставка осуществляется Почтой России и СДЕКом</div>
                    <ul className="element__list">
                        <li>До квартиры по Санкт-Петербургу 300₽ (в пределах КАД)</li>
                        <li>До квартиры по Москве 500₽ (в пределах МКАД)</li>
                        <li>Почтой по России 400₽</li>
                        <li>СДЕКом по России 400₽</li>
                    </ul>
                </div>
                <div className="main__element">
                    <div className="element__title title">Срок доставки:</div>
                    <ul className="element__list">
                        <li>По Санкт-Петербургу 1-3 рабочих дня</li>
                        <li>По России 2-10 рабочих дней</li>
                    </ul>
                </div>
                <div className="main__element">
                    <div className="element__title title">Политика возврата:</div>
                    <ul className="element__list">
                        <li>В случае брака производится обмен вещи из наличия, либо возврат денежных средств в полном размере</li>
                        <li>Возможен замен размера из наличия на более подходящий</li>
                        <li>Если во время эксплуатации вещь была повреждена не по вине производителя, то обмену и возврату она не подлежит</li>
                    </ul>
                </div>
                <div className="faq__buttons">
                    <a href="https://docs.google.com/document/d/1-0bca1FfOVsNgnVHJMrkPmrpi43lOmjJ7HsgDVXmDLY/edit" target="_blank" rel="noreferrer">
                        <button className="button button-faq" >политика конфиденциальности</button>
                    </a>
                    <a href="https://docs.google.com/document/d/10KCtMtlKbYL2eVU8rnR2yvBSoBQi_zGJ2yDhpqWeZNI/edit" target="_blank" rel="noreferrer">
                        <button className="button">договор оферты</button>
                    </a>
            </div>
            </div>
        </div>
    )
}

export default Faq