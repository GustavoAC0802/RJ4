class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    getCpfUpperCase() {
        return this.#cpf.toUpperCase();
    }

    getCpfLowerCase() {
        return this.#cpf.toLowerCase();
    }

    AdicionarTelefone(fone) {
        return this.telefones.add(fone);
    }

    RemoverTelefone(fone) {
        return this.telefones.delete(fone);
    }

    clientedetalhes() {
        const telefonesList = [...this.telefones].map(telefone => `DDD: ${telefone.ddd} Número: ${telefone.numero}`).join('\n');
        return `Nome: ${this.nome}\nCPF: ${this.cpf}\nEndereço: ${this.endereco}\nTelefones:\n${telefonesList}`;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    toString() {
        return `(${this.ddd}) ${this.numero}`;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    toString() {
        return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`;
    }
}

class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() {
        return this.#cnpj;
    }

    getCnpjUpperCase() {
        return this.#cnpj.toUpperCase();
    }

    getCnpjLowerCase() {
        return this.#cnpj.toLowerCase();
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

    removerCliente(cliente) {
        this.clientes.delete(cliente);
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    removerTelefone(telefone) {
        if (this.telefones.size === 0) {
            console.log('Sem Telefones na Lista');
        } else {
            for (let teleLista of this.telefones) {
                if (teleLista.ddd === telefone.ddd && teleLista.numero === telefone.numero) {
                    console.log(`(${telefone.ddd})-${telefone.numero} foi deletado`);
                    this.telefones.delete(teleLista);
                    break;
                } else {
                    console.log(`Não há telefone registrado com esse DDD: ${telefone.ddd} e Número: ${telefone.numero}`);
                    break;
                }
            }
        }
    }

    descricao() {
        let mensagem = '';
        for (let cliente of this.clientes) {
            mensagem += cliente.clientedetalhes() + '\n\n';
        }
        return `Razão Social: ${this.razaoSocial} \n` +
            `Nome Fantasia: ${this.nomeFantasia} \n` + 
            `CNPJ: ${this.cnpj} \n` +
            `Endereço: ${this.endereco} \n` +
            '------------------------------------------ \n' +
            `${mensagem}`;
    }
}

export { Cliente, Telefone, Endereco, Empresa };