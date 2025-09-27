import React from "react";
import ShowCard from "./ShowCard";
import Aside from "./Aside";

const TicketCard = ({tickets ,setTickets,setResolved,resolved,isComplete,setIsComplete
}) => {
  return (
    <>
      <div className="bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
      <h1 className="font-bold text-2xl ml-3 md:ml-0">Customer Tickets</h1>
          <div className="grid grid-cols-3 md:grid-cols-12 gap-5 mt-3 ">
            
        {/*------ Issues card  ------*/}

        <div className="col-span-9 ">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 p-5 md:p-0">
           {tickets.map((item) => (<ShowCard  key={item.id} item={item}setResolved={setResolved}
              resolved={resolved}
              tickets={tickets}
              isComplete={isComplete}
              setIsComplete={setIsComplete}/>
          ))}
         </div>
        </div>

        {/*------------- Aside section-------------*/}

        <Aside
          resolved={resolved}
          isComplete={isComplete}
          setIsComplete={setIsComplete}
          tickets={tickets}
          setTickets={setTickets}
            setResolved={setResolved}
        />
      </div>
      </div>
      </div>
    </>
  );
};

export default TicketCard;
