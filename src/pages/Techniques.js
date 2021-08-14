import techniquesMindMap from '../components/203.png';
import knowledgeAreaAndTasks from '../components/202.png';
import s2 from '../components/203.png';
import Card from '../components/Card';
import SimpleCard from '../components/Card';
import ImgMediaCard from '../components/Card';
import ImageModal from '../components/ImageModal';
import { useState } from 'react';

function openImage(s){
    <ImageModal src={s} />
}

function TechniquesPage(props) {


    return (
    <div><h2>Business Analysis Techniques</h2>
        <div>
            <hr/>
            <h3>Category Title</h3>
        <ImgMediaCard src={techniquesMindMap} title="Techniques Mind Map" description="See how business analysis techniques link together" content="this is the content"/>
            <ImgMediaCard src={knowledgeAreaAndTasks} title="knowledge areas and tasks" description="description of the card" content="content of full explanation"/>
            <hr/>
            <h3>Category Title</h3>
            
        </div>
        
    </div>
    );
    
}

export default TechniquesPage;