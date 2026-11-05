package ex1;

public class Mago extends Morador {
    private String feitico;

    public Mago(String nome, String feitico) {
        super(nome);
        this.feitico = feitico;
    }

    @Override
    public void apresentar() {
        System.out.println("eu sou o mago " + getNome() + " e meu feitico e " + feitico);
    }
}
