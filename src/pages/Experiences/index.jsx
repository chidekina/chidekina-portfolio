import Container from "../../components/Container";

import photo from "../../assets/experience-photo.jpg";

const Experiences = () => {
    return ( 
        <Container>
            <img
                className="w-70"
                src={photo}
                alt="Foto palestrando" />            
        </Container>
     );
}
 
export default Experiences;