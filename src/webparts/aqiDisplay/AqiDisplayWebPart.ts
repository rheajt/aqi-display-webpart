import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
    IPropertyPaneConfiguration,
    PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "AqiDisplayWebPartStrings";
import AqiDisplay from "./components/AqiDisplay";
import { AqiResponse } from "../../typings/AqiResponse";

export interface AqiDisplayWebPartProps {
    token: string;
    station: string;
}

export interface AqiDisplayProps {
    token: string;
    station: string;
    getAQI: () => Promise<AqiResponse>;
}

export default class AirQualityWebPart extends BaseClientSideWebPart<AqiDisplayWebPartProps> {
    public render(): void {
        const element: React.ReactElement<AqiDisplayProps> = React.createElement(
            AqiDisplay,
            {
                ...this.properties,
                getAQI: this.getAQI.bind(this),
            }
        );

        ReactDom.render(element, this.domElement);
    }

    protected onDispose(): void {
        ReactDom.unmountComponentAtNode(this.domElement);
    }

    protected async getAQI(): Promise<AqiResponse> {
        const endpoint = "https://api.waqi.info";
        const resp = await fetch(
            endpoint +
            `/feed/${this.properties.station}/?token=${this.properties.token}`
        );
        return (await resp.json()) as AqiResponse;
    }

    protected get dataVersion(): Version {
        return Version.parse("1.0");
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("token", {
                                    label: "API Token",
                                }),
                                PropertyPaneTextField("station", {
                                    label: "Station ID",
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    }
}
