import React, { useEffect, useState } from "react";

const TechCards = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-center bg-[#151C34]">
      <div className="w-96 text-center p-4 bg-[#2C2946]">
        <img src={data.logoUrl} className="w-32 h-32 mx-auto mb-2" />
        <p className="text-[#2BAD81] text-xl font-semibold">{data.name}</p>
      </div>
    </div>
  );
};

export default TechCards;
