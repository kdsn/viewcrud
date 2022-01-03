{Server opgave (node.js express projekt med port nummer) start}

    (npm install -g express-generator)

    express
    npm install

ret portnummer (bin/www linje 15)
tilføj ", console.log(Server is running on port ${port})" (bin/www linje 28 efter "port")   "" er ikke med

    npm install nodemon

ret node til nodemon (package.json linje 6)

    npm start

{Server opgave slut}

app.js
ret linje 7 fra indexRouter til router
slet linje 8 (om users)
ret linje 21 fra indexRouter til router
slet linje 22 (om users)

routes/index.js
for hvert endpoint tilpasses følgende:
router.get('/endpoint', function(req, res, next) {
res.render('index', { title: 'navn'});
});
/endpoint rettes til det ønskede endpoint
index rettes til html filen
navn rettes til navnet på endpointet

Command (terminal)
npm uninstall jade --save
npm install express-handlebars --save

app.js
indsæt "var hbs = require('express-handlebars');" i linje 6         "" er ikke med
i linje 13 under view engine setup tilføjes "app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/view/layouts/'}));"     minus ""
i linje 16 omdøbes 'jade' til 'hbs'

I views folderen laves en layouts directory folder

layout.jade filen omdøbes til layout.hbs og flyttes op i layout directory folderen (under views)

i layout.hbs indsættes følgende:
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ titel }}</title>   // 2 tuborgklammer sørger for der kun vises tekst
    <link rel="stylesheet" href="/stylesheets/style.css">
</head>
<body>
    {{{ body }}}   // body er et tvunget/reserveret ord som handlebars kigger efter. 3 tuborgklammer sørger for at render HTML
</body>
</html>
og det der allerede stod der slettes

index.jade ændres til index.hbs
linje 1 og 3 slettes
de 2 andre linjer ændret til:
<h1>{{ title }}</h1>
<p>Welcome to {{title}}</p>