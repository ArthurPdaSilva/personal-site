import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Rotas from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Rotas/>
    </BrowserRouter>
  );
}
