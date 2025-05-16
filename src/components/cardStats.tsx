import { ArrowRight } from "lucide-react";

export enum ColorType {
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Success = 'success',
}

interface StatCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  link: string;
  color: ColorType;
}

const colorClasses = {
  info: 'bg-blue-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
  success: 'bg-green-500',
};

export function StatCard({ icon, count, label, link, color }: StatCardProps) {
  return (
    <div className="w-full p-3 hover:scale-105 duration-300">
      <div className={`rounded-lg shadow-lg ${colorClasses[color]}`}>
        <div className="p-3 flex justify-between items-center">
          <div className="text-white text-5xl">
            {icon}
          </div>
          <div className="text-right">
            <p className="text-4xl text-white">{count}</p>
            <p className="text-sm text-white">{label}</p>
          </div>
        </div>
        <a href={link}>
          <div className="bg-gray-200 p-2 flex justify-between items-center rounded-b-lg">
            <span>Visualizar</span>
            <ArrowRight className="text-gray-700" />
          </div>
        </a>
      </div>
    </div>
  );
}
