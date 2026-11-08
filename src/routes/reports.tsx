import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports — StayDesk Hotel Management" },
      { name: "description", content: "Reports for your hotel in StayDesk." },
      { property: "og:title", content: "Reports — StayDesk Hotel Management" },
      { property: "og:description", content: "Reports for your hotel in StayDesk." },
    ],
  }),
  component: () => <ModulePlaceholder title="Reports" phase="a later phase" />,
});
