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




`






export default schema