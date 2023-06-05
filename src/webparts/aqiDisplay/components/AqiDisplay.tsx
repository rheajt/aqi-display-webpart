import * as React from "react";
import { AqiDisplayProps } from "../AqiDisplayWebPart";
import Loading from "./Loading";
import styles from "./AqiDisplay.module.scss";
import { AqiResponse } from "../../../typings/AqiResponse";

const spectrum = [
    { a: 0, b: "#cccccc", f: "#ffffff" },
    { a: 1, b: "#009966", f: "#ffffff" },
    { a: 50, b: "#009966", f: "#ffffff" },
    { a: 100, b: "#ffde33", f: "#000000" },
    { a: 150, b: "#ff9933", f: "#000000" },
    { a: 200, b: "#cc0033", f: "#ffffff" },
    { a: 300, b: "#660099", f: "#ffffff" },
    { a: 500, b: "#7e0023", f: "#ffffff" },
];

const AirQuality: React.FC<AqiDisplayProps> = (props) => {
    const [results, setResults] = React.useState<AqiResponse | null>(null);

    async function load(): Promise<void> {
        const resp = await props.getAQI();
        setResults(resp);
    }

    React.useEffect(() => {
        load().catch(console.error);
    }, []);

    if (!results) {
        return <Loading />;
    }

    const status = spectrum.find((e: (typeof spectrum)[0]) => {
        if (e.a < +results.data.aqi) {
            return false;
        }

        return true;
    });

    console.log(status);
    return (
        <div
            className={styles.airQuality}
            style={{ borderRadius: 4, backgroundColor: status.b, color: status.f }}
        >
            <p className="title">{results.data.city.name}</p>
            <h1>AQI {results.data.aqi}</h1>
            <p>{results.data.time.s}</p>
        </div>
    );
};
export default AirQuality;
