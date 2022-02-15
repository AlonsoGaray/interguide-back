const {
  getAllCompanies,
  createCompany,
} = require('./company.service');

async function getAllCompaniesHandler(req, res) {
  try {
    const tags = await getAllCompanies();
    return res.status(200).json(tags);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createCompanyHandler(req, res) {
  try {
    const service = await createCompany(req.body);
    return res.status(201).json(service);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllCompaniesHandler,
  createCompanyHandler,
};
