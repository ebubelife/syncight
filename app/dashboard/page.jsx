import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Dashboard from "@/components/Dashboard";


const DashboardPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Welcome Ebube,"
       // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Dashboard />
    </>
  );
};

export default DashboardPage;
