const Product = (props) => {
  const { users, userName, subTitle } = props;

  return (
    <div>
      <h1>{userName}</h1>
      <h2>{subTitle}</h2>
      {users.map(user => (
        <li key={user.id}>
          <h1>{user.login}</h1>
        </li>
      ))}
    </div>
  )
}

export default Product;