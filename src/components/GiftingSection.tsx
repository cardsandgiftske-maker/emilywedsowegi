import React, { useState } from 'react';
import { Gift, Copy, Check, Smartphone, Sparkles, Heart } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

export const GiftingSection: React.FC = () => {
  const [copiedPaybill, setCopiedPaybill] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopyPaybill = () => {
    navigator.clipboard.writeText(WEDDING_DETAILS.paybillNumber);
    setCopiedPaybill(true);
    setTimeout(() => setCopiedPaybill(false), 2500);
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(WEDDING_DETAILS.accountNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  return (
    <div className="bg-[#FAF6EE] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-[#D8C7B5]">
      <section id="gifting" className="max-w-3xl mx-auto">
        
        <div className="bg-[#FAF6EE] border-2 border-[#D4A359]/70 rounded-3xl p-6 sm:p-10 shadow-xl text-center space-y-6 relative overflow-hidden">
          
          {/* Subtle Decorative Background Circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C85A32]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2B1E1A]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Section Header */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2B1E1A] text-[#D4A359] text-xs font-semibold uppercase tracking-widest border border-[#D4A359]">
            <Gift className="w-3.5 h-3.5" />
            <span>Gifting &amp; Registry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#2B1E1A] font-bold">
            Blessings &amp; Appreciation
          </h2>

          {/* Quote Card */}
          <div className="max-w-xl mx-auto bg-[#F5EFE6] border border-[#D8C7B5] rounded-2xl p-5 sm:p-6 text-center shadow-xs space-y-2">
            <p className="font-serif text-base sm:text-lg text-[#2B1E1A] leading-relaxed italic">
              “Your love, presence, prayers, and good wishes mean the world to us and are truly the greatest gifts as we begin this journey together. For those who may wish to share in our joy in a special way, your kind gesture through M-PESA will be warmly appreciated.”
            </p>
            <p className="font-script text-2xl sm:text-3xl text-[#C85A32] font-bold pt-1">
              — Emilly &amp; Owegi
            </p>
          </div>

          {/* Lipa na M-Pesa Box */}
          <div className="max-w-md mx-auto bg-[#2B1E1A] text-[#F5EFE6] rounded-2xl p-5 sm:p-6 border-2 border-[#D4A359] shadow-md text-left space-y-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-sans tracking-widest uppercase text-[#D4A359] font-bold">
                  LIPA NA M-PESA
                </span>
                <span className="block font-serif text-sm font-bold text-white">
                  Paybill Option
                </span>
              </div>
            </div>

            <hr className="border-[#D4A359]/30" />

            {/* Paybill Field */}
            <div className="flex items-center justify-between bg-[#3D2C27] p-3 rounded-xl border border-[#D4A359]/40">
              <div>
                <span className="block text-[10px] text-[#F5EFE6]/80 uppercase font-semibold">
                  Business / Paybill Number
                </span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#D4A359] tracking-wider">
                  {WEDDING_DETAILS.paybillNumber}
                </span>
              </div>

              <button
                onClick={handleCopyPaybill}
                className="px-3 py-1.5 rounded-lg bg-[#C85A32] hover:bg-[#A8482A] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                {copiedPaybill ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPaybill ? 'Copied!' : 'Copy Paybill'}</span>
              </button>
            </div>

            {/* Account Number Field */}
            <div className="flex items-center justify-between bg-[#3D2C27] p-3 rounded-xl border border-[#D4A359]/40">
              <div className="overflow-hidden pr-2">
                <span className="block text-[10px] text-[#F5EFE6]/80 uppercase font-semibold">
                  Account Number
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#F5EFE6] tracking-wide block truncate">
                  {WEDDING_DETAILS.accountNumber}
                </span>
              </div>

              <button
                onClick={handleCopyAccount}
                className="px-3 py-1.5 rounded-lg bg-[#C85A32] hover:bg-[#A8482A] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs shrink-0 cursor-pointer active:scale-95"
              >
                {copiedAccount ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAccount ? 'Copied!' : 'Copy Account'}</span>
              </button>
            </div>

            <p className="text-[11px] text-[#F5EFE6]/70 text-center font-sans pt-1">
              May the Lord abundantly bless and replenish you for your generosity.
            </p>

          </div>

        </div>

      </section>
    </div>
  );
};

