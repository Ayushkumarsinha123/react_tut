import profile from "./assets/profile.jpg";
const DATA = [
  {
    name: "ALOK",
    imgSrc: {profile},
    course: "i am pursuing btech from rit",
  },
  {
    name: "Harshit",
    imgSrc: "",
    course: "i am pursuing btech from rit",
  },
];
function Card() {
  return (
    <>
      <div>
        {DATA.map((element) => (
          <div className="card" key={element.name}>
            <img src={element.imgSrc}></img>{element.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
