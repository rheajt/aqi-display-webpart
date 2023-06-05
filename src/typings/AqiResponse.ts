export interface AqiResponse {
    status: "ok";
    data: {
        aqi: 117;
        idx: 1437;
        attributions: [
            {
                url: "https://sthj.sh.gov.cn/";
                name: "Shanghai Environment Monitoring Center(上海市环境监测中心)";
            },
            {
                url: "http://106.37.208.233:20035/emcpublish/";
                name: "China National Urban air quality real-time publishing platform (全国城市空气质量实时发布平台)";
            },
            {
                url: "https://china.usembassy-china.org.cn/embassy-consulates/shanghai/air-quality-monitor-stateair/";
                name: "U.S. Consulate Shanghai Air Quality Monitor";
            },
            {
                url: "https://waqi.info/";
                name: "World Air Quality Index Project";
            }
        ];
        city: {
            geo: [31.2047372, 121.4489017];
            name: "Shanghai (上海)";
            url: "https://aqicn.org/city/shanghai";
            location: "";
        };
        dominentpol: "pm25";
        iaqi: {
            co: {
                v: 7.3;
            };
            h: {
                v: 83;
            };
            no2: {
                v: 23.4;
            };
            o3: {
                v: 25.2;
            };
            p: {
                v: 1007;
            };
            pm10: {
                v: 29;
            };
            pm25: {
                v: 117;
            };
            so2: {
                v: 3.6;
            };
            t: {
                v: 24;
            };
            w: {
                v: 5.6;
            };
        };
        time: {
            s: "2023-06-05 15:00:00";
            tz: "+08:00";
            v: 1685977200;
            iso: "2023-06-05T15:00:00+08:00";
        };
        forecast: {
            daily: {
                o3: [
                    {
                        avg: 7;
                        day: "2023-06-03";
                        max: 17;
                        min: 5;
                    },
                    {
                        avg: 2;
                        day: "2023-06-04";
                        max: 9;
                        min: 1;
                    },
                    {
                        avg: 1;
                        day: "2023-06-05";
                        max: 2;
                        min: 1;
                    },
                    {
                        avg: 3;
                        day: "2023-06-06";
                        max: 10;
                        min: 1;
                    },
                    {
                        avg: 1;
                        day: "2023-06-07";
                        max: 13;
                        min: 1;
                    },
                    {
                        avg: 1;
                        day: "2023-06-08";
                        max: 12;
                        min: 1;
                    },
                    {
                        avg: 6;
                        day: "2023-06-09";
                        max: 40;
                        min: 1;
                    },
                    {
                        avg: 2;
                        day: "2023-06-10";
                        max: 3;
                        min: 1;
                    }
                ];
                pm10: [
                    {
                        avg: 75;
                        day: "2023-06-04";
                        max: 123;
                        min: 52;
                    },
                    {
                        avg: 80;
                        day: "2023-06-05";
                        max: 123;
                        min: 46;
                    },
                    {
                        avg: 86;
                        day: "2023-06-06";
                        max: 123;
                        min: 46;
                    },
                    {
                        avg: 159;
                        day: "2023-06-07";
                        max: 396;
                        min: 56;
                    },
                    {
                        avg: 84;
                        day: "2023-06-08";
                        max: 123;
                        min: 58;
                    },
                    {
                        avg: 92;
                        day: "2023-06-09";
                        max: 123;
                        min: 71;
                    },
                    {
                        avg: 64;
                        day: "2023-06-10";
                        max: 73;
                        min: 46;
                    },
                    {
                        avg: 102;
                        day: "2023-06-11";
                        max: 126;
                        min: 59;
                    }
                ];
                pm25: [
                    {
                        avg: 177;
                        day: "2023-06-04";
                        max: 252;
                        min: 152;
                    },
                    {
                        avg: 178;
                        day: "2023-06-05";
                        max: 252;
                        min: 141;
                    },
                    {
                        avg: 177;
                        day: "2023-06-06";
                        max: 252;
                        min: 92;
                    },
                    {
                        avg: 205;
                        day: "2023-06-07";
                        max: 252;
                        min: 141;
                    },
                    {
                        avg: 186;
                        day: "2023-06-08";
                        max: 252;
                        min: 159;
                    },
                    {
                        avg: 192;
                        day: "2023-06-09";
                        max: 252;
                        min: 159;
                    },
                    {
                        avg: 152;
                        day: "2023-06-10";
                        max: 169;
                        min: 127;
                    },
                    {
                        avg: 215;
                        day: "2023-06-11";
                        max: 252;
                        min: 159;
                    }
                ];
                uvi: [
                    {
                        avg: 0;
                        day: "2022-10-24";
                        max: 1;
                        min: 0;
                    }
                ];
            };
        };
        debug: {
            sync: "2023-06-05T17:23:15+09:00";
        };
    };
}
