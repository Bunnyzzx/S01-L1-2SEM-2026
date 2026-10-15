from abc import ABC, abstractmethod


class IUnidadeDeRede(ABC):
    @abstractmethod
    def executar_invasao(self):
        pass


class Cyberdeck:
    def __init__(self, modelo):
        self.modelo = modelo


class OperadorNetrunner(IUnidadeDeRede):
    def __init__(self, nome, modelo):
        self.nome = nome
        self.cyberdeck = Cyberdeck(modelo)

    def executar_invasao(self):
        print(f"{self.nome} usa {self.cyberdeck.modelo} para quebrar o gelo de um servidor")


class DroneDeVigilancia(IUnidadeDeRede):
    def __init__(self, codigo):
        self.codigo = codigo

    def executar_invasao(self):
        print(f"drone {self.codigo} esta interceptando o sinal da rede")


class CelulaHacker:
    def __init__(self, nome, membros: list[IUnidadeDeRede]):
        self.nome = nome
        self.membros = membros

    def iniciar_ataque(self):
        print(f"celula {self.nome} iniciou o ataque")

        for membro in self.membros:
            membro.executar_invasao()


netrunner = OperadorNetrunner("v", "arasaka")
drone = DroneDeVigilancia("d01")

celula = CelulaHacker("samurai", [netrunner, drone])
celula.iniciar_ataque()