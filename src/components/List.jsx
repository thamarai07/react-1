import React from "react";
import Card from "./Card";

export default function ListComp(props) {
  const { List } = props;
  return (
    <div className="list_wrap">
      <ul>
        {List.map((value, index) => (
          <Card 
            key={index} 
            values={value} 
            index={index} 
            {...props} 
          />
        ))}
      </ul>
    </div>
  );
}
