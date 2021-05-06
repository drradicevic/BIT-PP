/* 1.	Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
●	takes 4 arguments: number of children, partner's name, geographic location, job title.
●	outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments. */

function tellFortune(
  jobTitle,
  geographicLocation,
  partnerName,
  numberOfChildren
) {
  var furtune =
    "You will be a " +
    jobTitle +
    " in " +
    geographicLocation +
    ", and married to " +
    partnerName +
    " with " +
    numberOfChildren +
    " kids.";

  return furtune;
}
console.log(tellFortune("Manager", "Belgrade", "Lana", 4));
console.log(tellFortune("Taxi Driver", "London", "Sana", 1));
console.log(tellFortune("Pilot", "New York", "Jesica", 3));
