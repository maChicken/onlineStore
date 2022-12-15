import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {Context} from '../index'

const YearSelector = observer( () => {
    const {item} = useContext(Context)
    // Получение сортированного массива без дубликатов всех имеющихся годов выпуска продукта
    let allYear = item.items.map( element => element.year )
    let allYearUniqe = allYear.filter((element, index) => allYear.indexOf(element) === index).sort((a, b) => a - b)
    // Создание объектов - полученные года, родитель которых - year__selector
    let listYears = allYearUniqe.map((year, index) =>
    <button className={item.selectedYear.year === year ? "year active" : "year"} key={index} onClick={() => item.setSelectedYear({year}) }>
        {year}
    </button>
    )
    return (
        <div className="year__selector">
            {listYears}
        </div>
    )
})

export default YearSelector