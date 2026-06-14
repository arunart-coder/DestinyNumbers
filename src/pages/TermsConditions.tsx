
import React from 'react';
import { FileText } from 'lucide-react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export default function TermsConditions() {
  return (
    <LegalPageLayout 
      title="Terms & Conditions" 
      subtitle="The contractual governed framework for Destiny Numbers"
      icon={FileText}
    >
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">1. Agreement & Free Consent</h2>
          <p>
            This (including any modification / alteration / change / deletion in this Agreement from time to time 
            by Destinynumbers.in) is a contract between you and Destinynumbers.in.
          </p>
          <p className="mt-4">
            You state that the very fact that you are visiting / have visited Destinynumbers.in is a complete 
            unqualified acceptance of yours relating to various terms and conditions detailed in the website 
            as also in the disclaimer section of this Agreement. You fully declare and undertake with a sound 
            mind without any undue force, pressure, influence or coercion on you, that you shall be fully bound 
            by the terms of the website as also by the terms of the disclaimer.
          </p>
          <p className="mt-4 font-bold text-mystic-navy">
            Exclusive jurisdiction to file law suits against you shall be in the courts at Bengaluru only.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">2. Account Responsibility</h2>
          <p>
            When you create an account with us you must provide information that is accurate, complete, 
            and current at all times. You are responsible for safeguarding the password that you use to 
            access the Service and agree not to disclose it to any third party.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">3. Accuracy of Information</h2>
          <p>
            Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, 
            performance, completeness or suitability of the information and materials found or offered for any 
            particular purpose. You acknowledge that such information may contain inaccuracies or errors and 
            we expressly exclude liability for such to the fullest extent permitted by law. Your use of any 
            information on the Service is entirely at your own risk.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">4. Content Posted on the Site</h2>
          <p>
            Destinynumbers.in owns and retains all proprietary rights, including without limitation, all 
            intellectual property rights in the site and service. You may not copy, modify, publish, or sell 
            any such proprietary information. Any messages or content you post on our forum boards shall become 
            the property of Destinynumbers.in.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">5. Copyright Policy</h2>
          <p>
            You cannot post or reproduce copyrighted material without prior written consent. If you believe 
            your work has been copied in a way that constitutes infringement, please provide our Copyright 
            Agent with the required electronic signature, description of work, and contact details for notice 
            of claims at our Bengaluru address.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">6. Disclaimers & Limitation of Liability</h2>
          <p>
            Your use of the service is at your sole risk. Arun P @ Destinynumbers.in and its affiliates 
            expressly disclaim all warranties of any kind, whether express or implied.
          </p>
          <ul className="list-disc pl-6 space-y-4 mt-6 italic text-mystic-navy/80">
            <li>Numerological counseling is based on individual knowledge and may vary between practitioners.</li>
            <li>Recommendations of mantras, yantras, or gemstones are made in good faith but offer no guaranteed results.</li>
            <li>We do not warrant that the service will be uninterrupted, secure, or error-free.</li>
            <li>Any material downloaded is accessed at your own discretion and risk.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">7. Liability Ceiling</h2>
          <p className="bg-mystic-navy/5 p-6 rounded-2xl border border-mystic-navy/10">
            Notwithstanding anything to the contrary, the liability of Arun P @ Destinynumbers.in to you 
            for any cause whatsoever, regardless of the form of the action, will at all times be limited 
            to the <strong>amount paid, if any, by you to Destinynumbers.in</strong> for the service 
            during the term of membership.
          </p>
        </div>

        <div className="pt-10 italic text-sm text-mystic-navy/40">
          Last updated: May 2026. This agreement constitutes a binding legal contract.
        </div>
      </section>
    </LegalPageLayout>
  );
}
