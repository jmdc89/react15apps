export const revisarPresupuesto = (presupuesto, restante) => {

    if( ( presupuesto / 4 ) > restante ) {

        return {
            col: "#721c24",
            back: "#f8d7da",
            bord: "#f5c6cb"
        };

        
    } else if ( (presupuesto / 2) > restante ) {

        return {
            col: "#856404",
            back: "#fff3cd",
            bord: "#ffeeba"
        };


    }    else {

        return {
            col: "#155724",
            back: "#d4edda",
            bord: "#c3e6cb"
        };
    }

}