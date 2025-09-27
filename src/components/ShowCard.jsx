import React from "react";
import TicketCard from "./TicketCard";
import { toast } from "react-toastify";


const ShowCard = ({ item, setResolved, resolved }) => {
  const handelCard = (id) => {
    const exits = resolved.find((item) => item.id === id);
    if (exits) {
      toast.warning("Already added this card");
      return;
    }
    toast.success("Card Added");
    setResolved((prev) => [...prev, item]);
  };
  return (
    <>
      <div
        className="bg-white rounded-lg shadow p-2 cursor-pointer "
        onClick={() => handelCard(item.id)}
      >
        <div className="flex justify-between items-start">
          <div className="">
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-1">
              {item.description}
            </p>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${item.status === "Open"? "bg-green-100" : "bg-yellow-100"}`}>
            <span className={`w-2 h-2 rounded-full ${item.status === "Open" ? "bg-green-600" : "bg-yellow-500"} `}></span>
            <span className={`text-[12px] font-medium whitespace-nowrap   rounded-full ${item.status === "Open"? "text-green-600" : "text-yellow-600" }`}>{item.status}</span>
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center text-sm text-gray-500">
          <div>
            <span className="text-[12px]">#{item.id}</span>
            <span className={`mx-2  text-xs font-semibold ${item.priority === "High" ? "text-red-500" :
              item.priority === "Medium"? "text-yellow-500" : "text-green-500"}`}>{item.priority}</span>
          </div>
          <div>
            <span className="mx-3 text-[12px] font-semibold">{item.customer} </span>
            <span className="text-[12px]"><i className="ri-calendar-line"></i> {item.createdAt}</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default ShowCard;
