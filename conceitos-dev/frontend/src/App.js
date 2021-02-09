import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
//import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []); 

    // useState retorna um array com 2 posições
    //
    // 1. Variável com o seu valor inicial
    // 2. Função para atualizarmos esse valor

    async function handleAddProject() {
        // projects.push(`Novo projeto ${Date.now()}`);

        //setProjects([ ...projects, `Novo projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "José Fernandes"
        });

        const project = response.data;

        setProjects([...projects, project])

        // console.log(projects);
    }

    return (
    <>
    <Header title="Homepage" />

    

    <ul>
        <li>Homepage</li>
        <li>Projects</li>
    </ul>
    <Header>
    <Header title="Projects" />
    <ul>
        <li>Homepage</li>
        <li>Projects</li>
        <li>Login</li>
    </ul>

    <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>

    </Header>
    </>
    );
}

export default App;