import { useState } from 'react'
import Menu from '../../components/Menu'


function LandingPage() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");

    function handleSubmit(event) {
        console.log("Botão Submit Pressionado!");
        console.log(nome);
        console.log(idade);

        const pessoa = {
            nome: nome,
            idade: idade
        }

        console.log(pessoa);

        event.preventDefault();
    }

    const handleChangeNome = (e) => {
        setNome(e.target.value);
        console.log(e.target.value);
    }
    const handleChangeIdade = (e) => {
        setIdade(e.target.value)
        console.log(e.target.value);
    }

    return(
        <>
            <Menu />
            <h1>Conteúdo da LandingPage...</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input onChange={handleChangeNome} type="text" value={nome} />
                </label>
                <label>
                    Idade:
                    <input onChange={handleChangeIdade} type="text" value={idade} />
                </label>
                <input type="submit" value="Enviar" />
            </form>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
        </>
    );
}

export default LandingPage;