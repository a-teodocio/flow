import { useTheme } from '../../theme/ThemeProvider';
import { themes } from '../../theme/config/Themes';
import './ThemeSelector.css';

const ThemeSelector = () => {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`
              theme-card
              relative aspect-square rounded-xl cursor-pointer
              flex flex-col items-center justify-center
              ${currentTheme.id === theme.id ? 'selected ring-4' : ''}
            `}
            onClick={() => setTheme(theme.id)}
            style={{
              background: theme.colors.background
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div 
                className="theme-preview-text" 
                style={{ color: theme.colors.primary }}
              >
                Aa
              </div>
              <div 
                className="theme-preview-accent" 
                style={{ backgroundColor: theme.colors.secondary }}
              />
            </div>
            {currentTheme.id === theme.id && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-green-600 font-bold">
                ✓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;