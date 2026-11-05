package ex4;

public class Slime extends Monstro {

    public Slime(String nome) {
        super(nome);
    }

    @Override
    public String receita() {
        return "secar ao sol e servir como macarrao";
    }
}
