import { createClient } from "@/utils/supabase/server";

export async function getDashboardData() {
  const supabase = await createClient()

  const [appointments, services, clients, companies] = await Promise.all([
    supabase.from('appointments').select('id', { count: 'exact' }),
    supabase.from('services').select('id', { count: 'exact' }),
    supabase.from('clients').select('id', { count: 'exact' }), // ou outra tabela de clientes
    supabase.from('companies').select('id', { count: 'exact' }),
  ]);

  return {
    appointments: appointments.count || 0,
    services: services.count || 0,
    clients: clients.count || 0,
    companies: companies.count || 0,
  };
}