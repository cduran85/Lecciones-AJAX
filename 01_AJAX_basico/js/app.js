var htmlNode = document.getElementById('datos');

$.ajax({
    url: 'http://api.tvmaze.com/shows',
    type:'GET',
    data:{},
    success: function (data){
        console.log(data);
        data.forEach(function (val, i){
            htmlNode.innerHTML = htmlNode.innerHTML + '<li>' + val.name + '</li>';
        })
    }
});
