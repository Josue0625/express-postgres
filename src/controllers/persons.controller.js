const PersonsService = require('../services/persons.service.js');
const service = new PersonsService();

const create = async (req, res) => {
    try {
        const response = await service.create(req.body);
        res.json({success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const get = async (req, res) => {
    try {
        const response = await service.findAll();
        res.json({success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await service.findById(id);
        res.json({success: true, data: response});
    }catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const person = await service.findById(id);
        if(person.id == id){
            const response = await service.update(id, body);
            res.json({success: true, data: response});
        }
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const {id} = req.params;
        const person = await service.findById(id);
        if(person.id == id){
            const response = await service.delete(id);
            res.json({success: true, data: response});
        }
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create,
    get,
    getById,
    update,
    _delete
};