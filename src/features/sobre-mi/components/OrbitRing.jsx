import { memo, useCallback, useMemo, useState } from "react";
import SIIcon from "./SIIcon";
import { SI } from "../data/icons";

const OrbitVisualItem = memo(function OrbitVisualItem({ item, style, itemSize, iconSize, isHovered }) {
  return (
    <div style={style}>
      <div
        style={{
          width: itemSize,
          height: itemSize,
          borderRadius: "50%",
          background: isHovered ? "white" : "rgba(255,255,255,0.94)",
          boxShadow: isHovered
            ? `0 6px 20px ${SI[item.id]?.color}55, 0 2px 8px rgba(0,0,0,0.1)`
            : "0 2px 10px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.22s ease",
          transform: isHovered ? "scale(1.28)" : "scale(1)",
          border: `2px solid ${isHovered ? SI[item.id]?.color + "70" : "rgba(0,0,0,0.05)"}`,
        }}
      >
        <SIIcon id={item.id} size={iconSize} />
      </div>
    </div>
  );
});

const OrbitHitItem = memo(function OrbitHitItem({
  item,
  style,
  itemSize,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      data-id={item.id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        ...style,
        borderRadius: "50%",
        cursor: "default",
        pointerEvents: "auto",
      }}
    >
      {isHovered && (
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
  );
});

function OrbitRing({
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

  const orbitItemStyles = useMemo(() => {
    return items.map((_, index) => {
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
    });
  }, [items, radius, itemSize, orbitAnim, duration]);

  const handleMouseEnter = useCallback((event) => {
    setHovered(event.currentTarget.dataset.id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(null);
  }, []);

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
          <OrbitVisualItem
            key={item.id}
            item={item}
            style={orbitItemStyles[i]}
            itemSize={itemSize}
            iconSize={iconSize}
            isHovered={hovered === item.id}
          />
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
          <OrbitHitItem
            key={item.id + "_h"}
            item={item}
            style={orbitItemStyles[i]}
            itemSize={itemSize}
            isHovered={hovered === item.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </>
  );
}

export default memo(OrbitRing);
