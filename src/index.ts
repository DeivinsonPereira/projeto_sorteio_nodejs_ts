import carregarPessoas from "./function/carregar_pessoas";
import sortearAzarado from "./function/sortear_azarado";
import Pessoa from "./model/pessoa";
import terminal from "./ui/terminal";


const pessoas: Pessoa[] = carregarPessoas('src/data/dados.csv')
const azarado = sortearAzarado(pessoas)

terminal.clear()
terminal.white("\n\nO").brightRed(" AZARADO")
terminal.bold.brightGreen(" MAIS SORTUDO").white("é: \n")
terminal.bold.brightYellow(azarado.toString())
terminal("\n\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉")

console.log()