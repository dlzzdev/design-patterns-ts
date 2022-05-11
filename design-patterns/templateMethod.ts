abstract class Personagem {

  templateMethod() {
    this.anda();
    this.respira();
    this.luta();
    this.magia();
  }

  protected anda() {
    console.log("Andando normalmente...");
  }
  protected respira() {
    console.log("Respirando normalmente...");
  }

  protected abstract luta(): void;
  protected abstract magia(): void;
}

class Guerreiro extends Personagem {
  protected luta() {
    console.log("Lutando muito bem...");
  }

  protected magia() {
    console.log("Não consegue utilizar magia...");
  }
}

class Elfo extends Personagem {
  protected anda() {
    console.log("Correndo muito rapido...");
  }

  protected luta() {
    console.log("Lutando muito bem...");
  }

  protected magia() {
    console.log("usando magia muito bem...");
  }
}

function game(personagem: Personagem) {
  personagem.templateMethod();
}

game(new Guerreiro());
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-');
game(new Elfo());