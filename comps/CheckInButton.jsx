import { checkIn } from "../clients/histories_client";

const CheckInButton = ({ name, time }) => {
  const handleClick = ({ name, time }) => {
    checkIn({ name, time }).then(console.log);
  };
  return (
    <button onClick={() => handleClick({ name, time })} class="check-in-btn">
      Check-in
    </button>
  );
};

export default CheckInButton;
