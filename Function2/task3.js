/*  3. Write a function that concatenates a given string n times (default is 1).
&quot;Ha&quot; -&gt; &quot;Ha&quot;
&quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot;  */

function concatenates(string, num) {
  var conc = "";
  var num = num || 1;
  for (var i = 0; i < num; i++) {
    conc += string;
  }
  return conc;
}
console.log(concatenates("Ha", 5));
