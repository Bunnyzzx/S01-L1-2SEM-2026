function gerarTabelaPotencias(inicio, fim, base)
    for i = inicio, fim do
        print(base .. "^" .. i .. " = " .. base^i)
    end
end

print("Digite M:")
M = tonumber(io.read())

print("Digite N:")
N = tonumber(io.read())

print("Digite a base:")
base = tonumber(io.read())

gerarTabelaPotencias(M, N, base)