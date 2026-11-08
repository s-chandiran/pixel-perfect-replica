import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/payments")({
  head: () => ({
    meta: [
      { title: "Payments — StayDesk Hotel Management" },
      { name: "description", content: "Payments for your hotel in StayDesk." },
      { property: "og:title", content: "Payments — StayDesk Hotel Management" },
      { property: "og:description", content: "Payments for your hotel in StayDesk." },
    ],
  }),
  component: () => <ModulePlaceholder title="Payments" phase="a later phase" />,
});
