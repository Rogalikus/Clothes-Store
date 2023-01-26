import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

type StateType = {
  imageUrl: string;
  title: string;
  price: number;
};

export const FullInfo: React.FC = () => {
  const [data, setData] = useState<StateType>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(
          `https://63a1d3dfa543280f77624573.mockapi.io/items/${id}`
        );
        setData(data);
      } catch (error) {
        <NotFound />;
        navigate("/");
      }
    }
    fetchItem();
  }, [id, navigate]);

  if (!data) {
    return <NotFound />;
  }

  return (
    <div className="container">
      <img src={data.imageUrl} alt="imageUrl" />
      <h2>{data.title}</h2>
      <h4>{data.price} ₴</h4>
      <p>
        Consequat elit est aliquip tempor exercitation nostrud do culpa ex. Est
        laboris cupidatat laborum est tempor sunt minim non laboris. Et eu
        adipisicing incididunt minim adipisicing. Voluptate id deserunt
        incididunt excepteur velit incididunt. Dolore ipsum commodo excepteur do
        incididunt.
      </p>
    </div>
  );
};
