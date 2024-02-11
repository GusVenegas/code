
document.getElementById('siguiente').addEventListener('click', function(){
    document.getElementById('pregunta').style.display = 'block';
    document.getElementById('flork').style.display = 'block';
    document.getElementById('botonSI').style.display = 'block';
    document.getElementById('botonNO').style.display = 'block';

    document.getElementById('buenosDias').style.display = 'none';
    document.getElementById('perrito').style.display = 'none';
    document.getElementById('siguiente').style.display = 'none';
    document.getElementById('mensaje1').style.display = 'none';
}
)

document.getElementById('botonSI').addEventListener('click', function(){
    document.getElementById('pregunta').style.display = 'none';
    document.getElementById('flork').style.display = 'none';
    document.getElementById('botonSI').style.display = 'none';
    document.getElementById('botonNO').style.display = 'none';

    document.getElementById('buenosDias').style.display = 'none';
    document.getElementById('perrito').style.display = 'none';
    document.getElementById('siguiente').style.display = 'none';
    document.getElementById('mensaje1').style.display = 'none';

    document.getElementById('meme').style.display = 'block';
    document.getElementById('confirmacion').style.display = 'block';
}
)

document.getElementById('botonNO').addEventListener('mouseover', ()=>{
    const x = Math.random() * (window.innerWidth - botonNO.clientWidth);
    const y = Math.random() * (window.innerHeight - botonNO.clientHeight);
  
    // Aplicar transformación para mover el botón
    botonNO.style.transform = `translate(${x}px, ${y}px)`;
})