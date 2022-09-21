function scuberGreetingForFeet(number){
  // Write your code here!
let result
if (number <= 400) {
  result = 'This one is on me!'
  return result
} else if (number <= 2000) {
result = 'That will be twenty bucks.'
return result}
else if (number >= 2000 && number <= 2500) {
  result = 'I will gladly take your thirty bucks.'
  return result
} else {result = 'No can do.'
return result}
}
function ternaryCheckCity(city){
  // Write your code here!
  let result
  if (city == 'NYC')
{result = "Ok, sounds good."
return result}
else { result = "No go." } 
return result
}
function switchOnCharmFromTip(tip){
  // Write your code here!
  let response
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
    return response
    case 'not as generous':
      response = 'Thank you.'
      return response 
    default: 'Bye.'
    response = 'Bye.'
    return response
  }
}
