using System;
using System.Collections.Generic;

class Pokemon
{
    public string Especie { get; set; }
    public int Nivel { get; set; }

    public Pokemon(string especie, int nivel)
    {
        Especie = especie;
        Nivel = nivel;
    }

    public virtual void Atacar()
    {
        Console.WriteLine(Especie + " usou ataque comum");
    }
}

class TipoPlanta : Pokemon
{
    public TipoPlanta(string especie, int nivel) : base(especie, nivel)
    {
    }

    public override void Atacar()
    {
        Console.WriteLine(Especie + " usou chicote de vinha");
    }
}

class TipoEletrico : Pokemon
{
    public TipoEletrico(string especie, int nivel) : base(especie, nivel)
    {
    }

    public override void Atacar()
    {
        base.Atacar();
        Console.WriteLine(Especie + " soltou uma descarga eletrica");
    }
}

class Program
{
    static void Main()
    {
        List<Pokemon> pokemons = new List<Pokemon>();

        pokemons.Add(new Pokemon("eevee", 10));
        pokemons.Add(new TipoPlanta("bulbasaur", 12));
        pokemons.Add(new TipoEletrico("pikachu", 15));

        foreach (Pokemon p in pokemons)
        {
            p.Atacar();
        }
    }
}