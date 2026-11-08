import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/front-desk")({
  head: () => ({
    meta: [
      { title: "Check-in / Check-out — StayDesk Hotel Management" },
      { name: "description", content: "Check-in / Check-out for your hotel in StayDesk." },
      { property: "og:title", content: "Check-in / Check-out — StayDesk Hotel Management" },
      { property: "og:description", content: "Check-in / Check-out for your hotel in StayDesk." },
    ],
  }),
  component: () => <ModulePlaceholder title="Check-in / Check-out" phase="a later phase" />,
});
