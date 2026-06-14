import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- DATASET: 22 MAJOR ARCANA (ELLIOT ORACLE) ---
interface TarotCard {
  name: string;
  rank: string;
  yes: boolean;
  img: string;
  msg_yes: string;
  msg_no: string;
}

const CARDS: TarotCard[] = [
  {
    name: "The Fool", rank: "0", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/05/IMG_5725.jpg",
    msg_yes: "A leap of faith is called for. The Fool leaps — and the net appears.",
    msg_no: "You are rushing headlong into chaos. Pause before you leap."
  },
  {
    name: "The Magician", rank: "I", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/07/magicianIMG_0792.jpg",
    msg_yes: "You have every tool you need. The Magician says YES — create it.",
    msg_no: "Your power is being scattered. Focus before you act."
  },
  {
    name: "The High Priestess", rank: "II", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2024/06/IMG_5240.jpg",
    msg_yes: "Trust your deepest instinct. The answer you already know is YES.",
    msg_no: "Something is hidden from you still. Wait for full clarity."
  },
  {
    name: "The Empress", rank: "III", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/02/EmpressIMG_0287.jpg",
    msg_yes: "Abundance surrounds you. The Empress says YES — you are safe.",
    msg_no: "Neglect in some area is blocking the flow. Nurture first."
  },
  {
    name: "The Emperor", rank: "IV", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/03/IMG_5377.jpg",
    msg_yes: "Stand firm and take authority. The Emperor commands YES.",
    msg_no: "Your foundation is unstable. Build structure before moving forward."
  },
  {
    name: "The Hierophant", rank: "V", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/04/IMG_6745.jpg",
    msg_yes: "The Divine is listening. You are seen and heard — YES.",
    msg_no: "Inflexibility is blocking your path. Open your mind."
  },
  {
    name: "The Lovers", rank: "VI", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2024/09/IMG_8148.jpg",
    msg_yes: "Love and alignment say YES. Choose with your whole heart.",
    msg_no: "Disharmony in a key relationship needs healing first."
  },
  {
    name: "The Chariot", rank: "VII", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/06/IMG_21.jpg",
    msg_yes: "Drive forward with courage. The Chariot charges toward YES.",
    msg_no: "Fear of the wrong decision has stalled your momentum. Reclaim control."
  },
  {
    name: "Strength", rank: "VIII", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/05/Strength.jpg",
    msg_yes: "Your inner fortitude is your answer. YES — you are stronger than you know.",
    msg_no: "You are being too hard on yourself. Restore compassion first."
  },
  {
    name: "The Hermit", rank: "IX", yes: false,
    img: "https://elliotoracle.com/wp-content/uploads/2025/05/IMG_1809.jpg",
    msg_yes: "The answer lies within. Seek silence — then act.",
    msg_no: "Not yet. The Hermit asks you to go within before you move forward."
  },
  {
    name: "Wheel of Fortune", rank: "X", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/05/IMG_0479.png",
    msg_yes: "The wheel is turning in your favour. YES — change is coming.",
    msg_no: "A cycle is repeating. Step off the wheel and break the pattern."
  },
  {
    name: "Justice", rank: "XI", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/06/IMG_1805.jpg",
    msg_yes: "Truth and fairness support you. Justice says YES.",
    msg_no: "Something feels unjust in this situation. Seek truth first."
  },
  {
    name: "The Hanged Man", rank: "XII", yes: false,
    img: "https://elliotoracle.com/wp-content/uploads/2025/04/IMG_1801.jpg",
    msg_yes: "A new perspective is dawning. Surrender — then proceed.",
    msg_no: "Pause. The Hanged Man asks you to wait and gain new wisdom."
  },
  {
    name: "Death", rank: "XIII", yes: false,
    img: "https://elliotoracle.com/wp-content/uploads/2025/07/DeathIMG_0729.jpg",
    msg_yes: "Transformation is complete. A new chapter is beginning — YES.",
    msg_no: "You are resisting a necessary ending. Let go before moving on."
  },
  {
    name: "Temperance", rank: "XIV", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/04/IMG_1817.jpg",
    msg_yes: "Balance and patience will bring you YES. Trust the flow.",
    msg_no: "Depletion is real. Restore yourself before you act."
  },
  {
    name: "The Devil", rank: "XV", yes: false,
    img: "https://elliotoracle.com/wp-content/uploads/2025/03/IMG_1164.jpg",
    msg_yes: "Break the chains. Freedom is closer than you think.",
    msg_no: "Self-limiting beliefs are keeping you imprisoned. Not yet."
  },
  {
    name: "The Tower", rank: "XVI", yes: false,
    img: "https://elliotoracle.com/wp-content/uploads/2025/07/IMG_0104.jpg",
    msg_yes: "After the storm comes clarity. Something needed to fall.",
    msg_no: "Stop avoiding what needs to be felt. The Tower says NO — not yet."
  },
  {
    name: "The Star", rank: "XVII", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/05/TheStarIMG_0607.jpg",
    msg_yes: "Hope is justified. The Star shines YES on your path.",
    msg_no: "Balance your spiritual hopes with practical action first."
  },
  {
    name: "The Moon", rank: "XVIII", yes: false,
    img: "https://elliotoracle.com/wp-content/uploads/2025/07/IMG_7340.jpg",
    msg_yes: "Trust your instincts — the truth is emerging from the fog.",
    msg_no: "Illusion clouds the path. The Moon says wait for clarity."
  },
  {
    name: "The Sun", rank: "XIX", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2024/09/IMG_1569.jpg",
    msg_yes: "Radiant YES. The Sun lights your path — everything is working out.",
    msg_no: "Clouds are clearing. The warmth of YES is very close now."
  },
  {
    name: "Judgement", rank: "XX", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2025/07/IMG_8243.jpg",
    msg_yes: "Rebirth and renewal — Judgement sounds the trumpet of YES.",
    msg_no: "Are you sleepwalking? Wake up to what truly needs to change."
  },
  {
    name: "The World", rank: "XXI", yes: true,
    img: "https://elliotoracle.com/wp-content/uploads/2024/10/IMG_0378.jpg",
    msg_yes: "Complete and whole — The World says a resounding YES. You made it.",
    msg_no: "Something remains unfinished. Complete it before claiming victory."
  }
];

// --- SOUND SYSTEM ---
class SoundEngine {
  ctx: AudioContext | null = null;
  gain: GainNode | null = null;

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = (window.AudioContext || (window as any).webkitAudioContext);
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.gain = this.ctx.createGain();
      this.gain.connect(this.ctx.destination);
    } catch (e) {
      console.error("Audio initialization failed", e);
    }
  }

  playWhoosh(duration = 0.5, startFreq = 200, endFreq = 1000, maxGain = 0.15) {
    if (!this.ctx || !this.gain) return;

    // Direct resume for modern browser security policies
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    
    // Create random white noise buffer
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    // Create a sweet resonant bandpass filter for custom wind/whoosh sound
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.setValueAtTime(4.0, now);
    filter.frequency.setValueAtTime(startFreq, now);
    filter.frequency.exponentialRampToValueAtTime(endFreq, now + duration * 0.4);
    filter.frequency.exponentialRampToValueAtTime(startFreq * 0.4, now + duration);
    
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0, now);
    noiseGain.gain.linearRampToValueAtTime(maxGain, now + duration * 0.25);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.gain);
    
    noise.start(now);
    noise.stop(now + duration);
  }

  playHover() {
    // A micro subtle low-frequency whoosh sound on card hover
    this.playWhoosh(0.18, 150, 450, 0.05);
  }

  playFlip() {
    // A majestic, elegant sweeping card flip whoosh
    this.playWhoosh(0.65, 200, 1200, 0.12);
  }

  playShuffle() {
    // Shuffling! Play a series of rapid shuffling whooshes
    if (!this.ctx) return;
    
    // First rapid whoosh
    this.playWhoosh(0.35, 180, 800, 0.08);
    // Second rapid whoosh after 120ms
    setTimeout(() => {
      this.playWhoosh(0.3, 220, 900, 0.07);
    }, 120);
    // Third rapid whoosh after 240ms
    setTimeout(() => {
      this.playWhoosh(0.25, 200, 750, 0.06);
    }, 240);
  }
}

const sounds = new SoundEngine();

// --- TYPES ---
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
}

export default function FreeTarotReading() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [shuffledDeck, setShuffledDeck] = useState([...CARDS]);
  const [question, setQuestion] = useState('');
  const [isShuffling, setIsShuffling] = useState(false);
  const [instruction, setInstruction] = useState("Breathe · Focus your question");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<{ index: number; card: TarotCard; rect: DOMRect } | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>(0);
  const particleRequestRef = useRef<number>(0);

  const cardW = useRef(0);
  const cardH = useRef(0);

  // --- HELPERS ---
  const shuffleDeck = useCallback(() => {
    sounds.playShuffle();
    const newDeck = [...CARDS];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    setShuffledDeck(newDeck);
  }, []);

  const drawCardBack = (ctx: CanvasRenderingContext2D, w: number, h: number, isHovered: boolean) => {
    ctx.save();
    
    // 1. Gold Glow
    if (isHovered) {
      ctx.shadowBlur = 25;
      ctx.shadowColor = 'rgba(200, 168, 75, 0.8)';
    }

    // 2. Base
    ctx.fillStyle = '#1c0f35';
    ctx.strokeStyle = '#c8a84b';
    ctx.lineWidth = isHovered ? 2 : 1;
    ctx.beginPath();
    ctx.roundRect(-w/2, -h/2, w, h, 6);
    ctx.fill();
    ctx.stroke();

    // 3. Inner Inset
    ctx.strokeStyle = 'rgba(200, 168, 75, 0.4)';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(-w/2 + 5, -h/2 + 5, w - 10, h - 10);

    // 4. Center Ornament
    ctx.strokeStyle = '#c8a84b';
    ctx.lineWidth = 0.7;
    ctx.globalAlpha = isHovered ? 0.9 : 0.6;
    
    const drawDiamond = (size: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.7, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.7, 0);
      ctx.closePath();
      ctx.stroke();
    };
    drawDiamond(20);
    drawDiamond(12);

    // Intersection circles
    [0, 20, -20].forEach(y => {
      ctx.beginPath();
      ctx.arc(0, y, 2.5, 0, Math.PI * 2);
      ctx.stroke();
    });

    // 5. Corner Dots
    ctx.fillStyle = '#c8a84b';
    const inset = 10;
    [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([sx, sy]) => {
      ctx.beginPath();
      ctx.arc((w/2 - inset) * sx, (h/2 - inset) * sy, 1.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // 6. Fleur shapes top/bottom
    [1, -1].forEach(sy => {
       ctx.save();
       ctx.translate(0, (h/2 - 15) * sy);
       ctx.beginPath();
       ctx.arc(0, 0, 3, 0, Math.PI * 2);
       ctx.stroke();
       ctx.restore();
    });

    ctx.restore();
  };

  const getCardLayout = useCallback((w: number, h: number) => {
    const cx = w / 2;
    const cy = h * 1.28;
    const R = h * 1.05;
    const span = Math.PI * 0.60;
    const startAngle = Math.PI + (Math.PI - span) / 2;
    
    cardW.current = w * (w < 500 ? 0.085 : 0.072);
    cardH.current = cardW.current * 1.68;

    return CARDS.map((_, i) => {
      const t = i / (CARDS.length - 1);
      const angle = startAngle + t * span;
      return {
        x: cx + Math.cos(angle) * R,
        y: cy + Math.sin(angle) * R,
        angle,
        rotation: angle + Math.PI / 2,
        cardIndex: i
      };
    });
  }, []);

  // --- RENDER LOOPS ---
  const updateParticles = useCallback(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach(p => {
      p.y += p.vy;
      p.x += p.vx;
      
      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }

      ctx.fillStyle = `rgba(200, 168, 75, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    particleRequestRef.current = requestAnimationFrame(updateParticles);
  }, []);

  const updateFan = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const layout = getCardLayout(w / (window.devicePixelRatio || 1), h / (window.devicePixelRatio || 1));
    
    layout.forEach((c, i) => {
      if (selectedCard?.index === i) return;

      const isHovered = hoverIndex === i;
      let x = c.x;
      let y = c.y;

      if (isHovered) {
        const lift = cardH.current * 0.22;
        x += Math.cos(c.angle) * (-lift);
        y += Math.sin(c.angle) * (-lift);
      }

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(c.rotation);
      if (selectedCard) ctx.globalAlpha = 0.85;
      drawCardBack(ctx, cardW.current, cardH.current, isHovered);
      ctx.restore();
    });

    requestRef.current = requestAnimationFrame(updateFan);
  }, [getCardLayout, hoverIndex, selectedCard]);

  // --- EVENT HANDLERS ---
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isShuffling) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left);
    const my = (e.clientY - rect.top);

    const layout = getCardLayout(canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
    
    let foundIndex: number | null = null;
    for (let i = layout.length - 1; i >= 0; i--) {
      const c = layout[i];
      const dx = mx - c.x;
      const dy = my - c.y;
      const cos = Math.cos(-c.rotation);
      const sin = Math.sin(-c.rotation);
      const lx = dx * cos - dy * sin;
      const ly = dx * sin + dy * cos;

      if (Math.abs(lx) <= cardW.current/2 && Math.abs(ly) <= cardH.current/2) {
        foundIndex = i;
        sounds.init();
        if (hoverIndex !== i) sounds.playHover();
        break;
      }
    }
    setHoverIndex(foundIndex);
  };

  const handleDraw = () => {
    if (hoverIndex === null || isShuffling) return;
    
    sounds.init();
    sounds.playFlip();
    const rect = canvasRef.current!.getBoundingClientRect();
    const layout = getCardLayout(canvasRef.current!.width / (window.devicePixelRatio || 1), canvasRef.current!.height / (window.devicePixelRatio || 1));
    const cardPos = layout[hoverIndex];

    setIsFlipped(false);
    setShowResult(false);

    setSelectedCard({
      index: hoverIndex,
      card: shuffledDeck[hoverIndex],
      rect: {
        ...rect,
        left: rect.left + cardPos.x - cardW.current/2,
        top: rect.top + cardPos.y - cardH.current/2,
        width: cardW.current,
        height: cardH.current
      } as DOMRect
    });

    setInstruction("Your truth is revealed... Pick any other card or click shuffle to scuffle again!");
    
    setTimeout(() => {
      setIsFlipped(true);
      setTimeout(() => setShowResult(true), 450);
    }, 150);
  };

  const resetAll = () => {
    sounds.init();
    setIsShuffling(true);
    setInstruction("Shuffling the cards...");
    setSelectedCard(null);
    setShowResult(false);
    setIsFlipped(false);
    
    setTimeout(() => {
      shuffleDeck();
      setIsShuffling(false);
      setInstruction("Breathe · Hover to feel · Click to reveal");
    }, 800);
  };

  // --- INITIALIZATION ---
  useEffect(() => {
    const handleResize = () => {
      const pCanvas = particleCanvasRef.current;
      const fCanvas = canvasRef.current;
      if (!pCanvas || !fCanvas) return;

      const dpr = window.devicePixelRatio || 1;
      pCanvas.width = window.innerWidth * dpr;
      pCanvas.height = window.innerHeight * dpr;
      
      const fW = containerRef.current?.clientWidth || 800;
      const fH = window.innerHeight * 0.40;
      fCanvas.width = fW * dpr;
      fCanvas.height = fH * dpr;
      
      fCanvas.getContext('2d')?.scale(dpr, dpr);

      const p: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        p.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -0.25 - Math.random() * 0.45,
          r: 0.8 + Math.random(),
          opacity: 0.2 + Math.random() * 0.4
        });
      }
      particlesRef.current = p;
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    sounds.init();
    shuffleDeck();

    particleRequestRef.current = requestAnimationFrame(updateParticles);
    requestRef.current = requestAnimationFrame(updateFan);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(particleRequestRef.current);
      cancelAnimationFrame(requestRef.current);
    };
  }, [updateParticles, updateFan, shuffleDeck]);

  return (
    <div className="min-h-screen bg-[#06030f] text-[#e8d5a3] font-serif overflow-x-hidden selection:bg-[#c8a84b]/20 flex flex-col items-center">
      <canvas 
        ref={particleCanvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />
      <div className="fixed inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)]" />

      <div className={`relative z-20 w-full px-4 py-4 flex flex-col items-center transition-all duration-500 ${selectedCard ? 'max-w-6xl' : 'max-w-4xl'}`}>
        <Link to="/tools" className="self-start inline-flex items-center gap-2 text-[#7a6a4a] hover:text-[#e8d5a3] text-[10px] tracking-[0.4em] uppercase font-display mb-3 transition-all group">
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back
        </Link>

        {/* Outer grid - switches columns depending on if a card is selected */}
        <div className={`w-full grid grid-cols-1 ${selectedCard ? 'lg:grid-cols-12 gap-8' : 'grid-cols-1'} items-center`}>
          
          {/* Main Deck / Oracle Control Column */}
          <div className={`${selectedCard ? 'lg:col-span-5' : 'w-full'} flex flex-col items-center text-center`}>
            <header className="mb-3 space-y-0.5">
              <h1 className="text-xs font-display font-black tracking-[0.35em] uppercase text-[#c8a84b]">
                 ✦ THE ORACLE ✦
              </h1>
              <p className="text-white text-[10px] tracking-[0.1em] font-medium uppercase">
                 Focus your question · Choose ONE card
              </p>
            </header>

            <div className="w-full max-w-[360px] mb-2.5 relative group mx-auto">
               <input 
                  type="text"
                  placeholder="Hold your question in mind..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full bg-white/5 border border-[#c8a84b]/30 rounded-lg py-1.5 px-4 text-[#e8d5a3] placeholder:text-[#7a6a4a]/40 font-display italic text-center text-[12px] focus:outline-none focus:ring-1 focus:ring-[#c8a84b] transition-all"
               />
            </div>

            <button 
              onClick={resetAll}
              disabled={isShuffling}
              className="px-6 py-2 border border-[#c8a84b]/50 text-[#c8a84b] font-display text-[12px] font-medium tracking-[0.3em] uppercase hover:bg-[#c8a84b]/10 transition-all disabled:opacity-30 disabled:grayscale mb-2.5 mx-auto block"
            >
               ✦ {isShuffling ? 'Mixing the Fates' : 'Shuffle the Deck'} ✦
            </button>

            <p className="text-[10px] text-white italic mb-1 font-light tracking-widest min-h-[15px]">
               {instruction}
            </p>

            <div ref={containerRef} className="relative w-full overflow-hidden mt-1">
               <canvas 
                  ref={canvasRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={handleDraw}
                  className="w-full h-auto cursor-pointer2"
                  style={{ cursor: isShuffling ? 'not-allowed' : 'pointer' }}
               />
            </div>
          </div>

          {/* Unified Chosen Card & Result Display Side Column */}
          {selectedCard && (
            <div className="lg:col-span-7 w-full flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div 
                   key={selectedCard.card.name}
                   initial={{ opacity: 0, scale: 0.95, y: 15 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95, y: -15 }}
                   transition={{ duration: 0.4, ease: 'easeOut' }}
                   className="w-full bg-white/[0.03] border border-[#c8a84b]/15 rounded-xl p-4 md:p-6 backdrop-blur-xl relative overflow-hidden shadow-2xl"
                >
                   {/* Decorative subtle ambient backdrop glow */}
                   <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#c8a84b]/5 to-transparent pointer-events-none" />
                   
                   <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                     
                     {/* Left Sub-column: Chosen 3D Card */}
                     <div className="sm:col-span-5 flex flex-col items-center justify-center p-1">
                        <span className="text-[9px] tracking-[0.3em] font-medium text-[#7a6a4a] uppercase mb-2 block font-display">
                           ✦ YOUR CHOSEN KEY ✦
                        </span>
                        <div className="w-[120px] h-[201px] perspective-[1000px]">
                           <div className={`relative w-full h-full transition-transform duration-[600ms] transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                              {/* Card Back */}
                              <div className="absolute inset-0 backface-hidden rounded-lg border-[1px] border-[#c8a84b]/50 bg-[#1c0f35] flex items-center justify-center p-2 shadow-[0_0_15px_rgba(200,168,75,0.2)]">
                                  <div className="border border-[#c8a84b]/15 w-full h-full flex items-center justify-center relative overflow-hidden">
                                     <div className="absolute inset-0 bg-[#c8a84b]/5 opacity-25" />
                                     <RefreshCw className="w-8 h-8 text-[#c8a84b]/20 animate-[spin_12s_linear_infinite]" />
                                  </div>
                              </div>
                              {/* Card Front */}
                              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg overflow-hidden border-[1px] border-[#c8a84b] shadow-[0_0_20px_rgba(200,168,75,0.35)]">
                                  <img src={selectedCard.card.img} alt={selectedCard.card.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                  <div className="absolute inset-0 bg-[#000]/10 pointer-events-none" />
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Right Sub-column: Divine Readings Result */}
                     <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left space-y-3 px-2">
                        <AnimatePresence mode="wait">
                          {showResult ? (
                            <motion.div
                              key={selectedCard.card.name}
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -15 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-3"
                            >
                               <div className="space-y-0.5">
                                  <p className="text-[9px] tracking-[0.2em] font-medium text-[#c8a84b]/60 uppercase font-display">
                                     Major Arcana · Rank {selectedCard.card.rank}
                                  </p>
                                  <h2 className="text-base font-display text-[#c8a84b] font-bold tracking-tight">
                                     {selectedCard.card.name}
                                  </h2>
                               </div>

                               <div className="h-px w-full bg-[#c8a84b]/15" />

                               <div className="flex flex-col sm:flex-row items-center gap-2">
                                  <span className="text-[10px] tracking-widest text-[#7a6a4a] uppercase font-mono">
                                     The Answer Is:
                                  </span>
                                  <span 
                                     className="text-base font-display font-black tracking-widest px-4 py-0.5 rounded-lg bg-black/40 border border-[#c8a84b]/20"
                                     style={{ color: selectedCard.card.yes ? '#5eeb9d' : '#eb5e5e' }}
                                  >
                                     {selectedCard.card.yes ? 'YES' : 'NO'}
                                  </span>
                               </div>

                               <div className="h-px w-full bg-[#c8a84b]/15" />

                               <div className="relative py-1">
                                  <p className="text-xs italic text-[#e8d5a3]/90 leading-relaxed font-light">
                                     "{selectedCard.card.yes ? selectedCard.card.msg_yes : selectedCard.card.msg_no}"
                                  </p>
                               </div>

                               <div className="pt-1 flex justify-center sm:justify-start">
                                  <button 
                                    onClick={resetAll}
                                    className="px-4 py-1.5 bg-[#c8a84b] text-[#06030f] hover:bg-[#b5953e] font-display text-[9px] tracking-[0.2em] uppercase transition-all font-semibold shadow"
                                  >
                                    ✦ Shuffle Again ✦
                                  </button>
                               </div>
                            </motion.div>
                          ) : (
                            <div className="py-8 flex flex-col items-center sm:items-start justify-center space-y-2">
                               <RefreshCw className="w-6 h-6 text-[#c8a84b]/40 animate-spin" />
                               <p className="text-[9px] tracking-widest uppercase text-[#7a6a4a] animate-pulse">
                                  Whispering to the ether...
                                </p>
                            </div>
                          )}
                        </AnimatePresence>
                     </div>

                   </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

        </div>
      </div>

      <style>{`
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
