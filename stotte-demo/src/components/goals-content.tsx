"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Target,
  Users,
  DollarSign,
  Clock,
  Plus,
  Share2,
  TrendingUp,
  Search,
  Shirt,
  Bus,
  Trophy,
  Heart,
  Sparkles,
} from "lucide-react";
import { CreateGoalModal } from "@/components/create-modal-global";

const goals = [
  {
    id: 1,
    title: "Nye keeperdrakter",
    description:
      "Profesjonelle keeperdrakter til våre målvakter for kommende sesong",
    image: "/placeholder.svg?height=200&width=300",
    icon: Shirt,
    category: "Utstyr",
    supporters: 23,
    raised: 1200,
    target: 1500,
    status: "active",
    priority: "high",
    startDate: "15.03.2024",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Busstur til NM",
    description:
      "Transport til Norges-mesterskapet for hele laget og supportere",
    image: "/placeholder.svg?height=200&width=300",
    icon: Bus,
    category: "Reise",
    supporters: 45,
    raised: 8500,
    target: 12000,
    status: "active",
    priority: "high",
    startDate: "01.02.2024",
    color: "from-green-500 to-green-600",
  },
  {
    id: 3,
    title: "Nye treningsballer",
    description: "Kvalitetsballer for bedre treningsøkter",
    image: "/placeholder.svg?height=200&width=300",
    icon: Target,
    category: "Utstyr",
    supporters: 12,
    raised: 800,
    target: 2000,
    status: "starting",
    priority: "medium",
    startDate: "20.04.2024",
    color: "from-amber-500 to-amber-600",
  },
  {
    id: 4,
    title: "Lagfest etter sesong",
    description: "Feiring av en fantastisk sesong sammen med hele laget",
    image: "/placeholder.svg?height=200&width=300",
    icon: Trophy,
    category: "Arrangementer",
    supporters: 67,
    raised: 5000,
    target: 5000,
    status: "finished",
    priority: "low",
    startDate: "10.01.2024",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 5,
    title: "Generell støtte",
    description: "Støtt laget vårt med det du ønsker - alle bidrag teller",
    image: "/placeholder.svg?height=200&width=300",
    icon: Heart,
    category: "Generell",
    supporters: 89,
    raised: 15000,
    target: undefined,
    status: "active",
    priority: "high",
    startDate: "01.01.2024",
    color: "from-red-500 to-red-600",
  },
];

const statusConfig = {
  active: {
    label: "Aktiv nå",
    color: "bg-green-100 text-green-700",
    dot: "bg-green-500",
  },
  starting: {
    label: "Starter snart",
    color: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
  },
  finished: {
    label: "Fullført",
    color: "bg-slate-100 text-slate-700",
    dot: "bg-slate-500",
  },
};

export function GoalsContent() {
  const [showCreateGoal, setShowCreateGoal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("priority");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGoals = goals
    .filter((goal) => {
      if (filterStatus !== "all" && goal.status !== filterStatus) return false;
      if (filterCategory !== "all" && goal.category !== filterCategory)
        return false;
      if (
        searchTerm &&
        !goal.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "priority") {
        const priorityOrder: Record<string, number> = {
          high: 3,
          medium: 2,
          low: 1,
        };
        return (
          (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0)
        );
      }
      if (sortBy === "raised") return b.raised - a.raised;
      if (sortBy === "supporters") return b.supporters - a.supporters;
      return 0;
    });

  const shareGoal = (goal: {
    title: string;
    description: string;
    raised: number;
    target?: number;
  }) => {
    const text = `Støtt vårt lag! ${goal.title} - ${
      goal.description
    }. Vi har samlet inn ${goal.raised} NOK${
      goal.target ? ` av ${goal.target} NOK` : ""
    }. Bli støttespiller i dag!`;
    navigator.clipboard.writeText(text);
    // You could also integrate with Web Share API here
  };

  const getProgressPercentage = (goal: { target?: number; raised: number }) => {
    if (!goal.target) return 0;
    return Math.min((goal.raised / goal.target) * 100, 100);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Støtte IL
            </h1>
            <p className="text-slate-600">Støtte IL - Håndball - Formål</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all hover:scale-105">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-blue-700">
                Aktive formål
              </CardTitle>
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-800">
              {goals.filter((g) => g.status === "active").length}
            </div>
            <p className="text-xs text-blue-600 mt-2">Fra valgt enhet</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all hover:scale-105">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-green-700">
                Totalt støttespillere
              </CardTitle>
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-800">
              {goals.reduce((sum, goal) => sum + goal.supporters, 0)}
            </div>
            <p className="text-xs text-green-600 mt-2">
              På tvers av alle formål
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all hover:scale-105">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-purple-700">
                Total støtte samlet
              </CardTitle>
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-800">
              {goals
                .reduce((sum, goal) => sum + goal.raised, 0)
                .toLocaleString()}
            </div>
            <p className="text-xs text-purple-600 mt-2">NOK totalt</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-xl transition-all hover:scale-105">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-amber-700">
                Gjennomsnittlig støtte
              </CardTitle>
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-800">
              {Math.round(
                goals.reduce((sum, goal) => sum + goal.raised, 0) /
                  goals.reduce((sum, goal) => sum + goal.supporters, 0) || 0
              )}
            </div>
            <p className="text-xs text-amber-600 mt-2">NOK per støttespiller</p>
          </CardContent>
        </Card>
      </div>

      {/* Create New Goal CTA */}
      <Card className="shadow-lg bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 border-2 border-dashed border-indigo-200">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            🎯 Opprett nytt innsamlingsmål
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Velg et bilde, skriv en tittel og sett et mål (valgfritt). Få
            støttespillerne engasjert med et konkret formål!
          </p>
          <Button
            onClick={() => setShowCreateGoal(true)}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 gap-2 h-12 px-8 text-lg font-semibold shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Opprett nytt formål
          </Button>
        </CardContent>
      </Card>

      {/* Filters and Search */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Søk etter formål..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle statuser</SelectItem>
                  <SelectItem value="active">Aktiv nå</SelectItem>
                  <SelectItem value="starting">Starter snart</SelectItem>
                  <SelectItem value="finished">Fullført</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle kategorier</SelectItem>
                  <SelectItem value="Utstyr">Utstyr</SelectItem>
                  <SelectItem value="Reise">Reise</SelectItem>
                  <SelectItem value="Arrangementer">Arrangementer</SelectItem>
                  <SelectItem value="Generell">Generell</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sorter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="priority">Prioritet</SelectItem>
                  <SelectItem value="raised">Mest støtte</SelectItem>
                  <SelectItem value="supporters">
                    Flest støttespillere
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGoals.map((goal) => {
          const Icon = goal.icon;
          const progress = getProgressPercentage(goal);
          const status = statusConfig[goal.status as keyof typeof statusConfig];

          return (
            <Card
              key={goal.id}
              className={`border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 overflow-hidden ${
                goal.priority === "high" ? "ring-2 ring-blue-200" : ""
              }`}
            >
              {/* Image Header */}
              <div
                className={`h-48 bg-gradient-to-br ${goal.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <Badge className={status.color}>
                    <div
                      className={`w-2 h-2 ${status.dot} rounded-full mr-2`}
                    />
                    {status.label}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-slate-700"
                  >
                    {goal.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                {goal.priority === "high" && (
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-red-500 text-white">
                      <Target className="w-3 h-3 mr-1" />
                      Høy prioritet
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>

                  {/* Progress */}
                  {goal.target && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Fremgang</span>
                        <span className="font-semibold text-slate-800">
                          {Math.round(progress)}%
                        </span>
                      </div>
                      <Progress value={progress} className="h-3" />
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">
                          {goal.raised.toLocaleString()} NOK
                        </span>
                        <span className="text-slate-600">
                          {goal.target.toLocaleString()} NOK
                        </span>
                      </div>
                    </div>
                  )}

                  {!goal.target && (
                    <div className="text-center py-2">
                      <div className="text-2xl font-bold text-slate-800">
                        {goal.raised.toLocaleString()} NOK
                      </div>
                      <div className="text-sm text-slate-600">samlet inn</div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600">
                        {goal.supporters} støttespillere
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600">{goal.startDate}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => shareGoal(goal)}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Del formål
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      Se detaljer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredGoals.length === 0 && (
        <Card className="border-2 border-dashed border-slate-200">
          <CardContent className="p-12 text-center">
            <Target className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-600 mb-2">
              Ingen formål funnet
            </h3>
            <p className="text-slate-500 mb-4">
              Prøv å endre filtrene eller opprett et nytt formål
            </p>
            <Button
              onClick={() => setShowCreateGoal(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Opprett nytt formål
            </Button>
          </CardContent>
        </Card>
      )}

      <CreateGoalModal
        isOpen={showCreateGoal}
        onClose={() => setShowCreateGoal(false)}
      />
    </div>
  );
}
