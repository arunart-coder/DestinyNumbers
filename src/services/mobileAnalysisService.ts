import { 
  getSingleDigit, 
  calculateMoolank, 
  calculateBhagyank, 
  getZodiacInfo, 
  PYTHAGOREAN_CHART, 
  VOWELS, 
  PLANET_RELATIONS,
  RATIO_COMPATIBILITY,
  calculatePyramidValue,
  getCompoundMeaning,
  DIGIT_COMBINATIONS,
  POSITION_ANALYSIS,
  REPEATED_DIGIT_EFFECTS,
  MISSING_DIGIT_EFFECTS,
  QUADRUPLE_WARNINGS
} from '../lib/numerology';

export interface MobileReport {
  mobile: string;
  total: number;
  compound: number;
  planet: string;
  verdicts: {
    personal: 'GOOD' | 'NOT GOOD' | 'NEUTRAL';
    official: 'GOOD' | 'NOT GOOD' | 'NEUTRAL';
    both: 'GOOD' | 'NOT GOOD' | 'NEUTRAL';
  };
  compatibility: {
    score: string;
    label: string;
  };
  pyramid: {
    digit: number;
    interpretation: string;
    layers: number[][];
  };
  vibrationTable: {
    category: string;
    numbers: number[];
    count: number;
    percentage: number;
  }[];
  hasConditionalNumbers: boolean;
  combinations: {
    positive: string[];
    negative: string[];
  };
  positions: { pos: number; digit: number; meaning: string }[];
  warnings: string[];
  repeatedEffects: string[];
  missingEffects: string[];
  recommendation: {
    status: 'IDEAL' | 'MODERATE' | 'CRITICAL';
    verdict: string;
    suggestedTotals: number[];
  };
  compoundMeaning: string;
  last4: {
    digits: string;
    compound: number;
    single: number;
  };
}

const MOBILE_VIBRATION_RULES: Record<number, { enhance: number[]; depress: number[]; neutral: number[]; conditional: number[] }> = {
  1: { enhance: [1, 2, 3, 5, 6, 9], depress: [8], neutral: [4, 7], conditional: [] },
  2: { enhance: [1, 2, 3, 5], depress: [4, 8, 9], neutral: [6], conditional: [] },
  3: { enhance: [1, 2, 3, 5], depress: [6], neutral: [4, 8, 9, 7], conditional: [7] }, // 7* is Enhance but counted as Neutral
  4: { enhance: [5, 6, 7], depress: [2, 9], neutral: [1, 3, 4, 8], conditional: [4, 8] }, // 4*, 8* are Depress but counted as Neutral
  5: { enhance: [1, 2, 3, 5, 6], depress: [], neutral: [4, 7, 8, 9], conditional: [] },
  6: { enhance: [1, 5, 6, 7], depress: [3], neutral: [2, 4, 8, 9], conditional: [] },
  7: { enhance: [1, 4, 5, 6], depress: [], neutral: [2, 3, 8, 9], conditional: [] },
  8: { enhance: [3, 5, 6, 7], depress: [1, 2], neutral: [9, 4, 8], conditional: [4, 8] }, // 4*, 8* are Depress but counted as Neutral
  9: { enhance: [1, 3, 5], depress: [2, 4], neutral: [6, 7, 8, 9], conditional: [] }
};

export interface MatrixSource {
  name: string;
  val: number;
  enhance: number[];
  depress: number[];
}

export interface MatrixRow {
  usage: string;
  sources: MatrixSource[];
  common: number[];
}

export interface DetailedAnalysis {
  core: {
    moolank: number;
    bhagyank: number;
    zodiacInfluenced: number;
    soul: number;
    personality: number;
    destiny: number;
    sign: string;
  };
  luckyNumbers: {
    personal: number[];
    official: number[];
    both: number[];
  };
  matrix: MatrixRow[];
  reports: MobileReport[];
}

export const performAdvancedAnalysis = (
  name: string, 
  dob: string, 
  mobileNumbers: string[],
  usageType: string // 'Personal' | 'Official' | 'Both'
): DetailedAnalysis => {
  // Step 1: Moolank
  const moolank = calculateMoolank(dob);
  
  // Step 2: Bhagyank
  const bhagyank = calculateBhagyank(dob);
  
  // Step 3: Name Numbers
  const chars = name.toUpperCase().replace(/[^A-Z]/g, '').split('');
  const values = chars.map(c => PYTHAGOREAN_CHART[c] || 0);
  const destiny = getSingleDigit(values.reduce((a, b) => a + b, 0));
  
  const vowelSum = chars.filter(c => VOWELS.includes(c)).reduce((acc, c) => acc + (PYTHAGOREAN_CHART[c] || 0), 0);
  const soul = getSingleDigit(vowelSum);
  
  const consonantSum = chars.filter(c => !VOWELS.includes(c)).reduce((acc, c) => acc + (PYTHAGOREAN_CHART[c] || 0), 0);
  const personality = getSingleDigit(consonantSum);
  
  // Step 4: Zodiac
  const zodiac = getZodiacInfo(dob);
  
  // Step 6: Determine Lucky Mobile Total Numbers
  const mRelations = PLANET_RELATIONS[moolank];
  const zRelations = PLANET_RELATIONS[zodiac.influenced];
  const bRelations = PLANET_RELATIONS[bhagyank];
  
  const getIntersection = (lists: number[][]) => {
    return lists.reduce((a, b) => a.filter(x => b.includes(x)));
  };
  
  const luckyPersonal = getIntersection([mRelations.enhance, PLANET_RELATIONS[personality].enhance]);
  const luckyOfficial = getIntersection([zRelations.enhance, PLANET_RELATIONS[soul].enhance]);
  const luckyBoth = getIntersection([bRelations.enhance, PLANET_RELATIONS[destiny].enhance]);
  
  const matrix: MatrixRow[] = [
    {
      usage: 'Personal No',
      common: luckyPersonal,
      sources: [
        { name: 'Birth Number', val: moolank, ...mRelations },
        { name: 'Personality', val: personality, ...PLANET_RELATIONS[personality] }
      ]
    },
    {
      usage: 'Office No',
      common: luckyOfficial,
      sources: [
        { name: 'Zodiac', val: zodiac.influenced, ...zRelations },
        { name: 'Soul No', val: soul, ...PLANET_RELATIONS[soul] }
      ]
    },
    {
      usage: 'Both Use',
      common: luckyBoth,
      sources: [
        { name: 'Life Path Number', val: bhagyank, ...bRelations },
        { name: 'Destiny/Expr', val: destiny, ...PLANET_RELATIONS[destiny] }
      ]
    }
  ];

  const reports = mobileNumbers.filter(m => m.trim()).map(mobile => {
    const rawMobile = mobile.replace(/\D/g, '');
    const mobileDigits = rawMobile.split('').map(Number);
    const compound = mobileDigits.reduce((a, b) => a + b, 0);
    const total = getSingleDigit(compound);
    
    // Usage Suitability
    const checkSuitability = (val: number, list: number[]): 'GOOD' | 'NOT GOOD' | 'NEUTRAL' => 
        list.includes(val) ? 'GOOD' : 'NEUTRAL';
    
    // Compatibility Score
    const ratio = Math.floor(total / destiny) || 1;
    const finalRatio = getSingleDigit(ratio);
    const scoreVal = RATIO_COMPATIBILITY[finalRatio]?.[destiny] || 1;
    let label = "50%-74%";
    let status = "SOMEWHAT COMPATIBLE";
    
    if (scoreVal === 3) { label = "100%"; status = "BEST COMPATIBILITY"; }
    else if (scoreVal === 2) { label = "75%-90%"; status = "HIGHLY COMPATIBLE"; }
    else if (scoreVal === -1) { label = "25%-49%"; status = "SOMEWHAT INCOMPATIBLE"; }
    else if (scoreVal === -2) { label = "1%-24%"; status = "HIGHLY INCOMPATIBLE"; }
    
    // Pyramid
    const pyramidDigit = calculatePyramidValue(rawMobile);
    // Get full pyramid layers for display if needed
    const pyramidLayers = getPyramidLayers(rawMobile);
    const pyramidInterps: Record<number, string> = {
      1: "Success in career, relations with father (Positive)",
      2: "Uncertainty in mental peace (Doubtful)",
      3: "Success in money, religion (Positive)",
      4: "Uncertainty, success in electronics (Both ways)",
      5: "Success in education, trade, partnership (Positive)",
      6: "Success in married life, prosperity, money (Positive)",
      7: "Depends on luck; success in research (Variable)",
      8: "Delays/difficulties; success in machinery (Difficult)",
      9: "Favourable in worldly matters; success in law/property (Positive)"
    };
    
    // Combinations
    const cleanedMobile = rawMobile.replace(/0/g, ''); // Prompt says remove 0s
    // Also remove consecutive duplicates for combinations context? Prompt: "From the cleaned mobile number (after removing 0s and consecutive duplicates)"
    const mobileDigitsForCombi: number[] = [];
    const cleanDigits = cleanedMobile.split('').map(Number);
    for(let i=0; i < cleanDigits.length; i++) {
        if (cleanDigits[i] !== cleanDigits[i+1]) {
            mobileDigitsForCombi.push(cleanDigits[i]);
        }
    }
    
    const combos: string[] = [];
    for(let i=0; i < mobileDigitsForCombi.length - 1; i++) {
        combos.push(`${mobileDigitsForCombi[i]}${mobileDigitsForCombi[i+1]}`);
    }
    
    const positiveCombos: string[] = [];
    const negativeCombos: string[] = [];
    combos.forEach(c => {
        if (DIGIT_COMBINATIONS[c]) {
            positiveCombos.push(`${c}: ${DIGIT_COMBINATIONS[c].pos}`);
            negativeCombos.push(`${c}: ${DIGIT_COMBINATIONS[c].neg}`);
        }
    });

    // Positions (Notable: 1, 9, 10 usually)
    const positions = mobileDigits.map((d, i) => {
        const pos = i + 1;
        return { pos, digit: d, meaning: POSITION_ANALYSIS[pos] || '' };
    });

    // Warnings
    const warnings: string[] = [];
    if (mobileDigits.filter(d => d === 1).length >= 4) warnings.push("1 appears 4+ times — Strongly advise against this number.");
    if (rawMobile.endsWith('0')) warnings.push("Number ends with 0 — Negative vibration, avoid if possible.");
    
    const digitCounts: Record<number, number> = {};
    mobileDigits.forEach(d => digitCounts[d] = (digitCounts[d] || 0) + 1);
    Object.entries(digitCounts).forEach(([digit, count]) => {
        if (count >= 4) {
            const warning = QUADRUPLE_WARNINGS[parseInt(digit)];
            if (warning) warnings.push(`Quadruple ${digit}: ${warning}`);
        }
    });

    // Repeated/Missing
    const repeatedEffects: string[] = [];
    mobileStrAnalysis(rawMobile).repeated.forEach(d => {
        if (REPEATED_DIGIT_EFFECTS[d]) repeatedEffects.push(`${d}${d}: ${REPEATED_DIGIT_EFFECTS[d]}`);
    });

    const missingEffects: string[] = [];
    [1,2,3,4,5,6,7,8,9].forEach(d => {
        if (!rawMobile.includes(d.toString())) {
            missingEffects.push(`Missing ${d}: ${MISSING_DIGIT_EFFECTS[d]}`);
        }
    });

    // Last 4 Digits Analysis
    const last4Str = rawMobile.slice(-4);
    const last4DigitsArr = last4Str.split('').map(Number);
    const last4Compound = last4DigitsArr.reduce((a, b) => a + b, 0);
    const last4Single = getSingleDigit(last4Compound);

    // Vibration Table (New logic)
    const nonZeroDigits = mobileDigits.filter(d => d !== 0);
    const totalCount = nonZeroDigits.length || 1;
    const rules = MOBILE_VIBRATION_RULES[total] || { enhance: [], depress: [], neutral: [], conditional: [] };
    
    let enhanceCount = 0;
    let depressCount = 0;
    let neutralCount = 0;
    let hasConditional = false;

    const enhanceNums: number[] = [];
    const depressNums: number[] = [];
    const neutralNums: number[] = [];

    nonZeroDigits.forEach(d => {
      if (rules.conditional.includes(d)) {
        neutralCount++;
        neutralNums.push(d);
        hasConditional = true;
      } else if (rules.enhance.includes(d)) {
        enhanceCount++;
        enhanceNums.push(d);
      } else if (rules.depress.includes(d)) {
        depressCount++;
        depressNums.push(d);
      } else {
        neutralCount++;
        neutralNums.push(d);
      }
    });

    const vibrationTable = [
      { category: '✅ Enhance', numbers: enhanceNums, count: enhanceCount, percentage: Math.round((enhanceCount / totalCount) * 100) },
      { category: '⚠️ Depress', numbers: depressNums, count: depressCount, percentage: Math.round((depressCount / totalCount) * 100) },
      { category: '⚪ Neutral', numbers: neutralNums, count: neutralCount, percentage: Math.round((neutralCount / totalCount) * 100) }
    ];

    // Final Conclusion Logic
    const scorePct = parseInt(label.split('%')[0]);
    let recStatus: 'IDEAL' | 'MODERATE' | 'CRITICAL' = 'MODERATE';
    let recVerdict = "";
    
    if (scorePct >= 75 && depressCount === 0 && !rawMobile.endsWith('0')) {
      recStatus = 'IDEAL';
      recVerdict = "This number has a strong positive frequency aligned with your core energy. It is highly suitable for your personal and professional growth.";
    } else if (scorePct < 50 || depressCount >= 2 || rawMobile.endsWith('0')) {
      recStatus = 'CRITICAL';
      recVerdict = "This number contains conflicting vibrations or ends with a zero energy, which may lead to stagnant results. We strongly suggest transitioning to a better suited frequency.";
    } else {
      recStatus = 'MODERATE';
      recVerdict = "This number is neutral. While it doesn't cause harm, it doesn't actively boost your destiny. Upgrading to a highly compatible vibration is recommended for better luck.";
    }

    const suggestedTotals = Array.from(new Set([...mRelations.enhance, ...bRelations.enhance])).slice(0, 4);

    return {
      mobile,
      total,
      compound,
      compoundMeaning: getCompoundMeaning(compound),
      planet: getPlanetName(total),
      verdicts: {
        personal: checkSuitability(total, luckyPersonal),
        official: checkSuitability(total, luckyOfficial),
        both: checkSuitability(total, luckyBoth)
      },
      compatibility: {
        score: label,
        label: status
      },
      pyramid: {
        digit: pyramidDigit,
        interpretation: pyramidInterps[pyramidDigit] || 'Variable vibration',
        layers: pyramidLayers
      },
      vibrationTable,
      hasConditionalNumbers: hasConditional,
      recommendation: {
        status: recStatus,
        verdict: recVerdict,
        suggestedTotals
      },
      combinations: {
        positive: positiveCombos.slice(0, 3),
        negative: negativeCombos.slice(0, 3)
      },
      positions: positions, // Full 10 positions
      warnings,
      repeatedEffects,
      missingEffects,
      last4: {
        digits: last4Str,
        compound: last4Compound,
        single: last4Single
      }
    };
  });
  
  return {
    core: {
      moolank,
      bhagyank,
      zodiacInfluenced: zodiac.influenced,
      soul,
      personality,
      destiny,
      sign: zodiac.sign
    },
    luckyNumbers: {
      personal: luckyPersonal,
      official: luckyOfficial,
      both: luckyBoth
    },
    matrix,
    reports
  };
};

const getPlanetName = (n: number) => {
    const planets = ['SUN', 'MOON', 'JUPITER', 'RAHU', 'MERCURY', 'VENUS', 'KETU', 'SATURN', 'MARS'];
    return planets[n-1] || 'UNKNOWN';
};

const mobileStrAnalysis = (str: string) => {
    const repeated: number[] = [];
    for(let i=0; i < str.length - 1; i++) {
        if (str[i] === str[i+1]) {
            repeated.push(parseInt(str[i]));
        }
    }
    return { repeated: Array.from(new Set(repeated)) };
};

const getPyramidLayers = (mobile: string): number[][] => {
    let digits = mobile.replace(/0/g, '').split('').map(Number);
    const cleaned: number[] = [];
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== digits[i + 1]) {
            cleaned.push(digits[i]);
        }
    }
    
    const layers: number[][] = [cleaned];
    let currentLayer = cleaned;
    
    while (currentLayer.length > 1) {
        const nextLayer: number[] = [];
        for (let i = 0; i < currentLayer.length - 1; i++) {
            nextLayer.push(getSingleDigit(currentLayer[i] + currentLayer[i + 1]));
        }
        layers.push(nextLayer);
        currentLayer = nextLayer;
    }
    return layers;
};
