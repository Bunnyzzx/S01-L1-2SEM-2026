package ex4;

public class Main {
    public static void main(String[] args) {
        Slime slime = new Slime("slime");
        Mandragora mandragora = new Mandragora("mandragora");

        Cozinheiro cozinheiro = new Cozinheiro("senshi", "ferro");
        cozinheiro.adicionarIngrediente(slime);
        cozinheiro.adicionarIngrediente(mandragora);

        cozinheiro.servirBanquete();
    }
}
