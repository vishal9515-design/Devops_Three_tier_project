const DashboardCard = ({ title, value }) => {
  return (
    <div className='bg-slate-800 p-5 rounded-xl shadow-lg'>
      <h2 className='text-gray-400'>{title}</h2>

      <p className='text-3xl font-bold text-cyan-400'>
        {value}
      </p>
    </div>
  )
}

export default DashboardCard