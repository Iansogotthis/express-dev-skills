
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
}

function newSkill(req, res) {
  res.render('skills/new',  {
    title: 'Add Skill'
  });
}
function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id)
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}
