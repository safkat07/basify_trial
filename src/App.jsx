import { Book, Calendar, Edit, Home, Mail, Users } from "lucide-react";
import { Sidebar, SideBarItem } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { RevenueCard } from "./components/RevenueSection/RevenueCard";
import ProductCard from "./components/ProductSection/ProductCard";
import ChartCard from "./components/RevenueSection/ChartList";
import ContactList from "./components/RevenueSection/ContactCard";
import CoursesList from "./components/RevenueSection/CoursesList";

// Sidebar Items Data
const sidebarItems = [
  { icon: <Home />, text: "Dashboard" },
  { icon: <Users />, text: "Users" },
  { icon: <Calendar />, text: "Events" },
  { icon: <Book />, text: "Courses" },
  { icon: <Edit />, text: "Posts" },
  { icon: <Mail />, text: "Contact" },
];

// Revenue Cards Data
const revenueData = [
  { estimate: "5k+", text: "Total No of Users" },
  { estimate: "20+", text: "Total No of Events" },
  { estimate: "5k+", text: "Total No of Posts" },
  { estimate: "10+", text: "Active Courses" },
];

// Product Card Data
const productCardsData = [
  { title: "Chart", content: <ChartCard /> },
  { title: "Courses", content: <CoursesList /> },
  { title: "Contact", content: <ContactList /> },
];

function App() {
  return (
    <main>
      <Navbar />
      <div className="flex w-full">
        <Sidebar>
          {sidebarItems.map((item, index) => (
            <SideBarItem
              key={index}
              icon={item.icon}
              text={item.text}
              active={index === 0}
            />
          ))}
        </Sidebar>

        <div className="w-full pb-10">
          <div className="grid grid-cols-4 w-3/4 mx-auto h-72 pt-10 gap-x-10">
            {revenueData.map((data, index) => (
              <RevenueCard
                key={index}
                estimate={data.estimate}
                text={data.text}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 w-3/4 mx-auto h-[55%] pt-5 gap-x-10">
            {productCardsData.map((card, index) => (
              <ProductCard key={index} title={card.title}>
                {card.content}
              </ProductCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
