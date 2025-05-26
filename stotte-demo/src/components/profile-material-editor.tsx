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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ImageIcon,
  Type,
  Palette,
  Download,
  Share2,
  Upload,
  Sparkles,
} from "lucide-react";

interface ProfileMaterialEditorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileMaterialEditor({
  isOpen,
  onClose,
}: ProfileMaterialEditorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState("supporter");
  const [mainText, setMainText] = useState("BLI EN VERDIFULL STØTTESPILLER");
  const [subText, setSubText] = useState("Last ned appen Støtte!");
  const [backgroundColor, setBackgroundColor] = useState("#3b82f6");

  const templates = [
    { id: "supporter", name: "Støttespiller", preview: "Supporter template" },
    { id: "event", name: "Arrangement", preview: "Event template" },
    {
      id: "recruitment",
      name: "Rekruttering",
      preview: "Recruitment template",
    },
  ];

  const colorPresets = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            Profilmateriell Editor
          </DialogTitle>
          <DialogDescription>
            Lag profesjonelt profilmateriell for sosiale medier og markedsføring
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Editor Panel */}
          <div className="space-y-6 overflow-y-auto">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="content" className="gap-2">
                  <Type className="w-4 h-4" />
                  Innhold
                </TabsTrigger>
                <TabsTrigger value="design" className="gap-2">
                  <Palette className="w-4 h-4" />
                  Design
                </TabsTrigger>
                <TabsTrigger value="media" className="gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Media
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mainText">Hovedtekst</Label>
                  <Input
                    id="mainText"
                    value={mainText}
                    onChange={(e) => setMainText(e.target.value)}
                    placeholder="Skriv hovedtekst..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subText">Undertekst</Label>
                  <Input
                    id="subText"
                    value={subText}
                    onChange={(e) => setSubText(e.target.value)}
                    placeholder="Skriv undertekst..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Beskrivelse</Label>
                  <Textarea
                    id="description"
                    placeholder="Legg til en beskrivelse..."
                    rows={3}
                  />
                </div>
              </TabsContent>

              <TabsContent value="design" className="space-y-4">
                <div className="space-y-2">
                  <Label>Mal</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {templates.map((template) => (
                      <Button
                        key={template.id}
                        variant={
                          selectedTemplate === template.id
                            ? "default"
                            : "outline"
                        }
                        onClick={() => setSelectedTemplate(template.id)}
                        className="justify-start"
                      >
                        {template.name}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Bakgrunnsfarge</Label>
                  <div className="flex gap-2 flex-wrap">
                    {colorPresets.map((color) => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                        onClick={() => setBackgroundColor(color)}
                      />
                    ))}
                  </div>
                  <Input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-full h-10"
                  />
                </div>
              </TabsContent>

              <TabsContent value="media" className="space-y-4">
                <div className="space-y-2">
                  <Label>Last opp bakgrunnsbilde</Label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-600">
                      Dra og slipp eller klikk for å laste opp
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Logo posisjon</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm">
                      Øverst
                    </Button>
                    <Button variant="outline" size="sm">
                      Midten
                    </Button>
                    <Button variant="outline" size="sm">
                      Nederst
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Panel */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Forhåndsvisning</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Last ned
                </Button>
                <Button size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Del
                </Button>
              </div>
            </div>

            <Card className="aspect-video">
              <CardContent className="p-0 h-full">
                <div
                  className="w-full h-full rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden"
                  style={{ backgroundColor }}
                >
                  <div className="text-center space-y-4 z-10">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold">
                      {mainText}
                    </div>
                    <div className="text-lg font-semibold">{subText}</div>
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xl">S</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </CardContent>
            </Card>

            <div className="text-sm text-slate-600">
              <p>
                <strong>Format:</strong> 1920x1080 (Full HD)
              </p>
              <p>
                <strong>Filtype:</strong> PNG, JPG
              </p>
              <p>
                <strong>Størrelse:</strong> ~2MB
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
