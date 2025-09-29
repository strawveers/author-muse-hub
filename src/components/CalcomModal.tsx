import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface CalcomModalProps {
  isOpen: boolean;
  onClose: () => void;
  calUrl: string;
  title: string;
}

const CalcomModal = ({ isOpen, onClose, calUrl, title }: CalcomModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-serif text-2xl text-charcoal">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative w-full h-[600px] p-6 pt-0">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-cream">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-gold" />
                <p className="text-muted-foreground">Carregando agendamento...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={calUrl}
            width="100%"
            height="100%"
            className="border-0 rounded-lg"
            onLoad={handleIframeLoad}
            style={{ 
              visibility: isLoading ? 'hidden' : 'visible',
              minHeight: '600px'
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalcomModal;