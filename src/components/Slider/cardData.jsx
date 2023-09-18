import Almofada from '../../pages/imagens/embalagens/Almofada.svg';
import BoxPouch from '../../pages/imagens/embalagens/Box-Pouch.svg';
import Pouch4Soldas from '../../pages/imagens/embalagens/Pouch-4-Soldas.svg';
import RetornablePouch from '../../pages/imagens/embalagens/Retortable-Pouch.svg';
import Sache from '../../pages/imagens/embalagens/Sache.svg';
import SacoPouch from '../../pages/imagens/embalagens/Saco-Pouch.svg';
import SpoutPouch from '../../pages/imagens/embalagens/Spout-Pouch.svg';
import StandUpPouch from '../../pages/imagens/embalagens/Stand-Up-Pouch.svg';
import FacasEspeciais from '../../pages/imagens/embalagens/FacasEspeciais.svg';
import FilmesLaminados from '../../pages/imagens/embalagens/FilmesLaminados.svg';

import FsPouch from '../../pages/imagens/empacotamento/Fs-Pouch.svg'
import FfsPouch from '../../pages/imagens/empacotamento/Ffs-Pouch.svg'
import FlowPackVertical from '../../pages/imagens/empacotamento/Flow-Pack-Vertical.svg'
import FsPouchVacuo from '../../pages/imagens/empacotamento/Fs-Pouch-Vacuo.svg'
import Dosadores from '../../pages/imagens/empacotamento/Dosadores.svg'
import Encaixotamento from '../../pages/imagens/empacotamento/Encaixotamento.svg'

const cardData = [
    // EMBALAGENS -- TYPE=1
    {
        id: 1,
        name: 'Almofada',
        image: Almofada,
        type: 1, // 1 = Embalagem / 2 = Maquina
        text: 'Formato para deitar a embalagem, geralmente entregue em bobina para aplicação em máquinas verticais automáticas.',
        textList: ['Sólido', 'Líquido', 'Granulado', 'Pastoso', 'Pó']
    },
    {
        id: 2,
        name: 'Box Pouch',
        image: BoxPouch,
        type: 1,
        text: 'Esta é a embalagem Pouch mais moderna atualmente no mundo. Alta performance na gôndola, mantém o produto em pé e expõe a sua marca com excelência.',
        textList: ['Sólido', 'Líquido', 'Granulado', 'Pastoso', 'Pó']
    },
    {
        id: 3,
        name: 'Pouch 4 Soldas',
        image: Pouch4Soldas,
        type: 1,
        text: 'Embalagem estruturada para apresentação na gondola, com maior área de exposição da marca. Comumente comercializada em indústrias de Café e Mercearia.',
        textList: ['Sólido', 'Líquido', 'Granulado', 'Pastoso', 'Pó']
    },
    {
        id: 4,
        name: 'Retornable Pouch',
        image: RetornablePouch,
        type: 1,
        text: 'Temos a versão convencional em alumínio e a opcional sendo transparente, com altíssima barreira. Chegando a incríveis 0,3g/m².24h.',
        textList: ['Sólido', 'Líquido', 'Granulado', 'Pastoso', 'Pó']
    },
    {
        id: 5,
        name: 'Sachê',
        image: Sache,
        type: 1,
        text: 'Embalagem que garante desempenho de durabilidade, resistência e flexibilidade. Com opcional tecnologia de rasgabilidade.',
        textList: ['Sólido', 'Líquido', 'Granulado', 'Pastoso', 'Pó']
    },
    {
        id: 6,
        name: 'Saco Pouch',
        image: SacoPouch,
        type: 1,
        text: 'Praticidade, resistência, maleabilidade, durabilidade e adição do prazo de validade dos produtos. Também podendo suportar acessórios, objetos, vestuário e entre outros.',
        textList: ['Sólido', 'Líquido', 'Granulado', 'Pastoso', 'Pó']
    },
    {
        id: 7,
        name: 'Spout Pouch',
        image: SpoutPouch,
        type: 1,
        text: 'Fabricado com a mesma estrutura básica de nossos Stand-Up Pouches, eles fornecem todos os mesmos benefícios e muito mais, incluindo eficiência de custos, maior visibilidade, conveniência e facilidade de distribuição.',
        textList: ['Líquido', 'Creme', 'Gel', 'Solvente', 'Pó']
    },
    {
        id: 8,
        name: 'Stand-Up Pouch',
        image: StandUpPouch,
        type: 1,
        text: 'Embalagem que pode ser fechada de forma segura e durável e que oferece uma alternativa elegante e prática. Fácil de se comercializar e oferece oportunidades significativas para a marca.',
        textList: ['Sólido', 'Líquido', 'Granulado', 'Pastoso', 'Pó']
    },
    {
        id: 9,
        name: 'Facas Especiais',
        image: FacasEspeciais,
        type: 1,
        text: 'Temos um formato padrão para líquidos.',
        textList: ['Sólido', 'Líquido', 'Granulado', 'Pastoso', 'Pó']
    },
    {
        id: 10,
        name: 'Filmes Laminados',
        image: FilmesLaminados,
        type: 1,
        text: 'Os filmes laminados são fornecidos em bobinas para linhas automáticas que formam, envasam e selam a embalagem.',
        textList: ['Sólido', 'Líquido', 'Granulado', 'Pastoso', 'Pó']
    },


    // MAQUINAS -- TYPE=2
    {
        id: 11,
        name: 'FS Pouch',
        image: FsPouch,
        type: 2,
        text: 'FIll and Seal: Envasa e Sela.',
        textList: []
    },
    {
        id: 12,
        name: 'FFS Pouch',
        image: FfsPouch,
        type: 2,
        text: 'Form, FIll and Seal: Entrada em Bobina, Forma Pouch, Envasa e Sela.\nAplicação opcional: Zíper, Bico e Válvula.',
        textList: []
    },
    {
        id: 13,
        name: 'Flow Pack Vertical',
        image: FlowPackVertical,
        type: 2,
        text: 'Form, FIll and Seal: Recebe Filmes, Forma a Embalagem, Envasa e Sela.',
        textList: []
    },
    {
        id: 14,
        name: 'FS Pouch + Vácuo',
        image: FsPouchVacuo,
        type: 2,
        text: 'FIll and Seal: Envasa e Sela.\nIdeal para produtos sensíveis que buscam durabilidade na gôndola sem a necessidade de conservantes ou resfriamento.',
        textList: []
    },
    {
        id: 15,
        name: 'Dosadores',
        image: Dosadores,
        type: 2,
        text: 'Multi Balança: Ideal para sólidos e granulados.',
        textList: []
    },
    {
        id: 16,
        name: 'Encaixotamento',
        image: Encaixotamento,
        type: 2,
        text: '',
        textList: ['Máquina automática From, Fill and Seal',
                   'Verificador de Peso',
                   'Dispositivo de Rejeição',
                   'Detector de Metal',
                   'Montador de Caixa',
                   'Enchimento',
                   'Seladora',
                   'Impressão de Código',
                   'Robô Paletizador',]
    }
]

export default cardData;