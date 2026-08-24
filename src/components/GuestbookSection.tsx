import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Send, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { GuestbookEntry } from '../types';
import { 
  submitGuestbookToFirestore, 
  getAllGuestbookFromFirestore 
} from '../lib/firebase';

export const GuestbookSection: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('Friend');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fetchEntries = async () => {
    try {
      const data = await getAllGuestbookFromFirestore();
      setEntries(data as GuestbookEntry[]);
    } catch (error) {
      console.warn('Error fetching guestbook:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await submitGuestbookToFirestore({
        name: name.trim(),
        relationship,
        message: message.trim(),
      });

      await fetchEntries();

      setName('');
      setMessage('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.warn('Guestbook submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="guestbook" className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2B1E1A]/10 text-[#2B1E1A] text-xs font-semibold uppercase tracking-widest border border-[#2B1E1A]/20">
          <MessageSquare className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>Blessings &amp; Wishes</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#2B1E1A] font-bold">
          Celebratory Guestbook
        </h2>

        <p className="max-w-md mx-auto text-sm text-[#2B1E1A]/80 font-sans">
          Leave a heartfelt note, prayer, or congratulatory message for Emilly &amp; Owegi on their special day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form to post a message */}
        <div className="lg:col-span-5 bg-[#FAF6EE] border-2 border-[#D4A359] rounded-2xl p-6 shadow-md">
          <h3 className="font-serif text-xl font-bold text-[#2B1E1A] mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C85A32] fill-[#C85A32]" />
            <span>Write Your Blessing</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-sans uppercase font-bold text-[#2B1E1A] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                disabled={isSubmitting}
                placeholder="e.g. Achieng' & Odhiambo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8C7B5] text-sm text-[#2B1E1A] focus:outline-none focus:ring-2 focus:ring-[#C85A32] disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-xs font-sans uppercase font-bold text-[#2B1E1A] mb-1">
                Relationship
              </label>
              <select
                value={relationship}
                disabled={isSubmitting}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8C7B5] text-sm text-[#2B1E1A] focus:outline-none focus:ring-2 focus:ring-[#C85A32] disabled:opacity-60"
              >
                <option value="Friend">Friend</option>
                <option value="Family / Relative">Family / Relative</option>
                <option value="Colleague">Colleague</option>
                <option value="Church Member">Church Member</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-sans uppercase font-bold text-[#2B1E1A] mb-1">
                Your Wish / Message *
              </label>
              <textarea
                rows={4}
                required
                disabled={isSubmitting}
                placeholder="May God bless your union with endless love, happiness, peace, and abundance..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8C7B5] text-sm text-[#2B1E1A] focus:outline-none focus:ring-2 focus:ring-[#C85A32] disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-[#2B1E1A] hover:bg-[#3E2723] text-[#F5EFE6] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#D4A359] shadow-sm transition-all cursor-pointer disabled:opacity-60 active:scale-98"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#D4A359]" />
                  <span>Saving Blessing...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-[#D4A359]" />
                  <span>Post Message to Guestbook</span>
                </>
              )}
            </button>

            {submitted && (
              <div className="flex items-center gap-2 text-xs text-green-800 font-medium bg-green-50 p-2.5 rounded-lg border border-green-200 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Thank you! Your wish has been safely saved to the guestbook.</span>
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Live Stream of Guest Messages */}
        <div className="lg:col-span-7 space-y-4 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
          {isLoading ? (
            <div className="bg-[#FAF6EE] border border-[#D8C7B5] rounded-2xl p-8 text-center space-y-3">
              <Loader2 className="w-6 h-6 animate-spin text-[#C85A32] mx-auto" />
              <p className="text-xs text-[#2B1E1A]/70 font-sans">
                Loading celebratory blessings...
              </p>
            </div>
          ) : entries.length === 0 ? (
            <div className="bg-[#FAF6EE] border border-[#D8C7B5] rounded-2xl p-8 text-center space-y-3">
              <Sparkles className="w-6 h-6 text-[#C85A32] mx-auto" />
              <h4 className="font-serif font-bold text-base text-[#2B1E1A]">
                No messages yet
              </h4>
              <p className="text-xs text-[#2B1E1A]/70 font-sans max-w-sm mx-auto leading-relaxed">
                Be the first to share a warm blessing, prayer, or congratulatory message for Emilly &amp; Owegi!
              </p>
            </div>
          ) : (
            entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-[#F5EFE6] border border-[#D8C7B5] rounded-2xl p-5 shadow-xs hover:border-[#D4A359] transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#C85A32] text-white flex items-center justify-center font-bold text-xs">
                      {entry.name ? entry.name.charAt(0).toUpperCase() : 'G'}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#2B1E1A]">
                        {entry.name}
                      </h4>
                      <span className="text-[10px] text-[#C85A32] font-sans font-semibold uppercase">
                        {entry.relationship}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] text-gray-500 font-mono">
                    {entry.createdAt ? new Date(entry.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : 'Recently'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#2B1E1A]/90 font-sans italic leading-relaxed pt-1">
                  &ldquo;{entry.message}&rdquo;
                </p>
              </div>
            ))
          )}
        </div>

      </div>

    </section>
  );
};

