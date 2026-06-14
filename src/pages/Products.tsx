import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  ShoppingCart, 
  X, 
  Trash2, 
  ShoppingBag, 
  Check, 
  SlidersHorizontal,
  FileCode,
  Copy,
  Info,
  MapPin
} from 'lucide-react';
import { BRAND_DATA } from '../lib/constants';
import { HeroHeader } from '../components/HeroHeader';

interface Product {
  id: string;
  name: string;
  subtitle?: string; // Optional subtitle/alternate heading
  category: 'Yantras' | 'Crystals' | 'Vastu' | 'Bracelets';
  categories: string[]; // Supports multiple categories to ensure full filter alignment
  price: number;
  description: string;
  rating: number;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'surya-yantra',
    name: 'Surya Yantra',
    category: 'Yantras',
    categories: ['Yantras'],
    price: 7999,
    description: 'Gold-plated solar grid for solar activation, leadership, vitality, and authority.',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/d/18oI9OUqPlwxQDii0SxWd9Byjf7Xaqq_7'
  },
  {
    id: 'budh-yantra',
    name: 'Budh Yantra',
    category: 'Yantras',
    categories: ['Yantras'],
    price: 7999,
    description: 'Sacred matrix for Mercury (Budha) to enhance intellect, business decisions, and trade growth.',
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/d/1ih1bR5ro8KkoTrgwFbbubn3Qheg07iL6'
  },
  {
    id: 'budh-pyra-yantra',
    name: 'Budh-Pyra Yantra',
    category: 'Yantras',
    categories: ['Yantras'],
    price: 7999,
    description: 'Pyramid-amplified Mercury grid for rapid analytical clarity, professional focus, and commerce.',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/d/1ih1bR5ro8KkoTrgwFbbubn3Qheg07iL6'
  },
  {
    id: 'pyra-yantra',
    name: 'Pyra Yantra',
    category: 'Yantras',
    categories: ['Yantras'],
    price: 7999,
    description: 'Multi-layered pyramid geometry plate matching prime cosmic frequencies for environmental balance.',
    rating: 4.7,
    image: 'https://lh3.googleusercontent.com/d/1PpZyqI7q5mtXkLQiTujf_dmC6k6vggS1'
  },
  {
    id: 'gayatri-yantra',
    name: 'Gayatri Yantra',
    category: 'Yantras',
    categories: ['Yantras'],
    price: 7999,
    description: 'Supreme radiant grid invoking divine light, spiritual expansion, clear consciousness, and block removal.',
    rating: 5.0,
    image: 'https://lh3.googleusercontent.com/d/1Jda5Y3zceqSb7KveQi7Z30P7FDAYYurd'
  },
  {
    id: 'saraswati-yantra',
    name: 'Saraswati Yantra',
    category: 'Yantras',
    categories: ['Yantras'],
    price: 7999,
    description: 'Refined geometric plate for concentration, artistic mastery, academics, and divine creative wisdom.',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/d/1dL9rmIG6dcsQ4ICB_BPX2kyOaPk0JPtv'
  },
  {
    id: 'surya-pyra-yantra',
    name: 'Surya-Pyra Yantra',
    category: 'Yantras',
    categories: ['Yantras'],
    price: 7999,
    description: 'Pyramid solar grid creating accelerated energy amplification for business prestige and physical strength.',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/d/18oI9OUqPlwxQDii0SxWd9Byjf7Xaqq_7'
  },
  {
    id: 'surya-budh-yantra',
    name: 'Surya-Budh Yantra',
    category: 'Yantras',
    categories: ['Yantras'],
    price: 7999,
    description: 'Budhaditya combination grid that balances logic and action. Triggers profound executive success.',
    rating: 5.0,
    image: 'https://lh3.googleusercontent.com/d/18oI9OUqPlwxQDii0SxWd9Byjf7Xaqq_7'
  },
  {
    id: 'crystal-bracelet',
    name: 'Crystal Bracelet',
    category: 'Bracelets',
    categories: ['Bracelets', 'Crystals'],
    price: 600,
    description: 'Premium amethyst and quartz crystal beads tuned to clear energetic blockages and restore calm focus.',
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/d/1w_vJONo8RfWgo-rdBaPCBzHZwRz84Vzn'
  },
  {
    id: 'wood-crystal-bracelet',
    name: 'Wood Crystal Bracelet',
    category: 'Bracelets',
    categories: ['Bracelets'],
    price: 500,
    description: 'Natural aromatic sandalwood beads matched with genuine Tiger\'s Eye for deep grounding and shield protection.',
    rating: 4.7,
    image: 'https://lh3.googleusercontent.com/d/1HxGOgrqj6E2Uc7z2EC6hKXzZeM6hoBFX'
  },
  {
    id: 'vastu-crystal-set',
    name: 'Max Pyramid',
    category: 'Vastu',
    categories: ['Vastu'],
    price: 6000,
    description: 'Maximum pyramid energy for home, office, and meditation spaces.',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/d/1NcGEeoddDjsl9XPyo5cqIcwTMM6fdJuC'
  },
  {
    id: 'vastu-copper-helix',
    name: 'Navratna for Vastu',
    subtitle: 'Navarathna Set Box for Bhoomi Pooja & Good Vastu | 7×5 mm',
    category: 'Vastu',
    categories: ['Vastu'],
    price: 2500,
    description: 'Nine planets. One foundation. A lifetime of cosmic harmony.',
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/d/16PaRL-J3cJ9NYytzyvEdROAnyKBmYknm'
  }
];

interface CartItem {
  product: Product;
  quantity: number;
}

const PRODUCT_DETAILED_BULLETS: Record<string, string[]> = {
  'surya-yantra': [
    "Low energy, self-doubt, or lack of direction — Surya yantra works on all three",
    "Channels the raw power of the Sun to restore confidence and inner fire",
    "Strengthens willpower, ambition, and your ability to lead with authority",
    "A powerful tool for anyone in a growth phase or navigating major life decisions",
    "Energised to fuel fearless action, clarity of purpose, and lasting personal growth"
  ],
  'budh-yantra': [
    "Stress, mental fog, and communication breakdowns — Mercury yantra addresses all three",
    "Realigns the nervous system and thought process for sharper, calmer functioning",
    "Removes energetic blockages that cloud judgment and strain relationships",
    "A precision tool for professionals, decision-makers, and deep thinkers under pressure",
    "Ritually energised to restore mental clarity, emotional balance, and confident expression"
  ],
  'budh-pyra-yantra': [
    "Two powerful energies, one complete remedy for mind and heart",
    "Budh governs logic, communication, and sharp decisive thinking",
    "Pyra governs emotional healing and astrological chart realignment",
    "Ideal for mental clutter, strained relationships, or persistently off-balance life phases",
    "Energised for those ready to think better, feel lighter, and live with renewed clarity"
  ],
  'pyra-yantra': [
    "One yantra. Total life stabilisation across relationships, health, and finances",
    "Targets the root cause — missing energies in your personal numerology chart",
    "Rebuilds your energetic foundation so every area of life can move forward again",
    "Not a quick fix — a deep, lasting realignment of your life's natural rhythm",
    "Ritually activated using authentic Vedic methods for precise, purposeful correction"
  ],
  'gayatri-yantra': [
    "Spiritual protection, emotional healing, and inner strength — when you need it most",
    "Specifically designed for difficult life phases — illness, emotional crisis, or dark nights of the soul",
    "Works on the energetic level to restore resilience, hope, and clarity of spirit",
    "A sacred tool trusted across generations to shield, uplift, and realign",
    "Fully energised and activated to serve as your most reliable anchor in uncertain times"
  ],
  'saraswati-yantra': [
    "Struggling with focus, creative blocks, or slow learning — Saraswati yantra works at the source",
    "Activates memory, sharpens concentration, and restores natural flow in thought and expression",
    "The ideal energetic tool for students facing exams, creators chasing breakthroughs, and teachers seeking deeper impact",
    "Works across all disciplines — academic, artistic, spiritual, and professional",
    "Charged for measurable clarity of mind, accelerated learning, and effortless brilliance in expression"
  ],
  'surya-pyra-yantra': [
    "Two forces. One complete solution for vitality, relationships, and energetic alignment",
    "Surya rebuilds life force, drive, and the confidence to move forward with clarity",
    "Pyra's Loshu Grid corrects missing chart elements and restores harmony in family and personal energy",
    "Addresses the root numerological gaps that silently affect health, relationships, and momentum",
    "A high-impact yantra for anyone feeling persistently low, disconnected, or energetically incomplete"
  ],
  'surya-budh-yantra': [
    "Indecision, mental fog, and low confidence — this dual yantra targets all three at the source",
    "Surya activates leadership energy, self-belief, and unwavering personal direction",
    "Budh sharpens analytical thinking, emotional intelligence, and clear decisive communication",
    "A precision tool for professionals, leaders, and individuals in high-stakes personal or career transitions",
    "Ritually energised using Vedic methods for deep, measurable, and long-lasting transformation"
  ],
  'crystal-bracelet': [
    "The numbers missing from your birth date shape your struggles more than you realise",
    "Absence of 2, 5, or 8 creates mental turbulence, emotional reactivity, and energetic depletion",
    "This yantra directly corrects those gaps — calming the mind, cooling the temperament, restoring flow",
    "Delivers measurable clarity and stronger decision-making regardless of your numeroscope's completeness",
    "Compact, purposeful, and deeply effective — your daily anchor for focus, balance, and lasting alignment"
  ],
  'wood-crystal-bracelet': [
    "Missing 3 or 4 in your numeroscope creates restlessness, health imbalances, and eroding confidence",
    "This yantra directly targets those numerological gaps with focused, corrective energy",
    "Clears aura-based blockages that conventional remedies simply cannot reach",
    "Natural wood and crystal work in harmony — one anchors, the other heals and amplifies",
    "A precise, elegant, and powerfully effective tool for those ready to restore balance at the root level"
  ],
  'vastu-crystal-set': [
    "Maximum pyramid energy for home, office, and meditation spaces.",
    "The South-East governs nourishment; the South-West governs bonds — this yantra speaks to both",
    "Place it with intention in your kitchen or relationship zone and feel the shift unfold gradually",
    "For deeper imbalances, bury it in the earth and let it work silently at the soil's energetic core",
    "Energised to harmonise direction, space, and the invisible forces that shape how your home truly feels"
  ],
  'vastu-copper-helix': [
    "Nine sacred gemstones, one powerful remedy — the Navaratna set channels the combined energy of all nine planetary forces into your home's foundation",
    "Installed at the centre of the foundation before construction begins, anchoring cosmic balance into the very structure of your space",
    "Each gemstone corresponds to a specific planet — correcting imbalances, neutralising doshas, and inviting prosperity, health, and harmony from the ground up",
    "A time-honoured Vedic practice that transforms your home into an energetically protected and positively charged living environment",
    "Energised and ritually activated to ensure every room above it benefits from stable, harmonious, and uninterrupted planetary flow"
  ]
};

const PRODUCT_GALLERIES: Record<string, string[]> = {
  'surya-yantra': [
    'https://lh3.googleusercontent.com/d/18oI9OUqPlwxQDii0SxWd9Byjf7Xaqq_7',
    'https://lh3.googleusercontent.com/d/1T7q2so20z691C0zr1X7U5ozU1sxbQA-h',
    'https://lh3.googleusercontent.com/d/1HaECHyqDsi4u3HgQ2aQddmqYi7BMqx7p',
    'https://lh3.googleusercontent.com/d/1KG8NNQ9-Z-l4hybVmoYKugTi94ij1o0j'
  ],
  'budh-yantra': [
    'https://lh3.googleusercontent.com/d/1ih1bR5ro8KkoTrgwFbbubn3Qheg07iL6',
    'https://lh3.googleusercontent.com/d/13-njqro_Hc0fYvwgCkFO443GptgEnqgR',
    'https://lh3.googleusercontent.com/d/162a_bZWUebZ9ffpCmoCflqdJn1lrkuNa',
    'https://lh3.googleusercontent.com/d/1PSDzpABHR2rDVPXr4SFFL4a5L4oy6DdC'
  ],
  'budh-pyra-yantra': [
    'https://lh3.googleusercontent.com/d/1ih1bR5ro8KkoTrgwFbbubn3Qheg07iL6',
    'https://lh3.googleusercontent.com/d/1PpZyqI7q5mtXkLQiTujf_dmC6k6vggS1',
    'https://lh3.googleusercontent.com/d/1XzKvx2OEtwsbXeqFSJHfNd4icGqMXNtn',
    'https://lh3.googleusercontent.com/d/12UyKiXog-ulOs2Fk3lL_J0i-h-9btNLe'
  ],
  'pyra-yantra': [
    'https://lh3.googleusercontent.com/d/1PpZyqI7q5mtXkLQiTujf_dmC6k6vggS1',
    'https://lh3.googleusercontent.com/d/13-njqro_Hc0fYvwgCkFO443GptgEnqgR',
    'https://lh3.googleusercontent.com/d/12UyKiXog-ulOs2Fk3lL_J0i-h-9btNLe',
    'https://lh3.googleusercontent.com/d/1vasvw1inCM-MOHxPbUb83D0SUPrerxOm'
  ],
  'gayatri-yantra': [
    'https://lh3.googleusercontent.com/d/1Jda5Y3zceqSb7KveQi7Z30P7FDAYYurd',
    'https://lh3.googleusercontent.com/d/1YmyZ2mTpPoj7lvkVftKcn7hICwAttMC6',
    'https://lh3.googleusercontent.com/d/1x2TycGVMflmXv92kpVoFuPPI-OQb9CuY',
    'https://lh3.googleusercontent.com/d/13-njqro_Hc0fYvwgCkFO443GptgEnqgR'
  ],
  'saraswati-yantra': [
    'https://lh3.googleusercontent.com/d/1dL9rmIG6dcsQ4ICB_BPX2kyOaPk0JPtv',
    'https://lh3.googleusercontent.com/d/1IQynURnLVBUAhtakk9VDVrsP_a5Ni2Pc',
    'https://lh3.googleusercontent.com/d/1tRqSAchjv0PJ_M19gVBjyygTceYdi8kW',
    'https://lh3.googleusercontent.com/d/13-njqro_Hc0fYvwgCkFO443GptgEnqgR'
  ],
  'surya-pyra-yantra': [
    'https://lh3.googleusercontent.com/d/18oI9OUqPlwxQDii0SxWd9Byjf7Xaqq_7',
    'https://lh3.googleusercontent.com/d/1PpZyqI7q5mtXkLQiTujf_dmC6k6vggS1',
    'https://lh3.googleusercontent.com/d/12UyKiXog-ulOs2Fk3lL_J0i-h-9btNLe',
    'https://lh3.googleusercontent.com/d/1HaECHyqDsi4u3HgQ2aQddmqYi7BMqx7p'
  ],
  'surya-budh-yantra': [
    'https://lh3.googleusercontent.com/d/1Ij5ia2AbiqHKmwmCOqGa0RhXR2RUcTzO',
    'https://lh3.googleusercontent.com/d/1XzKvx2OEtwsbXeqFSJHfNd4icGqMXNtn',
    'https://lh3.googleusercontent.com/d/162a_bZWUebZ9ffpCmoCflqdJn1lrkuNa',
    'https://lh3.googleusercontent.com/d/1HaECHyqDsi4u3HgQ2aQddmqYi7BMqx7p'
  ],
  'crystal-bracelet': [
    'https://lh3.googleusercontent.com/d/1w_vJONo8RfWgo-rdBaPCBzHZwRz84Vzn',
    'https://lh3.googleusercontent.com/d/1ZFXYUYT3tSieHypiCYfs3Bo9f48rF2sX',
    'https://lh3.googleusercontent.com/d/1xFFmrjDujtaZvjxV5loG52cuYGsOzxwn',
    'https://lh3.googleusercontent.com/d/1SCQk9P6Ox1RCkKjYMnEcbct_jsHUpnQN'
  ],
  'wood-crystal-bracelet': [
    'https://lh3.googleusercontent.com/d/1HxGOgrqj6E2Uc7z2EC6hKXzZeM6hoBFX',
    'https://lh3.googleusercontent.com/d/1gIbEAo4N_VrCyIfRla69OT5HmJ8Js7ys',
    'https://lh3.googleusercontent.com/d/1J3IGWqNewiNRP_HqHGQlkNreKMHTjMBz',
    'https://lh3.googleusercontent.com/d/1S_gLEjsYW0sW2p105nKeERMCSMVoNQfj'
  ],
  'vastu-crystal-set': [
    'https://lh3.googleusercontent.com/d/1NcGEeoddDjsl9XPyo5cqIcwTMM6fdJuC',
    'https://lh3.googleusercontent.com/d/1RSFxLvpr-v4seP6-lQN1lHSnmKgnFTib'
  ],
  'vastu-copper-helix': [
    'https://lh3.googleusercontent.com/d/16PaRL-J3cJ9NYytzyvEdROAnyKBmYknm',
    'https://lh3.googleusercontent.com/d/1E5p9HiMuYQ3mnaa3WYltA9T6Ku-goRP5'
  ]
};

export default function Products() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat && ['All', 'Yantras', 'Crystals', 'Vastu', 'Bracelets'].includes(cat)) {
      return cat;
    }
    return 'All';
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat && ['All', 'Yantras', 'Crystals', 'Vastu', 'Bracelets'].includes(cat)) {
      setSelectedCategory(cat);
    } else if (!cat) {
      setSelectedCategory('All');
    }
  }, [location.search]);

  const [sortBy, setSortBy] = useState<string>('Default');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showHtmlCodeModal, setShowHtmlCodeModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [addedNotification, setAddedNotification] = useState<string | null>(null);

  // Detail Modal states
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [detailActiveImgIndex, setDetailActiveImgIndex] = useState<number>(0);
  const [pincodeInput, setPincodeInput] = useState<string>('');
  const [pincodeStatus, setPincodeStatus] = useState<{ checked: boolean; msg: string; success: boolean } | null>(null);

  const handleOpenProductDetails = (product: Product) => {
    setSelectedProductForDetail(product);
    setDetailActiveImgIndex(0);
    setPincodeInput('');
    setPincodeStatus(null);
  };

  const getGalleryImages = (id: string): string[] => {
    return PRODUCT_GALLERIES[id] || [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500',
      'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=500',
      'https://images.unsplash.com/photo-1508189860359-777d945909ef?w=500'
    ];
  };

  const getProductBullets = (id: string): string[] => {
    return PRODUCT_DETAILED_BULLETS[id] || [
      "Individually energized under highly precise planetary time windows (Nakshatra transit).",
      "Corrects elemental vastu imbalances and restores active energy pathways.",
      "Assigned specifically to align with your personal destiny coordinates upon purchase.",
      "Clears heavy vibrations to foster continuous growth, protective focus, and peace."
    ];
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincodeInput || pincodeInput.trim().length !== 6 || isNaN(Number(pincodeInput))) {
      setPincodeStatus({
        checked: true,
        msg: "Please enter a valid 6-digit postal code/pincode.",
        success: false
      });
      return;
    }
    
    // Valid 6 digit number
    setPincodeStatus({
      checked: true,
      msg: `✓ Standard delivery to ${pincodeInput} is available in 2-4 Days. Complementary Nakshatra Energization scheduled!`,
      success: true
    });
  };

  // Load cart from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('destiny_products_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart storage', e);
      }
    }
  }, []);

  // Save cart to local storage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('destiny_products_cart', JSON.stringify(newCart));
  };

  const categories = ['All', 'Yantras', 'Crystals', 'Vastu', 'Bracelets'];

  // Handle adding to cart
  const handleAddToCart = (product: Product) => {
    const existingIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      saveCart(updated);
    } else {
      saveCart([...cart, { product, quantity: 1 }]);
    }
    
    // Set notification
    setAddedNotification(product.name);
    setTimeout(() => {
      setAddedNotification(null);
    }, 2500);
  };

  // Update quantities
  const updateQuantity = (id: string, delta: number) => {
    const updated = cart.map(item => {
      if (item.product.id === id) {
        const qty = item.quantity + delta;
        return { ...item, quantity: qty < 1 ? 1 : qty };
      }
      return item;
    });
    saveCart(updated);
  };

  // Remove from cart
  const removeFromCart = (id: string) => {
    const updated = cart.filter(item => item.product.id !== id);
    saveCart(updated);
  };

  // Calculate cart metrics
  const totalItemsCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }, [cart]);

  // Handle WhatsApp Checkout
  const handleCheckoutWhatsApp = () => {
    const phone = BRAND_DATA.phone.replace(/[^0-9]/g, '') || '919845012345'; // fallback if needed
    const introText = `Hello Destiny Numbers, I would like to order the following sacred products:\n\n`;
    const itemsText = cart.map((item, index) => {
      return `${index + 1}. ${item.product.name} (x${item.quantity}) — ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`;
    }).join('\n');
    
    const finalTotalText = `\n\nTotal Cart Value: ₹${cartTotal.toLocaleString('en-IN')}\n\nThank you! Please share payment and delivery details.`;
    const fullMessage = encodeURIComponent(introText + itemsText + finalTotalText);
    window.open(`https://wa.me/${phone}?text=${fullMessage}`, '_blank');
  };

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(product => {
        // Match either primary category or arrays
        return product.categories.includes(selectedCategory);
      });
    }

    // Sort by price
    if (sortBy === 'Price Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price High to Low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, sortBy]);

  // Standalone Single-File HTML Generation
  const standaloneHtmlCode = useMemo(() => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sacred Products - DestinyNumbers.in</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Beautiful typography pairings requested: Cinzel (heading) and Inter (body) -->
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            display: ['Cinzel', 'Georgia', 'serif'],
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            mysticNavy: '#1C3557',
            royalGold: '#C9A84C',
            warmBg: '#FAFAF8',
            warmSurface: '#FFFFFF',
            warmBorder: '#E8E2D8',
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #FAFAF8;
      font-family: 'Inter', sans-serif;
    }
    /* Specific styling demands */
    .font-serif-cinzel {
      font-family: 'Cinzel', Georgia, serif;
    }
    .custom-card-hover {
      transition: all 0.3s ease;
    }
    .custom-card-hover:hover {
      transform: translateY(-4px);
      border-color: #C9A84C;
      box-shadow: 0 12px 24px rgba(28, 53, 87, 0.04);
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  </style>
</head>
<body class="text-gray-800 selection:bg-yellow-100 min-h-screen flex flex-col justify-between">

  <!-- Header Section -->
  <header class="bg-white border-b border-warmBorder sticky top-0 z-[40] py-4 shadow-sm">
    <div class="max-w-[1140px] mx-auto px-6 flex items-center justify-between">
      <div class="flex flex-col">
        <h1 class="text-xl font-bold tracking-wide text-mysticNavy font-serif-cinzel leading-none">
          DESTINY<span class="text-royalGold">NUMBERS</span>
        </h1>
        <span class="text-[9px] uppercase tracking-widest text-[#8A8A8A] mt-1 font-semibold">Scientific sacred geometry</span>
      </div>
      
      <!-- Cart Trigger with count -->
      <button onclick="toggleCartDrawer(true)" class="relative p-2.5 bg-mysticNavy text-white hover:bg-[#12284c] transition-colors rounded-none flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-royalGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span id="cart-nav-badge" class="absolute -top-1 -right-1 bg-royalGold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-sans">0</span>
        <span class="text-xs font-semibold uppercase tracking-wider font-sans hidden sm:inline px-1">Cart</span>
      </button>
    </div>
  </header>

  <!-- Main Grid Page -->
  <main class="max-w-[1140px] mx-auto px-6 py-12 flex-grow w-full">
    
    <!-- Title Area -->
    <div class="text-center mb-12">
      <span class="text-xs font-bold tracking-widest uppercase text-royalGold block mb-2">Sacred Energy Enriched Elements</span>
      <h2 class="text-3xl md:text-5xl text-mysticNavy font-serif-cinzel italic font-semibold leading-tight mb-4">Sacred Products</h2>
      <p class="text-[14px] text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
        Complementary-consultation aligned products, energized on chosen Nakshatras by master practitioners. Select your planetary resonators.
      </p>
    </div>

    <!-- Filter and Sort Bar -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-warmBorder">
      <!-- Filters (Horizontal) -->
      <div class="flex gap-2.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
        <button onclick="filterCategory('All')" class="category-btn active px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase border border-royalGold bg-mysticNavy text-white transition-colors" data-cat="All">All</button>
        <button onclick="filterCategory('Yantras')" class="category-btn px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase border border-warmBorder bg-white text-mysticNavy hover:border-royalGold transition-colors" data-cat="Yantras">Yantras</button>
        <button onclick="filterCategory('Crystals')" class="category-btn px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase border border-warmBorder bg-white text-mysticNavy hover:border-royalGold transition-colors" data-cat="Crystals">Crystals</button>
        <button onclick="filterCategory('Vastu')" class="category-btn px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase border border-warmBorder bg-white text-mysticNavy hover:border-royalGold transition-colors" data-cat="Vastu">Vastu</button>
        <button onclick="filterCategory('Bracelets')" class="category-btn px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase border border-warmBorder bg-white text-mysticNavy hover:border-royalGold transition-colors" data-cat="Bracelets">Bracelets</button>
      </div>

      <!-- Live Counter & Sort option -->
      <div class="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
        <span class="text-xs text-gray-500 font-medium">Viewing <strong id="product-count" class="text-mysticNavy font-semibold">12</strong> products</span>
        <div class="flex items-center gap-2">
          <label for="price-sort" class="text-xs text-gray-500 hidden sm:inline">Sort:</label>
          <select id="price-sort" onchange="sortProducts(this.value)" class="bg-white border border-warmBorder px-3 py-1.5 text-xs text-mysticNavy outline-none focus:border-royalGold font-sans font-medium">
            <option value="Default">Default</option>
            <option value="LowToHigh">Price: Low to High</option>
            <option value="HighToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Product Live Grid -->
    <div id="product-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Filled programmatically with JS -->
    </div>
  </main>

  <!-- Slider of the Cart (Hidden Side panel Drawer) -->
  <div id="cart-drawer-overlay" class="fixed inset-0 bg-black/40 backdrop-blur-xs z-[100] hidden transition-opacity" onclick="toggleCartDrawer(false)"></div>
  <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-[420px] bg-white shadow-2xl z-[101] transform translate-x-full transition-transform duration-300 flex flex-col justify-between">
    <!-- Header cart -->
    <div class="p-6 border-b border-warmBorder flex items-center justify-between bg-mysticNavy text-white">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-royalGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span class="font-serif-cinzel font-semibold tracking-wide text-md">Your Sacred Bag</span>
      </div>
      <button onclick="toggleCartDrawer(false)" class="p-1 hover:text-royalGold transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Scrollable cart items list -->
    <div id="cart-items-container" class="flex-grow p-6 overflow-y-auto space-y-5">
      <!-- Empty state -->
      <div id="cart-empty-view" class="text-center py-16 space-y-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p class="text-xs text-gray-500 font-medium italic">Your bag is currently empty.</p>
        <button onclick="toggleCartDrawer(false)" class="inline-block mt-2 px-6 py-2 border border-mysticNavy text-mysticNavy hover:bg-mysticNavy hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest">Shop Now</button>
      </div>
      <!-- Items programmatically shown here -->
    </div>

    <!-- Footer cart -->
    <div id="cart-summary-block" class="p-6 border-t border-warmBorder bg-[#FAFAF8] space-y-4 hidden">
      <div class="flex justify-between items-center text-xs text-gray-600 font-light">
        <span>Subtotal</span>
        <span id="cart-subtotal-text" class="font-semibold text-mysticNavy">₹0</span>
      </div>
      <div class="flex justify-between items-center text-xs text-gray-600 font-light pb-2">
        <span class="flex items-center gap-1.5">Remedy Energization Fee <a href="#" class="group relative text-royalGold text-[10px] border border-royalGold/30 px-1 rounded-full hover:bg-royalGold hover:text-white">? <span class="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-mysticNavy text-white text-[9px] w-48 leading-relaxed rounded-md shadow-lg pointer-events-none">Every item is charged with planetary affirmations on suitable constellations (nakshatras). Included free of cost.</span></a></span>
        <span class="font-semibold text-green-600 uppercase tracking-widest text-[9px] font-bold">Complementary</span>
      </div>
      <div class="h-px bg-warmBorder"></div>
      <div class="flex justify-between items-center text-sm font-sans">
        <span class="font-bold text-mysticNavy uppercase text-xs tracking-wider">Estimated Total</span>
        <span id="cart-grandtotal-text" class="font-bold text-royalGold text-base">₹0</span>
      </div>
      
      <button onclick="checkoutToWhatsApp()" class="w-full py-4 bg-mysticNavy text-white hover:bg-[#12284c] transition-colors flex items-center justify-center gap-3 font-semibold text-xs tracking-widest uppercase shadow-md leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.261 2.264 3.504 5.275 3.502 8.483-.005 6.66-5.342 11.997-11.95 11.997-2.005-.001-3.973-.502-5.723-1.455L0 24zm6.29-3.722c1.61.956 3.197 1.467 4.704 1.468 5.511 0 9.991-4.485 9.995-10.004.002-2.673-1.033-5.184-2.915-7.07C16.248 2.782 13.75 1.742 11.01 1.74c-5.508 0-9.988 4.485-9.992 10.004-.001 1.79.48 3.528 1.393 5.088L1.4 21.135l4.947-1.296z"/>
          <path d="M16.91 13.56c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.5-.16-.72.16-.21.32-.83 1.04-1.01 1-.18-.08-.36-.18-.72-.37-1.12-.51-2.02-1.09-2.82-1.87-.19-.19-.38-.37-.56-.56-.17-.18-.04-.26.06-.34.09-.08.18-.21.28-.32.1-.1.13-.18.2-.31.06-.13.03-.24-.01-.32-.05-.08-.42-1.01-.58-1.39-.15-.36-.31-.3-.43-.31h-.37c-.13 0-.34.05-.52.24-.18.19-.7.68-.7 1.66s.71 1.93.81 2.06c.1.13 1.41 2.15 3.41 3.01.48.2 1 .25 1.37.2.41-.06 1.89-.78 2.15-1.53c.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.61-.37z"/>
        </svg>
         Order via WhatsApp
      </button>
    </div>
  </div>

  <!-- Footer general -->
  <footer class="bg-[#2C2C2C] text-white/70 text-xs py-8 border-t border-gray-800">
    <div class="max-w-[1140px] mx-auto px-6 text-center space-y-2">
      <p class="font-serif-cinzel text-white text-sm font-semibold tracking-wide">DESTINY NUMBERS</p>
      <p>Scientific Vedic Remedies & Resonance Correction.</p>
      <p class="text-gray-500 pt-2">© 2026 Destiny Numbers. All rights reserved.</p>
    </div>
  </footer>

  <script>
    // Live product database
    const PRODUCTS = [
      { id: '1', name: 'Surya Yantra', category: 'Yantras', categories: ['Yantras'], price: 7999, description: 'Gold-plated solar grid for solar activation, leadership, vitality, and authority.', rating: 4.9, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500' },
      { id: '2', name: 'Budh Yantra', category: 'Yantras', categories: ['Yantras'], price: 7999, description: 'Sacred matrix for Mercury (Budha) to enhance intellect, business decisions, and trade growth.', rating: 4.8, image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500' },
      { id: '3', name: 'Budh-Pyra Yantra', category: 'Yantras', categories: ['Yantras'], price: 7999, description: 'Pyramid-amplified Mercury grid for rapid analytical clarity, professional focus, and commerce.', rating: 4.9, image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=500' },
      { id: '4', name: 'Pyra Yantra', category: 'Yantras', categories: ['Yantras'], price: 7999, description: 'Multi-layered pyramid geometry plate matching prime cosmic frequencies for environmental balance.', rating: 4.7, image: 'https://images.unsplash.com/photo-1508189860359-777d945909ef?w=500' },
      { id: '5', name: 'Gayatri Yantra', category: 'Yantras', categories: ['Yantras'], price: 7999, description: 'Supreme radiant grid invoking divine light, spiritual expansion, clear consciousness, and block removal.', rating: 5.0, image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500' },
      { id: '6', name: 'Saraswati Yantra', category: 'Yantras', categories: ['Yantras'], price: 7999, description: 'Refined geometric plate for concentration, artistic mastery, academics, and divine creative wisdom.', rating: 4.9, image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=500' },
      { id: '7', name: 'Surya-Pyra Yantra', category: 'Yantras', categories: ['Yantras'], price: 7999, description: 'Pyramid solar grid creating accelerated energy amplification for business prestige and physical strength.', rating: 4.9, image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500' },
      { id: '8', name: 'Surya-Budh Yantra', category: 'Yantras', categories: ['Yantras'], price: 7999, description: 'Budhaditya combination grid that balances logic and action. Triggers profound executive success.', rating: 5.0, image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=500' },
      { id: '9', name: 'Crystal Bracelet', category: 'Bracelets', categories: ['Bracelets', 'Crystals'], price: 600, description: 'Premium amethyst and quartz crystal beads tuned to clear energetic blockages and restore calm focus.', rating: 4.8, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500' },
      { id: '10', name: 'Wood Crystal Bracelet', category: 'Bracelets', categories: ['Bracelets'], price: 500, description: "Natural aromatic sandalwood beads matched with genuine Tiger's Eye for deep grounding and shield protection.", rating: 4.7, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500' },
      { id: '11', name: 'Max Pyramid', category: 'Vastu', categories: ['Vastu'], price: 6000, description: 'Maximum pyramid energy for home, office, and meditation spaces.', rating: 4.9, image: 'https://lh3.googleusercontent.com/d/1NcGEeoddDjsl9XPyo5cqIcwTMM6fdJuC' },
      { id: '12', name: 'Navratna for Vastu', subtitle: 'Navarathna Set Box for Bhoomi Pooja & Good Vastu | 7×5 mm', category: 'Vastu', categories: ['Vastu'], price: 2500, description: 'Nine planets. One foundation. A lifetime of cosmic harmony.', rating: 4.8, image: 'https://lh3.googleusercontent.com/d/16PaRL-J3cJ9NYytzyvEdROAnyKBmYknm' }
    ];

    let currentCategory = 'All';
    let currentSort = 'Default';
    let cart = [];

    // Initialize Page
    function init() {
      // Load cart from LocalStorage
      const saved = localStorage.getItem('stand_products_cart');
      if (saved) {
        try { cart = JSON.parse(saved); } catch(e) {}
      }
      renderProducts();
      updateCartUI();
    }

    // Render Grid
    function renderProducts() {
      const grid = document.getElementById('product-grid');
      grid.innerHTML = '';

      // Filter
      let list = [...PRODUCTS];
      if (currentCategory !== 'All') {
        list = list.filter(p => p.categories.includes(currentCategory));
      }

      // Sort
      if (currentSort === 'LowToHigh') {
        list.sort((a,b) => a.price - b.price);
      } else if (currentSort === 'HighToLow') {
        list.sort((a,b) => b.price - a.price);
      }

      // Count
      document.getElementById('product-count').innerText = list.length;

      // Cards creation
      list.forEach(p => {
        const ratingStars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
        const cardHtml = \`
          <div class="bg-white border border-warmBorder overflow-hidden relative flex flex-col justify-between custom-card-hover text-left p-3.5 sm:p-5">
            <div>
              <!-- Image + Category tag -->
              <div class="relative bg-gray-50 aspect-square w-full overflow-hidden mb-4 border border-warmBorder/40">
                <img src="\${p.image}" alt="\${p.name}" class="w-full h-full object-cover select-none">
                <span class="absolute top-2 left-2 bg-mysticNavy text-white font-sans text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-none z-10">\${p.category}</span>
              </div>
              
              <!-- Name & desc -->
              <h4 class="text-mysticNavy text-sm sm:text-base font-bold font-sans tracking-wide leading-tight mb-1 truncate">\${p.name}</h4>
              <p class="text-[11px] text-gray-500 font-light leading-snug mb-3 line-clamp-2 h-8">\${p.description}</p>
            </div>

            <div>
              <!-- Stars -->
              <div class="flex items-center gap-1.5 mb-2.5">
                <span class="text-royalGold text-xs sm:text-sm leading-none">\${ratingStars}</span>
                <span class="text-[10px] text-[#8A8A8A] font-medium font-sans">\${p.rating}</span>
              </div>

              <!-- Price and Buy -->
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 pt-2 border-t border-warmBorder/60">
                <span class="text-sm font-bold text-mysticNavy font-sans whitespace-nowrap">₹\${p.price.toLocaleString('en-IN')}</span>
                <button onclick="addToCart('\${p.id}')" class="w-full sm:w-auto px-4 py-2 bg-mysticNavy text-white hover:bg-[#12284c] transition-colors font-sans font-bold text-[10px] uppercase tracking-wider rounded-none leading-none select-none">Add to Cart</button>
              </div>
            </div>
          </div>
        \`;
        grid.innerHTML += cardHtml;
      });
    }

    // Filter Buttons state
    function filterCategory(cat) {
      currentCategory = cat;
      const btns = document.querySelectorAll('.category-btn');
      btns.forEach(b => {
        if (b.getAttribute('data-cat') === cat) {
          b.className = "category-btn px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase border border-royalGold bg-mysticNavy text-white transition-colors";
        } else {
          b.className = "category-btn px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase border border-warmBorder bg-white text-mysticNavy hover:border-royalGold transition-colors";
        }
      });
      renderProducts();
    }

    // Sort Handler
    function sortProducts(val) {
      currentSort = val;
      renderProducts();
    }

    // Add code
    function addToCart(id) {
      const p = PRODUCTS.find(prod => prod.id === id);
      if (!p) return;

      const existing = cart.find(item => item.product.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ product: p, quantity: 1 });
      }

      localStorage.setItem('stand_products_cart', JSON.stringify(cart));
      updateCartUI();
      toggleCartDrawer(true);
    }

    // Drawer Slide helper
    function toggleCartDrawer(open) {
      const drawer = document.getElementById('cart-drawer');
      const overlay = document.getElementById('cart-drawer-overlay');
      if (open) {
        drawer.style.transform = 'translateX(0)';
        overlay.classList.remove('hidden');
      } else {
        drawer.style.transform = 'translateX(100%)';
        overlay.classList.add('hidden');
      }
    }

    // Modify quantities
    function changeQuantity(id, delta) {
      const item = cart.find(i => i.product.id === id);
      if (!item) return;
      item.quantity += delta;
      if (item.quantity < 1) {
        cart = cart.filter(i => i.product.id !== id);
      }
      localStorage.setItem('stand_products_cart', JSON.stringify(cart));
      updateCartUI();
    }

    // Delete item
    function deleteItem(id) {
      cart = cart.filter(i => i.product.id !== id);
      localStorage.setItem('stand_products_cart', JSON.stringify(cart));
      updateCartUI();
    }

    // Update numbers
    function updateCartUI() {
      // Totals
      const totalCount = cart.reduce((acc, i) => acc + i.quantity, 0);
      const subtotal = cart.reduce((acc, i) => acc + (i.product.price * i.quantity), 0);

      document.getElementById('cart-nav-badge').innerText = totalCount;

      const container = document.getElementById('cart-items-container');
      const emptyView = document.getElementById('cart-empty-view');
      const summaryBlock = document.getElementById('cart-summary-block');

      if (cart.length === 0) {
        emptyView.style.display = 'block';
        summaryBlock.style.display = 'none';
        container.querySelectorAll('.cart-item-row').forEach(node => node.remove());
      } else {
        emptyView.style.display = 'none';
        summaryBlock.style.display = 'block';
        
        // Remove existing items rows
        container.querySelectorAll('.cart-item-row').forEach(node => node.remove());

        // Append rows
        cart.forEach(item => {
          const rowHtml = \`
            <div class="cart-item-row flex items-start gap-4 pb-4 border-b border-warmBorder/60 text-left">
              <div class="w-16 h-16 bg-gray-50 border border-warmBorder/40 overflow-hidden flex-shrink-0">
                <img src="\${item.product.image}" class="w-full h-full object-cover">
              </div>
              <div class="flex-grow min-w-0">
                <div class="flex justify-between items-start gap-2">
                  <h5 class="text-xs font-bold text-mysticNavy truncate font-sans">\${item.product.name}</h5>
                  <button onclick="deleteItem('\${item.product.id}')" class="text-gray-400 hover:text-red-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <p class="text-[10px] text-royalGold font-medium font-sans uppercase mb-2">\${item.product.category}</p>
                <div class="flex justify-between items-center bg-[#FAFAF8] border border-warmBorder px-2.5 py-1.5 w-max gap-3 mt-1">
                  <button onclick="changeQuantity('\${item.product.id}', -1)" class="p-0.5 hover:text-royalGold text-xs font-semibold leading-none font-mono">-</button>
                  <span class="text-xs font-bold text-mysticNavy font-sans select-none">\${item.quantity}</span>
                  <button onclick="changeQuantity('\${item.product.id}', 1)" class="p-0.5 hover:text-royalGold text-xs font-semibold leading-none font-mono">+</button>
                </div>
                <div class="text-xs font-bold text-mysticNavy font-sans pt-2 text-right">
                  ₹\${(item.product.price * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          \`;
          container.insertAdjacentHTML('beforeend', rowHtml);
        });

        // Set text
        document.getElementById('cart-subtotal-text').innerText = '₹' + subtotal.toLocaleString('en-IN');
        document.getElementById('cart-grandtotal-text').innerText = '₹' + subtotal.toLocaleString('en-IN');
      }
    }

    // WhatsApp Direct checkout
    function checkoutToWhatsApp() {
      const phone = '919845012345'; // Configured WhatsApp Contact Number
      const intro = "Hello Destiny Numbers, I would like to order the following sacred products:\\n\\n";
      const totalVal = cart.reduce((acc, i) => acc + (i.product.price * i.quantity), 0);
      const itemsText = cart.map((item, index) => {
        return (index + 1) + ". " + item.product.name + " (x" + item.quantity + ") — ₹" + (item.product.price * item.quantity).toLocaleString('en-IN');
      }).join('\\n');
      const outro = "\\n\\nTotal Cart Value: ₹" + totalVal.toLocaleString('en-IN') + "\\n\\nPlease share booking links. Thank you!";
      
      const fullMsg = encodeURIComponent(intro + itemsText + outro);
      window.open("https://wa.me/" + phone + "?text=" + fullMsg, "_blank");
    }

    // Boot
    window.onload = init;
  </script>
</body>
</html>`;
  }, [cartTotal, cart]);

  const copyHtmlCodeToClipboard = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="bg-[#FAFAF8] min-h-screen" id="products-listing-container">
      <HeroHeader 
        eyebrow="Complementary Resonance Enhancements"
        title="Sacred Products"
        description="Every product is custom-energized under suitable Nakshatra timelines by Dr. Arun Poovaiah's Vedic team, serving as a material bridge to align physical structures with celestial codes."
      />

      {/* Visual notification bubble */}
      <AnimatePresence>
        {addedNotification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#1C3557] text-white py-3 px-6 shadow-2xl border border-[#C9A84C]/50 z-50 flex items-center gap-3"
            style={{ borderRadius: '0px' }}
          >
            <Check className="w-4 h-4 text-[#C9A84C]" />
            <span className="text-xs uppercase tracking-wider font-semibold font-sans">
              Added <strong className="text-[#C9A84C] font-bold">{addedNotification}</strong> to Cart!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1140px] mx-auto px-6 py-12">
        
        {/* Title Area and Developer Integrator Ribbon */}
        <div className="flex flex-col md:flex-row justify-between items-center border border-dashed border-[#C9A84C]/30 bg-white/40 p-4 mb-10 gap-4">
          <div className="flex items-center gap-2.5 text-xs text-[#1C3557]/80">
            <Info className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
            <span className="italic leading-normal">
              Need to host this on a different domain or server? Click to get the completely self-contained static HTML version!
            </span>
          </div>
          <button 
            id="btn-get-static-html"
            onClick={() => setShowHtmlCodeModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#1C3557] text-white hover:bg-[#1C3557]/90 text-[10px] tracking-widest uppercase font-bold transition-all"
          >
            <FileCode className="w-3.5 h-3.5 text-[#C9A84C]" /> Get Standalone HTML
          </button>
        </div>

        {/* Controls Bar: Category Filters & Responsive Sorting & Counts */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-6 border-b border-[#E8E2D8] text-sm font-sans" id="products-controls-panel">
          
          {/* Categories Tab selector */}
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none" id="category-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-display text-[11px] font-bold tracking-wider uppercase border transition-all duration-150 flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#1C3557] text-white border-[#1C3557]'
                    : 'bg-white text-[#1C3557] border-[#E8E2D8] hover:border-[#C9A84C]'
                }`}
                style={{ borderRadius: '0px' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Counts metrics & sorting dropdown */}
          <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pt-2 md:pt-0">
            <span className="text-[11px] font-medium text-[#1C3557]/60 tracking-wider">
              VIEWING <strong className="text-[#1C3557] font-bold">{filteredProducts.length}</strong> PRODUCTS
            </span>
            
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#1C3557]/60" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#E8E2D8] px-3 py-1.5 text-[11px] font-medium tracking-wider text-[#1C3557] outline-none focus:border-[#C9A84C] cursor-pointer"
                id="products-sort-choice"
              >
                <option value="Default">Default</option>
                <option value="Price Low to High">Price: Low to High</option>
                <option value="Price High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          id="products-grid-container"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => {
              // Stars creator
              const ratingCount = Math.floor(p.rating);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={p.id}
                  className="bg-white border border-[#E8E2D8] overflow-hidden relative flex flex-col justify-between p-4 sm:p-5 transition-all duration-300 hover:border-[#C9A84C] hover:translate-y-[-4px] hover:shadow-md"
                  style={{ borderRadius: '0px' }}
                  id={`product-card-${p.id}`}
                >
                  <div className="space-y-4">
                    {/* Image Area with category tag */}
                    <div 
                      onClick={() => handleOpenProductDetails(p)}
                      className="relative bg-[#FAFAF8] aspect-square w-full overflow-hidden border border-[#E8E2D8]/40 cursor-pointer group/card"
                      title="View Sacred Description & Details"
                    >
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-cover select-none transition-transform duration-500 group-hover/card:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2 left-2 bg-[#1C3557] text-[#C9A84C] font-display font-medium text-[8px] uppercase tracking-[0.15em] px-2 py-0.5 pointer-events-none">
                        {p.category}
                      </span>
                    </div>

                    {/* Meta details */}
                    <div className="space-y-1">
                      <h3 
                        onClick={() => handleOpenProductDetails(p)}
                        className="font-sans font-bold text-sm sm:text-base text-[#1C3557] tracking-wide leading-tight truncate cursor-pointer hover:text-[#C9A84C] transition-colors"
                        title="View Sacred Description & Details"
                      >
                        {p.name}
                      </h3>
                      <p className="text-[11px] text-[#1C3557]/60 font-light leading-snug line-clamp-2 h-8">
                        {p.description}
                      </p>
                      <button 
                        onClick={() => handleOpenProductDetails(p)}
                        className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-wider block pt-1 hover:underline text-left"
                        title="View detailed description"
                      >
                        Description & benefits →
                      </button>
                    </div>
                  </div>

                  {/* Rating, Price & CTA block */}
                  <div className="mt-5 space-y-3">
                    {/* Stars bar */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-[#C9A84C]" aria-label={`Rating: ${p.rating} out of 5 stars`}>
                        {[...Array(5)].map((_, idx) => (
                          <Star 
                            key={idx} 
                            className={`w-3 h-3 ${idx < ratingCount ? 'fill-[#C9A84C]' : 'text-[#E8E2D8]'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#1C3557]/50 font-bold font-sans">
                        {p.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Price & Buy Button container */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-3 border-t border-[#E8E2D8]/60">
                      <span className="text-sm font-bold text-[#1C3557] font-sans">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => handleAddToCart(p)}
                        className="w-full sm:w-auto px-4 py-2 bg-[#1C3557] text-white hover:bg-[#1C3557]/95 transition-all text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 select-none"
                        style={{ borderRadius: '0px' }}
                        id={`btn-add-to-cart-${p.id}`}
                      >
                        <ShoppingCart className="w-3 h-3 text-[#C9A84C]" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Sticky Cart Trigger (if items present) */}
      <AnimatePresence>
        {totalItemsCount > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-24 right-8 z-40 bg-[#1C3557] hover:bg-[#1C3557]/90 text-white w-14 h-14 flex items-center justify-center shadow-2xl relative border-2 border-[#C9A84C]"
            style={{ borderRadius: '0px' }}
            id="floating-cart-trigger-btn"
          >
            <ShoppingBag className="w-5 h-5 text-[#C9A84C]" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#C9A84C] text-[#1C3557] text-[10px] font-bold font-sans w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md">
              {totalItemsCount}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide-over Shopping Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Dark glass screen overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity"
              id="cart-drawer-backdrop"
            />

            {/* Panel Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-white shadow-2xl z-[60] flex flex-col justify-between"
              id="cart-drawer-sheet"
            >
              <div className="p-6 border-b border-[#E8E2D8] flex items-center justify-between bg-[#1C3557] text-white">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#C9A84C]" />
                  <span className="font-display font-medium italic text-md">Your Sacred Remedial items</span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 hover:text-[#C9A84C] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Items scroll Area */}
              <div className="flex-grow p-6 overflow-y-auto space-y-4" id="cart-drawer-item-container">
                {cart.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <ShoppingBag className="w-12 h-12 text-[#E8E2D8] mx-auto opacity-70" />
                    <p className="text-xs text-[#1C3557]/60 font-light italic">Your shopping bag is currently empty.</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="inline-block mt-3 px-6 py-2 border border-[#1C3557] text-[#1C3557] hover:bg-[#1C3557] hover:text-white transition-all text-[11px] font-sans font-bold uppercase tracking-widest"
                      style={{ borderRadius: '0px' }}
                    >
                      Browse Elements
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div 
                      key={item.product.id} 
                      className="flex items-start gap-4 pb-4 border-b border-[#E8E2D8]/60"
                      id={`cart-item-row-${item.product.id}`}
                    >
                      <div className="w-16 h-16 bg-[#FAFAF8] border border-[#E8E2D8]/40 overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover select-none"
                        />
                      </div>
                      <div className="flex-grow min-w-0 font-sans">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="text-xs font-bold text-[#1C3557] truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-[#1C3557]/45 hover:text-red-700 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-[9px] uppercase tracking-wider font-semibold text-[#C9A84C] block mt-0.5">
                          {item.product.category}
                        </span>

                        {/* Quantity management & Single row total */}
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center border border-[#E8E2D8] bg-[#FAFAF8] px-2 py-1 gap-3.5">
                            <button 
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="text-[#1C3557] hover:text-[#C9A84C] text-[10px] font-mono leading-none font-bold"
                            >
                              -
                            </button>
                            <span className="text-xs font-bold text-[#1C3557] select-none">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="text-[#1C3557] hover:text-[#C9A84C] text-[10px] font-mono leading-none font-bold"
                            >
                              +
                            </button>
                          </div>
                          
                          <span className="text-xs font-bold text-[#1C3557]">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bill Details Block */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-[#E8E2D8] bg-[#FAFAF8] space-y-4" id="cart-drawer-checkout-sheet">
                  <div className="space-y-2 text-xs text-[#1C3557]/70 font-sans">
                    <div className="flex justify-between">
                      <span>Item Subtotal</span>
                      <span className="font-bold text-[#1C3557]">₹{cartTotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center pb-1">
                      <span className="flex items-center gap-1">
                        Sankalpa & Nakshatra Energization 
                      </span>
                      <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">
                        Complementary
                      </span>
                    </div>
                    <div className="h-px bg-[#E8E2D8]/80"></div>
                  </div>

                  <div className="flex justify-between items-end font-sans">
                    <span className="text-xs font-bold text-[#1C3557] uppercase tracking-wider">Estimated Total</span>
                    <span className="text-lg font-bold text-[#C9A84C]">₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>

                  <button
                    onClick={handleCheckoutWhatsApp}
                    className="w-full py-4 bg-[#1C3557] text-white hover:bg-[#1C3557]/95 transition-all flex items-center justify-center gap-3 font-display font-medium text-xs tracking-widest uppercase leading-none"
                    style={{ borderRadius: '0px' }}
                  >
                    🚀 Coordinate Order via WhatsApp
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Copy Code / Static HTML modal */}
      <AnimatePresence>
        {showHtmlCodeModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E8E2D8] max-w-2xl w-full p-6 flex flex-col justify-between max-h-[80vh]"
              style={{ borderRadius: '0px' }}
            >
              <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-[#C9A84C]" />
                  <span className="font-display font-medium italic text-[#1C3557]">DestinyNumbers.in Standalone Page HTML</span>
                </div>
                <button 
                  onClick={() => setShowHtmlCodeModal(false)}
                  className="p-1 text-[#1C3557] hover:text-[#C9A84C] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs text-[#1C3557]/80 italic mb-4 leading-normal">
                This is the complete, single-file HTML code with integrated styles, responsive grids, full dynamic filter functionality, sort mechanics, active counts, and direct WhatsApp booking. You can double click this in your directory directly!
              </div>

              <div className="bg-gray-900 text-gray-100 p-4 font-mono text-[11px] overflow-auto flex-grow h-48 select-all scrollbar-none rounded-sm">
                <pre>{standaloneHtmlCode}</pre>
              </div>

              <div className="flex justify-end gap-3 pt-6 mt-4 border-t border-[#E8E2D8]">
                <button
                  onClick={() => setShowHtmlCodeModal(false)}
                  className="px-5 py-2 border border-[#E8E2D8] text-[#1C3557] hover:bg-gray-100 text-[10px] tracking-widest uppercase font-bold transition-all"
                  style={{ borderRadius: '0px' }}
                >
                  Close
                </button>
                <button
                  onClick={copyHtmlCodeToClipboard}
                  className="flex items-center gap-1.5 px-6 py-2 bg-[#1C3557] text-[#C9A84C] hover:bg-[#1C3557]/90 text-[10px] tracking-widest uppercase font-bold transition-all"
                  style={{ borderRadius: '0px' }}
                >
                  {copiedCode ? (
                    <>✓ Copied!</>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Code
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Product Details Description Modal with Carousel & Pincode Checker */}
      <AnimatePresence>
        {selectedProductForDetail && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto">
            {/* Viewport-fixed floating close button for mobile screens so it's always accessible at any scroll height */}
            <button 
              onClick={() => setSelectedProductForDetail(null)}
              className="fixed top-4 right-4 md:hidden p-3 bg-white border-2 border-[#C9A84C] text-[#1C3557] hover:text-[#C9A84C] transition-all z-[100] shadow-xl flex items-center justify-center hover:scale-105 active:scale-95"
              style={{ borderRadius: '0px' }}
              aria-label="Close details"
            >
              <X className="w-5 h-5 stroke-[2.5px]" />
            </button>

            <div className="flex min-h-full items-start md:items-center justify-center p-4 py-8 md:py-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FAFAF8] border-2 border-[#C9A84C] max-w-4xl w-full p-6 md:p-8 relative grid grid-cols-1 md:grid-cols-2 gap-8 my-auto shadow-2xl"
                style={{ borderRadius: '0px' }}
                id="product-details-modal"
              >
                {/* Close Button for desktop/wider screens inside the card */}
                <button 
                  onClick={() => setSelectedProductForDetail(null)}
                  className="absolute top-4 right-4 p-2 bg-white border border-[#E8E2D8] hover:border-[#C9A84C] text-[#1C3557] hover:text-[#C9A84C] transition-colors z-20 shadow-xs hidden md:flex"
                  style={{ borderRadius: '0px' }}
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

              {/* Left Column: Visual Gallery & Carousel */}
              <div className="flex flex-col gap-4">
                {/* Active Image Frame */}
                <div className="relative bg-white aspect-square w-full overflow-hidden border border-[#E8E2D8] flex items-center justify-center p-1 shadow-sm">
                  <img 
                    src={getGalleryImages(selectedProductForDetail.id)[detailActiveImgIndex]} 
                    alt={selectedProductForDetail.name} 
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-[#1C3557] text-[#C9A84C] font-display font-medium text-[9px] uppercase tracking-[0.15em] px-3 py-1 pointer-events-none">
                    {selectedProductForDetail.category}
                  </span>
                </div>

                {/* Slides/Carousel Thumbnails Flanked by Navigation Arrows */}
                <div className="flex items-center justify-between gap-3 px-1 mt-2">
                  {/* Left arrow */}
                  <button 
                    onClick={() => {
                      const imgs = getGalleryImages(selectedProductForDetail.id);
                      setDetailActiveImgIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
                    }}
                    className="p-2 border border-[#E8E2D8] bg-white text-[#1C3557] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all font-mono font-bold leading-none select-none text-sm"
                    style={{ borderRadius: '0px' }}
                  >
                    ←
                  </button>

                  {/* Thumbnail Row */}
                  <div className="flex-grow flex items-center justify-center gap-2 overflow-x-auto py-1 scrollbar-none">
                    {getGalleryImages(selectedProductForDetail.id).map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setDetailActiveImgIndex(idx)}
                        className={`w-12 h-12 bg-white border-2 overflow-hidden flex-shrink-0 transition-all ${
                          idx === detailActiveImgIndex 
                            ? 'border-[#1C3557] scale-102 ring-1 ring-[#1C3557]/40' 
                            : 'border-[#E8E2D8] hover:border-[#C9A84C]'
                        }`}
                        style={{ borderRadius: '0px' }}
                      >
                        <img src={img} className="w-full h-full object-cover pointer-events-none" alt="" />
                      </button>
                    ))}
                  </div>

                  {/* Right arrow */}
                  <button 
                    onClick={() => {
                      const imgs = getGalleryImages(selectedProductForDetail.id);
                      setDetailActiveImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
                    }}
                    className="p-2 border border-[#E8E2D8] bg-white text-[#1C3557] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all font-mono font-bold leading-none select-none text-sm"
                    style={{ borderRadius: '0px' }}
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Right Column: Information, Pincode Verification, and Bullet descriptions */}
              <div className="flex flex-col justify-between text-left h-full font-sans">
                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#C9A84C] uppercase block mb-1">
                      Cosmically Aligned Remedy
                    </span>
                    <h2 className="text-xl md:text-2xl font-display font-medium text-[#1C3557]">
                      {selectedProductForDetail.name}
                    </h2>
                    {selectedProductForDetail.subtitle && (
                      <p className="text-sm font-semibold text-[#C9A84C] mt-1.5 font-sans leading-relaxed">
                        {selectedProductForDetail.subtitle}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex text-[#C9A84C]">
                        {[...Array(5)].map((_, idx) => (
                          <Star 
                            key={idx} 
                            className={`w-3.5 h-3.5 ${idx < Math.floor(selectedProductForDetail.rating) ? 'fill-[#C9A84C]' : 'text-[#E8E2D8]'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#1C3557]/60">
                        {selectedProductForDetail.rating} / 5.0
                      </span>
                    </div>
                  </div>

                  {/* Pincode Checker Area (Matches Mockup) */}
                  <div className="bg-white/65 p-4 border border-[#E8E2D8] space-y-3">
                    <p className="text-[11px] text-[#1C3557]/70 font-light italic">
                      Enter pincode to see product availability.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#1C3557] mb-1">
                      <MapPin className="w-4 h-4 text-[#C9A84C]" />
                      <span>Delivery Options</span>
                    </div>
                    <form onSubmit={handleCheckPincode} className="flex gap-2">
                      <input 
                        type="text" 
                        maxLength={6}
                        placeholder="Enter Pincode"
                        value={pincodeInput}
                        onChange={(e) => setPincodeInput(e.target.value.replace(/\D/g, ''))}
                        className="flex-grow bg-white border border-[#E8E2D8] px-3 py-2 text-xs font-medium text-[#1C3557] outline-none focus:border-[#C9A84C]"
                        style={{ borderRadius: '0px' }}
                      />
                      <button 
                        type="submit"
                        className="px-4 py-2 bg-white border border-[#1C3557] hover:bg-[#1C3557] text-[#1C3557] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
                        style={{ borderRadius: '0px' }}
                      >
                        Check
                      </button>
                    </form>
                    {pincodeStatus && (
                      <div className={`text-[11px] font-medium leading-relaxed p-2 border ${
                        pincodeStatus.success 
                          ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
                          : 'text-rose-700 bg-rose-50 border-rose-200'
                      }`}>
                        {pincodeStatus.msg}
                      </div>
                    )}
                  </div>

                  {/* Detailed descriptions / Bullet lists */}
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold text-[#1C3557] uppercase tracking-widest border-b border-[#E8E2D8]/80 pb-1.5">
                      Description
                    </h3>
                    <ul className="space-y-2 text-xs text-[#1C3557]/80 font-light leading-relaxed">
                      {getProductBullets(selectedProductForDetail.id).map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#C9A84C] font-bold text-[14px] leading-none select-none mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Block */}
                <div className="pt-6 mt-6 border-t border-[#E8E2D8]/80 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
                  <div className="text-left font-sans">
                    <span className="text-[10px] text-[#1C3557]/50 font-bold uppercase block">
                      Sacred Exchange Fee
                    </span>
                    <span className="text-xl font-bold text-[#1C3557]">
                      ₹{selectedProductForDetail.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        handleAddToCart(selectedProductForDetail);
                        setSelectedProductForDetail(null);
                      }}
                      className="flex-grow sm:flex-grow-0 px-6 py-3 bg-[#1C3557] hover:bg-[#1C3557]/95 text-white font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-md"
                      style={{ borderRadius: '0px' }}
                    >
                      <ShoppingCart className="w-3.5 h-3.5 text-[#C9A84C]" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        )}
      </AnimatePresence>

    </div>
  );
}
