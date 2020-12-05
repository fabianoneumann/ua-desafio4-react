import { useState } from 'react'

import Menu from '../../components/Menu'
import MyTable from '../../components/MyTable'

import listPessoas from '../../data/pessoas.json'


function LandingPage() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [pessoas, setPessoas] = useState(listPessoas);
    const [id, setId] = useState(pessoas.length+1);

    function handleSubmit(event) {
        const novaPessoa = {
            nome: nome,
            idade: idade,
            id: id,
        }

        setId(id+1);

        setPessoas([...pessoas, novaPessoa]);
        
        setNome("");
        setIdade("");

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

            <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
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

            <MyTable pessoas={pessoas} />

            {/* <ul>
                { pessoas.map((pessoa, index) =>
                    <li key={index}>{pessoa.id} - {pessoa.nome}: {pessoa.idade} anos</li>
                )}
            </ul> */}
        </>
    );
}

export default LandingPage;