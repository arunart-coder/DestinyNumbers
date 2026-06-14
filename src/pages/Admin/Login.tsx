import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, KeyRound, ArrowLeft, Loader2, LogIn, ShieldAlert } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const { user, isAdmin, signInWithGoogle, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && user && isAdmin) {
      const from = (location.state as any)?.from?.pathname || '/admin/dashboard';
      navigate(from, { replace: true });
    }
  }, [user, isAdmin, loading, navigate, location]);

  const handleLogin = async () => {
    setError(null);
    setIsSigningIn(true);
    try {
      await signInWithGoogle();
      // AuthProvider useEffect will handle navigation if admin
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
      setIsSigningIn(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F2A] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-royal-gold" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F2A] flex items-center justify-center px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-gold/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-mystic-navy rounded-none flex items-center justify-center mx-auto mb-10 border border-royal-gold/20 shadow-2xl">
            <ShieldCheck className="w-10 h-10 text-royal-gold" />
          </div>
          <span className="text-royal-gold text-[10px] tracking-[0.5em] font-black mb-4 block">Identity Verification</span>
          <h1 className="text-4xl font-display font-medium text-warm-off-white italic tracking-tight">
            Vault <span className="not-italic text-royal-gold">Access</span>
          </h1>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[12px] border border-[#E0D5C0] shadow-2xl relative space-y-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm">Secure access for Dr. Arun Poovaiah</p>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-3 text-sm"
              >
                <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                <p>{error}</p>
              </motion.div>
            )}

            {user && !isAdmin && !loading && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-lg flex items-center gap-3 text-sm"
              >
                <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                <p>You do not have administrative privileges. Please contact the owner.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handleLogin}
            disabled={isSigningIn}
            className="w-full h-[52px] rounded-[6px] bg-[#C9A84C] text-white text-[11px] font-black tracking-[0.3em] flex items-center justify-center gap-4 hover:shadow-2xl transition-all uppercase disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSigningIn ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg" className="w-5 h-5 bg-white rounded-full p-0.5" alt="Google" />
                Sign in with Google
              </>
            )}
          </button>

          <div className="pt-4 border-t border-gray-100 flex justify-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-[10px] font-black tracking-[0.2em] transition-colors uppercase"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Public Site
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-[9px] text-white/20 tracking-[0.4em] font-black">
          © 2025 Destiny Numbers. Secure Environment.
        </div>
      </motion.div>
    </div>
  );
}

