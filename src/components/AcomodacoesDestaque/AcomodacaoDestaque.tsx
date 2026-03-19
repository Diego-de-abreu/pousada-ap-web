import { useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './AcomodacoesDestaque.css';

const acomodacoes = [
  {
    id: 1,
    titulo: 'Lugar para ficar em Itaim Bibi',
    datas: '27 – 29 de mar.',
    total: 'R$320',
    avaliacao: '5,0',
    tag: 'Preferido dos hóspedes',
    imagem: 'https://source.unsplash.com/400x300/?apartment,room',
  },
  {
    id: 2,
    titulo: 'Lugar para ficar em República',
    datas: '27 – 29 de mar.',
    total: 'R$210',
    avaliacao: '5,0',
    tag: 'Preferido dos hóspedes',
    imagem: 'https://source.unsplash.com/400x300/?hotel,bedroom',
  },
  {
    id: 3,
    titulo: 'Quarto compartilhado · Pinheiros',
    datas: '17 – 19 de abr.',
    total: 'R$106',
    avaliacao: '5,0',
    tag: 'Preferido dos hóspedes',
    imagem: 'https://source.unsplash.com/400x300/?hostel,room',
  },
  {
    id: 4,
    titulo: 'Lugar para ficar em Butantã',
    datas: '27 – 29 de mar.',
    total: 'R$207',
    avaliacao: '4,94',
    tag: 'Preferido dos hóspedes',
    imagem: 'https://source.unsplash.com/400x300/?interior,room',
  },
  {
    id: 5,
    titulo: 'Hotel · Consolação',
    datas: '27 – 29 de mar.',
    total: 'R$440',
    avaliacao: '5,0',
    tag: 'Preferido dos hóspedes',
    imagem: 'https://source.unsplash.com/400x300/?luxury,hotel',
  },
  {
    id: 6,
    titulo: 'Lugar para ficar em Pinheiros',
    datas: '27 – 29 de mar.',
    total: 'R$478',
    avaliacao: '4,78',
    tag: 'Preferido dos hóspedes',
    imagem: 'https://source.unsplash.com/400x300/?modern,apartment',
  },
];

export default function AcomodacoesDestaque() {
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const visiveis = 4;

  const toggleFavorito = (id: number) => {
    setFavoritos(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex(prev =>
      prev + visiveis < acomodacoes.length ? prev + 1 : prev
    );
  };

  return (
    <div className="acomodacoes-section">
      <div className="acomodacoes-header">
        <h2 className="acomodacoes-titulo">
          Acomodações muito procuradas em São Paulo
          <IconButton size="small">
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </h2>
        <div className="acomodacoes-nav">
          <IconButton onClick={handlePrev} disabled={startIndex === 0}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleNext} disabled={startIndex + visiveis >= acomodacoes.length}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="acomodacoes-lista">
        {acomodacoes.slice(startIndex, startIndex + visiveis).map(item => (
          <div key={item.id} className="acomodacao-card">
            <div className="acomodacao-imagem-wrapper">
              <img src={item.imagem} alt={item.titulo} className="acomodacao-imagem" />
              <span className="acomodacao-tag">{item.tag}</span>
              <IconButton
                className="acomodacao-favorito"
                onClick={() => toggleFavorito(item.id)}
                size="small"
              >
                {favoritos.includes(item.id)
                  ? <FavoriteIcon fontSize="small" sx={{ color: '#e53935' }} />
                  : <FavoriteBorderIcon fontSize="small" sx={{ color: '#555' }} />
                }
              </IconButton>
            </div>
            <div className="acomodacao-info">
              <p className="acomodacao-nome">{item.titulo}</p>
              <p className="acomodacao-datas">{item.datas}</p>
              <p className="acomodacao-total">
                Total: <strong>{item.total}</strong>
                <span className="acomodacao-estrela"> · ★ {item.avaliacao}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}