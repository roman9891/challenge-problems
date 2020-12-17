str = 'hello world'

str.search(/./)// returns 0
str.search(/.ello/)// returns 0
str.search(/h.ll. w.rld/)// returns 0
str.search(/w../)// returns 6
str.search(/wa.ld/)// returns -1


regex = /w{3}\.\w+\.\w+/

regex.test('No1')//true
regex.test('Go4')//true
regex.test('Sum1')//false
regex.test('fo0')//false
regex.test('Bar')//false

console.log(regex.test(' www.somet3ing.com '))