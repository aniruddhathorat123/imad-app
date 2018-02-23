var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one': {
        title:'Article One',
        name:'Article one by aniruddha',
        date:'23 feb 2018',
        contents:`<p>
                    This is my article one hope yout like ........,This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........
                <p>
                    This is my article one hope yout like ........,This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........
                </p>
                
                <p>
                    This is my article one hope yout like ........,This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........This is my article one hope yout like ........
                </p>`
    },
    'article-two': {
        title:'Article Two',
        name:'Article two by aniruddha',
        date:'24 feb 2018',
        contents:`<p>
                    This is my article two....`
        
        },
    'article-three': {
        title:'Article Three',
        name:'Article three by aniruddha',
        date:'25 feb 2018',
        contents:`<p>
                    This is my article three....`
        
    }
}

function createTemplate(data)
{
    var title = data.title;
    var name = data.name;
    var date = data.date;
    var contents = data.contents;
    var htmltemplate=`
    <html>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width , initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" >
        <style>
            
        </style>
        
        <body>
            <h1>${name}</h1>  
            <div class="container">
                <div>
                    <a href="#">Home</a>
                    <hr/>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                ${contents}
                </div>
            </div>
        </body>
    </html>`;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/:articleName", function(req,res)
{
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get("/article-two",function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get("/article-three",function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
