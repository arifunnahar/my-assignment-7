import React, { useEffect, useState } from "react";
import TicketCard from "./TicketCard";
import CountCard from "./CountCard";


const IssueManagement = () => {
  const [tickets, setTickets] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [isComplete, setIsComplete] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();
      setTickets(data);
    };
    fetchData();
  }, []);

  // console.log(tickets);
  return (
    <>
      <CountCard isComplete={isComplete} resolved={resolved} />
      <TicketCard
        tickets={tickets}
        setTickets={setTickets}
        resolved={resolved}
        setResolved={setResolved}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
      />
    </>
  );
};

export default IssueManagement;
