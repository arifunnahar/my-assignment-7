import React, { useState } from "react";
import { toast } from "react-toastify";




const Aside = ({ resolved, setResolved, setIsComplete, setTickets,
  tickets,
 
  }) => {
  const [remove, seRemove] = useState([]);
  const handelComplete = (id) => {
    const newResolved = resolved.filter((item) => item.id !== id);
    const newTickets = tickets.filter((item) => item.id !== id);
    const finded = resolved.find((item) => item.id === id);
    seRemove((prev) => [...prev, finded]);
    setResolved(newResolved);
    setTickets(newTickets);

    toast.success('Completed')

    setIsComplete((prev) => [...prev, newResolved]);
};

  const handelDelete =(id)=>{
    const newRemove = remove.filter(item => item.id !== id) 
    seRemove(newRemove)
  }

  return (
    <>
      <div className=" col-span-5 md:col-span-3  mb-4  ml-15  md:ml-0">
        <div className=" ">
          <h1 className="font-semibold text-gray-800 text-xl mb-2 p-2">Task Status</h1>
         

         

            {resolved.length === 0 ? (
            <p className="text-gray-500 p-2 text-sm">Select a ticket to add to Task Status</p>
          ) : (
            resolved.map((ele) => (
              <div key={ele.id} className="bg-white p-3 mb-2 rounded shadow">
                <h3 className="font-semibold text-gray-800">{ele.title}</h3>
                <button
                  className="btn bg-green-600 w-full text-white mt-2 px-2 py-1"
                  onClick={() => handelComplete(ele.id)}
                >
                  Complete
                </button>
              </div>
            ))
          )}

</div>

        <div className="mt-10 mb-2">
          <h1 className="font-semibold text-gray-800 text-xl mb-2 ml-2"> Resolved Task</h1>
          
          <div className=" p-2 mb-2">
          
           {remove.length === 0 ? (
            <p className="text-gray-500 text-sm p-2">No resolved task yet</p>
          ) : (
            remove.map((ele) => (
              <div key={ele.id} className="bg-white p-3 mb-2 rounded shadow">
                <h3 className="text-gray-700 font-semibold">{ele.title}</h3>
                
                <button
                  className=" px-2 py-1 w-full mt-2"
                  onClick={() => handelDelete(ele.id)}
                >
                  Completed <span>   </span>
                </button>
            
              </div>
            ))
          )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
