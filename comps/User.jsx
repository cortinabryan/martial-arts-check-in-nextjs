const User = () => {
  return (
    <div class="user">
      <div class="user-information">
        <img src="/images/user-icon.png" alt="" />
        <h1>Name</h1>
        <h2>Member since:</h2>
        <div class="personal-details">
          <h2>Information</h2>
          <div class="row">
            <h5>Birthday</h5>
            <h5>05/24/1995</h5>
          </div>
          <div class="row">
            <h5>Phone Number</h5>
            <h5>702-***-****</h5>
          </div>
          <div class="row">
            <h5>Email Address</h5>
            <h5>member@gmail.com</h5>
          </div>
          <div class="row">
            <h5>Address</h5>
            <h5>8721 blablabla st</h5>
          </div>
          <div class="bottom">
            <h5>Las Vegas NV 89123</h5>
          </div>
          <div class="row">
            <h5>Emergency Contact</h5>
            <h5>Jon Jones(Sibling)</h5>
          </div>
          <div class="bottom">
            <h5>702-***-****</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
