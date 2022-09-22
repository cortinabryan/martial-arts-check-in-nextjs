const Contact = () => {
  return (
    <div class="container3">
      <div class="ranks">
        <h2>Contact</h2>
        <div class="contact-container">
          <div class="contact-left">
            <div class="row">
              <input type="text" class="input" placeholder="Full Name" />
              <input type="text" class="input" placeholder="Email Address" />
            </div>
            <div class="row">
              <input type="text" class="input" placeholder="Phone Number" />
              <input type="text" class="input" placeholder="Subject" />
            </div>
            <div class="row">
              <div class="msg">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div class="row">
              <button>Send Now</button>
            </div>
          </div>
          <div class="contact-right">
            <div class="info">
              <h3>6728 S Kimura dr. suite 101</h3>
              <h3>Las Vegas, NV 89271</h3>
              <h3>702-527-2321</h3>
              <h3>somethingsomething@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
