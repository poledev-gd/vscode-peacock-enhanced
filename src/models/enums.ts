import { LiveShareSettings } from '../live-share';

export enum StandardSettings {
  Color = 'color',
  DarkenLightenPercentage = 'darkenLightenPercentage',
  DarkForegroundColor = 'darkForegroundColor',
  ElementAdjustments = 'elementAdjustments',
  FavoriteColors = 'favoriteColors',
  KeepBadgeColor = 'keepBadgeColor',
  KeepForegroundColor = 'keepForegroundColor',
  LightForegroundColor = 'lightForegroundColor',
  RemoteColor = 'remoteColor',
  ShowColorInStatusBar = 'showColorInStatusBar',
  SquigglyBeGone = 'squigglyBeGone',
  SurpriseMeFromFavoritesOnly = 'surpriseMeFromFavoritesOnly',
  SurpriseMeOnStartup = 'surpriseMeOnStartup',
}

export enum AffectedSettings {
  EditorGroupBorder = 'affectEditorGroupBorder',
  PanelBorder = 'affectPanelBorder',
  SideBarBorder = 'affectSideBarBorder',
  SashHover = 'affectSashHover',
  ActivityBar = 'affectActivityBar',
  DebuggingStatusBar = 'affectDebuggingStatusBar',
  StatusBar = 'affectStatusBar',
  StatusAndTitleBorders = 'affectStatusAndTitleBorders',
  TabActiveBorder = 'affectTabActiveBorder',
  TitleBar = 'affectTitleBar',
  Button = 'affectButton',
}

export type AllSettings = StandardSettings | AffectedSettings | LiveShareSettings;

export enum Commands {
  addRecommendedFavorites = 'peacock.addRecommendedFavorites',
  changeColorToRandom = 'peacock.changeColorToRandom',
  changeColorToPeacockGreen = 'peacock.changeColorToPeacockGreen',
  changeColorToFavorite = 'peacock.changeColorToFavorite',
  darken = 'peacock.darken',
  enterColor = 'peacock.enterColor',
  lighten = 'peacock.lighten',
  removeAllColors = 'peacock.removeAllColors',
  resetWorkspaceColors = 'peacock.resetWorkspaceColors',
  saveColorToFavorites = 'peacock.saveColorToFavorites',
  showAndCopyCurrentColor = 'peacock.showAndCopyCurrentColor',
  showDocumentation = 'peacock.docs',
}

export enum ElementNames {
  activityBar = 'activityBar',
  statusBar = 'statusBar',
  titleBar = 'titleBar',
  button = 'button'
}

export enum ColorSettings {
  activityBar_activeBackground = `${ElementNames.activityBar}.activeBackground`,
  activityBar_background = 'activityBar.background',
  activityBar_foreground = 'activityBar.foreground',
  activityBar_inactiveForeground = 'activityBar.inactiveForeground',
  activityBar_badgeBackground = 'activityBarBadge.background',
  activityBar_badgeForeground = 'activityBarBadge.foreground',
  commandCenter_border = 'commandCenter.border',
  editorGroupBorder = 'editorGroup.border',
  panelBorder = 'panel.border',
  sideBarBorder = 'sideBar.border',
  sashHover = 'sash.hoverBorder',
  squigglyBeGone_error = 'editorError.foreground',
  squigglyBeGone_warning = 'editorWarning.foreground',
  squigglyBeGone_info = 'editorInfo.foreground',
  statusBar_border = 'statusBar.border',
  statusBar_background = 'statusBar.background',
  statusBar_foreground = 'statusBar.foreground',
  statusBar_debuggingBorder = 'statusBar.debuggingBorder',
  statusBar_debuggingBackground = 'statusBar.debuggingBackground',
  statusBar_debuggingForeground = 'statusBar.debuggingForeground',
  statusBarItem_hoverBackground = 'statusBarItem.hoverBackground',
  statusBarItem_remoteBackground = 'statusBarItem.remoteBackground',
  statusBarItem_remoteForeground = 'statusBarItem.remoteForeground',
  tabActiveBorder = 'tab.activeBorder',
  titleBar_activeBackground = 'titleBar.activeBackground',
  titleBar_activeForeground = 'titleBar.activeForeground',
  titleBar_border = 'titleBar.border',
  titleBar_inactiveBackground = 'titleBar.inactiveBackground',
  titleBar_inactiveForeground = 'titleBar.inactiveForeground',
  
  button_background = `${ElementNames.button}.background`,
  button_border = `${ElementNames.button}.border`,
  button_foreground = `${ElementNames.button}.foreground`,
  button_hoverBackground = `${ElementNames.button}.hoverBackground`,
  button_hoverForeground = `${ElementNames.button}.hoverForeground`,
  button_secondaryBackground = `${ElementNames.button}.secondaryBackground`,
  button_secondaryForeground = `${ElementNames.button}.secondaryForeground`,
  button_secondaryHoverBackground = `${ElementNames.button}.secondaryHoverBackground`,
  button_secondaryHoverForeground = `${ElementNames.button}.secondaryHoverForeground`,
}

export type ColorAdjustment = 'lighten' | 'darken' | 'none';

export enum ColorAdjustmentOptions {
  lighten = 'lighten',
  darken = 'darken',
  none = 'none',
}

export enum Sections {
  peacockColorCustomizationSection = 'workbench.colorCustomizations',
  peacockSection = 'peacock',
}

export enum ForegroundColors {
  DarkForeground = '#15202b',
  LightForeground = '#e7e7e7',
}

// See WebAIM contrast guidelines: https://webaim.org/articles/contrast/
export enum ReadabilityRatios {
  UserInterfaceLow = 2,
  UserInterface = 3,
  Text = 4.5,
}

export enum ColorSource {
  WorkspaceValue = 'workspaceValue',
  GlobalValue = 'globalValue',
  DefaultValue = 'defaultValue',
  None = 'none',
}
