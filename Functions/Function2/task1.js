/*  1. Write a function to check whether the `input` is a string or not.
&quot;My random string&quot; -&gt; true
12 -&gt; false */

function check(input) {
  if (typeof input === "string") {
    return input + " ---> " + true;
  } else {
    return input + " ---> " + false;
  }
}
console.log(check("My random string"));
