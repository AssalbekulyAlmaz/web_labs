
let admin;
let name;

name = 'John';
admin = name;

const showAdminName = () => {
  alert(admin);
};


const ourPlanetName = 'Earth';
const currentUserName = 'John'; 

const BIRTHDAY = '18.04.1982';
const calculateAgeFromBirthday = (birthdayString) => {
  if (birthdayString === BIRTHDAY) {
    return 42;
  }

  return 0;
};

const age = calculateAgeFromBirthday(BIRTHDAY);

