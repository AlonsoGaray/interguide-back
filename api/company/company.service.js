const Company = require('./company.model');

async function getAllCompanies() {
  const company = await Company.find();
  return company;
}

async function createCompany(company) {
  const newCompany = new Company(company);
  const savedCompany = await newCompany.save();
  return savedCompany;
}


module.exports = {
  getAllCompanies,
  createCompany,
};
