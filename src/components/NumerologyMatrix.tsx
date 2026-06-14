import React from 'react';

interface NumerologyMatrixProps {
  /**
   * Frequency map of digits (number -> count)
   */
  gridData: Record<number, number>;
  /**
   * The 3x3 layout of numbers. Default is Lo Shu:
   * [ [4, 9, 2], [3, 5, 7], [8, 1, 6] ]
   */
  layout?: number[][];
}

const DEFAULT_LO_SHU = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6]
];

export const NumerologyMatrix: React.FC<NumerologyMatrixProps> = ({ 
  gridData, 
  layout = DEFAULT_LO_SHU 
}) => {
  return (
    <div style={{
      width: '330px',
      height: '330px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '3px',
      background: '#C9A84C',
      flexShrink: 0,
    }}>
      {layout.flat().map((num, idx) => {
        const isCenterIndex = idx === 4;
        const count = gridData[num] || 0;
        const isActive = count > 0;
        
        let bg = '#F5ECD7'; // CREAM
        let color: string;
        let weight: '400' | '700' = '400';
        let fontSize = count > 2 ? '20px' : '26px';

        if (isCenterIndex) {
          bg = '#C9A84C'; // GOLD
          color = isActive ? '#1C3557' : '#d3d3d3';
          weight = '700';
          fontSize = '30px';
        } else if (isActive) {
          bg = '#1C3557'; // NAVY
          color = '#F0D080';
          weight = '700';
        } else {
          color = '#d3d3d3'; // GRAY for missing numbers
        }

        // Display the digit repeated "count" times
        const displayValue = isActive ? Array(count).fill(num).join('') : num;

        return (
          <div 
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: bg,
              transition: 'all 0.3s ease',
              padding: '4px'
            }}
          >
            <span style={{
              fontFamily: 'serif',
              fontSize: fontSize,
              fontWeight: weight,
              color: color,
              letterSpacing: '1px',
              textAlign: 'center',
              wordBreak: 'break-all'
            }}>
              {displayValue}
            </span>
          </div>
        );
      })}
    </div>
  );
};
