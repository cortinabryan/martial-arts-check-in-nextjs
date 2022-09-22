import Image from "next/image";
const Ranks = () => {
  return (
    <div class="container3">
      <div class="ranks">
        <h2>Ranks</h2>
        <div class="ranks-inner">
          <div class="rank">
            <h3>White Belt</h3>
            <Image
              src="/../public/White_Belt.png"
              alt=""
              width={240}
              height={80}
            />
            <h3>Beginner</h3>
            <h3>2 Years</h3>
          </div>
          <div class="rank">
            <h3>Blue Belt</h3>
            <Image
              src="/../public/Blue_Belt.png"
              alt=""
              width={240}
              height={80}
            />
            <h3>Intermediate</h3>
            <h3>2 Years</h3>
          </div>
          <div class="rank">
            <h3>Purple Belt</h3>
            <Image
              src="/../public/Purple_Belt.png"
              alt=""
              width={240}
              height={80}
            />
            <h3>Intermediate</h3>
            <h3>2 Years</h3>
          </div>
          <div class="rank">
            <h3>Brown Belt</h3>
            <Image
              src="/../public/Brown_Belt.png"
              alt=""
              width={240}
              height={80}
            />
            <h3>Advanced</h3>
            <h3>2 Years</h3>
          </div>
          <div class="rank">
            <h3>Black Belt</h3>
            <Image
              src="/../public/Black_Belt.png"
              alt=""
              width={240}
              height={80}
            />
            <h3>Advanced</h3>
            <h3>2 Years</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranks;
