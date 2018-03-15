// Copyright (c) 2010 Roy Sharon <roy@roysharon.com>
// See project repositry at <https://github.com/roysharon/uninums>
// Using this file is subject to the MIT License <http://creativecommons.org/licenses/MIT/>
// Modified 2018 by Casiano <crguezl@ull.edu.es> to use as npm package

    // based on Unicode 5.2; does not include code units above 0xFFFF
    let Nd = [
		'0\u0660\u06F0\u07C0\u0966\u09E6\u0A66\u0AE6\u0B66\u0BE6\u0C66\u0CE6\u0D66\u0E50\u0ED0\u0F20\u1040\u1090\u17E0\u1810\u1946\u19D0\u1A80\u1A90\u1B50\u1BB0\u1C40\u1C50\uA620\uA8D0\uA900\uA9D0\uAA50\uABF0\uFF10',
		'1\u0661\u06F1\u07C1\u0967\u09E7\u0A67\u0AE7\u0B67\u0BE7\u0C67\u0CE7\u0D67\u0E51\u0ED1\u0F21\u1041\u1091\u17E1\u1811\u1947\u19D1\u19DA\u1A81\u1A91\u1B51\u1BB1\u1C41\u1C51\uA621\uA8D1\uA901\uA9D1\uAA51\uABF1\uFF11',
		'2\u0662\u06F2\u07C2\u0968\u09E8\u0A68\u0AE8\u0B68\u0BE8\u0C68\u0CE8\u0D68\u0E52\u0ED2\u0F22\u1042\u1092\u17E2\u1812\u1948\u19D2\u1A82\u1A92\u1B52\u1BB2\u1C42\u1C52\uA622\uA8D2\uA902\uA9D2\uAA52\uABF2\uFF12',
		'3\u0663\u06F3\u07C3\u0969\u09E9\u0A69\u0AE9\u0B69\u0BE9\u0C69\u0CE9\u0D69\u0E53\u0ED3\u0F23\u1043\u1093\u17E3\u1813\u1949\u19D3\u1A83\u1A93\u1B53\u1BB3\u1C43\u1C53\uA623\uA8D3\uA903\uA9D3\uAA53\uABF3\uFF13',
		'4\u0664\u06F4\u07C4\u096A\u09EA\u0A6A\u0AEA\u0B6A\u0BEA\u0C6A\u0CEA\u0D6A\u0E54\u0ED4\u0F24\u1044\u1094\u17E4\u1814\u194A\u19D4\u1A84\u1A94\u1B54\u1BB4\u1C44\u1C54\uA624\uA8D4\uA904\uA9D4\uAA54\uABF4\uFF14',
		'5\u0665\u06F5\u07C5\u096B\u09EB\u0A6B\u0AEB\u0B6B\u0BEB\u0C6B\u0CEB\u0D6B\u0E55\u0ED5\u0F25\u1045\u1095\u17E5\u1815\u194B\u19D5\u1A85\u1A95\u1B55\u1BB5\u1C45\u1C55\uA625\uA8D5\uA905\uA9D5\uAA55\uABF5\uFF15',
		'6\u0666\u06F6\u07C6\u096C\u09EC\u0A6C\u0AEC\u0B6C\u0BEC\u0C6C\u0CEC\u0D6C\u0E56\u0ED6\u0F26\u1046\u1096\u17E6\u1816\u194C\u19D6\u1A86\u1A96\u1B56\u1BB6\u1C46\u1C56\uA626\uA8D6\uA906\uA9D6\uAA56\uABF6\uFF16',
		'7\u0667\u06F7\u07C7\u096D\u09ED\u0A6D\u0AED\u0B6D\u0BED\u0C6D\u0CED\u0D6D\u0E57\u0ED7\u0F27\u1047\u1097\u17E7\u1817\u194D\u19D7\u1A87\u1A97\u1B57\u1BB7\u1C47\u1C57\uA627\uA8D7\uA907\uA9D7\uAA57\uABF7\uFF17',
		'8\u0668\u06F8\u07C8\u096E\u09EE\u0A6E\u0AEE\u0B6E\u0BEE\u0C6E\u0CEE\u0D6E\u0E58\u0ED8\u0F28\u1048\u1098\u17E8\u1818\u194E\u19D8\u1A88\u1A98\u1B58\u1BB8\u1C48\u1C58\uA628\uA8D8\uA908\uA9D8\uAA58\uABF8\uFF18',
		'9\u0669\u06F9\u07C9\u096F\u09EF\u0A6F\u0AEF\u0B6F\u0BEF\u0C6F\u0CEF\u0D6F\u0E59\u0ED9\u0F29\u1049\u1099\u17E9\u1819\u194F\u19D9\u1A89\u1A99\u1B59\u1BB9\u1C49\u1C59\uA629\uA8D9\uA909\uA9D9\uAA59\uABF9\uFF19'
	];
	for (let i = Nd.length-1; i >= 0; --i) Nd[i] = new RegExp('['+Nd[i]+']', 'g');
	
	let Zs_and_friends = new RegExp('[ \t\v\f\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\uFEFF]', 'g');
	
	let line_terminators = new RegExp('\r\n|[\n\r\u2028\u2029]', 'g');
	
	function normalSpaces(s) {
		return s ? s.toString().replace(Zs_and_friends, ' ').replace(line_terminators, '\n') : s;
	}
	
	function normalDigits(s) {
		if (!s) return s;
		s = s.toString();
		for (let i = 0; i <= 9; ++i) s = s.replace(Nd[i], i);
		return s;
	}
	
	function parseUniInt(s, radix) {
		return parseInt(s && typeof(s) != 'number' ? normalDigits(normalSpaces(s.toString())) : s, radix);
	}
	
	function parseUniFloat(s) {
		return parseFloat(s && typeof(s) != 'number' ? normalDigits(normalSpaces(s.toString())) : s);
	}
	
	function sortNumeric(array) {
		return array.sort(function(a,b) {
			let va = parseUniFloat(a), vb = parseUniFloat(b);
			return isNaN(va) ? -1 : isNaN(vb) ? 1 : va < vb ? -1 : va == vb ? 0 : 1;
		});
	}
	
module.exports = {
 normalSpaces,
 normalDigits,
 parseUniInt,
 parseUniFloat,
 sortNumeric,
};
