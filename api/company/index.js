const { Router } = require('express');

const {
  getAllCompaniesHandler,
  createCompanyHandler,
} = require('./company.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();

router.get('/', getAllCompaniesHandler);
router.post('/', isAuthenticated(), createCompanyHandler);

module.exports = router;
