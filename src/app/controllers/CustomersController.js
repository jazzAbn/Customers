let customers = [
  { id: 1, name: "youtube", site: "https://www.youtube.com/" },
  { id: 2, name: "codewars", site: "https://www.codewars.com/" },
  {
    id: 3,
    name: "node-online",
    site: "https://www.jdoodle.com/execute-nodejs-online",
  },
];

class CustomersController {
  // esse metodo faz a listagem dos registros
  index(req, res) {
    return res.json(customers);
  }
  // esse metodo recuoera um registro especifico
  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;

    console.debug("GET :: /customers/:id", customers);
    return res.status(status).json(customer);
  }
  // esse metodo faz a criacao de um registro
  create(req, res) {
    const { name, site } = req.body;
    const Id = customers[customers.length - 1].id + 1;
    const newCustomer = { id, name, site };
    customers.push(newCustomer);
    return res.status(201).json(newCustomer);
  }

  // esse metodo faz a atualizacao de um registro
  update(req, res) {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;
    const Index = customers.findIndex((item) => item.id === id);
    const status = Index >= 0 ? 200 : 404;

    if (Index >= 0) {
      customers[Index] = { id: parseInt(id), name, site };
    }
    return res.status(status).json(customers[Index]);
  }

  // esse metodo faz a exclusao de um registro
  destroy(req, res) {
    const { id } = parseInt(req.params.id);
    const Index = customers.findIndex((item) => item.id === id);
    const status = Index >= 0 ? 200 : 404;

    if (Index >= 0) {
      customers.splice(Index, 1);
    }

    return res.status(status).json();
  }
}
module.exports = new CustomersController();
