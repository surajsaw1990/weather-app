const conditionMap = {
  Clear: {
    light: {
      wrapper: 'from-sky-200 via-cyan-100 to-amber-100',
      overlay:
        'bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.75),_transparent_35%),linear-gradient(120deg,rgba(56,189,248,0.18),rgba(251,191,36,0.15))]'
    },
    dark: {
      wrapper: 'from-slate-950 via-sky-950 to-slate-900',
      overlay:
        'bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.2),_transparent_35%),linear-gradient(120deg,rgba(15,23,42,0.9),rgba(8,47,73,0.95))]'
    }
  },
  Rain: {
    light: {
      wrapper: 'from-slate-300 via-sky-200 to-slate-200',
      overlay:
        'bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.65),_transparent_35%),linear-gradient(135deg,rgba(71,85,105,0.16),rgba(14,165,233,0.12))]'
    },
    dark: {
      wrapper: 'from-slate-950 via-slate-900 to-sky-950',
      overlay:
        'bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.14),_transparent_32%),linear-gradient(135deg,rgba(2,6,23,0.92),rgba(30,41,59,0.95))]'
    }
  },
  Clouds: {
    light: {
      wrapper: 'from-slate-200 via-blue-100 to-slate-100',
      overlay:
        'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_30%),linear-gradient(135deg,rgba(148,163,184,0.16),rgba(125,211,252,0.08))]'
    },
    dark: {
      wrapper: 'from-slate-950 via-slate-900 to-slate-800',
      overlay:
        'bg-[radial-gradient(circle_at_top,_rgba(226,232,240,0.08),_transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.94),rgba(51,65,85,0.92))]'
    }
  },
  default: {
    light: {
      wrapper: 'from-cyan-100 via-sky-100 to-indigo-100',
      overlay:
        'bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.72),_transparent_35%),linear-gradient(120deg,rgba(14,165,233,0.14),rgba(99,102,241,0.08))]'
    },
    dark: {
      wrapper: 'from-slate-950 via-slate-900 to-sky-950',
      overlay:
        'bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_32%),linear-gradient(120deg,rgba(2,6,23,0.95),rgba(15,23,42,0.94))]'
    }
  }
};

export const getBackgroundTheme = (condition, isDarkMode) => {
  const themeGroup = conditionMap[condition] || conditionMap.default;
  return isDarkMode ? themeGroup.dark : themeGroup.light;
};
