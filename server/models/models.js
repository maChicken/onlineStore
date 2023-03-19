const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    patronymic: {type: DataTypes.STRING},
    mail: {type: DataTypes.STRING, unique: true, allowNull: false},
    phone: {type: DataTypes.INTEGER, unique: true, allowNull: true},
    adress: {type: DataTypes.STRING},
    index: {type: DataTypes.INTEGER},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    password: {type: DataTypes.STRING, allowNull: false},
}, { timestamps: false })

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}, { timestamps: false })

const BasketItem = sequelize.define('basketitem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    size: {type: DataTypes.STRING, allowNull: false},
    quantity: {type: DataTypes.INTEGER, allowNull: false},
}, { timestamps: false })

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    composition: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false},
}, { timestamps: false }, { timestamps: false })

const ItemRest = sequelize.define('itemrest', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    size: {type: DataTypes.STRING, allowNull: false},
    rest: {type: DataTypes.INTEGER, allowNull: false},
}, { timestamps: false })

User.hasOne(Basket)
Basket.hasOne(User)

Basket.hasMany(BasketItem)
BasketItem.belongsTo(Basket)

Item.hasMany(BasketItem)
BasketItem.belongsTo(Item)

Item.hasMany(ItemRest, {as: 'size'})
ItemRest.belongsTo(Item)

module.exports = {
    User,
    Basket,
    BasketItem,
    Item,
    ItemRest
}