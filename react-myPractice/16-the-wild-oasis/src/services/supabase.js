// 25008 - connecting supabse with react app
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hzciwqcjkfoilqmbwinx.supabase.co";
const supabaseKey = "sb_publishable_LhzyYlQDoYCJHK0JoOk5LA_FNWHYcnH";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
