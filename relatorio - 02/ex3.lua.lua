function filtrarMaiores(tabela, limite)
    local novaTabela = {}

    for i = 1, #tabela do
        if tabela[i] > limite then
            table.insert(novaTabela, tabela[i])
        end
    end

    return novaTabela
end

local tabela = {}

print("quantidade:")
local n = tonumber(io.read())

for i = 1, n do
    print("elemento " .. i .. ":")
    tabela[i] = tonumber(io.read())
end

print("limite:")
local k = tonumber(io.read())

local resultado = filtrarMaiores(tabela, k)

print("maiores que " .. k .. ":")

for i = 1, #resultado do
    print(resultado[i])
end