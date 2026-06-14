
import React from 'react';
import { Scale } from 'lucide-react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export default function RefundPolicy() {
  return (
    <LegalPageLayout 
      title="Cancellation and Refund" 
      subtitle="Financial clarity and service fulfillment protocols"
      icon={Scale}
    >
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">1. Cancellation and Refund Policy</h2>
          <p>
            Refunds cannot be issued on the order of any product/service under any circumstances, 
            once it is in dispatched stage or after the course classes have resumed or course access 
            is granted to the student and the student has started to watch/learn the course. 
            Customers are requested to order carefully and with full consideration.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">2. Order Cancellation</h2>
          <p>
            If you wish to cancel an order, please e-mail our customer care team at 
            <strong> destinynumbers@gmail.com</strong> or <strong>support@destinynumber.in</strong> within 2 days from 
            making the payment, only if you have not accessed and watched the course videos or availed 
            the service you paid for.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">3. Delivery Timelines</h2>
          <p>
            The timelines displayed on the site are approximate. We will try on a best case to deliver 
            as soon as possible. Delays will not be considered as basis for refunds.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">4. Incorrect Data Policy</h2>
          <p>
            We do not consider refunds for incorrect data provided by the customer. We request you 
            to please re-check all your data when entered. Destinynumbers.in will not consider 
            refund requests resulting from the incorrect data provided by you. However, if you e-mail 
            us at <strong>arviendsudofficial@gmail.com</strong>, <strong>destinynumbers@gmail.com</strong>, or 
            <strong> support@destinynumber.in</strong> within 2 days of ordering the product/service, 
            we will consider the changes to be made.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-medium text-mystic-navy mb-4">5. Consultation Refunds</h2>
          <p>
            We provide prepaid consultation. After paying, if a customer/Natel changes their mind 
            and decides not to take the consultation, we will provide a full refund excluding the 
            transaction fee (for transaction fees, please refer to razorpay.com). 
            <strong> After consultation, there will be no refund.</strong>
          </p>
          <p className="mt-4">
            For any questions, please write to: <strong>support@destinynumber.in</strong> or <strong>destinynumbers@gmail.com</strong>.
          </p>
          <p className="mt-4 text-sm font-bold text-mystic-navy">
            Note: Refunds cannot be processed to third-party accounts.
          </p>
        </div>

        <div className="pt-10 italic text-sm text-mystic-navy/40">
          Last updated: May 2026. Clarity in transaction ensures harmony in vibration.
        </div>
      </section>
    </LegalPageLayout>
  );
}
