const { Router } = require('express');

const {
  getAllTagsHandler,
  createTagHandler,
} = require('./tag.controller');

const { hasRole } = require('../../auth/auth.service');
const router = Router();

router.get('/', getAllTagsHandler);
router.post('/', hasRole('admin'), createTagHandler);

module.exports = router;
