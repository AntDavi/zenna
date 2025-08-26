import {
  PieChart,
  Settings,
  Shield,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

export const menuItems = [
  { title: "Dashboard", href: "/dashboard", icon: PieChart },
  { title: "Transações", href: "/transactions", icon: TrendingUp },
  { title: "Patrimonio", href: "/patrimony", icon: Shield },
  { title: "Conexão Bot", href: "/connection", icon: MessageCircle },
  { title: "Configurações", href: "/settings", icon: Settings },
];

export const landingItems = [
  { title: "Home", href: "#home" },
  { title: "Sobre", href: "#about" },
  { title: "Contato", href: "#contact" },
];
