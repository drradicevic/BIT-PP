/*12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.*/

function untilRetirement(birthyear, sex) {
  var currentYear = 2021;
  var retirementYear;
  var tillRetirement;
  if (sex === "male") {
    retirementYear = 65;
  } else if (sex === "female") {
    retirementYear = 60;
  }

  tillRetirement = currentYear - birthyear; //    till = 2021 - 1970 = 51

  if (retirementYear >= tillRetirement) {
    tillRetirement = retirementYear - tillRetirement;
    tillRetirement += " years till retirement";
  } else {
    tillRetirement = "Already retired";
  }

  return tillRetirement;
}

console.log(untilRetirement(2000, "male"));
