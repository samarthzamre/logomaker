import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { icons } from "lucide-react";
import { iconList } from "@/constants/Icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

const BASE_URL = "https://logoexpress.tubeguruji.com";

const IconList = ({ selectedIcon }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [pngIconList, setPngIconList] = useState([]);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue.icon : "Smile");

  useEffect(() => {
    getPngIcons();
  }, []);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    return LucidIcon ? <LucidIcon color={color} size={size} /> : null;
  };

  const getPngIcons = () => {
    axios.get(BASE_URL + "/getIcons.php").then((resp) => {
      console.log(resp.data);
      setPngIconList(resp.data);
    });
  };

  return (
    <div className="p-4">
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-2">Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gradient-to-br from-blue-300 to-purple-400 rounded-md w-[60px] h-[60px] my-2 flex items-center justify-center shadow-md transition-transform transform hover:scale-105"
        >
          {icon?.includes(".png") ? (
            <img
              src={`${BASE_URL}/png/${icon}`}
              alt="icon"
              className="w-full h-full object-contain"
            />
          ) : (
            <Icon name={icon} color="#000" size={24} />
          )}
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Select Your Favourite Icon
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Browse through our icon library and choose one that resonates with your brand.
            </DialogDescription>
            <div className="mt-4">
              <Tabs defaultValue="icon" className="w-full">
                <TabsList className="flex justify-center bg-gray-200 rounded-md p-1">
                  <TabsTrigger
                    value="icon"
                    className="px-4 py-2 rounded-md font-semibold text-gray-700 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    Icons
                  </TabsTrigger>
                  <TabsTrigger
                    value="color-icon"
                    className="px-4 py-2 rounded-md font-semibold text-gray-700 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    Color Icons
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="icon" className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {iconList.map((iconItem) => (
                      <div
                        key={iconItem}
                        className="border border-gray-300 p-3 flex rounded-lg items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => {
                          selectedIcon(iconItem);
                          setOpenDialog(false);
                          setIcon(iconItem);
                        }}
                      >
                        <Icon name={iconItem} color="#000" size={24} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="color-icon" className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {pngIconList.map((pngIcon) => (
                      <div
                        key={pngIcon}
                        className="border border-gray-300 p-3 flex rounded-lg items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => {
                          selectedIcon(pngIcon);
                          setOpenDialog(false);
                          setIcon(pngIcon);
                        }}
                      >
                        <img
                          src={`${BASE_URL}/png/${pngIcon}`}
                          alt={pngIcon}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
