module Depoente
  def depor
    raise NotImplementedError
  end
end

module Detivel
  def ser_detido
    puts "#{nome} foi levado pela scotland yard"
  end
end

class Envolvido
  attr_reader :nome

  def initialize(nome)
    @nome = nome
  end
end

class TestemunhaOcular < Envolvido
  include Depoente

  def depor
    puts "#{nome} viu uma pessoa saindo pela janela"
  end
end

class SuspeitoDoCrime < Envolvido
  include Depoente
  include Detivel

  def depor
    puts "#{nome} afirma que estava em casa"
  end
end

class Investigacao
  def initialize(caso)
    @caso = caso
    @envolvidos = []
  end

  def registrar(envolvido)
    @envolvidos << envolvido
  end

  def ouvir_todos
    puts "caso: #{@caso}"

    @envolvidos.each do |envolvido|
      envolvido.depor
    end
  end

  def acionar_scotland_yard
    suspeitos = @envolvidos.select do |envolvido|
      envolvido.respond_to?(:ser_detido)
    end

    suspeitos.each do |suspeito|
      suspeito.ser_detido
    end
  end
end

testemunha = TestemunhaOcular.new("maria")
suspeito1 = SuspeitoDoCrime.new("pedro")
suspeito2 = SuspeitoDoCrime.new("carlos")

investigacao = Investigacao.new("roubo na baker street")

investigacao.registrar(testemunha)
investigacao.registrar(suspeito1)
investigacao.registrar(suspeito2)

investigacao.ouvir_todos
investigacao.acionar_scotland_yard