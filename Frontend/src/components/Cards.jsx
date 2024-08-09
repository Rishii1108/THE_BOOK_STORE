import React from "react";

function Cards({ item }) {
  return (
    <div className="card-container p-3">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col h-full">
        <figure className="flex-shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body flex flex-col flex-1 p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <div className="badge badge-secondary text-xs">{item.category}</div>
          </div>
          <p className="flex-1 mb-4">{item.title}</p>
          <div className="card-actions flex justify-between items-center">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-3 py-2 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
