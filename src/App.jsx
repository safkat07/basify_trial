import { Book, Calendar, Edit, Home, Mail, Users } from "lucide-react";
import { Sidebar, SideBarItem } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { RevenueCard } from "./components/RevenueSection/RevenueCard";
import ProductCard from "./components/ProductSection/ProductCard";
import ChartCard from "./components/RevenueSection/ChartList";
import ContactList from "./components/RevenueSection/ContactCard";
import CoursesList from "./components/RevenueSection/CoursesList";

function App() {
  return (
    <main>
      <Navbar />
      <div className="flex w-full">
        <Sidebar>
          <SideBarItem icon={<Home />} text="Dashboard" active={true} />
          <SideBarItem icon={<Users />} text="Users" active={false} />
          <SideBarItem icon={<Calendar />} text="Events" active={false} />
          <SideBarItem icon={<Book />} text="Courses" active={false} />
          <SideBarItem icon={<Edit />} text="Posts" active={false} />
          <SideBarItem icon={<Mail />} text="Contact" active={false} />
        </Sidebar>
        <div className="w-full pb-10">
          <div className="grid grid-cols-4 w-3/4 mx-auto h-72 pt-10 gap-x-10">
            <RevenueCard estimate={"5k+"} text={"Total No of Users"} />
            <RevenueCard estimate={"20+"} text={"Total No of Events"} />
            <RevenueCard estimate={"5k+"} text={"Total No of Posts"} />
            <RevenueCard estimate={"10+"} text={"Active Courses"} />
          </div>
          <div className="grid grid-cols-3 w-3/4 mx-auto h-[55%] pt-5 gap-x-10 ">
            <ProductCard title={"Chart"}>
              <ChartCard />
            </ProductCard>
            <ProductCard title={"Courses"}>
              <CoursesList />
            </ProductCard>
            <ProductCard title={"Contact"}>
              <ContactList />
            </ProductCard>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
