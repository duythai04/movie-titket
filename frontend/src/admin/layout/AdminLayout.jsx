// src/admin/AdminLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

export default function AdminLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}
