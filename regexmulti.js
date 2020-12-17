regex1 = /cats?/g
regex2 = /cats*/g
regex3 = /cats+/g
regex4 = /cats{2,4}/g

'cat cats catsss'.match(regex1)//['cat', 'cats', 'cats']
'cat cats catsss'.match(regex2)//['cat', 'cats', 'catsss']
'cat cats catsss'.match(regex3)//['cats', 'catsss']


console.log('cat cats catsss'.match(regex4))