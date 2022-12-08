import User from './User.js';

export default class UserVolunteer extends User {
  constructor(name, login, password) {
    super(name, login, password);
  }
}
