import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — StayDesk Hotel Management" },
      { name: "description", content: "Settings for your hotel in StayDesk." },
      { property: "og:title", content: "Settings — StayDesk Hotel Management" },
      { property: "og:description", content: "Settings for your hotel in StayDesk." },
    ],
  }),
  component: () => <ModulePlaceholder title="Settings" phase="a later phase" />,
});
