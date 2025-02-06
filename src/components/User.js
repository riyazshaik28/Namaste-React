
const UserCart = (props) => {
  const {name,location}=props;
  

  return (
    <div className="user-cart">
      <h2> NAME: {name}</h2>
      <h2> LOCATION: {location}</h2>
      <h2> CONTACT: sshaikriyaz@gmail.com</h2>
      <img className= "w-36 h-25 border border-solid border-black"src={ "https://avatars.githubusercontent.com/u/180375075?v=4"} alt={"My Image"} />
    </div>
  );
};

export default UserCart;
