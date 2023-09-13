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
        type: 1 // 1 = Embalagem / 2 = Maquina
    },
    {
        id: 2,
        name: 'Box Pouch',
        image: BoxPouch,
        type: 1
    },
    {
        id: 3,
        name: 'Pouch 4 Soldas',
        image: Pouch4Soldas,
        type: 1
    },
    {
        id: 4,
        name: 'Retornable Pouch',
        image: RetornablePouch,
        type: 1
    },
    {
        id: 5,
        name: 'Sachê',
        image: Sache,
        type: 1
    },
    {
        id: 6,
        name: 'Saco Pouch',
        image: SacoPouch,
        type: 1
    },
    {
        id: 7,
        name: 'Spout Pouch',
        image: SpoutPouch,
        type: 1
    },
    {
        id: 8,
        name: 'Stand-Up Pouch',
        image: StandUpPouch,
        type: 1
    },
    {
        id: 9,
        name: 'Facas Especiais',
        image: FacasEspeciais,
        type: 1
    },
    {
        id: 10,
        name: 'Filmes Laminados',
        image: FilmesLaminados,
        type: 1
    },


    // MAQUINAS -- TYPE=2
    {
        id: 11,
        name: 'FS Pouch',
        image: FsPouch,
        type: 2
    },
    {
        id: 12,
        name: 'FFS Pouch',
        image: FfsPouch,
        type: 2
    },
    {
        id: 13,
        name: 'Flow Pack Vertical',
        image: FlowPackVertical,
        type: 2
    },
    {
        id: 14,
        name: 'FS Pouch + Vácuo',
        image: FsPouchVacuo,
        type: 2
    },
    {
        id: 15,
        name: 'Dosadores',
        image: Dosadores,
        type: 2
    },
    {
        id: 16,
        name: 'Encaixotamento',
        image: Encaixotamento,
        type: 2
    }
]

export default cardData;