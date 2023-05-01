function scuberGreetingForFeet(someValue){
  if(someValue <= "400"){
    return 'This one is on me!'
  } else if(someValue > '400' && someValue <= '2000')
    return 'That will be twenty bucks.';
    else if(someValue > '2000' && someValue <= '2500')
    return 'I will gladly take your thirty bucks.'
    else(someValue > '2500')
    return 'No can do.'
}

function ternaryCheckCity(city){
  if(city === 'NYC')
  return 'Ok, sounds good.'
  else(city)
  return 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    
    case 'not as generous':
      return 'Thank you.';
      break;
      
    default:
      return 'Bye.';
  }
}