const Prompt = require("../models/Prompts.js");

const getPrompt = async () => {
     try {
        const prompts = await Prompt.find();        
        return prompts;
  } catch (err) {
    throw err;
  }
};


module.exports = {
    getPrompt
}