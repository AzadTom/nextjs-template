"use client";
import { useHightLight } from "@/store/useHightlight";
import { Button } from "./ui/button";

const HighLightButton = () => {
  const { enabled, setEnabled } = useHightLight((state) => state);
  const handleClick = () => {
    setEnabled(!enabled);
  };
  return (
    <Button
      onClick={handleClick}
      className=" z-50 fixed bottom-4 left-1/2 size-12.5 rounded-full bg-[#262626] border border-[#363636]"
    >
      Click
    </Button>
  );
};

export default HighLightButton;
