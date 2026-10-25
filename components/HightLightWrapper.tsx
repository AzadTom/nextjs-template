import { useHightLight } from "@/store/useHightlight";
import React from "react";

const HightLightWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { enabled } = useHightLight((state) => state);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <div className="border-2 border-red-600 p-4 rounded-lg w-full">
      <h3 className="z-20 bg-red-600 rounded-lg px-2 py-2 w-max text-white mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default HightLightWrapper;
