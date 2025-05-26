"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Copy,
  Facebook,
  Instagram,
  Mail,
  MessageSquare,
  Sparkles,
  Download,
  Upload,
  ImageIcon,
  Palette,
  ExternalLink,
  QrCode,
  Printer,
} from "lucide-react";

interface EnhancedMarketingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnhancedMarketingModal({
  isOpen,
  onClose,
}: EnhancedMarketingModalProps) {
  const [selectedTab, setSelectedTab] = useState("templates");

  const marketingTips = [
    {
      platform: "Facebook",
      icon: Facebook,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      content:
        "Bli med og støtt Støtte IL! 🏐 Med bare noen få kroner i måneden kan du bidra til å gjøre en forskjell for vårt lag. Last ned appen og velg ditt formål i dag! #StøtteIL #Håndball #Støttespiller",
      tips: [
        "Post på kveldstid for best engasjement",
        "Bruk relevante hashtags",
        "Legg ved bilder fra kamper",
      ],
    },
    {
      platform: "Instagram",
      icon: Instagram,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      content:
        "🏐 Bli en verdifull støttespiller for Støtte IL! Små bidrag - stor forskjell 💪 Last ned appen og støtt ditt favorittformål ⬇️ #StøtteIL #Håndball #Mikrodonasjon #SammenErViSterkere",
      tips: [
        "Bruk stories for økt synlighet",
        "Legg til lokasjon",
        "Opprett reels for bedre rekkevidde",
      ],
    },
    {
      platform: "E-post",
      icon: Mail,
      color: "text-green-600",
      bgColor: "bg-green-50",
      content:
        "Hei! Vi har lansert en ny måte å støtte Støtte IL på. Gjennom mikrodonasjoner kan du bidra med små beløp som gjør stor forskjell. Besøk vår side for å lære mer og registrere deg som støttespiller.",
      tips: [
        "Personaliser meldingen",
        "Inkluder tydelig call-to-action",
        "Send på tirsdager for best åpningsrate",
      ],
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            Komplett markedsføringspakke - Støtte IL
          </DialogTitle>
          <DialogDescription>
            Alt du trenger for å markedsføre og rekruttere støttespillere -
            organisert og klar til bruk
          </DialogDescription>
        </DialogHeader>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="templates" className="gap-2">
              <Palette className="w-4 h-4" />
              Maler
            </TabsTrigger>
            <TabsTrigger value="assets" className="gap-2">
              <ImageIcon className="w-4 h-4" />
              Ressurser
            </TabsTrigger>
            <TabsTrigger value="content" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Innhold
            </TabsTrigger>
            <TabsTrigger value="upload" className="gap-2">
              <Upload className="w-4 h-4" />
              Last opp
            </TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Canva-maler tilpasset Støtte IL
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Rekrutteringsplakat A4",
                  "Instagram post",
                  "Facebook banner",
                  "Story template",
                  "E-post header",
                  "QR-kode plakat",
                ].map((template, index) => (
                  <Card
                    key={index}
                    className="border-2 border-slate-200 hover:border-blue-300 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-3 flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">
                        {template}
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Profesjonell mal med låste elementer
                      </p>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Åpne i Canva
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="assets" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-blue-600" />
                    Logoer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Logo høy oppløsning (PNG)",
                    "Logo sosiale medier",
                    "Logo monokrom",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-slate-50 rounded"
                    >
                      <span className="text-sm">{item}</span>
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Printer className="w-5 h-5 text-green-600" />
                    Plakater
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Rekrutteringsplakat A4",
                    "Digital plakat",
                    "Banner 1920x1080",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-slate-50 rounded"
                    >
                      <span className="text-sm">{item}</span>
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-purple-600" />
                    QR-koder
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "QR-kode høy oppløsning",
                    "QR-kode med logo",
                    "QR-kode for print",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-slate-50 rounded"
                    >
                      <span className="text-sm">{item}</span>
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Last ned alt på en gang
                </h3>
                <p className="text-green-700 mb-4">
                  Få hele markedsføringskittet som en ZIP-fil med alle logoer,
                  plakater og QR-koder
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Last ned komplett kit (2.3 MB)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">
                Ferdigskrevne meldinger
              </h3>
              {marketingTips.map((tip, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${tip.bgColor} rounded-lg flex items-center justify-center`}
                      >
                        <tip.icon className={`w-5 h-5 ${tip.color}`} />
                      </div>
                      {tip.platform}
                      <Badge variant="secondary" className="ml-auto">
                        Anbefalt
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {tip.content}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3"
                        onClick={() => copyToClipboard(tip.content)}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Kopier tekst
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">
                        Tips for {tip.platform}:
                      </h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {tip.tips.map((tipText, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            {tipText}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <Card className="border-2 border-dashed border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Last opp lagets bilder
                </h3>
                <p className="text-slate-600 mb-6">
                  Last opp bilder fra kamper, treninger eller arrangementer.
                  Disse blir tilgjengelige i Canva-malene dine.
                </p>
                <div className="space-y-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Velg bilder
                  </Button>
                  <p className="text-xs text-slate-500">
                    Støttede formater: JPG, PNG, WEBP. Maks 10MB per fil.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Dine opplastede bilder
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center"
                  >
                    <ImageIcon className="w-8 h-8 text-slate-400" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Ingen bilder lastet opp ennå
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
