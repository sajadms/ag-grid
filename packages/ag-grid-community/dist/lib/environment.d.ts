// Type definitions for ag-grid-community v21.2.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare type SASS_PROPERTIES = 'headerHeight' | 'virtualItemHeight' | 'rowHeight';
export declare class Environment {
    private eGridDiv;
    private themeElement;
    private theme;
    getSassVariable(theme: string, key: SASS_PROPERTIES): number;
    isThemeDark(): boolean;
    useNativeCheckboxes(): boolean;
    getTheme(): {
        theme?: string;
        el?: HTMLElement;
    };
    private getThemeOnce;
}
