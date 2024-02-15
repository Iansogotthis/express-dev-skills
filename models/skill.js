let skills = [
    { id: 1, name: 'JavaScript', proficiency: 'Expert' },
    { id: 2, name: 'HTML', proficiency: 'Intermediate' },
    { id: 3, name: 'CSS', proficiency: 'Beginner' },
  ]

  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.findIndex() method returns an index in the array if an element in the array satisfies the provided testing function; otherwise, it will return -1.
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  

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
  