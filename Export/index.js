import {Cliente, Empresa, Endereco, Telefone} from "tecnicasdeprogramacao"

const EnderecoEmpresa = new Endereco('SP', 'Sorocaba', 'Avenida Dom Aguirre', '1935');

const empresa = new Empresa('Empresa do Jorginho', 'JORGE LTDA', '2981982989', EnderecoEmpresa);

empresa.adicionarTelefone(new Telefone('11', '999999999'));
empresa.adicionarTelefone(new Telefone('11', '932891892'));

const cliente1 = new Cliente('Alex de Niterói', '1234567890', new Endereco('RJ', 'Niterói', 'Rua da Conceição', '1298'));
const cliente2 = new Cliente('Tom de Moletom', '8317872728', new Endereco('SP', 'Sorocaba', 'Rua dos Moletons', '9812'));
const cliente3 = new Cliente('José Confuso', '2939891829', new Endereco('BA', 'Salvador', 'Rua da Praia', '9382'));
const cliente4 = new Cliente('Martin da Zebra', '1212192981', new Endereco('MG', 'Virginia', 'Rua Lagoinha', '3122'));
const cliente5 = new Cliente('Pit do Samba', '39281921', new Endereco('SP', 'Americana', 'Avenida do Ouro', '9542'));

cliente1.AdicionarTelefone(new Telefone('15', '23898982'));
cliente1.AdicionarTelefone(new Telefone('15', '29384248'));

cliente2.AdicionarTelefone(new Telefone('81', '389219811'));
cliente2.AdicionarTelefone(new Telefone('81', '329839819'));

cliente3.AdicionarTelefone(new Telefone('99', '928392891'));
cliente3.AdicionarTelefone(new Telefone('99', '293829839'));

cliente4.AdicionarTelefone(new Telefone('100', '02930291'));
cliente4.AdicionarTelefone(new Telefone('100', '03208108'));

cliente5.AdicionarTelefone(new Telefone('23', '298293891'));
cliente5.AdicionarTelefone(new Telefone('23', '293829819'));

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);

console.log(empresa.descricao());