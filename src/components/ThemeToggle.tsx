import { useState } from "react";
import { useTheme } from "../theme/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isPulling, setIsPulling] = useState(false);
  const isLight = theme === "light";
  const nextTheme = isLight ? "dark" : "light";

  const handlePull = () => {
    setIsPulling(true);
    setTheme(nextTheme);
    window.setTimeout(() => setIsPulling(false), 620);
  };

  return (
    <button
      type="button"
      className={`theme-toggle ${isLight ? "is-light" : "is-dark"} ${
        isPulling ? "is-pulling" : ""
      }`}
      onClick={handlePull}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${nextTheme} mode`}
    >
      {/* Old-fashioned Edison bulb SVG */}
      <svg
        className="theme-toggle__bulb-svg"
        viewBox="0 0 64 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Glow behind glass (light mode only) */}
        <defs>
          <radialGradient id="bulb-glow" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#fff7e0" stopOpacity={isLight ? 0.9 : 0} />
            <stop offset="60%" stopColor="#ffd666" stopOpacity={isLight ? 0.4 : 0} />
            <stop offset="100%" stopColor="#ffc14a" stopOpacity={isLight ? 0.0 : 0} />
          </radialGradient>
          <radialGradient id="glass-sheen" cx="38%" cy="32%" r="45%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer glow */}
        {isLight && (
          <ellipse cx="32" cy="38" rx="28" ry="32" fill="#ffc14a" opacity="0.18" />
        )}

        {/* Glass envelope — classic pear / A-shape */}
        <path
          d="
            M 32 6
            C 18 6, 8 20, 8 36
            C 8 48, 14 56, 20 62
            L 20 66
            L 44 66
            L 44 62
            C 50 56, 56 48, 56 36
            C 56 20, 46 6, 32 6
            Z
          "
          fill={isLight ? "url(#bulb-glow)" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          className="theme-toggle__glass"
        />

        {/* Glass sheen highlight */}
        <path
          d="
            M 32 6
            C 18 6, 8 20, 8 36
            C 8 48, 14 56, 20 62
            L 20 66
            L 44 66
            L 44 62
            C 50 56, 56 48, 56 36
            C 56 20, 46 6, 32 6
            Z
          "
          fill="url(#glass-sheen)"
          stroke="none"
        />

        {/* Filament support wires */}
        <line x1="27" y1="66" x2="27" y2="40" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
        <line x1="37" y1="66" x2="37" y2="40" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />

        {/* Tungsten filament — zig-zag between supports */}
        <polyline
          points="27,42 29,38 31,44 33,36 35,43 37,40"
          fill="none"
          stroke={isLight ? "#e8a020" : "currentColor"}
          strokeWidth={isLight ? "1.6" : "1"}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="theme-toggle__filament"
          opacity={isLight ? 1 : 0.4}
        />

        {/* Filament glow (light mode) */}
        {isLight && (
          <polyline
            points="27,42 29,38 31,44 33,36 35,43 37,40"
            fill="none"
            stroke="#ffd666"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        )}

        {/* Screw base (Edison E27 style) */}
        <rect x="20" y="66" width="24" height="4" rx="0.5" fill="currentColor" opacity="0.7" stroke="currentColor" strokeWidth="0.5" />

        {/* Thread grooves on screw base */}
        <rect x="19" y="71" width="26" height="3.2" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
        <rect x="20" y="75" width="24" height="3.2" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
        <rect x="21" y="79" width="22" height="3.2" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />

        {/* Bottom contact tip */}
        <rect x="27" y="83" width="10" height="2.5" rx="1" fill="currentColor" opacity="0.6" />
        <circle cx="32" cy="88" r="2.5" fill="currentColor" opacity="0.55" />
      </svg>

      {/* Rope / pull cord */}
      <span className="theme-toggle__cord" aria-hidden="true">
        <span className="theme-toggle__rope-texture" />
        <span className="theme-toggle__handle" />
      </span>
    </button>
  );
};

export default ThemeToggle;
