
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../icons/icon";

const Footer = () => {
  return (
    <div className="bg-black h-full w-full p-12">
      <div className="p-2 bg-white md:flex space-y-5 justify-between">
        <div className="flex flex-col items-center justify-center">
          <div className="flex">
            <Link className="flex items-center justify-start" to="https://www.instagram.com/tugayhuseyn6/">
              tugayhuseyn6
            <Icon name={'instagram'}/>

            </Link>
          </div>
          <div className="flex">
            <p className="flex items-center justify-center">
            (+994)51-981-85-05
            <Icon name={'number'}/>
            </p>
          </div>
        </div>
        <div >
          <h1 className="flex flex-col justify-center items-center">Biz Sizlər üçün buradayıq.<strong className="text-red-500">Birlikdə Güclü Olaq</strong></h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>Idman Zalı</h3>
          <strong className="flex items-center justify-center text-green-800">COBRA 
          <Icon name={'cobra'}/>

          </strong>
        </div>
      </div>
    </div>
  );
};

export default Footer;

