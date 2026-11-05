package ex1;

public class Main {
    public static void main(String[] args) {
        Morador mago = new Mago("howl", "transformacao");
        Morador demonio = new DemonioDoFogo("calcifer");

        mago.apresentar();
        demonio.apresentar();
    }
}
