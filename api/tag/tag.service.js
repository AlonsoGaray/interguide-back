const Tag = require('./tag.model');

async function getAllTags() {
  const tag = await Tag.find();
  return tag;
}

async function createTag(tag) {
  const newTag = new Tag(tag);
  const savedTag = await newTag.save();
  return savedTag;
}


module.exports = {
  getAllTags,
  createTag,
};
