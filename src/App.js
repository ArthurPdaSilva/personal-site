import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Rotas from './routes';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} theme='colored'/>
        <GlobalStyle/>
        <Rotas/>
      </BrowserRouter>
    </AuthProvider>
  );
}
