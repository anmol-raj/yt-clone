import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

function Body() {
  return (
    <div className="grid ">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default Body;