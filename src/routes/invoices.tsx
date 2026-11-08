import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/invoices")({
  head: () => ({
    meta: [
      { title: "Invoices — StayDesk Hotel Management" },
      { name: "description", content: "Invoices for your hotel in StayDesk." },
      { property: "og:title", content: "Invoices — StayDesk Hotel Management" },
      { property: "og:description", content: "Invoices for your hotel in StayDesk." },
    ],
  }),
  component: () => <ModulePlaceholder title="Invoices" phase="a later phase" />,
});
