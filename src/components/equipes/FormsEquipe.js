import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';


function FormsEquipe(props) {
    const [nome, setNome] = useState()
  
    function retornaEquipe(){
      let equipe = {nome}
      props.novoHandler(equipe)
    }
  
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control value={nome} onChange={(e) => setNome(e.target.value)} type="string" placeholder="Digite o nome da equipe" />
        </Form.Group>  
  
        <Button variant="primary" className='m-2' onClick={retornaEquipe}>
          Criar Equipe
        </Button>
  
      </Form>
    );
  }
  
  export default FormsEquipe;