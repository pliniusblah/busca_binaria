const vector = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const buscaBin = (v, e, d, valor) =>{
    if(d >= e){
        const indice = Math.floor(e + (d - 2)/2);
        console.log("indice", indice);
        const valorM = v[indice];

        if(valor === valorM){
            return valorM;
        }
        else if(valorM > valor){
            return buscaBin(v,e,indice-1,valor);
        }
        else{
            return buscaBin(v,indice+1,d,valor);
        }
    }
    return -1;
};

console.log(buscaBin(vector,0,vector.length-1,50));
console.log(buscaBin(vector,0,vector.length-1,5));