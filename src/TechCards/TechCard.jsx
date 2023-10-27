import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TechCards from "./TechCards";

const TechCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-y-7 bg-[#151C34] gap-x-2 md:gap-x-0 px-2 pb-2">
      {data.map((dt) => (
        <TechCards key={dt.id} data={dt}></TechCards>
      ))}
    </div>
  );
};

export default TechCard;
