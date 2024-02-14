let skills = [
    { id: 1, name: 'JavaScript', proficiency: 'Expert' },
    { id: 2, name: 'HTML', proficiency: 'Intermediate' },
    { id: 3, name: 'CSS', proficiency: 'Beginner' },
  ]
  module.exports = {
    getAll
  };
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype for finding objects within an array
    return skills.find(skill => skill.id === id);
  }
  function getAll() {
    return skills;
  }
  