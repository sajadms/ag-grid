import {
  _,
  Autowired,
  ColumnController,
  Component,
  Events,
  EventService,
  GridOptionsWrapper,
  PostConstruct,
  PreConstruct,
  RefSelector,
  ToolPanelColumnCompParams,
  Constants
} from "ag-grid-community";

export enum EXPAND_STATE {
  EXPANDED,
  COLLAPSED,
  INDETERMINATE
}
export enum SELECTED_STATE {
  CHECKED,
  UNCHECKED,
  INDETERMINATE
}

export class PrimaryColsHeaderPanel extends Component {
  @Autowired("gridOptionsWrapper")
  private gridOptionsWrapper: GridOptionsWrapper;
  @Autowired("columnController") private columnController: ColumnController;
  @Autowired("eventService") private eventService: EventService;

  @RefSelector("eExpand") private eExpand: HTMLElement;
  @RefSelector("eSelect") private eSelect: HTMLElement;
  @RefSelector("eFilterWrapper") private eFilterWrapper: HTMLElement;
  @RefSelector("eFilterTextField") private eFilterTextField: HTMLInputElement;

  private eSelectChecked: HTMLElement;
  private eSelectUnchecked: HTMLElement;
  private eSelectIndeterminate: HTMLElement;

  private eExpandChecked: HTMLElement;
  private eExpandUnchecked: HTMLElement;
  private eExpandIndeterminate: HTMLElement;

  private eSelectCheckbox: HTMLInputElement;

  private expandState: EXPAND_STATE;
  private selectState: SELECTED_STATE;

  private onFilterTextChangedDebounced: () => void;

  private params: ToolPanelColumnCompParams;

  @PreConstruct
  private preConstruct(): void {
    const translate = this.gridOptionsWrapper.getLocaleTextFunc();

    this.setTemplate(
      `<div class="ag-primary-cols-header-panel" role="presentation">
            <div ref="eExpand"></div>
            <div ref="eSelect"></div>
            <div class="ag-input-wrapper ag-primary-cols-filter-wrapper" ref="eFilterWrapper" role="presentation">
                <input class="ag-primary-cols-filter" ref="eFilterTextField" type="text" placeholder="${translate(
                  "SearchOoo",
                  "Search..."
                )}">        
            </div>
        </div>`
    );
  }

  @PostConstruct
  public postConstruct(): void {
    this.createExpandIcons();
    if (this.gridOptionsWrapper.useNativeCheckboxes()) {
      this.eSelectCheckbox = document.createElement("input");
      this.eSelectCheckbox.type = "checkbox";
      this.eSelectCheckbox.className = "ag-checkbox";
      this.eSelect.appendChild(this.eSelectCheckbox);
    } else {
      this.createCheckIcons();
    }

    this.addDestroyableEventListener(
      this.eExpand,
      "click",
      this.onExpandClicked.bind(this)
    );
    this.addDestroyableEventListener(
      this.eSelect,
      "click",
      this.onSelectClicked.bind(this)
    );
    this.addDestroyableEventListener(
      this.eFilterTextField,
      "input",
      this.onFilterTextChanged.bind(this)
    );
    this.addDestroyableEventListener(
      this.eFilterTextField,
      "keypress",
      this.onMiniFilterKeyPress.bind(this)
    );

    this.addDestroyableEventListener(
      this.eventService,
      Events.EVENT_NEW_COLUMNS_LOADED,
      this.showOrHideOptions.bind(this)
    );
  }

  public init(params: ToolPanelColumnCompParams): void {
    this.params = params;

    if (this.columnController.isReady()) {
      this.showOrHideOptions();
    }
  }

  private createExpandIcons() {
    this.eExpand.appendChild(
      (this.eExpandChecked = _.createIconNoSpan(
        "columnSelectOpen",
        this.gridOptionsWrapper
      ))
    );
    this.eExpand.appendChild(
      (this.eExpandUnchecked = _.createIconNoSpan(
        "columnSelectClosed",
        this.gridOptionsWrapper
      ))
    );
    this.eExpand.appendChild(
      (this.eExpandIndeterminate = _.createIconNoSpan(
        "columnSelectIndeterminate",
        this.gridOptionsWrapper
      ))
    );
  }

  private createCheckIcons() {
    this.eSelect.appendChild(
      (this.eSelectChecked = _.createIconNoSpan(
        "checkboxChecked",
        this.gridOptionsWrapper
      ))
    );
    this.eSelect.appendChild(
      (this.eSelectUnchecked = _.createIconNoSpan(
        "checkboxUnchecked",
        this.gridOptionsWrapper
      ))
    );
    this.eSelect.appendChild(
      (this.eSelectIndeterminate = _.createIconNoSpan(
        "checkboxIndeterminate",
        this.gridOptionsWrapper
      ))
    );
  }

  // we only show expand / collapse if we are showing columns
  private showOrHideOptions(): void {
    const showFilter = !this.params.suppressColumnFilter;
    const showSelect = !this.params.suppressColumnSelectAll;
    const showExpand = !this.params.suppressColumnExpandAll;

    const groupsPresent = this.columnController.isPrimaryColumnGroupsPresent();

    _.setDisplayed(this.eFilterWrapper, showFilter);
    _.setDisplayed(this.eSelect, showSelect);
    _.setDisplayed(this.eExpand, showExpand && groupsPresent);
  }

  private onFilterTextChanged(): void {
    if (!this.onFilterTextChangedDebounced) {
      this.onFilterTextChangedDebounced = _.debounce(() => {
        const filterText = this.eFilterTextField.value;
        this.dispatchEvent({ type: "filterChanged", filterText: filterText });
      }, 300);
    }

    this.onFilterTextChangedDebounced();
  }

  private onMiniFilterKeyPress(e: KeyboardEvent): void {
    if (_.isKeyPressed(e, Constants.KEY_ENTER)) {
      this.dispatchEvent({ type: "selectAll" });
    }
  }

  private onSelectClicked(): void {
    const eventType =
      this.selectState === SELECTED_STATE.CHECKED ? "unselectAll" : "selectAll";
    this.dispatchEvent({ type: eventType });
  }

  private onExpandClicked(): void {
    const eventType =
      this.expandState === EXPAND_STATE.EXPANDED ? "collapseAll" : "expandAll";
    this.dispatchEvent({ type: eventType });
  }

  public setExpandState(state: EXPAND_STATE): void {
    this.expandState = state;

    _.setDisplayed(
      this.eExpandChecked,
      this.expandState === EXPAND_STATE.EXPANDED
    );
    _.setDisplayed(
      this.eExpandUnchecked,
      this.expandState === EXPAND_STATE.COLLAPSED
    );
    _.setDisplayed(
      this.eExpandIndeterminate,
      this.expandState === EXPAND_STATE.INDETERMINATE
    );
  }

  public setSelectionState(state: SELECTED_STATE): void {
    this.selectState = state;

    if (this.gridOptionsWrapper.useNativeCheckboxes()) {
      this.eSelectCheckbox.checked =
        this.selectState === SELECTED_STATE.CHECKED;
      this.eSelectCheckbox.indeterminate =
        this.selectState === SELECTED_STATE.INDETERMINATE;
    } else {
      _.setDisplayed(
        this.eSelectChecked,
        this.selectState === SELECTED_STATE.CHECKED
      );
      _.setDisplayed(
        this.eSelectUnchecked,
        this.selectState === SELECTED_STATE.UNCHECKED
      );
      _.setDisplayed(
        this.eSelectIndeterminate,
        this.selectState === SELECTED_STATE.INDETERMINATE
      );
    }
  }
}
