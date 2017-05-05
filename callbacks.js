function bcrypt(text, callback){
    ///
    callback(hash)
}

function comparePasswords(username, hash, callback){
    ///
    var user = {}
    if(!user){
        
    }
    callback(null, user)//false true
    callback('no user')
}


function cargarSession(user, callback){
    ///
    callback(session)
}

function login(request, response, body){
    var user = body.user
    var pass = body.password

    //promises, bluebird
    //async, async/await

    var async = require('async')

    async.waterfall([
        //encriptar
        function(callback){
            bcrypt(pass, callback)
        },
        //comparar
        function(hash, callback){
            comparePasswords(user, hash, callback)
        },
        //crear session
        function(user, callback){
            cargarSession(user, callback)
        }
    ], function(err,data){
        if(err) return response.status(500).json({ error:err })
        response.status(200).json({ message : data })
    })


    /*bcrypt(pass, function(hash){
        if(!hash){
            return console.log('fallo hash')
        }
        comparePasswords(user, hash, function(user){
            if(!user){
                return console.log('no existe el usuario')
            }
            cargarSession(user, function(session){
                if(!session){
                    return console.log('no se pudo crear la session')
                }
                response.status(200).json({
                    message : 'todo salio bien'
                })
            })
        })
    })  */  
}