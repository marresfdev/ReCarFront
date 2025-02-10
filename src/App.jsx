import { ConfigProvider, notification } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

// Configuración de las notificaciones
notification.config({
  placement: 'bottomRight',
});

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000000" // Ajusta el color principal del tema
          }
        }}
      >
        <AppRoutes />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
