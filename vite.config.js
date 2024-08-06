import { defineConfig, build } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/CountriesAPI",
  appType: "spa",
});
