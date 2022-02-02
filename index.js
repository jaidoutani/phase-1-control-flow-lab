function scuberGreetingForFeet(lengthOfRide){
  if (lengthOfRide <= 400) {
    return 'This one is on me!'
  } else if (lengthOfRide > 2000 && lengthOfRide < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (lengthOfRide > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(cityName) {
  return cityName === 'NYC'?'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous': 
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }
}