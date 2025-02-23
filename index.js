import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import schema from './schema.js';
import mongoose from 'mongoose';
import resolvers from './resolvers/index.js';
import "dotenv/config"

mongoose.connect('mongodb://127.0.0.1:27017/graphql').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error(`Error connecting to MongoDB: ${err}`);
})

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers
})
const port = 3001
startStandaloneServer(server,{
    listen:{port}
}).then(({url})=>{
    console.log(`ApolloServer started on port ${url}`);
    
}).catch((err)=>{
    console.error(`Error starting ApolloServer: ${err}`);
})