import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DashboardCard from '../components/DashboardCard'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='flex-1'>
        <Navbar />

        <div className='p-10'>
          <h1 className='text-4xl font-bold mb-10'>
            Dashboard
          </h1>

          <div className='grid grid-cols-3 gap-5'>
            <DashboardCard
              title='Users'
              value='1500'
            />

            <DashboardCard
              title='Deployments'
              value='320'
            />

            <DashboardCard
              title='Servers'
              value='25'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard