
export const PYTHAGOREAN_CHART: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9
};

export const VOWELS = ['A', 'E', 'I', 'O', 'U'];

export const PLANET_RELATIONS: Record<number, { enhance: number[]; depress: number[]; neutral: number[] }> = {
  1: { enhance: [1, 2, 3, 9, 5, 6], depress: [8], neutral: [4, 7] },
  2: { enhance: [1, 3, 5, 2], depress: [8, 4, 9], neutral: [6] },
  3: { enhance: [1, 2, 3, 5, 7], depress: [6], neutral: [4, 8, 9] }, // 7* included as enhance
  4: { enhance: [7, 5, 6], depress: [4, 8, 9, 2], neutral: [3, 1] }, // 4*, 8* included as depress
  5: { enhance: [1, 2, 6, 3, 5], depress: [], neutral: [8, 7, 4, 9] },
  6: { enhance: [1, 5, 6, 7], depress: [3], neutral: [8, 4, 9, 2] },
  7: { enhance: [4, 6, 1, 5], depress: [], neutral: [3, 8, 9, 2] },
  8: { enhance: [5, 3, 6, 7], depress: [1, 2, 4, 8], neutral: [9] }, // 4*, 8* included as depress
  9: { enhance: [1, 5, 3], depress: [4, 2], neutral: [9, 7, 6, 8] }
};

export const ZODIAC_TABLE: Record<string, { influenced: number; planet: string }> = {
  'Aries': { influenced: 9, planet: 'Mars' },
  'Taurus': { influenced: 6, planet: 'Venus' },
  'Gemini': { influenced: 5, planet: 'Mercury' },
  'Cancer': { influenced: 7, planet: 'Moon' }, // Note: prompt says 7 & 2, using primary 7
  'Leo': { influenced: 1, planet: 'Sun' }, // Note: prompt says 1 & 4, using primary 1
  'Virgo': { influenced: 5, planet: 'Mercury' },
  'Libra': { influenced: 6, planet: 'Venus' },
  'Scorpio': { influenced: 9, planet: 'Mars' },
  'Sagittarius': { influenced: 3, planet: 'Jupiter' },
  'Capricorn': { influenced: 8, planet: 'Saturn' },
  'Aquarius': { influenced: 8, planet: 'Saturn' }, // Note: prompt says 8 & 4, using primary 8
  'Pisces': { influenced: 3, planet: 'Jupiter' }
};

export const RATIO_COMPATIBILITY: Record<number, Record<number, number>> = {
  1: { 1: 3, 2: -2, 3: 2, 4: -1, 5: 2, 6: -1, 7: 1, 8: 1, 9: 1 },
  2: { 1: -2, 2: 3, 3: -1, 4: 2, 5: -1, 6: 2, 7: -2, 8: 1, 9: 1 },
  3: { 1: 2, 2: -1, 3: 3, 4: -2, 5: 1, 6: -1, 7: 1, 8: 1, 9: 1 },
  4: { 1: -1, 2: 2, 3: -2, 4: 3, 5: -2, 6: 1, 7: 1, 8: 2, 9: 1 },
  5: { 1: 2, 2: -1, 3: 1, 4: -2, 5: 3, 6: -1, 7: 2, 8: -1, 9: 1 },
  6: { 1: -1, 2: 2, 3: -1, 4: 1, 5: -1, 6: 3, 7: -1, 8: 1, 9: 1 },
  7: { 1: 1, 2: -2, 3: 1, 4: 1, 5: 2, 6: -1, 7: 3, 8: -1, 9: 1 },
  8: { 1: 1, 2: 1, 3: 1, 4: 2, 5: -1, 6: 1, 7: -1, 8: 3, 9: 2 },
  9: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 2, 9: 3 }
};

export const DIGIT_COMBINATIONS: Record<string, { pos: string; neg: string }> = {
  '12': { pos: 'Educated & financially stable', neg: 'Govt issues' },
  '21': { pos: 'Educated & financially stable', neg: 'Govt issues' },
  '13': { pos: 'Fame, self-made, good adviser', neg: 'Over-intellectualizing' },
  '31': { pos: 'Fame, self-made, good adviser', neg: 'Over-intellectualizing' },
  '14': { pos: 'Independent energy', neg: 'Secret enemies, family disharmony' },
  '41': { pos: 'Independent energy', neg: 'Secret enemies, family disharmony' },
  '15': { pos: 'Success in exams/job, marriage help', neg: 'Restlessness' },
  '51': { pos: 'Success in exams/job, marriage help', neg: 'Restlessness' },
  '16': { pos: 'Professional skill', neg: 'Spouse health, UTI issues' },
  '61': { pos: 'Professional skill', neg: 'Spouse health, UTI issues' },
  '17': { pos: 'Govt/good jobs, leadership', neg: 'Possible marital friction' },
  '71': { pos: 'Govt/good jobs, leadership', neg: 'Possible marital friction' },
  '18': { pos: 'Strong resilience', neg: 'Father loss risk, job changes' },
  '81': { pos: 'Strong resilience', neg: 'Father loss risk, job changes' },
  '19': { pos: 'Unearned money, independent', neg: 'Hard-headedness' },
  '91': { pos: 'Unearned money, independent', neg: 'Hard-headedness' },
  '23': { pos: 'Creative spark', neg: 'Parents embarrassed, many enemies' },
  '32': { pos: 'Creative spark', neg: 'Parents embarrassed, many enemies' },
  '24': { pos: 'High imagination', neg: 'Negative mindset, bad company' },
  '42': { pos: 'High imagination', neg: 'Negative mindset, bad company' },
  '25': { pos: 'Very intelligent, sharp mind', neg: 'Nervous energy' },
  '52': { pos: 'Very intelligent, sharp mind', neg: 'Nervous energy' },
  '26': { pos: 'Super convincing', neg: 'Hurdles in education, family issues' },
  '62': { pos: 'Super convincing', neg: 'Hurdles in education, family issues' },
  '27': { pos: 'Intuitive insight', neg: 'Joint pain, Professional problems' },
  '72': { pos: 'Intuitive insight', neg: 'Joint pain, Professional problems' },
  '28': { pos: 'High ambition', neg: 'Aggressive, mood swings, depression' },
  '82': { pos: 'High ambition', neg: 'Aggressive, mood swings, depression' },
  '29': { pos: 'Good financial status, self-earned', neg: 'Emotional flux' },
  '92': { pos: 'Good financial status, self-earned', neg: 'Emotional flux' },
  '34': { pos: 'Technical skill', neg: 'Child issues, breathing/paralysis risk' },
  '43': { pos: 'Technical skill', neg: 'Child issues, breathing/paralysis risk' },
  '35': { pos: 'Sharp mind, good fund flow', neg: 'Financial problems periodic' },
  '53': { pos: 'Sharp mind, good fund flow', neg: 'Financial problems periodic' },
  '36': { pos: 'Multi-talented, religious', neg: 'Conflict in beliefs' },
  '63': { pos: 'Multi-talented, religious', neg: 'Conflict in beliefs' },
  '37': { pos: 'Top position, financial support', neg: 'Social isolation' },
  '73': { pos: 'Top position, financial support', neg: 'Social isolation' },
  '38': { pos: 'Achievement after hardship', neg: 'Delayed success' },
  '83': { pos: 'Achievement after hardship', neg: 'Delayed success' },
  '39': { pos: 'Good debater', neg: 'Love to show off, duality' },
  '93': { pos: 'Good debater', neg: 'Love to show off, duality' },
  '45': { pos: 'Intelligent, wise', neg: 'Court issues, stress, hospitals' },
  '54': { pos: 'Intelligent, wise', neg: 'Court issues, stress, hospitals' },
  '46': { pos: 'Strong desires', neg: 'Skin disease, criminal tendencies' },
  '64': { pos: 'Strong desires', neg: 'Skin disease, criminal tendencies' },
  '47': { pos: 'Clever personality, strong determination', neg: 'Stubbornness' },
  '74': { pos: 'Clever personality, strong determination', neg: 'Stubbornness' },
  '48': { pos: 'Endurance', neg: 'Accident prone, depression, stress' },
  '84': { pos: 'Endurance', neg: 'Accident prone, depression, stress' },
  '49': { pos: 'Success after hard work', neg: 'Risky jobs, under stress' },
  '94': { pos: 'Success after hard work', neg: 'Risky jobs, under stress' },
  '56': { pos: 'Loyalty in friendship', neg: 'Failure in love, very shy' },
  '65': { pos: 'Loyalty in friendship', neg: 'Failure in love, very shy' },
  '57': { pos: 'Good public speaker, writer', neg: 'Health delays' },
  '75': { pos: 'Good public speaker, writer', neg: 'Health delays' },
  '58': { pos: 'Recovery skills', neg: 'Heavy financial loss, money blocked' },
  '85': { pos: 'Recovery skills', neg: 'Heavy financial loss, money blocked' },
  '59': { pos: 'Successful businessman, technical knowledge', neg: 'High pressure' },
  '95': { pos: 'Successful businessman, technical knowledge', neg: 'High pressure' },
  '67': { pos: 'Music lovers, artistic', neg: 'Dispute in marriage, prefer unmarried' },
  '76': { pos: 'Music lovers, artistic', neg: 'Dispute in marriage, prefer unmarried' },
  '68': { pos: 'Suitable for doctors/surgeons', neg: 'Health problems' },
  '86': { pos: 'Suitable for doctors/surgeons', neg: 'Health problems' },
  '69': { pos: 'Creative mind, event management', neg: 'Opposite gender issues' },
  '96': { pos: 'Creative mind, event management', neg: 'Opposite gender issues' },
  '78': { pos: 'Spiritual healer', neg: 'Loneliness, depression' },
  '87': { pos: 'Spiritual healer', neg: 'Loneliness, depression' },
  '79': { pos: 'Success away from father', neg: 'Joint issues, Career up-down' },
  '97': { pos: 'Success away from father', neg: 'Joint issues, Career up-down' },
  '89': { pos: 'Struggle before win, professional success', neg: 'Aggression' },
  '98': { pos: 'Struggle before win, professional success', neg: 'Aggression' }
};

export const POSITION_ANALYSIS: Record<number, string> = {
  1: 'Attitude / How you start things',
  2: 'Decision making, positivity/negativity',
  3: 'Health, prolonged illness',
  4: 'Partnership',
  5: 'Children',
  6: 'Marriage',
  7: 'Marriage relationship',
  8: 'Career and health',
  9: 'Public relations, direction of success',
  10: 'Wealth / Gains'
};

export const REPEATED_DIGIT_EFFECTS: Record<number, string> = {
  1: 'Balances life, patient listener, expressive',
  2: 'Intelligent, over-sensitive, raises expectations',
  3: 'Creative, imaginative, diligent',
  4: 'Hardworking, never leaves work incomplete',
  5: 'Stubborn, enthusiastic, takes blame',
  7: 'Knowledge seeker, spiritual after losses',
  8: 'Short-tempered, stubborn, fame-obsessed',
  9: 'Idealistic, feels superior, does not mix well'
};

export const MISSING_DIGIT_EFFECTS: Record<number, string> = {
  1: 'Cannot express emotions, low confidence',
  2: 'Relationship sourness, less active',
  3: 'Blunt, hurts others, impulsive',
  4: 'Lazy, careless, poor finance management',
  5: 'Resists change, difficulty in stability',
  6: 'Runs from responsibility, loses opportunities',
  7: 'No peace of mind, kidney/diabetes issues',
  8: 'Money doesn\'t stay, poor budgeting',
  9: 'Cold-hearted, impulsive, unstable life'
};

export const QUADRUPLE_WARNINGS: Record<number, string> = {
  1: 'Mismanagement, short-tempered, stress, egoistic',
  2: 'Mood swings, depression, over thinking',
  3: 'Weight gain, talkative, does not listen',
  4: 'Sudden gain/loss, illusion, trust issues',
  5: 'Money loss, lazy, scams',
  6: 'Manipulative, multiple relationships, addiction',
  7: 'Over thinker, cheated by others',
  8: 'Hurdles, property loss, court/police cases',
  9: 'Anger issues, rude behavior, debts'
};

export const getSingleDigit = (n: number | string): number => {
  let num = typeof n === 'string' ? parseInt(n.replace(/\D/g, '')) : n;
  if (isNaN(num)) return 0;
  
  while (num > 9) {
    num = String(num).split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return num;
};

export const calculateMoolank = (dob: string): number => {
  // Expects DD / MM / YYYY or DD-MM-YYYY
  const parts = dob.trim().split(/[/-]|\s\/\s/).filter(Boolean).map(p => p.trim());
  const day = parts[0];
  return getSingleDigit(day);
};

export const calculateBhagyank = (dob: string): number => {
  const digits = dob.replace(/\D/g, '').split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  return getSingleDigit(sum);
};

export const getZodiacInfo = (dob: string): { sign: string; influenced: number; planet: string } => {
  const parts = dob.trim().split(/[/-]|\s\/\s/).filter(Boolean).map(p => p.trim());
  const d = parseInt(parts[0]);
  const m = parseInt(parts[1]);
  
  let sign: string;
  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) sign = 'Aries';
  else if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) sign = 'Taurus';
  else if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) sign = 'Gemini';
  else if ((m === 6 && d >= 21) || (m === 7 && d <= 20)) sign = 'Cancer';
  else if ((m === 7 && d >= 21) || (m === 8 && d <= 20)) sign = 'Leo';
  else if ((m === 8 && d >= 21) || (m === 9 && d <= 20)) sign = 'Virgo';
  else if ((m === 9 && d >= 21) || (m === 10 && d <= 20)) sign = 'Libra';
  else if ((m === 10 && d >= 21) || (m === 11 && d <= 20)) sign = 'Scorpio';
  else if ((m === 11 && d >= 21) || (m === 12 && d <= 20)) sign = 'Sagittarius';
  else if ((m === 12 && d >= 21) || (m === 1 && d <= 20)) sign = 'Capricorn';
  else if ((m === 1 && d >= 21) || (m === 2 && d <= 18)) sign = 'Aquarius';
  else sign = 'Pisces';

  return { sign, ...ZODIAC_TABLE[sign] };
};

export const calculatePyramidValue = (mobile: string): number => {
  // Step 1: Remove 0s
  const digits = mobile.replace(/0/g, '').split('').map(Number);
  
  // Step 2: Remove consecutive duplicate digits (keep once if repeated side-by-side)
  const cleaned: number[] = [];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== digits[i + 1]) {
      cleaned.push(digits[i]);
    }
  }
  
  let currentLayer = cleaned;
  if (currentLayer.length === 0) return 0;
  
  while (currentLayer.length > 1) {
    const nextLayer: number[] = [];
    for (let i = 0; i < currentLayer.length - 1; i++) {
       // Step 4: Add each pair, reduce to single digit
       nextLayer.push(getSingleDigit(currentLayer[i] + currentLayer[i + 1]));
    }
    currentLayer = nextLayer;
  }
  return currentLayer[0];
};

export const getCompoundMeaning = (n: number): string => {
  const meanings: Record<number, string> = {
    10: "Wheels of Fortune. Honor and success.",
    11: "The Clutched Hand. Warnings of hidden dangers.",
    12: "The Sacrifice. Suffering and anxiety.",
    13: "Change of Plans. Regeneration and hope.",
    14: "The Messenger. Communication and travel.",
    15: "The Magician. Luck and magnetism.",
    16: "The Shattered Citadel. Sudden changes.",
    17: "The Star. Immortality and wisdom.",
    18: "The Moon. Emotional struggles.",
    19: "The Sun. Victories and joy.",
    20: "The Awakening. Higher purpose.",
    21: "The World. Mastery and rewards.",
    22: "The Master Builder. Great leadership potential.",
    23: "The Royal Star of the Lion. Absolute luck and charm.",
    24: "The Love of Money and Luxury. Financial ease.",
    25: "The Knight of the Spirit. Intellectual success.",
    26: "The Partners. Need for cooperation.",
    27: "The Sceptre. High position and authority.",
    28: "The Trusting Friend. Need for caution in business.",
    29: "The Grace. Divine protection.",
    30: "The Loner. Introspection and depth.",
    31: "The Seeker. Intellectual curiosity.",
    32: "The Communication. Luck in speech and media.",
    33: "The Avatar. Spiritual mastery and guidance.",
    37: "Great luck in business and love."
  };
  return meanings[n] || "A significant compound vibration requiring further analysis.";
};

export const CHALDEAN_CHART: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

export const reduceToSingleDigit = (n: number, keepMaster: boolean = false): number => {
  let sum = Math.abs(n);
  if (keepMaster && (sum === 11 || sum === 22)) return sum;
  while (sum > 9) {
    sum = String(sum).split('').reduce((a, b) => a + parseInt(b), 0);
    if (keepMaster && (sum === 11 || sum === 22)) return sum;
  }
  return sum;
};

export const calculateNameNumber = (name: string, chart: Record<string, number>): { single: number; compound: number } => {
  const normalized = name.toUpperCase().replace(/[^A-Z]/g, '');
  let compound = 0;
  for (const char of normalized) {
    compound += chart[char] || 0;
  }
  return { single: reduceToSingleDigit(compound), compound };
};

export const calculateSoulNumber = (name: string, chart: Record<string, number>): number => {
  const normalized = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const char of normalized) {
    if (VOWELS.includes(char)) {
      sum += chart[char] || 0;
    }
  }
  return reduceToSingleDigit(sum);
};

export const calculatePersonalityNumber = (name: string, chart: Record<string, number>): number => {
  const normalized = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const char of normalized) {
    if (!VOWELS.includes(char)) {
      sum += chart[char] || 0;
    }
  }
  return reduceToSingleDigit(sum);
};

export const getCompatibilityScore = (num1: number, num2: number): number => {
  const d1 = getSingleDigit(num1);
  const d2 = getSingleDigit(num2);
  const matrix: Record<number, Record<number, number>> = {
    1: { 1: 2, 2: 3, 3: 3, 4: 1, 5: 3, 6: 2, 7: 3, 8: -1, 9: 3 },
    2: { 1: 3, 2: 2, 3: 3, 4: -1, 5: 3, 6: 1, 7: 1, 8: -2, 9: 3 },
    3: { 1: 3, 2: 3, 3: 2, 4: 1, 5: 3, 6: -1, 7: 3, 8: 1, 9: 3 },
    4: { 1: 1, 2: -1, 3: 1, 4: 2, 5: 3, 6: 3, 7: 3, 8: 3, 9: -1 },
    5: { 1: 3, 2: 3, 3: 3, 4: 3, 5: 2, 6: 3, 7: 1, 8: 3, 9: 3 },
    6: { 1: 2, 2: 1, 3: -1, 4: 3, 5: 3, 6: 2, 7: 3, 8: 3, 9: 3 },
    7: { 1: 3, 2: 1, 3: 3, 4: 3, 5: 1, 6: 3, 7: 2, 8: -1, 9: -1 },
    8: { 1: -1, 2: -2, 3: 1, 4: 3, 5: 3, 6: 3, 7: -1, 8: 2, 9: 1 },
    9: { 1: 3, 2: 3, 3: 3, 4: -1, 5: 3, 6: 3, 7: -1, 8: 1, 9: 2 },
  };
  return matrix[d1]?.[d2] || 1;
};

export const calculateBirthNumber = (dob: string): number => {
  const parts = dob.trim().split(/[/-]|\s\/\s/).filter(Boolean).map(p => p.trim());
  const day = parseInt(parts[0]);
  return reduceToSingleDigit(day);
};

export const calculateLifePathNumber = (dob: string): number => {
  const digits = dob.replace(/\D/g, '').split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  return reduceToSingleDigit(sum, true);
};

export const calculateLoShuGrid = (dob: string, moolank?: number, bhagyank?: number): Record<number, number> => {
  const parts = dob.trim().split(/[/-]|\s\/\s/).filter(Boolean).map(p => p.trim());
  let day = "";
  let month = "";
  let year = "";
  if (parts.length > 0) {
    if (parts[0].length === 4) {
      // YYYY-MM-DD
      year = parts[0];
      month = parts[1];
      day = parts[2];
    } else {
      // DD-MM-YYYY
      day = parts[0];
      month = parts[1];
      year = parts[2];
    }
  }

  const dayNum = parseInt(day || "0", 10);
  const skipDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30].includes(dayNum);

  const grid: Record<number, number> = {};
  
  // 1. Numbers from Day (only if NOT skipped)
  if (!skipDay && day) {
    day.split('').forEach(d => {
      const num = parseInt(d);
      if (num > 0) grid[num] = (grid[num] || 0) + 1;
    });
  }

  // 2. Numbers from Month
  if (month) {
    month.split('').forEach(d => {
      const num = parseInt(d);
      if (num > 0) grid[num] = (grid[num] || 0) + 1;
    });
  }

  // 3. Numbers from Year
  if (year) {
    year.split('').forEach(d => {
      const num = parseInt(d);
      if (num > 0) grid[num] = (grid[num] || 0) + 1;
    });
  }
  
  // 4. Add Moolank (Psychic Number)
  if (moolank && moolank > 0) {
    grid[moolank] = (grid[moolank] || 0) + 1;
  }
  
  // 5. Add Bhagyank (Destiny Number)
  if (bhagyank && bhagyank > 0) {
    const sB = reduceToSingleDigit(bhagyank, false);
    grid[sB] = (grid[sB] || 0) + 1;
  }
  
  return grid;
};

export const calculateVedicBirthGrid = (dob: string, moolank: number, bhagyank: number): Record<number, number> => {
  const parts = dob.trim().split(/[/-]|\s\/\s/).filter(Boolean).map(p => p.trim());
  // Assuming DD / MM / YYYY
  let day: string, month: string, year: string;
  
  if (parts[0].length === 4) {
    // YYYY-MM-DD
    year = parts[0];
    month = parts[1];
    day = parts[2];
  } else {
    // DD-MM-YYYY
    day = parts[0];
    month = parts[1];
    year = parts[2];
  }

  const dayNum = parseInt(day || "0", 10);
  const skipDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30].includes(dayNum);

  const grid: Record<number, number> = {};
  
  // 1. Numbers from Day (only if NOT skipped)
  if (!skipDay && day) {
    day.split('').forEach(d => {
      const num = parseInt(d);
      if (num > 0) grid[num] = (grid[num] || 0) + 1;
    });
  }

  // 2. Numbers from Month
  if (month) {
    month.split('').forEach(d => {
      const num = parseInt(d);
      if (num > 0) grid[num] = (grid[num] || 0) + 1;
    });
  }

  // 3. Numbers from Year (century ignored)
  if (year && year.length === 4) {
    const lastTwo = year.slice(-2);
    lastTwo.split('').forEach(d => {
      const num = parseInt(d);
      if (num > 0) grid[num] = (grid[num] || 0) + 1;
    });
  }

  // 4. Moolank (Birth Number)
  if (moolank > 0) grid[moolank] = (grid[moolank] || 0) + 1;

  // 5. Bhagyank (Destiny Number)
  if (bhagyank > 0) grid[bhagyank] = (grid[bhagyank] || 0) + 1;

  return grid;
};

export const calculateVedicGrid = (name: string): Record<number, number> => {
  const normalized = name.toUpperCase().replace(/[^A-Z]/g, '');
  const grid: Record<number, number> = {};
  for (const char of normalized) {
    const num = CHALDEAN_CHART[char];
    if (num) grid[num] = (grid[num] || 0) + 1;
  }
  return grid;
};

export const getNameVibrationTotal = (name: string): number => {
  const normalized = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const char of normalized) sum += CHALDEAN_CHART[char] || 0;
  return sum;
};

export const LO_SHU_POSITIONS = [ [4, 9, 2], [3, 5, 7], [8, 1, 6] ];

export const ARROWS_OF_STRENGTH = [
  { name: 'Mental Plane', numbers: [4, 9, 2] },
  { name: 'Thought Plane', numbers: [4, 3, 8] },
  { name: 'Will Plane', numbers: [9, 5, 1] },
  { name: 'Action Plane', numbers: [2, 7, 6] },
  { name: 'Practical Plane', numbers: [8, 1, 6] },
  { name: 'Emotional Plane', numbers: [3, 5, 7] },
  { name: 'Success Plane 1 (Raj Yog)', numbers: [4, 5, 6] },
  { name: 'Success Plane 2 (Earth Element)', numbers: [2, 5, 8] }
];

export const getPlaneAnalysis = (grid: Record<number, number>) => {
  return ARROWS_OF_STRENGTH.map(p => {
    const present = p.numbers.filter(n => grid[n] > 0);
    const percentage = Math.round((present.length / p.numbers.length) * 100);
    const isComplete = present.length === p.numbers.length;
    return { ...p, percentage, presentCount: present.length, isComplete, desc: '' };
  });
};

