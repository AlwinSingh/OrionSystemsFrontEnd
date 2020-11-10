var pg = location.pathname;
/* variable 'pg' gets the path */
/* if pg.search for that page comes back as it 'exists' (>=0), it will load the respective js file */
document.writeln("<script type='text/javascript' src='javascript/template.js'></script>");
if(pg.search("gallery.html")>=0)
document.writeln("<script type='text/javascript' src='javascript/lightbox.js'></script>");
if(pg.search("contact.html")>=0)
document.writeln("<script type='text/javascript' src='javascript/contact.js'></script>");
if(pg.search("account.html")>=0)
document.writeln("<script type='text/javascript' src='javascript/account.js'></script>");
if(pg.search("cart.html")>=0)
document.writeln("<script type='text/javascript' src='javascript/cart.js'></script>");
if(pg.search("checkout1.html")>=0)
document.writeln("<script type='text/javascript' src='javascript/checkout1.js'></script>");
if(pg.search("checkout2.html")>=0)
document.writeln("<script type='text/javascript' src='javascript/checkout2.js'></script>");
if(pg.search("thankyou.html")>=0)
document.writeln("<script type='text/javascript' src='javascript/thankyou.js'></script>");
/* Last script is used for emergency edits strictly! */
document.writeln("<script type='text/javascript' src='javascript/emergencyedits.js'></script>");