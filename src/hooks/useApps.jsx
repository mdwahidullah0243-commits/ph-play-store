import { useEffect, useState } from "react";

function useApps() {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const appsData = async () => {
            const res = await fetch('/appsData.json');
            const data = await res.json();

            setApps(data);
            setLoading(false);
        }

        appsData();
    }, []);

    return { apps, setApps, loading };
}

export default useApps;