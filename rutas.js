const express = require('express');
const reg = require('./public/models/horario_especialidad');
const m = require('./public/models/User_Message');
const resp = require('./public/models/asistentechat');
const router = express.Router();
const passport = require('passport');
// rutas 
//horario personal
router.get('/reportper', async (req, res)=>{
    const regis = await reg.find();
    res.render('reporpers',{
        regis:regis
    });
});
router.get('/busca', async (req, res)=>{
    const busc = await reg.findOne(req.body.nombre);
    res.render('buscanom',{
        busc
    });
});
//login
router.get('/ingres',isAuthenticated,(req, res) => {
    res.render('ingreso');
  });
router.post('/add', async (req, res)=>{
    const regis = new reg(req.body);
    await regis.save();
    res.redirect('/reportper');
});
router.get('/modificar/:id', async (req, res)=>{
    const { id } = req.params;
    const regis = await reg.findById(id);
    res.render('regisperso',{
        regis
    });
});
router.post('/modif/:id', async (req, res)=>{
    const { id } = req.params;
    await reg.update({_id: id}, req.body);
    res.redirect('/reportper');
});
router.get('/eliminar/:id', async (req, res)=>{
    const { id } = req.params;
    await reg.remove({_id: id});
    res.redirect('/reportper');
});
router.get('/chat', (req, res)=>{
    res.render('asistente');
});
//agregar mensajes
router.post('/addmen', async (req, res)=>{
    const savm = new m();
        savm.title ="Mensaje de Usuario",
        savm.mensaje = req.body.mensaje
    await savm.save();
    res.redirect('/chat');
});
//agregar respuestas
router.post('/addres', async (req, res)=>{
    const savr = new resp();
        savr.entrada =req.body.entrada,
        savr.salida = req.body.salida
    await savm.save();
    res.redirect('/chat');
});
// reportes de mensajes de usuarios 
router.get('/reportmen', async (req, res)=>{
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

module.exports = router