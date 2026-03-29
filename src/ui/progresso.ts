import { Terminal } from "terminal-kit";
import terminal from "./terminal";

export default class Progresso {
  private barra: Terminal.ProgressBarController

  constructor(private qtdeTotal: number) {
    this.barra = terminal.progressBar({
      width: 200,
      title: "Progresso",
      eta: true,
      percent: true,
      syncMode: true,
      items: this.qtdeTotal
    })
  }


  atualizar(qtde: number) {
    this.barra.update(qtde / this.qtdeTotal)
  }

}

