const {
    getPrompt
  } = require("../controllers/prompts");
  const {
    getTag
  } = require("../controllers/tag");
// The root provides a resolver function for each API endpoint
 const graphresolvers = {
    hello: () => {
      return "Hello world!"
    },
    getPrompts: getPrompt,
    getTag: getTag
  
  }

  module.exports={
    graphresolvers
  }