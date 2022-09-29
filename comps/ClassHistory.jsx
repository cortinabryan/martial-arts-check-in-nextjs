import { useEffect, useState } from "react";
import { getAllHistories } from "../clients/histories_client";

const ClassHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getAllHistories().then(setHistory);
  }, []);

  return (
    <div class="class-history">
      <h2>Attendance History</h2>
      <table>
        <thead class="class-history-body" id="class-history-body">
          <tr>
            <th class="table-header">Class</th>
            <th class="table-header">Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr>
              {" "}
              <td>{entry.name}</td> <td>{entry.time}</td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassHistory;
