const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    patronymic: {type: DataTypes.STRING},
    mail: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.INTEGER, unique: true},
    adress: {type: DataTypes.STRING},
    index: {type: DataTypes.INTEGER},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    password: {type: DataTypes.STRING},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketItem = sequelize.define('basketitem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    composition: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
})

const RestItem = sequelize.define('restitem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Rest = sequelize.define('rest', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    size: {type: DataTypes.STRING, allowNull: false},
    rest: {type: DataTypes.INTEGER, allowNull: false},
})

User.hasOne(Basket)
Basket.hasOne(User)

Basket.hasMany(BasketItem)
BasketItem.belongsTo(Basket)

Item.hasMany(BasketItem)
BasketItem.belongsTo(Item)

Item.hasMany(RestItem)
RestItem.belongsTo(Item)

Rest.hasMany(RestItem)
RestItem.belongsTo(Rest)

module.exports = {
    User,
    Basket,
    BasketItem,
    Item,
    RestItem,
    Rest
}