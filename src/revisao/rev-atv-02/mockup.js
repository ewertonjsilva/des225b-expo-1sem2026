import amarela from '../../../assets/brasilAmarela.png';
import azul from '../../../assets/brasilAzul.jpg';
import branco from '../../../assets/brasilBranco.png';
import preta from '../../../assets/brasilPreta.jpg';

const mockup = [
    {
        id: 1,
        titulo: 'Camiseta Amarela',
        descricao: 'Camisa principal da seleção.',
        preco: 'R$ 499,00',
        img: amarela,
    },
    {
        id: 2,
        titulo: 'Camiseta Azul',
        descricao: 'Camisa número dois.',   
        preco: 'R$ 499,00',
        img: azul,
    }, 
    {
        id: 3,
        titulo: 'Camiseta Preta', 
        descricao: 'Camisa homenagem.',
        preco: 'R$ 399,00',
        img: preta, 
    },
    {
        id: 4, 
        titulo: 'Camiseta Branca',
        descricao: 'Camisa reserva.',
        preco: 'R$ 399,00',
        img: branco,
    },
];

export default mockup;