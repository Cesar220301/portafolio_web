import { useEffect, useState } from "react";
import "./portfolio-azul.css";
import { RING1, RING2, RING3, RING4 } from "./data/content";
import SIIcon from "./components/SIIcon";
import OrbitRing from "./components/OrbitRing";
import CenterMonogram from "./components/CenterMonogram";
import ContactOrbit from "./components/ContactOrbit";
import Marquee from "./components/Marquee";

export default function PortfolioAzul() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="portfolio-azul">
      <div className="bg-mesh" />

      {/* NAV */}
      <nav style={{
        position:"sticky",top:0,zIndex:100,
        background:"rgba(248,250,255,0.88)",backdropFilter:"blur(14px)",
        borderBottom:"1px solid rgba(30,58,138,0.08)",
        height:64,display:"flex",alignItems:"center",
        justifyContent:"space-between",
        padding:"0 clamp(20px,6vw,72px)",
        opacity:loaded?1:0,transition:"opacity 0.5s ease",
      }}>
        <span style={{fontSize:16,fontWeight:800,letterSpacing:"-0.04em",color:"#1e3a8a"}}>
          César<span style={{color:"#93c5fd",fontWeight:500}}>.dev</span>
        </span>
        <div style={{display:"flex",gap:10,alignItems:"center"}}>
          <a href="https://github.com/cesarespiridion" target="_blank" rel="noreferrer"
            className="cta-secondary" style={{padding:"9px 18px",fontSize:13}}>
            GitHub
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero-grid" style={{opacity:loaded?1:0,transition:"opacity 0.7s ease 0.1s"}}>

        {/* LEFT */}
        <div className="text-side">
          <h1 style={{
            fontSize:"clamp(34px,4.5vw,56px)",
            fontWeight:800,letterSpacing:"-0.04em",lineHeight:1.05,
            marginBottom:6,color:"#0f172a",
            animation:"fadeUp 0.5s ease 0.25s both",
          }}>
            César Espiridión<br/>Martínez
          </h1>

          <p style={{
            fontSize:"clamp(15px,1.8vw,19px)",
            fontWeight:500,color:"#3b82f6",
            marginBottom:10,letterSpacing:"-0.01em",
            animation:"fadeUp 0.5s ease 0.3s both",
          }}>
            Desarrollador Full Stack
          </p>

          <div style={{
            display:"inline-flex",alignItems:"center",gap:7,
            marginBottom:24,
            animation:"fadeUp 0.5s ease 0.33s both",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            <span style={{fontSize:13,color:"#64748b",fontWeight:400}}>
              Ing. en Sistemas Computacionales · TES Jocotitlán
            </span>
          </div>

          <div style={{maxWidth:460,marginBottom:36,animation:"fadeUp 0.5s ease 0.4s both"}}>
            <p style={{fontSize:15,lineHeight:1.9,color:"#475569",fontWeight:400}}>
              Persona{" "}
              <strong style={{color:"#1e3a8a",fontWeight:700}}>curiosa en constante aprendizaje</strong>
              , con facilidad para investigar, experimentar y compartir conocimiento.
            </p>
            <p style={{fontSize:15,lineHeight:1.9,color:"#475569",fontWeight:400,marginTop:10}}>
              Mi propósito: aplicar tecnología para{" "}
              <strong style={{color:"#1e3a8a",fontWeight:700}}>mejorar el sector salud en México</strong>.
              Creo que el código bien escrito tiene el poder de cambiar vidas.
            </p>
          </div>

          <div className="stats-row" style={{display:"flex",gap:28,marginBottom:36,animation:"fadeUp 0.5s ease 0.48s both"}}>
            {[
              ["+1 año",  "experiencia profesional"],
              ["3 años", "proyectos propios"]
            ].map(([n,l]) => (
              <div key={l}>
                <p style={{fontSize:21,fontWeight:800,letterSpacing:"-0.03em",color:"#1e3a8a"}}>{n}</p>
                <p style={{fontSize:11,color:"#94a3b8",marginTop:2,fontWeight:500}}>{l}</p>
              </div>
            ))}
          </div>

          <div className="cta-row" style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center",animation:"fadeUp 0.5s ease 0.55s both"}}>
            <button className="cta-primary">Explorar experiencia →</button>
            <ContactOrbit />
          </div>
        </div>

        {/* RIGHT */}
        <div className="orbit-area">
          <div className="orbit-float">
            <div className="orbit-scene">
              <CenterMonogram/>
              <OrbitRing
                items={RING1}
                radius={72}
                duration={20}
                reverse={false}
                itemSize={42}
                iconSize={20}
                layerZIndex={50}
              />
              <OrbitRing
                items={RING2}
                radius={120}
                duration={30}
                reverse={true}
                itemSize={36}
                iconSize={17}
                layerZIndex={40}
              />
              <OrbitRing
                items={RING3}
                radius={164}
                duration={38}
                reverse={false}
                itemSize={34}
                iconSize={16}
                layerZIndex={30}
              />
              <OrbitRing
                items={RING4}
                radius={208}
                duration={50}
                reverse={true}
                itemSize={30}
                iconSize={15}
                layerZIndex={20}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div style={{opacity:loaded?1:0,transition:"opacity 0.6s ease 0.6s"}}>
        <Marquee/>
      </div>
    </div>
  );
}
