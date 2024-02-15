let skills = [
    { id: 1, name: 'JavaScript', proficiency: 'Expert' },
    { id: 2, name: 'HTML', proficiency: 'Intermediate' },
    { id: 3, name: 'CSS', proficiency: 'Beginner' },
  ]

  
  module.exports = {
    getAll,
    getOne,
    create
  };
  
  function create(skill) {
   console.log(skill)
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype for finding objects within an array
    return skills.find(skill => skill.id === id);
  }
  function getAll() {
    return skills;
  }
  