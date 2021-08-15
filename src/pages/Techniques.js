import techniquesMindMap from '../components/203.png';
import knowledgeAreaAndTasks from '../components/202.png';

import ImgMediaCard from '../components/Card';
import ImageModal from '../components/ImageModal';
import { Grid } from '@material-ui/core/'

function openImage(s){
    <ImageModal src={s} />
}

function TechniquesPage(props) {


    return (
    <div><h2 className="content">Business Analysis Techniques</h2>
        <div align="center">
            <hr/>
            <h3>Category Title</h3>
                <Grid 
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className="grid">
                <ImgMediaCard src={techniquesMindMap} title="Techniques Mind Map" description="See how business analysis techniques link together" content="this is the content"/>
                <ImgMediaCard src={techniquesMindMap} title="Techniques Mind Map" description="See how business analysis techniques link together" content="this is the content"/>
                <ImgMediaCard src={techniquesMindMap} title="Techniques Mind Map" description="See how business analysis techniques link together" content="this is the content"/>
                <ImgMediaCard src={techniquesMindMap} title="Techniques Mind Map" description="See how business analysis techniques link together" content="this is the content"/>
                <ImgMediaCard src={knowledgeAreaAndTasks} title="knowledge areas and tasks" description="description of the card" content="content of full explanation"/>
                </Grid>
            <hr/>
            <h3>Category Title</h3>
            
        </div>
        
    </div>
    );
    
}

export default TechniquesPage;