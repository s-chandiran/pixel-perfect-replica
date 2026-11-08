import {
  LayoutDashboard, CalendarRange, BedDouble, Users, DoorOpen, CreditCard, FileText, BarChart3, Settings,
} from "lucide-react";

export const navGroups = [
  {
    label: "Operations",
    items: [
      { to: "/", label: "Dashboard", icon: LayoutDashboard },
      { to: "/bookings", label: "Reservations", icon: CalendarRange },
      { to: "/rooms", label: "Room Management", icon: BedDouble },
      { to: "/guests", label: "Guests", icon: Users },
      { to: "/front-desk", label: "Check-in / out", icon: DoorOpen },
    ],
  },
  {
    label: "Finance",
    items: [
      { to: "/payments", label: "Payments", icon: CreditCard },
      { to: "/invoices", label: "Invoices", icon: FileText },
      { to: "/reports", label: "Reports", icon: BarChart3 },
    ],
  },
  { label: "System", items: [{ to: "/settings", label: "Settings", icon: Settings }] },
] as const;

export const allNavItems = navGroups.flatMap((g) => g.items);
