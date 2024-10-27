import { useState } from "react";

export default function Glasses_shop() {
  const [imgUrl, setImgUrl] = useState("./img/v1.png");

  // hàm chuyển đổi kính
  // const handleG1 = () => {
  //   setImgUrl("./img/v1.png");
  // };

  // const handleG2 = () => {
  //   setImgUrl("./img/v2.png");
  // };

  // const handleG3 = () => {
  //   setImgUrl("./img/v3.png");
  // };

  // const handleG4 = () => {
  //   setImgUrl("./img/v4.png");
  // };

  // const handleG5 = () => {
  //   setImgUrl("./img/v5.png");
  // };

  // const handleG6 = () => {
  //   setImgUrl("./img/v6.png");
  // };

  // const handleG7 = () => {
  //   setImgUrl("./img/v7.png");
  // };

  // const handleG8 = () => {
  //   setImgUrl("./img/v8.png");
  // };

  const changePathUrl = (url) => {
    setImgUrl(url);
  };

  return (
    <div>
      <section className=" bg-center bg-no-repeat bg-[url('/img/background.jpg')] bg-blend-multiply">
        <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <img
            className="relative w-[15%] mx-auto border-4 border-pink-500 "
            src="./img/model.jpg"
            alt="model"
          />
          <img
            className="w-[7%] absolute top-[285px] left-[595px]"
            src={imgUrl}
            alt="glass"
          />
        </div>
      </section>
      <div className="border-4 border-pink-500 my-2">
        <h1 className="text-pink-600 font-bold text-center text-2xl my-2">
          Hãy chọn kính mà bạn muốn xem!
        </h1>
      </div>
      <div className="grid grid-cols-4 border-4 border-pink-500  ">
        <button
          className=" border-2 border-pink-200"
          onClick={() => changePathUrl("./img/v1.png")}
        >
          <img className="w-[30%] mx-auto" src="./img/g1.jpg" alt="" />
        </button>
        <button
          className=" border-2 border-pink-200"
          onClick={() => changePathUrl("./img/v2.png")}
        >
          <img className="w-[30%] mx-auto" src="./img/g2.jpg" alt="" />
        </button>
        <button
          className=" border-2 border-pink-200"
          onClick={() => changePathUrl("./img/v3.png")}
        >
          <img className="w-[30%] mx-auto" src="./img/g3.jpg" alt="" />
        </button>
        <button
          className=" border-2 border-pink-200"
          onClick={() => changePathUrl("./img/v4.png")}
        >
          <img className="w-[30%] mx-auto" src="./img/g4.jpg" alt="" />
        </button>
        <button
          className=" border-2 border-pink-200"
          onClick={() => changePathUrl("./img/v5.png")}
        >
          <img className="w-[30%] mx-auto" src="./img/g5.jpg" alt="" />
        </button>
        <button
          className=" border-2 border-pink-200"
          onClick={() => changePathUrl("./img/v6.png")}
        >
          <img className="w-[30%] mx-auto" src="./img/g6.jpg" alt="" />
        </button>
        <button
          className=" border-2 border-pink-200"
          onClick={() => changePathUrl("./img/v7.png")}
        >
          <img className="w-[30%] mx-auto" src="./img/g7.jpg" alt="" />
        </button>
        <button
          className=" border-2 border-pink-200"
          onClick={() => changePathUrl("./img/v8.png")}
        >
          <img className="w-[30%] mx-auto" src="./img/g8.jpg" alt="" />
        </button>
      </div>
    </div>
  );
}
