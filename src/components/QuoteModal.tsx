import { useState } from "react";
import { HiX, HiPlus, HiMinus, HiCheck } from "react-icons/hi";

// 1. Define the structural catalog shape
interface InventoryItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

// 2. Define the explicit Interface for your Component Props
interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INVENTORY_ITEMS: InventoryItem[] = [
  { id: "item-1", name: "Gold Chiavari Chairs", price: 1500, category: "Seating" },
  { id: "item-2", name: "Luxury Banquet Table (Round)", price: 5000, category: "Tables" },
  { id: "item-3", name: "High-Peak Marquee Canopy (100 Seater)", price: 45000, category: "Shelter" },
  { id: "item-4", name: "Soundless Standby Generator (30KVA)", price: 85000, category: "Power" },
  { id: "item-5", name: "Premium Stage Light / Uplighting Set", price: 25000, category: "Lighting" },
  { id: "item-6", name: "Alaga / Traditional Royal Set Decoration", price: 60000, category: "Decor" },
];

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  // Record<string, number> cleanly defines an object structure like: { "item-1": 12, "item-3": 2 }
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [isSent, setIsSent] = useState<boolean>(false);

  const updateQuantity = (itemId: string, amount: number) => {
    setSelectedItems((prev) => {
      const currentQty = prev[itemId] || 0;
      const newQty = currentQty + amount;

      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
      return { ...prev, [itemId]: newQty };
    });
  };

  const calculateTotal = () => {
    return Object.entries(selectedItems).reduce((sum, [itemId, qty]) => {
      const item = INVENTORY_ITEMS.find((i) => i.id === itemId);
      return sum + (item ? item.price * qty : 0);
    }, 0);
  };

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const itemSummary = Object.entries(selectedItems)
      .map(([itemId, qty]) => {
        const item = INVENTORY_ITEMS.find((i) => i.id === itemId);
        return `${item?.name} (Qty: ${qty})`;
      })
      .join(", ");

    console.log("Structured Quote Payload Sent:", { itemSummary, totalEstimate: calculateTotal() });
    setIsSent(true);
  };

  if (!isOpen) return null;

  const handleDirectInputChange = (itemId: string, value: string) => {
    // Convert string input to integer. Fallback to 0 if the field is cleared empty.
    const parsedValue = parseInt(value, 10);
    const newQty = isNaN(parsedValue) ? 0 : parsedValue;

    setSelectedItems((prev) => {
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
      return { ...prev, [itemId]: newQty };
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-body p-4 antialiased">
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-cream-dark max-h-[90vh] flex flex-col overflow-hidden animate-fade-in z-10">

        <div className="p-6 border-b border-cream-dark bg-cream flex justify-between items-center">
          <div>
            <h3 className="font-heading text-2xl text-burgundy">Select Rental Items</h3>
            <p className="text-xs text-mid font-light mt-0.5">Build your custom configuration sheet</p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl text-mid hover:text-burgundy transition-colors p-1 cursor-pointer"
          >
            <HiX />
          </button>
        </div>

        {isSent ? (
          <div className="p-10 text-center flex flex-col items-center justify-center my-auto">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
              <HiCheck className="text-3xl text-gold" />
            </div>
            <h4 className="font-heading text-2xl text-burgundy mb-2">Quote Sheet Registered!</h4>
            <p className="text-mid font-light max-w-sm text-sm mb-6 leading-relaxed">
              Your customized rental lineup has been saved. We are generating your formal estimation slip now.
            </p>
            <button
              onClick={() => { setIsSent(false); setSelectedItems({}); onClose(); }}
              className="bg-gold hover:bg-gold-light text-dark font-semibold py-2.5 px-6 rounded-xl transition-all text-sm cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 overflow-y-auto space-y-4 grow">
              {INVENTORY_ITEMS.map((item) => {
                const qty = selectedItems[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className={`flex justify-between items-center p-4 rounded-xl border transition-all ${qty > 0 ? "border-gold bg-cream/30 shadow-inner" : "border-cream-dark bg-white hover:border-mid/40"
                      }`}
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-burgundy uppercase tracking-wider bg-cream-dark/40 px-2 py-0.5 rounded-md">
                        {item.category}
                      </span>
                      <h4 className="font-semibold text-dark text-sm md:text-base mt-1">{item.name}</h4>
                      <p className="text-xs text-mid font-light">₦{item.price.toLocaleString()} / unit</p>
                    </div>

                    {qty === 0 ? (
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-cream hover:bg-cream-dark border border-cream-dark text-burgundy text-xs font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
                      >
                        Add to List
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-white border border-gold rounded-lg p-1 shadow-sm">
                        {/* Minus Button */}
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center rounded-md bg-cream text-dark hover:bg-cream-dark transition-colors cursor-pointer shrink-0"
                        >
                          <HiMinus className="text-xs" />
                        </button>

                        {/* Editable Typed Input Field */}
                        <input
                          type="number"
                          min="0"
                          value={qty === 0 ? "" : qty} // Prevents a stuck leading zero when users clear the box
                          onChange={(e) => handleDirectInputChange(item.id, e.target.value)}
                          className="w-14 h-7 text-center font-bold text-dark text-sm bg-cream/20 rounded focus:outline-none focus:bg-cream-dark/30 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                        />

                        {/* Plus Button */}
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-md bg-burgundy text-cream hover:bg-burgundy-light transition-colors cursor-pointer shrink-0"
                        >
                          <HiPlus className="text-xs" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-6 border-t border-cream-dark bg-white space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-dark uppercase tracking-wider">Estimated Total:</span>
                <span className="text-2xl font-bold text-burgundy">₦{calculateTotal().toLocaleString()}</span>
              </div>

              <button
                onClick={handleSendQuote}
                disabled={Object.keys(selectedItems).length === 0}
                className={`w-full font-semibold py-3.5 px-6 rounded-xl text-center text-sm md:text-base transition-all duration-200 ${Object.keys(selectedItems).length > 0
                  ? "bg-gold hover:bg-gold-light text-dark shadow-sm cursor-pointer active:scale-[0.99]"
                  : "bg-cream-dark text-mid/50 cursor-not-allowed"
                  }`}
              >
                Confirm Setup selection
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}