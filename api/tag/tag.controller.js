const {
  getAllTags,
  createTag,
} = require('./tag.service');

async function getAllTagsHandler(req, res) {
  try {
    const tags = await getAllTags();
    return res.status(200).json(tags);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createTagHandler(req, res) {
  try {
    const service = await createTag(req.body);
    return res.status(201).json(service);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllTagsHandler,
  createTagHandler,
};
