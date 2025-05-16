import { createClient } from "@/utils/supabase/server";

export async function getServiceAll() {
  const supabase = await createClient()


  const { data: services, error } = await supabase
    .from('services')
    .select('*');

  if (error) {
    console.log(error);
    return;
  }

  return services;
}