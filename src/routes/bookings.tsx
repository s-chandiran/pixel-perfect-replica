import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/bookings")({
  head: () => ({
    meta: [
      { title: "Reservations — StayDesk Hotel Management" },
      { name: "description", content: "Reservations for your hotel in StayDesk." },
      { property: "og:title", content: "Reservations — StayDesk Hotel Management" },
      { property: "og:description", content: "Reservations for your hotel in StayDesk." },
    ],
  }),
  component: () => <ModulePlaceholder title="Reservations" phase="Phase 3" />,
});
