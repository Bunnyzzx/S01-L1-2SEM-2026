package ex4;

public class Mandragora extends Monstro {

    public Mandragora(String nome) {
        super(nome);
    }

    @Override
    public String receita() {
        return "cortar em pedacos e fazer uma sopa";
    }
}
