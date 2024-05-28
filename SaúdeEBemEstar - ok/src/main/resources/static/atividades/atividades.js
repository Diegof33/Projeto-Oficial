document.addEventListener("DOMContentLoaded", function() {
    let distanciaPercorrida = 0;
    let timer;
    let segundos = 0;
    let minutos = 0;
    let horas = 0;

    document.getElementById('start').addEventListener('click', () => {
        timer = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
            
            document.getElementById('cronometro').textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

            
            if (segundos % 1 === 0) { 
                distanciaPercorrida += 0.01;
                document.getElementById('distancia').textContent = `Distância percorrida: ${distanciaPercorrida.toFixed(2)} km`;
            }
        }, 1000); 
    });

    document.getElementById('pause').addEventListener('click', () => {
        clearInterval(timer);
    });

    document.getElementById('reset').addEventListener('click', () => {
        clearInterval(timer);
        distanciaPercorrida = 0;
        segundos = 0;
        minutos = 0;
        horas = 0;
        document.getElementById('distancia').textContent = `Distância percorrida: ${distanciaPercorrida.toFixed(2)} km`;
        document.getElementById('cronometro').textContent = `00:00:00`;
    });
});
