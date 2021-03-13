import React, { useEffect, useState } from "react";
import { ListItem } from "./style";

const ListMenu = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await fetch(
      "http://my-json-server.typicode.com/workinideas/vagafrontendteste/menus"
    );
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    loadData();
  }, []);

  const list = data.map((item) => {
    return (
      <li key={item.id}>
        {item.name}
        <ListItem>
          {item.subMenus.map(function (subMenu) {
            return <li key={subMenu.id}>{subMenu.name}</li>;
          })}
        </ListItem>
      </li>
    );
  });

  return list;
};

export default ListMenu;
