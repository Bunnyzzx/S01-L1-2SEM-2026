package ex3;

public class Main {
    public static void main(String[] args) {
        Alienigena alien = new Alienigena("serpo");
        EspiritoYoukai espirito = new EspiritoYoukai("turbo vovo");

        MapaDeAvistamentos mapa = new MapaDeAvistamentos();
        mapa.registrar("hospital abandonado", alien);
        mapa.registrar("tunel", espirito);

        mapa.investigar("hospital abandonado");
        mapa.investigar("tunel");
        mapa.investigar("escola");
    }
}
