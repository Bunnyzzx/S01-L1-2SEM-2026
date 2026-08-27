function contarOcorrencias(tabela, alvo)
    local contador = 0

    for i = 1, #tabela do
        if tabela[i] == alvo then
            contador = contador + 1
        end
    end

    return contador
end

local tabela = {}

print("quantidade:")
local n = tonumber(io.read())

for i = 1, n do
    print("elemento " .. i .. ":")
    tabela[i] = tonumber(io.read())
end

print("buscar:")
local x = tonumber(io.read())

local quantidade = contarOcorrencias(tabela, x)

print("ocorrencias: " .. quantidade)