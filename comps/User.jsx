import Image from "next/image";

const User = () => {
  return (
    <div class="user">
      <div class="user-information">
        <div class="user-image">
          <Image src="/../public/user-icon.png" alt="" width={80} height={80} />
        </div>
        <h1>Name</h1>
        <h2>Member since:</h2>
        <div class="personal-details">
          <h2>Information</h2>
          <UserRow name="Birthday" value="05/24/1995" />
          <UserRow name="Phone Number" value="702-***-****" />
          <UserRow name="Email Address" value="member@gmail.com" />
          <UserRow name="Address" value="8721 blablabla st" />
          <UserRowBottom value="Las Vegas NV 89123" />
          <UserRow name="Emergency Contact" value="Jon Jones(Sibling)" />
          <UserRowBottom value="702-***-****" />

          <UserRow>
            <h5>Birthday</h5>
            <h5>05/24</h5>
          </UserRow>
        </div>
      </div>
    </div>
  );
};

const UserRow = ({ name, value }) => {
  return (
    <div class="user-row">
      <h5>{name}</h5>
      <h5>{value}</h5>
    </div>
  );
};

const UserRowBottom = ({ value }) => {
  return (
    <div class="user-row-bottom">
      <h5>{value}</h5>
    </div>
  );
};

export default User;
