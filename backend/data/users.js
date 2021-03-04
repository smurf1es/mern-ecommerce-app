import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Rick Morty',
    email: 'rick@morty.com',
    password: bcrypt.hashSync('123456', 12),
    isAdmin: true,
  },
  {
    name: 'Ray James',
    email: 'ray@james.com',
    password: bcrypt.hashSync('123456', 12),
  },
  {
    name: 'Jane Doe',
    email: 'jane@doe.com',
    password: bcrypt.hashSync('123456', 12),
  },
];

export default users;
