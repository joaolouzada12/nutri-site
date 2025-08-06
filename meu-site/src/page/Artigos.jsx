import './Artigos.css';

const artigos = [
  {
    id: 1,
    titulo: 'Alimentação saudável para o dia a dia',
    resumo: 'Dicas práticas para melhorar sua alimentação e saúde.',
    data: '2025-08-01',
    pdf: '/pdfs/artigo1.pdf',
  },
  {
    id: 2,
    titulo: 'Benefícios das frutas vermelhas',
    resumo: 'Saiba como incluir frutas vermelhas na sua dieta.',
    data: '2025-07-25',
    pdf: '/pdfs/artigo2.pdf',
  },
];

export default function Artigos() {
  return (
    <section className="artigos-section">
      <h2>Artigos Recentes</h2>
      <div className="artigos-grid">
        {artigos.map(({ id, titulo, resumo, data, pdf }) => (
          <article key={id} className="artigo-card">
            <h3>{titulo}</h3>
            <p>{resumo}</p>
            <time>{new Date(data).toLocaleDateString('pt-BR')}</time>
            {pdf && (
              <a href={pdf} download target="_blank" rel="noopener noreferrer" className="download-link">
                Baixar PDF
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
