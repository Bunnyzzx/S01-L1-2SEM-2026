package ex3;

public class EspiritoYoukai implements Sobrenatural {
    private String nome;

    public EspiritoYoukai(String nome) {
        this.nome = nome;
    }

    @Override
    public void manifestar() {
        System.out.println("o espirito " + nome + " aparece e assombra o local");
    }
}
