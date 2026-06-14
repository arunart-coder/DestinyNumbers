import React, { useRef } from 'react';
import { Calendar } from 'lucide-react';
import { cn, formatDateToDDMMYYYY, isValidDate } from '../lib/utils';

interface DateInputProps {
  value: string; // DD-MM-YYYY
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  error?: string;
}

export function DateInput({
  value,
  onChange,
  label,
  placeholder = "DD-MM-YYYY",
  className,
  inputClassName,
  error
}: DateInputProps) {
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/\D/g, '');
    if (rawValue.length > 8) rawValue = rawValue.slice(0, 8);
    
    let dayStr = rawValue.slice(0, 2);
    let monthStr = rawValue.slice(2, 4);
    let yearStr = rawValue.slice(4, 8);

    // Validation as typing
    if (dayStr.length === 2) {
      const day = parseInt(dayStr);
      if (day > 31) dayStr = '31';
      if (day === 0) dayStr = '01';
    }

    if (monthStr.length === 2) {
      const month = parseInt(monthStr);
      if (month > 12) monthStr = '12';
      if (month === 0) monthStr = '01';
    }

    // Combine
    let formatted = '';
    if (dayStr) {
      formatted += dayStr;
      if (rawValue.length > 2) {
        formatted += '-' + monthStr;
        if (rawValue.length > 4) {
          formatted += '-' + yearStr;
        }
      }
    }
    
    onChange(formatted);
  };

  const handleNativeDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nativeValue = e.target.value; // YYYY-MM-DD
    if (!nativeValue) return;
    
    const date = new Date(nativeValue);
    if (!isNaN(date.getTime())) {
      onChange(formatDateToDDMMYYYY(date));
    }
  };

  const triggerPicker = () => {
    if (hiddenInputRef.current) {
      try {
        // Modern browsers support showPicker()
        if ('showPicker' in HTMLInputElement.prototype) {
          hiddenInputRef.current.showPicker();
        } else {
          hiddenInputRef.current.click();
        }
      } catch (err) {
        hiddenInputRef.current.click();
      }
    }
  };

  // Convert DD-MM-YYYY to YYYY-MM-DD for native input
  const getNativeDateValue = () => {
    const parts = value.split('-');
    if (parts.length === 3 && parts[2].length === 4) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return '';
  };

  // Final check for the completed date
  const isInputComplete = value.length === 10;
  let validationError = error;
  if (isInputComplete) {
    const [d, m, y] = value.split('-').map(Number);
    if (!isValidDate(d, m, y)) {
      validationError = "Invalid date for the selected month";
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      {label && (
        <label className="text-[10px] tracking-[0.4em] font-black text-royal-gold mb-6 block ml-4">
          {label}
        </label>
      )}
      <div className="relative group">
        <input
          type="text"
          value={value}
          onChange={handleTextChange}
          placeholder={placeholder}
          className={cn(
            "w-full bg-white border-2 rounded-none p-8 md:p-10 pl-24 text-mystic-navy font-display text-[16pt] md:text-[20pt] tracking-[0.2em] outline-none transition-all placeholder:text-mystic-navy/20 font-black",
            validationError ? "border-red-500/50" : "border-royal-gold/20 focus:border-royal-gold",
            inputClassName
          )}
        />
        
        {/* Native hidden date picker */}
        <input
          ref={hiddenInputRef}
          type="date"
          value={getNativeDateValue()}
          onChange={handleNativeDateChange}
          className="absolute opacity-0 pointer-events-none left-0 top-0 w-full h-full"
        />

        <button
          type="button"
          onClick={triggerPicker}
          className="absolute left-8 top-1/2 -translate-y-1/2 text-mystic-navy/30 hover:text-royal-gold transition-colors z-10"
          title="Open Calendar"
        >
          <Calendar className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        {validationError && (
          <p className="absolute -bottom-6 left-8 text-[10px] font-black tracking-widest text-red-500 animate-pulse">
            {validationError}
          </p>
        )}
      </div>
    </div>
  );
}
