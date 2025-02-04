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
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        >
          {icon?.includes(".png") ? (
            <img src={`${BASE_URL}/png/${icon}`} alt="icon" />
          ) : (
            <Icon name={icon} color="#000" size={20} />
          )}
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Your Favourite Icon</DialogTitle>
            <DialogDescription>
              Please select an icon from the options below.
            </DialogDescription>
            <div>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {iconList.map((iconItem) => (
                      <div
                        key={iconItem}
                        className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                        onClick={() => {
                          selectedIcon(iconItem);
                          setOpenDialog(false);
                          setIcon(iconItem);
                        }}
                      >
                        <Icon name={iconItem} color="#000" size={20} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="color-icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {pngIconList.map((pngIcon) => (
                      <div
                        key={pngIcon}
                        className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                        onClick={() => {
                          selectedIcon(pngIcon);
                          setOpenDialog(false);
                          setIcon(pngIcon);
                        }}
                      >
                        <img src={`${BASE_URL}/png/${pngIcon}`} alt={pngIcon} />
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
