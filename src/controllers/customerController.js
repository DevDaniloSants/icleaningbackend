import customerService from '../services/customerService';

// Application entry pointer
class CustomerController {
  async register(req, res) {
    const { name, email, phone, lat_x, long_y } = req.body;
    try {
      await customerService.save(name, email, phone, lat_x, long_y);
      res.status(201).json({
        status: 201,
        message: 'Usuário cadastrado com sucesso',
        creationDate: new Date(),
      });
    } catch (error) {
      if (error.message === 'E-mail already exists') {
        res.status(400).json({ status: 400, message: 'E-mail já cadastrado' });
      } else {
        console.error(error);
        res.status(500).json({ status: 500, message: 'Internal Server Error' });
      }
    }
  }

  async show(req, res) {
    const customer = await customerService.findAll();
    console.log(customer);
    res.status(200).json(customer);
  }

  async sortOder(req, res) {
    const customer = await customerService.findSortOrder();
    console.log(customer);
    res.status(200).json(customer);
  }
}

export default new CustomerController();
