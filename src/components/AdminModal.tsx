import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, X, RefreshCw, Download, Trash2, Search, Users, CheckCircle, XCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { getAllRsvpsFromFirestore, deleteRsvpFromFirestore, RsvpData } from '../lib/firebase';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_ADMIN_PASS = '2026';

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  const [rsvps, setRsvps] = useState<Array<RsvpData & { id: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'yes' | 'no'>('all');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadRsvps();
    }
  }, [isOpen, isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === DEFAULT_ADMIN_PASS || passwordInput.trim().toLowerCase() === 'eo2026' || passwordInput.trim().toLowerCase() === 'nyombo') {
      setIsAuthenticated(true);
      setAuthError('');
      setPasswordInput('');
    } else {
      setAuthError('Incorrect passcode. Try "2026" or "eo2026"');
    }
  };

  const loadRsvps = async () => {
    setIsLoading(true);
    const data = await getAllRsvpsFromFirestore();
    setRsvps(data);
    setIsLoading(false);
  };

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete the RSVP entry for "${name}"?`)) {
      setDeletingId(id);
      try {
        await deleteRsvpFromFirestore(id);
        setRsvps(prev => prev.filter(r => r.id !== id));
      } catch (err) {
        console.error('Failed to delete RSVP:', err);
        alert('Failed to delete entry.');
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleExportCSV = () => {
    if (rsvps.length === 0) return;

    const headers = ['Full Name', 'Phone', 'Email', 'Attending', 'Guest Count', 'Dietary Notes', 'Message', 'Submitted At'];
    const rows = rsvps.map(r => [
      `"${r.fullName.replace(/"/g, '""')}"`,
      `"${r.phone}"`,
      `"${r.email || ''}"`,
      `"${r.attending === 'yes' ? 'Attending' : 'Declined'}"`,
      r.guestCount || 0,
      `"${(r.dietary || '').replace(/"/g, '""')}"`,
      `"${(r.message || '').replace(/"/g, '""')}"`,
      `"${r.createdAt?.toDate ? r.createdAt.toDate().toLocaleString() : ''}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Emilly_Owegi_Nyombo_RSVPs_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  const filteredRsvps = rsvps.filter(r => {
    const matchesSearch = r.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.phone.includes(searchTerm) ||
      (r.email && r.email.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || r.attending === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalSubmissions = rsvps.length;
  const totalAttending = rsvps.filter(r => r.attending === 'yes').length;
  const totalDeclined = rsvps.filter(r => r.attending === 'no').length;
  const totalHeadcount = rsvps.reduce((acc, r) => acc + (r.attending === 'yes' ? (r.guestCount || 1) : 0), 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF6EE] w-full max-w-4xl rounded-2xl border-2 border-[#D4A359] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#2B1E1A] text-white px-6 py-4 border-b border-[#D4A359]/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D4A359]" />
            <h3 className="font-serif font-bold text-lg text-[#F5EFE6]">
              Emilly &amp; Owegi — RSVP Admin Panel
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs bg-[#D4A359]/20 hover:bg-[#D4A359]/30 border border-[#D4A359]/50 text-[#D4A359] px-3 py-1 rounded-full transition-all cursor-pointer"
              >
                Lock Panel
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Password Authentication Gate */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6 my-auto">
            <div className="w-16 h-16 rounded-full bg-[#2B1E1A]/10 border border-[#D4A359] flex items-center justify-center mx-auto text-[#2B1E1A]">
              <Lock className="w-8 h-8 text-[#C85A32]" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif font-bold text-xl text-[#2B1E1A]">
                Protected Admin Access
              </h4>
              <p className="text-xs text-[#2B1E1A]/80 font-sans">
                Please enter the passcode to access guest RSVP records and manage Nyombo ceremony attendance.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter passcode (e.g. 2026)"
                  className="w-full px-4 py-3 rounded-xl border border-[#D8C7B5] bg-white text-[#2B1E1A] text-center font-mono text-base focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {authError && (
                <div className="p-2.5 bg-red-100 border border-red-300 rounded-lg text-red-700 text-xs flex items-center justify-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#2B1E1A] hover:bg-[#3E2723] text-[#D4A359] font-sans text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                Unlock Admin Dashboard
              </button>
            </form>

            <p className="text-[11px] text-[#2B1E1A]/70 italic">
              Default passcode: <code className="bg-[#EBDCC8] px-1.5 py-0.5 rounded text-[#2B1E1A] font-mono">2026</code>
            </p>
          </div>
        ) : (
          /* Admin Dashboard */
          <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
            
            {/* Stats Overview Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#2B1E1A] text-white p-4 rounded-xl border border-[#D4A359]/60 shadow-sm">
                <div className="text-[11px] text-[#D4A359] uppercase tracking-wider font-semibold">Total Responses</div>
                <div className="text-2xl font-serif font-bold text-white mt-1">{totalSubmissions}</div>
              </div>

              <div className="bg-[#25D366]/15 border border-[#25D366]/50 p-4 rounded-xl shadow-sm text-[#2B1E1A]">
                <div className="text-[11px] text-[#2B1E1A] uppercase tracking-wider font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" /> Attending
                </div>
                <div className="text-2xl font-serif font-bold text-[#2B1E1A] mt-1">{totalAttending}</div>
              </div>

              <div className="bg-[#C85A32]/15 border border-[#C85A32]/40 p-4 rounded-xl shadow-sm text-[#2B1E1A]">
                <div className="text-[11px] text-[#C85A32] uppercase tracking-wider font-bold flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-[#C85A32]" /> Declined
                </div>
                <div className="text-2xl font-serif font-bold text-[#C85A32] mt-1">{totalDeclined}</div>
              </div>

              <div className="bg-[#D4A359]/20 border border-[#D4A359] p-4 rounded-xl shadow-sm text-[#2B1E1A]">
                <div className="text-[11px] text-[#2B1E1A] uppercase tracking-wider font-bold flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#D4A359]" /> Guest Headcount
                </div>
                <div className="text-2xl font-serif font-bold text-[#2B1E1A] mt-1">{totalHeadcount}</div>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#F5EFE6] p-3.5 rounded-xl border border-[#D8C7B5]">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search guest name or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-[#D8C7B5] text-xs text-[#2B1E1A] focus:outline-none focus:ring-1 focus:ring-[#2B1E1A]"
                />
              </div>

              {/* Status Filters */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#D8C7B5] text-xs">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${statusFilter === 'all' ? 'bg-[#2B1E1A] text-white' : 'text-[#2B1E1A] hover:bg-gray-100'}`}
                >
                  All ({totalSubmissions})
                </button>
                <button
                  onClick={() => setStatusFilter('yes')}
                  className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${statusFilter === 'yes' ? 'bg-[#25D366] text-white' : 'text-[#2B1E1A] hover:bg-gray-100'}`}
                >
                  Attending ({totalAttending})
                </button>
                <button
                  onClick={() => setStatusFilter('no')}
                  className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${statusFilter === 'no' ? 'bg-[#C85A32] text-white' : 'text-[#2B1E1A] hover:bg-gray-100'}`}
                >
                  Declined ({totalDeclined})
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={loadRsvps}
                  disabled={isLoading}
                  className="p-2 bg-white hover:bg-gray-100 text-[#2B1E1A] border border-[#D8C7B5] rounded-lg transition-all cursor-pointer"
                  title="Refresh from Firestore"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </button>

                <button
                  onClick={handleExportCSV}
                  disabled={rsvps.length === 0}
                  className="px-3 py-2 bg-[#2B1E1A] hover:bg-[#3E2723] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#D4A359]" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* RSVP Data Table / List */}
            {isLoading ? (
              <div className="py-12 text-center text-[#2B1E1A]">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#C85A32] mb-2" />
                <p className="text-xs font-sans">Loading RSVPs from Firestore database...</p>
              </div>
            ) : filteredRsvps.length === 0 ? (
              <div className="py-12 text-center bg-white rounded-xl border border-dashed border-[#D8C7B5] p-6 text-[#2B1E1A]">
                <p className="font-serif font-bold text-sm text-[#2B1E1A] mb-1">No RSVPs found</p>
                <p className="text-xs">
                  {searchTerm ? 'No guests match your search criteria.' : 'No guest responses have been submitted yet.'}
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-[#D8C7B5] shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#2B1E1A] text-[#D4A359] uppercase text-[10px] tracking-wider font-semibold">
                      <th className="py-3 px-4">Guest Name</th>
                      <th className="py-3 px-4">Phone / Email</th>
                      <th className="py-3 px-4 text-center">Status</th>
                      <th className="py-3 px-4 text-center">Guests</th>
                      <th className="py-3 px-4">Dietary &amp; Message</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredRsvps.map((rsvp) => (
                      <tr key={rsvp.id} className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#2B1E1A] whitespace-nowrap">
                          {rsvp.fullName}
                        </td>
                        <td className="py-3.5 px-4 text-[#2B1E1A]/80">
                          <div>{rsvp.phone}</div>
                          {rsvp.email && <div className="text-[10px] text-gray-500">{rsvp.email}</div>}
                        </td>
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          {rsvp.attending === 'yes' ? (
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-300">
                              <CheckCircle className="w-3 h-3 text-green-600" /> Attending
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-300">
                              <XCircle className="w-3 h-3 text-red-600" /> Declined
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center font-bold text-[#2B1E1A]">
                          {rsvp.attending === 'yes' ? rsvp.guestCount || 1 : 0}
                        </td>
                        <td className="py-3.5 px-4 max-w-xs">
                          {rsvp.dietary && (
                            <div className="text-[11px] text-[#C85A32] font-medium">
                              🥗 Dietary: {rsvp.dietary}
                            </div>
                          )}
                          {rsvp.message && (
                            <div className="text-[11px] italic text-[#2B1E1A]/90 mt-0.5">
                              &ldquo;{rsvp.message}&rdquo;
                            </div>
                          )}
                          {!rsvp.dietary && !rsvp.message && (
                            <span className="text-gray-400 text-[10px]">—</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(rsvp.id, rsvp.fullName)}
                            disabled={deletingId === rsvp.id}
                            className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded border border-red-200 transition-colors cursor-pointer"
                            title="Delete RSVP"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

