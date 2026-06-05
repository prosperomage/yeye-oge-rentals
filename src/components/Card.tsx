import { HiPlus } from "react-icons/hi";

// Define the shape of our inventory data object
export interface InventoryItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  description: string;
}

// Define the Props expected by this card component
interface InventoryCardProps {
  item: InventoryItem;
  onAddToQuote: (itemId: string) => void;
}

const Card = ({ item, onAddToQuote }: InventoryCardProps) => {
  return (
    <div className="font-body bg-white rounded-2xl border border-cream-dark overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full antialiased">

      {/* Aspect Ratio Image Wrapper */}
      <div className="relative aspect-4/3 bg-cream-dark/30 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-mid/40 font-heading text-lg bg-cream/50">
            Yeye Oge Rentals
          </div>
        )}

        {/* Category Tag */}
        <span className="absolute top-4 left-4 bg-burgundy text-cream text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm">
          {item.category}
        </span>
      </div>

      {/* Card Body Details */}
      <div className="p-5 flex flex-col grow">

        {/* Headline utilizing DM Serif Display */}
        <h3 className="font-heading text-xl text-dark mb-1 group-hover:text-burgundy transition-colors duration-200 line-clamp-1">
          {item.name}
        </h3>

        {/* Short description micro-copy */}
        <p className="text-sm text-mid font-light line-clamp-2 leading-relaxed mb-4 grow">
          {item.description}
        </p>

        {/* Divider line using theme palette tints */}
        <div className="border-t border-cream/60 pt-4 flex justify-between items-center mt-auto">
          <div>
            <span className="text-[10px] font-medium text-mid uppercase tracking-widest block">Daily Rate</span>
            <span className="text-xl font-bold text-gold">₦{item.price.toLocaleString()}</span>
          </div>

          {/* Quick-add circular button following the 10% Gold Accent focus */}
          <button
            type="button"
            onClick={() => onAddToQuote(item.id)}
            className="w-10 h-10 rounded-xl bg-gold hover:bg-gold-light text-dark flex items-center justify-center shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
            title="Add item to your quote list"
          >
            <HiPlus className="text-xl" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Card