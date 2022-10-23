const { User } = require('../models');

const userData = [
  {
    name: 'TestUser1',
    email: 'test1@test.com',
    password: 'password12345',
  },
  {
    name: 'TestUser2',
    email: 'test2@test.com',
    password: 'password12346',
  },
  {
    name: 'TestUser3',
    email: 'test3@test.com',
    password: 'password12347',
  },
  {
    name: 'TestUser4',
    email: 'test4@test.com',
    password: 'password12348',
  },
  {
    name: 'TestUser5',
    email: 'test5@test.com',
    password: 'password12349',
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
