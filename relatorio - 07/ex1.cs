using System;

class CombatenteDeGondor
{
    public string Nome { get; private set; }
    public string Povo { get; private set; }
    public string Posto { get; private set; }
    public string Armamento { get; private set; } = "Desarmado";

    public CombatenteDeGondor(string nome, string povo, string posto)
    {
        Nome = nome;
        Povo = povo;
        Posto = posto;
    }

    public void Equipar(string arma)
    {
        Armamento = arma;
    }

    public void ApresentarUnidade()
    {
        Console.WriteLine("nome: " + Nome);
        Console.WriteLine("povo: " + Povo);
        Console.WriteLine("posto: " + Posto);

        if (Armamento != "Desarmado")
        {
            Console.WriteLine("armamento: " + Armamento);
        }

        Console.WriteLine();
    }
}

class Program
{
    static void Main()
    {
        CombatenteDeGondor a = new CombatenteDeGondor("aragorn", "humano", "rei");
        CombatenteDeGondor b = new CombatenteDeGondor("legolas", "elfo", "arqueiro");
        CombatenteDeGondor c = new CombatenteDeGondor("gimli", "anao", "guerreiro");

        a.Equipar("espada");
        b.Equipar("arco");

        a.ApresentarUnidade();
        b.ApresentarUnidade();
        c.ApresentarUnidade();
    }
}