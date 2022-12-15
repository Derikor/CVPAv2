const express = require('express');
const reg = require('./public/models/horario_especialidad');
const m = require('./public/models/User_Message');
const resphemo = require('./public/models/asistentehemorragias');
const respheri = require('./public/models/asistenteheridas');
const respquema = require('./public/models/asistentequemaduras');
const router = express.Router();
const passport = require('passport');
// rutas

//horario personal
router.get('/regishor',isAuthenticated,(req, res) => {
    res.render('registropersonal');
  });

router.post('/reghoradd',isAuthenticated, async (req, res)=>{
    const regis = new reg(req.body);
    await regis.save();
    res.redirect('/reportper');
});
router.get('/reportper',isAuthenticated, async (req, res)=>{
    const regis = await reg.find();
    res.render('reporpers',{
        regis:regis
    });
});
router.get('/edit/:id',isAuthenticated, async (req, res)=>{
    const { id } = req.params;
    const regis = await reg.findById(id);
    res.render('regisperso',{
        regis
    });
});
router.get('/busca', async (req, res)=>{
    const busc = await reg.findOne(req.body.nombre);
    res.render('buscanom',{
        busc
    });
});
router.post('/modif/:id',isAuthenticated, async (req, res)=>{
    const { id } = req.params;
    await reg.update({_id: id}, req.body);
    res.redirect('/reportper');
});
router.get('/eliminar/:id', async (req, res)=>{
    const { id } = req.params;
    await reg.remove({_id: id});
    res.redirect('/reportper');
});

//login
router.get('/ingres',isAuthenticated,(req, res) => {
    res.render('ingreso');
  });

//Asistente
router.get('/chat', async (req, res)=>{
    const ms = await respheri.find();
    res.render('asistenteres',{
        ms:ms
    });
});

// mensajes ususario almacenado
router.post('/addmen', async (req, res)=>{
    const savm = new m();
        savm.title ="Mensaje de Usuario",
        savm.mensaje = req.body.mensaje
    await savm.save();
    res.redirect('/chat');
});

//agregar respuestas asistente
router.post('/addresheri', async (req, res)=>{
    const savheri = new respheri();
        savheri.entrada =req.body.entrada,
        savheri.salida = req.body.salida
    await savheri.save();
    res.redirect('/asisherida');
});
router.post('/addreshemo', async (req, res)=>{
    const savhemo = new resphemo();
        savhemo.entrada =req.body.entrada,
        savhemo.salida = req.body.salida
    await savr.save();
    res.redirect('/asishemorragia');
});
router.post('/addresquemo', async (req, res)=>{
    const savquemo = new respquema();
        savquemo.entrada =req.body.entrada,
        savquemo.salida = req.body.salida
    await savr.save();
    res.redirect('/asisquemaduras');
});

//modifica asistente
router.get('/asisherida',isAuthenticated, (req, res)=>{
    res.render('asistheridas');
});
router.get('/asishemorragia',isAuthenticated, (req, res)=>{
    res.render('asisthemorragias');
});
router.get('/asisquemaduras',isAuthenticated, (req, res)=>{
    res.render('asistquemaduras');
});

// reportes de mensajes de usuarios 
router.get('/reportmen',isAuthenticated, async (req, res)=>{
    const men = await m.find();
    res.render('msjusuarios',{
        men:men
    });
});
router.get('/buscafecha', async (req, res)=>{
    const dat = await m.findOne(req.body.date);
    res.render('msjusufecha',{
        dat
    });
});
router.get('/elimi/:id', async (req, res)=>{
    const { id } = req.params;
    await m.remove({_id: id});
    res.redirect('/reportmen');
});
//login
router.get('/log', (req, res)=>{
    res.render('login');
});
router.get('/register', (req, res)=>{
    res.render('regisadm');
});

// autenticacion
router.post('/registrarse', passport.authenticate('local-signup', {
    successRedirect: '/log',
    failureRedirect: '/register',
    failureFlash: true
  }));
router.post('/aut', passport.authenticate('local-signin', {
    successRedirect: '/ingres',
    failureRedirect: '/log',
    failureFlash: true
  }));
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/log');
  });
  
  
  function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/log')
  }

router.get('/logeoper', (req, res)=>{
    res.render('iniciopersonal');
});
router.post('/inises', passport.authenticate('inicio', {
    successRedirect: '/reportmen',
    failureRedirect: '/logeoper',
    failureFlash: true
  }));
//contactos
router.get('/contact', async (req, res)=>{
    const regis = await reg.find();
    res.render('contactos',{
        regis:regis
    });
});

module.exports = router