class PhoneWave
  def enviar_dmail(mensagem)
    puts "mensagem enviada para o passado: #{mensagem}"
  end
end

class MembroDoLab
  attr_reader :numero, :nome

  def initialize(numero, nome)
    @numero = numero
    @nome = nome
  end
end

class LaboratorioDeGadgets
  def initialize
    @phonewave = PhoneWave.new
    @membros = []
  end

  def admitir(membro)
    @membros << membro
    puts "membro admitido: #{membro.numero} - #{membro.nome}"
  end

  def experimento(mensagem)
    @membros.each do |membro|
      puts "#{membro.numero} - #{membro.nome}"
    end

    @phonewave.enviar_dmail(mensagem)
  end
end

membro1 = MembroDoLab.new(1, "okabe")
membro2 = MembroDoLab.new(2, "mayuri")

laboratorio = LaboratorioDeGadgets.new

laboratorio.admitir(membro1)
laboratorio.admitir(membro2)

laboratorio.experimento("nao compre o bilhete")