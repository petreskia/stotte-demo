"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  TrendingUp,
  Target,
  ExternalLink,
  Copy,
  Send,
  Mail,
  MessageSquare,
  Smartphone,
  Megaphone,
  UserPlus,
  FileText,
  Lightbulb,
  ArrowRight,
  AlertCircle,
  Download,
  Upload,
  ImageIcon,
  Printer,
  QrCode,
  Palette,
} from "lucide-react";
import { EnhancedMarketingModal } from "@/components/enhanced-marketing-modal";
import Image from "next/image";

const chartData = [
  { week: "Uke 13", support: 60, color: "#10b981" },
  { week: "Uke 14", support: 45, color: "#f59e0b" },
  { week: "Uke 15", support: 35, color: "#ef4444" },
  { week: "Uke 16", support: 25, color: "#ef4444" },
  { week: "Uke 17", support: 50, color: "#10b981" },
];

const canvaTemplates = [
  {
    title: "Rekruttering av støttespillere",
    description: "Profesjonell plakat for å verve nye støttespillere",
    thumbnail: "/placeholder.svg?height=200&width=300",
    canvaLink: "https://canva.com/template/recruitment",
    category: "recruitment",
  },
  {
    title: "Sosiale medier post",
    description: "Instagram/Facebook post for å dele fremgang",
    thumbnail: "/placeholder.svg?height=200&width=300",
    canvaLink: "https://canva.com/template/social",
    category: "social",
  },
  {
    title: "Story template",
    description: "Instagram/Facebook story for rask deling",
    thumbnail: "/placeholder.svg?height=200&width=300",
    canvaLink: "https://canva.com/template/story",
    category: "story",
  },
  {
    title: "Kampanje banner",
    description: "Banner for spesielle kampanjer og arrangementer",
    thumbnail: "/placeholder.svg?height=200&width=300",
    canvaLink: "https://canva.com/template/campaign",
    category: "campaign",
  },
];

const textSuggestions = {
  email: [
    "Hei! Vi har lansert en ny måte å støtte vårt lag på. Med mikrodonasjoner kan du bidra med små beløp som gjør stor forskjell. Registrer deg som støttespiller i dag!",
    "Takk for din støtte! Se hvordan dine bidrag hjelper laget vårt å nå sine mål. Fortsett å støtte oss eller inviter venner til å bli støttespillere.",
  ],
  social: [
    "🏐 Bli en verdifull støttespiller for vårt lag! Med bare noen få kroner i måneden kan du bidra til å gjøre en forskjell. Last ned appen og støtt oss i dag! #StøtteIL #Håndball",
    "Stolt av å være støttespiller! 💪 Små bidrag - stor forskjell for laget vårt. Hvem vil bli med meg? #StøtteIL #SammenErViSterkere",
  ],
  sms: [
    "Hei! Bli støttespiller for vårt lag med bare noen kroner i måneden. Last ned appen Støtte og velg vårt lag. Takk!",
    "Påminnelse: Din støtte betyr mye for laget! Fortsett å bidra eller inviter venner. Takk for at du er med oss!",
  ],
};

const marketingAssets = {
  logos: [
    {
      title: "Støtte IL Logo - Høy oppløsning",
      description: "PNG med transparent bakgrunn, perfekt for print",
      format: "PNG",
      size: "2000x2000px",
      usage: "Print, store bannere",
    },
    {
      title: "Støtte IL Logo - Sosiale medier",
      description: "Optimalisert for Facebook, Instagram, Twitter",
      format: "PNG",
      size: "500x500px",
      usage: "Sosiale medier profiler",
    },
  ],
  posters: [
    {
      title: "Rekrutteringsplakat A4",
      description: "Klar for utskrift, med QR-kode",
      format: "PDF",
      size: "A4",
      usage: "Utskrift, oppslag",
    },
    {
      title: "Digital rekrutteringsplakat",
      description: "For deling på sosiale medier",
      format: "JPG",
      size: "1080x1350px",
      usage: "Instagram, Facebook posts",
    },
  ],
  qrcodes: [
    {
      title: "QR-kode - Støtte IL",
      description: "Direkte lenke til støttespiller-registrering",
      format: "PNG",
      size: "500x500px",
      usage: "Print, digital deling",
    },
  ],
};

export function DashboardContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [showEnhancedMarketing, setShowEnhancedMarketing] = useState(false);
  const [selectedAssetCategory, setSelectedAssetCategory] = useState("logos");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const filteredTemplates =
    selectedCategory === "all"
      ? canvaTemplates
      : canvaTemplates.filter((t) => t.category === selectedCategory);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br  rounded-2xl flex items-center justify-center shadow-lg">
            <Image src="/logo.png" alt="logo" height={50} width={50} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Støtte IL støtte oversikt
            </h1>
            <p className="text-slate-600">
              Håndball - Dashboard og markedsføring
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 px-4 py-2"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            +12% denne uken
          </Badge>
        </div>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-sm font-semibold text-blue-700">
                  👥 Aktive støttespillere
                </CardTitle>
                <div className="text-3xl font-bold text-blue-800 mt-2">42</div>
                <p className="text-xs text-blue-600 mt-1">+5 denne måneden</p>
              </div>
              <Users className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
            </div>
          </CardHeader>
          <CardContent>
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
              <UserPlus className="w-4 h-4 mr-2" />
              Rekrutter flere
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-sm font-semibold text-amber-700">
                  🔁 Utløpt banktilkobling
                </CardTitle>
                <div className="text-3xl font-bold text-amber-800 mt-2">4</div>
                <p className="text-xs text-amber-600 mt-1">
                  💬 Send påminnelse på foreldremøte
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-amber-600 group-hover:scale-110 transition-transform" />
            </div>
          </CardHeader>
          <CardContent>
            <Button
              size="sm"
              variant="outline"
              className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
            >
              <Send className="w-4 h-4 mr-2" />
              Send påminnelse
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-sm font-semibold text-green-700">
                  📈 Endring sist uke
                </CardTitle>
                <div className="text-3xl font-bold text-green-800 mt-2">
                  +12%
                </div>
                <p className="text-xs text-green-600 mt-1">
                  +3 nye støttespillere
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
          </CardHeader>
          <CardContent>
            <Button
              size="sm"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <Megaphone className="w-4 h-4 mr-2" />
              Lag innlegg nå
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-sm font-semibold text-purple-700">
                  🎯 Mål fremgang
                </CardTitle>
                <div className="text-lg font-bold text-purple-800 mt-2">
                  42 / 50 støttespillere
                </div>
                <p className="text-xs text-purple-600 mt-1">
                  Kun 8 igjen til neste nivå!
                </p>
              </div>
              <Target className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={84} className="mb-2" />
            <p className="text-xs text-purple-600 text-center">
              84% av målet nådd
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Chart */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
            <TrendingUp className="w-7 h-7 text-indigo-600" />
            Støtte mottatt de siste 5 ukene
          </CardTitle>
          <CardDescription>Hover over søylene for detaljer</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)",
                  }}
                  formatter={(value) => [`${value} NOK`, "Støtte mottatt"]}
                />
                <Bar dataKey="support" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Marketing Section */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                <Megaphone className="w-7 h-7 text-blue-600" />
                Markedsføringspakke
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Last ned lagets egen markedsføringskit - med logo, QR-plakat og
                ferdiglagde designmaler
              </CardDescription>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                Hvordan gjøre det guide
              </Button>
              <Button
                onClick={() => setShowEnhancedMarketing(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 gap-2"
              >
                <Palette className="w-4 h-4" />
                Åpne full markedsføringspakke
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Quick Download Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-green-600" />
              Rask nedlasting - Alt du trenger
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Download className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Komplett markedsføringskit
                      </h4>
                      <p className="text-sm text-slate-600">
                        Håndball - Støtte IL
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-4">
                    ZIP-fil med logoer, QR-koder, plakater og ferdigskrevne
                    tekster. Alt tilpasset ditt lag.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    Last ned komplett kit (2.3 MB)
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Upload className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Last opp egne bilder
                      </h4>
                      <p className="text-sm text-slate-600">
                        Tilpass med lagets bilder
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-4">
                    Last opp bilder fra kamper, treninger eller arrangementer
                    for bruk i Canva-maler.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-blue-300 text-blue-700 hover:bg-blue-50"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Last opp bilder
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Asset Categories */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-purple-600" />
              Organisert etter bruksområde
            </h3>
            <div className="flex gap-3 mb-6">
              <Button
                variant={
                  selectedAssetCategory === "logos" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedAssetCategory("logos")}
                className="gap-2"
              >
                <Palette className="w-4 h-4" />
                Logoer
              </Button>
              <Button
                variant={
                  selectedAssetCategory === "posters" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedAssetCategory("posters")}
                className="gap-2"
              >
                <Printer className="w-4 h-4" />
                Plakater
              </Button>
              <Button
                variant={
                  selectedAssetCategory === "qrcodes" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedAssetCategory("qrcodes")}
                className="gap-2"
              >
                <QrCode className="w-4 h-4" />
                QR-koder
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(
                marketingAssets[
                  selectedAssetCategory as keyof typeof marketingAssets
                ] || []
              ).map(
                (
                  asset: {
                    title: string;
                    description: string;
                    format: string;
                    size: string;
                    usage: string;
                  },
                  index: number
                ) => (
                  <Card
                    key={index}
                    className="border-2 border-slate-200 hover:border-blue-300 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-3 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                            {selectedAssetCategory === "logos" && (
                              <Palette className="w-6 h-6 text-blue-600" />
                            )}
                            {selectedAssetCategory === "posters" && (
                              <Printer className="w-6 h-6 text-green-600" />
                            )}
                            {selectedAssetCategory === "qrcodes" && (
                              <QrCode className="w-6 h-6 text-purple-600" />
                            )}
                          </div>
                          <div className="text-xs text-slate-600">
                            {asset.format}
                          </div>
                        </div>
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">
                        {asset.title}
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">
                        {asset.description}
                      </p>
                      <div className="flex justify-between items-center text-xs text-slate-500 mb-3">
                        <span>{asset.size}</span>
                        <span>{asset.usage}</span>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        <Download className="w-3 h-3 mr-2" />
                        Last ned
                      </Button>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>

          {/* Canva Templates */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-blue-600" />
              Profesjonelle maler (Canva)
            </h3>
            <div className="flex gap-3 mb-4">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                Alle maler
              </Button>
              <Button
                variant={
                  selectedCategory === "recruitment" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory("recruitment")}
              >
                Rekruttering
              </Button>
              <Button
                variant={selectedCategory === "social" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("social")}
              >
                Sosiale medier
              </Button>
              <Button
                variant={
                  selectedCategory === "campaign" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory("campaign")}
              >
                Kampanjer
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTemplates.map((template, index) => (
                <Card
                  key={index}
                  className="border-2 border-slate-200 hover:border-blue-300 transition-colors group"
                >
                  <CardContent className="p-4">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-3 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {template.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-4">
                      {template.description}
                    </p>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 group-hover:shadow-md transition-all"
                      onClick={() => window.open(template.canvaLink, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Rediger i Canva
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Text Suggestions */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Copy className="w-5 h-5 text-green-600" />
              Ferdigskrevne tekster
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Email */}
              <Card className="border-2 border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    E-post
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {textSuggestions.email.map((text, index) => (
                    <div key={index} className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-sm text-slate-700 mb-2 leading-relaxed">
                        {text}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => copyToClipboard(text)}
                      >
                        <Copy className="w-3 h-3 mr-2" />
                        {copiedText === text ? "Kopiert!" : "Kopier tekst"}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-2 border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    Sosiale medier
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {textSuggestions.social.map((text, index) => (
                    <div key={index} className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-sm text-slate-700 mb-2 leading-relaxed">
                        {text}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => copyToClipboard(text)}
                      >
                        <Copy className="w-3 h-3 mr-2" />
                        {copiedText === text ? "Kopiert!" : "Kopier tekst"}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* SMS */}
              <Card className="border-2 border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-purple-600" />
                    SMS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {textSuggestions.sms.map((text, index) => (
                    <div key={index} className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-sm text-slate-700 mb-2 leading-relaxed">
                        {text}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => copyToClipboard(text)}
                      >
                        <Copy className="w-3 h-3 mr-2" />
                        {copiedText === text ? "Kopiert!" : "Kopier tekst"}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Success Examples */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">
                    Suksesshistorie: Viking IL
                  </h3>
                  <p className="text-sm text-green-600">
                    Økte antall støttespillere med 300% på 2 måneder
                  </p>
                </div>
              </div>
              <p className="text-sm text-green-700 mb-4">
                &quot;Vi brukte markedsføringskittet og delte på foreldremøtet.
                Resultatet var fantastisk - vi gikk fra 15 til 60 støttespillere
                på kort tid!&quot;
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-green-300 text-green-700 hover:bg-green-50"
              >
                Les hele historien
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Enhanced Marketing Modal */}
      <EnhancedMarketingModal
        isOpen={showEnhancedMarketing}
        onClose={() => setShowEnhancedMarketing(false)}
      />
    </div>
  );
}
