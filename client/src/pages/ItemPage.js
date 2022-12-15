import React from 'react'

const ItemPage = () => {
    //const {item} = useContext(Context)
    const item = {id: 5, name: 'First product', img: 'http://localhost:5000/0b30c8dc-f03a-46ff-b55f-b1f84fe625ab.jpg', description: 'Оверсайз футболка, выполнення из высококачественного хлопка, с большим принтом, который стыкуется на швах. Рисунок не ощущается на ткани и пропускает воздух, что позволяет комфортно ощущать себя в жаркую погоду. Рукава до локтя.', composition: 'lalala', price: 1000, year: 2022}
    const rest = [
        {id: 1, size: 'S', res: 2},
        {id: 2, size: 'M', res: 5},
        {id: 3, size: 'L', res: 3},
        {id: 4, size: 'XL', res: 1}
    ]
    const allRest = rest.map( (elem) => elem.size)
    let listRest = allRest.map((rest, index) =>
    <button className="button button-size" key={index} >
        {rest}
    </button>
    )
    return (
        <div className="item">
            <div className="item__img">
                <img className="img-item" src={item.img} alt="item"></img>
            </div>
            <div className="item__info">
                <div className="item__title">
                    <div className="item__name">
                        {item.name}
                    </div>
                    <div className="item__coast">
                        {item.price} ₽
                    </div>
                </div>
                <div className="item__description">
                    {item.description}
                </div>
                <div className="item__composition">
                    {item.composition}
                </div >
                <div className="item__sizeselector">
                    {listRest}
                    <button className="button button-item">
                        в корзину
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemPage