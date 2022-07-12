interface Funcionarios {
    nome:string,
    idade:number,
    cargo:Cargo,
}
interface funcionarioCompleto extends Funcionarios{
    rg:number
}
enum Cargo {
    Programador, 
    Analista,
    Desenvolvedor
}
const Aluana: funcionarioCompleto = {
    nome:'Aluana',
    idade:35,
    cargo: Cargo.Programador,
    rg:12669448910
}