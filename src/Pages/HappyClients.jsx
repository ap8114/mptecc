// HappyClients.jsx
import React from "react";

const clients = [
  {
    name: "Raghavam Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant ",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "XYZ Restaurant",
    img: "https://tse4.mm.bing.net/th?id=OIP.jRnuwiqw8CO0itSGsHcOAwHaL_&pid=Api&P=0&h=180",
  },
];

const HappyClients = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold mb-5 my-5" style={{ color: "black", display: "block", visibility: "visible" }}>Some Of Our Happy Clients</h2>
      
      
      <div className="row justify-content-center">
        {clients.map((client, index) => (
          <div className="col-6 col-sm-4 col-md-2 mb-4" key={index}>
            <div className="border rounded p-3 h-100 d-flex flex-column align-items-center">
              <img
                src={client.img}
                alt={client.name}
                className="img-fluid mb-2"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
              <small className="fw-semibold text-uppercase">{client.name}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
