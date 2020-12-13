const courseContent = [
  {
    time: '5:35 mins',
    title: 'Selamat Belajar',
  },
  {time: '7:35 mins', title: 'Intro'},
  {time: '10:35 mins', title: 'Pengenalan'},
  {time: '5:35 mins', title: 'Install Component'},
];

const courses = [
  {
    name: 'UX Design',
    totalCourse: '50',
    image: require('../assets/day94-ui-ux.png'),
    price: '185',
    star: '4.3',
    students: '10',
    courseContent,
  },
  {
    name: 'Front End',
    totalCourse: '35',
    image: require('../assets/day93-programing.png'),
    price: '185',
    star: '4.1',
    students: '55',
    courseContent,
  },
  {
    name: 'Back End',
    totalCourse: '12',
    image: require('../assets/backend.png'),
    price: '185',
    star: '4.3',
    students: '10',
    courseContent,
  },
  {
    name: 'Fullstack',
    totalCourse: '9',
    image: require('../assets/fullstack.png'),
    price: '185',
    star: '4.2',
    students: '35',
    courseContent,
  },
];

export default courses;
