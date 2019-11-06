/*scrool*/
var scroll = new SmoothScroll('a[data-scroll]', {
			speed: 3000
		});
/*funcion inicial de carga*/
window.onload = function(){
				var contenedor = document.getElementById('contenedor_carga') ;
				contenedor.style.visibility = 'hidden';
				contenedor.style.opacity = '0';
			}