package ex3;

public class Alienigena implements Sobrenatural {
    private String nome;

    public Alienigena(String nome) {
        this.nome = nome;
    }

    @Override
    public void manifestar() {
        System.out.println("o alienigena " + nome + " aparece e tenta abduzir alguem");
    }
}
