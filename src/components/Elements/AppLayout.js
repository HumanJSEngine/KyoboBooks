import ThemeToggle from './ThemeToggle';
import { useTheme } from 'styled-components';
const AppLayout = ({ children }) => {
    const [ThemeMode, toggleTheme] = useTheme();
    return (
        <>
            <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                DarkMode
            </ThemeToggle>
        </>
    );
};
export default AppLayout;
