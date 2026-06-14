import React, { useRef, useEffect, useState } from 'react';
import { 
  Bold, Italic, Underline, Strikethrough, Link, 
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Quote, List, ListOrdered, Minus, Image as ImageIcon,
  Table as TableIcon, Code, RotateCcw, Maximize2,
  Type, Eraser, ChevronDown
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  onFocusMode?: () => void;
  isFocusMode?: boolean;
}

export default function RichTextEditor({ content, onChange, onFocusMode, isFocusMode }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showCode, setShowCode] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== content) {
      editorRef.current.innerHTML = content;
    }
    updateCounts(content);
  }, [content]);

  const updateCounts = (text: string) => {
    const plainText = text.replace(/<[^>]*>/g, ' ');
    const chars = plainText.length;
    const words = plainText.trim().split(/\s+/).filter(w => w.length > 0).length;
    setCharCount(chars);
    setWordCount(words);
  };

  const execCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      onChange(html);
      updateCounts(html);
    }
  };

  const addLink = () => {
    const url = window.prompt('Enter URL:');
    if (url) execCommand('createLink', url);
  };

  const toolbarButtonClass = "p-2 hover:bg-[#C9A84C]/20 text-white/60 hover:text-[#C9A84C] rounded-none transition-all";

  return (
    <div className={cn(
      "flex flex-col h-full bg-[#12173D] border border-[#C9A84C]/10 rounded-none overflow-hidden transition-all duration-700",
      isFocusMode && "fixed inset-0 z-[100] rounded-none border-none"
    )}>
      {/* Toolbar Row 1 */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-[#C9A84C]/10 bg-[#0D1128]/50 backdrop-blur-xl sticky top-0 z-10">
        <div className="flex items-center border-r border-white/5 pr-2 mr-2">
          <button onClick={() => execCommand('bold')} className={toolbarButtonClass} title="Bold"><Bold size={16} /></button>
          <button onClick={() => execCommand('italic')} className={toolbarButtonClass} title="Italic"><Italic size={16} /></button>
          <button onClick={() => execCommand('underline')} className={toolbarButtonClass} title="Underline"><Underline size={16} /></button>
          <button onClick={() => execCommand('strikeThrough')} className={toolbarButtonClass} title="Strikethrough"><Strikethrough size={16} /></button>
        </div>
        
        <div className="flex items-center border-r border-white/5 pr-2 mr-2">
          <button onClick={() => execCommand('justifyLeft')} className={toolbarButtonClass} title="Align Left"><AlignLeft size={16} /></button>
          <button onClick={() => execCommand('justifyCenter')} className={toolbarButtonClass} title="Align Center"><AlignCenter size={16} /></button>
          <button onClick={() => execCommand('justifyRight')} className={toolbarButtonClass} title="Align Right"><AlignRight size={16} /></button>
          <button onClick={() => execCommand('justifyFull')} className={toolbarButtonClass} title="Justify"><AlignJustify size={16} /></button>
        </div>

        <div className="flex items-center border-r border-white/5 pr-2 mr-2">
          <button onClick={addLink} className={toolbarButtonClass} title="Link"><Link size={16} /></button>
          <button onClick={() => execCommand('removeFormat')} className={toolbarButtonClass} title="Clear Format"><Eraser size={16} /></button>
        </div>

        <div className="flex-grow" />

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowCode(!showCode)} 
            className={cn(toolbarButtonClass, showCode && "text-[#C9A84C] bg-[#C9A84C]/10")}
            title="Toggle HTML Code"
          >
            <Code size={16} />
          </button>
          <button 
            onClick={onFocusMode} 
            className={cn(toolbarButtonClass, isFocusMode && "text-[#C9A84C] bg-[#C9A84C]/10")}
            title="Focus Mode"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* Toolbar Row 2 */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-[#C9A84C]/10 bg-[#0D1128]/30">
        <button onClick={() => execCommand('formatBlock', '<blockquote>')} className={toolbarButtonClass} title="Quote"><Quote size={16} /></button>
        <button onClick={() => execCommand('insertUnorderedList')} className={toolbarButtonClass} title="Bullet List"><List size={16} /></button>
        <button onClick={() => execCommand('insertOrderedList')} className={toolbarButtonClass} title="Numbered List"><ListOrdered size={16} /></button>
        <button onClick={() => execCommand('insertHorizontalRule')} className={toolbarButtonClass} title="Divider"><Minus size={16} /></button>
        
        <div className="w-px h-6 bg-white/5 mx-2" />
        
        <button onClick={() => execCommand('formatBlock', '<h1>')} className={toolbarButtonClass} title="Heading 1"><span className="text-xs font-bold">H1</span></button>
        <button onClick={() => execCommand('formatBlock', '<h2>')} className={toolbarButtonClass} title="Heading 2"><span className="text-xs font-bold">H2</span></button>
        <button onClick={() => execCommand('formatBlock', '<h3>')} className={toolbarButtonClass} title="Heading 3"><span className="text-xs font-bold">H3</span></button>
        <button onClick={() => execCommand('formatBlock', '<p>')} className={toolbarButtonClass} title="Paragraph"><span className="text-xs font-bold">P</span></button>
      </div>

      {/* Editor Content Area */}
      <div className={cn(
        "flex-grow relative overflow-y-auto p-12 focus-within:ring-0 outline-none min-h-[500px]",
        isFocusMode && "max-w-3xl mx-auto w-full px-4 text-xl leading-relaxed"
      )}>
        {showCode ? (
          <textarea
            value={content}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 w-full h-full bg-[#08091A] p-12 font-mono text-sm text-green-500/80 outline-none resize-none"
          />
        ) : (
          <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            className={cn(
              "outline-none min-h-full font-serif text-lg leading-relaxed text-white/90 prose prose-invert prose-gold max-w-none",
              isFocusMode && "text-xl leading-loose"
            )}
            style={{ minHeight: '100%' }}
            data-placeholder="Start your cosmic transmission..."
          />
        )}
      </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-[#C9A84C]/10 bg-[#0D1128]/80 backdrop-blur-md flex justify-between items-center text-[10px] font-black tracking-widest text-white/30">
        <div className="flex gap-6">
          <span>{wordCount} Words</span>
          <span>{charCount} Characters</span>
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw size={12} />
          <span>Autosaved locally</span>
        </div>
      </div>
    </div>
  );
}
