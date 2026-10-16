function Greetings({ nome, mensagem = 'Seja bem-vindo(a) !' }) {
    return (<div className="greeting">
            <span className="greeting_eyebrow">React - Primeiros Passos</span>
            <h1>{nome}, {mensagem}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores fugit, assumenda dolores reiciendis debitis soluta tenetur, distinctio dolorum minima veritatis minus, perferendis dolore. Tempora rem odio dignissimos. Quisquam, hic.</p>
        </div>
    );
}
export default Greetings
