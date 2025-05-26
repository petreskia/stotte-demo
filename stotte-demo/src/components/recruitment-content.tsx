"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Users,
  Plus,
  Share2,
  Settings,
  Trophy,
  TrendingUp,
  UserPlus,
  Megaphone,
  Star,
  Crown,
  Zap,
  Target,
  Gift,
} from "lucide-react";

const recruiters = [
  {
    id: 1,
    name: "Lars Hansen",
    email: "lars@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    supporters: 12,
    raised: 1240,
    isActive: true,
    joinDate: "15.03.2024",
    rank: 1,
  },
  {
    id: 2,
    name: "Maria Olsen",
    email: "maria@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    supporters: 8,
    raised: 890,
    isActive: true,
    joinDate: "22.03.2024",
    rank: 2,
  },
  {
    id: 3,
    name: "Erik Nordahl",
    email: "erik@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    supporters: 5,
    raised: 450,
    isActive: false,
    joinDate: "10.04.2024",
    rank: 3,
  },
];

export function RecruitmentContent() {
  const totalSupporters = recruiters.reduce((sum, r) => sum + r.supporters, 0);
  const totalRaised = recruiters.reduce((sum, r) => sum + r.raised, 0);
  const topRecruiter = recruiters.find((r) => r.rank === 1);

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
            <p className="text-slate-600">
              Støtte IL - Håndball - Rekruttering
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 px-4 py-2"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            {totalSupporters} nye støttespillere
          </Badge>
        </div>
      </div>

      {/* Main Action Buttons */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Rekrutteringskampanje
              </h3>
              <p className="text-slate-600">
                Her finner du alle dine rekruttere. Legg til nye og se hvem som
                har hentet flest støttespillere.
              </p>
            </div>
            <div className="flex gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Settings className="w-4 h-4" />
                    Innstillinger
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Rediger landingsside</DropdownMenuItem>
                  <DropdownMenuItem>Rediger QR-kode flyer</DropdownMenuItem>
                  <DropdownMenuItem>Rediger Facebook-preview</DropdownMenuItem>
                  <DropdownMenuItem>
                    Rediger overskrift og beskrivelse
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="bg-green-600 hover:bg-green-700 gap-2">
                <Share2 className="w-4 h-4" />
                📢 Del kampanje
              </Button>
              <Button
                onClick={() => {
                  /* TODO: Implement campaign creation */
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 gap-2"
              >
                <Plus className="w-4 h-4" />➕ Ny rekrutteringskampanje
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-blue-700">
                Totalt rekruttere
              </CardTitle>
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-800">
              {recruiters.length}
            </div>
            <p className="text-xs text-blue-600 mt-2">Aktive kampanjer</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-green-700">
                Nye støttespillere
              </CardTitle>
              <UserPlus className="w-6 h-6 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-800">
              {totalSupporters}
            </div>
            <p className="text-xs text-green-600 mt-2">Gjennom rekruttering</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-purple-700">
                Støtte samlet
              </CardTitle>
              <Target className="w-6 h-6 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-800">
              {totalRaised.toLocaleString()}
            </div>
            <p className="text-xs text-purple-600 mt-2">NOK totalt</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-xl transition-all">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-amber-700">
                Gjennomsnitt per rekrutterer
              </CardTitle>
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-800">
              {Math.round(totalSupporters / recruiters.length || 0)}
            </div>
            <p className="text-xs text-amber-600 mt-2">støttespillere</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Recruiter Highlight */}
      {topRecruiter && (
        <Card className="shadow-lg bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-2 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="w-16 h-16 border-4 border-yellow-400">
                  <AvatarImage
                    src={topRecruiter.avatar || "/placeholder.svg"}
                  />
                  <AvatarFallback className="bg-yellow-100 text-yellow-800 text-lg font-bold">
                    {topRecruiter.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-yellow-800" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-700">
                    MÅNEDENS REKRUTTERER
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {topRecruiter.name}
                </h3>
                <p className="text-slate-600">
                  Har samlet inn {topRecruiter.raised.toLocaleString()} NOK - gi
                  dem en applaus! 👏
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {topRecruiter.supporters}
                </div>
                <div className="text-sm text-yellow-700">støttespillere</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recruiters List */}
      {recruiters.length > 0 ? (
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
              <Users className="w-7 h-7 text-indigo-600" />
              Dine rekruttere
            </CardTitle>
            <CardDescription>
              Oversikt over alle som hjelper deg med å rekruttere støttespillere
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recruiters.map((recruiter) => (
                <Card
                  key={recruiter.id}
                  className={`border-2 transition-all hover:shadow-lg ${
                    recruiter.rank === 1
                      ? "border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50"
                      : recruiter.rank === 2
                      ? "border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100"
                      : recruiter.rank === 3
                      ? "border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50"
                      : "border-slate-200"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={recruiter.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback className="bg-blue-100 text-blue-800 font-semibold">
                            {recruiter.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {recruiter.rank <= 3 && (
                          <div
                            className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              recruiter.rank === 1
                                ? "bg-yellow-400 text-yellow-800"
                                : recruiter.rank === 2
                                ? "bg-slate-400 text-slate-800"
                                : "bg-orange-400 text-orange-800"
                            }`}
                          >
                            {recruiter.rank}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800">
                          {recruiter.name}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {recruiter.email}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={recruiter.isActive ? "default" : "secondary"}
                          className={
                            recruiter.isActive
                              ? "bg-green-100 text-green-700"
                              : "bg-slate-100 text-slate-600"
                          }
                        >
                          {recruiter.isActive ? "Aktiv" : "Inaktiv"}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-800">
                          {recruiter.supporters}
                        </div>
                        <div className="text-xs text-blue-600">
                          støttespillere
                        </div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-800">
                          {recruiter.raised.toLocaleString()}
                        </div>
                        <div className="text-xs text-green-600">NOK samlet</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Share2 className="w-3 h-3 mr-2" />
                        Del igjen
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <Zap className="w-3 h-3 mr-2" />
                        Følg opp
                      </Button>
                    </div>

                    <div className="text-xs text-slate-500 mt-3 text-center">
                      Medlem siden {recruiter.joinDate}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        /* Empty State */
        <Card className="border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Megaphone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              Du har ingen rekrutteringskampanjer ennå
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
              Kom i gang og aktiver medlemmer, foreldre og frivillige med din
              egen kampanje. Trykk &apos;Ny kampanje&apos; for å starte!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => {
                  /* TODO: Implement campaign creation */
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 gap-2 h-12 px-8"
              >
                <Plus className="w-5 h-5" />
                Opprett ny kampanje
              </Button>
              <Button variant="outline" className="gap-2 h-12 px-8">
                <Gift className="w-5 h-5" />
                Se eksempler
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Competition/Motivation Section */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-800 flex items-center gap-3">
            <Star className="w-6 h-6 text-purple-600" />
            Motivasjon og konkurranse
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/70 rounded-xl">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-800 mb-1">
                Månedens mål
              </h4>
              <p className="text-sm text-slate-600">50 nye støttespillere</p>
              <div className="text-lg font-bold text-purple-600 mt-2">
                {totalSupporters}/50
              </div>
            </div>
            <div className="text-center p-4 bg-white/70 rounded-xl">
              <Crown className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-800 mb-1">
                Rekrutterer-liga
              </h4>
              <p className="text-sm text-slate-600">
                Du er på plass #{recruiters.length > 0 ? "1" : "-"}
              </p>
              <div className="text-lg font-bold text-purple-600 mt-2">
                {recruiters.length > 0 ? "Leder!" : "Ikke startet"}
              </div>
            </div>
            <div className="text-center p-4 bg-white/70 rounded-xl">
              <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-800 mb-1">
                Neste belønning
              </h4>
              <p className="text-sm text-slate-600">Ved 100 støttespillere</p>
              <div className="text-lg font-bold text-purple-600 mt-2">
                Lagfest! 🎉
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
