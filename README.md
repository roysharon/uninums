## Unicode Numbers In Javascript

[![npm version](https://badge.fury.io/js/%40ull-esit-pl%2Funinums.svg)](https://badge.fury.io/js/%40ull-esit-pl%2Funinums)

### Instalation and use

To install:

```
npm install @ull-esit-pl/uninums
```

To use it:

```
> uninums = require("@ull-esit-pl/uninums")
{ normalSpaces: [Function: normalSpaces],
  normalDigits: [Function: normalDigits],
  parseUniInt: [Function: parseUniInt],
  parseUniFloat: [Function: parseUniFloat],
  sortNumeric: [Function: sortNumeric] }
> uninums.parseUniInt('६.६')
6
> uninums.parseUniFloat('६.६')
6.6
> uninums.parseUniFloat('६.६e६')
6600000
> uninums.sortNumeric(['٣ dogs','١٠ cats','٢ mice']) 
[ '٢ mice', '٣ dogs', '١٠ cats' ]
> uninums.normalDigits('٢ mice')
'2 mice'
> uninums.normalDigits('٣ dog')
'3 dog'
> uninums.normalDigits('١٠ cats')
'10 cats'
> uninums.normalDigits('٠۴६')
'046'
```

### Blog: [Unicode Numbers In Javascript](http://roysharon.com/blog/44)
See also the blog: 
[Unicode Numbers In Javascript](http://roysharon.com/blog/44)
Posted on December 1, 2010 by Roy Sharon

### Description

Javascript supports Unicode strings, but parsing such strings to numbers is unsupported (e.g., the user enters a phone number using Chinese numerals).  
[uninums.js](https://raw.github.com/roysharon/uninums/master/uninums.js) is a small utility script that implements five methods for handling non-ASCII numerals in Javascript:

<table>
<tbody>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
<tr>
<td>normalDigits(s)</td>
<td>Normalizes string <code>s</code> by replacing all non-ASCII digits with ASCII digits.<p></p>
<ul>
<li>normalDigits(‘٠۴६’) == ’046′</li>
<li>normalDigits(’123′) == ’123′</li>
</ul>
</td>
</tr>
<tr>
<td>normalSpaces(s)</td>
<td>Normalizes string <code>s</code> by replacing all whitespace characters with either a space (‘\x20′) or a newline (‘\n’) as appropriate:<p></p>
<ul>
<li>normalSpaces(‘Hello\t\rWorld’) == ‘Hello\x20\nWorld’</li>
<li>normalSpaces(‘\xA0\u2003′) == ‘\x20\x20′</li>
<li>normalSpaces(‘\u2028) == ‘\n’</li>
</ul>
<p>As a special case, normalSpaces() also replaces CRLF to a single newline character. So normalSpaces(‘\r\n’) == ‘\n’.</p></td>
</tr>
<tr>
<td>parseUniInt(s,r)</td>
<td>Returns the integer value at the start of string <code>s</code>, ignoring leading spaces and using radix <code>r</code>. This is equivalent to the behavior of Javascript’s internal parseInt() function, but also handles non-ASCII digits:<p></p>
<ul>
<li>parseUniInt(‘٠۴६’, 10) == parseInt(’046′, 10) == 46</li>
<li>parseUniInt(‘٠۴६’) == parseInt(’046′) == 38 // assumes radix=8 due to leading zero</li>
<li>parseUniInt(‘٠۴६hello’) == parseInt(’046hello’) == 38</li>
<li>parseUniInt(‘hello’) == parseInt(‘hello’) == NaN</li>
</ul>
</td>
</tr>
<tr>
<td>parseUniFloat(s)</td>
<td>Returns the float value at the start of string <code>s</code>, ignoring leading spaces. This is equivalent to the behavior of Javascript’s internal parseFloat() function, but also handles non-ASCII digits:<p></p>
<ul>
<li>parseUniFloat(‘٠۴.६’) == parseFloat(’04.6′) == 4.6</li>
<li>parseUniFloat(‘٠۴.६hello’) == parseFloat(’04.6hello’) == 4.6</li>
<li>parseUniFloat(‘hello’) == parseFloat(‘hello’) == NaN</li>
</ul>
</td>
</tr>
<tr>
<td>sortNumeric(a)</td>
<td>Sorts array <code>a</code> in place according to the numeric float values of its items:<p></p>
<ul>
<li>sortNumeric(['3 dogs','10 cats','2 mice']) == ['2 mice','3 dogs','10 cats']</li>
<li>sortNumeric(['٣ dogs','١٠ cats','٢ mice']) == ['٢ mice','٣ dogs','١٠ cats']</li>
</ul>
<p>Note that using Javascript’s internal sort() function will order ’10 cats’ before ’2 mice’ because it is string based rather than numeric.</p></td>
</tr>
</tbody>
</table>

For further information on how these functions are implemented [see here](http://roysharon.com/blog/44).

Using or modifying this project is subject to the [MIT License](http://creativecommons.org/licenses/MIT/).
