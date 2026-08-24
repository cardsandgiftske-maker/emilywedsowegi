import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { InvitationHero } from './components/InvitationHero';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';
import { DressCodeSection } from './components/DressCodeSection';
import { VenueSection } from './components/VenueSection';
import { RsvpSection } from './components/RsvpSection';
import { GiftingSection } from './components/GiftingSection';
import { GuestbookSection } from './components/GuestbookSection';
import { Footer } from './components/Footer';
import { DigitalCardModal } from './components/DigitalCardModal';
import { AdminModal } from './components/AdminModal';
import { FlowingVineConnector } from './components/SectionFlowDividers';
import { VintageEnvelopeWrapper } from './components/VintageEnvelopeWrapper';
import { weddingAudio } from './lib/weddingAudio';

export default function App() {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleToggleMusic = () => {
    const isPlaying = weddingAudio.toggle();
    setIsPlayingMusic(isPlaying);
  };

  return (
    <VintageEnvelopeWrapper
      isPlayingMusic={isPlayingMusic}
      onToggleMusic={handleToggleMusic}
    >
      <div className="min-h-screen bg-[#F5EFE6] text-[#2B1E1A] font-sans selection:bg-[#C85A32]/20 selection:text-[#C85A32]">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenCardModal={() => setIsCardModalOpen(true)}
          isPlayingMusic={isPlayingMusic}
          onToggleMusic={handleToggleMusic}
        />

        {/* Main Flowing Content Area */}
        <main className="relative">
          
          {/* SECTION 1: Greeting / Invitation Hero */}
          <InvitationHero onOpenCardModal={() => setIsCardModalOpen(true)} />

          {/* Story Connector 1 */}
          <FlowingVineConnector label="Counting Down" />

          {/* SECTION 2: Live Countdown Timer */}
          <Countdown />

          {/* Story Connector 2 */}
          <FlowingVineConnector label="Programme Schedule" />

          {/* SECTION 3: Programme / Timeline */}
          <EventDetails />

          {/* Story Connector 3 */}
          <FlowingVineConnector label="Attire Inspiration" />

          {/* SECTION 4: Dress Code */}
          <DressCodeSection />

          {/* Story Connector 4 */}
          <FlowingVineConnector label="Location & Directions" />

          {/* SECTION 5: Location, Venue & Travel Details */}
          <VenueSection />

          {/* Story Connector 5 */}
          <FlowingVineConnector label="Blessings & Appreciation" />

          {/* SECTION 6: Gifting & Lipa na M-Pesa details */}
          <GiftingSection />

          {/* Story Connector 6 */}
          <FlowingVineConnector label="Confirm Attendance" />

          {/* SECTION 7: Interactive RSVP Form */}
          <RsvpSection />

          {/* Story Connector 7 */}
          <FlowingVineConnector label="Blessings & Messages" />

          {/* SECTION 8: Celebratory Guestbook */}
          <GuestbookSection />

        </main>

        {/* Footer */}
        <Footer onOpenAdmin={() => setIsAdminModalOpen(true)} />

        {/* Modal to view printable/downloadable invitation card */}
        <DigitalCardModal
          isOpen={isCardModalOpen}
          onClose={() => setIsCardModalOpen(false)}
        />

        {/* Password-protected Admin Panel Modal */}
        <AdminModal
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
        />

      </div>
    </VintageEnvelopeWrapper>
  );
}



