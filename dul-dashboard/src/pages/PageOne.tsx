import React from "react";
import HeaderComponent from "../component/header/Header";
import MainMenu from "../component/mainPage/MainMenu";

const PageOne = () => {
  return (
    <>
    <div className="bg-violet-50">
      <HeaderComponent />
      <section className="relative w-fit h-fit pt-20 min-h-screen">
          <MainMenu />
        </section>
    </div>
    </>
  );
};

export default PageOne;
