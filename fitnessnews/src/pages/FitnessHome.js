import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moreproductsFetch } from "../redux/homeLayoutWriteAndVideos";

// import Aos from "aos";
// import "aos/dist/aos.css";
const FitnessHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moreproductsFetch());
  }, [dispatch]);
  //datalar
  const { moreproducts, loading, error } = useSelector(
    (state) => state.anasehife
  );
  moreproducts.map(more=>console.log(more))
  return (
    <>
      {/* {loading && "fetching data"}
      {error && error} */}
      <div>
        <div>
          <div className="flex items-center justify-center m-5">
            <h1 className="font-bold text-stone-700 text-2xl">
              Düzgün İdman Hərəkətləri
            </h1>
          </div>
          {moreproducts?.map((moreproduct) => (
            <div key={moreproduct.id} className="flex">
              <div className="flex flex-col w-[50%]">
                <h2 className="text-xl bg-lime-500 text-center w-[250px] rounded  drop-shadow-4xl">
                  Arnold Press Nedir?
                </h2>
                <p className="text-orange-950 ">{moreproduct.productName}</p>
              </div>
              <div>
                <video className="" src={moreproduct.video1}></video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FitnessHome;
