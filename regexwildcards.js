regex1 = /\d+-\d+-\d+/g
regex2 = /\w+\.\w+/g

'My phone number is 000-000-0000'.match(regex1)//['000-000-0000']
'The website is regex101.com'.match(regex2)//['regex101.com']
'The website is regex101.com'.split(/\s/)//[ 'The', 'website', 'is', 'regex101.com']

'Derick, I thought I told you I only wanted words in the array!!'.split(/\W/)

console.log('Derick, I thought I told you I only wanted words in the array!!'.split(/\W/))


