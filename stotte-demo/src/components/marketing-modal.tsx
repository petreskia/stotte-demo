"use client";

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
import {
  Copy,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface MarketingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MarketingModal({ isOpen, onClose }: MarketingModalProps) {
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
    // You could add a toast notification here
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-green-600" />
            Enkel markedsføring
          </DialogTitle>
          <DialogDescription>
            Ferdigskrevne meldinger og tips for å markedsføre Støtte IL på
            sosiale medier
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">85%</div>
                <div className="text-sm text-blue-600">Økt engasjement</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-700">3x</div>
                <div className="text-sm text-green-600">
                  Flere støttespillere
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-700">24t</div>
                <div className="text-sm text-purple-600">Raskere respons</div>
              </CardContent>
            </Card>
          </div>

          {/* Marketing Content */}
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
                        <li key={tipIndex} className="flex items-center gap-2">
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

          {/* Additional Resources */}
          <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Ekstra ressurser</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start gap-2">
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp meldinger
                </Button>
                <Button variant="outline" className="justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  E-post maler
                </Button>
                <Button variant="outline" className="justify-start gap-2">
                  <Twitter className="w-4 h-4" />
                  Twitter innlegg
                </Button>
                <Button variant="outline" className="justify-start gap-2">
                  <Sparkles className="w-4 h-4" />
                  Kampanje ideer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
