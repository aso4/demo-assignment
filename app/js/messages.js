// Get a reference to the root of the chat data.
var messagesRef = new Firebase('https://fir-assignment-420f1.firebaseio.com/');

// When the user presses enter on the message input, write the message to firebase.
// $('#messageButton').onclick(function(e) {
//     if ( !$(this).val() ) {
//         var text = $('#messageInput').val();
//         messagesRef.push({
//             text: text
//         });
//         $('#messageInput').val('');
//     }
// });

$('#messageInput').keypress(function(e) {
    if (e.keyCode == 13) {
        var text = $('#messageInput').val();
        messagesRef.push({
            text: text,
            time: new Date().toLocaleString()
        });
        $('#messageInput').val('');
    }
});

$('#messageButton').on('click', function(e) {
    if( $('#messageInput').val() ) {
      var text = $('#messageInput').val();
      messagesRef.push({
          text: text,
          time: new Date()
      });
      $('#messageInput').val('');
    };
});

// Add a callback that is triggered for each chat message.
messagesRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    var wrapper = $('<div class="message-wrapper them" />');
    wrapper.appendTo($('#messagesDiv'));
    $('<div class="circle-wrapper" />').appendTo(wrapper);
    $('<div class="text-wrapper" />').text(message.text).appendTo(wrapper);
    $('<div class="col-md-3 col-md-offset-2 status" style="margin-top: -10px;"/>').text(message.time).appendTo($('#messagesDiv'));

    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
});
