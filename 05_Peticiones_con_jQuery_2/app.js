for (var i = 1; i <=40 ; i++) {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon-form/' + i,
        type: 'GET',
        data:{},
        success: function(data){
            $('.pokemons').append('<li><img src="' + data.sprites.front_default +'" /></li>');
        }
    });
}
