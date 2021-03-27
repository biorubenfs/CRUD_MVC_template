import User from '../models/user.model.js';

export const userController = {
    list: async (req, res) => {
        const resultsUsers = await User.find();
        res.json(resultsUsers);
    },

    create: async (req, res) => {
        await User.create(req.body);
        res.send(`User added ${JSON.stringify(req.body)}`);
    },

    delete: async (req, res) => {
        let queryId = req.params.id;
        await User.findByIdAndDelete(`${queryId}`);
        res.send(`User with id ${queryId} was deleted`);
    },

    update: async (req, res) => {
        let queryId = req.params.id;
        await User.findByIdAndUpdate(queryId, {
            name: req.body.name,
            email: req.body.email
        })
        res.send(`User with id ${queryId} was updated`);
    },
}