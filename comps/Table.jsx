import CheckInButton from "./CheckInButton.jsx";
const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th class="table-header">Time</th>
          <th class="table-header">Class</th>
          <th class="table-header">Instructor</th>
        </tr>
        <tr class="table-row">
          <td class="check-in-btn-container">
            <CheckInButton name="Early Morning" time="06:15 AM" />
            06:15 AM
          </td>
          <td class="test">Early Morning</td>
          <td>Prof. Caio Terra</td>
        </tr>
        <tr class="'table-row">
          <td class="check-in-btn-container">
            <CheckInButton name="Beginner" time="09:00 AM" />
            09:00 AM
          </td>
          <td class="test">Beginner</td>
          <td>Prof. Mikey Musemeci</td>
        </tr>
        <tr class="table-row">
          <td class="check-in-btn-container">
            <CheckInButton name="Intermediate/Advanced" time="10:00 AM" />
            10:00 AM
          </td>
          <td class="test">Intermediate/Advanced</td>
          <td>Prof. Andre Galvao</td>
        </tr>
        <tr class="table-row">
          <td class="check-in-btn-container">
            <CheckInButton name="Kids 4-12 years" time="05:00 PM" />
            05:00 PM
          </td>
          <td class="test">Kids 4-12 years</td>
          <td>Prof. Gabi Garcia</td>
        </tr>
        <tr class="table-row">
          <td class="check-in-btn-container">
            <CheckInButton name="Beginner" time="06:00 PM" />
            06:00 PM
          </td>
          <td class="test">Beginner</td>
          <td>Prof. Mica Galvao</td>
        </tr>
        <tr class="table-row">
          <td class="check-in-btn-container">
            <CheckInButton name="Intermediate/Advanced" time="07:00 PM" />
            07:00 PM
          </td>
          <td class="test">Intermediate/Advanced</td>
          <td>Prof. Gordon Ryan</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
