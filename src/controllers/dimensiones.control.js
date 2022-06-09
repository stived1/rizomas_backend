/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

// Modelo de datos:
const TipoUser = require('../models/tipouser.model');

const { mensajes } = require('../util/estados');
const momento = require('moment');
const { param } = require('../routes/user.route');


/* ---------------------------------------------------- CRUD ---------------------------------------------------- */
function saveTipoUser(req, res){
    let params = req.body;
    let tipouser = new TipoUser();

    TipoUser.findOne({nombre_tipoUsuario: params.nombre_tipouser}
                    ).exec((err, data)=>{
                        if (err) return res.status(500).send({ mensaje:mensajes.m500 });
                        if (data && data.lenght >=1){
                            msj = 'El tipo de usuario '+ params.nombre_tipouser+ ' ya existe';
                            return res.status(200).send({ mensaje: msj });
                        }else{
                            // campos obligatorios:
                            if (params.nombre_tipouser){
                                tipouser.nombre_tipoUsuario = params.nombre_tipouser

                                tipouser.save((err, tipoStored)=>{
                                    if (err) throw err;
                                    if (tipoStored){
                                        return res.status(200).send({ tipo_usuario: tipoStored });
                                    }
                                })
                            }else{
                                return res.status(404).send({ mensaje: mensajes.m000 });
                            }
                        }
                    })
}


module.exports = {
    saveTipoUser
}