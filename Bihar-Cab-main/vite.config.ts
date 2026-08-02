process.env.LOVABLE_PREVIEW_HOST = "6f66f4fc-ebe2-4175-a710-8e8b326ad3f1.lovableproject.com";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
