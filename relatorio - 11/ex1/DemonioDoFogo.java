package ex1;

public class DemonioDoFogo extends Morador {

    public DemonioDoFogo(String nome) {
        super(nome);
    }

    @Override
    public void apresentar() {
        System.out.println("eu sou o demonio do fogo " + getNome() + " e faco o castelo andar");
    }
}
