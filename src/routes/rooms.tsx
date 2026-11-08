import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Room Management — StayDesk Hotel Management" },
      { name: "description", content: "Room Management for your hotel in StayDesk." },
      { property: "og:title", content: "Room Management — StayDesk Hotel Management" },
      { property: "og:description", content: "Room Management for your hotel in StayDesk." },
    ],
  }),
  component: () => <ModulePlaceholder title="Room Management" phase="Phase 2" />,
});
