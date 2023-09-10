const {models} = require('../libs/sequelize.js');

class PersonsService {
    constructor() {}

    async findAll() {
        const res = await models.Person.findAll();
        return res;
    }

    async findById(id) {
        const res = await models.Person.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.Person.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findById(id);
        try {
        const res = await model.update(data, {where: {id}});
        return res;
        } catch (err) {
            console.log(err);
        }
    }

    async delete(id) {
        const model = await this.findById(id);
        await model.destroy();
        return {delete: true};
    }
    
}

module.exports = PersonsService;