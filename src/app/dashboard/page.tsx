
import { getDashboardData } from "@/actions/statistics";
import { ColorType, StatCard } from "@/components/cardStats"
import { Building, CalendarCheck, Shapes, UsersRound } from "lucide-react"

export default async function Dashboard() {
  const { appointments, services, clients, companies } = await getDashboardData();
  return (
    <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">

      <StatCard color={ColorType.Warning} count={companies} icon={<Building size={64} />} label="Empresas" link="/companies" />
      <StatCard color={ColorType.Danger} count={appointments} icon={<CalendarCheck size={64} />} label="Agendamentos" link="/appointments" />
      <StatCard color={ColorType.Success} count={services} icon={<Shapes size={64} />} label="Serviços" link="/services" />
      <StatCard color={ColorType.Info} count={clients} icon={<UsersRound size={64} />} label="Clientes" link="/customers" />

    </div>
  )
}