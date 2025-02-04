import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/suryansharmaa")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="bg-gray-600 text-center text-3xl text-white p-4">
        <em>Github Username : {data.login}</em>
        <img src={data.avatar_url} alt="github profile" width={250} />
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/suryansharmaa");
  const data = await response.json();
  return data;
};
