import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export const fetchDrinksData = async () => {
  try {
    const { data, error } = await supabaseClient.from("drinks").select();
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching drinks:", error);
    return null;
  }
};

export const fetchMealsData = async () => {
  try {
    const { data, error } = await supabaseClient.from("meals").select();
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching meals:", error);
    return null;
  }
};
