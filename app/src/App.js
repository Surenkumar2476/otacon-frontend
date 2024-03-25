// import React, { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import HomePage from '/home/surenkumar/SurenkumarWF/gitrepo/otacon-frontend/app/src/Components/HomePage/HomePage';
//  import AnotherPage from '/home/surenkumar/SurenkumarWF/gitrepo/otacon-frontend/app/src/Components/AnotherPage/AnotherPage';

function App() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}



export default App;

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://otacon.api.s.relevatetechops.com/getDomainList');
//       const jsonData = await response.json();
//       debugger;
//       setData(jsonData[0]);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Domain List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Server_Name</th>
//             <th>ZabbixId</th>
//             <th>Server_Config_File_Name</th>
//             <th>Prod_Url</th>
//             <th>Live</th>
//             <th>Sunset</th>
//             <th>Not_Live</th>
//             <th>Valid_SSL</th>
//             <th>In_Zabbix</th>
//             <th>Last_Updated_Date</th>
//             <th>Remarks</th>
//             <th>Registration Account (Godaddy / Network Solutions / Client Managed)</th>
//             <th>Domain Purpose (API or website/forwarding/investment)</th>
//             <th>Domain Expiration date</th>
//             <th>Domain Managed (RH/SWAAS)</th>
//             <th>Parked (Yes/No)</th><th>Sold/Transfer Date</th>
//             <th>SSL Expiration</th>
//             <th>Forwarding Address</th>
//             <th>Hosting (AWS/ICD/SWAAS)</th>
//             <th>Hosting Expiration Date</th>
//             <th>Client</th>
//             <th>Brand</th>
//             <th>Product</th>
//             <th>Billing Code (wfProjectId24)</th>
//             <th>WF Task (wfTaskIdAM24)</th>
//             <th>Renewal Rules (auto/renew until nnnn year)</th>
//             <th>Primary Contact</th>
//             <th>Contact Email</th>
//             <th>Notes</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.Id}</td>
//               <td>{item.Server_Name}</td>
//               <td>{item.ZabbixId}</td>
//               <td>{item.Server_Config_File_Name}</td>
//               <td>{item.Prod_Url}</td>
//               <td>{item.Live}</td>
//               <td>{item.Sunset}</td>
//               <td>{item.Not_Live}</td>
//               <td>{item.Valid_SSL}</td>
//               <td>{item.In_Zabbix}</td>
//               <td>{item.Last_Updated_Date}</td>
//               <td>{item.Remarks}</td>
//               <td>{item.Registration_Account}</td>
//               <td>{item.Domain_Purpose}</td>
//               <td>{item.Domain_Expiration_date}</td>
//               <td>{item.Domain_Managed}</td>
//               <td>{item.Parked}</td>
//               <td>{item.Sold_Or_Transfer_Date}</td>
//               <td>{item.SSL_Expiration}</td>
//               <td>{item.Forwarding_Address}</td>
//               <td>{item.Hosting}</td>
//               <td>{item.Hosting_Expiration_Date}</td>
//               <td>{item.Client_Name}</td>
//               <td>{item.Brand_Name}</td>
//               <td>{item.Product_Name}</td>
//               <td>{item.Billing_Code}</td>
//               <td>{item.WF_Task_Id}</td>
//               <td>{item.Renewal_Rules}</td>
//               <td>{item.Primary_Contact_Name}</td>
//               <td>{item.Contact_Email}</td>
//               <td>{item.Notes}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;
