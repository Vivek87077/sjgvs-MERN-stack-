import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard(){

 const [donations,setDonations] = useState([]);

 useEffect(()=>{

   const fetchData = async () => {

    const token = localStorage.getItem("token");

    console.log("TOKEN:", token);   // DEBUG

    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/donations",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("DATA:", res.data);  // DEBUG
      setDonations(res.data);

    } catch (err) {
      console.log("ERROR:", err.response?.data);
    }
  };

  fetchData();

 },[]);

 return(
  <div className="p-10">

   <h1 className="text-3xl font-bold mb-6">
     Donations
   </h1>

   <table className="w-full border">

    <thead>
     <tr className="bg-ngoGreen text-white">
      <th className="p-2">Name</th>
      <th className="p-2">Email</th>
      <th className="p-2">Amount</th>
      <th className="p-2">Cause</th>
     </tr>
    </thead>

    <tbody>

    {donations.map(d=>(
      <tr key={d._id} className="border">
        <td className="p-2">{d.name}</td>
        <td className="p-2">{d.email}</td>
        <td className="p-2">₹{d.amount}</td>
        <td className="p-2">{d.cause}</td>
      </tr>
    ))}

    </tbody>

   </table>

  </div>
 );
}
