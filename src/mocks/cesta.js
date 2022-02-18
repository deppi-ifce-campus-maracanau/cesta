import logo from '../../assets/logo.png';

import cogumelo from '../../assets/frutas/Cogumelo.png';
import darthvander from '../../assets/frutas/Darthvander.jpg';
import deadpool from '../../assets/frutas/Deadpool.jpg';
import goku from '../../assets/frutas/Goku.jpg';
import rick from '../../assets/frutas/Rick.jpg';


const cesta = {
  topo: {
    titulo: "©DEPPI",
  },
  detalhes: {
    nome: "Documentos importantes",
    logoFazenda: logo,
    nomeFazenda: "IFCE - Campus Maracanaú",
    descricao: "Com grande poderes vem grandes responsabilidades.",
    preco: "Estágios",
    botao: "Testar",
  },
  itens: {
    titulo: " Ler antes deve jovem padwan",
    lista: [
      {
        nome: "Matrícula",

        imagem: cogumelo,
      },
      {
        nome: "Relatórios",
        imagem: darthvander,

      },
      {
        nome: "Avaliação Tecnicos",
        imagem: deadpool,
      },
      {
        nome: "Avaliação Superior",
        imagem: goku,
      },
      {
        nome: "Contatos",
        imagem: rick,
      }
    ]
  },
  links: {

    titulo: " Ler antes deve jovem padwan",

    lista: [

      {
        link01: "Ficha de matrícula"
      },

      {
        link02: "Relatório diário do estágio"
      },

      {
        link03: "Ficha de avaliação do estagiário"
      },

      {
        link04: "Ficha de avaliação do estagiário"
      },
      {
        link04: "Contato"
      },

    ]


  },
}

export default cesta;