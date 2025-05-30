import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@shared/schema";
import jungleHouseElevation from "@assets/1500w/view elevation_CShading_LightMix-1500w-low resolution-1500w.jpeg";
import jungleHouseDecking from "@assets/1500w/view decking-1500w-standard v2-1500w.jpeg";
import nayaritPatio from "@assets/1500w/nayarit-patio-largedoor-1500w-standard v2-1500w.jpeg";
import nayaritKitchen from "@assets/1500w/kitchen_skylight-1500w-standard v2-1500w.jpeg";
import eewScreenshot from "@assets/1500w/Screenshot 2024-07-31 144658-1500w-standard v2-1500w.jpeg";
import sensorDetect from "@assets/1500w/sensor-detect-1500w-standard v2-1500w.jpeg";
import batterseaImage from "@assets/1500w/battersea-1-gigapixel-low resolution-2x-1500w-standard v2-1500w.jpeg";
import armchairSlope from "@assets/1500w/armchair slope_chair-1500w-standard v2-1500w.jpeg";
import dimensiva314 from "@assets/1500w/dimensiva_314_chair-1500w-standard v2-1500w.jpeg";
import dimensiva629 from "@assets/1500w/dimensiva_629_chair-1500w-low resolution-1500w.jpeg";
import shardImage from "@assets/1500w/the-shard-gigapixel-low resolution-2x-1500w-standard v2-1500w.jpeg";
import kogeDark from "@assets/1500w/koge-dark-1500w-standard v2-1500w.jpeg";
import kogeLight from "@assets/1500w/koge-1500w-standard v2-1500w.jpeg";
import grilloAd2 from "@assets/1500w/Google-Ad-image2-1500w-standard v2-1500w.jpeg";
import grilloAd3 from "@assets/1500w/Google-Ad-image3-1500w-standard v2-1500w.jpeg";
import grilloAd4 from "@assets/1500w/Google-Ad-image4-1500w-standard v2-1500w.jpeg";
import grilloAd5 from "@assets/1500w/Google-Ad-image5-1500w-standard v2-1500w.jpeg";

// Extended portfolio interface for multiple images
interface ExtendedPortfolioItem extends PortfolioItem {
  images: string[];
  services?: string[];
}

// Portfolio projects
const portfolioProjects: ExtendedPortfolioItem[] = [
  {
    id: 1,
    title: "NAYARIT",
    category: "Architectural Visualization and Design",
    imageUrl: nayaritPatio,
    images: [nayaritPatio, nayaritKitchen],
    description: "Design for house renovation in historic Roma Colonia, Mexico City. Fast turnaround of visuals enabled design changes that kept up with architectural schedule.",
    services: [
      "3D Modelling, lighting and materials",
      "Photorealistic rendering at different times of day",
      "Post-Production with photoshop and stable diffusion"
    ],
    isActive: true,
  },
  {
    id: 2,
    title: "JUNGLE HOUSE",
    category: "Architectural Visualization",
    imageUrl: jungleHouseElevation,
    images: [jungleHouseElevation, jungleHouseDecking],
    description: "Sustainable house design for Yucatan Peninsula, Mexico. Elevated above tree canopy with minimal environmental impact and natural ventilation.\nExtensive use of scatter for vegetation with selected tree and bush models for location accuracy.",
    isActive: true,
  },
  {
    id: 3,
    title: "EARTHQUAKE EARLY WARNING",
    category: "Information Graphics",
    imageUrl: eewScreenshot,
    images: [eewScreenshot],
    description: "Graphics explaining how earthquake early warning systems work. Used by IBM and Linux Foundation for educational and marketing materials.",
    isActive: true,
  },
  {
    id: 4,
    title: "SAFESPOT SENSOR",
    category: "Product Design",
    imageUrl: sensorDetect,
    images: [sensorDetect],
    description: "Hardware sensor prototype design for startup Safespot. 3D visualization for investor presentations and manufacturing specifications.",
    isActive: true,
  },
  {
    id: 5,
    title: "THE SHARD",
    category: "Architectural Visualization",
    imageUrl: shardImage,
    images: [shardImage],
    description: "Marketing imagery for the iconic Shard development in London. High-quality architectural visualization for one of London's most recognizable buildings.",
    isActive: true,
  },
  {
    id: 6,
    title: "BATTERSEA POWER STATION",
    category: "Architectural Visualization",
    imageUrl: batterseaImage,
    images: [batterseaImage],
    description: "Visualization imagery for the historic Battersea Power Station redevelopment in London. Combining heritage preservation with modern residential design.",
    isActive: true,
  },
  {
    id: 7,
    title: "FURNITURE DESIGN STUDIES",
    category: "Product Visualization",
    imageUrl: armchairSlope,
    images: [armchairSlope, dimensiva629, dimensiva314],
    description: "Contemporary chair design studies showcasing different materials, forms, and finishes. High-quality product visualization for furniture manufacturers.",
    isActive: true,
  },
  {
    id: 8,
    title: "KŌGE STATION",
    category: "Architectural Visualization",
    imageUrl: kogeLight,
    images: [kogeLight, kogeDark],
    description: "Modern transit station design featuring circular viewing platforms and integration with natural landscape. Architectural visualization showcasing dramatic interior perspectives.",
    isActive: true,
  },
  {
    id: 9,
    title: "GRILLO ALARM",
    category: "Product Marketing",
    imageUrl: grilloAd2,
    images: [grilloAd2, grilloAd3, grilloAd4, grilloAd5],
    description: "Marketing visuals for Grillo earthquake early warning device. Product visualization and infographics for Google advertising campaign showcasing device connectivity and user experience.",
    isActive: true,
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<ExtendedPortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedItem && currentImageIndex < selectedItem.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleItemSelect = (item: ExtendedPortfolioItem | PortfolioItem) => {
    // Convert PortfolioItem to ExtendedPortfolioItem if needed
    const extendedItem: ExtendedPortfolioItem = 'images' in item 
      ? item as ExtendedPortfolioItem
      : { ...item, images: [item.imageUrl] };
    
    setSelectedItem(extendedItem);
    setCurrentImageIndex(0);
  };
  const { data: portfolioItems, isLoading, error } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDiscussProject = () => {
    setSelectedItem(null); // Close the modal
    scrollToSection("contact"); // Scroll to contact section
  };

  // Use portfolio projects if API fails or returns empty
  const items = portfolioItems?.length ? portfolioItems : portfolioProjects;

  return (
    <section id="work" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>SELECTED WORKS</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            A curated collection showcasing architectural visualization, product design,
            and marketing campaigns for global brands and architectural practices.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={i} className="bg-white shadow-lg">
                <Skeleton className="w-full h-64" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? null : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card
              key={item.id}
              className="gallery-item bg-white shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleItemSelect(item)}
            >
              <div className="overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={`w-full h-64 object-cover rounded-t-lg ${
                    item.title === "JUNGLE HOUSE" ? "object-left scale-125 -ml-8" : 
                    item.title === "FURNITURE DESIGN STUDIES" ? "object-center scale-110" : ""
                  }`}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-normal mb-2">{item.title}</h3>
                <p className="text-accent">{item.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-6xl w-full h-[90vh] p-0">
            {selectedItem && (
              <div className="flex flex-col h-full">
                <DialogHeader className="p-6 pb-4">
                  <DialogTitle className="text-2xl font-light">{selectedItem.title}</DialogTitle>
                </DialogHeader>
                
                <div className="flex-1 p-6 overflow-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 h-full gap-8">
                    <div className="lg:col-span-2">
                      <div className="relative h-[calc(90vh-8rem)] overflow-hidden">
                        <img
                          src={selectedItem.images[currentImageIndex]}
                          alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                          className={`w-full h-full ${
                            selectedItem.title === "FURNITURE DESIGN STUDIES" 
                              ? "object-cover object-center" 
                              : "object-contain object-top"
                          }`}
                        />
                        
                        {selectedItem.images.length > 1 && (
                          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-6">
                            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-6">
                              <span className="text-sm text-accent font-mono">
                                {currentImageIndex + 1} / {selectedItem.images.length}
                              </span>
                              <div className="flex space-x-3">
                                {selectedItem.images.map((_, index) => (
                                  <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                      index === currentImageIndex 
                                        ? 'bg-foreground scale-125' 
                                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-between">
                      <div className="space-y-6">
                        <div>
                          <h3>PROJECT TYPE</h3>
                          <p className="text-accent">{selectedItem.category}</p>
                        </div>
                        
                        {selectedItem.description && (
                          <div>
                            <h3>DESCRIPTION</h3>
                            <p className="text-accent leading-relaxed">{selectedItem.description}</p>
                          </div>
                        )}
                        
                        <div>
                          <h3>SERVICES USED</h3>
                          <div className="space-y-1 text-accent text-sm">
                            {selectedItem.services ? (
                              selectedItem.services.map((service, index) => (
                                <p key={index}>• {service}</p>
                              ))
                            ) : (
                              <>
                                <p>• 3D Modelling, materials and lighting</p>
                                <p>• Photorealistic rendering</p>
                                <p>• Post-Production</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        onClick={handleDiscussProject}
                        className="w-full bg-primary text-white hover:bg-accent transition-colors duration-300 mt-6"
                      >
                        Discuss Similar Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="text-center mt-16">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white px-8 py-3 hover:bg-accent transition-colors duration-300 font-medium"
          >
            DISCUSS A PROJECT
          </Button>
        </div>
      </div>
    </section>
  );
}
