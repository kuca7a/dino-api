import { v4 as uuidv4 } from 'uuid';

let dinos = [];

export const getDinos = (req, res) => {
    res.send(dinos);
};

export const createDino = (req, res) => {
    const dino = req.body;

    dinos.push({ ...dino, id: uuidv4()});

    res.send(`Dino ${dino.name} has been added to the database!`);
};

export const getDino = (req, res) => {
    const { id } = req.params;

    const foundDino = dinos.find((dino) => dino.id === id);

    res.send(foundDino);
};

export const deleteDino = (req, res) => {
    const { id } = req.params;

    dinos = dinos.filter((dino) => dino.id !== id);

    res.send(`Dino ${id} has been deleted from the database!`);
};

export const updateDino = (req, res) => {
    const { id } = req.params;
    const { name, pronunciation, meaning, type, length, diet, period, found, description } = req.body;
    const dinoToUpdate = dinos.find((dino) => dino.id === id);

    if(name) {
        dino.name = name;
    };

    if(pronunciation) {
        dino.pronunciation = pronunciation;
    };

    if(meaning) {
        dino.meaning = meaning;
    };

    if(type) {
        dino.type = type;
    };

    if(length) {
        dino.length = length;
    };

    if(diet) {
        dino.diet = diet;
    };

    if(period) {
        dino.period = period;
    };

    if(found) {
        dino.found = found;
    };

    if(description) {
        dino.description = description;
    };

    res.send(`Dino with the id ${id} has been updated!`);

};