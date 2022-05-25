
export function Greeting() {

const date = new Date();
  let currentHour = date.getHours();
  let currentGreeting = '';
  
  if (currentHour >=0 && currentHour < 12) {
    currentGreeting = 'Good Morning';

  } else if (currentHour >= 12 && currentHour < 18 ) {
    currentGreeting = 'Good Afternoon';

  } else {
    currentGreeting = 'Good Evening';
  }

  return currentGreeting;
}