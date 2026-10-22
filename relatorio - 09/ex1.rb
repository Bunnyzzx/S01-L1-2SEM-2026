class CoquetelAfterlife
  attr_reader :nome

  def initialize(nome, preco)
    @nome = nome
    @_preco = preco
  end

  def preco
    @_preco
  end

  def preco=(valor)
    if valor >= 5 && valor <= 200
      @_preco = valor
    else
      puts "preco invalido!"
    end
  end

  def ficha
    "#{nome} - preco: #{preco}"
  end
end

class DrinkDeLenda < CoquetelAfterlife
  attr_reader :lenda

  def initialize(nome, preco, lenda)
    super(nome, preco)
    @lenda = lenda
  end

  def ficha
    "#{super} - lenda: #{lenda}"
  end
end

coquetel = CoquetelAfterlife.new("neon", 20)
drink1 = DrinkDeLenda.new("silverhand", 50, "johnny silverhand")
drink2 = DrinkDeLenda.new("jackie", 40, "jackie welles")

drinks = [coquetel, drink1, drink2]

drinks.each do |drink|
  puts drink.ficha
end

drink1.preco = 500
drink1.preco = 80

puts drink1.ficha