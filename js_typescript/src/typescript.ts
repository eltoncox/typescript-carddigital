let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer =  22;

// Arrays
const lista: number[] = [];
lista.push(77, 8, 25, 10, 1.58)

// Tipos Personalizados (Type Alias)
type transacao = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}

const novaTransacao: transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0
}
