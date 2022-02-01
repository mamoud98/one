import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/contex";
import { Link } from "react-router-dom";

function List() {
  const { items, nextpage, prvpage } = useGlobalContext();

  //function

  return (
    <>
      <div className="d-flex flex-column">
        <div className="bg-dark p-2 ">
          {items.map((item) => (
            <Link key={item._id} to={`/home/description/${item._id}`}>
              <div className="mt-2 bg-secondary text-decoration-none">
                <p className="text-white text-decoration-none">{item.name}</p>
                <p className="text-white text-decoration-none">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-lg-between">
        <button onClick={() => prvpage()}>prev</button>
        <button onClick={() => nextpage()}>next</button>
      </div>
    </>
  );
}

export default List;
