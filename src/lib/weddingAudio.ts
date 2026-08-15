// Web Audio Saxophone Synthesizer Fallback & YouTube Audio Player
// Plays requested YouTube song: "My Everything / Romantic Saxophone Wedding Song" (ID: hacc1eHv-6c)

class SaxophoneAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;

  private melodySequence: Array<{ freq: number; duration: number; slideTo?: number }> = [
    { freq: 293.66, duration: 1200 },
    { freq: 369.99, duration: 800 },
    { freq: 440.00, duration: 1600, slideTo: 493.88 },
    { freq: 493.88, duration: 1000 },
    { freq: 440.00, duration: 800 },
    { freq: 369.99, duration: 800 },
    { freq: 329.63, duration: 1400 },
    { freq: 293.66, duration: 800 },
    { freq: 369.99, duration: 800 },
    { freq: 440.00, duration: 1000 },
    { freq: 587.33, duration: 2000 },
    { freq: 554.37, duration: 1000 },
    { freq: 493.88, duration: 1200 },
    { freq: 440.00, duration: 1600 },
    { freq: 369.99, duration: 800 },
    { freq: 440.00, duration: 800 },
    { freq: 587.33, duration: 1000 },
    { freq: 659.25, duration: 1200 },
    { freq: 739.99, duration: 2200 },
    { freq: 659.25, duration: 1000 },
    { freq: 587.33, duration: 1600 },
    { freq: 493.88, duration: 1000 },
    { freq: 440.00, duration: 1200 },
    { freq: 369.99, duration: 1200 },
    { freq: 329.63, duration: 1400 },
    { freq: 293.66, duration: 2400 },
  ];

  private currentNoteIndex = 0;

  public start() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.currentNoteIndex = 0;
      this.playNextSaxNote();
    } catch {
      // Ignore
    }
  }

  private playNextSaxNote() {
    if (!this.isPlaying || !this.ctx) return;
    const note = this.melodySequence[this.currentNoteIndex];
    this.playSaxophoneNote(note.freq, note.duration / 1000, note.slideTo);
    this.currentNoteIndex = (this.currentNoteIndex + 1) % this.melodySequence.length;
    const delay = Math.max(200, note.duration - 80);
    this.timer = window.setTimeout(() => {
      this.playNextSaxNote();
    }, delay);
  }

  private playSaxophoneNote(freq: number, durationSec: number, slideToFreq?: number) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const oscSaw = this.ctx.createOscillator();
    const oscTri = this.ctx.createOscillator();
    oscSaw.type = 'sawtooth';
    oscTri.type = 'triangle';
    oscSaw.frequency.setValueAtTime(freq, now);
    oscTri.frequency.setValueAtTime(freq * 0.5, now);

    if (slideToFreq) {
      oscSaw.frequency.exponentialRampToValueAtTime(slideToFreq, now + durationSec * 0.7);
      oscTri.frequency.exponentialRampToValueAtTime(slideToFreq * 0.5, now + durationSec * 0.7);
    }

    const bandpassFilter = this.ctx.createBiquadFilter();
    bandpassFilter.type = 'bandpass';
    bandpassFilter.frequency.setValueAtTime(1400, now);

    const noteGain = this.ctx.createGain();
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.18, now + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    oscSaw.connect(bandpassFilter);
    oscTri.connect(bandpassFilter);
    bandpassFilter.connect(noteGain);
    noteGain.connect(this.ctx.destination);

    oscSaw.start(now);
    oscTri.start(now);
    oscSaw.stop(now + durationSec);
    oscTri.stop(now + durationSec);
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
  }
}

class YouTubeAudioPlayer {
  private player: any = null;
  private isPlaying: boolean = false;
  private isApiReady: boolean = false;
  private videoId: string = 'hacc1eHv-6c';
  private fallbackSynth: SaxophoneAudioSynthesizer;

  constructor() {
    this.fallbackSynth = new SaxophoneAudioSynthesizer();
    this.initYouTubeApi();
  }

  private initYouTubeApi() {
    if (typeof window === 'undefined') return;

    // Attach global API ready listener
    const existingReady = (window as any).onYouTubeIframeAPIReady;
    (window as any).onYouTubeIframeAPIReady = () => {
      if (existingReady) existingReady();
      this.createPlayer();
    };

    if ((window as any).YT && (window as any).YT.Player) {
      this.createPlayer();
    } else if (!document.getElementById('yt-iframe-api')) {
      const tag = document.createElement('script');
      tag.id = 'yt-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }
  }

  private createPlayer() {
    if (this.player) return;

    let container = document.getElementById('yt-bg-player-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'yt-bg-player-container';
      container.style.position = 'fixed';
      container.style.top = '-9999px';
      container.style.left = '-9999px';
      container.style.width = '1px';
      container.style.height = '1px';
      container.style.opacity = '0';
      container.style.pointerEvents = 'none';
      document.body.appendChild(container);
    }

    const playerDiv = document.createElement('div');
    playerDiv.id = 'yt-player-elem';
    container.appendChild(playerDiv);

    try {
      this.player = new (window as any).YT.Player('yt-player-elem', {
        height: '1',
        width: '1',
        videoId: this.videoId,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: this.videoId,
          controls: 0,
          showinfo: 0,
          autohide: 1,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            this.isApiReady = true;
            if (this.isPlaying) {
              this.fallbackSynth.stop();
              try {
                this.player.playVideo();
              } catch {
                this.fallbackSynth.start();
              }
            }
          },
          onError: () => {
            if (this.isPlaying) {
              this.fallbackSynth.start();
            }
          },
        },
      });
    } catch {
      // Fallback handled in start()
    }
  }

  public start() {
    this.isPlaying = true;
    if (this.isApiReady && this.player && typeof this.player.playVideo === 'function') {
      try {
        this.fallbackSynth.stop();
        this.player.playVideo();
      } catch {
        this.fallbackSynth.start();
      }
    } else {
      this.fallbackSynth.start();
    }
  }

  public stop() {
    this.isPlaying = false;
    this.fallbackSynth.stop();
    if (this.isApiReady && this.player && typeof this.player.pauseVideo === 'function') {
      try {
        this.player.pauseVideo();
      } catch {
        // Ignore
      }
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const weddingAudio = new YouTubeAudioPlayer();
