const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Tag {
        description:String!
        color: String!
    }
    type prompt {
        _id: ID
        name: String!
        type: String!
        instruction: String!
        context:String
        size:String
        tags:[Tag]       
        responses:[String]

    }

    type Query {
        getPrompt(_id: ID): prompt
        getPrompts: [prompt!]
        getTag: [Tag!]
        
    }
   

  
`)
module.exports = {
    schema
}