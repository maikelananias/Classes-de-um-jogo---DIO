class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        }
        atacar(){
            let ataque = ""
            if (this.tipo == "mago"){
                ataque = "magia"
            }
            else if (this.tipo == "guerreiro"){
                ataque = "espada"
            }
            else if (this.tipo == "monge"){
                ataque = "artes marciais"
            }
            else {
                ataque = "shuriken"
            }
            console.log(`o ${this.tipo} atacou usando ${ataque}`)
        }
}
let merlin = new hero("Merlin", 1523, "mago")
let napoleao = new hero("Napoleao", 254, "guerreiro")
let bodhidharma = new hero("Bodhidharma", 1523, "monge")
let hattori = new hero("Hattori", 500, "ninja")

merlin.atacar()
napoleao.atacar()
bodhidharma.atacar()
hattori.atacar()