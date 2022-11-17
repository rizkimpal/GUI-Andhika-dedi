import React from "react";
import HeaderComponent from "../Component/header/HeaderComponent";
import MainMenu from "../Component/mainPage/Main";

const PageOne = () => {
  return (
    <>
    <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <HeaderComponent />
      <section className="flex w-fit h-fit pt-20 min-h-screen">
          <MainMenu />
        </section>
        </div>
    </div>
    </>
  );
};

export default PageOne;
