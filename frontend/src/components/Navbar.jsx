import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='bg-slate-900 p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-cyan-400'>
        DevOpsHub
      </h1>

      <div className='flex items-center gap-3'>
        <FaUserCircle size={30} />
        <span>Admin</span>
      </div>
    </div>
  )
}

export default Navbar