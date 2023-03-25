function getURL() {
    var currentlocation = window.location;
    var url = window.location.href;
    $.ajax({
        url: Flask.url_for('get_url'),
        type: 'POST',
        data: JSON.stringify(url),
        dataType:"json",
        success: function(response){
            console.log(response);
        },
        error: function(err){
            console.log(err);
        }
    })
}