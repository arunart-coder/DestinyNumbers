import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, ShieldCheck, ShieldAlert, Sparkles, HelpCircle, ArrowRight, RefreshCw } from 'lucide-react';

interface PadaData {
  id: string;
  name: string;
  deity: string;
  range: string;
  minDegree: number;
  maxDegree: number;
  status: 'auspicious' | 'inauspicious' | 'mixed' | 'deadly';
  effect: string;
  remedy: string;
  advice: string;
}

const PADA_DATA_LIST: PadaData[] = [
  // North
  {
    id: 'N1',
    name: 'N1 — Roga',
    deity: 'Roga',
    range: '315° to 326.25°',
    minDegree: 315,
    maxDegree: 326.25,
    status: 'inauspicious',
    effect: 'Draws people with negative intentions; instills mental fear, anxiety, and restlessness. Has a pattern where women seek reasons to spend time outside the home.',
    remedy: 'Install Brass metal strips in the door threshold to ground unstable thoughts. Bright yellow lighting.',
    advice: 'Try to avoid using this zone as the primary daily door if alternatives exist.'
  },
  {
    id: 'N2',
    name: 'N2 — Naga',
    deity: 'Naga',
    range: '326.25° to 337.5°',
    minDegree: 326.25,
    maxDegree: 337.5,
    status: 'inauspicious',
    effect: 'Invites unnecessary enemies, jealousy, and continuous low-level domestic arguments. Can create a paranoid atmosphere in the household.',
    remedy: 'Paste specialized copper pyramid systems on the frame. Decorate the threshold with green aventurine crystals.',
    advice: 'If using N2, ensure family communications are handled deliberately and transparently.'
  },
  {
    id: 'N3',
    name: 'N3 — Mukhya',
    deity: 'Mukhya',
    range: '337.5° to 348.75°',
    minDegree: 337.5,
    maxDegree: 348.75,
    status: 'auspicious',
    effect: 'Exceptionally powerful. Delivers immense wealth, regular business prosperity, new commercial opportunities, and overall family growth. Associated with male offspring success.',
    remedy: 'None required. Keep clean, well-lit, and unmitigated to allow cosmic Prana to flood the home.',
    advice: 'One of the single most auspicious entrances in the entire 32-zone system. Maintain this gate in pristine condition!'
  },
  {
    id: 'N4',
    name: 'N4 — Bhallat',
    deity: 'Bhallat',
    range: '348.75° to 360°',
    minDegree: 348.75,
    maxDegree: 360,
    status: 'auspicious',
    effect: 'Strongly supports inherited assets, ancestral wealth, legacy claims, and sudden financial gains. Opens new pathways to resource accumulation.',
    remedy: 'Enhance this divine sector by hanging a traditional Toran made of mango leaves or marigolds.',
    advice: 'Excellent for established businesses or multi-generational families seeking stable continuity.'
  },
  {
    id: 'N5',
    name: 'N5 — Soma',
    deity: 'Soma',
    range: '0° to 11.25°',
    minDegree: 0,
    maxDegree: 11.25,
    status: 'auspicious',
    effect: 'Nurtures a calm, pious, and highly spiritual temperament. Brings deep mental tranquility, harmonious family relationships, and supports dedicated meditative or academic progress.',
    remedy: 'Accentuate with silver details or premium white marble structures at the threshold.',
    advice: 'Highly recommended for teachers, guides, healers, and families prioritizing mutual peace and spiritual wellness.'
  },
  {
    id: 'N6',
    name: 'N6 — Bhujang',
    deity: 'Bhujang',
    range: '11.25° to 22.5°',
    minDegree: 11.25,
    maxDegree: 22.5,
    status: 'inauspicious',
    effect: 'Ignites persistent social friction that can alienate the family. Prone to causing intense disputes, specifically between father and son.',
    remedy: 'Install Brass or Bronze door trims. Ensure no water leakage or dampness exists in this area.',
    advice: 'This is an entrance that erodes neighborly relations over time. Keep interactions respectful and neutral.'
  },
  {
    id: 'N7',
    name: 'N7 — Aditi',
    deity: 'Aditi',
    range: '22.5° to 33.75°',
    minDegree: 22.5,
    maxDegree: 33.75,
    status: 'inauspicious',
    effect: 'Associated with girls/daughters rebelling against traditional family principles, pursuing highly unconventional choices, and experiencing relationship instabilities outside conventional norms.',
    remedy: 'Add a copper helix or sacred geometry Vastu Swastikas above the door lintel.',
    advice: 'If you have young daughters in the house, pay close attention to balancing this door\'s energy.'
  },
  {
    id: 'N8',
    name: 'N8 — Diti',
    deity: 'Diti',
    range: '33.75° to 45°',
    minDegree: 33.75,
    maxDegree: 45,
    status: 'mixed',
    effect: 'Favorable focus on thrift and financial conservation. Helps control wasteful expenditures, strengthens bank balance, and consolidates savings gracefully.',
    remedy: 'Keep the entrance painted in clean ivory or warm cream tones. Avoid gray or blue shadows.',
    advice: 'A reliable and respectable alternative in the North direction if N3-N5 are physically unachievable.'
  },

  // East
  {
    id: 'E1',
    name: 'E1 — Shikhi',
    deity: 'Shikhi',
    range: '45° to 56.25°',
    minDegree: 45,
    maxDegree: 56.25,
    status: 'inauspicious',
    effect: 'Despite the rising Sun orientation, this corner represents volatile fire energy. Associated with accidents, minor house fires, sudden losses, and elevated friction.',
    remedy: 'Install a Brass metal strip directly in the threshold. Avoid red colored mats or red lights.',
    advice: 'The Northeast corner is meant to be light and empty; having a heavy entry gate here requires urgent balancing.'
  },
  {
    id: 'E2',
    name: 'E2 — Parjanya',
    deity: 'Parjanya',
    range: '56.25° to 67.5°',
    minDegree: 56.25,
    maxDegree: 67.5,
    status: 'mixed',
    effect: 'Brings high proportion of female children. Encourages high cash flows but equally triggers sudden, unnecessary expenditures, keeping net savings elusive.',
    remedy: 'Insert a copper wire or metal strip at the door entrance. Add a natural sandalwood diffuser nearby.',
    advice: 'Focus heavily on structured financial budgeting to neutralize the erratic outward cash flow of Parjanya.'
  },
  {
    id: 'E3',
    name: 'E3 — Jayanta',
    deity: 'Jayanta',
    range: '67.5° to 78.75°',
    minDegree: 67.5,
    maxDegree: 78.75,
    status: 'auspicious',
    effect: 'The "Victorious" gate. Generates stellar social success, consistent wealth accumulation, excellent professional achievements, and a highly functional, happy household.',
    remedy: 'No remedies required. Decorate with natural wood, beautiful plants, and light warm lighting.',
    advice: 'One of the absolute premier entrances in Vastu Shastra. A superb energetic foundation for all families.'
  },
  {
    id: 'E4',
    name: 'E4 — Indra',
    deity: 'Indra',
    range: '78.75° to 90°',
    minDegree: 78.75,
    maxDegree: 90,
    status: 'auspicious',
    effect: 'Carries kingly authority and social influence. Promotes support from official figures, government favors, societal recognition, and beneficial corporate networks.',
    remedy: 'Hang a shining Brass emblem of Surya (Sun God) directly on the outer side of the main door.',
    advice: 'Indispensable for politicians, public servants, consultants, and leaders who require public trust.'
  },
  {
    id: 'E5',
    name: 'E5 — Surya',
    deity: 'Surya',
    range: '90° to 101.25°',
    minDegree: 90,
    maxDegree: 101.25,
    status: 'inauspicious',
    effect: 'Too intense and scorching for domestic spaces. Triggers high irritability, anger issues, and verbal hostility among family members. Poor decisions born of pride.',
    remedy: 'Install a heavy copper strip along the door threshold. Cool down the space with white or soft ivory paints.',
    advice: 'Highly stressful for peaceful family life with elderly residents or young kids.'
  },
  {
    id: 'E6',
    name: 'E6 — Satya',
    deity: 'Satya',
    range: '101.25° to 112.5°',
    minDegree: 101.25,
    maxDegree: 112.5,
    status: 'inauspicious',
    effect: 'Triggers unreliability. Residents struggle to honor commitments, eroding trust. Specific negative impacts on the daughters of the house and public status.',
    remedy: 'Ground this energy using a copper strip or copper pyramids. Decorate with stable yellow earth elements.',
    advice: 'In businesses, this zone can lead to client distrust due to unfulfilled deadlines.'
  },
  {
    id: 'E7',
    name: 'E7 — Bhrisha',
    deity: 'Bhrisha',
    range: '112.5° to 123.75°',
    minDegree: 112.5,
    maxDegree: 123.75,
    status: 'inauspicious',
    effect: 'Renders residents hyper-critical, insensitive to others, and highly confrontational. Draws adversaries and creates a harsh temperament inappropriate for family harmony.',
    remedy: 'Install a Brass threshold. Balance with calming fragrances and gentle soft music/chimes.',
    advice: 'Frequently leads to emotional distancing between partners inside the home.'
  },
  {
    id: 'E8',
    name: 'E8 — Akash',
    deity: 'Akash',
    range: '123.75° to 135°',
    minDegree: 123.75,
    maxDegree: 135,
    status: 'deadly',
    effect: 'Extremely critical. Triggers severe financial losses, unexpected accidents, theft, sudden illnesses, and critical blockages in career growth. Strictly warned against.',
    remedy: 'Urgently block the negative flow by installing a continuous Brass or Lead strip inside the threshold, use green quartz or sea salt bowls.',
    advice: 'Vastu Shastra strongly mandates that the primary door must never go in E8. Seek a professional physical change if possible.'
  },

  // South
  {
    id: 'S1',
    name: 'S1 — Anil',
    deity: 'Anil',
    range: '135° to 146.25°',
    minDegree: 135,
    maxDegree: 146.25,
    status: 'inauspicious',
    effect: 'Negatively impacts the male youth. Fuels intense friction between sons and parents, making children prone to fall into bad company, drugs, or listlessness.',
    remedy: 'Add a continuous Copper strip inside the door block. Make sure the entrance is brightly lit.',
    advice: 'Southeast corner must have healthy fire energy; S1 represents unbalanced wind that scatters domestic stability.'
  },
  {
    id: 'S2',
    name: 'S2 — Poosha',
    deity: 'Poosha',
    range: '146.25° to 157.5°',
    minDegree: 146.25,
    maxDegree: 157.5,
    status: 'mixed',
    effect: 'Mixed qualities. May spark recurring friction with extended relatives and in-laws, but heavily supports rapid promotion, safety, and regular salary growth for MNC corporate employees.',
    remedy: 'Keep the door neat, clean, and painted in peach, coral, or off-white colors.',
    advice: 'A highly functional entry point for professional workers, though social relations require active patience.'
  },
  {
    id: 'S3',
    name: 'S3 — Vitatha',
    deity: 'Vitatha',
    range: '157.5° to 168.75°',
    minDegree: 157.5,
    maxDegree: 168.75,
    status: 'mixed',
    effect: 'Provides strong vocational skills, high capability, extreme ambition, and material wealth. However, it also inclines residents to bypass ethics and employ cunning strategies.',
    remedy: 'Mount a Panchmukhi Hanuman sticker or copper plaque above the door on the inside.',
    advice: 'Brings immense worldly success but watch your ethical alignment carefully to prevent downstream karmic backlash.'
  },
  {
    id: 'S4',
    name: 'S4 — Grihrakshita',
    deity: 'Grihrakshita',
    range: '168.75° to 180°',
    minDegree: 168.75,
    maxDegree: 180,
    status: 'auspicious',
    effect: 'Phenomenal. Welcomes massive fame, deep wealth accumulation, public appreciation, and magnetic popularity. Outstanding for creative pros, actors, media, and performers.',
    remedy: 'No remedy needed. Highlight this entrance with warm lamps, copper pots, or beautiful red/brown accents.',
    advice: 'Deconstructs the myth that all south entrances are bad. S4 is an engine of growth and recognition!'
  },
  {
    id: 'S5',
    name: 'S5 — Yama',
    deity: 'Yama',
    range: '180° to 191.25°',
    minDegree: 180,
    maxDegree: 191.25,
    status: 'deadly',
    effect: 'Saps resources. Triggers unceasing financial drain, accumulation of heavy debts, bankruptcy risks, and the inability to retain earnings despite a high income.',
    remedy: 'Install a thick Lead strip inside the metal track of the threshold to seal off the Yama leakage.',
    advice: 'Extremely hazardous. Vastu case histories associate this with long-term financial stagnation.'
  },
  {
    id: 'S6',
    name: 'S6 — Gandharva',
    deity: 'Gandharva',
    range: '191.25° to 202.5°',
    minDegree: 191.25,
    maxDegree: 202.5,
    status: 'deadly',
    effect: 'Brings sudden financial losses, deep public disgrace, loss of social reputation, and systemic defalcations. Underlines a heavy atmosphere of shame.',
    remedy: 'Install a Lead strip and neutral yellow earthen colors. Avoid any extensions of this doorway.',
    advice: 'This is a high-risk zone. Do not ignore warning signs of reputational damage or financial audits.'
  },
  {
    id: 'S7',
    name: 'S7 — Bhringraj',
    deity: 'Bhringraj',
    range: '202.5° to 213.75°',
    minDegree: 202.5,
    maxDegree: 213.75,
    status: 'inauspicious',
    effect: 'Creates a pattern of wasted effort. Your hard work consistently yields zero results, dragging residents into demotivation, severe disillusionment, and eventual giving up.',
    remedy: 'Install Lead metal strips or place heavy yellow stones at the inner corner. Keep area highly stable.',
    advice: 'Can lead to chronic exhaustion. Balance this zone to ensure your hard work starts showing real results.'
  },
  {
    id: 'S8',
    name: 'S8 — Mriga',
    deity: 'Mriga',
    range: '213.75° to 225°',
    minDegree: 213.75,
    maxDegree: 225,
    status: 'deadly',
    effect: 'Highly critical SW corner. Produces extreme isolation, severe emotional detachment, progressive loss of life force, power, and wealth. Triggers major psychological crises in youth.',
    remedy: 'Seal immediately with a solid Lead threshold, heavy crystal geodes, and ensure no garbage or dirt lies here.',
    advice: 'The Southwest corner is representing earth stability (Nairutya). Having an entry hole here represents structural vulnerability. Immediate professional care is required.'
  },

  // West
  {
    id: 'W1',
    name: 'W1 — Pitra',
    deity: 'Pitra',
    range: '225° to 236.25°',
    minDegree: 225,
    maxDegree: 236.25,
    status: 'deadly',
    effect: 'Extremely critical. Associated with acute poverty, constant financial scarcity, lack of life force, and statistically lowered life expectancy or health crises for senior members.',
    remedy: 'Urgently install a Lead metal strip inside the door threshold and maintain a heavy visual weight.',
    advice: 'One of the most dangerous entrances to leave unmanaged. Seek physical repositioning or Vastu shielding.'
  },
  {
    id: 'W2',
    name: 'W2 — Dwarika',
    deity: 'Dwarika',
    range: '236.25° to 247.5°',
    minDegree: 236.25,
    maxDegree: 247.5,
    status: 'inauspicious',
    effect: 'Leads to severe career and job instability. Promotes unexplained domestic anxiety and ungrounded fears regarding family safety and relationship loyalty.',
    remedy: 'Insert Brass metal strips and decorate the entrance with clean, stable yellow hues.',
    advice: 'Creates a consistent feeling of living on shaky ground professionally.'
  },
  {
    id: 'W3',
    name: 'W3 — Sugriva',
    deity: 'Sugriva',
    range: '247.5° to 258.75°',
    minDegree: 247.5,
    maxDegree: 258.75,
    status: 'auspicious',
    effect: 'Carries kingly support. Brings vast monetary growth, amazing commercial success, stable family life, and consistent high returns on invested capital.',
    remedy: 'Keep the door area clean, well-lit. Accentuate with high-quality white, silver, or light blue elements.',
    advice: 'Highly auspicious and reliable door for any west-facing property. Supports massive commercial expansion.'
  },
  {
    id: 'W4',
    name: 'W4 — Pushpdanta',
    deity: 'Pushpdanta',
    range: '258.75° to 270°',
    minDegree: 258.75,
    maxDegree: 270,
    status: 'auspicious',
    effect: 'Excellent for deep wealth accumulation and comfortable living. Guarantees safety, happiness, and progressive lifestyle upgrades for all family members (specifically female and male children).',
    remedy: 'Highlight with clear white lighting and clean metal doors. Keep always clean and free of shoes.',
    advice: 'Produces a settled, satisfied life where basic comforts are abundantly fulfilled.'
  },
  {
    id: 'W5',
    name: 'W5 — Varuna',
    deity: 'Varuna',
    range: '270° to 281.25°',
    minDegree: 270,
    maxDegree: 281.25,
    status: 'mixed',
    effect: 'Triggers absolute perfectionism. Residents become exceptionally detailed, hardworking, but hyper-ambitious. Delivers wealth but at the cost of peaceful relaxation.',
    remedy: 'Implement light cream colors. Avoid dark blue shades at the entrance.',
    advice: 'Requires active calming exercises at home to switch off the hyper-active mind.'
  },
  {
    id: 'W6',
    name: 'W6 — Nakaratma',
    deity: 'Nakaratma',
    range: '281.25° to 292.5°',
    minDegree: 281.25,
    maxDegree: 292.5,
    status: 'inauspicious',
    effect: 'Primarily affects psychological well-being. Residents are vulnerable to mild depression, negative loops, and severe stress. Brings specific, unexpected setbacks to govt employees.',
    remedy: 'Install Iron or Steel metal strips in the threshold. Put a crystal quartz cluster nearby.',
    advice: 'A door that drains mental stamina. Strongly prioritize mindfulness practice.'
  },
  {
    id: 'W7',
    name: 'W7 — Shauka',
    deity: 'Shauka',
    range: '292.5° to 303.75°',
    minDegree: 292.5,
    maxDegree: 303.75,
    status: 'inauspicious',
    effect: 'Produces acute stress, family grief, financial scarcity, and chronic health concerns. Leads residents towards addictive habits as temporary escape routes.',
    remedy: 'Ground this door with White marble thresholds and high-vibrational Himalayan salt bowls.',
    advice: 'Pay very careful attention to maintaining physical health and mental routines if this door is active.'
  },
  {
    id: 'W8',
    name: 'W8 — Papyakshama',
    deity: 'Papyakshama',
    range: '303.75° to 315°',
    minDegree: 303.75,
    maxDegree: 315,
    status: 'inauspicious',
    effect: 'Triggers tendencies to adopt deceitful, high-risk, or illicit methods for quick gains. Keeps residents (specifically men) continuously outside the home, disrupting family ties.',
    remedy: 'Apply Brass helix systems. Paint the entryway in warm stable earth tones.',
    advice: 'Does not support stable, warm, or long-term domestic security.'
  }
];

export function EntrancesVastuCalculator() {
  const [degree, setDegree] = useState<number>(0);
  const [selectedDirection, setSelectedDirection] = useState<'N' | 'E' | 'S' | 'W'>('N');
  const [activePada, setActivePada] = useState<PadaData>(PADA_DATA_LIST[2]); // Default to N3 (Mukhya)

  // Calculate matching pada from degree input
  const handleDegreeChange = (val: number) => {
    let normDegree = val % 360;
    if (normDegree < 0) normDegree += 360;
    setDegree(normDegree);

    // Map degree to correct pada
    const found = PADA_DATA_LIST.find((p) => {
      // Handle the case where range wraps around 360°/0° (N4 is 348.75 to 360, but wait, North is 315 to 45)
      // Actually our dataset divides N1..8 as:
      // N1: 315 to 326.25
      // N2: 326.25 to 337.5
      // N3: 337.5 to 348.75
      // N4: 348.75 to 360
      // N5: 0 to 11.25
      // N6: 11.25 to 22.5
      // N7: 22.5 to 33.75
      // N8: 33.75 to 45
      // East: E1..E8 from 45 to 135
      // South: S1..S8 from 135 to 225
      // West: W1..W8 from 225 to 315
      return normDegree >= p.minDegree && normDegree < p.maxDegree;
    });

    if (found) {
      setActivePada(found);
      // Determine direction prefix
      if (found.id.startsWith('N')) setSelectedDirection('N');
      else if (found.id.startsWith('E')) setSelectedDirection('E');
      else if (found.id.startsWith('S')) setSelectedDirection('S');
      else if (found.id.startsWith('W')) setSelectedDirection('W');
    }
  };

  const handlePadaClick = (pada: PadaData) => {
    setActivePada(pada);
    // Find midpoint degree to align cursor
    const midDegree = (pada.minDegree + pada.maxDegree) / 2;
    setDegree(Math.round(midDegree * 100) / 100);
    if (pada.id.startsWith('N')) setSelectedDirection('N');
    else if (pada.id.startsWith('E')) setSelectedDirection('E');
    else if (pada.id.startsWith('S')) setSelectedDirection('S');
    else if (pada.id.startsWith('W')) setSelectedDirection('W');
  };

  const getStatusBadge = (status: PadaData['status']) => {
    switch (status) {
      case 'auspicious':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> Auspicious
          </span>
        );
      case 'inauspicious':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-full text-xs font-bold text-amber-600 uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5" /> Unfavorable
          </span>
        );
      case 'mixed':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/15 border border-blue-500/30 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" /> Mixed Quality
          </span>
        );
      case 'deadly':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-rose-500/15 border border-rose-500/30 rounded-full text-xs font-bold text-rose-600 uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5" /> Highly Inauspicious
          </span>
        );
    }
  };

  const filteredPadas = PADA_DATA_LIST.filter(p => p.id.startsWith(selectedDirection));

  return (
    <div className="mt-4 md:mt-6 bg-white border border-[#1C3557]/10 shadow-[0_30px_70px_rgba(28,53,87,0.06)] rounded-none overflow-hidden text-[#1C3557]">
      {/* Top Banner */}
      <div className="bg-[#1C3557] text-white p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Compass className="w-3.5 h-3.5 animate-spin-slow text-[#C9A84C]" /> 32 Pada Vastu Analyzer
          </span>
          <h3 className="font-heading text-3xl md:text-4xl text-white mb-2 italic">
            Map Your Threshold precisely
          </h3>
          <p className="text-sm text-white/70 leading-relaxed font-sans max-w-xl">
            Vastu Shastra hinges not on the generic direction of face, but the exact 11.25° segment. Input your precise bearing or browse the 32 zones to see what energy governs your home.
          </p>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid lg:grid-cols-12 gap-0 border-t border-[#1C3557]/5">
        {/* Left Side: Angle Input & Compass Diagram */}
        <div className="lg:col-span-5 p-6 md:p-8 border-r border-[#1C3557]/5 flex flex-col justify-between bg-[#F5ECD7]/10">
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#C9A84C]">Diagnostic Bearings</h4>
            
            {/* Range slider */}
            <div className="space-y-3 bg-white p-6 border border-[#1C3557]/5 shadow-sm">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1C3557]/70">Compass angle:</label>
                <span className="font-mono text-lg font-black text-[#C9A84C]">{degree}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="359"
                value={Math.round(degree)}
                onChange={(e) => handleDegreeChange(parseInt(e.target.value))}
                className="w-full accent-[#C9A84C] cursor-pointer h-1.5 bg-[#1C3557]/10 rounded"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#1C3557]/40">
                <span>0° (North)</span>
                <span>90° (East)</span>
                <span>180° (South)</span>
                <span>270° (West)</span>
              </div>
            </div>

            {/* Direct Number Input */}
            <div className="flex items-center gap-4 bg-white p-4 border border-[#1C3557]/5">
              <span className="text-xs font-bold text-[#1C3557]/60 uppercase whitespace-nowrap">Enter exact compass bearing:</span>
              <div className="flex items-center gap-2 w-full">
                <input
                  type="number"
                  min="0"
                  max="359.99"
                  step="0.01"
                  value={degree}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (!isNaN(val)) handleDegreeChange(val);
                  }}
                  className="w-full p-2 bg-[#F5ECD7]/20 border border-[#1C3557]/15 focus:border-[#C9A84C] outline-none font-mono text-sm text-center font-bold"
                  placeholder="e.g. 74.5"
                />
                <span className="font-mono text-sm font-black text-[#1C3557]/50 font-sans">°</span>
              </div>
            </div>
          </div>

          {/* Graphical Compass diagram */}
          <div className="relative flex justify-center py-8">
            <div className="w-56 h-56 rounded-full border border-[#1C3557]/20 flex items-center justify-center relative bg-white shadow-inner">
              {/* Direction text marks */}
              <span className="absolute top-2 text-xs font-black text-[#1C3557]/50">N</span>
              <span className="absolute right-2 text-xs font-black text-[#1C3557]/50">E</span>
              <span className="absolute bottom-2 text-xs font-black text-[#1C3557]/50">S</span>
              <span className="absolute left-2 text-xs font-black text-[#1C3557]/50">W</span>
              
              {/* Spinning needle */}
              <motion.div
                animate={{ rotate: degree }}
                transition={{ type: 'spring', stiffness: 85, damping: 15 }}
                className="w-1.5 h-40 bg-gradient-to-b from-[#C9A84C] via-[#C9A84C] to-red-500 rounded-full relative flex items-center justify-center"
                style={{ originY: 0.5 }}
              >
                {/* Center dial pin */}
                <div className="w-3.5 h-3.5 bg-[#1C3557] rounded-full border border-white shadow absolute top-[calc(50%-7px)]" />
              </motion.div>

              {/* Diagonal guideline markers */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#1C3557]/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right Side: Direction Selector & Results Info */}
        <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Direction quick tabs */}
            <h4 className="text-xs font-black uppercase tracking-widest text-[#C9A84C] mb-4">Directional Zones</h4>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {[
                { label: 'North Gate', val: 'N', desc: '0° to 45° | 315° to 360°' },
                { label: 'East Gate', val: 'E', desc: '45° to 135°' },
                { label: 'South Gate', val: 'S', desc: '135° to 225°' },
                { label: 'West Gate', val: 'W', desc: '225° to 315°' }
              ].map((dir) => (
                <button
                  key={dir.val}
                  onClick={() => {
                    setSelectedDirection(dir.val as 'N' | 'E' | 'S' | 'W');
                    // Pick the default 3rd pad of that direction
                    const fallbackPad = PADA_DATA_LIST.find(p => p.id === `${dir.val}3`);
                    if (fallbackPad) handlePadaClick(fallbackPad);
                  }}
                  className={`p-3 border text-left transition-all duration-300 ${
                    selectedDirection === dir.val
                      ? 'bg-[#1C3557] border-[#1C3557] text-white shadow-md'
                      : 'border-[#1C3557]/10 hover:border-[#1C3557]/30 bg-white text-[#1C3557]/70'
                  }`}
                >
                  <span className="text-sm font-black block font-sans">{dir.label}</span>
                  <span className="text-[9px] block opacity-60 font-mono mt-0.5">{dir.desc}</span>
                </button>
              ))}
            </div>

            {/* Padas Directory for chosen direction */}
            <div className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#1C3557]/50 block mb-3">
                Segments list in {selectedDirection === 'N' ? 'North' : selectedDirection === 'E' ? 'East' : selectedDirection === 'S' ? 'South' : 'West'} direction (Clockwise):
              </span>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5">
                {filteredPadas.map((pada) => {
                  const isActive = activePada.id === pada.id;
                  let bgClass = "bg-[#1C3557]/5 border-[#1C3557]/10 hover:bg-[#1C3557]/10 hover:border-[#1C3557]/20";
                  if (isActive) {
                    if (pada.status === 'auspicious') bgClass = 'bg-emerald-500 text-white border-emerald-500 shadow-sm';
                    else if (pada.status === 'inauspicious') bgClass = 'bg-amber-500 text-white border-amber-500 shadow-sm';
                    else if (pada.status === 'mixed') bgClass = 'bg-blue-500 text-white border-blue-500 shadow-sm';
                    else if (pada.status === 'deadly') bgClass = 'bg-rose-500 text-white border-rose-500 shadow-sm';
                  }

                  return (
                    <button
                      key={pada.id}
                      onClick={() => handlePadaClick(pada)}
                      className={`py-2 text-center border font-mono text-xs font-black transition-all ${bgClass}`}
                    >
                      {pada.id}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Pada Detail Card */}
            <motion.div
              key={activePada.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#F5ECD7]/30 border border-[#1C3557]/5 p-6 rounded-none relative"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#1C3557]/10 pb-4 mb-4">
                <div>
                  <h4 className="text-xl font-display font-medium text-[#1C3557] italic">
                    {activePada.name}
                  </h4>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C3557]/60 block mt-0.5">
                    Governed Deity: <strong className="text-[#C9A84C] font-semibold">{activePada.deity}</strong> | Segment: {activePada.range}
                  </span>
                </div>
                {getStatusBadge(activePada.status)}
              </div>

              <div className="space-y-4 text-sm font-sans">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#1C3557]/50 block mb-1">Energetic effects/Outcome:</span>
                  <p className="text-[#1C3557]/80 italic leading-relaxed text-sm">
                    "{activePada.effect}"
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/60 p-3 border border-[#1C3557]/5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#1C3557]/50 block mb-1">Dr. Poovaiah\'s Advice:</span>
                    <p className="text-xs text-[#1C3557]/70 italic leading-relaxed">
                      {activePada.advice}
                    </p>
                  </div>
                  <div className="bg-white/60 p-3 border border-[#1C3557]/5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700/60 block mb-1">Vastu Remedial Action:</span>
                    <p className="text-xs text-[#1C3557]/70 italic leading-relaxed">
                      {activePada.remedy}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Consultation CTA block */}
          <div className="mt-8 pt-6 border-t border-[#1C3557]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div>
              <h5 className="font-display font-medium italic text-base">In doubt about your compass mapping?</h5>
              <p className="text-xs text-[#1C3557]/60 italic mt-0.5">
                Our Bengaluru experts offer precise digital compass mapping and personal numerology synchronization.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#1C3557] text-[#F5ECD7] font-display font-black text-[10px] uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#1C3557] transition-all shrink-0 shadow-sm"
            >
              Get Expert Audit <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
