// Type definitions for ag-grid-community v21.2.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare type SASS_PROPERTIES = 'headerHeight' | 'virtualItemHeight' | 'rowHeight' | 'chartMenuPanelWidth';
export declare class Environment {
    private eGridDiv;
    getSassVariable(theme: string, key: SASS_PROPERTIES): number;
    isThemeDark(): boolean;
    useNativeCheckboxes(): boolean;
    chartMenuPanelWidth(): number;
    getTheme(): {
        theme?: undefined;
        el?: undefined;
        themeFamily?: undefined;
    } | {
        theme: string;
        el: HTMLElement;
        themeFamily: string;
    };
}
