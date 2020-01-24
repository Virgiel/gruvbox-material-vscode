import { Palette } from "../interface";

export function materialWorkbench(palette: Palette) {
  return {
    "foreground": `${palette.fg}`,
    "focusBorder": `${palette.bg5}00`,
    "widget.shadow": `#00000070`,
    "selection.background": `${palette.bg5}f0`,
    "errorForeground": `${palette.red}`,
    "icon.foreground": `${palette.aqua}`,
    "textLink.foreground": `${palette.green}`,
    "textLink.activeForeground": `${palette.darkGreen}`,
    "textCodeBlock.background": `${palette.bg2}`,
    "textBlockQuote.background": `${palette.bg2}`,
    "textBlockQuote.border": `${palette.grey2}`,
    "button.background": `${palette.grey2}`,
    "button.hoverBackground": `${palette.grey1}`,
    "button.foreground": `${palette.bg}`,
    "checkbox.background": `${palette.bg}`,
    "checkbox.foreground": `${palette.orange}`,
    "checkbox.border": `${palette.bg7}`,
    "dropdown.border": `${palette.bg5}`,
    "dropdown.background": `${palette.bg}`,
    "dropdown.foreground": `${palette.fg}`,
    "input.border": `${palette.bg5}`,
    "input.background": `${palette.bg}00`,
    "input.foreground": `${palette.fg}`,
    "input.placeholderForeground": `${palette.grey0}`,
    "inputOption.activeBorder": `${palette.aqua}`,
    "inputValidation.errorBorder": `${palette.red}`,
    "inputValidation.errorBackground": `${palette.darkRed}`,
    "inputValidation.errorForeground": `${palette.fg}`,
    "inputValidation.infoBorder": `${palette.blue}`,
    "inputValidation.infoBackground": `${palette.darkBlue}`,
    "inputValidation.infoForeground": `${palette.fg}`,
    "inputValidation.warningBorder": `${palette.yellow}`,
    "inputValidation.warningBackground": `${palette.darkYellow}`,
    "inputValidation.warningForeground": `${palette.fg}`,
    "scrollbar.shadow": `#00000050`,
    "scrollbarSlider.activeBackground": `${palette.grey2}`,
    "scrollbarSlider.hoverBackground": `${palette.bg9}`,
    "scrollbarSlider.background": `${palette.bg9}80`,
    "badge.background": `${palette.grey2}`,
    "badge.foreground": `${palette.bg}`,
    "progressBar.background": `${palette.green}`,
    "list.activeSelectionForeground": `${palette.fg0}`,
    "list.activeSelectionBackground": `${palette.bg2}80`,
    "list.dropBackground": `${palette.bg2}80`,
    "list.focusForeground": `${palette.fg0}`,
    "list.focusBackground": `${palette.bg2}80`,
    "list.inactiveFocusBackground": `${palette.bg2}80`,
    "list.highlightForeground": `${palette.green}`,
    "list.hoverForeground": `${palette.fg0}`,
    "list.hoverBackground": `${palette.bg}00`,
    "list.inactiveSelectionForeground": `${palette.grey2}`,
    "list.inactiveSelectionBackground": `${palette.bg2}80`,
    "list.invalidItemForeground": `${palette.darkRed}`,
    "list.errorForeground": `${palette.red}`,
    "list.warningForeground": `${palette.yellow}`,
    "tree.indentGuidesStroke": `${palette.grey0}`,
    "activityBar.border": `${palette.bg}`,
    "activityBar.background": `${palette.bg}`,
    "activityBar.foreground": `${palette.fg}`,
    "activityBar.inactiveForeground": `${palette.grey0}`,
    "activityBar.dropBackground": `${palette.bg}`,
    "activityBar.activeBorder": `${palette.grey2}`,
    "activityBar.activeFocusBorder": `${palette.grey2}`,
    "activityBarBadge.background": `${palette.grey2}`,
    "activityBarBadge.foreground": `${palette.bg}`,
    "sideBar.foreground": `${palette.grey1}`,
    "sideBar.background": `${palette.bg}`,
    "sideBar.border": `${palette.bg}`,
    "sideBarSectionHeader.background": `${palette.bg}00`,
    "sideBarTitle.foreground": `${palette.grey2}`,
    "sideBarSectionHeader.foreground": `${palette.grey2}`,
    "minimap.findMatchHighlight": `${palette.darkAqua}40`,
    "minimap.selectionHighlight": `${palette.bg6}f0`,
    "minimap.errorHighlight": `${palette.darkRed}80`,
    "minimap.warningHighlight": `${palette.darkYellow}80`,
    "minimapGutter.addedBackground": `${palette.darkGreen}a0`,
    "minimapGutter.modifiedBackground": `${palette.darkBlue}a0`,
    "minimapGutter.deletedBackground": `${palette.darkRed}a0`,
    "editorGroup.border": `${palette.bg0}`,
    "editorGroupHeader.tabsBackground": `${palette.bg}`,
    "editorGroupHeader.noTabsBackground": `${palette.bg}`,
    "editorGroupHeader.tabsBorder": `${palette.bg}`,
    "editorGroup.dropBackground": `${palette.bg5}60`,
    "tab.border": `${palette.bg}`,
    "tab.activeBorder": `${palette.grey1}`,
    "tab.inactiveBackground": `${palette.bg}`,
    "tab.hoverBackground": `${palette.bg}`,
    "tab.activeBackground": `${palette.bg}`,
    "tab.activeForeground": `${palette.fg}`,
    "tab.inactiveForeground": `${palette.grey1}`,
    "tab.unfocusedActiveForeground": `${palette.fg}`,
    "tab.unfocusedActiveBorder": `${palette.bg}00`,
    "tab.unfocusedInactiveForeground": `${palette.grey1}`,
    "editor.background": `${palette.bg}`,
    "editor.foreground": `${palette.fg}`,
    "editorLineNumber.foreground": `${palette.bg9}`,
    "editorLineNumber.activeForeground": `${palette.grey1}`,
    "editorCursor.foreground": `${palette.fg}`,
    "editor.selectionBackground": `${palette.bg5}`,
    "editor.selectionHighlightBackground": `${palette.bg7}78`,
    "editor.wordHighlightBackground": `${palette.bg4}d0`,
    "editor.wordHighlightStrongBackground": `${palette.darkAqua}30`,
    "editor.findMatchBackground": `${palette.darkRed}40`,
    "editor.findMatchHighlightBackground": `${palette.darkAqua}40`,
    "editor.findRangeHighlightBackground": `${palette.darkPurple}40`,
    "editor.lineHighlightBorder": `${palette.bg5}00`,
    "editor.rangeHighlightBackground": `${palette.darkBlue}30`,
    "editor.symbolHighlightBackground": `${palette.darkRed}40`,
    "editor.hoverHighlightBackground": `${palette.darkAqua}50`,
    "editorLink.activeForeground": `${palette.green}`,
    "editor.lineHighlightBackground": `${palette.bg4}60`,
    "editorWhitespace.foreground": `${palette.bg8}`,
    "editorIndentGuide.background": `${palette.grey2}20`,
    "editorIndentGuide.activeBackground": `${palette.grey2}50`,
    "editorRuler.foreground": `${palette.darkPurple}`,
    "editorCodeLens.foreground": `${palette.grey1}`,
    "editorBracketMatch.border": `${palette.bg}00`,
    "editorBracketMatch.background": `${palette.grey0}80`,
    "editorOverviewRuler.border": `${palette.bg}00`,
    "editorOverviewRuler.findMatchForeground": `${palette.darkAqua}`,
    "editorOverviewRuler.rangeHighlightForeground": `${palette.darkAqua}`,
    "editorOverviewRuler.selectionHighlightForeground": `${palette.darkAqua}`,
    "editorOverviewRuler.wordHighlightForeground": `${palette.bg9}`,
    "editorOverviewRuler.wordHighlightStrongForeground": `${palette.bg9}`,
    "editorOverviewRuler.modifiedForeground": `${palette.darkBlue}a0`,
    "editorOverviewRuler.addedForeground": `${palette.darkGreen}a0`,
    "editorOverviewRuler.deletedForeground": `${palette.darkRed}a0`,
    "editorOverviewRuler.errorForeground": `${palette.red}`,
    "editorOverviewRuler.warningForeground": `${palette.yellow}`,
    "editorOverviewRuler.infoForeground": `${palette.purple}`,
    "editorOverviewRuler.currentContentForeground": `${palette.darkBlue}`,
    "editorOverviewRuler.incomingContentForeground": `${palette.darkAqua}`,
    "editorOverviewRuler.commonContentForeground": `${palette.grey1}`,
    "problemsErrorIcon.foreground": `${palette.red}`,
    "problemsWarningIcon.foreground": `${palette.yellow}`,
    "problemsInfoIcon.foreground": `${palette.blue}`,
    "editorUnnecessaryCode.border": `${palette.grey1}`,
    "editorUnnecessaryCode.opacity": `#ffffffff`,
    "editorError.foreground": `${palette.darkRed}`,
    "editorWarning.foreground": `${palette.darkYellow}`,
    "editorInfo.foreground": `${palette.darkBlue}`,
    "editorHint.foreground": `${palette.darkPurple}`,
    "editorGutter.background": `${palette.bg}00`,
    "editorGutter.modifiedBackground": `${palette.darkBlue}a0`,
    "editorGutter.addedBackground": `${palette.darkGreen}a0`,
    "editorGutter.deletedBackground": `${palette.darkRed}a0`,
    "diffEditor.insertedTextBackground": `${palette.diffGreen}a0`,
    "diffEditor.removedTextBackground": `${palette.diffRed}a0`,
    "editorSuggestWidget.background": `${palette.bg3}`,
    "editorSuggestWidget.foreground": `${palette.fg}`,
    "editorSuggestWidget.highlightForeground": `${palette.green}`,
    "editorSuggestWidget.selectedBackground": `${palette.bg5}`,
    "editorSuggestWidget.border": `${palette.bg3}`,
    "editorWidget.background": `${palette.bg}`,
    "editorWidget.border": `${palette.bg9}`,
    "editorHoverWidget.background": `${palette.bg2}`,
    "editorHoverWidget.border": `${palette.bg6}`,
    "editorMarkerNavigation.background": `${palette.bg2}`,
    "editorMarkerNavigationError.background": `${palette.red}`,
    "editorMarkerNavigationWarning.background": `${palette.yellow}`,
    "editorMarkerNavigationInfo.background": `${palette.aqua}`,
    "peekView.border": `${palette.bg4}`,
    "peekViewEditor.background": `${palette.bg2}`,
    "peekViewEditor.matchHighlightBackground": `${palette.darkYellow}50`,
    "peekViewEditorGutter.background": `${palette.bg2}`,
    "peekViewResult.fileForeground": `${palette.fg}`,
    "peekViewResult.matchHighlightBackground": `${palette.darkYellow}50`,
    "peekViewResult.selectionBackground": `${palette.darkAqua}80`,
    "peekViewTitleDescription.foreground": `${palette.fg1}`,
    "peekViewTitleLabel.foreground": `${palette.fg}`,
    "peekViewResult.background": `${palette.bg2}`,
    "peekViewTitle.background": `${palette.bg4}`,
    "pickerGroup.border": `${palette.fg0}1a`,
    "terminal.foreground": `${palette.fg}`,
    "terminalCursor.foreground": `${palette.fg}`,
    "terminal.ansiBlack": `${palette.bg7}`,
    "terminal.ansiBlue": `${palette.blue}`,
    "terminal.ansiBrightBlack": `${palette.bg7}`,
    "terminal.ansiBrightBlue": `${palette.blue}`,
    "terminal.ansiBrightCyan": `${palette.aqua}`,
    "terminal.ansiBrightGreen": `${palette.green}`,
    "terminal.ansiBrightMagenta": `${palette.purple}`,
    "terminal.ansiBrightRed": `${palette.red}`,
    "terminal.ansiBrightWhite": `${palette.fg}`,
    "terminal.ansiBrightYellow": `${palette.yellow}`,
    "terminal.ansiCyan": `${palette.aqua}`,
    "terminal.ansiGreen": `${palette.green}`,
    "terminal.ansiMagenta": `${palette.purple}`,
    "terminal.ansiRed": `${palette.red}`,
    "terminal.ansiWhite": `${palette.fg}`,
    "terminal.ansiYellow": `${palette.yellow}`,
    "debugToolBar.background": `${palette.bg}`,
    "merge.incomingHeaderBackground": `${palette.darkAqua}80`,
    "merge.incomingContentBackground": `${palette.diffGreen}a0`,
    "merge.currentHeaderBackground": `${palette.darkBlue}80`,
    "merge.currentContentBackground": `${palette.diffBlue}a0`,
    "merge.border": `${palette.bg}00`,
    "panel.background": `${palette.bg}`,
    "panel.border": `${palette.bg}`,
    "panelTitle.activeForeground": `${palette.fg}`,
    "panelTitle.activeBorder": `${palette.grey1}`,
    "panelTitle.inactiveForeground": `${palette.grey1}`,
    "imagePreview.border": `${palette.bg}`,
    "statusBar.background": `${palette.bg}`,
    "statusBar.foreground": `${palette.fg}`,
    "statusBar.border": `${palette.bg}`,
    "statusBar.debuggingForeground": `${palette.bg}`,
    "statusBar.debuggingBackground": `${palette.red}`,
    "statusBar.debuggingBorder": `${palette.red}`,
    "statusBar.noFolderBackground": `${palette.bg}`,
    "statusBar.noFolderForeground": `${palette.fg}`,
    "statusBar.noFolderBorder": `${palette.bg}`,
    "statusBarItem.hoverBackground": `${palette.bg4}`,
    "statusBarItem.activeBackground": `${palette.bg4}a0`,
    "statusBar.prominentForeground": `${palette.bg}`,
    "statusBar.prominentBackground": `${palette.grey2}`,
    "statusBar.prominentHoverBackground": `${palette.grey1}`,
    "statusBarItem.remoteBackground": `${palette.grey2}`,
    "statusBarItem.remoteForeground": `${palette.bg}`,
    "titleBar.activeBackground": `${palette.bg}`,
    "titleBar.activeForeground": `${palette.fg}`,
    "titleBar.inactiveBackground": `${palette.bg}`,
    "titleBar.inactiveForeground": `${palette.grey2}`,
    "titleBar.border": `${palette.bg}`,
    "menubar.selectionBackground": `${palette.bg}`,
    "menubar.selectionBorder": `${palette.bg}`,
    "menu.foreground": `${palette.fg}`,
    "menu.background": `${palette.bg1}`,
    "menu.selectionForeground": `${palette.fg0}`,
    "menu.selectionBackground": `${palette.bg}`,
    "gitDecoration.addedResourceForeground": `${palette.green}a0`,
    "gitDecoration.modifiedResourceForeground": `${palette.blue}a0`,
    "gitDecoration.deletedResourceForeground": `${palette.red}a0`,
    "gitDecoration.untrackedResourceForeground": `${palette.yellow}a0`,
    "gitDecoration.ignoredResourceForeground": `${palette.bg9}`,
    "gitDecoration.conflictingResourceForeground": `${palette.purple}a0`,
    "gitDecoration.submoduleResourceForeground": `${palette.orange}a0`,
    "notificationCenterHeader.foreground": `${palette.fg0}`,
    "notificationCenterHeader.background": `${palette.bg6}`,
    "notifications.foreground": `${palette.fg}`,
    "notifications.background": `${palette.bg}`,
    "notificationLink.foreground": `${palette.green}`,
    "notificationsErrorIcon.foreground": `${palette.red}`,
    "notificationsWarningIcon.foreground": `${palette.yellow}`,
    "notificationsInfoIcon.foreground": `${palette.blue}`,
    "extensionButton.prominentForeground": `${palette.bg}`,
    "extensionButton.prominentBackground": `${palette.grey2}`,
    "extensionButton.prominentHoverBackground": `${palette.grey1}`,
    "extensionBadge.remoteBackground": `${palette.grey2}`,
    "extensionBadge.remoteForeground": `${palette.bg}`,
    "settings.headerForeground": `${palette.fg0}`,
    "settings.numberInputBackground": `${palette.bg}`,
    "settings.numberInputForeground": `${palette.purple}`,
    "settings.numberInputBorder": `${palette.bg7}`,
    "settings.textInputBackground": `${palette.bg}`,
    "settings.textInputForeground": `${palette.blue}`,
    "settings.textInputBorder": `${palette.bg7}`,
    "settings.checkboxBackground": `${palette.bg}`,
    "settings.checkboxForeground": `${palette.orange}`,
    "settings.checkboxBorder": `${palette.bg7}`,
    "settings.dropdownBackground": `${palette.bg}`,
    "settings.dropdownForeground": `${palette.aqua}`,
    "settings.dropdownBorder": `${palette.bg7}`,
    "editorLightBulb.foreground": `${palette.yellow}`,
    "editorLightBulbAutoFix.foreground": `${palette.aqua}`,
    "welcomePage.buttonBackground": `${palette.bg2}`,
    "welcomePage.buttonHoverBackground": `${palette.bg2}a0`,
    "breadcrumb.foreground": `${palette.grey1}`,
    "breadcrumb.focusForeground": `${palette.fg0}`,
    "breadcrumb.activeSelectionForeground": `${palette.fg}`,
    "symbolIcon.colorForeground": `${palette.fg}`,
    "symbolIcon.snippetForeground": `${palette.fg}`,
    "symbolIcon.fieldForeground": `${palette.fg}`,
    "symbolIcon.fileForeground": `${palette.fg}`,
    "symbolIcon.folderForeground": `${palette.fg}`,
    "symbolIcon.textForeground": `${palette.fg}`,
    "symbolIcon.unitForeground": `${palette.fg}`,
    "symbolIcon.keywordForeground": `${palette.red}`,
    "symbolIcon.operatorForeground": `${palette.orange}`,
    "symbolIcon.classForeground": `${palette.yellow}`,
    "symbolIcon.eventForeground": `${palette.yellow}`,
    "symbolIcon.interfaceForeground": `${palette.yellow}`,
    "symbolIcon.structForeground": `${palette.yellow}`,
    "symbolIcon.functionForeground": `${palette.green}`,
    "symbolIcon.keyForeground": `${palette.green}`,
    "symbolIcon.methodForeground": `${palette.green}`,
    "symbolIcon.stringForeground": `${palette.green}`,
    "symbolIcon.constantForeground": `${palette.aqua}`,
    "symbolIcon.enumeratorMemberForeground": `${palette.aqua}`,
    "symbolIcon.nullForeground": `${palette.aqua}`,
    "symbolIcon.propertyForeground": `${palette.aqua}`,
    "symbolIcon.typeParameterForeground": `${palette.aqua}`,
    "symbolIcon.arrayForeground": `${palette.blue}`,
    "symbolIcon.referenceForeground": `${palette.blue}`,
    "symbolIcon.variableForeground": `${palette.blue}`,
    "symbolIcon.booleanForeground": `${palette.purple}`,
    "symbolIcon.constructorForeground": `${palette.purple}`,
    "symbolIcon.enumeratorForeground": `${palette.purple}`,
    "symbolIcon.moduleForeground": `${palette.purple}`,
    "symbolIcon.namespaceForeground": `${palette.purple}`,
    "symbolIcon.numberForeground": `${palette.purple}`,
    "symbolIcon.objectForeground": `${palette.purple}`,
    "symbolIcon.packageForeground": `${palette.purple}`,
    "editor.snippetTabstopHighlightBackground": `${palette.bg5}`,
    "editor.snippetFinalTabstopHighlightBackground": `${palette.darkGreen}40`,
    "editor.snippetFinalTabstopHighlightBorder": `${palette.bg}`
  };
}