import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  User,
  Calculator,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  TrendingUp,
  Target,
  FileText,
  Star,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import {
  StandardNameInput,
  StandardDateInput,
  StandardMobileInput,
} from "../components/StandardFormFields";
import {
  performAdvancedAnalysis,
  DetailedAnalysis,
} from "../services/mobileAnalysisService";
import { generateNumerologyReport } from "../services/numerologyReportService";
import ReactMarkdown from "react-markdown";

export default function MobileAnalyser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [mobile2, setMobile2] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<DetailedAnalysis | null>(null);
  const [aiReport, setAiReport] = useState<string | null>(null);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  const calculateResults = () => {
    if (!mobile1.trim() && !mobile2.trim()) return;
    setIsAnalyzing(true);
    setResults(null);
    setAiReport(null);

    setTimeout(() => {
      const advancedResults = performAdvancedAnalysis(
        `${firstName} ${lastName}`.trim() || "User",
        dob || "01-01-2000",
        [mobile1, mobile2],
        "Both",
      );
      setResults(advancedResults);
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleAiReport = async () => {
    if (!firstName || !dob || !mobile1) {
      alert(
        "Please provide the required details: First Name, Date of Birth, and Mobile Number 1.",
      );
      return;
    }
    setIsGeneratingAi(true);
    try {
      const report = await generateNumerologyReport({
        firstName,
        lastName,
        dob,
        mobile1,
        mobile2,
      });
      setAiReport(report || "No report generated.");
    } catch (error) {
      console.error(error);
      alert(
        "Failed to generate AI report. Please check your credentials or try again later.",
      );
    } finally {
      setIsGeneratingAi(false);
    }
  };

  return (
    <div className="pt-12 pb-24 min-h-screen bg-[#F5ECD7] font-sans scroll-smooth">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="mb-4">
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: 1.3,
                margin: "0 0 4px 0",
                color: "#1C3557",
                letterSpacing: "0",
                textAlign: "center",
              }}
            >
              Mobile <span style={{ color: "#C9A84C" }}>Analyser</span>
            </h2>
            <div
              style={{
                width: "60px",
                height: "1px",
                background: "#C9A84C",
                margin: "4px auto 0",
              }}
            ></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-[#1C3557]/70 max-w-2xl mx-auto leading-relaxed font-normal italic text-[15px] md:text-[16px] mb-4">
              Scientific Vedic Numerology analysis for your digital vibration.
              Determine if your mobile numbers are enhancing your destiny or
              creating interference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                to="/tools"
                className="px-8 py-4 bg-white border border-[#1C3557]/10 text-[#1C3557] font-display font-black tracking-widest text-[11px] uppercase hover:bg-[#1C3557] hover:text-white transition-all flex items-center justify-center gap-3"
              >
                Back to Tools <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <Link
            to="/mobile-numerology"
            className="inline-flex items-center gap-2 text-[#C9A84C] text-[11px] font-black tracking-widest hover:underline uppercase"
          >
            Read Mobile Numerology Guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          <div className="mx-auto max-w-[800px] glass-card p-8 md:p-12 rounded-none bg-white border border-[#E0D5C0] shadow-[0_32px_64px_-16px_rgba(13,27,62,0.05)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-royal-gold/30" />

            <div className="flex flex-col gap-5">
              <div className="space-y-4">
                <h3 className="text-sm font-black text-royal-gold/60 flex items-center gap-2 uppercase tracking-widest border-b border-royal-gold/10 pb-2">
                  <User className="w-4 h-4" /> Personal Identity
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StandardNameInput
                    label="First Name"
                    value={firstName}
                    onChange={setFirstName}
                    placeholder="Enter first name"
                    error={
                      !firstName && firstName !== undefined
                        ? "Name is required"
                        : ""
                    }
                  />
                  <StandardNameInput
                    label="Second Name"
                    value={lastName}
                    onChange={setLastName}
                    placeholder="Enter second name"
                    error={
                      !lastName && lastName !== undefined
                        ? "Name is required"
                        : ""
                    }
                  />
                </div>
                <StandardDateInput
                  label="Date of Birth"
                  value={dob}
                  onChange={setDob}
                  error={
                    dob && dob.length < 14
                      ? "Please enter a valid date (DD / MM / YYYY)"
                      : ""
                  }
                />
              </div>

              <div className="space-y-4 mt-4">
                <h3 className="text-sm font-black text-royal-gold/60 flex items-center gap-2 uppercase tracking-widest border-b border-royal-gold/10 pb-2">
                  <Smartphone className="w-4 h-4" /> Digital Signal
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StandardMobileInput
                    label="Mobile Number 1"
                    value={mobile1}
                    onChange={setMobile1}
                    placeholder="Primary mobile"
                    error={
                      mobile1 && mobile1.length < 10
                        ? "Please enter a valid mobile number"
                        : ""
                    }
                  />
                  <StandardMobileInput
                    label="Mobile Number 2 (Optional)"
                    value={mobile2}
                    onChange={setMobile2}
                    placeholder="Secondary mobile"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mt-6">
                <button
                  onClick={calculateResults}
                  disabled={!mobile1 || mobile1.length < 10 || isAnalyzing}
                  className={cn(
                    "flex-1 h-[56px] font-serif font-semibold tracking-[0.2em] text-[14px] rounded-none transition-all flex items-center justify-center group uppercase shadow-lg",
                    (!mobile1 || mobile1.length < 10 || isAnalyzing)
                      ? "bg-mystic-navy text-[#F5ECD7]/80 cursor-not-allowed border border-[#C9A84C]/10"
                      : "bg-mystic-navy text-[#F5ECD7] hover:bg-[#132845] hover:scale-[1.01] active:scale-95 cursor-pointer"
                  )}
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin mr-3 text-royal-gold" />
                      ANALYZING...
                    </>
                  ) : (
                    <>
                      Perform Vedic Analysis
                      <ArrowRight className={cn(
                        "w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform",
                        (!mobile1 || mobile1.length < 10 || isAnalyzing) ? "text-royal-gold/80" : "text-royal-gold"
                      )} />
                    </>
                  )}
                </button>

                {results && (
                  <button
                    onClick={handleAiReport}
                    disabled={isGeneratingAi}
                    className="md:w-64 h-[52px] bg-white border border-[#C9A84C] text-[#C9A84C] font-display font-black tracking-widest text-[13px] rounded-none hover:bg-[#C9A84C] hover:text-white transition-all flex items-center justify-center disabled:opacity-50 group uppercase"
                  >
                    {isGeneratingAi ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-3" />
                        AI Detailed Report
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {results && !aiReport && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-16"
              >
                <div className="space-y-12">
                  {results.reports.map((report, idx) => (
                      <div
                        key={idx}
                        className="glass-card p-12 rounded-none bg-white border-2 border-royal-gold/10 shadow-2xl relative transition-all hover:border-royal-gold/30"
                      >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
                          <div>
                            <h3 className="section-eyebrow text-royal-gold mb-2">
                              MOBILE NUMBER {idx + 1}
                            </h3>
                            <p className="text-[24pt] font-display font-black tracking-widest text-mystic-navy">
                              {report.mobile}
                            </p>
                          </div>
                          <div className="px-10 py-5 bg-mystic-navy text-warm-off-white rounded-none flex items-center gap-6 shadow-xl relative group/compound">
                            <div className="text-center border-r border-white/10 pr-6">
                              <span className="text-[9px] font-black tracking-widest text-royal-gold/60 block mb-1">
                                TOTAL
                              </span>
                              <span className="text-[24pt] font-display font-black">
                                {report.compound}
                              </span>
                            </div>
                            <div className="text-center">
                              <span className="text-[9px] font-black tracking-widest text-royal-gold/60 block mb-1">
                                CORE
                              </span>
                              <span className="text-[24pt] font-display font-black text-royal-gold">
                                {report.total}
                              </span>
                            </div>
                            {/* Tooltip-like compound meaning */}
                            <div className="absolute top-full left-0 right-0 mt-4 p-4 bg-white border border-royal-gold/20 rounded-none shadow-xl opacity-0 invisible group-hover/compound:opacity-100 group-hover/compound:visible transition-all z-20 text-mystic-navy text-[10px] font-bold leading-relaxed">
                              <span className="text-royal-gold block mb-1 uppercase tracking-widest">
                                Compound {report.compound}
                              </span>
                              {report.compoundMeaning}
                            </div>
                          </div>
                        </div>

                        <div className="mb-10 text-[10px] font-black text-black bg-royal-gold/5 p-4 rounded-none border border-royal-gold/10 italic">
                          <span className="text-royal-gold font-black mr-2 uppercase tracking-widest">
                            Vibration:
                          </span>
                          {report.compoundMeaning}
                        </div>

                        {/* Vibration Table Section (Replaced with Horizontal 15px Non-Bold Layout) */}
                        <div className="mb-12 py-6 border-t border-b border-mystic-navy/10 text-[15px] font-normal text-mystic-navy">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                            {/* Enhance Block */}
                            <div className="space-y-1">
                              <div className="text-[15px] font-bold text-black tracking-normal">
                                Enhance Number
                              </div>
                              <div className="flex items-center gap-4 text-[15px] font-bold">
                                <span className="text-black font-bold">
                                  {report.vibrationTable[0].numbers.length > 0
                                    ? report.vibrationTable[0].numbers.join(", ")
                                    : "—"}
                                </span>
                                <span className="text-black/60">—</span>
                                <span className="text-green-600 font-normal">
                                  {report.vibrationTable[0].percentage}%
                                </span>
                              </div>
                            </div>

                            {/* Depress Block */}
                            <div className="space-y-1">
                              <div className="text-[15px] font-bold text-black tracking-normal">
                                Depress Numbers
                              </div>
                              <div className="flex items-center gap-4 text-[15px] font-bold">
                                <span className="text-black font-bold">
                                  {report.vibrationTable[1].numbers.length > 0
                                    ? report.vibrationTable[1].numbers.join(", ")
                                    : "—"}
                                </span>
                                <span className="text-black/60">—</span>
                                <span className="text-red-500 font-normal">
                                  {report.vibrationTable[1].percentage}%
                                </span>
                              </div>
                            </div>

                            {/* Neutral Block */}
                            <div className="space-y-1">
                              <div className="text-[15px] font-bold text-black tracking-normal">
                                Neutral Numbers
                              </div>
                              <div className="flex items-center gap-4 text-[15px] font-bold">
                                <span className="text-black font-bold">
                                  {report.vibrationTable[2].numbers.length > 0
                                    ? report.vibrationTable[2].numbers.join(", ")
                                    : "—"}
                                </span>
                                <span className="text-black/60">—</span>
                                <span className="text-gray-500 font-normal">
                                  {report.vibrationTable[2].percentage}%
                                </span>
                              </div>
                            </div>
                          </div>
                          {(report.total === 3 ||
                            report.total === 4 ||
                            report.total === 8) &&
                            report.hasConditionalNumbers && (
                              <div className="mt-4 text-[11px] font-bold italic text-black">
                                * Note: Certain numbers in this matrix are
                                conditional vibrations and categorized as
                                Neutral for Total {report.total}.
                              </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-10">
                            <div>
                              <h4 className="section-eyebrow text-black font-black mb-6 flex items-center gap-2">
                                <Zap className="w-3 h-3 text-royal-gold" />{" "}
                                Suitability Matrix
                              </h4>
                              <div className="grid grid-cols-3 gap-4">
                                {Object.entries(report.verdicts).map(
                                  ([key, val]) => (
                                    <div
                                      key={key}
                                      className={cn(
                                        "p-4 rounded-none border text-center transition-all",
                                        val === "GOOD"
                                          ? "bg-green-50 text-green-700 border-green-200 shadow-sm"
                                          : "bg-black/5 text-black border-royal-gold/25",
                                      )}
                                    >
                                      <span className="text-[8px] font-black tracking-tighter uppercase block mb-1">
                                        {key}
                                      </span>
                                      <span className="text-[10px] font-bold">
                                        {val === "GOOD" ? "LUCKY" : "NEUTRAL"}
                                      </span>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>

                            <div className="p-8 bg-royal-gold/5 rounded-none border border-royal-gold/10 relative overflow-hidden group/card shadow-sm">
                              <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Star className="w-12 h-12 text-royal-gold" />
                              </div>
                              <div className="flex items-center gap-4 mb-4">
                                <h4 className="section-eyebrow text-royal-gold">
                                  Compatibility Score
                                </h4>
                              </div>
                              <p className="text-[24pt] font-display font-black text-black mb-1 tracking-tighter">
                                {report.compatibility.score}
                              </p>
                              <p className="text-[10px] font-black text-royal-gold/60 tracking-widest uppercase">
                                {report.compatibility.label}
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h4 className="section-eyebrow text-black font-black flex items-center gap-2 uppercase tracking-widest border-b border-royal-gold/10 pb-2">
                                <ArrowRight className="w-3 h-3 text-royal-gold" />{" "}
                                Specific Vibration Analysis
                              </h4>
                              <div className="space-y-3">
                                {report.repeatedEffects.map((t, i) => (
                                  <div
                                    key={i}
                                    className="text-[10px] font-bold text-black bg-black/5 p-3 rounded-none border border-royal-gold/10"
                                  >
                                    {t}
                                  </div>
                                ))}
                                {report.missingEffects.length > 0 && (
                                  <div className="p-3 bg-mystic-navy/2 rounded-none border border-dashed border-mystic-navy/20">
                                    <span className="text-[8px] font-black opacity-30 uppercase block mb-2">
                                      Missing Frequencies
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                      {report.missingEffects.map((m, i) => (
                                        <span
                                          key={i}
                                          className="text-[9px] font-bold text-black font-extrabold"
                                        >
                                          {m.split(":")[0]}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-10">
                            <div>
                              <h4 className="section-eyebrow text-black font-black mb-6 flex items-center gap-2">
                                <TrendingUp className="w-3 h-3 text-royal-gold" />{" "}
                                Pyramid Vibration
                              </h4>
                              <div className="flex items-center gap-6">
                                <div
                                  className={cn(
                                    "w-16 h-16 rounded-none bg-royal-gold/10 border border-royal-gold/30 flex items-center justify-center text-[24pt] font-display font-black",
                                    [1, 3, 5, 6, 9].includes(
                                      report.pyramid.digit,
                                    )
                                      ? "text-green-600"
                                      : report.pyramid.digit === 8
                                        ? "text-red-500"
                                        : "text-royal-gold",
                                  )}
                                >
                                  {report.pyramid.digit}
                                </div>
                                <p className="text-sm font-bold text-black leading-relaxed max-w-[200px]">
                                  {report.pyramid.interpretation}
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h4 className="section-eyebrow text-black font-black flex items-center gap-2">
                                <Target className="w-3 h-3 text-royal-gold" />{" "}
                                Digital Signatures
                              </h4>
                              <div className="space-y-3">
                                {report.combinations.positive.map((t, i) => (
                                  <div
                                    key={i}
                                    className="flex gap-3 text-xs font-bold text-green-700 bg-green-50 p-3 rounded-none border border-green-100"
                                  >
                                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                                    {t}
                                  </div>
                                ))}
                                {report.combinations.negative.map((t, i) => (
                                  <div
                                    key={i}
                                    className="flex gap-3 text-xs font-bold text-red-600 bg-red-50 p-3 rounded-none border border-red-100"
                                  >
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    {t}
                                  </div>
                                ))}
                              </div>
                            </div>


                          </div>
                        </div>

                        {/* Strategic Recommendation card */}
                        <div
                          className={cn(
                            "mt-12 p-8 rounded-none border-2 shadow-2xl",
                            report.recommendation.status === "IDEAL"
                              ? "bg-green-50/50 border-green-200"
                              : report.recommendation.status === "CRITICAL"
                                ? "bg-red-50/50 border-red-200"
                                : "bg-royal-gold/5 border-royal-gold/20",
                          )}
                        >
                          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                            <div
                              className={cn(
                                "w-12 h-12 rounded-none flex items-center justify-center text-white shadow-lg shrink-0",
                                report.recommendation.status === "IDEAL"
                                  ? "bg-green-500 shadow-green-200"
                                  : report.recommendation.status === "CRITICAL"
                                    ? "bg-red-500 shadow-red-200"
                                    : "bg-royal-gold shadow-royal-gold/20",
                              )}
                            >
                              <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="section-eyebrow text-black font-black tracking-widest uppercase mb-1">
                                Strategic Conclusion
                              </h4>
                              <p
                                className={cn(
                                  "text-xs font-black uppercase tracking-widest",
                                  report.recommendation.status === "IDEAL"
                                    ? "text-green-600"
                                    : report.recommendation.status ===
                                        "CRITICAL"
                                      ? "text-red-600"
                                      : "text-royal-gold",
                                )}
                              >
                                {report.recommendation.status === "IDEAL"
                                  ? "Ideal Alignment"
                                  : report.recommendation.status === "CRITICAL"
                                    ? "Transition Advisable"
                                    : "Neutral Vibration"}
                              </p>
                            </div>
                          </div>

                          <p className="text-sm font-bold text-black leading-relaxed mb-10 pl-4 border-l-4 border-royal-gold/30">
                            {report.recommendation.verdict}
                          </p>

                          {report.warnings.length > 0 && (
                            <div className="mb-10 space-y-3">
                              {report.warnings.map((w, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-3 px-4 py-2 bg-red-500/5 rounded-none border border-red-500/10"
                                >
                                  <AlertCircle className="w-3 h-3 text-red-600" />
                                  <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">
                                    {w}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 pt-8 border-t border-mystic-navy/5">
                            <div className="space-y-4">
                              <span className="text-[10px] font-black text-black uppercase tracking-widest block">
                                Recommended Support Totals:
                              </span>
                              <div className="flex gap-3">
                                {report.recommendation.suggestedTotals.map(
                                  (t) => (
                                    <div
                                      key={t}
                                      className="group/total relative"
                                    >
                                      <div className="w-12 h-12 rounded-none bg-mystic-navy text-warm-off-white flex items-center justify-center font-display font-black shadow-lg hover:bg-royal-gold transition-all cursor-default">
                                        {t}
                                      </div>
                                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-mystic-navy text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover/total:opacity-100 transition-opacity whitespace-nowrap">
                                        Total {t}
                                      </span>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                              }
                              className="px-10 py-5 bg-mystic-navy text-warm-off-white rounded-none font-black text-[10px] tracking-[.3em] uppercase hover:bg-royal-gold transition-all shadow-2xl flex items-center gap-3"
                            >
                              <RefreshCw className="w-4 h-4" /> Reset Vibration
                            </button>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>

                {/* Summary Footer */}
                <div className="mt-16 p-16 rounded-none bg-mystic-navy text-warm-off-white text-center border-t-8 border-royal-gold shadow-2xl">
                  <h3 className="text-[10px] tracking-[0.3em] font-black text-royal-gold uppercase mb-8">
                    Executive Recommendation
                  </h3>
                  <p className="text-2xl md:text-3xl font-serif italic text-warm-off-white max-w-3xl mx-auto leading-relaxed mb-12">
                    "Your digital frequency is a{" "}
                    <span className="text-royal-gold not-italic">
                      Mirror of your Destiny
                    </span>
                    . Aligning your numbers is the first step to absolute
                    clarity."
                  </p>
                  <div className="flex justify-center">
                    <Link
                      to="/contact"
                      className="px-10 py-4 bg-royal-gold text-mystic-navy font-display font-black tracking-[0.2em] text-[12px] rounded-none hover:scale-105 transition-all shadow-xl"
                    >
                      Contact Expert
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {aiReport && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-10"
              >
                <div className="flex justify-between items-center bg-white p-8 rounded-none shadow-xl border border-royal-gold/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-royal-gold rounded-none flex items-center justify-center">
                      <FileText className="w-6 h-6 text-mystic-navy" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-mystic-navy italic">
                      Personal Vedic Report
                    </h3>
                  </div>
                  <button
                    onClick={() => setAiReport(null)}
                    className="text-xs font-black tracking-widest text-royal-gold hover:underline flex items-center gap-2"
                  >
                    <RefreshCw className="w-3 h-3" /> NEW ANALYSIS
                  </button>
                </div>

                <div className="glass-card p-12 md:p-20 rounded-none bg-white shadow-3xl border-royal-gold/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Sparkles className="w-64 h-64 text-royal-gold" />
                  </div>

                  <div className="prose prose-numerology max-w-none relative z-10">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => (
                          <h1 className="text-4xl font-display font-black text-mystic-navy mb-12 border-b-2 border-royal-gold pb-6">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-2xl font-display font-bold text-royal-gold mt-16 mb-8 italic">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-xl font-display font-black text-black mt-12 mb-6 tracking-wide">
                            {children}
                          </h3>
                        ),
                        p: ({ children }) => (
                          <p className="text-base leading-relaxed text-black font-semibold mb-6">
                            {children}
                          </p>
                        ),
                        li: ({ children }) => (
                          <li className="text-sm font-black text-black mb-3">
                            {children}
                          </li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-black text-royal-gold">
                            {children}
                          </strong>
                        ),
                        hr: () => <hr className="my-16 border-royal-gold/20" />,
                      }}
                    >
                      {aiReport}
                    </ReactMarkdown>
                  </div>

                  <div className="mt-20 pt-16 border-t border-royal-gold/20 text-center">
                    <Link
                      to="/consultation"
                      className="inline-flex items-center gap-4 px-12 py-6 bg-mystic-navy text-warm-off-white rounded-none font-display font-black tracking-[0.2em] text-[12px] shadow-2xl hover:scale-105 transition-all group"
                    >
                      BOOK PRIVATE SESSION WITH ARUN POOVAIAH
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform text-royal-gold" />
                    </Link>
                    <p className="mt-10 text-[10px] font-black text-black tracking-[0.4em] uppercase">
                      AUTHENTIC VEDIC TRADITION • MODERN PRECISION
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
