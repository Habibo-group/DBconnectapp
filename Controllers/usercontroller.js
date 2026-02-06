import User from "../Models/User.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const findAll = async (req,res) =>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const find = async (req,res) =>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) 
        return res.status(404).json({message: error.message});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

