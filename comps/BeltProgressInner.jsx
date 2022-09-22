import Image from "next/image";
const BeltProgessInner = () => {
  return (
    <div clas="belt-progress-inner">
      <h2>Belt</h2>
      <div class="belt-img">
        <Image src="/../public/Blue_Belt.png" alt="" width={240} height={80} />
      </div>
      <h3>Adult Blue Belt</h3>
    </div>
  );
};

export default BeltProgessInner;
