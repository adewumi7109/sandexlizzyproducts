import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tcndqnonilbayhpbbjyg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjbmRxbm9uaWxiYXlocGJianlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxODIyMDcsImV4cCI6MjA1ODc1ODIwN30.VmtwXJ_itvATOyYOgN5UU3dYizUXVJpEDFig_-y0hCA";

export const supabase = createClient(supabaseUrl, supabaseKey);
