import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController"; // ✅ Fixed import name
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./components/ui/Dialog"; // ✅ Fixed import path
import { Menu } from "lucide-react";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <>
        <Header DownloadIcon={setDownloadIcon} />
        <div className="md:hidden fixed top-16 left-4 z-50">
          <button 
            onClick={() => setMobileNavOpen(true)} 
            className="p-2 bg-gray-100 rounded-md shadow"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden md:block fixed top-16 left-0 h-full w-64 bg-gray-100 border-r z-40">
          <SideNav onSelect={(value) => setSelectedIndex(value)} />
        </div>
        <Dialog open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <DialogContent className="w-64">
            <DialogHeader>
              <DialogTitle>Menu</DialogTitle>
            </DialogHeader>
            <SideNav
              onSelect={(value) => {
                setSelectedIndex(value);
                setMobileNavOpen(false); 
              }}
            />
          </DialogContent>
        </Dialog>
        <div className="ml-0 md:ml-64 mt-16 p-4 w-full overflow-x-auto">
          <div className="min-w-[1024px] grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-2 border min-h-screen shadow-sm p-5 overflow-auto">
              {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
            </div>
            <div className="md:col-span-4 min-h-screen">
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
          </div>
        </div>
      </>
    </UpdateStorageContext.Provider>
  );
}

export default App;
