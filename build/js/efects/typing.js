let i = 0;
let text = '- Hola, mi nombre es:    ';
let j = text.length;

const p = document.getElementById("parrafo");
p.style.fontFamily = 'RocknRoll One, sans-serif';
p.style.fontWeight = 100;
// p.style.color = '#a6f3ff';

function typ(){
    //Cambiar el color dependiendo del modo en el que esté
    if( document.documentElement.classList.contains('dark') ){
        p.style.color = '#030250';
    }else{
        p.style.color = '#a6f3ff';
    }
    
    if( i === text.length ){
        p.innerHTML = text.substring(0, j);
        j--;

        if( j === 2 ){
            p.innerHTML = '-';
            i=1;
            j=text.length;
        }

        setTimeout(() => {
            typ()
        }, 200);

    }else{
        p.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => {
            typ()
        }, 200);
    }

    // const p = document.createElement('P');
    // text.document.createElement('P');
    // p.appendChild(text);
}

