
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes'
function App() {
  return (
    <div className='mx-auto max-w-screen-lg'>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
