import bcrypt from 'bcryptjs';

const users = [
  {
    firstName: 'Admin',
    lastName: 'Nate',
    email: 'admin@example.com',
    password: bcrypt.hashSync('knicks', 10),
    isAdmin: true,
  },
  {
    firstName: 'KC',
    lastName: 'Des',
    email: 'kc@example.com',
    password: bcrypt.hashSync('knicks', 10),
  },
  {
    firstName: 'Oso',
    lastName: 'Dim',
    email: 'oso@example.com',
    password: bcrypt.hashSync('knicks', 10),
  },
  {
    firstName: 'Cape',
    lastName: 'Col',
    email: 'cape@example.com',
    password: bcrypt.hashSync('knicks', 10),
  },
  {
    firstName: 'Alec',
    lastName: 'Rose',
    email: 'alec@example.com',
    password: bcrypt.hashSync('knicks', 10),
  },
];

export default users;
