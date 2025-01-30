import { useTheme } from "../hooks/ThemeProvider";

interface StatProps {
  label: string;
  value: number;
}

const Stat = ({ label, value }: StatProps) => {
  const { isDarkMode } = useTheme(); // Use Theme Context

  return (
    <div className="text-center sm:text-left">
      <p className="text-[13px]">{label}</p>
      <p
        className={`text-h2 font-bold ${
          isDarkMode ? "text-text-h2-dark" : "text-text-h2-light"
        }`}
      >
        {value.toLocaleString()}
      </p>
    </div>
  );
};

export default Stat;
