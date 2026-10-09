//http://localhost:3010/customers/

const express = require("express");
const server = express();

server.use(express.json());

let customers = [
  { id: 1, name: "youtube", site: "https://www.youtube.com/" },
  { id: 2, name: "codewars", site: "https://www.codewars.com/" },
  { id: 3, name: "node-online", site: "https://www.jdoodle.com/execute-nodejs-online" }
];

server.get("/customers", (req, res) => {
  return res.json(customers);
} ); 

//SHOW
server.get("/customers/:id", (req, res) => {
  const { id } =parseInt (req.params.id);
  const customer = customers.find(item => item.id === id);
  const status = customer ? 200 : 404;
  return res.status(status).json(customer);
} ); 

// console.log( "GET :: /customers/:id", JSON.stringify(customers) );
console.debug( "GET :: /customers/:id",(customers) );


server.post("/customers", (req, res) => {
  const { name, site } = req.body;
  const nextId = customers [customers.length - 1].id + 1;
  const newCustomer = { id: nextId, name, site };
  customers.push(newCustomer);
  return res.status(201).json(newCustomer);
});

server.put("/customers/:id", (req, res) => {
  const { id } = parseInt(req.params.id);
  const { name, site } = req.body;
  const Index = customers.findIndex(item => item.id === id);
  const status = Index >= 0 ? 200 : 404;

  if (Index >= 0) {
    customers[Index] = { id:parseInt(id), name, site };
  }
  return res.status(status).json(customers[Index]);
});

server.delete("/customers/:id", (req, res) => {
  const { id } = parseInt(req.params.id);
  const Index = customers.findIndex(item => item.id === id);
  const status = Index >= 0 ? 200 : 404;

   if (Index >= 0) {
    customers.splice(Index, 1);
  }

  return res.status(status).json();
});


server.listen(3010);