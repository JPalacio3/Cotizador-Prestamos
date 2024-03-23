
// Función encargada de formatar la cantidad en dinero
const formatearDinero = ( valor ) => {
    const formatter = new Intl.NumberFormat( 'en-US', {
        style: 'currency',
        currency: 'USD'
    } );
    return formatter.format( valor );
}

// Función encargada de realizar el cálculo de los pagos mensuales
const calcularTotalPagar = ( cantidad, plazo ) => {
    let total;

    // Mentras mayor sea la cantidad solicitada, menor es el interés
    if ( cantidad < 5000 ) {
        total = cantidad * 1.5;
    } else if ( cantidad >= 5000 && cantidad < 10000 ) {
        total = cantidad * 1.3;
    } else if ( cantidad >= 10000 && cantidad < 15000 ) {
        total = cantidad * 1.2;
    } else {
        total = cantidad * 1.1;
    }

    // Mientras mayor sea el plazo, el interés será más alto
    if ( plazo === 6 ) {
        total *= 1.1;
    } else if ( plazo === 12 ) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }

    return total;
}

export {
    formatearDinero,
    calcularTotalPagar
}
