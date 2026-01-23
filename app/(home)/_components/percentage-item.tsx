import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  percentage: number;
}

const PercentageItem = ({ icon, title, percentage }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-md bg-white/5 p-3">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-muted-foreground text-sm">{title}</span>
      </div>
      <p className="text-sm font-bold">{percentage}%</p>
    </div>
  );
};

export default PercentageItem;
