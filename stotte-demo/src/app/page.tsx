"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { DashboardContent } from "@/components/dashboard-content";
import { RecruitmentContent } from "@/components/recruitment-content";
import { GoalsContent } from "@/components/goals-content";
import { ProfileMaterialContent } from "@/components/profile-material-content";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function App() {
  const [activeSection, setActiveSection] = useState("oversikt");

  const renderContent = () => {
    switch (activeSection) {
      case "oversikt":
        return <DashboardContent />;
      case "rekruttering":
        return <RecruitmentContent />;
      case "formal":
        return <GoalsContent />;
      case "profilmateriell":
        return <ProfileMaterialContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className="flex-1 overflow-auto">{renderContent()}</main>
      </div>
    </SidebarProvider>
  );
}
