import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/guests")({
  head: () => ({
    meta: [
      { title: "Guests — StayDesk Hotel Management" },
      { name: "description", content: "Guests for your hotel in StayDesk." },
      { property: "og:title", content: "Guests — StayDesk Hotel Management" },
      { property: "og:description", content: "Guests for your hotel in StayDesk." },
    ],
  }),
  component: () => <ModulePlaceholder title="Guests" phase="a later phase" />,
});
