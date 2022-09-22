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
  );
};

export default Table;
