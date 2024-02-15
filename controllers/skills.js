
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    
}
function create(req, res) {
  console.log(req.body.skill, "req.body")
  const newSkill = {...req.body};
  Skill.create(newSkill);
  res.redirect('/skills');
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
  console.log(Skill.getAll())
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}
