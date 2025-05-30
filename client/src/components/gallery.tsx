import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@shared/schema";
import jungleHouseElevation from "@assets/view elevation_CShading_LightMix.jpg";
import jungleHouseDecking from "@assets/view decking.jpg";
import nayaritPatio from "@assets/nayarit-patio-largedoor.jpg";
import nayaritKitchen from "@assets/kitchen_skylight.jpg";
import eewScreenshot from "@assets/Screenshot 2024-07-31 144658.png";
import sensorDetect from "@assets/sensor-detect.png";
import batterseaImage from "@assets/battersea-1-gigapixel-low resolution-2x.jpg";
import armchairSlope from "@assets/armchair slope_chair.jpg";
import dimensiva314 from "@assets/dimensiva_314_chair.jpg";
import dimensiva629 from "@assets/dimensiva_629_chair.jpg";
import shardImage from "@assets/the-shard-gigapixel-low resolution-2x.jpg";
import kogeDark from "@assets/koge-dark.jpg";
import kogeLight from "@assets/koge.jpg";
import grilloAd2 from "@assets/Google-Ad-image2.jpg";
import grilloAd3 from "@assets/Google-Ad-image3.jpg";
import grilloAd4 from "@assets/Google-Ad-image4.jpg";
import grilloAd5 from "@assets/Google-Ad-image5.jpg";

// Extended portfolio interface for multiple images
interface ExtendedPortfolioItem extends PortfolioItem {
  images: string[];
}

// Portfolio projects
const portfolioProjects: ExtendedPortfolioItem[] = [
  {
    id: 1,
    title: "NAYARIT",
    category: "Architectural Visualization",
    imageUrl: nayaritPatio,
    images: [nayaritPatio, nayaritKitchen],
    description: "Design for a house in historic Roma Colonia, Mexico. Contemporary residential architecture respecting the historic neighborhood context.",
    isActive: true,
  },
  {
    id: 2,
    title: "JUNGLE HOUSE",
    category: "Architectural Visualization",
    imageUrl: jungleHouseElevation,
    images: [jungleHouseElevation, jungleHouseDecking],
    description: "Sustainable house design for Yucatan Peninsula, Mexico. Elevated above tree canopy with minimal environmental impact and natural ventilation.",
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">SELECTED WORKS</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            A curated collection of 3D projects showcasing architectural visualization,
            product design, marketing materials.
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
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-lg text-accent mb-4">
              Unable to load portfolio items. Displaying portfolio projects:
            </p>
          </div>
        ) : null}

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
                  className={`w-full h-64 object-cover ${
                    item.title === "JUNGLE HOUSE" ? "object-left scale-125 -ml-8" : 
                    item.title === "FURNITURE DESIGN STUDIES" ? "object-center scale-110" : ""
                  }`}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-accent">{item.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
            {selectedItem && (
              <div className="flex flex-col h-full">
                <DialogHeader className="p-6 pb-4">
                  <DialogTitle className="text-2xl font-light">{selectedItem.title}</DialogTitle>
                </DialogHeader>
                
                <div className="flex-1 p-6 overflow-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                    <div className="lg:col-span-2 flex flex-col">
                      <div className="relative flex-1">
                        <img
                          src={selectedItem.images[currentImageIndex]}
                          alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                          className={`w-full h-full rounded-lg ${
                            selectedItem.title === "FURNITURE DESIGN STUDIES" 
                              ? "object-cover object-center" 
                              : "object-contain object-top"
                          }`}
                        />
                      </div>
                      
                      {selectedItem.images.length > 1 && (
                        <div className="flex items-center justify-center mt-4 space-x-6">
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
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Project Type</h3>
                        <p className="text-accent">{selectedItem.category}</p>
                      </div>
                      
                      {selectedItem.description && (
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Description</h3>
                          <p className="text-accent leading-relaxed">{selectedItem.description}</p>
                        </div>
                      )}
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Services Used</h3>
                        <div className="space-y-1 text-accent text-sm">
                          <p>• 3D Modeling & Visualization</p>
                          <p>• Photorealistic Rendering</p>
                          <p>• Post-Production</p>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button
                          onClick={handleDiscussProject}
                          className="w-full bg-primary text-white hover:bg-accent transition-colors duration-300"
                        >
                          Discuss Similar Project
                        </Button>
                      </div>
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
