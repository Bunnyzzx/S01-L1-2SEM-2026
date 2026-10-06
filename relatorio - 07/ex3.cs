using System;
using System.Collections.Generic;

class Grimorio
{
    public string FeiticoFavorito { get; set; } = "Nenhum";

    public void Abrir()
    {
        Console.WriteLine("feitico favorito: " + FeiticoFavorito.ToLower());
    }
}

class Companheiro
{
    public string Nome { get; set; }
    public string Funcao { get; set; }

    public Companheiro(string nome, string funcao)
    {
        Nome = nome;
        Funcao = funcao;
    }

    public void Apresentar()
    {
        Console.WriteLine("nome: " + Nome + " - funcao: " + Funcao);
    }
}

class Maga
{
    public string Nome { get; set; }
    public Grimorio Grimorio { get; private set; }
    private List<Companheiro> companheiros = new List<Companheiro>();

    public Maga(string nome)
    {
        Nome = nome;
        Grimorio = new Grimorio();
    }

    public void Recrutar(Companheiro c)
    {
        companheiros.Add(c);
    }

    public void MostrarGrupo()
    {
        Console.WriteLine("maga: " + Nome);

        foreach (Companheiro c in companheiros)
        {
            c.Apresentar();
        }
    }
}

class Program
{
    static void Main()
    {
        Companheiro a = new Companheiro("fern", "maga");
        Companheiro b = new Companheiro("stark", "guerreiro");

        Maga maga = new Maga("frieren");

        maga.Recrutar(a);
        maga.Recrutar(b);
        maga.Grimorio.FeiticoFavorito = "criar flores";

        maga.MostrarGrupo();
        maga.Grimorio.Abrir();
    }
}