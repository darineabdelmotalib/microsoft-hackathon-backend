import initKnex from "knex";
import configiration from "../knexfile.js";
const knex = initKnex(configiration);

const index = async (_req, res) => {
    try {
        const data = await knex("microsoft");
        res.status(200).json(data);
         
    } catch (err) {
        res.status(400).send(`error ${err}`);
    }
}


export {
    index
}
