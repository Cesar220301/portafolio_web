import { useState } from "react";
import SIIcon from "./SIIcon";
import { SI } from "../data/icons";

export default function OrbitRing({
  items,
  radius,
  duration,
  reverse,
  itemSize = 48,
  iconSize = 22,
  layerZIndex = 30,
}) {
  const [hovered, setHovered] = useState(null);
  const orbitAnim = reverse ? "orbitKeepUprightR" : "orbitKeepUprightF";

  const getOrbitItemStyle = (index) => {
    const startAngle = (360 / items.length) * index;

    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: itemSize,
      height: itemSize,
      "--start-angle": `${startAngle}deg`,
      "--orbit-radius": `${radius}px`,
      animation: `${orbitAnim} ${duration}s linear infinite`,
      transform: `translate(-50%, -50%) rotate(${startAngle}deg) translateX(${radius}px) rotate(${-startAngle}deg)`,
    };
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: radius * 2,
          height: radius * 2,
          marginLeft: -radius,
          marginTop: -radius,
          borderRadius: "50%",
          border: "1.5px dashed rgba(30,58,138,0.1)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: layerZIndex - 1,
        }}
      >
        {items.map((item, i) => (
          <div key={item.id} style={getOrbitItemStyle(i)}>
            <div
              style={{
                width: itemSize,
                height: itemSize,
                borderRadius: "50%",
                background: hovered === item.id ? "white" : "rgba(255,255,255,0.94)",
                boxShadow:
                  hovered === item.id
                    ? `0 6px 20px ${SI[item.id]?.color}55, 0 2px 8px rgba(0,0,0,0.1)`
                    : "0 2px 10px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.22s ease",
                transform: hovered === item.id ? "scale(1.28)" : "scale(1)",
                border: `2px solid ${hovered === item.id ? SI[item.id]?.color + "70" : "rgba(0,0,0,0.05)"}`,
              }}
            >
              <SIIcon id={item.id} size={iconSize} />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: layerZIndex,
          pointerEvents: "none",
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.id + "_h"}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...getOrbitItemStyle(i),
              borderRadius: "50%",
              cursor: "default",
              pointerEvents: "auto",
            }}
          >
            {hovered === item.id && (
              <div
                style={{
                  position: "absolute",
                  top: itemSize + 4,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "white",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
                  borderRadius: 8,
                  padding: "4px 11px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#1e3a8a",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  border: "1px solid rgba(30,58,138,0.1)",
                }}
              >
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
