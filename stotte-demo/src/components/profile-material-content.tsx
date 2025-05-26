"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ImageIcon,
  Download,
  Share2,
  Palette,
  Type,
  Layout,
} from "lucide-react";

export function ProfileMaterialContent() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Lag profilmateriell
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Vi har laget ett verktøy slik at du enkelt kan lage lage
            profilmateriell med dine egne bilder og logoer. Disse kan enkelt
            deles på sosiale medier eller lastes ned for bruk i andre
            sammenhenger.
          </p>
        </div>
      </div>

      {/* Example Preview */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl text-slate-800">
            Eksempel på profilmateriell
          </CardTitle>
          <CardDescription>
            Se hvordan ditt profilmateriell kan se ut
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="text-2xl font-bold">
                      BLI EN VERDIFULL STØTTESPILLER
                    </div>
                    <div className="text-lg">Last ned appen Støtte!</div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">S</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Tilpassbare elementer:
                </h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Bakgrunnsbilde</li>
                  <li>• Organisasjonslogo</li>
                  <li>• Tekst og meldinger</li>
                  <li>• Farger og design</li>
                  <li>• QR-koder og lenker</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <ImageIcon className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg text-slate-800">
              Bilderedigering
            </CardTitle>
            <CardDescription>
              Rediger og tilpass bilder med logoer og tekst for sosiale medier
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Åpne editor
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Layout className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg text-slate-800">Maler</CardTitle>
            <CardDescription>
              Bruk forhåndsdefinerte maler for rask og enkel design
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Velg mal
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Type className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg text-slate-800">
              Tekstverktøy
            </CardTitle>
            <CardDescription>
              Legg til og tilpass tekst med forskjellige fonter og farger
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Rediger tekst
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg text-slate-800">
              Fargepaletter
            </CardTitle>
            <CardDescription>
              Velg fra organisasjonens fargepalett eller lag egne kombinasjoner
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Velg farger
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Download className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg text-slate-800">Last ned</CardTitle>
            <CardDescription>
              Eksporter dine design i høy kvalitet for print eller digital bruk
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Eksporter
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-lg text-slate-800">
              Del direkte
            </CardTitle>
            <CardDescription>
              Del dine design direkte til sosiale medier eller send via e-post
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Del innhold
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section - Spread Message */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-slate-800">Spre budskapet</h3>
            <p className="text-slate-600">
              Vi har gjort det enkelt å skape engasjement! Trykke her for å se
              forslag og tips til hvordan du kan dele informasjon om Støtte til
              dine medlemmer.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Se tips og forslag
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
