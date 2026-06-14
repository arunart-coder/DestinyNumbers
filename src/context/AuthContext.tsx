import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  User, 
  signInWithPopup, 
  signOut as firebaseSignOut 
} from 'firebase/auth';
import { doc, getDoc, setDoc, collection, getDocs, limit, query } from 'firebase/firestore';
import { auth, db, googleProvider } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        try {
          // Check if user is an admin
          const adminDoc = await getDoc(doc(db, 'admins', user.uid));
          if (adminDoc.exists()) {
            setIsAdmin(true);
          } else {
            // Bootstrap: If this is the primary user, promote them regardless of whether admins exist
            // This is safer for the initial setup in this environment
            if (user.email === 'destinynumbers99@gmail.com') {
              try {
                await setDoc(doc(db, 'admins', user.uid), { 
                  email: user.email, 
                  role: 'admin',
                  promotedAt: new Date().toISOString() 
                });
                setIsAdmin(true);
              } catch (e) {
                console.warn('Silent bootstrap failed, but marking as admin via email check:', e);
                // Fallback to purely email-based admin state if document creation fails
                setIsAdmin(true);
              }
            } else {
              setIsAdmin(false);
            }
          }
        } catch (e) {
          console.error('Error checking admin status:', e);
          // High-level fallback: if they are the bootstrap email, they are admin
          setIsAdmin(user.email === 'destinynumbers99@gmail.com');
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);


  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
