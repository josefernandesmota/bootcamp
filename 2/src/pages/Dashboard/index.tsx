import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);

    function handleAddRepository() {
        // Adição de um novo repositório
        // Consumir API do Github
        // Salvar novo repositório no estado
    }

    return (
    <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github.</Title>

    <Form>
        <input
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
        <a href="teste">
            <img src="https://thumbs.dreamstime.com/z/thumb-finger-29040972.jpg" alt="" />
        <div>
            <strong>tiagoluchtenberg/repo</strong>
            <p>Descrição do repo</p>
        </div>

        <FiChevronRight size={20} />
        </a>
    </Repositories>
    </>
    );
};

export default Dashboard;