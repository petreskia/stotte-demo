"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  BarChart3,
  Target,
  Users,
  UserPlus,
  TrendingUp,
  ImageIcon,
  Calculator,
  HelpCircle,
  LogOut,
  ChevronDown,
  FileText,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "oversikt", label: "Oversikt", icon: BarChart3 },
  { id: "formal", label: "Formål", icon: Target },
  { id: "stottespillere", label: "Støttespillere", icon: Users },
  { id: "rekruttering", label: "Rekruttering", icon: UserPlus },
  { id: "markedsforing", label: "Markedsføring", icon: TrendingUp },
  { id: "profilmateriell", label: "Profilmateriell", icon: ImageIcon },
  { id: "lag-profilmateriell", label: "Lag profilmateriell", icon: FileText },
  { id: "kalkulator", label: "Kalkulator", icon: Calculator },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-72 bg-white border-r border-slate-200 flex flex-col shadow-sm lg:w-72 md:w-64 sm:w-60">
      {/* Logo */}
      <div className="p-6 border-b border-slate-100 flex items-center gap-2">
        {" "}
        {/* Added flex, items-center, and gap-2 */}
        <div className="flex-shrink-0">
          {" "}
          {/* Ensure the icon part doesn't shrink */}
          <Image
            src="/blue logo sign.jpg"
            alt="stotte-logo"
            height={40} // Adjusted height for better alignment
            width={40} // Adjusted width
            quality={100} // Optional: Improve image quality
            priority // Optional: Prioritize loading for LCP
          />
        </div>
        <div className="flex-grow min-w-0">
          {" "}
          {/* Allow text part to grow and prevent overflow */}
          <Image
            src="/stotte tekst.jpg"
            alt="stotte-logo-text" // Changed alt for distinct image
            height={30} // Adjusted height for text part
            width={100} // Adjusted width
            quality={100} // Optional: Improve image quality
            priority // Optional: Prioritize loading for LCP
          />
        </div>
      </div>

      {/* Team Selector */}
      <div className="p-4 border-b border-slate-100">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between h-auto p-3 hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-semibold">
                    🏐
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-medium text-slate-800">Håndball</div>
                  <div className="text-xs text-slate-500">ENHET</div>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>Håndball</DropdownMenuItem>
            <DropdownMenuItem>Fotball</DropdownMenuItem>
            <DropdownMenuItem>Basketball</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <div className="space-y-1">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
            Dashboard
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start h-11 px-3 text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-colors text-sm",
                  activeSection === item.id &&
                    "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
                )}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-9 h-9">
            <AvatarFallback className="bg-slate-100 text-slate-600 text-sm font-medium">
              JR
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-slate-800 text-sm">
              Jørgen Rangnes
            </div>
            <div className="text-xs text-slate-500">Manager</div>
          </div>
        </div>

        <div className="space-y-1">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-slate-600 hover:text-slate-800"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Støtte support
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-slate-600 hover:text-slate-800"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logg ut
          </Button>
        </div>
      </div>
    </div>
  );
}
