import { useEffect, useRef, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

declare global {
  interface Window {
    blinket: {
      start: (config: { selector: string; id: string; template: string }) => void;
    };
  }
}

interface EduzzCheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BLINKET_WIDGET_URL = "https://cdn.eduzzcdn.com/blinket-widget/blinket-widget.js";
const BLINKET_EVENT_ID = "a16afebd-71b4-4f7f-90f5-bf43e4af370b";

const EduzzCheckoutModal = ({ open, onOpenChange }: EduzzCheckoutModalProps) => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const loadWidget = useCallback(() => {
    // Remove previous script if exists
    if (scriptRef.current) {
      scriptRef.current.remove();
      scriptRef.current = null;
    }

    const script = document.createElement("script");
    script.src = `${BLINKET_WIDGET_URL}?${Date.now()}`;
    script.async = true;
    script.onload = () => {
      if (window.blinket) {
        window.blinket.start({
          selector: "#blk_v3_modal",
          id: BLINKET_EVENT_ID,
          template: "v3",
        });
      }
    };
    scriptRef.current = script;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (open) {
      // Small delay to ensure the DOM container is rendered
      const timer = setTimeout(loadWidget, 100);
      return () => clearTimeout(timer);
    } else {
      // Cleanup on close
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    }
  }, [open, loadWidget]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 border-border">
        <DialogTitle className="sr-only">Checkout</DialogTitle>
        <div
          id="blk_v3_modal"
          ref={containerRef}
          className="min-h-[400px] w-full"
        />
      </DialogContent>
    </Dialog>
  );
};

export default EduzzCheckoutModal;
