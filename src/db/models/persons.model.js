const {Model, DataTypes, Sequelize} = require ('sequelize');

const PERSON_TABLE = 'persons';

class Person extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true,
        }
    }
}

const PersonSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name',
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'address',
    },
    phone: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'phone',
    },
    email: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'email',
    }
}

module.exports = {Person, PersonSchema};