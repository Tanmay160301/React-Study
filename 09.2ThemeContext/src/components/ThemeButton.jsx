
import { useTheme } from "../context/Theme";


export default function ThemeButton() {
    //Since jr aplyala ek switch implement karycha ahe so 2ch goshti lagnar lightTheme and darkTheme
    const { lightTheme, darkTheme} =useTheme();
    
    
    const handleCheck = (e) => {
        const darkModeStatus = e.currentTarget.checked;//Either True or false

        if (darkModeStatus) {// Jr checked asel tr dark theme or else white theme
            darkTheme();
        } else {
            lightTheme();
        }
    }


    return (
        <div>
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                id="toggle"
                type="checkbox"
                onChange={handleCheck}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
        </div>
    );
}

