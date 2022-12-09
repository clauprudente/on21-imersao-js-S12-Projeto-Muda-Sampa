const User = require('./User');

class UserVolunteer extends User {
  isAdmin = true;
  constructor(name, login, password) {
    super(name, login, password);
    this.constructor.createdVolunteerUsers.push({
      name: name,
      login: login,
      password: password,
      isAdmin: true,
    });
  }

  static createdVolunteerUsers = [];
}

module.exports = UserVolunteer;
