 // Aquí tu código

 
 
 const button = document.getElementById('agregar');

 const lista = document.getElementById('lista');




 button.addEventListener('click', function () {
    const feedback = prompt('Introduce los ingredientes aquí');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.innerHTML = feedback;
    lista.appendChild(nuevoElemento);
 });
