$(function() {
	var callback = function(evento) {
		evento.preventDefault();
		var input = $('input[type=text][name=item]'),
			valor = input.val(),
			preciso = ($(evento.target).attr('id') === 'addPreciso'),
			item = $('<li><input type="checkbox" name="item"> ' + valor + ' <a href="#">remover</a></li>'),
			lista = (preciso) ? $('ul').first() : $('ul').last();
		
		input.val("");
		input.focus();

		if (valor === "") return;

		if (!preciso) {
			item.find('input').attr('checked', true);
		}
		item.appendTo(lista);
	}

	$('#addTenho, #addPreciso').click(callback);
	
	$('ul').on('click', 'li a', function(evento){
		$(evento.target).parent('li').remove();
	});

	$('ul').on('click', 'input[type=checkbox]', function(evento){
		var itemLista = $(evento.target).parent('li'),
			lista = (evento.target.checked) ? $('ul').last() : $('ul').first();
		itemLista.appendTo(lista);
	});
});
