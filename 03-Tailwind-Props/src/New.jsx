import React from "react";

function New({ username, btnText = "Visit here" }) {
  //   console.log("props : ", props);
  //   console.log("username : ", props.username);
  console.log("username : ", username);
  return (
    <>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://images.unsplash.com/photo-1737859682164-f949f037db5f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <button className="w-30  m-3 p-4">{btnText}</button>
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium m-5">{username}</span>
          <span className="font-medium text-sky-500 m-5">
            The Anti-Patterns
          </span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400 m-5">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default New;
