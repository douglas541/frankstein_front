import '../styles/pages/Home.css';

const Home = () => {
    return (
        <div className="pricing-page">
            <header className="pricing-header">
                <h1>Escolha o plano que melhor te atende</h1>
                <div className="toggle-switch">
                    <span>como pretende pagar?</span>
                    <button className="toggle-button active">anual</button>
                    <button className="toggle-button">mensal</button>
                </div>
            </header>
            <div className="pricing-cards">
                <div className="card basic">
                    <h2>Básico</h2>
                    <p className="price">R$ 0<br />por usuário / mês</p>
                    <button className="btn-primary">começar agora</button>
                    <ul className="features">
                        <li>uso individual ilimitado</li>
                        <li>otimização de rotinas de trabalho</li>
                        <li>cotação de insumos e preços de venda</li>
                        <li>frota ideal de maquinário</li>
                        <li>painel de acompanhamento</li>
                        <li>auto diagnóstico</li>
                    </ul>
                </div>
                <div className="card standard">
                    <h2>Padrão</h2>
                    <p className="price">R$ XX<br />por usuário / mês</p>
                    <button className="btn-primary">fazer um teste gratuito</button>
                    <ul className="features">
                        <li><strong>tudo do básico mais...</strong></li>
                        <li>API de integração</li>
                        <li>acesso a crédito agrícola</li>
                        <li>rotinas de trabalho personalizadas</li>
                        <li>otimização de maquinário</li>
                    </ul>
                </div>
                <div className="card pro">
                    <h2>Pro</h2>
                    <p className="price">plano personalizado</p>
                    <button className="btn-primary">conversar com vendas</button>
                    <ul className="features">
                        <li><strong>tudo do padrão mais...</strong></li>
                        <li>equipe dedicada</li>
                        <li>acompanhamento meteorológico em tempo real</li>
                        <li>análise avançada do solo</li>
                        <li>API integração avançada 24h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
