import { useState, useCallback, useEffect } from 'react';
// Components
import Product from './components/Product';
// Services
import api from './services/api';
// Styles
import { Button } from './styles';

const App = () => {
  const pacientes = [{
    id: 1,
    name: 'vero',
    value: 12,
  },
  {
    id: 1,
    name: 'vero',
    value: 12,
  }
]

const [git, setGit] = useState({});
const [users, setUsers] = useState([]);

const [modal, setModal] = useState(false);



const openModal = useCallback(() => {
  setModal(true);
}, [modal]);

const closeModal = useCallback(() => {
  setModal(false);
})

// Method 1
useEffect(() => {
  const loadGit = async () => {
    const response = await api.get('users/dannyelgjl');

    setGit(response.data);
  }

  loadGit();
}, []);

// Method 2
useEffect(() => {
  api.get('/users')
    .then(response => {
      setUsers(response.data);
    }).catch(error => console.log(error));
}, []);

  return (
    <div>
      <button onClick={openModal}>Saiba mais</button>
      <button onClick={closeModal}>Saiba menos</button>
      <Button outLine primary>Mudar cor</Button>

      {modal ? (
        <h1>Abriu modal</h1>
      ) : (
        <h1>Fechou Modal</h1>
      )}

      <h1>{users.length}</h1>
      <h1>{git.id}</h1>
      <h2>{git.login}</h2>
      <h3>{git.name}</h3>
      <h4>{git.company}</h4>
      <img src={git.avatar_url} alt={git.name}/>
      <Product 
        userName="Pagina de Pacientes"
        subTitle="DD monstro do .Net"
        users={users}
      />      
    </div>
  );
}

export default App;
