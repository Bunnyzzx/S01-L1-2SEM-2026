using System;
using System.Collections.Generic;

class EntidadeCosmica
{
    public string Nome { get; set; }
    public string Origem { get; set; } = "Desconhecida";

    public EntidadeCosmica(string nome)
    {
        Nome = nome;
    }

    public virtual void Manifestar()
    {
        Console.WriteLine("entidade: " + Nome);

        if (Origem != "Desconhecida")
        {
            Console.WriteLine("origem: " + Origem);
        }
    }
}

class Profundo : EntidadeCosmica
{
    public Profundo(string nome) : base(nome)
    {
    }

    public override void Manifestar()
    {
        Console.WriteLine(Nome + " surgiu das profundezas");

        if (Origem != "Desconhecida")
        {
            Console.WriteLine("origem: " + Origem);
        }
    }
}

class MiGo : EntidadeCosmica
{
    public MiGo(string nome) : base(nome)
    {
    }

    public override void Manifestar()
    {
        base.Manifestar();
        Console.WriteLine(Nome + " emitiu um zumbido estranho");
    }
}

class Pesquisador
{
    public string Nome { get; set; }
    private List<EntidadeCosmica> entidades = new List<EntidadeCosmica>();

    public Pesquisador(string nome)
    {
        Nome = nome;
    }

    public void Catalogar(EntidadeCosmica e)
    {
        entidades.Add(e);
    }

    public void LerCatalogo()
    {
        Console.WriteLine("pesquisador: " + Nome);

        foreach (EntidadeCosmica e in entidades)
        {
            e.Manifestar();
            Console.WriteLine();
        }
    }
}

class Program
{
    static void Main()
    {
        EntidadeCosmica a = new EntidadeCosmica("entidade sem nome");
        Profundo b = new Profundo("profundo");
        MiGo c = new MiGo("mi-go");

        c.Origem = "yuggoth";

        Pesquisador pesquisador = new Pesquisador("henry");

        pesquisador.Catalogar(a);
        pesquisador.Catalogar(b);
        pesquisador.Catalogar(c);

        pesquisador.LerCatalogo();
    }
}