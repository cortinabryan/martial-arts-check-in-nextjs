import Image from "next/image";
const Container = () => {
  return (
    <div class="container">
      <div class="user">
        <div class="user-information">
          <div class="user-image">
            <Image
              src="/../public/user-icon.png"
              alt=""
              width={80}
              height={80}
            />
          </div>
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
      <div class="class-schedule">
        <h2 id="class-sched">Class Schedule</h2>
        <table>
          <tbody>
            <tr>
              <th class="table-header">Time</th>
              <th class="table-header">Class</th>
              <th class="table-header">Instructor</th>
            </tr>
            <tr class="table-row">
              <td class="check-in-btn-container">
                <button
                  class="check-in-btn"
                  data-name="Early Morning"
                  data-time="06:15 AM"
                >
                  Check-in
                </button>
                06:15 AM
              </td>
              <td class="test">Early Morning</td>
              <td>Prof. Caio Terra</td>
            </tr>
            <tr class="'table-row">
              <td class="check-in-btn-container">
                <button
                  class="check-in-btn"
                  data-name="Beginner"
                  data-time="09:00 AM"
                >
                  Check-in
                </button>
                09:00 AM
              </td>
              <td class="test">Beginner</td>
              <td>Prof. Mikey Musemeci</td>
            </tr>
            <tr class="table-row">
              <td class="check-in-btn-container">
                <button
                  class="check-in-btn"
                  data-name="Intermediate/Advanced"
                  data-time="10:00 AM"
                >
                  Check-in
                </button>
                10:00 AM
              </td>
              <td class="test">Intermediate/Advanced</td>
              <td>Prof. Andre Galvao</td>
            </tr>
            <tr class="table-row">
              <td class="check-in-btn-container">
                <button
                  class="check-in-btn"
                  data-name="Kids 4-12 years"
                  data-time="05:00 PM"
                >
                  Check-in
                </button>
                05:00 PM
              </td>
              <td class="test">Kids 4-12 years</td>
              <td>Prof. Gabi Garcia</td>
            </tr>
            <tr class="table-row">
              <td class="check-in-btn-container">
                <button
                  class="check-in-btn"
                  data-name="Beginner"
                  data-time="06:00 PM"
                >
                  Check-in
                </button>
                06:00 PM
              </td>
              <td class="test">Beginner</td>
              <td>Prof. Mica Galvao</td>
            </tr>
            <tr class="table-row">
              <td class="check-in-btn-container">
                <button
                  class="check-in-btn"
                  data-name="Intermediate/Advanced"
                  data-time="07:00 PM"
                >
                  Check-in
                </button>
                07:00 PM
              </td>
              <td class="test">Intermediate/Advanced</td>
              <td>Prof. Gordon Ryan</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="belt-progression">
        <h2>Belt</h2>
        <div class="belt-img">
          <Image
            src="/../public/Blue_Belt.png"
            alt=""
            width={240}
            height={80}
          />
        </div>
        <h3>Adult Blue Belt</h3>
        <div class="belt-hours-row">
          <h3 class="belt-hours belt-hours-num" id="belt-hours-cur">
            0
          </h3>
          <h3 class="belt-hours belt-hours-text" id="">
            Hours in rank
          </h3>
          <h3 class="belt-hours belt-hours-text" id="">
            /
          </h3>
          <h3 class="belt-hours belt-hours-num" id="belt-hours-req">
            115
          </h3>
          <h3 class="belt-hours belt-hours-text" id="">
            Required
          </h3>
        </div>
      </div>
      <div class="class-history">
        <h2>Attendance History</h2>
        <table>
          <tbody class="class-history-body" id="class-history-body">
            <tr>
              <th class="table-header">Class</th>
              <th class="table-header">Date & Time</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Container;
