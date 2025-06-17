import { useState } from 'react';
import Navbar from '../components/Navbar';
import menuItems from '../utils/MenuItems';
import AlertContext, { Alert } from '../contexts/alert-context';
import { Outlet } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "JamesWood.dev" },
    { name: "description", content: "Welcome to my site!" },
  ];
}

function App() {
  const [alert, setAlert] = useState<Alert | null>(null);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      <div className="bg-purple-darker min-h-screen font-sans">
        <Navbar
          logo={(
            <p className="text-white text-md font-mono font-bold text-3xl">
              {'{jw}'}
            </p>
          )}
          menuItems={menuItems}
        />
        <Outlet/>
      </div>
      
    </AlertContext.Provider>
  );
}

export default App;
