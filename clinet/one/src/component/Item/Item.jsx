import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../apis/item";
import "./item.css"

function Item() {
  const [item, setItem] = useState("");
  const { id } = useParams();


  useEffect(() => {
    if (id !== undefined) {
      getItem(id).then((res) => {
        setItem(res.data);
      });
    }
  }, [id]);
  return (
    <div className="custom">
      {item && (
        <div>
          <div>{item[0].name}</div>
          <div>{item[0].description}</div>
        </div>
      )}
    </div>
  );
}

export default Item;
