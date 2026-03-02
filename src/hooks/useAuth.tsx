import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export function useAuth(requireAdmin = false) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);

        if (currentUser && requireAdmin) {
          // Check admin role using has_role function via RPC
          const { data } = await supabase.rpc("has_role", {
            _user_id: currentUser.id,
            _role: "admin",
          });
          setIsAdmin(!!data);
          if (!data) {
            navigate("/");
          }
        }

        if (!currentUser && requireAdmin) {
          navigate("/auth");
        }

        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user && requireAdmin) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, requireAdmin]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return { user, isAdmin, loading, signOut };
}
