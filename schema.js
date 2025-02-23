const schema=`
type User{
name : String!,
email : String!,
role : String!

}
type Query{
  users: [User]
  user(id:ID):User
  }

  type Mutation{
  register(user:newUser):User!
  login(user:loggedInUser):String
  deleteUser(id:ID):String
  }
input newUser{
  name: String!,
  email: String!,
  password: String!,
  role: String
  }
  
input loggedInUser{
email: String!,
password: String!,
}


`






export default schema