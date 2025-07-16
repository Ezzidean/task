// Mappage.tsx
import React, { useEffect, useState } from "react";
import Api from "../api";

const ListPage = () => {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    const api = new Api();
    api.get("/businesses/load").then((resp) => {
      setBusiness(resp);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Map Page</h1>
      <ul>
        {business.map((b) => (
          <li
            key={b.business_name}
            className="text-white"
            style={{ color: "white" }}
          >
            {b.business_name}
            <div style={{ width: "2em" }} />
            {b.food_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
