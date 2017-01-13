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
            text: text
        });
        $('#messageInput').val('');
    }
});

$('#messageButton').on('click', function(e) {
    if( $('#messageInput').val() ) {
      var text = $('#messageInput').val();
      messagesRef.push({
          text: text
      });
      $('#messageInput').val('');
    };
});

// Add a callback that is triggered for each chat message.
messagesRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    $('<div/>').text(message.text).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
});
