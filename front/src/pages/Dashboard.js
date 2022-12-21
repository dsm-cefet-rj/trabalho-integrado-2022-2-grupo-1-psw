import NavbarComponent from "../components/Navbar";
import CollapsibleTable from "../components/dashboard/CollapsibleTable";

function Dashboard() {
  return <div>
    <div>
      <NavbarComponent />
      </div>
      <div className='container mt-3'>
        <CollapsibleTable />
      </div>
  </div>;
}

export default Dashboard;
