const express =require('express') ;
const { engine } =require('express-handlebars') ;

const app = express();
/*
//UTILIZAR UN MOTOR DE PLANTILLAS 
app.engine('handlebars', engine());
//EXTENSION DE LA PAGINA 
app.set('view engine', 'handlebars');
//UBICACION DEL DIRECTORIO VIEWS
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('home');
});*/
 
app.use (express.json())

app.get('/', (req,res)=>{
    res.send('Landing page')
})

///midelware privadas
//crear un middleware 
/*
app.use((req,res,next)=>{
    
    const {email,password}=req.body
    if (email=='josue@epn.edu.ec' && password=='123'){
        next()
    }
    else{res.send('no registrado')}
})
*/
app.get('/dashboard', (req,res)=>{
    res.send('Bienveido--- USer')
})


app.listen(3000);