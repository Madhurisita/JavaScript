// Document object model(Dom)
/*-----------------------------
document -> html doc
window   -> browser
this two object used to modify something on web page
*/
//document
console.log(document);

//head
console.log(document.head);

//title
console.log(document.title);
document.title='UI Brains Technologies';

//body
console.log(document.body);

//nav
console.log(document.nav);// cant bcz in body  u can have  mutliple nav tags and html head body can be written only one time
let navTag= document.querySelector(selector='nav ');
console.log(navTag);

// anchar Tag
let ancharTag= document.querySelector(selector='nav a');
console.log(ancharTag);

//text between anchar tag (innerText)
let theText = ancharTag.innerText;
console.log(theText);

//changing inner text of anchar tag
ancharTag.innerText='Madhuri Sita';


//h1 tag
let h1Tag=document.querySelector(selector='#msg');
console.log(h1Tag);  
h1Tag.innerText='Good Evening';

//add style to html elements
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.color='white';
h1Tag.style.textAlign ='center';
h1Tag.style.padding = '15px';
h1Tag.style.fontSize='45px';
h1Tag.style.boxShadow='0 0 10px black';





