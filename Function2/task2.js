/*  2. Write a function to check whether a string is blank or not.
&quot;My random string&quot; -&gt; false
&quot; &quot; -&gt; true
12 -&gt; false
false -&gt; false  */

/*function check(input) {
  if (typeof input === "string") {
    if (input == "") {
      return input + " ---> " + true;
    }
  }
  return input + " ---> " + false;
}
console.log(check(""));*/

function check(input) {
  if (typeof input === "string" && input == "") {
    return input + " ---> " + true;
  } else {
    return input + " ---> " + false;
  }
}
console.log(check(""));
