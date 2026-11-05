package ex2;

public class Main {
    public static void main(String[] args) {
        ItemDoCardapio cafe = new ItemDoCardapio("cafe coado", 10.0);
        ItemDoCardapio curry = new ItemDoCardapio("curry da casa", 30.0);
        ComboLeblanc combo = new ComboLeblanc("combo cafe e curry", 40.0);

        CafeLeblanc leblanc = new CafeLeblanc();
        leblanc.adicionar(cafe);
        leblanc.adicionar(curry);
        leblanc.adicionar(combo);

        leblanc.mostrarCardapio();
    }
}
