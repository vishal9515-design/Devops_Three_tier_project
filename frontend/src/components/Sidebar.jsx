import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-64 bg-slate-800 min-h-screen p-5'>
      <ul className='space-y-5'>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>

        <li>
          <Link to='/profile'>Profile</Link>
        </li>

        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar