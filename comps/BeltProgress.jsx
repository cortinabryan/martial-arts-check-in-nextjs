import BeltHours from "./BeltHours";
import BeltProgessInner from "./BeltProgressInner";
const BeltProgress = () => {
  return (
    <div class="belt-progress">
      <BeltProgessInner />
      <BeltHours />
    </div>
  );
};

export default BeltProgress;
