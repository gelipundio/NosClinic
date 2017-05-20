var socket = io()

socket.on('new_connection', data => {
    console.log(data)
})

$(document).ready(function(){
    $('#send').on('click', function(){
        socket.emit('send',{
            message : $('#text').val(),
            name : $('#name').val()
        })
        $('#text').val('')
    })

    socket.on('new_message', data => {
        $('#content').append(data.name + ' dice: ' +data.message + '<br>')
    })
})