pelotica = null;
pelotica1 = null;
pelotica2 = null;
pelotica3 = null;
pelotica4 = null;
pelotica5 = null;
pelotica6 = null;
pelotica7 = null;
pelotica8 = null;
pelotica9 = null;
pelotica10 = null;
pelotica11= null;
canvas = null;
ctx= null;
gravedad = 8;

window.onload = function() {
    canvas = document.getElementById("canvas");
    ctx = this.canvas.getContext("2d");
    pelotica = new Pelota();
    pelotica1 = new Pelota();
    pelotica2 = new Pelota();
    pelotica3 = new Pelota();
    pelotica4 = new Pelota();
    pelotica5 = new Pelota();
    pelotica6 = new Pelota();
    pelotica7 = new Pelota();
    pelotica8 = new Pelota();
    pelotica9 = new Pelota();
    pelotica10 = new Pelota();
    pelotica11 = new Pelota();
    animar();
}
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pelotica.dibujar(ctx)
    pelotica.actualizar(gravedad)
    pelotica1.dibujar(ctx)
    pelotica1.actualizar(gravedad)
    pelotica2.dibujar(ctx)
    pelotica2.actualizar(gravedad)
    pelotica3.dibujar(ctx)
    pelotica3.actualizar(gravedad)
    pelotica4.dibujar(ctx)
    pelotica4.actualizar(gravedad)
    pelotica5.dibujar(ctx)
    pelotica5.actualizar(gravedad)
    pelotica6.dibujar(ctx)
    pelotica6.actualizar(gravedad)
    pelotica7.dibujar(ctx)
    pelotica7.actualizar(gravedad)
    pelotica8.dibujar(ctx)
    pelotica8.actualizar(gravedad)
    pelotica9.dibujar(ctx)
    pelotica9.actualizar(gravedad)
    pelotica10.dibujar(ctx)
    pelotica10.actualizar(gravedad)
    pelotica11.dibujar(ctx)
    pelotica11.actualizar(gravedad)
    
    requestAnimationFrame(animar)
}
