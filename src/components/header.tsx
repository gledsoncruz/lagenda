// components/Header.tsx
import { createClient } from "@/utils/supabase/server";
import { AuthProvider } from "@/components/providers/authProvider";
import { HeaderClient } from "@/components/headerClient";

export async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <AuthProvider>
      <HeaderClient initialUser={user} />
    </AuthProvider>
  );
}