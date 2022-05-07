// Teremos uma classe "context" e essa clase "context" ela sempre ira receber a estratégia necessaria para executar o algoritmo.

interface Strategy {
  login(credentials: any): boolean;
}

class Passport {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public login(credentials: any) {
    return this.strategy.login(credentials);
  }
}

class OAuth2Strategy implements Strategy {
  login(credentials: any): boolean {
    console.log("OAuth2Strategy");
    return true;
  }
}

class JWTStrategy implements Strategy {
  login(credentials: any): boolean {
    console.log("JWTStrategy");
    return false;
  }
}

// Neste exemplo estamos quebrando em várias outras classes, comportamentos que anteriormente poderiam ser feitos em uma única classe, com o sentido de faciliter a manutenção do código caso seja necessário.

const estrategia1 = new Passport(new OAuth2Strategy());
estrategia1.login({ email: "a", password: "b" });

const estrategia2 = new Passport(new JWTStrategy());
estrategia2.login({ email: "a", password: "b" });
