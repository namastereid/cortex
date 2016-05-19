import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { getComments, createComment} from './persist';

const  Comment = new GraphQLObjectType({
    name: "Comment",
    description: "Comment on a post",
    fields: () => ({
        id: {type: GraphQLString},
        author: {type: GraphQLString}
    })
})