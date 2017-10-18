$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let paragraph = $('#paragraph').val();
     $('#paragraph').val("");
    let ajax = $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?q=${paragraph}&api_key=F36raDuh8TNRI0N04DlPSZWSA3Iitj11 `,
      type: 'GET',
      data: {
        // format: 'json'
      },
      success: function(response) {
        let img = response.data[0].images.fixed_width.url;
        $('.showDino').append(`<img src= '${img}'>`);

      },
      error: function() {
        $('.errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
