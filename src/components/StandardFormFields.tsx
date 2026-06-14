import React, { useState, useRef, useEffect } from 'react';
import { User, Calendar, Phone, Mail, Globe, MessageSquare, ChevronDown } from 'lucide-react';
import { cn, formatDateToDDMMYYYY, isValidDate } from '../lib/utils';

/**
 * FORM STYLING & VALIDATION RULES
 * Input Height: 52px
 * Label: 16px, font-weight 500, #C9A84C
 * Input: pl-11 (48px for date), pr-4 (16px), border 1px solid #E0D5C0, radius 0
 * Error: #E8420E, 13px
 */

export interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: (e?: React.FocusEvent<any>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  type?: string;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const StandardLabel: React.FC<{ label: string; id?: string }> = ({ label, id }) => (
  <label 
    htmlFor={id}
    className="text-[16px] font-medium text-[#C9A84C] mb-[6px] block uppercase tracking-wider"
  >
    {label}
  </label>
);

export const ErrorMessage: React.FC<{ message?: string }> = ({ message }) => {
  if (!message) return <div className="min-height-[18px] mt-1" />;
  return (
    <p className="text-[13px] text-[#E8420E] mt-1 font-medium leading-tight">
      {message}
    </p>
  );
};

export const StandardInput: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  type = 'text',
  className,
  inputClassName,
  disabled,
  icon,
  required
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);
    if (onBlur) onBlur(e);
  };

  return (
    <div className={cn("flex flex-col w-full", className)}>
      <StandardLabel label={label} />
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-mystic-navy/30 pointer-events-none z-10">
            {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 20 }) : icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            "w-full h-[52px] bg-white border border-[#E0D5C0] rounded-none text-[16px] text-mystic-navy outline-none transition-all placeholder:text-mystic-navy/20",
            icon ? "pl-12" : "px-4",
            "pr-4",
            "focus:border-[#C9A84C]",
            error && isTouched && "border-[#E8420E]",
            !error && isTouched && value && "border-[#1D9E75]",
            inputClassName
          )}
        />
      </div>
      {isTouched && error && <ErrorMessage message={error} />}
    </div>
  );
};

export const StandardNameInput: React.FC<FormFieldProps> = (props) => {
  const handleNameChange = (val: string) => {
    const filtered = val.replace(/[^A-Za-z\s'\-]/g, '');
    if (filtered.length <= 50) {
      props.onChange(filtered);
    }
  };

  return (
    <StandardInput 
      {...props} 
      onChange={handleNameChange} 
      icon={<User size={20} />}
      placeholder={props.placeholder || `Enter ${props.label.replace('*', '').trim()}`}
    />
  );
};

export const StandardMobileInput: React.FC<FormFieldProps> = (props) => {
  const handleMobileChange = (val: string) => {
    const filtered = val.replace(/\D/g, '');
    if (filtered.length <= 15) {
      props.onChange(filtered);
    }
  };

  return (
    <StandardInput 
      {...props} 
      type="tel"
      onChange={handleMobileChange} 
      icon={<Phone size={20} />}
      placeholder={props.placeholder || "Enter mobile number"}
      inputClassName={cn("tracking-wider", props.inputClassName)}
    />
  );
};

export const StandardEmailInput: React.FC<FormFieldProps> = (props) => {
  return (
    <StandardInput 
      {...props} 
      type="email"
      icon={<Mail size={20} />}
      placeholder={props.placeholder || "name@email.com"}
    />
  );
};

export const StandardDateInput: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  onBlur,
  error: externalError,
  className,
  inputClassName,
  disabled
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const [internalError, setInternalError] = useState('');
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const combinedError = externalError || internalError;

  const validate = (val: string) => {
    const raw = val.replace(/\D/g, '');
    if (raw.length === 0) {
      setInternalError('Date is required');
      return false;
    }
    if (raw.length < 8) {
      setInternalError('Please enter complete date (DD / MM / YYYY)');
      return false;
    }
    
    const dd = parseInt(raw.substring(0, 2));
    const mm = parseInt(raw.substring(2, 4));
    const yyyy = parseInt(raw.substring(4, 8));

    if (dd < 1 || dd > 31) {
      setInternalError('Day must be 01–31');
      return false;
    }
    if (mm < 1 || mm > 12) {
      setInternalError('Month must be 01–12');
      return false;
    }
    if (yyyy < 1900 || yyyy > 2100) {
      setInternalError('Enter a valid year between 1900–2100');
      return false;
    }

    setInternalError('');
    return true;
  };

  const handleBlur = () => {
    setIsTouched(true);
    validate(value);
    if (onBlur) onBlur();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 8);
    let formatted = '';
    if (val.length >= 1) formatted = val.substring(0, 2);
    if (val.length >= 3) formatted += ' / ' + val.substring(2, 4);
    if (val.length >= 5) formatted += ' / ' + val.substring(4, 8);
    
    onChange(formatted);
    if (isTouched) validate(formatted);
  };

  const handleNativeDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nativeValue = e.target.value; 
    if (!nativeValue) return;
    const parts = nativeValue.split('-');
    if (parts.length === 3) {
      const yyyy = parts[0];
      const mm = parts[1];
      const dd = parts[2];
      const formatted = `${dd} / ${mm} / ${yyyy}`;
      onChange(formatted);
      setIsTouched(true);
      validate(formatted);
    }
  };

  const triggerPicker = () => {
    if (hiddenInputRef.current) {
      try {
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

  return (
    <div className={cn("flex flex-col w-full", className)}>
      <StandardLabel label={label} />
      <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
        <div 
          onClick={triggerPicker}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '52px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
            borderRight: '1px solid #E0D5C0',
            background: '#F5ECD7',
            pointerEvents: 'all'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="18" rx="0" stroke="#C9A84C" strokeWidth="1.5"/>
            <path d="M3 9H21" stroke="#C9A84C" strokeWidth="1.5"/>
            <path d="M8 2V6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="square"/>
            <path d="M16 2V6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="square"/>
            <rect x="7" y="13" width="2" height="2" fill="#C9A84C"/>
            <rect x="11" y="13" width="2" height="2" fill="#C9A84C"/>
            <rect x="15" y="13" width="2" height="2" fill="#C9A84C"/>
            <rect x="7" y="17" width="2" height="2" fill="#C9A84C"/>
            <rect x="11" y="17" width="2" height="2" fill="#C9A84C"/>
          </svg>
        </div>

        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleTextChange}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder="DD / MM / YYYY"
          maxLength={14}
          style={{
            width: '100%',
            height: '52px',
            paddingLeft: '64px',
            paddingRight: '16px',
            fontSize: '16px',
            fontFamily: 'inherit',
            border: `1px solid ${combinedError && isTouched ? '#E8420E' : isTouched && !combinedError && value ? '#1D9E75' : '#E0D5C0'}`,
            borderRadius: '0',
            boxSizing: 'border-box',
            outline: 'none',
            background: '#ffffff',
            color: '#1C3557',
            letterSpacing: '2px',
          }}
          className={inputClassName}
        />
        <input
          ref={hiddenInputRef}
          type="date"
          onChange={handleNativeDateChange}
          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', top: 0, left: 0 }}
        />
      </div>
      <div style={{ minHeight: '18px', marginTop: '4px' }}>
        {isTouched && combinedError && (
          <p style={{ fontSize: '13px', color: '#E8420E', margin: 0 }}>
            {combinedError}
          </p>
        )}
      </div>
    </div>
  );
};

export const StandardTextArea: React.FC<FormFieldProps & { rows?: number }> = ({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  className,
  inputClassName,
  disabled,
  rows = 4
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => {
    setIsTouched(true);
    if (onBlur) onBlur();
  };

  return (
    <div className={cn("flex flex-col w-full", className)}>
      <StandardLabel label={label} />
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "w-full bg-white border border-[#E0D5C0] rounded-none p-4 text-[16px] text-mystic-navy outline-none transition-all placeholder:text-mystic-navy/20",
          "focus:border-[#C9A84C]",
          error && isTouched && "border-[#E8420E]",
          !error && isTouched && value && "border-[#1D9E75]",
          inputClassName
        )}
      />
      {isTouched && error && <ErrorMessage message={error} />}
    </div>
  );
};

export const StandardSelect: React.FC<FormFieldProps & { options: { value: string; label: string }[] }> = ({
  label,
  value,
  onChange,
  onBlur,
  error,
  className,
  inputClassName,
  disabled,
  options,
  icon
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => {
    setIsTouched(true);
    if (onBlur) onBlur();
  };

  return (
    <div className={cn("flex flex-col w-full", className)}>
      <StandardLabel label={label} />
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-mystic-navy/30 pointer-events-none z-10">
            {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 20 }) : icon}
          </div>
        )}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          disabled={disabled}
          className={cn(
            "w-full h-[52px] bg-white border border-[#E0D5C0] rounded-none text-[16px] text-mystic-navy outline-none transition-all appearance-none",
            icon ? "pl-12" : "px-4",
            "pr-10",
            "focus:border-[#C9A84C]",
            error && isTouched && "border-[#E8420E]",
            inputClassName
          )}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-mystic-navy/30 pointer-events-none">
          <ChevronDown size={20} />
        </div>
      </div>
      {isTouched && error && <ErrorMessage message={error} />}
    </div>
  );
};

