
import React from 'react';
import { Bitcoin, Wallet, Link, Code2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16 scanline">
      <div className="absolute inset-0 bg-web3-gradient opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-cyber-grid-bg opacity-10 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-3/5 space-y-6">
            <h2 className="text-xl md:text-2xl font-mono text-cyber-neon">
              <span className="text-flicker">&#60;Certified AWS Expert&#47;&#62;</span>
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="cyber-text leading-tight">WHITNEY LEJAKA</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
              Cloud Solutions Architect designing scalable, efficient, and secure AWS infrastructures for the Web3 future.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#projects" className="cyber-button">View Projects</a>
              <a href="#contact" className="bg-transparent border-2 border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-cyber-dark-blue px-6 py-2 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm shadow-[0_0_10px_rgba(189,52,254,0.3)] hover:shadow-[0_0_15px_rgba(189,52,254,0.5)]">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 floating">
              <div className="absolute inset-0 rounded-full bg-cyber-dark-blue border-4 border-cyber-neon flex items-center justify-center overflow-hidden glow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-black via-transparent to-cyber-neon opacity-40"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="web3-art grid grid-cols-3 gap-4 transform rotate-45 scale-150">
                    <Bitcoin className="text-cyber-yellow w-12 h-12 opacity-80" />
                    <Code2 className="text-cyber-neon w-10 h-10 opacity-70" />
                    <Link className="text-cyber-magenta w-8 h-8 opacity-60" />
                    <Wallet className="text-cyber-neon w-10 h-10 opacity-80" />
                    <Bitcoin className="text-cyber-magenta w-12 h-12 opacity-60" />
                    <Link className="text-cyber-yellow w-8 h-8 opacity-70" />
                    <Wallet className="text-cyber-neon w-10 h-10 opacity-60" />
                    <Code2 className="text-cyber-magenta w-8 h-8 opacity-80" />
                    <Bitcoin className="text-cyber-yellow w-12 h-12 opacity-60" />
                  </div>
                </div>
                <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-gradient-to-t from-cyber-neon to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
