/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot; */

function providedSeparator(string, separator) {
  var result = "";
  separator = separator || "-";
  for (var i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      result += separator;
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(providedSeparator("My random string", ""));
