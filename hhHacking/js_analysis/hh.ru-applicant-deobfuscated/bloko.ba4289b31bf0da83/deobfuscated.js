try {
  (function () {
    var e =
      typeof window != "undefined"
        ? window
        : typeof global != "undefined"
          ? global
          : typeof globalThis != "undefined"
            ? globalThis
            : typeof self != "undefined"
              ? self
              : {};
    var t = new e.Error().stack;
    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "f2e6052b-8f8a-4f6b-8e46-716bd15e4ccf";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-f2e6052b-8f8a-4f6b-8e46-716bd15e4ccf";
    }
  })();
} catch (e) {}
(function () {
  try {
    var e =
      typeof window != "undefined"
        ? window
        : typeof global != "undefined"
          ? global
          : typeof globalThis != "undefined"
            ? globalThis
            : typeof self != "undefined"
              ? self
              : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {};
    e._sentryModuleMetadata[new e.Error().stack] = (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        if (o != null) {
          for (var n in o) {
            if (o.hasOwnProperty(n)) {
              e[n] = o[n];
            }
          }
        }
      }
      return e;
    })({}, e._sentryModuleMetadata[new e.Error().stack], {
      "_sentryBundlerPluginAppKey:sentry-js-hh-filter-key": true,
    });
  } catch (e) {}
})();
(function () {
  try {
    (typeof window != "undefined"
      ? window
      : typeof global != "undefined"
        ? global
        : typeof globalThis != "undefined"
          ? globalThis
          : typeof self != "undefined"
            ? self
            : {}
    ).SENTRY_RELEASE = {
      id: "a8891b807f20bd18b60ec88985b3712ef8d8e4c6",
    };
  } catch (e) {}
})();
(globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__xhh_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["3745"],
  {
    416431: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-button": "bloko-button",
        "bloko-button_pressed": "bloko-button_pressed",
        "bloko-icon": "bloko-icon",
        "focus-visible": "focus-visible",
        "bloko-button_appearance-outlined": "bloko-button_appearance-outlined",
        "bloko-button_appearance-flat": "bloko-button_appearance-flat",
        "bloko-button_invalid": "bloko-button_invalid",
        "bloko-button_kind-primary": "bloko-button_kind-primary",
        "bloko-button_kind-secondary": "bloko-button_kind-secondary",
        "bloko-button_kind-warning": "bloko-button_kind-warning",
        "bloko-button_kind-success": "bloko-button_kind-success",
        "bloko-button_kind-inversed": "bloko-button_kind-inversed",
        "bloko-button__badge": "bloko-button__badge",
        "bloko-button_scale-small": "bloko-button_scale-small",
        "bloko-button_scale-large": "bloko-button_scale-large",
        "bloko-button_icon-only": "bloko-button_icon-only",
        "bloko-button__icon": "bloko-button__icon",
        "bloko-button_icon-only-small": "bloko-button_icon-only-small",
        "bloko-button_icon-only-large": "bloko-button_icon-only-large",
        "bloko-button_stretched": "bloko-button_stretched",
        "bloko-button_collapsible": "bloko-button_collapsible",
        "bloko-button__icon_left": "bloko-button__icon_left",
        "bloko-button__icon_right": "bloko-button__icon_right",
        "bloko-button__loading": "bloko-button__loading",
        "bloko-button_loading": "bloko-button_loading",
        "bloko-button__content": "bloko-button__content",
        "bloko-button-group": "bloko-button-group",
        "bloko-button-check-helper": "bloko-button-check-helper",
        "bloko-icon-dynamic_full-width": "bloko-icon-dynamic_full-width",
        "bloko-button-group_stretched": "bloko-button-group_stretched",
        "bloko-button-select": "bloko-button-select",
        "bloko-button-select_invalid": "bloko-button-select_invalid",
        "bloko-button-select_flexible": "bloko-button-select_flexible",
        "bloko-button-select_small": "bloko-button-select_small",
        "bloko-button-select_large": "bloko-button-select_large",
        "bloko-button-select_light": "bloko-button-select_light",
      };
    },
    747820: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-calendar-reset-tap-highlighting":
          "bloko-calendar-reset-tap-highlighting",
        "bloko-calendar": "bloko-calendar",
        "bloko-calendar__switcher-wrapper": "bloko-calendar__switcher-wrapper",
        "bloko-calendar__switcher": "bloko-calendar__switcher",
        "bloko-calendar__switcher-arrow": "bloko-calendar__switcher-arrow",
        "bloko-calendar__switcher-arrow_back":
          "bloko-calendar__switcher-arrow_back",
        "bloko-calendar__switcher-arrow_next":
          "bloko-calendar__switcher-arrow_next",
        "bloko-calendar__switcher-arrow_disabled":
          "bloko-calendar__switcher-arrow_disabled",
        "bloko-calendar__name": "bloko-calendar__name",
        "bloko-calendar__name_months": "bloko-calendar__name_months",
        "bloko-calendar__name_years": "bloko-calendar__name_years",
        "bloko-calendar__name_disabled": "bloko-calendar__name_disabled",
        "bloko-calendar__base": "bloko-calendar__base",
        "bloko-calendar__weekdays": "bloko-calendar__weekdays",
        "bloko-calendar__weekday": "bloko-calendar__weekday",
        "bloko-calendar__days": "bloko-calendar__days",
        "bloko-calendar__day": "bloko-calendar__day",
        "bloko-calendar__day_weekend": "bloko-calendar__day_weekend",
        "bloko-calendar__day_today": "bloko-calendar__day_today",
        "bloko-calendar__day_disabled": "bloko-calendar__day_disabled",
        "bloko-calendar__day_selected": "bloko-calendar__day_selected",
        "bloko-calendar__day_begin": "bloko-calendar__day_begin",
        "bloko-calendar__day_end": "bloko-calendar__day_end",
        "bloko-calendar__day_interval": "bloko-calendar__day_interval",
        "bloko-calendar__months": "bloko-calendar__months",
        "bloko-calendar__month": "bloko-calendar__month",
        "bloko-calendar__month-number": "bloko-calendar__month-number",
        "bloko-calendar__month-number_selected":
          "bloko-calendar__month-number_selected",
        "bloko-calendar__month-name": "bloko-calendar__month-name",
        "bloko-calendar__month_selected": "bloko-calendar__month_selected",
        "bloko-calendar__years": "bloko-calendar__years",
        "bloko-calendar__years-range": "bloko-calendar__years-range",
        "bloko-calendar__years-list": "bloko-calendar__years-list",
        "bloko-calendar__years-list-item": "bloko-calendar__years-list-item",
        "bloko-calendar__years-list-item_selected":
          "bloko-calendar__years-list-item_selected",
      };
    },
    231039: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-chips-chip": "bloko-chips-chip",
        "bloko-chips-chip__input": "bloko-chips-chip__input",
        "bloko-chips-chip__content": "bloko-chips-chip__content",
        "focus-visible": "focus-visible",
        "bloko-chips-chip-link": "bloko-chips-chip-link",
        "bloko-chips-multiline-container": "bloko-chips-multiline-container",
      };
    },
    563483: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-columns-wrapper": "bloko-columns-wrapper",
        "bloko-columns-row": "bloko-columns-row",
        "bloko-column": "bloko-column",
        "bloko-column_container": "bloko-column_container",
        "bloko-column_m-0": "bloko-column_m-0",
        "bloko-column_m-1": "bloko-column_m-1",
        "bloko-column_m-2": "bloko-column_m-2",
        "bloko-column_m-3": "bloko-column_m-3",
        "bloko-column_m-4": "bloko-column_m-4",
        "bloko-column_m-5": "bloko-column_m-5",
        "bloko-column_m-6": "bloko-column_m-6",
        "bloko-column_m-7": "bloko-column_m-7",
        "bloko-column_m-8": "bloko-column_m-8",
        "bloko-column_m-9": "bloko-column_m-9",
        "bloko-column_m-10": "bloko-column_m-10",
        "bloko-column_m-11": "bloko-column_m-11",
        "bloko-column_m-12": "bloko-column_m-12",
        "s-friendly": "s-friendly",
        "bloko-column_s-0": "bloko-column_s-0",
        "bloko-column_s-1": "bloko-column_s-1",
        "bloko-column_s-2": "bloko-column_s-2",
        "bloko-column_s-3": "bloko-column_s-3",
        "bloko-column_s-4": "bloko-column_s-4",
        "bloko-column_s-5": "bloko-column_s-5",
        "bloko-column_s-6": "bloko-column_s-6",
        "bloko-column_s-7": "bloko-column_s-7",
        "bloko-column_s-8": "bloko-column_s-8",
        "bloko-column_l-0": "bloko-column_l-0",
        "bloko-column_l-1": "bloko-column_l-1",
        "bloko-column_l-2": "bloko-column_l-2",
        "bloko-column_l-3": "bloko-column_l-3",
        "bloko-column_l-4": "bloko-column_l-4",
        "bloko-column_l-5": "bloko-column_l-5",
        "bloko-column_l-6": "bloko-column_l-6",
        "bloko-column_l-7": "bloko-column_l-7",
        "bloko-column_l-8": "bloko-column_l-8",
        "bloko-column_l-9": "bloko-column_l-9",
        "bloko-column_l-10": "bloko-column_l-10",
        "bloko-column_l-11": "bloko-column_l-11",
        "bloko-column_l-12": "bloko-column_l-12",
        "bloko-column_l-13": "bloko-column_l-13",
        "bloko-column_l-14": "bloko-column_l-14",
        "bloko-column_l-15": "bloko-column_l-15",
        "bloko-column_l-16": "bloko-column_l-16",
        "xs-friendly": "xs-friendly",
        "bloko-column_xs-0": "bloko-column_xs-0",
        "bloko-column_xs-1": "bloko-column_xs-1",
        "bloko-column_xs-2": "bloko-column_xs-2",
        "bloko-column_xs-3": "bloko-column_xs-3",
        "bloko-column_xs-4": "bloko-column_xs-4",
        "bloko-print": "bloko-print",
      };
    },
    843679: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-control-group": "bloko-control-group",
        "bloko-control-group_auto-size": "bloko-control-group_auto-size",
        "bloko-control-group_vertical": "bloko-control-group_vertical",
        "bloko-control-group__main": "bloko-control-group__main",
        "bloko-control-group__minor": "bloko-control-group__minor",
        "bloko-control-group__content-sized":
          "bloko-control-group__content-sized",
        "bloko-button": "bloko-button",
        "bloko-input-text": "bloko-input-text",
        "bloko-select": "bloko-select",
        "bloko-custom-select__select": "bloko-custom-select__select",
        "bloko-control-group__vertical-item":
          "bloko-control-group__vertical-item",
        "bloko-input-text-wrapper": "bloko-input-text-wrapper",
        "bloko-button_invalid": "bloko-button_invalid",
        "bloko-select_invalid": "bloko-select_invalid",
        "bloko-input-text_invalid": "bloko-input-text_invalid",
        "bloko-custom-select_invalid": "bloko-custom-select_invalid",
        "bloko-custom-select": "bloko-custom-select",
        "bloko-custom-select__select_focus":
          "bloko-custom-select__select_focus",
        "bloko-icon-dynamic": "bloko-icon-dynamic",
        "bloko-icon-link": "bloko-icon-link",
        "bloko-icon": "bloko-icon",
        "bloko-control-group__main_col-1-2":
          "bloko-control-group__main_col-1-2",
        "bloko-control-group__main_col-1-3":
          "bloko-control-group__main_col-1-3",
      };
    },
    867065: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-select-dropdown-option": "bloko-select-dropdown-option",
        "bloko-select-dropdown-option_disabled":
          "bloko-select-dropdown-option_disabled",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-select-dropdown-option_selected":
          "bloko-select-dropdown-option_selected",
        "bloko-select-dropdown-option_focusable-by-hover":
          "bloko-select-dropdown-option_focusable-by-hover",
        "bloko-select-dropdown-option_focused":
          "bloko-select-dropdown-option_focused",
        "bloko-select-dropdown-option__text":
          "bloko-select-dropdown-option__text",
        "bloko-select": "bloko-select",
        "bloko-select_invalid": "bloko-select_invalid",
        "focus-visible": "focus-visible",
        "bloko-select_flexible": "bloko-select_flexible",
        "bloko-select_scale-small": "bloko-select_scale-small",
        "bloko-select_scale-large": "bloko-select_scale-large",
        "bloko-select_light": "bloko-select_light",
        "bloko-select-wrapper": "bloko-select-wrapper",
        "bloko-select-wrapper_flexible": "bloko-select-wrapper_flexible",
        "bloko-select-placeholder": "bloko-select-placeholder",
        "bloko-select-placeholder-text": "bloko-select-placeholder-text",
        "bloko-custom-select": "bloko-custom-select",
        "bloko-custom-select_light": "bloko-custom-select_light",
        "bloko-custom-select__select": "bloko-custom-select__select",
        "bloko-custom-select__select_focus":
          "bloko-custom-select__select_focus",
        "bloko-custom-select__placeholder": "bloko-custom-select__placeholder",
        "bloko-custom-select_disabled": "bloko-custom-select_disabled",
        "bloko-custom-select_invalid": "bloko-custom-select_invalid",
        "bloko-custom-select_flexible": "bloko-custom-select_flexible",
        "bloko-custom-select__select_invalid":
          "bloko-custom-select__select_invalid",
        "bloko-custom-select__select_flexible":
          "bloko-custom-select__select_flexible",
        "bloko-custom-select__placeholder_empty":
          "bloko-custom-select__placeholder_empty",
        "bloko-custom-select__search": "bloko-custom-select__search",
        "bloko-custom-select__search_with-title":
          "bloko-custom-select__search_with-title",
        "bloko-custom-select__after-options":
          "bloko-custom-select__after-options",
        "bloko-custom-select__content": "bloko-custom-select__content",
        "bloko-custom-select__content_layer-above-content-almost":
          "bloko-custom-select__content_layer-above-content-almost",
        "bloko-custom-select__content_layer-above-content":
          "bloko-custom-select__content_layer-above-content",
        "bloko-custom-select__content_layer-cover-substrate":
          "bloko-custom-select__content_layer-cover-substrate",
        "bloko-custom-select__content_layer-content-cover":
          "bloko-custom-select__content_layer-content-cover",
        "bloko-custom-select__content_layer-floating":
          "bloko-custom-select__content_layer-floating",
        "bloko-custom-select__content_layer-overlay":
          "bloko-custom-select__content_layer-overlay",
        "bloko-custom-select__content_layer-overlay-content":
          "bloko-custom-select__content_layer-overlay-content",
        "bloko-custom-select__content_layer-above-overlay-content":
          "bloko-custom-select__content_layer-above-overlay-content",
        "bloko-custom-select__content_layer-topmost":
          "bloko-custom-select__content_layer-topmost",
        "bloko-custom-select__option-list": "bloko-custom-select__option-list",
      };
    },
    324085: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-drop": "bloko-drop",
        "bloko-drop_layer-above-content-almost":
          "bloko-drop_layer-above-content-almost",
        "bloko-drop_layer-above-content": "bloko-drop_layer-above-content",
        "bloko-drop_layer-cover-substrate": "bloko-drop_layer-cover-substrate",
        "bloko-drop_layer-content-cover": "bloko-drop_layer-content-cover",
        "bloko-drop_layer-floating": "bloko-drop_layer-floating",
        "bloko-drop_layer-overlay": "bloko-drop_layer-overlay",
        "bloko-drop_layer-overlay-content": "bloko-drop_layer-overlay-content",
        "bloko-drop_layer-above-overlay-content":
          "bloko-drop_layer-above-overlay-content",
        "bloko-drop_layer-topmost": "bloko-drop_layer-topmost",
        "bloko-drop_flexible": "bloko-drop_flexible",
        "bloko-drop_clickable": "bloko-drop_clickable",
        "xs-friendly": "xs-friendly",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-drop_stretch-on-xs": "bloko-drop_stretch-on-xs",
        "bloko-drop__overlay": "bloko-drop__overlay",
        "bloko-drop__arrow": "bloko-drop__arrow",
        "bloko-drop_top": "bloko-drop_top",
        "bloko-drop_left": "bloko-drop_left",
        "bloko-drop_right": "bloko-drop_right",
        "bloko-drop_bottom": "bloko-drop_bottom",
        "bloko-drop_theme-dark": "bloko-drop_theme-dark",
        "bloko-drop_theme-attention": "bloko-drop_theme-attention",
        "bloko-drop_theme-light": "bloko-drop_theme-light",
        "bloko-drop_theme-bright": "bloko-drop_theme-bright",
        "bloko-drop_theme-info": "bloko-drop_theme-info",
        "bloko-drop_theme-neural": "bloko-drop_theme-neural",
        "bloko-drop_active-enter": "bloko-drop_active-enter",
        "bloko-drop_done-enter": "bloko-drop_done-enter",
        "bloko-drop__content-wrapper": "bloko-drop__content-wrapper",
        "bloko-drop__content": "bloko-drop__content",
        "bloko-drop__close": "bloko-drop__close",
        "bloko-drop__title": "bloko-drop__title",
        "bloko-drop__title-text": "bloko-drop__title-text",
        "bloko-drop_down": "bloko-drop_down",
        "bloko-drop__padding-wrapper_down": "bloko-drop__padding-wrapper_down",
        "bloko-drop-down-no-paddings": "bloko-drop-down-no-paddings",
      };
    },
    546529: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-drop": "bloko-drop",
        "bloko-drop_layer-above-content-almost":
          "bloko-drop_layer-above-content-almost",
        "bloko-drop_layer-above-content": "bloko-drop_layer-above-content",
        "bloko-drop_layer-cover-substrate": "bloko-drop_layer-cover-substrate",
        "bloko-drop_layer-content-cover": "bloko-drop_layer-content-cover",
        "bloko-drop_layer-floating": "bloko-drop_layer-floating",
        "bloko-drop_layer-overlay": "bloko-drop_layer-overlay",
        "bloko-drop_layer-overlay-content": "bloko-drop_layer-overlay-content",
        "bloko-drop_layer-above-overlay-content":
          "bloko-drop_layer-above-overlay-content",
        "bloko-drop_layer-topmost": "bloko-drop_layer-topmost",
        "bloko-drop_flexible": "bloko-drop_flexible",
        "bloko-drop_clickable": "bloko-drop_clickable",
        "xs-friendly": "xs-friendly",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-drop_stretch-on-xs": "bloko-drop_stretch-on-xs",
        "bloko-drop__overlay": "bloko-drop__overlay",
        "bloko-drop__arrow": "bloko-drop__arrow",
        "bloko-drop_top": "bloko-drop_top",
        "bloko-drop_left": "bloko-drop_left",
        "bloko-drop_right": "bloko-drop_right",
        "bloko-drop_bottom": "bloko-drop_bottom",
        "bloko-drop_theme-dark": "bloko-drop_theme-dark",
        "bloko-drop_theme-attention": "bloko-drop_theme-attention",
        "bloko-drop_theme-light": "bloko-drop_theme-light",
        "bloko-drop_theme-bright": "bloko-drop_theme-bright",
        "bloko-drop_theme-info": "bloko-drop_theme-info",
        "bloko-drop_theme-neural": "bloko-drop_theme-neural",
        "bloko-drop_active-enter": "bloko-drop_active-enter",
        "bloko-drop_done-enter": "bloko-drop_done-enter",
        "bloko-drop__content-wrapper": "bloko-drop__content-wrapper",
        "bloko-drop__content": "bloko-drop__content",
        "bloko-drop__close": "bloko-drop__close",
        "bloko-drop__title": "bloko-drop__title",
        "bloko-drop__title-text": "bloko-drop__title-text",
        "bloko-drop_info": "bloko-drop_info",
        "bloko-drop__padding-wrapper_info": "bloko-drop__padding-wrapper_info",
      };
    },
    56696: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-drop-menu-item": "bloko-drop-menu-item",
        "focus-visible": "focus-visible",
        "s-friendly": "s-friendly",
        "xs-friendly": "xs-friendly",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-drop-menu-item_selectable": "bloko-drop-menu-item_selectable",
        "bloko-drop-menu-item_selected": "bloko-drop-menu-item_selected",
      };
    },
    719435: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-drop": "bloko-drop",
        "bloko-drop_layer-above-content-almost":
          "bloko-drop_layer-above-content-almost",
        "bloko-drop_layer-above-content": "bloko-drop_layer-above-content",
        "bloko-drop_layer-cover-substrate": "bloko-drop_layer-cover-substrate",
        "bloko-drop_layer-content-cover": "bloko-drop_layer-content-cover",
        "bloko-drop_layer-floating": "bloko-drop_layer-floating",
        "bloko-drop_layer-overlay": "bloko-drop_layer-overlay",
        "bloko-drop_layer-overlay-content": "bloko-drop_layer-overlay-content",
        "bloko-drop_layer-above-overlay-content":
          "bloko-drop_layer-above-overlay-content",
        "bloko-drop_layer-topmost": "bloko-drop_layer-topmost",
        "bloko-drop_flexible": "bloko-drop_flexible",
        "bloko-drop_clickable": "bloko-drop_clickable",
        "xs-friendly": "xs-friendly",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-drop_stretch-on-xs": "bloko-drop_stretch-on-xs",
        "bloko-drop__overlay": "bloko-drop__overlay",
        "bloko-drop__arrow": "bloko-drop__arrow",
        "bloko-drop_top": "bloko-drop_top",
        "bloko-drop_left": "bloko-drop_left",
        "bloko-drop_right": "bloko-drop_right",
        "bloko-drop_bottom": "bloko-drop_bottom",
        "bloko-drop_theme-dark": "bloko-drop_theme-dark",
        "bloko-drop_theme-attention": "bloko-drop_theme-attention",
        "bloko-drop_theme-light": "bloko-drop_theme-light",
        "bloko-drop_theme-bright": "bloko-drop_theme-bright",
        "bloko-drop_theme-info": "bloko-drop_theme-info",
        "bloko-drop_theme-neural": "bloko-drop_theme-neural",
        "bloko-drop_active-enter": "bloko-drop_active-enter",
        "bloko-drop_done-enter": "bloko-drop_done-enter",
        "bloko-drop__content-wrapper": "bloko-drop__content-wrapper",
        "bloko-drop__content": "bloko-drop__content",
        "bloko-drop__close": "bloko-drop__close",
        "bloko-drop__title": "bloko-drop__title",
        "bloko-drop__title-text": "bloko-drop__title-text",
        "bloko-drop-menu-item": "bloko-drop-menu-item",
        "focus-visible": "focus-visible",
        "s-friendly": "s-friendly",
        "bloko-drop-menu-item_selectable": "bloko-drop-menu-item_selectable",
        "bloko-drop-menu-item_selected": "bloko-drop-menu-item_selected",
        "bloko-drop_menu": "bloko-drop_menu",
        "bloko-drop__padding-wrapper_menu": "bloko-drop__padding-wrapper_menu",
      };
    },
    973911: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-drop": "bloko-drop",
        "bloko-drop_layer-above-content-almost":
          "bloko-drop_layer-above-content-almost",
        "bloko-drop_layer-above-content": "bloko-drop_layer-above-content",
        "bloko-drop_layer-cover-substrate": "bloko-drop_layer-cover-substrate",
        "bloko-drop_layer-content-cover": "bloko-drop_layer-content-cover",
        "bloko-drop_layer-floating": "bloko-drop_layer-floating",
        "bloko-drop_layer-overlay": "bloko-drop_layer-overlay",
        "bloko-drop_layer-overlay-content": "bloko-drop_layer-overlay-content",
        "bloko-drop_layer-above-overlay-content":
          "bloko-drop_layer-above-overlay-content",
        "bloko-drop_layer-topmost": "bloko-drop_layer-topmost",
        "bloko-drop_flexible": "bloko-drop_flexible",
        "bloko-drop_clickable": "bloko-drop_clickable",
        "xs-friendly": "xs-friendly",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-drop_stretch-on-xs": "bloko-drop_stretch-on-xs",
        "bloko-drop__overlay": "bloko-drop__overlay",
        "bloko-drop__arrow": "bloko-drop__arrow",
        "bloko-drop_top": "bloko-drop_top",
        "bloko-drop_left": "bloko-drop_left",
        "bloko-drop_right": "bloko-drop_right",
        "bloko-drop_bottom": "bloko-drop_bottom",
        "bloko-drop_theme-dark": "bloko-drop_theme-dark",
        "bloko-drop_theme-attention": "bloko-drop_theme-attention",
        "bloko-drop_theme-light": "bloko-drop_theme-light",
        "bloko-drop_theme-bright": "bloko-drop_theme-bright",
        "bloko-drop_theme-info": "bloko-drop_theme-info",
        "bloko-drop_theme-neural": "bloko-drop_theme-neural",
        "bloko-drop_active-enter": "bloko-drop_active-enter",
        "bloko-drop_done-enter": "bloko-drop_done-enter",
        "bloko-drop__content-wrapper": "bloko-drop__content-wrapper",
        "bloko-drop__content": "bloko-drop__content",
        "bloko-drop__close": "bloko-drop__close",
        "bloko-drop__title": "bloko-drop__title",
        "bloko-drop__title-text": "bloko-drop__title-text",
        "bloko-drop_tip": "bloko-drop_tip",
      };
    },
    836522: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-drop_flexible":
          "bloko-drop_flexible bloko-drop_flexible bloko-drop_flexible bloko-drop_flexible bloko-drop_flexible",
        "bloko-drop_fullscreen-on-xs":
          "bloko-drop_fullscreen-on-xs bloko-drop_fullscreen-on-xs bloko-drop_fullscreen-on-xs bloko-drop_fullscreen-on-xs bloko-drop_fullscreen-on-xs",
        "bloko-drop__arrow":
          "bloko-drop__arrow bloko-drop__arrow bloko-drop__arrow bloko-drop__arrow bloko-drop__arrow",
        "bloko-drop_left": "bloko-drop_left bloko-drop_left bloko-drop_left",
        "bloko-drop_right":
          "bloko-drop_right bloko-drop_right bloko-drop_right",
        "bloko-drop_bottom":
          "bloko-drop_bottom bloko-drop_bottom bloko-drop_bottom",
        "bloko-drop_top": "bloko-drop_top bloko-drop_top bloko-drop_top",
      };
    },
    518039: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-drop": "bloko-drop",
        "bloko-drop_layer-above-content-almost":
          "bloko-drop_layer-above-content-almost",
        "bloko-drop_layer-above-content": "bloko-drop_layer-above-content",
        "bloko-drop_layer-cover-substrate": "bloko-drop_layer-cover-substrate",
        "bloko-drop_layer-content-cover": "bloko-drop_layer-content-cover",
        "bloko-drop_layer-floating": "bloko-drop_layer-floating",
        "bloko-drop_layer-overlay": "bloko-drop_layer-overlay",
        "bloko-drop_layer-overlay-content": "bloko-drop_layer-overlay-content",
        "bloko-drop_layer-above-overlay-content":
          "bloko-drop_layer-above-overlay-content",
        "bloko-drop_layer-topmost": "bloko-drop_layer-topmost",
        "bloko-drop_flexible": "bloko-drop_flexible",
        "bloko-drop_clickable": "bloko-drop_clickable",
        "xs-friendly": "xs-friendly",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-drop_stretch-on-xs": "bloko-drop_stretch-on-xs",
        "bloko-drop__overlay": "bloko-drop__overlay",
        "bloko-drop__arrow": "bloko-drop__arrow",
        "bloko-drop_top": "bloko-drop_top",
        "bloko-drop_left": "bloko-drop_left",
        "bloko-drop_right": "bloko-drop_right",
        "bloko-drop_bottom": "bloko-drop_bottom",
        "bloko-drop_theme-dark": "bloko-drop_theme-dark",
        "bloko-drop_theme-attention": "bloko-drop_theme-attention",
        "bloko-drop_theme-light": "bloko-drop_theme-light",
        "bloko-drop_theme-bright": "bloko-drop_theme-bright",
        "bloko-drop_theme-info": "bloko-drop_theme-info",
        "bloko-drop_theme-neural": "bloko-drop_theme-neural",
        "bloko-drop_active-enter": "bloko-drop_active-enter",
        "bloko-drop_done-enter": "bloko-drop_done-enter",
        "bloko-drop__content-wrapper": "bloko-drop__content-wrapper",
        "bloko-drop__content": "bloko-drop__content",
        "bloko-drop__close": "bloko-drop__close",
        "bloko-drop__title": "bloko-drop__title",
        "bloko-drop__title-text": "bloko-drop__title-text",
      };
    },
    428272: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-form-separator": "bloko-form-separator",
        "bloko-highlight-indents": "bloko-highlight-indents",
        "bloko-form-item": "bloko-form-item",
        "bloko-form-item-group": "bloko-form-item-group",
        "bloko-form-item-baseline": "bloko-form-item-baseline",
        "bloko-form-item-text": "bloko-form-item-text",
        "bloko-form-hint": "bloko-form-hint",
        "bloko-form-legend": "bloko-form-legend",
        "bloko-form-legend_for-small": "bloko-form-legend_for-small",
        "bloko-form-legend_for-large": "bloko-form-legend_for-large",
        "bloko-form-spacer": "bloko-form-spacer",
        "bloko-form-required": "bloko-form-required",
        "bloko-form-error": "bloko-form-error",
        "bloko-form-error_hidden": "bloko-form-error_hidden",
        "bloko-form-error_entering": "bloko-form-error_entering",
        "bloko-form-error_exiting": "bloko-form-error_exiting",
        "bloko-form-one-column": "bloko-form-one-column",
      };
    },
    660670: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-header-subheader": "bloko-header-subheader",
        "bloko-header-1": "bloko-header-1",
        "bloko-header-section-1": "bloko-header-section-1",
        "xs-friendly": "xs-friendly",
        "bloko-header-1_lite": "bloko-header-1_lite",
        "bloko-header-section-1_lite": "bloko-header-section-1_lite",
        "bloko-header-promo-1": "bloko-header-promo-1",
        "bloko-header-promo-1_lite": "bloko-header-promo-1_lite",
        "bloko-header-2": "bloko-header-2",
        "bloko-header-section-2": "bloko-header-section-2",
        "bloko-header-2_lite": "bloko-header-2_lite",
        "bloko-header-section-2_lite": "bloko-header-section-2_lite",
        "bloko-header-promo-2": "bloko-header-promo-2",
        "bloko-header-promo-2_lite": "bloko-header-promo-2_lite",
        "bloko-header-3": "bloko-header-3",
        "bloko-header-section-3": "bloko-header-section-3",
        "bloko-header-3_lite": "bloko-header-3_lite",
        "bloko-header-section-3_lite": "bloko-header-section-3_lite",
        "bloko-header-promo-3": "bloko-header-promo-3",
        "bloko-header-promo-3_lite": "bloko-header-promo-3_lite",
        "bloko-header-4": "bloko-header-4",
        "bloko-header-section-4": "bloko-header-section-4",
        "bloko-header-4_lite": "bloko-header-4_lite",
        "bloko-header-section-4_lite": "bloko-header-section-4_lite",
        "bloko-header-promo-4": "bloko-header-promo-4",
        "bloko-header-promo-4_lite": "bloko-header-promo-4_lite",
      };
    },
    951390: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-modal-no-scroll": "bloko-modal-no-scroll",
        "bloko-modal-no-scroll_ios": "bloko-modal-no-scroll_ios",
        "xs-friendly": "xs-friendly",
        "bloko-modal-overlay": "bloko-modal-overlay",
        "bloko-modal-overlay_visible": "bloko-modal-overlay_visible",
        "bloko-modal-overlay__bottom-sheet":
          "bloko-modal-overlay__bottom-sheet",
        "bloko-modal-container": "bloko-modal-container",
        "bloko-modal-container_visible": "bloko-modal-container_visible",
        "bloko-modal": "bloko-modal",
        "bloko-modal-close-button": "bloko-modal-close-button",
        "bloko-modal-close-button_hidden": "bloko-modal-close-button_hidden",
        "bloko-modal-header": "bloko-modal-header",
        "bloko-modal-content": "bloko-modal-content",
        "bloko-modal-content_no-scroll": "bloko-modal-content_no-scroll",
        "bloko-modal-content-scrollable": "bloko-modal-content-scrollable",
        "bloko-modal-content-scrollable-children":
          "bloko-modal-content-scrollable-children",
        "bloko-modal-content-fader": "bloko-modal-content-fader",
        "bloko-modal-content-fader_visible":
          "bloko-modal-content-fader_visible",
        "bloko-modal-content-fader-bottom": "bloko-modal-content-fader-bottom",
        "bloko-modal-content-fader-bottom_visible":
          "bloko-modal-content-fader-bottom_visible",
        "bloko-modal-footer": "bloko-modal-footer",
        "bloko-modal-footer_left": "bloko-modal-footer_left",
        "bloko-modal-title": "bloko-modal-title",
        "bloko-modal-error": "bloko-modal-error",
        "bloko-modal-error_hidden": "bloko-modal-error_hidden",
        "bloko-modal-swipe": "bloko-modal-swipe",
        "bloko-modal-container_bottom-sheet":
          "bloko-modal-container_bottom-sheet",
        "bloko-modal-bottom-sheet-fader": "bloko-modal-bottom-sheet-fader",
        "bloko-modal-bottom-sheet-fader_visible":
          "bloko-modal-bottom-sheet-fader_visible",
        "bloko-modal-header_outlined": "bloko-modal-header_outlined",
      };
    },
    326334: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-notification-manager": "bloko-notification-manager",
        "bloko-notification": "bloko-notification",
        "bloko-notification_inactive": "bloko-notification_inactive",
        "bloko-notification__plate": "bloko-notification__plate",
        "bloko-notification_ok": "bloko-notification_ok",
        "bloko-notification__icon": "bloko-notification__icon",
        "bloko-notification_error": "bloko-notification_error",
        "bloko-notification_delete": "bloko-notification_delete",
        "bloko-notification_message": "bloko-notification_message",
        "bloko-notification__heading": "bloko-notification__heading",
        "bloko-notification__content": "bloko-notification__content",
        "bloko-notification_question": "bloko-notification_question",
        "bloko-notification_rating": "bloko-notification_rating",
        "bloko-notification_special": "bloko-notification_special",
        "bloko-notification__wrapper": "bloko-notification__wrapper",
        "bloko-notification__body": "bloko-notification__body",
        "bloko-notification__close": "bloko-notification__close",
        "bloko-notification__footer": "bloko-notification__footer",
      };
    },
    872727: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-radio": "bloko-radio",
        "bloko-radio__text": "bloko-radio__text",
        "bloko-radio__input": "bloko-radio__input",
        "focus-visible": "focus-visible",
        "bloko-radio__opening-content": "bloko-radio__opening-content",
        "bloko-radio_invalid": "bloko-radio_invalid",
        "bloko-radio-reversed-wrapper": "bloko-radio-reversed-wrapper",
        "bloko-radio-reversed-wrapper__control":
          "bloko-radio-reversed-wrapper__control",
        "bloko-modal-container": "bloko-modal-container",
      };
    },
    832397: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-select": "bloko-select",
        "bloko-select_invalid": "bloko-select_invalid",
        "focus-visible": "focus-visible",
        "bloko-select_flexible": "bloko-select_flexible",
        "bloko-select_scale-small": "bloko-select_scale-small",
        "bloko-select_scale-large": "bloko-select_scale-large",
        "bloko-select_light": "bloko-select_light",
        "bloko-select-wrapper": "bloko-select-wrapper",
        "bloko-select-wrapper_flexible": "bloko-select-wrapper_flexible",
        "bloko-select-placeholder": "bloko-select-placeholder",
        "bloko-select-placeholder-text": "bloko-select-placeholder-text",
      };
    },
    937285: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-select-dropdown-option": "bloko-select-dropdown-option",
        "bloko-select-dropdown-option_disabled":
          "bloko-select-dropdown-option_disabled",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-select-dropdown-option_selected":
          "bloko-select-dropdown-option_selected",
        "bloko-select-dropdown-option_focusable-by-hover":
          "bloko-select-dropdown-option_focusable-by-hover",
        "bloko-select-dropdown-option_focused":
          "bloko-select-dropdown-option_focused",
        "bloko-select-dropdown-option__text":
          "bloko-select-dropdown-option__text",
      };
    },
    166548: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-slide": "bloko-slide",
        "bloko-slide__container": "bloko-slide__container",
        "bloko-slide__item": "bloko-slide__item",
      };
    },
    995020: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-stepwise": "bloko-stepwise",
        "bloko-stepwise_embeddable": "bloko-stepwise_embeddable",
        "bloko-stepwise__steps": "bloko-stepwise__steps",
        "bloko-stepwise-step": "bloko-stepwise-step",
        "bloko-stepwise-step_done": "bloko-stepwise-step_done",
        "bloko-stepwise-step_icon-only": "bloko-stepwise-step_icon-only",
        "bloko-stepwise-step_link": "bloko-stepwise-step_link",
        "bloko-stepwise-step_current": "bloko-stepwise-step_current",
        "bloko-stepwise-step__title": "bloko-stepwise-step__title",
        "bloko-stepwise-step__info": "bloko-stepwise-step__info",
        "bloko-stepwise-step__info_nowrap": "bloko-stepwise-step__info_nowrap",
      };
    },
    139664: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        suggest: "suggest",
        "suggest_layer-above-content-almost":
          "suggest_layer-above-content-almost",
        "suggest_layer-above-content": "suggest_layer-above-content",
        "suggest_layer-cover-substrate": "suggest_layer-cover-substrate",
        "suggest_layer-content-cover": "suggest_layer-content-cover",
        "suggest_layer-floating": "suggest_layer-floating",
        "suggest_layer-overlay": "suggest_layer-overlay",
        "suggest_layer-overlay-content": "suggest_layer-overlay-content",
        "suggest_layer-above-overlay-content":
          "suggest_layer-above-overlay-content",
        "suggest_layer-topmost": "suggest_layer-topmost",
        suggest__items: "suggest__items",
        "suggest__text-hint": "suggest__text-hint",
        suggest__item: "suggest__item",
        suggest__items_hover_enabled: "suggest__items_hover_enabled",
        suggest__item_state_highlighted: "suggest__item_state_highlighted",
      };
    },
    867396: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-tabs-wrapper": "bloko-tabs-wrapper",
        "bloko-tabs-wrapper_narrow": "bloko-tabs-wrapper_narrow",
        "bloko-tabs": "bloko-tabs",
        "bloko-tabs__item": "bloko-tabs__item",
        "bloko-tabs__item_active": "bloko-tabs__item_active",
        "bloko-tabs__items": "bloko-tabs__items",
        "focus-visible": "focus-visible",
        "bloko-tabs__icon-container": "bloko-tabs__icon-container",
        "bloko-icon-link": "bloko-icon-link",
        "bloko-tabs__icon-container_hidden":
          "bloko-tabs__icon-container_hidden",
        "bloko-tabs__dropdown": "bloko-tabs__dropdown",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-tabs-left-glare": "bloko-tabs-left-glare",
        "bloko-tabs-left-glare_showed": "bloko-tabs-left-glare_showed",
        "bloko-tabs-right-glare": "bloko-tabs-right-glare",
        "bloko-tabs-right-glare_showed": "bloko-tabs-right-glare_showed",
        "bloko-tabs-scroll": "bloko-tabs-scroll",
        "bloko-tabs-scroll_ongoing": "bloko-tabs-scroll_ongoing",
        "bloko-tabs__search": "bloko-tabs__search",
        "bloko-tabs__dropdown-items-container":
          "bloko-tabs__dropdown-items-container",
        "bloko-tabs__dropdown-items-empty": "bloko-tabs__dropdown-items-empty",
      };
    },
    363005: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-input-text": "bloko-input-text",
        "bloko-input-text_invalid": "bloko-input-text_invalid",
        "focus-visible": "focus-visible",
        "bloko-input-text-wrapper_sized": "bloko-input-text-wrapper_sized",
        "bloko-input-text_sized": "bloko-input-text_sized",
        "bloko-input-text_scale-small": "bloko-input-text_scale-small",
        "bloko-input-text_scale-large": "bloko-input-text_scale-large",
        "bloko-input-text_name": "bloko-input-text_name",
        "bloko-input-text_light": "bloko-input-text_light",
        "bloko-input-text-wrapper": "bloko-input-text-wrapper",
        "bloko-icon": "bloko-icon",
        "bloko-icon-react-root": "bloko-icon-react-root",
        "bloko-icon-link": "bloko-icon-link",
        "bloko-icon-dynamic": "bloko-icon-dynamic",
        "bloko-input-text-wrapper_icon-left":
          "bloko-input-text-wrapper_icon-left",
        "bloko-input-text-wrapper_icon-right":
          "bloko-input-text-wrapper_icon-right",
        "bloko-input-text__prefix": "bloko-input-text__prefix",
        "bloko-input-text__prefix_small": "bloko-input-text__prefix_small",
        "bloko-input-text__prefix_large": "bloko-input-text__prefix_large",
        "bloko-input-text__prefix_with-icon-left":
          "bloko-input-text__prefix_with-icon-left",
        "bloko-input-text__inner-wrapper": "bloko-input-text__inner-wrapper",
        "bloko-input__postfix-container": "bloko-input__postfix-container",
        "bloko-input__postfix-container_small":
          "bloko-input__postfix-container_small",
        "bloko-input__postfix-container_large":
          "bloko-input__postfix-container_large",
        "bloko-input__postfix-container_with-icon-left":
          "bloko-input__postfix-container_with-icon-left",
        "bloko-input__postfix-container_with-icon-right":
          "bloko-input__postfix-container_with-icon-right",
        "bloko-input__postfix-text": "bloko-input__postfix-text",
        "bloko-input__value-ghost": "bloko-input__value-ghost",
        "bloko-drop": "bloko-drop",
        "bloko-drop_layer-above-content-almost":
          "bloko-drop_layer-above-content-almost",
        "bloko-drop_layer-above-content": "bloko-drop_layer-above-content",
        "bloko-drop_layer-cover-substrate": "bloko-drop_layer-cover-substrate",
        "bloko-drop_layer-content-cover": "bloko-drop_layer-content-cover",
        "bloko-drop_layer-floating": "bloko-drop_layer-floating",
        "bloko-drop_layer-overlay": "bloko-drop_layer-overlay",
        "bloko-drop_layer-overlay-content": "bloko-drop_layer-overlay-content",
        "bloko-drop_layer-above-overlay-content":
          "bloko-drop_layer-above-overlay-content",
        "bloko-drop_layer-topmost": "bloko-drop_layer-topmost",
        "bloko-drop_flexible": "bloko-drop_flexible",
        "bloko-drop_clickable": "bloko-drop_clickable",
        "xs-friendly": "xs-friendly",
        "bloko-drop_fullscreen-on-xs": "bloko-drop_fullscreen-on-xs",
        "bloko-drop_stretch-on-xs": "bloko-drop_stretch-on-xs",
        "bloko-drop__overlay": "bloko-drop__overlay",
        "bloko-drop__arrow": "bloko-drop__arrow",
        "bloko-drop_top": "bloko-drop_top",
        "bloko-drop_left": "bloko-drop_left",
        "bloko-drop_right": "bloko-drop_right",
        "bloko-drop_bottom": "bloko-drop_bottom",
        "bloko-drop_theme-dark": "bloko-drop_theme-dark",
        "bloko-drop_theme-attention": "bloko-drop_theme-attention",
        "bloko-drop_theme-light": "bloko-drop_theme-light",
        "bloko-drop_theme-bright": "bloko-drop_theme-bright",
        "bloko-drop_theme-info": "bloko-drop_theme-info",
        "bloko-drop_theme-neural": "bloko-drop_theme-neural",
        "bloko-drop_active-enter": "bloko-drop_active-enter",
        "bloko-drop_done-enter": "bloko-drop_done-enter",
        "bloko-drop__content-wrapper": "bloko-drop__content-wrapper",
        "bloko-drop__content": "bloko-drop__content",
        "bloko-drop__close": "bloko-drop__close",
        "bloko-drop__title": "bloko-drop__title",
        "bloko-drop__title-text": "bloko-drop__title-text",
        "bloko-drop_tip": "bloko-drop_tip",
        "bloko-tag-button": "bloko-tag-button",
        "bloko-tag-button_pressed": "bloko-tag-button_pressed",
        "bloko-tag_animated": "bloko-tag_animated",
        "bloko-tag-button_increase": "bloko-tag-button_increase",
        "bloko-nested-tag": "bloko-nested-tag",
        "bloko-nested-tag__children": "bloko-nested-tag__children",
        "bloko-tag__section_text": "bloko-tag__section_text",
        "bloko-tag__section_count": "bloko-tag__section_count",
        "bloko-tag": "bloko-tag",
        "bloko-nested-tag__children_visible":
          "bloko-nested-tag__children_visible",
        "bloko-tag_child": "bloko-tag_child",
        "bloko-tag__section": "bloko-tag__section",
        "bloko-tag__section_active": "bloko-tag__section_active",
        "bloko-tag_selectable": "bloko-tag_selectable",
        "bloko-tag_selected": "bloko-tag_selected",
        "bloko-tag_parent": "bloko-tag_parent",
        "bloko-tag__section_edit": "bloko-tag__section_edit",
        "bloko-tag__section_icon": "bloko-tag__section_icon",
        "bloko-tag_inline": "bloko-tag_inline",
        "bloko-tag_countable": "bloko-tag_countable",
        "bloko-tag_disabled": "bloko-tag_disabled",
        "bloko-tag-list": "bloko-tag-list",
        "bloko-tag_success": "bloko-tag_success",
      };
    },
    481313: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-textarea": "bloko-textarea",
        "bloko-textarea_invalid": "bloko-textarea_invalid",
        "focus-visible": "focus-visible",
        "bloko-textarea_sized-rows": "bloko-textarea_sized-rows",
        "bloko-textarea_sized-cols": "bloko-textarea_sized-cols",
        "bloko-textarea_noresize": "bloko-textarea_noresize",
        "bloko-textarea-wrapper": "bloko-textarea-wrapper",
        "bloko-textarea-icon": "bloko-textarea-icon",
        "bloko-icon": "bloko-icon",
        "bloko-textarea-icon_bottom": "bloko-textarea-icon_bottom",
      };
    },
    517330: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-icon-react-root": "bloko-icon-react-root",
        "bloko-icon": "bloko-icon",
        "bloko-icon_initial-white": "bloko-icon_initial-white",
        "bloko-icon-dynamic": "bloko-icon-dynamic",
        "bloko-icon_highlighted-white": "bloko-icon_highlighted-white",
        "bloko-icon_initial-black": "bloko-icon_initial-black",
        "bloko-icon_highlighted-black": "bloko-icon_highlighted-black",
        "bloko-icon_initial-special-red-branded":
          "bloko-icon_initial-special-red-branded",
        "bloko-icon_highlighted-special-red-branded":
          "bloko-icon_highlighted-special-red-branded",
        "bloko-icon_initial-special-black-jack":
          "bloko-icon_initial-special-black-jack",
        "bloko-icon_highlighted-special-black-jack":
          "bloko-icon_highlighted-special-black-jack",
        "bloko-icon_initial-gray-10": "bloko-icon_initial-gray-10",
        "bloko-icon_highlighted-gray-10": "bloko-icon_highlighted-gray-10",
        "bloko-icon_initial-gray-20": "bloko-icon_initial-gray-20",
        "bloko-icon_highlighted-gray-20": "bloko-icon_highlighted-gray-20",
        "bloko-icon_initial-gray-30": "bloko-icon_initial-gray-30",
        "bloko-icon_highlighted-gray-30": "bloko-icon_highlighted-gray-30",
        "bloko-icon_initial-gray-40": "bloko-icon_initial-gray-40",
        "bloko-icon_highlighted-gray-40": "bloko-icon_highlighted-gray-40",
        "bloko-icon_initial-gray-50": "bloko-icon_initial-gray-50",
        "bloko-icon_highlighted-gray-50": "bloko-icon_highlighted-gray-50",
        "bloko-icon_initial-gray-60": "bloko-icon_initial-gray-60",
        "bloko-icon_highlighted-gray-60": "bloko-icon_highlighted-gray-60",
        "bloko-icon_initial-gray-70": "bloko-icon_initial-gray-70",
        "bloko-icon_highlighted-gray-70": "bloko-icon_highlighted-gray-70",
        "bloko-icon_initial-gray-80": "bloko-icon_initial-gray-80",
        "bloko-icon_highlighted-gray-80": "bloko-icon_highlighted-gray-80",
        "bloko-icon_initial-red-10": "bloko-icon_initial-red-10",
        "bloko-icon_highlighted-red-10": "bloko-icon_highlighted-red-10",
        "bloko-icon_initial-red-20": "bloko-icon_initial-red-20",
        "bloko-icon_highlighted-red-20": "bloko-icon_highlighted-red-20",
        "bloko-icon_initial-red-30": "bloko-icon_initial-red-30",
        "bloko-icon_highlighted-red-30": "bloko-icon_highlighted-red-30",
        "bloko-icon_initial-red-40": "bloko-icon_initial-red-40",
        "bloko-icon_highlighted-red-40": "bloko-icon_highlighted-red-40",
        "bloko-icon_initial-red-50": "bloko-icon_initial-red-50",
        "bloko-icon_highlighted-red-50": "bloko-icon_highlighted-red-50",
        "bloko-icon_initial-red-60": "bloko-icon_initial-red-60",
        "bloko-icon_highlighted-red-60": "bloko-icon_highlighted-red-60",
        "bloko-icon_initial-red-70": "bloko-icon_initial-red-70",
        "bloko-icon_highlighted-red-70": "bloko-icon_highlighted-red-70",
        "bloko-icon_initial-red-80": "bloko-icon_initial-red-80",
        "bloko-icon_highlighted-red-80": "bloko-icon_highlighted-red-80",
        "bloko-icon_initial-yellow-10": "bloko-icon_initial-yellow-10",
        "bloko-icon_highlighted-yellow-10": "bloko-icon_highlighted-yellow-10",
        "bloko-icon_initial-yellow-20": "bloko-icon_initial-yellow-20",
        "bloko-icon_highlighted-yellow-20": "bloko-icon_highlighted-yellow-20",
        "bloko-icon_initial-yellow-30": "bloko-icon_initial-yellow-30",
        "bloko-icon_highlighted-yellow-30": "bloko-icon_highlighted-yellow-30",
        "bloko-icon_initial-yellow-40": "bloko-icon_initial-yellow-40",
        "bloko-icon_highlighted-yellow-40": "bloko-icon_highlighted-yellow-40",
        "bloko-icon_initial-yellow-50": "bloko-icon_initial-yellow-50",
        "bloko-icon_highlighted-yellow-50": "bloko-icon_highlighted-yellow-50",
        "bloko-icon_initial-yellow-60": "bloko-icon_initial-yellow-60",
        "bloko-icon_highlighted-yellow-60": "bloko-icon_highlighted-yellow-60",
        "bloko-icon_initial-yellow-70": "bloko-icon_initial-yellow-70",
        "bloko-icon_highlighted-yellow-70": "bloko-icon_highlighted-yellow-70",
        "bloko-icon_initial-yellow-80": "bloko-icon_initial-yellow-80",
        "bloko-icon_highlighted-yellow-80": "bloko-icon_highlighted-yellow-80",
        "bloko-icon_initial-orange-10": "bloko-icon_initial-orange-10",
        "bloko-icon_highlighted-orange-10": "bloko-icon_highlighted-orange-10",
        "bloko-icon_initial-orange-20": "bloko-icon_initial-orange-20",
        "bloko-icon_highlighted-orange-20": "bloko-icon_highlighted-orange-20",
        "bloko-icon_initial-orange-30": "bloko-icon_initial-orange-30",
        "bloko-icon_highlighted-orange-30": "bloko-icon_highlighted-orange-30",
        "bloko-icon_initial-orange-40": "bloko-icon_initial-orange-40",
        "bloko-icon_highlighted-orange-40": "bloko-icon_highlighted-orange-40",
        "bloko-icon_initial-orange-50": "bloko-icon_initial-orange-50",
        "bloko-icon_highlighted-orange-50": "bloko-icon_highlighted-orange-50",
        "bloko-icon_initial-orange-60": "bloko-icon_initial-orange-60",
        "bloko-icon_highlighted-orange-60": "bloko-icon_highlighted-orange-60",
        "bloko-icon_initial-orange-70": "bloko-icon_initial-orange-70",
        "bloko-icon_highlighted-orange-70": "bloko-icon_highlighted-orange-70",
        "bloko-icon_initial-orange-80": "bloko-icon_initial-orange-80",
        "bloko-icon_highlighted-orange-80": "bloko-icon_highlighted-orange-80",
        "bloko-icon_initial-blue-10": "bloko-icon_initial-blue-10",
        "bloko-icon_highlighted-blue-10": "bloko-icon_highlighted-blue-10",
        "bloko-icon_initial-blue-20": "bloko-icon_initial-blue-20",
        "bloko-icon_highlighted-blue-20": "bloko-icon_highlighted-blue-20",
        "bloko-icon_initial-blue-30": "bloko-icon_initial-blue-30",
        "bloko-icon_highlighted-blue-30": "bloko-icon_highlighted-blue-30",
        "bloko-icon_initial-blue-40": "bloko-icon_initial-blue-40",
        "bloko-icon_highlighted-blue-40": "bloko-icon_highlighted-blue-40",
        "bloko-icon_initial-blue-50": "bloko-icon_initial-blue-50",
        "bloko-icon_highlighted-blue-50": "bloko-icon_highlighted-blue-50",
        "bloko-icon_initial-blue-60": "bloko-icon_initial-blue-60",
        "bloko-icon_highlighted-blue-60": "bloko-icon_highlighted-blue-60",
        "bloko-icon_initial-blue-70": "bloko-icon_initial-blue-70",
        "bloko-icon_highlighted-blue-70": "bloko-icon_highlighted-blue-70",
        "bloko-icon_initial-blue-80": "bloko-icon_initial-blue-80",
        "bloko-icon_highlighted-blue-80": "bloko-icon_highlighted-blue-80",
        "bloko-icon_initial-violet-10": "bloko-icon_initial-violet-10",
        "bloko-icon_highlighted-violet-10": "bloko-icon_highlighted-violet-10",
        "bloko-icon_initial-violet-20": "bloko-icon_initial-violet-20",
        "bloko-icon_highlighted-violet-20": "bloko-icon_highlighted-violet-20",
        "bloko-icon_initial-violet-30": "bloko-icon_initial-violet-30",
        "bloko-icon_highlighted-violet-30": "bloko-icon_highlighted-violet-30",
        "bloko-icon_initial-violet-40": "bloko-icon_initial-violet-40",
        "bloko-icon_highlighted-violet-40": "bloko-icon_highlighted-violet-40",
        "bloko-icon_initial-violet-50": "bloko-icon_initial-violet-50",
        "bloko-icon_highlighted-violet-50": "bloko-icon_highlighted-violet-50",
        "bloko-icon_initial-violet-60": "bloko-icon_initial-violet-60",
        "bloko-icon_highlighted-violet-60": "bloko-icon_highlighted-violet-60",
        "bloko-icon_initial-violet-70": "bloko-icon_initial-violet-70",
        "bloko-icon_highlighted-violet-70": "bloko-icon_highlighted-violet-70",
        "bloko-icon_initial-violet-80": "bloko-icon_initial-violet-80",
        "bloko-icon_highlighted-violet-80": "bloko-icon_highlighted-violet-80",
        "bloko-icon_initial-green-10": "bloko-icon_initial-green-10",
        "bloko-icon_highlighted-green-10": "bloko-icon_highlighted-green-10",
        "bloko-icon_initial-green-20": "bloko-icon_initial-green-20",
        "bloko-icon_highlighted-green-20": "bloko-icon_highlighted-green-20",
        "bloko-icon_initial-green-30": "bloko-icon_initial-green-30",
        "bloko-icon_highlighted-green-30": "bloko-icon_highlighted-green-30",
        "bloko-icon_initial-green-40": "bloko-icon_initial-green-40",
        "bloko-icon_highlighted-green-40": "bloko-icon_highlighted-green-40",
        "bloko-icon_initial-green-50": "bloko-icon_initial-green-50",
        "bloko-icon_highlighted-green-50": "bloko-icon_highlighted-green-50",
        "bloko-icon_initial-green-60": "bloko-icon_initial-green-60",
        "bloko-icon_highlighted-green-60": "bloko-icon_highlighted-green-60",
        "bloko-icon_initial-green-70": "bloko-icon_initial-green-70",
        "bloko-icon_highlighted-green-70": "bloko-icon_highlighted-green-70",
        "bloko-icon_initial-green-80": "bloko-icon_initial-green-80",
        "bloko-icon_highlighted-green-80": "bloko-icon_highlighted-green-80",
        "bloko-icon_loader": "bloko-icon_loader",
        "bloko-icon-link": "bloko-icon-link",
        "focus-visible": "focus-visible",
        "bloko-icon-dynamic_full-width": "bloko-icon-dynamic_full-width",
        "bloko-icon-vertical-alignment": "bloko-icon-vertical-alignment",
        "bloko-form-separator": "bloko-form-separator",
        "bloko-highlight-indents": "bloko-highlight-indents",
        "bloko-form-item": "bloko-form-item",
        "bloko-form-item-group": "bloko-form-item-group",
        "bloko-form-item-baseline": "bloko-form-item-baseline",
        "bloko-form-item-text": "bloko-form-item-text",
        "bloko-form-hint": "bloko-form-hint",
        "bloko-form-legend": "bloko-form-legend",
        "bloko-form-legend_for-small": "bloko-form-legend_for-small",
        "bloko-form-legend_for-large": "bloko-form-legend_for-large",
        "bloko-form-spacer": "bloko-form-spacer",
        "bloko-form-required": "bloko-form-required",
        "bloko-form-error": "bloko-form-error",
        "bloko-form-error_hidden": "bloko-form-error_hidden",
        "bloko-form-error_entering": "bloko-form-error_entering",
        "bloko-form-error_exiting": "bloko-form-error_exiting",
        "bloko-form-one-column": "bloko-form-one-column",
        "bloko-radio": "bloko-radio",
        "bloko-radio__text": "bloko-radio__text",
        "bloko-radio__input": "bloko-radio__input",
        "bloko-radio__opening-content": "bloko-radio__opening-content",
        "bloko-radio_invalid": "bloko-radio_invalid",
        "bloko-radio-reversed-wrapper": "bloko-radio-reversed-wrapper",
        "bloko-radio-reversed-wrapper__control":
          "bloko-radio-reversed-wrapper__control",
        "bloko-modal-container": "bloko-modal-container",
        "bloko-checkbox": "bloko-checkbox",
        "bloko-checkbox__text": "bloko-checkbox__text",
        "bloko-checkbox__input": "bloko-checkbox__input",
        "bloko-checkbox__opening-content": "bloko-checkbox__opening-content",
        "bloko-checkbox_invalid": "bloko-checkbox_invalid",
        "bloko-tree-selector-selected": "bloko-tree-selector-selected",
        "bloko-tree-selector-selected-list":
          "bloko-tree-selector-selected-list",
        "bloko-tree-selector-item": "bloko-tree-selector-item",
        "bloko-tree-selector-item_has-children-has-action":
          "bloko-tree-selector-item_has-children-has-action",
        "bloko-tree-selector-item_no-children":
          "bloko-tree-selector-item_no-children",
        "bloko-tree-selector__items": "bloko-tree-selector__items",
        "bloko-tree-selector-item_no-children-no-action":
          "bloko-tree-selector-item_no-children-no-action",
        "bloko-tree-selector-item-content": "bloko-tree-selector-item-content",
        "bloko-tree-selector-item-icon": "bloko-tree-selector-item-icon",
        "bloko-tree-selector-item__text": "bloko-tree-selector-item__text",
        "bloko-tree-selector-item-spacer": "bloko-tree-selector-item-spacer",
        "bloko-tree-selector-item-spacer_legacy":
          "bloko-tree-selector-item-spacer_legacy",
        "bloko-tree-selector-content": "bloko-tree-selector-content",
        "bloko-tree-selector-after-label": "bloko-tree-selector-after-label",
        "bloko-tree-selector-after-label_parent-without-action":
          "bloko-tree-selector-after-label_parent-without-action",
        "bloko-tree-selector-after-label_parent-with-action":
          "bloko-tree-selector-after-label_parent-with-action",
      };
    },
    331207: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-modal-no-scroll": "bloko-modal-no-scroll",
        "bloko-modal-no-scroll_ios": "bloko-modal-no-scroll_ios",
        "xs-friendly": "xs-friendly",
        "bloko-modal-overlay": "bloko-modal-overlay",
        "bloko-modal-overlay_visible": "bloko-modal-overlay_visible",
        "bloko-modal-overlay__bottom-sheet":
          "bloko-modal-overlay__bottom-sheet",
        "bloko-modal-container": "bloko-modal-container",
        "bloko-modal-container_visible": "bloko-modal-container_visible",
        "bloko-modal": "bloko-modal",
        "bloko-modal-close-button": "bloko-modal-close-button",
        "bloko-modal-close-button_hidden": "bloko-modal-close-button_hidden",
        "bloko-modal-header": "bloko-modal-header",
        "bloko-modal-content": "bloko-modal-content",
        "bloko-modal-content_no-scroll": "bloko-modal-content_no-scroll",
        "bloko-modal-content-scrollable": "bloko-modal-content-scrollable",
        "bloko-modal-content-scrollable-children":
          "bloko-modal-content-scrollable-children",
        "bloko-modal-content-fader": "bloko-modal-content-fader",
        "bloko-modal-content-fader_visible":
          "bloko-modal-content-fader_visible",
        "bloko-modal-content-fader-bottom": "bloko-modal-content-fader-bottom",
        "bloko-modal-content-fader-bottom_visible":
          "bloko-modal-content-fader-bottom_visible",
        "bloko-modal-footer": "bloko-modal-footer",
        "bloko-modal-footer_left": "bloko-modal-footer_left",
        "bloko-modal-title": "bloko-modal-title",
        "bloko-modal-error": "bloko-modal-error",
        "bloko-modal-error_hidden": "bloko-modal-error_hidden",
        "bloko-modal-swipe": "bloko-modal-swipe",
        "bloko-modal-container_bottom-sheet":
          "bloko-modal-container_bottom-sheet",
        "bloko-modal-bottom-sheet-fader": "bloko-modal-bottom-sheet-fader",
        "bloko-modal-bottom-sheet-fader_visible":
          "bloko-modal-bottom-sheet-fader_visible",
        "bloko-modal-header_outlined": "bloko-modal-header_outlined",
        "bloko-form-separator": "bloko-form-separator",
        "bloko-highlight-indents": "bloko-highlight-indents",
        "bloko-form-item": "bloko-form-item",
        "bloko-form-item-group": "bloko-form-item-group",
        "bloko-form-item-baseline": "bloko-form-item-baseline",
        "bloko-form-item-text": "bloko-form-item-text",
        "bloko-form-hint": "bloko-form-hint",
        "bloko-form-legend": "bloko-form-legend",
        "bloko-form-legend_for-small": "bloko-form-legend_for-small",
        "bloko-form-legend_for-large": "bloko-form-legend_for-large",
        "bloko-form-spacer": "bloko-form-spacer",
        "bloko-form-required": "bloko-form-required",
        "bloko-form-error": "bloko-form-error",
        "bloko-form-error_hidden": "bloko-form-error_hidden",
        "bloko-form-error_entering": "bloko-form-error_entering",
        "bloko-form-error_exiting": "bloko-form-error_exiting",
        "bloko-form-one-column": "bloko-form-one-column",
        "bloko-icon-react-root": "bloko-icon-react-root",
        "bloko-icon": "bloko-icon",
        "bloko-icon_initial-white": "bloko-icon_initial-white",
        "bloko-icon-dynamic": "bloko-icon-dynamic",
        "bloko-icon_highlighted-white": "bloko-icon_highlighted-white",
        "bloko-icon_initial-black": "bloko-icon_initial-black",
        "bloko-icon_highlighted-black": "bloko-icon_highlighted-black",
        "bloko-icon_initial-special-red-branded":
          "bloko-icon_initial-special-red-branded",
        "bloko-icon_highlighted-special-red-branded":
          "bloko-icon_highlighted-special-red-branded",
        "bloko-icon_initial-special-black-jack":
          "bloko-icon_initial-special-black-jack",
        "bloko-icon_highlighted-special-black-jack":
          "bloko-icon_highlighted-special-black-jack",
        "bloko-icon_initial-gray-10": "bloko-icon_initial-gray-10",
        "bloko-icon_highlighted-gray-10": "bloko-icon_highlighted-gray-10",
        "bloko-icon_initial-gray-20": "bloko-icon_initial-gray-20",
        "bloko-icon_highlighted-gray-20": "bloko-icon_highlighted-gray-20",
        "bloko-icon_initial-gray-30": "bloko-icon_initial-gray-30",
        "bloko-icon_highlighted-gray-30": "bloko-icon_highlighted-gray-30",
        "bloko-icon_initial-gray-40": "bloko-icon_initial-gray-40",
        "bloko-icon_highlighted-gray-40": "bloko-icon_highlighted-gray-40",
        "bloko-icon_initial-gray-50": "bloko-icon_initial-gray-50",
        "bloko-icon_highlighted-gray-50": "bloko-icon_highlighted-gray-50",
        "bloko-icon_initial-gray-60": "bloko-icon_initial-gray-60",
        "bloko-icon_highlighted-gray-60": "bloko-icon_highlighted-gray-60",
        "bloko-icon_initial-gray-70": "bloko-icon_initial-gray-70",
        "bloko-icon_highlighted-gray-70": "bloko-icon_highlighted-gray-70",
        "bloko-icon_initial-gray-80": "bloko-icon_initial-gray-80",
        "bloko-icon_highlighted-gray-80": "bloko-icon_highlighted-gray-80",
        "bloko-icon_initial-red-10": "bloko-icon_initial-red-10",
        "bloko-icon_highlighted-red-10": "bloko-icon_highlighted-red-10",
        "bloko-icon_initial-red-20": "bloko-icon_initial-red-20",
        "bloko-icon_highlighted-red-20": "bloko-icon_highlighted-red-20",
        "bloko-icon_initial-red-30": "bloko-icon_initial-red-30",
        "bloko-icon_highlighted-red-30": "bloko-icon_highlighted-red-30",
        "bloko-icon_initial-red-40": "bloko-icon_initial-red-40",
        "bloko-icon_highlighted-red-40": "bloko-icon_highlighted-red-40",
        "bloko-icon_initial-red-50": "bloko-icon_initial-red-50",
        "bloko-icon_highlighted-red-50": "bloko-icon_highlighted-red-50",
        "bloko-icon_initial-red-60": "bloko-icon_initial-red-60",
        "bloko-icon_highlighted-red-60": "bloko-icon_highlighted-red-60",
        "bloko-icon_initial-red-70": "bloko-icon_initial-red-70",
        "bloko-icon_highlighted-red-70": "bloko-icon_highlighted-red-70",
        "bloko-icon_initial-red-80": "bloko-icon_initial-red-80",
        "bloko-icon_highlighted-red-80": "bloko-icon_highlighted-red-80",
        "bloko-icon_initial-yellow-10": "bloko-icon_initial-yellow-10",
        "bloko-icon_highlighted-yellow-10": "bloko-icon_highlighted-yellow-10",
        "bloko-icon_initial-yellow-20": "bloko-icon_initial-yellow-20",
        "bloko-icon_highlighted-yellow-20": "bloko-icon_highlighted-yellow-20",
        "bloko-icon_initial-yellow-30": "bloko-icon_initial-yellow-30",
        "bloko-icon_highlighted-yellow-30": "bloko-icon_highlighted-yellow-30",
        "bloko-icon_initial-yellow-40": "bloko-icon_initial-yellow-40",
        "bloko-icon_highlighted-yellow-40": "bloko-icon_highlighted-yellow-40",
        "bloko-icon_initial-yellow-50": "bloko-icon_initial-yellow-50",
        "bloko-icon_highlighted-yellow-50": "bloko-icon_highlighted-yellow-50",
        "bloko-icon_initial-yellow-60": "bloko-icon_initial-yellow-60",
        "bloko-icon_highlighted-yellow-60": "bloko-icon_highlighted-yellow-60",
        "bloko-icon_initial-yellow-70": "bloko-icon_initial-yellow-70",
        "bloko-icon_highlighted-yellow-70": "bloko-icon_highlighted-yellow-70",
        "bloko-icon_initial-yellow-80": "bloko-icon_initial-yellow-80",
        "bloko-icon_highlighted-yellow-80": "bloko-icon_highlighted-yellow-80",
        "bloko-icon_initial-orange-10": "bloko-icon_initial-orange-10",
        "bloko-icon_highlighted-orange-10": "bloko-icon_highlighted-orange-10",
        "bloko-icon_initial-orange-20": "bloko-icon_initial-orange-20",
        "bloko-icon_highlighted-orange-20": "bloko-icon_highlighted-orange-20",
        "bloko-icon_initial-orange-30": "bloko-icon_initial-orange-30",
        "bloko-icon_highlighted-orange-30": "bloko-icon_highlighted-orange-30",
        "bloko-icon_initial-orange-40": "bloko-icon_initial-orange-40",
        "bloko-icon_highlighted-orange-40": "bloko-icon_highlighted-orange-40",
        "bloko-icon_initial-orange-50": "bloko-icon_initial-orange-50",
        "bloko-icon_highlighted-orange-50": "bloko-icon_highlighted-orange-50",
        "bloko-icon_initial-orange-60": "bloko-icon_initial-orange-60",
        "bloko-icon_highlighted-orange-60": "bloko-icon_highlighted-orange-60",
        "bloko-icon_initial-orange-70": "bloko-icon_initial-orange-70",
        "bloko-icon_highlighted-orange-70": "bloko-icon_highlighted-orange-70",
        "bloko-icon_initial-orange-80": "bloko-icon_initial-orange-80",
        "bloko-icon_highlighted-orange-80": "bloko-icon_highlighted-orange-80",
        "bloko-icon_initial-blue-10": "bloko-icon_initial-blue-10",
        "bloko-icon_highlighted-blue-10": "bloko-icon_highlighted-blue-10",
        "bloko-icon_initial-blue-20": "bloko-icon_initial-blue-20",
        "bloko-icon_highlighted-blue-20": "bloko-icon_highlighted-blue-20",
        "bloko-icon_initial-blue-30": "bloko-icon_initial-blue-30",
        "bloko-icon_highlighted-blue-30": "bloko-icon_highlighted-blue-30",
        "bloko-icon_initial-blue-40": "bloko-icon_initial-blue-40",
        "bloko-icon_highlighted-blue-40": "bloko-icon_highlighted-blue-40",
        "bloko-icon_initial-blue-50": "bloko-icon_initial-blue-50",
        "bloko-icon_highlighted-blue-50": "bloko-icon_highlighted-blue-50",
        "bloko-icon_initial-blue-60": "bloko-icon_initial-blue-60",
        "bloko-icon_highlighted-blue-60": "bloko-icon_highlighted-blue-60",
        "bloko-icon_initial-blue-70": "bloko-icon_initial-blue-70",
        "bloko-icon_highlighted-blue-70": "bloko-icon_highlighted-blue-70",
        "bloko-icon_initial-blue-80": "bloko-icon_initial-blue-80",
        "bloko-icon_highlighted-blue-80": "bloko-icon_highlighted-blue-80",
        "bloko-icon_initial-violet-10": "bloko-icon_initial-violet-10",
        "bloko-icon_highlighted-violet-10": "bloko-icon_highlighted-violet-10",
        "bloko-icon_initial-violet-20": "bloko-icon_initial-violet-20",
        "bloko-icon_highlighted-violet-20": "bloko-icon_highlighted-violet-20",
        "bloko-icon_initial-violet-30": "bloko-icon_initial-violet-30",
        "bloko-icon_highlighted-violet-30": "bloko-icon_highlighted-violet-30",
        "bloko-icon_initial-violet-40": "bloko-icon_initial-violet-40",
        "bloko-icon_highlighted-violet-40": "bloko-icon_highlighted-violet-40",
        "bloko-icon_initial-violet-50": "bloko-icon_initial-violet-50",
        "bloko-icon_highlighted-violet-50": "bloko-icon_highlighted-violet-50",
        "bloko-icon_initial-violet-60": "bloko-icon_initial-violet-60",
        "bloko-icon_highlighted-violet-60": "bloko-icon_highlighted-violet-60",
        "bloko-icon_initial-violet-70": "bloko-icon_initial-violet-70",
        "bloko-icon_highlighted-violet-70": "bloko-icon_highlighted-violet-70",
        "bloko-icon_initial-violet-80": "bloko-icon_initial-violet-80",
        "bloko-icon_highlighted-violet-80": "bloko-icon_highlighted-violet-80",
        "bloko-icon_initial-green-10": "bloko-icon_initial-green-10",
        "bloko-icon_highlighted-green-10": "bloko-icon_highlighted-green-10",
        "bloko-icon_initial-green-20": "bloko-icon_initial-green-20",
        "bloko-icon_highlighted-green-20": "bloko-icon_highlighted-green-20",
        "bloko-icon_initial-green-30": "bloko-icon_initial-green-30",
        "bloko-icon_highlighted-green-30": "bloko-icon_highlighted-green-30",
        "bloko-icon_initial-green-40": "bloko-icon_initial-green-40",
        "bloko-icon_highlighted-green-40": "bloko-icon_highlighted-green-40",
        "bloko-icon_initial-green-50": "bloko-icon_initial-green-50",
        "bloko-icon_highlighted-green-50": "bloko-icon_highlighted-green-50",
        "bloko-icon_initial-green-60": "bloko-icon_initial-green-60",
        "bloko-icon_highlighted-green-60": "bloko-icon_highlighted-green-60",
        "bloko-icon_initial-green-70": "bloko-icon_initial-green-70",
        "bloko-icon_highlighted-green-70": "bloko-icon_highlighted-green-70",
        "bloko-icon_initial-green-80": "bloko-icon_initial-green-80",
        "bloko-icon_highlighted-green-80": "bloko-icon_highlighted-green-80",
        "bloko-icon_loader": "bloko-icon_loader",
        "bloko-icon-link": "bloko-icon-link",
        "focus-visible": "focus-visible",
        "bloko-icon-dynamic_full-width": "bloko-icon-dynamic_full-width",
        "bloko-icon-vertical-alignment": "bloko-icon-vertical-alignment",
        "bloko-radio": "bloko-radio",
        "bloko-radio__text": "bloko-radio__text",
        "bloko-radio__input": "bloko-radio__input",
        "bloko-radio__opening-content": "bloko-radio__opening-content",
        "bloko-radio_invalid": "bloko-radio_invalid",
        "bloko-radio-reversed-wrapper": "bloko-radio-reversed-wrapper",
        "bloko-radio-reversed-wrapper__control":
          "bloko-radio-reversed-wrapper__control",
        "bloko-checkbox": "bloko-checkbox",
        "bloko-checkbox__text": "bloko-checkbox__text",
        "bloko-checkbox__input": "bloko-checkbox__input",
        "bloko-checkbox__opening-content": "bloko-checkbox__opening-content",
        "bloko-checkbox_invalid": "bloko-checkbox_invalid",
        "bloko-tree-selector-selected": "bloko-tree-selector-selected",
        "bloko-tree-selector-selected-list":
          "bloko-tree-selector-selected-list",
        "bloko-tree-selector-item": "bloko-tree-selector-item",
        "bloko-tree-selector-item_has-children-has-action":
          "bloko-tree-selector-item_has-children-has-action",
        "bloko-tree-selector-item_no-children":
          "bloko-tree-selector-item_no-children",
        "bloko-tree-selector__items": "bloko-tree-selector__items",
        "bloko-tree-selector-item_no-children-no-action":
          "bloko-tree-selector-item_no-children-no-action",
        "bloko-tree-selector-item-content": "bloko-tree-selector-item-content",
        "bloko-tree-selector-item-icon": "bloko-tree-selector-item-icon",
        "bloko-tree-selector-item__text": "bloko-tree-selector-item__text",
        "bloko-tree-selector-item-spacer": "bloko-tree-selector-item-spacer",
        "bloko-tree-selector-item-spacer_legacy":
          "bloko-tree-selector-item-spacer_legacy",
        "bloko-tree-selector-content": "bloko-tree-selector-content",
        "bloko-tree-selector-after-label": "bloko-tree-selector-after-label",
        "bloko-tree-selector-after-label_parent-without-action":
          "bloko-tree-selector-after-label_parent-without-action",
        "bloko-tree-selector-after-label_parent-with-action":
          "bloko-tree-selector-after-label_parent-with-action",
        "bloko-gap": "bloko-gap",
        "bloko-gap_top": "bloko-gap_top",
        "bloko-gap_m-top": "bloko-gap_m-top",
        "bloko-gap_right": "bloko-gap_right",
        "bloko-gap_m-right": "bloko-gap_m-right",
        "bloko-gap_bottom": "bloko-gap_bottom",
        "bloko-gap_m-bottom": "bloko-gap_m-bottom",
        "bloko-gap_left": "bloko-gap_left",
        "bloko-gap_m-left": "bloko-gap_m-left",
        "s-friendly": "s-friendly",
        "bloko-gap_s-top": "bloko-gap_s-top",
        "bloko-gap_s-right": "bloko-gap_s-right",
        "bloko-gap_s-bottom": "bloko-gap_s-bottom",
        "bloko-gap_s-left": "bloko-gap_s-left",
        "bloko-gap_xs-top": "bloko-gap_xs-top",
        "bloko-gap_xs-right": "bloko-gap_xs-right",
        "bloko-gap_xs-bottom": "bloko-gap_xs-bottom",
        "bloko-gap_xs-left": "bloko-gap_xs-left",
        "bloko-gap_l-top": "bloko-gap_l-top",
        "bloko-gap_l-right": "bloko-gap_l-right",
        "bloko-gap_l-bottom": "bloko-gap_l-bottom",
        "bloko-gap_l-left": "bloko-gap_l-left",
        "bloko-input-text": "bloko-input-text",
        "bloko-input-text_invalid": "bloko-input-text_invalid",
        "bloko-input-text-wrapper_sized": "bloko-input-text-wrapper_sized",
        "bloko-input-text_sized": "bloko-input-text_sized",
        "bloko-input-text_scale-small": "bloko-input-text_scale-small",
        "bloko-input-text_scale-large": "bloko-input-text_scale-large",
        "bloko-input-text_name": "bloko-input-text_name",
        "bloko-input-text_light": "bloko-input-text_light",
        "bloko-input-text-wrapper": "bloko-input-text-wrapper",
        "bloko-input-text-wrapper_icon-left":
          "bloko-input-text-wrapper_icon-left",
        "bloko-input-text-wrapper_icon-right":
          "bloko-input-text-wrapper_icon-right",
        "bloko-input-text__prefix": "bloko-input-text__prefix",
        "bloko-input-text__prefix_small": "bloko-input-text__prefix_small",
        "bloko-input-text__prefix_large": "bloko-input-text__prefix_large",
        "bloko-input-text__prefix_with-icon-left":
          "bloko-input-text__prefix_with-icon-left",
        "bloko-input-text__inner-wrapper": "bloko-input-text__inner-wrapper",
        "bloko-input__postfix-container": "bloko-input__postfix-container",
        "bloko-input__postfix-container_small":
          "bloko-input__postfix-container_small",
        "bloko-input__postfix-container_large":
          "bloko-input__postfix-container_large",
        "bloko-input__postfix-container_with-icon-left":
          "bloko-input__postfix-container_with-icon-left",
        "bloko-input__postfix-container_with-icon-right":
          "bloko-input__postfix-container_with-icon-right",
        "bloko-input__postfix-text": "bloko-input__postfix-text",
        "bloko-input__value-ghost": "bloko-input__value-ghost",
        "bloko-button": "bloko-button",
        "bloko-button_pressed": "bloko-button_pressed",
        "bloko-button_appearance-outlined": "bloko-button_appearance-outlined",
        "bloko-button_appearance-flat": "bloko-button_appearance-flat",
        "bloko-button_invalid": "bloko-button_invalid",
        "bloko-button_kind-primary": "bloko-button_kind-primary",
        "bloko-button_kind-secondary": "bloko-button_kind-secondary",
        "bloko-button_kind-warning": "bloko-button_kind-warning",
        "bloko-button_kind-success": "bloko-button_kind-success",
        "bloko-button_kind-inversed": "bloko-button_kind-inversed",
        "bloko-button__badge": "bloko-button__badge",
        "bloko-button_scale-small": "bloko-button_scale-small",
        "bloko-button_scale-large": "bloko-button_scale-large",
        "bloko-button_icon-only": "bloko-button_icon-only",
        "bloko-button__icon": "bloko-button__icon",
        "bloko-button_icon-only-small": "bloko-button_icon-only-small",
        "bloko-button_icon-only-large": "bloko-button_icon-only-large",
        "bloko-button_stretched": "bloko-button_stretched",
        "bloko-button_collapsible": "bloko-button_collapsible",
        "bloko-button__icon_left": "bloko-button__icon_left",
        "bloko-button__icon_right": "bloko-button__icon_right",
        "bloko-button__loading": "bloko-button__loading",
        "bloko-button_loading": "bloko-button_loading",
        "bloko-button__content": "bloko-button__content",
        "bloko-button-group": "bloko-button-group",
        "bloko-button-check-helper": "bloko-button-check-helper",
        "bloko-button-group_stretched": "bloko-button-group_stretched",
        "bloko-button-select": "bloko-button-select",
        "bloko-button-select_invalid": "bloko-button-select_invalid",
        "bloko-button-select_flexible": "bloko-button-select_flexible",
        "bloko-button-select_small": "bloko-button-select_small",
        "bloko-button-select_large": "bloko-button-select_large",
        "bloko-button-select_light": "bloko-button-select_light",
        "bloko-tree-selector-popup": "bloko-tree-selector-popup",
        "bloko-tree-selector-popup__with-selected":
          "bloko-tree-selector-popup__with-selected",
        "bloko-tree-selector-popup-content":
          "bloko-tree-selector-popup-content",
        "bloko-tree-selector-popup-content__with-selected":
          "bloko-tree-selector-popup-content__with-selected",
        "bloko-tree-selector-popup-search": "bloko-tree-selector-popup-search",
        "bloko-tree-selector-popup-result": "bloko-tree-selector-popup-result",
        "bloko-tree-selector-popup-result-list":
          "bloko-tree-selector-popup-result-list",
        "bloko-tree-selector-popup-not-found":
          "bloko-tree-selector-popup-not-found",
        "bloko-tree-selector-popup-footer": "bloko-tree-selector-popup-footer",
        "bloko-tree-selector-popup-footer-extra":
          "bloko-tree-selector-popup-footer-extra",
        "bloko-tree-selector-popup-hint": "bloko-tree-selector-popup-hint",
      };
    },
    219187: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => n,
      });
      const n = {
        "bloko-icon-react-root": "bloko-icon-react-root",
        "bloko-icon": "bloko-icon",
        "bloko-icon_initial-white": "bloko-icon_initial-white",
        "bloko-icon-dynamic": "bloko-icon-dynamic",
        "bloko-icon_highlighted-white": "bloko-icon_highlighted-white",
        "bloko-icon_initial-black": "bloko-icon_initial-black",
        "bloko-icon_highlighted-black": "bloko-icon_highlighted-black",
        "bloko-icon_initial-special-red-branded":
          "bloko-icon_initial-special-red-branded",
        "bloko-icon_highlighted-special-red-branded":
          "bloko-icon_highlighted-special-red-branded",
        "bloko-icon_initial-special-black-jack":
          "bloko-icon_initial-special-black-jack",
        "bloko-icon_highlighted-special-black-jack":
          "bloko-icon_highlighted-special-black-jack",
        "bloko-icon_initial-gray-10": "bloko-icon_initial-gray-10",
        "bloko-icon_highlighted-gray-10": "bloko-icon_highlighted-gray-10",
        "bloko-icon_initial-gray-20": "bloko-icon_initial-gray-20",
        "bloko-icon_highlighted-gray-20": "bloko-icon_highlighted-gray-20",
        "bloko-icon_initial-gray-30": "bloko-icon_initial-gray-30",
        "bloko-icon_highlighted-gray-30": "bloko-icon_highlighted-gray-30",
        "bloko-icon_initial-gray-40": "bloko-icon_initial-gray-40",
        "bloko-icon_highlighted-gray-40": "bloko-icon_highlighted-gray-40",
        "bloko-icon_initial-gray-50": "bloko-icon_initial-gray-50",
        "bloko-icon_highlighted-gray-50": "bloko-icon_highlighted-gray-50",
        "bloko-icon_initial-gray-60": "bloko-icon_initial-gray-60",
        "bloko-icon_highlighted-gray-60": "bloko-icon_highlighted-gray-60",
        "bloko-icon_initial-gray-70": "bloko-icon_initial-gray-70",
        "bloko-icon_highlighted-gray-70": "bloko-icon_highlighted-gray-70",
        "bloko-icon_initial-gray-80": "bloko-icon_initial-gray-80",
        "bloko-icon_highlighted-gray-80": "bloko-icon_highlighted-gray-80",
        "bloko-icon_initial-red-10": "bloko-icon_initial-red-10",
        "bloko-icon_highlighted-red-10": "bloko-icon_highlighted-red-10",
        "bloko-icon_initial-red-20": "bloko-icon_initial-red-20",
        "bloko-icon_highlighted-red-20": "bloko-icon_highlighted-red-20",
        "bloko-icon_initial-red-30": "bloko-icon_initial-red-30",
        "bloko-icon_highlighted-red-30": "bloko-icon_highlighted-red-30",
        "bloko-icon_initial-red-40": "bloko-icon_initial-red-40",
        "bloko-icon_highlighted-red-40": "bloko-icon_highlighted-red-40",
        "bloko-icon_initial-red-50": "bloko-icon_initial-red-50",
        "bloko-icon_highlighted-red-50": "bloko-icon_highlighted-red-50",
        "bloko-icon_initial-red-60": "bloko-icon_initial-red-60",
        "bloko-icon_highlighted-red-60": "bloko-icon_highlighted-red-60",
        "bloko-icon_initial-red-70": "bloko-icon_initial-red-70",
        "bloko-icon_highlighted-red-70": "bloko-icon_highlighted-red-70",
        "bloko-icon_initial-red-80": "bloko-icon_initial-red-80",
        "bloko-icon_highlighted-red-80": "bloko-icon_highlighted-red-80",
        "bloko-icon_initial-yellow-10": "bloko-icon_initial-yellow-10",
        "bloko-icon_highlighted-yellow-10": "bloko-icon_highlighted-yellow-10",
        "bloko-icon_initial-yellow-20": "bloko-icon_initial-yellow-20",
        "bloko-icon_highlighted-yellow-20": "bloko-icon_highlighted-yellow-20",
        "bloko-icon_initial-yellow-30": "bloko-icon_initial-yellow-30",
        "bloko-icon_highlighted-yellow-30": "bloko-icon_highlighted-yellow-30",
        "bloko-icon_initial-yellow-40": "bloko-icon_initial-yellow-40",
        "bloko-icon_highlighted-yellow-40": "bloko-icon_highlighted-yellow-40",
        "bloko-icon_initial-yellow-50": "bloko-icon_initial-yellow-50",
        "bloko-icon_highlighted-yellow-50": "bloko-icon_highlighted-yellow-50",
        "bloko-icon_initial-yellow-60": "bloko-icon_initial-yellow-60",
        "bloko-icon_highlighted-yellow-60": "bloko-icon_highlighted-yellow-60",
        "bloko-icon_initial-yellow-70": "bloko-icon_initial-yellow-70",
        "bloko-icon_highlighted-yellow-70": "bloko-icon_highlighted-yellow-70",
        "bloko-icon_initial-yellow-80": "bloko-icon_initial-yellow-80",
        "bloko-icon_highlighted-yellow-80": "bloko-icon_highlighted-yellow-80",
        "bloko-icon_initial-orange-10": "bloko-icon_initial-orange-10",
        "bloko-icon_highlighted-orange-10": "bloko-icon_highlighted-orange-10",
        "bloko-icon_initial-orange-20": "bloko-icon_initial-orange-20",
        "bloko-icon_highlighted-orange-20": "bloko-icon_highlighted-orange-20",
        "bloko-icon_initial-orange-30": "bloko-icon_initial-orange-30",
        "bloko-icon_highlighted-orange-30": "bloko-icon_highlighted-orange-30",
        "bloko-icon_initial-orange-40": "bloko-icon_initial-orange-40",
        "bloko-icon_highlighted-orange-40": "bloko-icon_highlighted-orange-40",
        "bloko-icon_initial-orange-50": "bloko-icon_initial-orange-50",
        "bloko-icon_highlighted-orange-50": "bloko-icon_highlighted-orange-50",
        "bloko-icon_initial-orange-60": "bloko-icon_initial-orange-60",
        "bloko-icon_highlighted-orange-60": "bloko-icon_highlighted-orange-60",
        "bloko-icon_initial-orange-70": "bloko-icon_initial-orange-70",
        "bloko-icon_highlighted-orange-70": "bloko-icon_highlighted-orange-70",
        "bloko-icon_initial-orange-80": "bloko-icon_initial-orange-80",
        "bloko-icon_highlighted-orange-80": "bloko-icon_highlighted-orange-80",
        "bloko-icon_initial-blue-10": "bloko-icon_initial-blue-10",
        "bloko-icon_highlighted-blue-10": "bloko-icon_highlighted-blue-10",
        "bloko-icon_initial-blue-20": "bloko-icon_initial-blue-20",
        "bloko-icon_highlighted-blue-20": "bloko-icon_highlighted-blue-20",
        "bloko-icon_initial-blue-30": "bloko-icon_initial-blue-30",
        "bloko-icon_highlighted-blue-30": "bloko-icon_highlighted-blue-30",
        "bloko-icon_initial-blue-40": "bloko-icon_initial-blue-40",
        "bloko-icon_highlighted-blue-40": "bloko-icon_highlighted-blue-40",
        "bloko-icon_initial-blue-50": "bloko-icon_initial-blue-50",
        "bloko-icon_highlighted-blue-50": "bloko-icon_highlighted-blue-50",
        "bloko-icon_initial-blue-60": "bloko-icon_initial-blue-60",
        "bloko-icon_highlighted-blue-60": "bloko-icon_highlighted-blue-60",
        "bloko-icon_initial-blue-70": "bloko-icon_initial-blue-70",
        "bloko-icon_highlighted-blue-70": "bloko-icon_highlighted-blue-70",
        "bloko-icon_initial-blue-80": "bloko-icon_initial-blue-80",
        "bloko-icon_highlighted-blue-80": "bloko-icon_highlighted-blue-80",
        "bloko-icon_initial-violet-10": "bloko-icon_initial-violet-10",
        "bloko-icon_highlighted-violet-10": "bloko-icon_highlighted-violet-10",
        "bloko-icon_initial-violet-20": "bloko-icon_initial-violet-20",
        "bloko-icon_highlighted-violet-20": "bloko-icon_highlighted-violet-20",
        "bloko-icon_initial-violet-30": "bloko-icon_initial-violet-30",
        "bloko-icon_highlighted-violet-30": "bloko-icon_highlighted-violet-30",
        "bloko-icon_initial-violet-40": "bloko-icon_initial-violet-40",
        "bloko-icon_highlighted-violet-40": "bloko-icon_highlighted-violet-40",
        "bloko-icon_initial-violet-50": "bloko-icon_initial-violet-50",
        "bloko-icon_highlighted-violet-50": "bloko-icon_highlighted-violet-50",
        "bloko-icon_initial-violet-60": "bloko-icon_initial-violet-60",
        "bloko-icon_highlighted-violet-60": "bloko-icon_highlighted-violet-60",
        "bloko-icon_initial-violet-70": "bloko-icon_initial-violet-70",
        "bloko-icon_highlighted-violet-70": "bloko-icon_highlighted-violet-70",
        "bloko-icon_initial-violet-80": "bloko-icon_initial-violet-80",
        "bloko-icon_highlighted-violet-80": "bloko-icon_highlighted-violet-80",
        "bloko-icon_initial-green-10": "bloko-icon_initial-green-10",
        "bloko-icon_highlighted-green-10": "bloko-icon_highlighted-green-10",
        "bloko-icon_initial-green-20": "bloko-icon_initial-green-20",
        "bloko-icon_highlighted-green-20": "bloko-icon_highlighted-green-20",
        "bloko-icon_initial-green-30": "bloko-icon_initial-green-30",
        "bloko-icon_highlighted-green-30": "bloko-icon_highlighted-green-30",
        "bloko-icon_initial-green-40": "bloko-icon_initial-green-40",
        "bloko-icon_highlighted-green-40": "bloko-icon_highlighted-green-40",
        "bloko-icon_initial-green-50": "bloko-icon_initial-green-50",
        "bloko-icon_highlighted-green-50": "bloko-icon_highlighted-green-50",
        "bloko-icon_initial-green-60": "bloko-icon_initial-green-60",
        "bloko-icon_highlighted-green-60": "bloko-icon_highlighted-green-60",
        "bloko-icon_initial-green-70": "bloko-icon_initial-green-70",
        "bloko-icon_highlighted-green-70": "bloko-icon_highlighted-green-70",
        "bloko-icon_initial-green-80": "bloko-icon_initial-green-80",
        "bloko-icon_highlighted-green-80": "bloko-icon_highlighted-green-80",
        "bloko-icon_loader": "bloko-icon_loader",
        "bloko-icon-link": "bloko-icon-link",
        "focus-visible": "focus-visible",
        "bloko-icon-dynamic_full-width": "bloko-icon-dynamic_full-width",
        "bloko-icon-vertical-alignment": "bloko-icon-vertical-alignment",
      };
    },
    867318: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-calendar">');
            n.b("\n");
            n.b("\n" + o);
            n.b('    <div class="bloko-calendar__switcher-wrapper">');
            n.b("\n" + o);
            n.b('        <span class="bloko-calendar__switcher">');
            n.b("\n" + o);
            n.b('            <span class="bloko-calendar__switcher-arrow');
            n.b("\n" + o);
            n.b("                        bloko-calendar__switcher-arrow_back");
            n.b("\n" + o);
            n.b("                        ");
            if (
              n.s(
                n.f("isPreviousMonthDisabled", e, t, 1),
                e,
                t,
                0,
                297,
                336,
                "{{ }}",
              )
            ) {
              n.rs(e, t, function (e, t, o) {
                o.b("bloko-calendar__switcher-arrow_disabled");
              });
              e.pop();
            }
            n.b("\n" + o);
            n.b('                        Bloko-Calendar-Previous-Month"');
            n.b("\n" + o);
            n.b('                data-qa="bloko-calendar-prev-month">');
            n.b("\n" + o);
            n.b("            </span>");
            n.b("\n" + o);
            n.b(
              '            <span class="bloko-calendar__name bloko-calendar__name_months bloko-calendar__name_disabled Bloko-Calendar-Month">',
            );
            n.b("\n" + o);
            n.b("                ");
            n.b(n.v(n.f("month", e, t, 0)));
            n.b("\n" + o);
            n.b("            </span>");
            n.b("\n" + o);
            n.b('            <span class="bloko-calendar__switcher-arrow');
            n.b("\n" + o);
            n.b("                        bloko-calendar__switcher-arrow_next");
            n.b("\n" + o);
            n.b("                        ");
            if (
              n.s(
                n.f("isNextMonthDisabled", e, t, 1),
                e,
                t,
                0,
                830,
                869,
                "{{ }}",
              )
            ) {
              n.rs(e, t, function (e, t, o) {
                o.b("bloko-calendar__switcher-arrow_disabled");
              });
              e.pop();
            }
            n.b("\n" + o);
            n.b('                        Bloko-Calendar-Next-Month"');
            n.b("\n" + o);
            n.b('                data-qa="bloko-calendar-next-month">');
            n.b("\n" + o);
            n.b("            </span>");
            n.b("\n" + o);
            n.b("        </span>");
            n.b("\n");
            n.b("\n" + o);
            n.b('        <span class="bloko-calendar__switcher">');
            n.b("\n" + o);
            n.b('            <span class="bloko-calendar__switcher-arrow');
            n.b("\n" + o);
            n.b("                        bloko-calendar__switcher-arrow_back");
            n.b("\n" + o);
            n.b("                        ");
            if (
              n.s(
                n.f("isPreviousYearDisabled", e, t, 1),
                e,
                t,
                0,
                1250,
                1289,
                "{{ }}",
              )
            ) {
              n.rs(e, t, function (e, t, o) {
                o.b("bloko-calendar__switcher-arrow_disabled");
              });
              e.pop();
            }
            n.b("\n" + o);
            n.b('                        Bloko-Calendar-Previous-Year"');
            n.b("\n" + o);
            n.b('                data-qa="bloko-calendar-prev-year">');
            n.b("\n" + o);
            n.b('                <span class="bloko-icon bloko-icon_initial-');
            n.b(n.v(n.f("previousYearArrowKind", e, t, 0)));
            n.b(' bloko-icon_chevron-left"></span>');
            n.b("\n" + o);
            n.b("            </span>");
            n.b("\n" + o);
            n.b(
              '            <span class="bloko-calendar__name bloko-calendar__name_years bloko-calendar__name_disabled Bloko-Calendar-Year">',
            );
            n.b("\n" + o);
            n.b("                ");
            n.b(n.v(n.f("year", e, t, 0)));
            n.b("\n" + o);
            n.b("            </span>");
            n.b("\n" + o);
            n.b('            <span class="bloko-calendar__switcher-arrow');
            n.b("\n" + o);
            n.b("                        bloko-calendar__switcher-arrow_next");
            n.b("\n" + o);
            n.b("                        ");
            if (
              n.s(
                n.f("isNextYearDisabled", e, t, 1),
                e,
                t,
                0,
                1894,
                1933,
                "{{ }}",
              )
            ) {
              n.rs(e, t, function (e, t, o) {
                o.b("bloko-calendar__switcher-arrow_disabled");
              });
              e.pop();
            }
            n.b("\n" + o);
            n.b('                        Bloko-Calendar-Next-Year"');
            n.b("\n" + o);
            n.b('                data-qa="bloko-calendar-next-year">');
            n.b("\n" + o);
            n.b('                <span class="bloko-icon bloko-icon_initial-');
            n.b(n.v(n.f("nextYearArrowKind", e, t, 0)));
            n.b(' bloko-icon_chevron-right"></span>');
            n.b("\n" + o);
            n.b("            </span>");
            n.b("\n" + o);
            n.b("        </span>");
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n");
            n.b("\n" + o);
            n.b('    <div class="bloko-calendar__base">');
            n.b("\n" + o);
            n.b('        <div class="bloko-calendar__weekdays">');
            n.b("\n" + o);
            if (n.s(n.f("weekdays", e, t, 1), e, t, 0, 2333, 2474, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b(
                  '                <span class="bloko-calendar__weekday Bloko-Calendar-Weekday">',
                );
                n.b("\n" + o);
                n.b("                    ");
                n.b(n.v(n.d(".", e, t, 0)));
                n.b("\n" + o);
                n.b("                </span>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("        </div>");
            n.b("\n");
            n.b("\n" + o);
            n.b(
              '        <div class="bloko-calendar__days Bloko-Calendar-Dates">',
            );
            n.b("\n" + o);
            if (n.s(n.f("days", e, t, 1), e, t, 0, 2589, 3002, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b("                <span");
                n.b("\n" + o);
                n.b(
                  '                    class="bloko-calendar__day Bloko-Calendar-Date Bloko-Calendar-CurrentMonthDay"',
                );
                n.b("\n" + o);
                n.b('                    data-date="');
                n.b(n.v(n.f("dayNumber", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('                    data-month="');
                n.b(n.v(n.f("month", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('                    data-year="');
                n.b(n.v(n.f("year", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('                    data-qa="');
                n.b(n.v(n.f("iso", e, t, 0)));
                if (
                  n.s(n.f("disabled", e, t, 1), e, t, 0, 2890, 2899, "{{ }}")
                ) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("-disabled");
                  });
                  e.pop();
                }
                n.b('"');
                n.b("\n" + o);
                n.b("                >");
                n.b("\n" + o);
                n.b("                    ");
                n.b(n.v(n.f("dayNumber", e, t, 0)));
                n.b("\n" + o);
                n.b("                </span>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("        </div>");
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-calendar">\n\n    <div class="bloko-calendar__switcher-wrapper">\n        <span class="bloko-calendar__switcher">\n            <span class="bloko-calendar__switcher-arrow\n                        bloko-calendar__switcher-arrow_back\n                        {{#isPreviousMonthDisabled}}bloko-calendar__switcher-arrow_disabled{{/isPreviousMonthDisabled}}\n                        Bloko-Calendar-Previous-Month"\n                data-qa="bloko-calendar-prev-month">\n            </span>\n            <span class="bloko-calendar__name bloko-calendar__name_months bloko-calendar__name_disabled Bloko-Calendar-Month">\n                {{month}}\n            </span>\n            <span class="bloko-calendar__switcher-arrow\n                        bloko-calendar__switcher-arrow_next\n                        {{#isNextMonthDisabled}}bloko-calendar__switcher-arrow_disabled{{/isNextMonthDisabled}}\n                        Bloko-Calendar-Next-Month"\n                data-qa="bloko-calendar-next-month">\n            </span>\n        </span>\n\n        <span class="bloko-calendar__switcher">\n            <span class="bloko-calendar__switcher-arrow\n                        bloko-calendar__switcher-arrow_back\n                        {{#isPreviousYearDisabled}}bloko-calendar__switcher-arrow_disabled{{/isPreviousYearDisabled}}\n                        Bloko-Calendar-Previous-Year"\n                data-qa="bloko-calendar-prev-year">\n                <span class="bloko-icon bloko-icon_initial-{{previousYearArrowKind}} bloko-icon_chevron-left"></span>\n            </span>\n            <span class="bloko-calendar__name bloko-calendar__name_years bloko-calendar__name_disabled Bloko-Calendar-Year">\n                {{year}}\n            </span>\n            <span class="bloko-calendar__switcher-arrow\n                        bloko-calendar__switcher-arrow_next\n                        {{#isNextYearDisabled}}bloko-calendar__switcher-arrow_disabled{{/isNextYearDisabled}}\n                        Bloko-Calendar-Next-Year"\n                data-qa="bloko-calendar-next-year">\n                <span class="bloko-icon bloko-icon_initial-{{nextYearArrowKind}} bloko-icon_chevron-right"></span>\n            </span>\n        </span>\n    </div>\n\n    <div class="bloko-calendar__base">\n        <div class="bloko-calendar__weekdays">\n            {{#weekdays}}\n                <span class="bloko-calendar__weekday Bloko-Calendar-Weekday">\n                    {{.}}\n                </span>\n            {{/weekdays}}\n        </div>\n\n        <div class="bloko-calendar__days Bloko-Calendar-Dates">\n            {{#days}}\n                <span\n                    class="bloko-calendar__day Bloko-Calendar-Date Bloko-Calendar-CurrentMonthDay"\n                    data-date="{{dayNumber}}"\n                    data-month="{{month}}"\n                    data-year="{{year}}"\n                    data-qa="{{iso}}{{#disabled}}-disabled{{/disabled}}"\n                >\n                    {{dayNumber}}\n                </span>\n            {{/days}}\n        </div>\n    </div>\n\n</div>\n',
        n,
      );
    },
    494226: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (
              n.s(n.d("components.tagList", e, t, 1), e, t, 0, 23, 49, "{{ }}")
            ) {
              n.rs(e, t, function (e, t, o) {
                o.b(o.rp("<tagListTemplate0", e, t, "    "));
              });
              e.pop();
            }
            if (
              n.s(
                n.d("components.nestedTagList", e, t, 1),
                e,
                t,
                0,
                102,
                134,
                "{{ }}",
              )
            ) {
              n.rs(e, t, function (e, t, o) {
                o.b(o.rp("<nestedTagListTemplate1", e, t, "    "));
              });
              e.pop();
            }
            if (
              n.s(
                n.d("components.suggest", e, t, 1),
                e,
                t,
                0,
                187,
                213,
                "{{ }}",
              )
            ) {
              n.rs(e, t, function (e, t, o) {
                o.b(o.rp("<suggestTemplate2", e, t, "    "));
              });
              e.pop();
            }
            if (!n.s(n.d("components.suggest", e, t, 1), e, t, 1, 0, 0, "")) {
              if (
                n.s(
                  n.d("components.treeSelectorPopup", e, t, 1),
                  e,
                  t,
                  0,
                  298,
                  342,
                  "{{ }}",
                )
              ) {
                n.rs(e, t, function (e, t, o) {
                  o.b(o.rp("<treeSelectorPopupTemplate3", e, t, "        "));
                });
                e.pop();
              }
            }
            return n.fl();
          },
          partials: {
            "<tagListTemplate0": {
              name: "tagListTemplate",
              partials: {},
              subs: {},
            },
            "<nestedTagListTemplate1": {
              name: "nestedTagListTemplate",
              partials: {},
              subs: {},
            },
            "<suggestTemplate2": {
              name: "suggestTemplate",
              partials: {},
              subs: {},
            },
            "<treeSelectorPopupTemplate3": {
              name: "treeSelectorPopupTemplate",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        "{{#components.tagList}}\n    {{>tagListTemplate}}\n{{/components.tagList}}\n{{#components.nestedTagList}}\n    {{>nestedTagListTemplate}}\n{{/components.nestedTagList}}\n{{#components.suggest}}\n    {{>suggestTemplate}}\n{{/components.suggest}}\n{{^components.suggest}}\n    {{#components.treeSelectorPopup}}\n        {{>treeSelectorPopupTemplate}}\n    {{/components.treeSelectorPopup}}\n{{/components.suggest}}\n",
        n,
      );
    },
    105650: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="Bloko-CompositeSelection-NestedTagList"></div>');
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="Bloko-CompositeSelection-NestedTagList"></div>\n',
        n,
      );
    },
    153623: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<div class="bloko-input-text-wrapper bloko-input-text-wrapper_icon-right">',
            );
            n.b("\n" + o);
            n.b('    <input class="bloko-input-text');
            n.b("\n" + o);
            n.b('                  Bloko-CompositeSelection-Suggest"');
            n.b("\n" + o);
            n.b('           type="text"');
            n.b("\n" + o);
            n.b('           autocomplete="false"/>');
            n.b("\n" + o);
            if (
              n.s(
                n.d("components.treeSelectorPopup", e, t, 1),
                e,
                t,
                0,
                256,
                547,
                "{{ }}",
              )
            ) {
              n.rs(e, t, function (e, t, n) {
                n.b('        <span class="bloko-icon-dynamic">');
                n.b("\n" + o);
                n.b('            <button type="button"');
                n.b("\n" + o);
                n.b(
                  '                    class="bloko-icon-link Bloko-CompositeSelection-SuggestIcon Bloko-CompositeSelection-TreeSelectorPopup"',
                );
                n.b("\n" + o);
                n.b('                    title="');
                n.b(n.v(n.d("trl.treeSelectorPopupOpener", e, t, 0)));
                n.b('"></button>');
                n.b("\n" + o);
                n.b("        </span>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-input-text-wrapper bloko-input-text-wrapper_icon-right">\n    <input class="bloko-input-text\n                  Bloko-CompositeSelection-Suggest"\n           type="text"\n           autocomplete="false"/>\n    {{#components.treeSelectorPopup}}\n        <span class="bloko-icon-dynamic">\n            <button type="button"\n                    class="bloko-icon-link Bloko-CompositeSelection-SuggestIcon Bloko-CompositeSelection-TreeSelectorPopup"\n                    title="{{trl.treeSelectorPopupOpener}}"></button>\n        </span>\n    {{/components.treeSelectorPopup}}\n</div>\n',
        n,
      );
    },
    223370: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="Bloko-CompositeSelection-TagList"></div>');
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="Bloko-CompositeSelection-TagList"></div>\n',
        n,
      );
    },
    417535: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<button type="button" class="bloko-link_pseudo bloko-link Bloko-CompositeSelection-TreeSelectorPopup">',
            );
            n.b("\n" + o);
            n.b("    ");
            n.b(n.v(n.d("trl.treeSelectorPopupOpener", e, t, 0)));
            n.b("\n" + o);
            n.b("</button>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<button type="button" class="bloko-link_pseudo bloko-link Bloko-CompositeSelection-TreeSelectorPopup">\n    {{trl.treeSelectorPopupOpener}}\n</button>\n',
        n,
      );
    },
    151192: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<div class="bloko-custom-select__select Bloko-CustomSelect" tabindex="0">',
            );
            n.b("\n" + o);
            n.b(
              '    <span class="bloko-custom-select__placeholder Bloko-CustomSelect-Selected">',
            );
            n.b("\n" + o);
            if (n.s(n.f("placeholder", e, t, 1), e, t, 0, 180, 232, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b(o.rp("<customSelectPlaceholder0", e, t, "            "));
              });
              e.pop();
            }
            n.b("    </span>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n" + o);
            n.b(
              '<div class="bloko-custom-select__content g-hidden Bloko-CustomSelect-OptionsContainer" tabindex="0">',
            );
            n.b("\n" + o);
            if (n.s(n.f("search", e, t, 1), e, t, 0, 388, 805, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b(
                  '        <div class="bloko-custom-select__search Bloko-CustomSelect-SearchContainer">',
                );
                n.b("\n" + o);
                n.b(
                  '            <label class="bloko-input-text-wrapper bloko-input-text-wrapper_icon-right Bloko-CustomSelect-SearchIcon">',
                );
                n.b("\n" + o);
                n.b(
                  '                <input class="bloko-input-text Bloko-CustomSelect-Search"',
                );
                n.b("\n" + o);
                n.b('                       placeholder="');
                n.b(n.v(n.f("searchPlaceholder", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('                       type="text"/>');
                n.b("\n" + o);
                n.b("            </label>");
                n.b("\n" + o);
                n.b("        </div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b(
              '    <div class="bloko-custom-select__option-list Bloko-CustomSelect-Options" data-qa="bloko-custom-select-option-list">',
            );
            n.b("\n" + o);
            n.b(n.rp("<customSelectOptions1", e, t, "        "));
            n.b("    </div>");
            n.b("\n" + o);
            n.b(n.rp("<customSelectAfterOptions2", e, t, "    "));
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<customSelectPlaceholder0": {
              name: "customSelectPlaceholder",
              partials: {},
              subs: {},
            },
            "<customSelectOptions1": {
              name: "customSelectOptions",
              partials: {},
              subs: {},
            },
            "<customSelectAfterOptions2": {
              name: "customSelectAfterOptions",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<div class="bloko-custom-select__select Bloko-CustomSelect" tabindex="0">\n    <span class="bloko-custom-select__placeholder Bloko-CustomSelect-Selected">\n        {{# placeholder }}\n            {{> customSelectPlaceholder }}\n        {{/ placeholder }}\n    </span>\n</div>\n<div class="bloko-custom-select__content g-hidden Bloko-CustomSelect-OptionsContainer" tabindex="0">\n    {{# search }}\n        <div class="bloko-custom-select__search Bloko-CustomSelect-SearchContainer">\n            <label class="bloko-input-text-wrapper bloko-input-text-wrapper_icon-right Bloko-CustomSelect-SearchIcon">\n                <input class="bloko-input-text Bloko-CustomSelect-Search"\n                       placeholder="{{ searchPlaceholder }}"\n                       type="text"/>\n            </label>\n        </div>\n    {{/ search }}\n    <div class="bloko-custom-select__option-list Bloko-CustomSelect-Options" data-qa="bloko-custom-select-option-list">\n        {{> customSelectOptions }}\n    </div>\n    {{> customSelectAfterOptions}}\n</div>\n',
        n,
      );
    },
    62374: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(n.v(n.f("text", e, t, 0)));
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        "{{ text }}\n",
        n,
      );
    },
    772151: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.f("options", e, t, 1), e, t, 0, 14, 531, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                if (n.s(n.f("data", e, t, 1), e, t, 0, 30, 519, "{{ }}")) {
                  n.rs(e, t, function (e, t, n) {
                    n.b('        <div class="bloko-select-dropdown-option');
                    n.b("\n" + o);
                    n.b("                    Bloko-CustomSelect-OptionItem");
                    n.b("\n" + o);
                    if (
                      n.s(n.f("selected", e, t, 1), e, t, 0, 165, 248, "{{ }}")
                    ) {
                      n.rs(e, t, function (e, t, n) {
                        n.b(
                          "                        bloko-select-dropdown-option_selected",
                        );
                        n.b("\n" + o);
                      });
                      e.pop();
                    }
                    if (
                      n.s(n.f("disabled", e, t, 1), e, t, 0, 299, 444, "{{ }}")
                    ) {
                      n.rs(e, t, function (e, t, n) {
                        n.b(
                          "                        bloko-select-dropdown-option_disabled",
                        );
                        n.b("\n" + o);
                        n.b(
                          "                        Bloko-CustomSelect-OptionItemDisabled",
                        );
                        n.b("\n" + o);
                        n.b("                    ");
                      });
                      e.pop();
                    }
                    n.b('">');
                    n.b("\n" + o);
                    n.b(n.rp("<customSelectOption0", e, t, "             "));
                    n.b("        </div>");
                    n.b("\n" + o);
                  });
                  e.pop();
                }
              });
              e.pop();
            }
            return n.fl();
          },
          partials: {
            "<customSelectOption0": {
              name: "customSelectOption",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '{{# options }}\n    {{# data }}\n        <div class="bloko-select-dropdown-option\n                    Bloko-CustomSelect-OptionItem\n                    {{# selected }}\n                        bloko-select-dropdown-option_selected\n                    {{/ selected }}\n                    {{# disabled }}\n                        bloko-select-dropdown-option_disabled\n                        Bloko-CustomSelect-OptionItemDisabled\n                    {{/ disabled }}">\n             {{> customSelectOption}}\n        </div>\n    {{/ data }}\n{{/ options }}\n',
        n,
      );
    },
    428300: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(n.v(n.f("text", e, t, 0)));
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        "{{ text }}\n",
        n,
      );
    },
    479658: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<div class="Bloko-Drop-Down bloko-drop bloko-drop_down bloko-drop_theme-light ',
            );
            n.b(n.v(n.f("flexible", e, t, 0)));
            n.b(" ");
            n.b(n.v(n.f("placement", e, t, 0)));
            n.b(" ");
            n.b(n.v(n.f("layer", e, t, 0)));
            n.b('" data-qa="');
            n.b(n.v(n.f("dataQa", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-drop__padding-wrapper bloko-drop__padding-wrapper_down">',
            );
            n.b("\n" + o);
            if (n.s(n.f("title", e, t, 1), e, t, 0, 235, 625, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('            <div class="bloko-drop__title">');
                n.b("\n" + o);
                n.b('                <div class="bloko-drop__title-text">');
                n.b(n.v(n.f("title", e, t, 0)));
                n.b("</div>");
                n.b("\n" + o);
                n.b('                <div class="bloko-drop__close">');
                n.b("\n" + o);
                n.b(
                  '                    <button type="button" class="bloko-icon-link Bloko-Drop-TitleIconClose Bloko-Drop-Close" data-qa="bloko-drop-down-close-button">',
                );
                n.b("\n" + o);
                n.b("                    </button>");
                n.b("\n" + o);
                n.b("                </div>");
                n.b("\n" + o);
                n.b("            </div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b('        <div class="bloko-drop__content-wrapper">');
            n.b("\n" + o);
            n.b(
              '            <div class="Bloko-Drop-Down-Content bloko-drop__content"></div>',
            );
            n.b("\n" + o);
            if (
              n.s(
                n.d("templateData.showCloseButton", e, t, 1),
                e,
                t,
                0,
                807,
                1048,
                "{{ }}",
              )
            ) {
              n.rs(e, t, function (e, t, n) {
                n.b('                <div class="bloko-drop__close">');
                n.b("\n" + o);
                n.b(
                  '                    <button type="button" class="bloko-icon-link Bloko-Drop-BodyIconClose Bloko-Drop-Close" data-qa="bloko-drop-down-close-button"></button>',
                );
                n.b("\n" + o);
                n.b("                </div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("        </div>");
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="Bloko-Drop-Down bloko-drop bloko-drop_down bloko-drop_theme-light {{flexible}} {{placement}} {{layer}}" data-qa="{{dataQa}}">\n    <div class="bloko-drop__padding-wrapper bloko-drop__padding-wrapper_down">\n        {{#title}}\n            <div class="bloko-drop__title">\n                <div class="bloko-drop__title-text">{{title}}</div>\n                <div class="bloko-drop__close">\n                    <button type="button" class="bloko-icon-link Bloko-Drop-TitleIconClose Bloko-Drop-Close" data-qa="bloko-drop-down-close-button">\n                    </button>\n                </div>\n            </div>\n        {{/title}}\n        <div class="bloko-drop__content-wrapper">\n            <div class="Bloko-Drop-Down-Content bloko-drop__content"></div>\n            {{#templateData.showCloseButton}}\n                <div class="bloko-drop__close">\n                    <button type="button" class="bloko-icon-link Bloko-Drop-BodyIconClose Bloko-Drop-Close" data-qa="bloko-drop-down-close-button"></button>\n                </div>\n            {{/templateData.showCloseButton}}\n        </div>\n    </div>\n</div>\n',
        n,
      );
    },
    219965: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-drop Bloko-Info ');
            n.b(n.v(n.f("cssClasses", e, t, 0)));
            n.b(" ");
            n.b(n.v(n.f("flexible", e, t, 0)));
            n.b(" ");
            n.b(n.v(n.f("placement", e, t, 0)));
            n.b(" ");
            n.b(n.v(n.f("layer", e, t, 0)));
            n.b('" data-qa="');
            n.b(n.v(n.f("dataQa", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-drop__padding-wrapper bloko-drop__padding-wrapper_info">',
            );
            n.b("\n" + o);
            n.b('        <div class="bloko-drop__content-wrapper">');
            n.b("\n" + o);
            n.b(
              '            <div class="Bloko-Info-Content bloko-drop__content"></div>',
            );
            n.b("\n" + o);
            if (
              n.s(
                n.d("templateData.showCloseButton", e, t, 1),
                e,
                t,
                0,
                354,
                616,
                "{{ }}",
              )
            ) {
              n.rs(e, t, function (e, t, n) {
                n.b('                <div class="bloko-drop__close">');
                n.b("\n" + o);
                n.b(
                  '                    <button type="button" class="bloko-icon-link Bloko-Drop-BodyIconClose Bloko-Drop-Close" data-qa="bloko-drop-info-close-button">',
                );
                n.b("\n" + o);
                n.b("                    </button>");
                n.b("\n" + o);
                n.b("                </div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("        </div>");
            n.b("\n" + o);
            n.b('        <div class="bloko-drop__arrow Bloko-Info-Arrow" />');
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-drop Bloko-Info {{cssClasses}} {{flexible}} {{placement}} {{layer}}" data-qa="{{dataQa}}">\n    <div class="bloko-drop__padding-wrapper bloko-drop__padding-wrapper_info">\n        <div class="bloko-drop__content-wrapper">\n            <div class="Bloko-Info-Content bloko-drop__content"></div>\n            {{#templateData.showCloseButton}}\n                <div class="bloko-drop__close">\n                    <button type="button" class="bloko-icon-link Bloko-Drop-BodyIconClose Bloko-Drop-Close" data-qa="bloko-drop-info-close-button">\n                    </button>\n                </div>\n            {{/templateData.showCloseButton}}\n        </div>\n        <div class="bloko-drop__arrow Bloko-Info-Arrow" />\n    </div>\n</div>\n',
        n,
      );
    },
    271611: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div data-qa="');
            n.b(n.v(n.f("dataQa", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b('    <div class="bloko-info-inline ');
            n.b(n.v(n.f("withPointer", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '        <div class="bloko-info-inline__content Bloko-InfoInline-Content ',
            );
            n.b(n.v(n.f("closeButton", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            if (
              n.s(n.f("showCloseButton", e, t, 1), e, t, 0, 197, 489, "{{ }}")
            ) {
              n.rs(e, t, function (e, t, n) {
                n.b('            <div class="bloko-info-inline__close">');
                n.b("\n" + o);
                n.b('                <span class="bloko-icon-dynamic">');
                n.b("\n" + o);
                n.b(
                  '                    <button type="button" class="bloko-icon-link Bloko-Drop-BodyIconClose Bloko-Drop-Close">',
                );
                n.b("\n" + o);
                n.b("                    </button>");
                n.b("\n" + o);
                n.b("                </span>");
                n.b("\n" + o);
                n.b("            </div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("        </div>");
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div data-qa="{{dataQa}}">\n    <div class="bloko-info-inline {{withPointer}}">\n        <div class="bloko-info-inline__content Bloko-InfoInline-Content {{closeButton}}">\n        {{#showCloseButton}}\n            <div class="bloko-info-inline__close">\n                <span class="bloko-icon-dynamic">\n                    <button type="button" class="bloko-icon-link Bloko-Drop-BodyIconClose Bloko-Drop-Close">\n                    </button>\n                </span>\n            </div>\n        {{/showCloseButton}}\n        </div>\n    </div>\n</div>\n',
        n,
      );
    },
    288536: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<div class="Bloko-DropMenu bloko-drop bloko-drop_menu bloko-drop_theme-light ',
            );
            n.b(n.v(n.f("flexible", e, t, 0)));
            n.b(" ");
            n.b(n.v(n.f("placement", e, t, 0)));
            n.b(" ");
            n.b(n.v(n.f("layer", e, t, 0)));
            n.b('" data-qa="');
            n.b(n.v(n.f("dataQa", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '    <div class="Bloko-DropMenu-Content bloko-drop__padding-wrapper bloko-drop__padding-wrapper_menu">',
            );
            n.b("\n" + o);
            if (n.s(n.f("title", e, t, 1), e, t, 0, 257, 742, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('            <div class="bloko-drop__title">');
                n.b("\n" + o);
                n.b('                <div class="bloko-drop__title-text">');
                n.b(n.v(n.f("title", e, t, 0)));
                n.b("</div>");
                n.b("\n" + o);
                n.b('                <div class="bloko-drop__close">');
                n.b("\n" + o);
                n.b(
                  '                    <button type="button" class="bloko-icon-link Bloko-Drop-Close" data-qa="bloko-drop-down-close-button">',
                );
                n.b("\n" + o);
                n.b(
                  '                        <span class="bloko-icon bloko-icon_cancel bloko-icon_initial-default bloko-icon_size-24"></span>',
                );
                n.b("\n" + o);
                n.b("                    </button>");
                n.b("\n" + o);
                n.b("                </div>");
                n.b("\n" + o);
                n.b("            </div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="Bloko-DropMenu bloko-drop bloko-drop_menu bloko-drop_theme-light {{flexible}} {{placement}} {{layer}}" data-qa="{{dataQa}}">\n    <div class="Bloko-DropMenu-Content bloko-drop__padding-wrapper bloko-drop__padding-wrapper_menu">\n        {{#title}}\n            <div class="bloko-drop__title">\n                <div class="bloko-drop__title-text">{{title}}</div>\n                <div class="bloko-drop__close">\n                    <button type="button" class="bloko-icon-link Bloko-Drop-Close" data-qa="bloko-drop-down-close-button">\n                        <span class="bloko-icon bloko-icon_cancel bloko-icon_initial-default bloko-icon_size-24"></span>\n                    </button>\n                </div>\n            </div>\n        {{/title}}\n    </div>\n</div>\n',
        n,
      );
    },
    227793: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="Bloko-Tip bloko-drop bloko-drop_tip ');
            n.b(n.v(n.f("placement", e, t, 0)));
            n.b(" ");
            n.b(n.v(n.f("theme", e, t, 0)));
            n.b(" ");
            n.b(n.v(n.f("layer", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b('    <div class="Bloko-Tip-Content" ');
            if (n.s(n.f("dataQa", e, t, 1), e, t, 0, 130, 150, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b('data-qa="');
                o.b(o.v(o.f("dataQa", e, t, 0)));
                o.b('"');
              });
              e.pop();
            }
            n.b("></div>");
            n.b("\n" + o);
            n.b('    <div class="Bloko-Tip-Arrow bloko-drop__arrow"></div>');
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="Bloko-Tip bloko-drop bloko-drop_tip {{placement}} {{theme}} {{layer}}">\n    <div class="Bloko-Tip-Content" {{#dataQa}}data-qa="{{dataQa}}"{{/dataQa}}></div>\n    <div class="Bloko-Tip-Arrow bloko-drop__arrow"></div>\n</div>\n',
        n,
      );
    },
    334036: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<div class="bloko-control-group bloko-control-group_auto-size">',
            );
            n.b("\n" + o);
            n.b('    <div class="bloko-control-group__content-sized">');
            n.b("\n" + o);
            n.b(
              '        <button class="bloko-button bloko-button_icon-only Bloko-IncrementalNumericInput-Minus" type="button">',
            );
            n.b("\n" + o);
            n.b(
              '            <span class="bloko-button__icon Bloko-IncrementalNumericInput-MinusIcon"></span>',
            );
            n.b("\n" + o);
            n.b("        </button>");
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-control-group__content-sized Bloko-IncrementalNumericInput-InputContainer"></div>',
            );
            n.b("\n" + o);
            n.b('    <div class="bloko-control-group__content-sized">');
            n.b("\n" + o);
            n.b(
              '        <button class="bloko-button bloko-button_icon-only Bloko-IncrementalNumericInput-Plus" type="button">',
            );
            n.b("\n" + o);
            n.b(
              '            <span class="bloko-button__icon Bloko-IncrementalNumericInput-PlusIcon"></span>',
            );
            n.b("\n" + o);
            n.b("        </button>");
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-control-group bloko-control-group_auto-size">\n    <div class="bloko-control-group__content-sized">\n        <button class="bloko-button bloko-button_icon-only Bloko-IncrementalNumericInput-Minus" type="button">\n            <span class="bloko-button__icon Bloko-IncrementalNumericInput-MinusIcon"></span>\n        </button>\n    </div>\n    <div class="bloko-control-group__content-sized Bloko-IncrementalNumericInput-InputContainer"></div>\n    <div class="bloko-control-group__content-sized">\n        <button class="bloko-button bloko-button_icon-only Bloko-IncrementalNumericInput-Plus" type="button">\n            <span class="bloko-button__icon Bloko-IncrementalNumericInput-PlusIcon"></span>\n        </button>\n    </div>\n</div>\n',
        n,
      );
    },
    299514: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<div class="bloko-modal-container" data-attach="modal-container" data-qa="bloko-modal">',
            );
            n.b("\n" + o);
            n.b('    <div class="bloko-modal" data-attach="modal"></div>');
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-modal-close-button Bloko-Modal-CloseButton" data-qa="bloko-modal-close"></div>',
            );
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-modal-container" data-attach="modal-container" data-qa="bloko-modal">\n    <div class="bloko-modal" data-attach="modal"></div>\n    <div class="bloko-modal-close-button Bloko-Modal-CloseButton" data-qa="bloko-modal-close"></div>\n</div>\n',
        n,
      );
    },
    68688: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<div class="bloko-modal-error Bloko-ModalError-Error bloko-modal-error_hidden">',
            );
            n.b(n.v(n.f("message", e, t, 0)));
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-modal-error Bloko-ModalError-Error bloko-modal-error_hidden">{{message}}</div>\n',
        n,
      );
    },
    504481: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-modal-overlay"></div>');
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-modal-overlay"></div>\n',
        n,
      );
    },
    77869: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-notification ');
            if (n.s(n.f("type", e, t, 1), e, t, 0, 40, 68, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b(" bloko-notification_");
                o.b(o.v(o.f("type", e, t, 0)));
              });
              e.pop();
            }
            n.b('" data-qa="notification">');
            n.b("\n" + o);
            n.b('    <div class="bloko-notification__wrapper">');
            n.b("\n" + o);
            n.b('        <div class="bloko-notification__plate">');
            n.b("\n" + o);
            n.b(
              '            <div class="bloko-notification__icon Bloko-Notification-Icon"></div>',
            );
            n.b("\n" + o);
            n.b('            <div class="bloko-notification__body">');
            n.b("\n" + o);
            n.b(
              '                <div class="bloko-notification__content Bloko-Notification-Content"></div>',
            );
            n.b("\n" + o);
            n.b(
              '                <div class="Bloko-Notification-Close bloko-notification__close"',
            );
            n.b("\n" + o);
            n.b('                      data-qa="notification-close-button">');
            n.b("\n" + o);
            n.b(
              '                    <span class="bloko-icon bloko-icon_cancel ',
            );
            if (n.s(n.f("inverted", e, t, 1), e, t, 0, 634, 661, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b("bloko-icon_initial-inverted");
              });
              e.pop();
            }
            n.b('"></span>');
            n.b("\n" + o);
            n.b("                </div>");
            n.b("\n" + o);
            n.b("            </div>");
            n.b("\n" + o);
            n.b("        </div>");
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-notification {{#type}} bloko-notification_{{type}}{{/type}}" data-qa="notification">\n    <div class="bloko-notification__wrapper">\n        <div class="bloko-notification__plate">\n            <div class="bloko-notification__icon Bloko-Notification-Icon"></div>\n            <div class="bloko-notification__body">\n                <div class="bloko-notification__content Bloko-Notification-Content"></div>\n                <div class="Bloko-Notification-Close bloko-notification__close"\n                      data-qa="notification-close-button">\n                    <span class="bloko-icon bloko-icon_cancel {{#inverted}}bloko-icon_initial-inverted{{/inverted}}"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n',
        n,
      );
    },
    351250: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-slider  Bloko-Slider-ScaleLine');
            n.b("\n" + o);
            n.b("            ");
            if (n.s(n.f("hasLabels", e, t, 1), e, t, 0, 75, 100, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b(" bloko-slider_with-labels");
              });
              e.pop();
            }
            n.b("\n" + o);
            n.b("            ");
            if (n.s(n.f("isSecondary", e, t, 1), e, t, 0, 143, 166, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b(" bloko-slider_secondary");
              });
              e.pop();
            }
            n.b('">');
            n.b("\n");
            n.b("\n" + o);
            n.b('    <div class="bloko-slider__active-zone"></div>');
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-slider__range-mark Bloko-Slider-RangeMark"></div>',
            );
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-slider__available-mark Bloko-Slider-AvailableMark"></div>',
            );
            n.b("\n");
            n.b("\n" + o);
            if (n.s(n.f("isRange", e, t, 1), e, t, 0, 405, 520, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b(
                  '        <button type="button" class="bloko-slider__pin bloko-slider__pin_left Bloko-Slider-LeftPin"></button>',
                );
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("\n" + o);
            n.b(
              '    <button type="button" class="bloko-slider__pin bloko-slider__pin_right Bloko-Slider-RightPin"></button>',
            );
            n.b("\n");
            n.b("\n" + o);
            if (n.s(n.f("labels", e, t, 1), e, t, 0, 658, 895, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('        <div class="bloko-slider__label');
                if (!n.s(n.f("available", e, t, 1), e, t, 1, 0, 0, "")) {
                  n.b("\n" + o);
                  n.b("                    bloko-slider__label_unavailable");
                }
                n.b('" style="left: ');
                n.b(n.v(n.f("offset", e, t, 0)));
                n.b('%;">');
                n.b("\n" + o);
                n.b('            <div class="bloko-slider__label-content">');
                n.b(n.v(n.f("text", e, t, 0)));
                n.b("</div>");
                n.b("\n" + o);
                n.b("        </div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("\n" + o);
            if (n.s(n.f("marks", e, t, 1), e, t, 0, 922, 1001, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('        <div class="bloko-slider__mark" style="left: ');
                n.b(n.v(n.f("offset", e, t, 0)));
                n.b('%;"></div>');
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-slider  Bloko-Slider-ScaleLine\n            {{#hasLabels}} bloko-slider_with-labels{{/hasLabels}}\n            {{#isSecondary}} bloko-slider_secondary{{/isSecondary}}">\n\n    <div class="bloko-slider__active-zone"></div>\n    <div class="bloko-slider__range-mark Bloko-Slider-RangeMark"></div>\n    <div class="bloko-slider__available-mark Bloko-Slider-AvailableMark"></div>\n\n    {{#isRange}}\n        <button type="button" class="bloko-slider__pin bloko-slider__pin_left Bloko-Slider-LeftPin"></button>\n    {{/isRange}}\n\n    <button type="button" class="bloko-slider__pin bloko-slider__pin_right Bloko-Slider-RightPin"></button>\n\n    {{#labels}}\n        <div class="bloko-slider__label{{^available}}\n                    bloko-slider__label_unavailable{{/available}}" style="left: {{offset}}%;">\n            <div class="bloko-slider__label-content">{{text}}</div>\n        </div>\n    {{/labels}}\n\n    {{#marks}}\n        <div class="bloko-slider__mark" style="left: {{offset}}%;"></div>\n    {{/marks}}\n</div>\n',
        n,
      );
    },
    975809: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="suggest"></div>');
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="suggest"></div>\n',
        n,
      );
    },
    12684: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(n.v(n.f("text", e, t, 0)));
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        "{{text}}\n",
        n,
      );
    },
    105249: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<ul class="suggest__items Bloko-Suggest-List" data-qa="bloko-suggest-list">',
            );
            n.b("\n" + o);
            if (n.s(n.f("items", e, t, 1), e, t, 0, 86, 202, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('    <li class="suggest__item Bloko-Suggest-Item"');
                n.b("\n" + o);
                n.b('        data-datum-id="');
                n.b(n.v(n.f("datumId", e, t, 0)));
                n.b('">');
                n.b("\n" + o);
                n.b(n.rp("<item0", e, t, "        "));
                n.b("    </li>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("</ul>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<item0": {
              name: "item",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<ul class="suggest__items Bloko-Suggest-List" data-qa="bloko-suggest-list">\n{{#items}}\n    <li class="suggest__item Bloko-Suggest-Item"\n        data-datum-id="{{datumId}}">\n        {{> item}}\n    </li>\n{{/items}}\n</ul>\n',
        n,
      );
    },
    324412: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-tabs-left-glare"></div>');
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-tabs-left-glare"></div>',
        n,
      );
    },
    373714: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<div class="bloko-tabs__icon-container Bloko-Tabs-More-Button">',
            );
            n.b("\n" + o);
            n.b(
              '    <button type="button" class="bloko-icon-link Bloko-Tabs-More-Icon"></button>',
            );
            n.b("\n" + o);
            n.b('    <div class="g-hidden">');
            n.b("\n" + o);
            n.b(
              '        <div class="bloko-tabs__dropdown Bloko-Tabs-Dropdown-Data">',
            );
            n.b("\n" + o);
            if (n.s(n.f("items", e, t, 1), e, t, 0, 262, 298, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b("                ");
                n.b(n.t(n.d(".", e, t, 0)));
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("        </div>");
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-tabs__icon-container Bloko-Tabs-More-Button">\n    <button type="button" class="bloko-icon-link Bloko-Tabs-More-Icon"></button>\n    <div class="g-hidden">\n        <div class="bloko-tabs__dropdown Bloko-Tabs-Dropdown-Data">\n            {{#items}}\n                {{&.}}\n            {{/items}}\n        </div>\n    </div>\n</div>\n',
        n,
      );
    },
    607605: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-tabs-right-glare"></div>');
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-tabs-right-glare"></div>',
        n,
      );
    },
    266308: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-tabs__items"></div>');
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-tabs__items"></div>',
        n,
      );
    },
    950676: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.f("count", e, t, 1), e, t, 0, 10, 196, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('    <span class="bloko-tag__section');
                n.b("\n" + o);
                n.b("                 bloko-tag__section_count");
                n.b("\n" + o);
                n.b('                 Bloko-TagList-Count"');
                n.b("\n" + o);
                n.b('            data-qa="bloko-tag__count"');
                n.b("\n" + o);
                n.b("            >");
                n.b(n.v(n.f("count", e, t, 0)));
                n.b("</span>");
                n.b("\n" + o);
              });
              e.pop();
            }
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '{{#count}}\n    <span class="bloko-tag__section\n                 bloko-tag__section_count\n                 Bloko-TagList-Count"\n            data-qa="bloko-tag__count"\n            >{{count}}</span>\n{{/count}}\n',
        n,
      );
    },
    240428: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.f("items", e, t, 1), e, t, 0, 10, 772, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('    <span class="bloko-tag');
                n.b("\n" + o);
                n.b("                 bloko-tag_inline");
                n.b("\n" + o);
                n.b("                 ");
                if (n.s(n.f("isNew", e, t, 1), e, t, 0, 99, 117, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_animated");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("                 ");
                if (
                  n.s(n.f("stretched", e, t, 1), e, t, 0, 159, 178, "{{ }}")
                ) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_stretched");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("                 ");
                if (n.s(n.f("disabled", e, t, 1), e, t, 0, 223, 241, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_disabled");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("                 bloko-tag_countable");
                n.b("\n" + o);
                n.b('                 Bloko-TagList-Tag"');
                n.b("\n" + o);
                n.b('          data-tag-id="');
                n.b(n.v(n.f("id", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('          data-qa="bloko-tag_inline">');
                n.b("\n" + o);
                if (n.s(n.f("hidden", e, t, 1), e, t, 0, 416, 456, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b(o.rp("<hiddenSection0", e, t, "            "));
                  });
                  e.pop();
                }
                n.b(n.rp("<textSection1", e, t, "        "));
                n.b(n.rp("<countSection2", e, t, "        "));
                if (
                  n.s(n.f("changeable", e, t, 1), e, t, 0, 542, 717, "{{ }}")
                ) {
                  n.rs(e, t, function (e, t, o) {
                    if (
                      o.s(o.f("voted", e, t, 1), e, t, 0, 565, 615, "{{ }}")
                    ) {
                      o.rs(e, t, function (e, t, o) {
                        o.b(
                          o.rp("<decreaseSection3", e, t, "                "),
                        );
                      });
                      e.pop();
                    }
                    if (!o.s(o.f("voted", e, t, 1), e, t, 1, 0, 0, "")) {
                      o.b(o.rp("<increaseSection4", e, t, "                "));
                    }
                  });
                  e.pop();
                }
                n.b(n.rp("<removeSection5", e, t, "        "));
                n.b("    </span>");
                n.b("\n" + o);
              });
              e.pop();
            }
            return n.fl();
          },
          partials: {
            "<hiddenSection0": {
              name: "hiddenSection",
              partials: {},
              subs: {},
            },
            "<textSection1": {
              name: "textSection",
              partials: {},
              subs: {},
            },
            "<countSection2": {
              name: "countSection",
              partials: {},
              subs: {},
            },
            "<decreaseSection3": {
              name: "decreaseSection",
              partials: {},
              subs: {},
            },
            "<increaseSection4": {
              name: "increaseSection",
              partials: {},
              subs: {},
            },
            "<removeSection5": {
              name: "removeSection",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '{{#items}}\n    <span class="bloko-tag\n                 bloko-tag_inline\n                 {{#isNew}}bloko-tag_animated{{/isNew}}\n                 {{#stretched}}bloko-tag_stretched{{/stretched}}\n                 {{#disabled}}bloko-tag_disabled{{/disabled}}\n                 bloko-tag_countable\n                 Bloko-TagList-Tag"\n          data-tag-id="{{id}}"\n          data-qa="bloko-tag_inline">\n        {{#hidden}}\n            {{>hiddenSection}}\n        {{/hidden}}\n        {{>textSection}}\n        {{>countSection}}\n        {{#changeable}}\n            {{#voted}}\n                {{>decreaseSection}}\n            {{/voted}}\n            {{^voted}}\n                {{>increaseSection}}\n            {{/voted}}\n        {{/changeable}}\n        {{>removeSection}}\n    </span>\n{{/items}}\n',
        n,
      );
    },
    771951: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b("<span");
            if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
              n.b(' class="bloko-icon-dynamic"');
            }
            n.b(">");
            n.b("\n" + o);
            n.b(
              '    <button class="bloko-tag-button Bloko-TagList-DecreaseIcon',
            );
            n.b("\n" + o);
            n.b("                   ");
            if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
              n.b("Bloko-TagList-Decrease");
            }
            n.b('"');
            n.b("\n" + o);
            n.b("            ");
            if (n.s(n.f("disabled", e, t, 1), e, t, 0, 217, 236, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b('disabled="disabled"');
              });
              e.pop();
            }
            n.b("\n" + o);
            n.b('            data-qa="bloko-tag__decrease"');
            n.b("\n" + o);
            n.b('            type="button"></button>');
            n.b("\n" + o);
            n.b("</span>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<span{{^disabled}} class="bloko-icon-dynamic"{{/disabled}}>\n    <button class="bloko-tag-button Bloko-TagList-DecreaseIcon\n                   {{^disabled}}Bloko-TagList-Decrease{{/disabled}}"\n            {{#disabled}}disabled="disabled"{{/disabled}}\n            data-qa="bloko-tag__decrease"\n            type="button"></button>\n</span>\n',
        n,
      );
    },
    406914: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.f("editable", e, t, 1), e, t, 0, 13, 1216, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                if (n.s(n.f("edited", e, t, 1), e, t, 0, 25, 686, "{{ }}")) {
                  n.rs(e, t, function (e, t, n) {
                    n.b("<span");
                    if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
                      n.b(' class="bloko-icon-dynamic"');
                    }
                    n.b(">");
                    n.b("\n" + o);
                    n.b('    <button class="bloko-tag-button');
                    n.b("\n" + o);
                    n.b("                   Bloko-TagList-EditControl");
                    n.b("\n" + o);
                    n.b('                   Bloko-TagList-EditCancel"');
                    n.b("\n" + o);
                    n.b('            data-qa="bloko-tag-edit-cancel"');
                    n.b("\n" + o);
                    n.b("            ");
                    if (
                      n.s(n.f("disabled", e, t, 1), e, t, 0, 281, 300, "{{ }}")
                    ) {
                      n.rs(e, t, function (e, t, o) {
                        o.b('disabled="disabled"');
                      });
                      e.pop();
                    }
                    n.b("\n" + o);
                    n.b('            type="button"></button>');
                    n.b("\n" + o);
                    n.b("</span>");
                    n.b("\n" + o);
                    n.b("<span");
                    if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
                      n.b(' class="bloko-icon-dynamic"');
                    }
                    n.b(">");
                    n.b("\n" + o);
                    n.b('    <button class="bloko-tag-button');
                    n.b("\n" + o);
                    n.b("                   Bloko-TagList-EditControl");
                    n.b("\n" + o);
                    n.b('                   Bloko-TagList-EditDone"');
                    n.b("\n" + o);
                    n.b('            data-qa="bloko-tag-edit-done"');
                    n.b("\n" + o);
                    n.b("            ");
                    if (
                      n.s(n.f("disabled", e, t, 1), e, t, 0, 609, 628, "{{ }}")
                    ) {
                      n.rs(e, t, function (e, t, o) {
                        o.b('disabled="disabled"');
                      });
                      e.pop();
                    }
                    n.b("\n" + o);
                    n.b('            type="button"></button>');
                    n.b("\n" + o);
                    n.b("</span>");
                    n.b("\n" + o);
                  });
                  e.pop();
                }
                if (!n.s(n.f("edited", e, t, 1), e, t, 1, 0, 0, "")) {
                  n.b("<span");
                  if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
                    n.b(' class="bloko-icon-dynamic"');
                  }
                  n.b(">");
                  n.b("\n" + o);
                  n.b('    <button class="bloko-tag-button');
                  n.b("\n" + o);
                  n.b('                   Bloko-TagList-EditAction"');
                  n.b("\n" + o);
                  n.b('            data-qa="bloko-tag-edit-action"');
                  n.b("\n" + o);
                  n.b("            ");
                  if (
                    n.s(n.f("disabled", e, t, 1), e, t, 0, 920, 939, "{{ }}")
                  ) {
                    n.rs(e, t, function (e, t, o) {
                      o.b('disabled="disabled"');
                    });
                    e.pop();
                  }
                  n.b("\n" + o);
                  n.b('            type="button">');
                  n.b("\n" + o);
                  n.b('        <span class="bloko-icon');
                  n.b("\n" + o);
                  n.b("                     bloko-icon_edit");
                  n.b("\n" + o);
                  n.b("                     bloko-icon_initial-impact");
                  n.b("\n" + o);
                  n.b("                     ");
                  if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
                    n.b("bloko-icon_highlighted-action");
                  }
                  n.b('"></span>');
                  n.b("\n" + o);
                  n.b("    </button>");
                  n.b("\n" + o);
                  n.b("</span>");
                  n.b("\n" + o);
                }
              });
              e.pop();
            }
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '{{#editable}}\n{{#edited}}\n<span{{^disabled}} class="bloko-icon-dynamic"{{/disabled}}>\n    <button class="bloko-tag-button\n                   Bloko-TagList-EditControl\n                   Bloko-TagList-EditCancel"\n            data-qa="bloko-tag-edit-cancel"\n            {{#disabled}}disabled="disabled"{{/disabled}}\n            type="button"></button>\n</span>\n<span{{^disabled}} class="bloko-icon-dynamic"{{/disabled}}>\n    <button class="bloko-tag-button\n                   Bloko-TagList-EditControl\n                   Bloko-TagList-EditDone"\n            data-qa="bloko-tag-edit-done"\n            {{#disabled}}disabled="disabled"{{/disabled}}\n            type="button"></button>\n</span>\n{{/edited}}\n{{^edited}}\n<span{{^disabled}} class="bloko-icon-dynamic"{{/disabled}}>\n    <button class="bloko-tag-button\n                   Bloko-TagList-EditAction"\n            data-qa="bloko-tag-edit-action"\n            {{#disabled}}disabled="disabled"{{/disabled}}\n            type="button">\n        <span class="bloko-icon\n                     bloko-icon_edit\n                     bloko-icon_initial-impact\n                     {{^disabled}}bloko-icon_highlighted-action{{/disabled}}"></span>\n    </button>\n</span>\n{{/edited}}\n{{/editable}}\n',
        n,
      );
    },
    256496: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.f("editable", e, t, 1), e, t, 0, 13, 288, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                if (n.s(n.f("edited", e, t, 1), e, t, 0, 25, 276, "{{ }}")) {
                  n.rs(e, t, function (e, t, n) {
                    n.b(
                      '<span class="bloko-tag__section bloko-tag__section_edit">',
                    );
                    n.b("\n" + o);
                    n.b('    <input type="text"');
                    n.b("\n" + o);
                    n.b(
                      '           class="bloko-input-text bloko-input-text_scale-small Bloko-TagList-EditInput"',
                    );
                    n.b("\n" + o);
                    n.b('           value="');
                    n.b(n.v(n.f("text", e, t, 0)));
                    n.b('"');
                    n.b("\n" + o);
                    n.b('           data-qa="bloko-tag-edit-input"/>');
                    n.b("\n" + o);
                    n.b("</span>");
                    n.b("\n" + o);
                  });
                  e.pop();
                }
              });
              e.pop();
            }
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '{{#editable}}\n{{#edited}}\n<span class="bloko-tag__section bloko-tag__section_edit">\n    <input type="text"\n           class="bloko-input-text bloko-input-text_scale-small Bloko-TagList-EditInput"\n           value="{{text}}"\n           data-qa="bloko-tag-edit-input"/>\n</span>\n{{/edited}}\n{{/editable}}\n',
        n,
      );
    },
    171807: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<input type="hidden"');
            n.b("\n" + o);
            n.b('       class="Bloko-TagList-Value"');
            n.b("\n" + o);
            n.b('       name="');
            n.b(n.v(n.f("hidden", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('       value="');
            n.b(n.v(n.f("hiddenValue", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('       data-tag="hidden-input"/>');
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<input type="hidden"\n       class="Bloko-TagList-Value"\n       name="{{hidden}}"\n       value="{{hiddenValue}}"\n       data-tag="hidden-input"/>\n',
        n,
      );
    },
    693471: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<button class="bloko-tag-button');
            n.b("\n" + o);
            n.b("               bloko-tag-button_increase");
            n.b("\n" + o);
            n.b("               Bloko-TagList-IncreaseIcon");
            n.b("\n" + o);
            n.b("               ");
            if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
              n.b("Bloko-TagList-Increase");
            }
            n.b('"');
            n.b("\n" + o);
            n.b("        ");
            if (n.s(n.f("disabled", e, t, 1), e, t, 0, 201, 220, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b('disabled="disabled"');
              });
              e.pop();
            }
            n.b("\n" + o);
            n.b('        data-qa="bloko-tag__increase"');
            n.b("\n" + o);
            n.b('        type="button"></button>');
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<button class="bloko-tag-button\n               bloko-tag-button_increase\n               Bloko-TagList-IncreaseIcon\n               {{^disabled}}Bloko-TagList-Increase{{/disabled}}"\n        {{#disabled}}disabled="disabled"{{/disabled}}\n        data-qa="bloko-tag__increase"\n        type="button"></button>\n',
        n,
      );
    },
    112210: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.f("items", e, t, 1), e, t, 0, 10, 783, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('<span class="bloko-tag');
                n.b("\n" + o);
                n.b("             ");
                if (n.s(n.f("stretched", e, t, 1), e, t, 0, 61, 80, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_stretched");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("             ");
                if (!n.s(n.f("stretched", e, t, 1), e, t, 1, 0, 0, "")) {
                  n.b("bloko-tag_inline");
                }
                n.b("\n" + o);
                n.b("             ");
                if (n.s(n.f("isNew", e, t, 1), e, t, 0, 176, 194, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_animated");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("             ");
                if (n.s(n.f("selected", e, t, 1), e, t, 0, 231, 249, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_selected");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("             ");
                if (
                  n.s(n.f("selectable", e, t, 1), e, t, 0, 291, 311, "{{ }}")
                ) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_selectable");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("             ");
                if (n.s(n.f("disabled", e, t, 1), e, t, 0, 353, 371, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_disabled");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b('             Bloko-TagList-Tag"');
                n.b("\n" + o);
                n.b('      data-tag-id="');
                n.b(n.v(n.f("id", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('      data-qa="bloko-tag');
                n.b("\n" + o);
                n.b("               bloko-tag_inline");
                n.b("\n" + o);
                n.b("               ");
                if (n.s(n.f("selected", e, t, 1), e, t, 0, 529, 547, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_selected");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("               ");
                if (n.s(n.f("disabled", e, t, 1), e, t, 0, 589, 607, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_disabled");
                  });
                  e.pop();
                }
                n.b('">');
                n.b("\n" + o);
                if (n.s(n.f("hidden", e, t, 1), e, t, 0, 638, 670, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b(o.rp("<hiddenSection0", e, t, "        "));
                  });
                  e.pop();
                }
                n.b(n.rp("<textSection1", e, t, "    "));
                n.b(n.rp("<editableSection2", e, t, "    "));
                n.b(n.rp("<editableAction3", e, t, "    "));
                n.b(n.rp("<removeSection4", e, t, "    "));
                n.b("</span>");
                n.b("\n" + o);
              });
              e.pop();
            }
            return n.fl();
          },
          partials: {
            "<hiddenSection0": {
              name: "hiddenSection",
              partials: {},
              subs: {},
            },
            "<textSection1": {
              name: "textSection",
              partials: {},
              subs: {},
            },
            "<editableSection2": {
              name: "editableSection",
              partials: {},
              subs: {},
            },
            "<editableAction3": {
              name: "editableAction",
              partials: {},
              subs: {},
            },
            "<removeSection4": {
              name: "removeSection",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '{{#items}}\n<span class="bloko-tag\n             {{#stretched}}bloko-tag_stretched{{/stretched}}\n             {{^stretched}}bloko-tag_inline{{/stretched}}\n             {{#isNew}}bloko-tag_animated{{/isNew}}\n             {{#selected}}bloko-tag_selected{{/selected}}\n             {{#selectable}}bloko-tag_selectable{{/selectable}}\n             {{#disabled}}bloko-tag_disabled{{/disabled}}\n             Bloko-TagList-Tag"\n      data-tag-id="{{id}}"\n      data-qa="bloko-tag\n               bloko-tag_inline\n               {{#selected}}bloko-tag_selected{{/selected}}\n               {{#disabled}}bloko-tag_disabled{{/disabled}}">\n    {{#hidden}}\n        {{>hiddenSection}}\n    {{/hidden}}\n    {{>textSection}}\n    {{>editableSection}}\n    {{>editableAction}}\n    {{>removeSection}}\n</span>\n{{/items}}\n',
        n,
      );
    },
    201434: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.f("items", e, t, 1), e, t, 0, 10, 847, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('<div class="bloko-nested-tag');
                n.b("\n" + o);
                n.b("            Bloko-TagList-Tag");
                n.b("\n" + o);
                n.b('            Bloko-TagList-ParentTag"');
                n.b("\n" + o);
                n.b('     data-tag-id="');
                n.b(n.v(n.f("id", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('     data-qa="bloko-tag');
                n.b("\n" + o);
                n.b('              bloko-tag_parent">');
                n.b("\n" + o);
                n.b('    <span class="bloko-tag');
                n.b("\n" + o);
                n.b("                 bloko-tag_parent");
                n.b("\n" + o);
                n.b("                 ");
                if (n.s(n.f("disabled", e, t, 1), e, t, 0, 281, 299, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_disabled");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("                 ");
                if (n.s(n.f("isNew", e, t, 1), e, t, 0, 340, 358, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_animated");
                  });
                  e.pop();
                }
                n.b('">');
                n.b("\n" + o);
                if (
                  n.s(
                    n.f("renderHiddenParentField", e, t, 1),
                    e,
                    t,
                    0,
                    407,
                    499,
                    "{{ }}",
                  )
                ) {
                  n.rs(e, t, function (e, t, o) {
                    if (
                      o.s(o.f("hidden", e, t, 1), e, t, 0, 431, 479, "{{ }}")
                    ) {
                      o.rs(e, t, function (e, t, o) {
                        o.b(o.rp("<hiddenSection0", e, t, "                "));
                      });
                      e.pop();
                    }
                  });
                  e.pop();
                }
                n.b(n.rp("<textSection1", e, t, "        "));
                n.b(n.rp("<removeSection2", e, t, "        "));
                n.b("    </span>");
                n.b("\n" + o);
                if (
                  n.s(n.d("items.length", e, t, 1), e, t, 0, 613, 822, "{{ }}")
                ) {
                  n.rs(e, t, function (e, t, n) {
                    n.b('    <div class="bloko-nested-tag__children');
                    n.b("\n" + o);
                    n.b("                ");
                    if (
                      n.s(n.f("expanded", e, t, 1), e, t, 0, 686, 720, "{{ }}")
                    ) {
                      n.rs(e, t, function (e, t, o) {
                        o.b("bloko-nested-tag__children_visible");
                      });
                      e.pop();
                    }
                    n.b("\n" + o);
                    n.b('                Bloko-TagList-Children">');
                    n.b("\n" + o);
                    n.b(n.rp("<nestedChildSection3", e, t, "        "));
                    n.b("    </div>");
                    n.b("\n" + o);
                  });
                  e.pop();
                }
                n.b("</div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            return n.fl();
          },
          partials: {
            "<hiddenSection0": {
              name: "hiddenSection",
              partials: {},
              subs: {},
            },
            "<textSection1": {
              name: "textSection",
              partials: {},
              subs: {},
            },
            "<removeSection2": {
              name: "removeSection",
              partials: {},
              subs: {},
            },
            "<nestedChildSection3": {
              name: "nestedChildSection",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '{{#items}}\n<div class="bloko-nested-tag\n            Bloko-TagList-Tag\n            Bloko-TagList-ParentTag"\n     data-tag-id="{{id}}"\n     data-qa="bloko-tag\n              bloko-tag_parent">\n    <span class="bloko-tag\n                 bloko-tag_parent\n                 {{#disabled}}bloko-tag_disabled{{/disabled}}\n                 {{#isNew}}bloko-tag_animated{{/isNew}}">\n        {{#renderHiddenParentField}}\n            {{#hidden}}\n                {{>hiddenSection}}\n            {{/hidden}}\n        {{/renderHiddenParentField}}\n        {{>textSection}}\n        {{>removeSection}}\n    </span>\n    {{#items.length}}\n    <div class="bloko-nested-tag__children\n                {{#expanded}}bloko-nested-tag__children_visible{{/expanded}}\n                Bloko-TagList-Children">\n        {{>nestedChildSection}}\n    </div>\n    {{/items.length}}\n</div>\n{{/items}}\n',
        n,
      );
    },
    755365: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.f("items", e, t, 1), e, t, 0, 10, 658, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('<div class="bloko-tag');
                n.b("\n" + o);
                n.b("            bloko-tag_child");
                n.b("\n" + o);
                n.b("            ");
                if (n.s(n.f("disabled", e, t, 1), e, t, 0, 86, 104, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_disabled");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b("            ");
                if (n.s(n.f("isNew", e, t, 1), e, t, 0, 140, 158, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    o.b("bloko-tag_animated");
                  });
                  e.pop();
                }
                n.b("\n" + o);
                n.b('            Bloko-TagList-Tag"');
                n.b("\n" + o);
                n.b('     data-tag-id="');
                n.b(n.v(n.f("id", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('     data-qa="bloko-tag');
                n.b("\n" + o);
                n.b('              bloko-tag_child">');
                n.b("\n" + o);
                if (n.s(n.f("hidden", e, t, 1), e, t, 0, 297, 383, "{{ }}")) {
                  n.rs(e, t, function (e, t, o) {
                    if (!o.s(o.f("childHidden", e, t, 1), e, t, 1, 0, 0, "")) {
                      o.b(o.rp("<hiddenSection0", e, t, "            "));
                    }
                  });
                  e.pop();
                }
                n.b(n.rp("<textSection1", e, t, "    "));
                n.b(n.rp("<removeSection2", e, t, "    "));
                if (
                  n.s(n.f("childHidden", e, t, 1), e, t, 0, 459, 634, "{{ }}")
                ) {
                  n.rs(e, t, function (e, t, n) {
                    n.b('    <input class="Bloko-TagList-Value"');
                    n.b("\n" + o);
                    n.b('           type="hidden"');
                    n.b("\n" + o);
                    n.b('           name="');
                    n.b(n.v(n.f("childHidden", e, t, 0)));
                    n.b('"');
                    n.b("\n" + o);
                    n.b('           value="');
                    n.b(n.v(n.f("hiddenValue", e, t, 0)));
                    n.b('"');
                    n.b("\n" + o);
                    n.b('           data-tag="hidden-input"/>');
                    n.b("\n" + o);
                  });
                  e.pop();
                }
                n.b("</div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            return n.fl();
          },
          partials: {
            "<hiddenSection0": {
              name: "hiddenSection",
              partials: {},
              subs: {},
            },
            "<textSection1": {
              name: "textSection",
              partials: {},
              subs: {},
            },
            "<removeSection2": {
              name: "removeSection",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '{{#items}}\n<div class="bloko-tag\n            bloko-tag_child\n            {{#disabled}}bloko-tag_disabled{{/disabled}}\n            {{#isNew}}bloko-tag_animated{{/isNew}}\n            Bloko-TagList-Tag"\n     data-tag-id="{{id}}"\n     data-qa="bloko-tag\n              bloko-tag_child">\n    {{#hidden}}\n        {{^childHidden}}\n            {{>hiddenSection}}\n        {{/childHidden}}\n    {{/hidden}}\n    {{>textSection}}\n    {{>removeSection}}\n    {{#childHidden}}\n    <input class="Bloko-TagList-Value"\n           type="hidden"\n           name="{{childHidden}}"\n           value="{{hiddenValue}}"\n           data-tag="hidden-input"/>\n    {{/childHidden}}\n</div>\n{{/items}}\n',
        n,
      );
    },
    26016: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.f("removable", e, t, 1), e, t, 0, 14, 298, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                if (!n.s(n.f("edited", e, t, 1), e, t, 1, 0, 0, "")) {
                  n.b("<span");
                  if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
                    n.b(' class="bloko-icon-dynamic"');
                  }
                  n.b(">");
                  n.b("\n" + o);
                  n.b(
                    '    <button class="bloko-tag-button Bloko-TagList-Remove"',
                  );
                  n.b("\n" + o);
                  n.b('            data-qa="bloko-tag__cross"');
                  n.b("\n" + o);
                  n.b("            ");
                  if (
                    n.s(n.f("disabled", e, t, 1), e, t, 0, 209, 228, "{{ }}")
                  ) {
                    n.rs(e, t, function (e, t, o) {
                      o.b('disabled="disabled"');
                    });
                    e.pop();
                  }
                  n.b("\n" + o);
                  n.b('            type="button"></button>');
                  n.b("\n" + o);
                  n.b("</span>");
                  n.b("\n" + o);
                }
              });
              e.pop();
            }
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '{{#removable}}\n{{^edited}}\n<span{{^disabled}} class="bloko-icon-dynamic"{{/disabled}}>\n    <button class="bloko-tag-button Bloko-TagList-Remove"\n            data-qa="bloko-tag__cross"\n            {{#disabled}}disabled="disabled"{{/disabled}}\n            type="button"></button>\n</span>\n{{/edited}}\n{{/removable}}\n',
        n,
      );
    },
    523136: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            if (n.s(n.d("items.length", e, t, 1), e, t, 0, 17, 622, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                if (!n.s(n.f("edited", e, t, 1), e, t, 1, 0, 0, "")) {
                  n.b('    <button class="bloko-tag__section');
                  n.b("\n" + o);
                  n.b("                   bloko-tag__section_text");
                  n.b("\n" + o);
                  if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
                    n.b("                       bloko-tag__section_active");
                    n.b("\n" + o);
                    n.b("                       Bloko-TagList-Expand");
                    n.b("\n" + o);
                  }
                  n.b("                   Bloko-TagList-ExpandedIcon");
                  n.b("\n" + o);
                  n.b('                   Bloko-TagList-SectionText"');
                  n.b("\n" + o);
                  n.b("            ");
                  if (
                    n.s(n.f("disabled", e, t, 1), e, t, 0, 387, 406, "{{ }}")
                  ) {
                    n.rs(e, t, function (e, t, o) {
                      o.b('disabled="disabled"');
                    });
                    e.pop();
                  }
                  n.b("\n" + o);
                  n.b('            type="button">');
                  n.b("\n" + o);
                  n.b('        <span class="Bloko-TagList-Text"');
                  n.b("\n" + o);
                  n.b('              data-qa="bloko-tag__text');
                  if (
                    n.s(n.f("selectable", e, t, 1), e, t, 0, 541, 563, "{{ }}")
                  ) {
                    n.rs(e, t, function (e, t, o) {
                      o.b(" bloko-tag__selectable");
                    });
                    e.pop();
                  }
                  n.b('">');
                  n.b(n.v(n.f("text", e, t, 0)));
                  n.b("</span>");
                  n.b("\n" + o);
                  n.b("    </button>");
                  n.b("\n" + o);
                }
              });
              e.pop();
            }
            if (
              !n.s(n.d("items.length", e, t, 1), e, t, 1, 0, 0, "") &&
              !n.s(n.f("edited", e, t, 1), e, t, 1, 0, 0, "")
            ) {
              if (!n.s(n.f("selectable", e, t, 1), e, t, 1, 0, 0, "")) {
                n.b('        <span class="bloko-tag__section');
                n.b("\n" + o);
                n.b("                     bloko-tag__section_text");
                n.b("\n" + o);
                n.b('                     Bloko-TagList-SectionText">');
                n.b("\n" + o);
              }
              if (
                n.s(n.f("selectable", e, t, 1), e, t, 0, 863, 1223, "{{ }}")
              ) {
                n.rs(e, t, function (e, t, n) {
                  n.b('        <button class="bloko-tag__section');
                  n.b("\n" + o);
                  n.b("                       bloko-tag__section_text");
                  n.b("\n" + o);
                  n.b("                       ");
                  if (!n.s(n.f("disabled", e, t, 1), e, t, 1, 0, 0, "")) {
                    n.b("bloko-tag__section_active");
                  }
                  n.b("\n" + o);
                  n.b("                       Bloko-TagList-Selectable");
                  n.b("\n" + o);
                  n.b('                       Bloko-TagList-SectionText"');
                  n.b("\n" + o);
                  n.b("                ");
                  if (
                    n.s(n.f("disabled", e, t, 1), e, t, 0, 1155, 1174, "{{ }}")
                  ) {
                    n.rs(e, t, function (e, t, o) {
                      o.b('disabled="disabled"');
                    });
                    e.pop();
                  }
                  n.b("\n" + o);
                  n.b('                type="button">');
                  n.b("\n" + o);
                });
                e.pop();
              }
              n.b('        <span class="Bloko-TagList-Text"');
              n.b("\n" + o);
              n.b('              data-qa="bloko-tag__text');
              if (
                n.s(n.f("selectable", e, t, 1), e, t, 0, 1333, 1355, "{{ }}")
              ) {
                n.rs(e, t, function (e, t, o) {
                  o.b(" bloko-tag__selectable");
                });
                e.pop();
              }
              n.b('">');
              n.b(n.rp("<textTemplate0", e, t, ""));
              n.b("</span>");
              n.b("\n" + o);
              if (
                n.s(n.f("selectable", e, t, 1), e, t, 0, 1416, 1439, "{{ }}")
              ) {
                n.rs(e, t, function (e, t, n) {
                  n.b("        </button>");
                  n.b("\n" + o);
                });
                e.pop();
              }
              if (!n.s(n.f("selectable", e, t, 1), e, t, 1, 0, 0, "")) {
                n.b("        </span>");
                n.b("\n" + o);
              }
            }
            return n.fl();
          },
          partials: {
            "<textTemplate0": {
              name: "textTemplate",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '{{#items.length}}\n{{^edited}}\n    <button class="bloko-tag__section\n                   bloko-tag__section_text\n                   {{^disabled}}\n                       bloko-tag__section_active\n                       Bloko-TagList-Expand\n                   {{/disabled}}\n                   Bloko-TagList-ExpandedIcon\n                   Bloko-TagList-SectionText"\n            {{#disabled}}disabled="disabled"{{/disabled}}\n            type="button">\n        <span class="Bloko-TagList-Text"\n              data-qa="bloko-tag__text{{#selectable}} bloko-tag__selectable{{/selectable}}">{{text}}</span>\n    </button>\n{{/edited}}\n{{/items.length}}\n{{^items.length}}\n{{^edited}}\n    {{^selectable}}\n        <span class="bloko-tag__section\n                     bloko-tag__section_text\n                     Bloko-TagList-SectionText">\n    {{/selectable}}\n    {{#selectable}}\n        <button class="bloko-tag__section\n                       bloko-tag__section_text\n                       {{^disabled}}bloko-tag__section_active{{/disabled}}\n                       Bloko-TagList-Selectable\n                       Bloko-TagList-SectionText"\n                {{#disabled}}disabled="disabled"{{/disabled}}\n                type="button">\n    {{/selectable}}\n        <span class="Bloko-TagList-Text"\n              data-qa="bloko-tag__text{{#selectable}} bloko-tag__selectable{{/selectable}}">{{>textTemplate}}</span>\n    {{#selectable}}\n        </button>\n    {{/selectable}}\n    {{^selectable}}\n        </span>\n    {{/selectable}}\n{{/edited}}\n{{/items.length}}\n',
        n,
      );
    },
    762870: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(n.v(n.f("text", e, t, 0)));
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        "{{text}}",
        n,
      );
    },
    477386: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b("<div></div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        "<div></div>\n",
        n,
      );
    },
    543210: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-tree-selector-after-label');
            if (n.s(n.d("items.length", e, t, 1), e, t, 0, 60, 114, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b(" bloko-tree-selector-after-label_parent-without-action");
              });
              e.pop();
            }
            n.b('">');
            n.b("\n" + o);
            n.b(n.rp("<afterLabelTemplate0", e, t, "    "));
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<afterLabelTemplate0": {
              name: "afterLabelTemplate",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<div class="bloko-tree-selector-after-label{{#items.length}} bloko-tree-selector-after-label_parent-without-action{{/items.length}}">\n    {{>afterLabelTemplate}}\n</div>\n',
        n,
      );
    },
    122306: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-tree-selector-after-label');
            if (n.s(n.d("items.length", e, t, 1), e, t, 0, 60, 111, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b(" bloko-tree-selector-after-label_parent-with-action");
              });
              e.pop();
            }
            n.b('">');
            n.b("\n" + o);
            n.b(n.rp("<afterLabelTemplate0", e, t, "    "));
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<afterLabelTemplate0": {
              name: "afterLabelTemplate",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<div class="bloko-tree-selector-after-label{{#items.length}} bloko-tree-selector-after-label_parent-with-action{{/items.length}}">\n    {{>afterLabelTemplate}}\n</div>\n',
        n,
      );
    },
    275475: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="Bloko-TreeSelector-Element ');
            n.b("bloko-tree-selector-item ");
            n.b('bloko-tree-selector-item_no-children"');
            n.b("\n" + o);
            n.b('     data-id="');
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('     data-qa="bloko-tree-selector-item ');
            n.b("bloko-tree-selector-item-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '    <div class="Bloko-TreeSelector-SearchContent bloko-form-item">',
            );
            n.b("\n" + o);
            n.b(
              '        <div class="bloko-tree-selector-content Bloko-TreeSelector-Action">',
            );
            n.b("\n" + o);
            n.b('            <label class="bloko-checkbox">');
            n.b("\n" + o);
            n.b(
              '                <input class="bloko-checkbox__input Bloko-TreeSelector-Input"',
            );
            n.b("\n" + o);
            n.b('                       name="');
            n.b(n.v(n.f("name", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       value="');
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       data-qa="bloko-tree-selector-input ');
            n.b("bloko-tree-selector-input-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       autocomplete="off"');
            n.b("\n" + o);
            if (n.s(n.f("disabled", e, t, 1), e, t, 0, 794, 865, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('                           disabled="disabled"');
                n.b("\n" + o);
              });
              e.pop();
            }
            if (n.s(n.f("selected", e, t, 1), e, t, 0, 915, 984, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('                           checked="checked"');
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b('                       type="checkbox"/>');
            n.b("\n" + o);
            n.b('                <span class="bloko-checkbox__text"');
            n.b("\n" + o);
            n.b(
              '                      data-qa="bloko-tree-selector-item-text ',
            );
            n.b("bloko-tree-selector-item-text-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b(n.rp("<labelTemplate0", e, t, ""));
            n.b("</span>");
            n.b("\n" + o);
            n.b("            </label>");
            n.b("\n" + o);
            n.b("        </div>");
            n.b("\n" + o);
            n.b(n.rp("<afterLabelWrapperTemplate1", e, t, "        "));
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<labelTemplate0": {
              name: "labelTemplate",
              partials: {},
              subs: {},
            },
            "<afterLabelWrapperTemplate1": {
              name: "afterLabelWrapperTemplate",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<div class="Bloko-TreeSelector-Element {{!\n          }}bloko-tree-selector-item {{!\n          }}bloko-tree-selector-item_no-children"\n     data-id="{{id}}"\n     data-qa="bloko-tree-selector-item {{!\n            }}bloko-tree-selector-item-{{id}}">\n    <div class="Bloko-TreeSelector-SearchContent bloko-form-item">\n        <div class="bloko-tree-selector-content Bloko-TreeSelector-Action">\n            <label class="bloko-checkbox">\n                <input class="bloko-checkbox__input Bloko-TreeSelector-Input"\n                       name="{{name}}"\n                       value="{{id}}"\n                       data-qa="bloko-tree-selector-input {{!\n                              }}bloko-tree-selector-input-{{id}}"\n                       autocomplete="off"\n                       {{#disabled}}\n                           disabled="disabled"\n                       {{/disabled}}\n                       {{#selected}}\n                           checked="checked"\n                       {{/selected}}\n                       type="checkbox"/>\n                <span class="bloko-checkbox__text"\n                      data-qa="bloko-tree-selector-item-text {{!\n                             }}bloko-tree-selector-item-text-{{id}}">{{>labelTemplate}}</span>\n            </label>\n        </div>\n        {{>afterLabelWrapperTemplate}}\n    </div>\n</div>\n',
        n,
      );
    },
    988005: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="Bloko-TreeSelector-Element ');
            n.b("bloko-tree-selector-item ");
            n.b('bloko-tree-selector-item_no-children"');
            n.b("\n" + o);
            n.b('     data-id="');
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('     data-qa="bloko-tree-selector-item ');
            n.b("bloko-tree-selector-item-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-form-item Bloko-TreeSelector-SearchContent">',
            );
            n.b("\n" + o);
            n.b(
              '        <div class="bloko-tree-selector-content Bloko-TreeSelector-Action">',
            );
            n.b("\n" + o);
            n.b('            <label class="bloko-radio">');
            n.b("\n" + o);
            n.b(
              '                <input class="bloko-radio__input Bloko-TreeSelector-Input"',
            );
            n.b("\n" + o);
            n.b('                       name="');
            n.b(n.v(n.f("name", e, t, 0)));
            if (n.s(n.f("parent", e, t, 1), e, t, 0, 553, 578, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b("-");
                o.b(o.v(o.d("parent.attributes.id", e, t, 0)));
              });
              e.pop();
            }
            n.b("-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       value="');
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       autocomplete="off"');
            n.b("\n" + o);
            n.b('                       data-qa="bloko-tree-selector-input ');
            n.b("bloko-tree-selector-input-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       type="radio"');
            n.b("\n" + o);
            if (n.s(n.f("disabled", e, t, 1), e, t, 0, 878, 949, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('                           disabled="disabled"');
                n.b("\n" + o);
              });
              e.pop();
            }
            if (n.s(n.f("selected", e, t, 1), e, t, 0, 999, 1068, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('                           checked="checked"');
                n.b("\n" + o);
                n.b("                       ");
              });
              e.pop();
            }
            n.b("/>");
            n.b("\n" + o);
            n.b('                <span class="bloko-radio__text"');
            n.b("\n" + o);
            n.b(
              '                      data-qa="bloko-tree-selector-item-text ',
            );
            n.b("bloko-tree-selector-item-text-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b(n.rp("<labelTemplate0", e, t, ""));
            n.b("</span>");
            n.b("\n" + o);
            n.b("            </label>");
            n.b("\n" + o);
            n.b("        </div>");
            n.b("\n" + o);
            n.b(n.rp("<afterLabelWrapperTemplate1", e, t, "        "));
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<labelTemplate0": {
              name: "labelTemplate",
              partials: {},
              subs: {},
            },
            "<afterLabelWrapperTemplate1": {
              name: "afterLabelWrapperTemplate",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<div class="Bloko-TreeSelector-Element {{!\n          }}bloko-tree-selector-item {{!\n          }}bloko-tree-selector-item_no-children"\n     data-id="{{id}}"\n     data-qa="bloko-tree-selector-item {{!\n            }}bloko-tree-selector-item-{{id}}">\n    <div class="bloko-form-item Bloko-TreeSelector-SearchContent">\n        <div class="bloko-tree-selector-content Bloko-TreeSelector-Action">\n            <label class="bloko-radio">\n                <input class="bloko-radio__input Bloko-TreeSelector-Input"\n                       name="{{name}}{{#parent}}-{{parent.attributes.id}}{{/parent}}-{{id}}"\n                       value="{{id}}"\n                       autocomplete="off"\n                       data-qa="bloko-tree-selector-input {{!\n                              }}bloko-tree-selector-input-{{id}}"\n                       type="radio"\n                       {{#disabled}}\n                           disabled="disabled"\n                       {{/disabled}}\n                       {{#selected}}\n                           checked="checked"\n                       {{/selected}}/>\n                <span class="bloko-radio__text"\n                      data-qa="bloko-tree-selector-item-text {{!\n                             }}bloko-tree-selector-item-text-{{id}}">{{>labelTemplate}}</span>\n            </label>\n        </div>\n        {{>afterLabelWrapperTemplate}}\n    </div>\n</div>\n',
        n,
      );
    },
    945169: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            this.b((o = o || ""));
            return this.fl();
          },
          partials: {},
          subs: {},
        },
        "",
        n,
      );
    },
    368776: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(n.v(n.f("text", e, t, 0)));
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        "{{text}}\n",
        n,
      );
    },
    927089: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="Bloko-TreeSelector-Element ');
            n.b('bloko-tree-selector-item"');
            n.b("\n" + o);
            n.b('     data-id="');
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('     data-qa="bloko-tree-selector-item ');
            n.b("bloko-tree-selector-item-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-form-item Bloko-TreeSelector-SearchContent Bloko-TreeSelector-Action">',
            );
            n.b("\n" + o);
            n.b('        <div class="bloko-tree-selector-content">');
            n.b("\n" + o);
            n.b(
              '            <span class="bloko-tree-selector-item-spacer bloko-tree-selector-item-spacer_legacy">',
            );
            n.b("\n" + o);
            n.b(
              '                <span class="bloko-icon-dynamic Bloko-TreeSelector-Chevron"',
            );
            n.b("\n" + o);
            n.b(
              '                      data-qa="bloko-tree-selector-toogle-node ',
            );
            n.b("bloko-tree-selector-toogle-node-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '                    <span class="bloko-icon-link Bloko-TreeSelector-Icon" tabindex="0"></span>',
            );
            n.b("</span>");
            n.b("</span>");
            n.b(
              '<div class="bloko-tree-selector-item__text Bloko-TreeSelector-Expanded"',
            );
            n.b("\n" + o);
            n.b('                   data-qa="bloko-tree-selector-item-text ');
            n.b("bloko-tree-selector-item-text-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b(n.rp("<labelTemplate0", e, t, ""));
            n.b("\n" + o);
            n.b("            </div>");
            n.b("\n" + o);
            n.b(n.rp("<afterLabelWrapperTemplate1", e, t, "            "));
            n.b("        </div>");
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n");
            n.b("\n" + o);
            n.b('    <div class="Bloko-TreeSelector-List');
            if (!n.s(n.f("expanded", e, t, 1), e, t, 1, 0, 0, "")) {
              n.b(" g-hidden");
            }
            n.b(" ");
            n.b('bloko-tree-selector__items"');
            n.b("\n" + o);
            n.b('         data-qa="bloko-tree-selector-items ');
            n.b("bloko-tree-selector-items_");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b(n.t(n.f("itemsTemplate", e, t, 0)));
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<labelTemplate0": {
              name: "labelTemplate",
              partials: {},
              subs: {},
            },
            "<afterLabelWrapperTemplate1": {
              name: "afterLabelWrapperTemplate",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<div class="Bloko-TreeSelector-Element {{!\n          }}bloko-tree-selector-item"\n     data-id="{{id}}"\n     data-qa="bloko-tree-selector-item {{!\n            }}bloko-tree-selector-item-{{id}}">\n    <div class="bloko-form-item Bloko-TreeSelector-SearchContent Bloko-TreeSelector-Action">\n        <div class="bloko-tree-selector-content">\n            <span class="bloko-tree-selector-item-spacer bloko-tree-selector-item-spacer_legacy">\n                <span class="bloko-icon-dynamic Bloko-TreeSelector-Chevron"\n                      data-qa="bloko-tree-selector-toogle-node {{!\n                             }}bloko-tree-selector-toogle-node-{{id}}">\n                    <span class="bloko-icon-link Bloko-TreeSelector-Icon" tabindex="0"></span>{{!\n                }}</span>{{!\n            }}</span>{{!\n            }}<div class="bloko-tree-selector-item__text Bloko-TreeSelector-Expanded"\n                   data-qa="bloko-tree-selector-item-text {{!\n                          }}bloko-tree-selector-item-text-{{id}}">{{>labelTemplate}}\n            </div>\n            {{>afterLabelWrapperTemplate}}\n        </div>\n    </div>\n\n    <div class="Bloko-TreeSelector-List{{^expanded}} g-hidden{{/expanded}} {{!\n              }}bloko-tree-selector__items"\n         data-qa="bloko-tree-selector-items {{!\n                }}bloko-tree-selector-items_{{id}}">{{{itemsTemplate}}}\n    </div>\n</div>\n',
        n,
      );
    },
    105658: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="Bloko-TreeSelector-Element ');
            n.b("bloko-tree-selector-item ");
            n.b('bloko-tree-selector-item_has-children-has-action"');
            n.b("\n" + o);
            n.b('     data-id="');
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('     data-qa="bloko-tree-selector-item ');
            n.b("bloko-tree-selector-item-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-form-item Bloko-TreeSelector-SearchContent">',
            );
            n.b("\n" + o);
            n.b(
              '        <div class="bloko-tree-selector-content Bloko-TreeSelector-Action">',
            );
            n.b("\n" + o);
            n.b(
              '            <span class="bloko-tree-selector-item-spacer bloko-tree-selector-item-spacer_legacy">',
            );
            n.b("\n" + o);
            n.b(
              '                <span class="bloko-icon-dynamic Bloko-TreeSelector-Chevron"',
            );
            n.b("\n" + o);
            n.b(
              '                      data-qa="bloko-tree-selector-toogle-node ',
            );
            n.b("bloko-tree-selector-toogle-node-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '                    <span class="bloko-icon-link Bloko-TreeSelector-Icon"></span>',
            );
            n.b("</span>");
            n.b("</span>");
            n.b('<label class="bloko-checkbox">');
            n.b("\n" + o);
            n.b(
              '                <input class="bloko-checkbox__input Bloko-TreeSelector-Input"',
            );
            n.b("\n" + o);
            n.b('                       name="');
            n.b(n.v(n.f("name", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       value="');
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       data-qa="bloko-tree-selector-input ');
            n.b("bloko-tree-selector-input-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       autocomplete="off"');
            n.b("\n" + o);
            n.b('                       type="checkbox"');
            n.b("\n" + o);
            if (n.s(n.f("disabled", e, t, 1), e, t, 0, 1297, 1368, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('                           disabled="disabled"');
                n.b("\n" + o);
              });
              e.pop();
            }
            if (n.s(n.f("selected", e, t, 1), e, t, 0, 1418, 1487, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('                           checked="checked"');
                n.b("\n" + o);
                n.b("                       ");
              });
              e.pop();
            }
            n.b("/>");
            n.b("\n" + o);
            n.b('                <span class="bloko-checkbox__text"');
            n.b("\n" + o);
            n.b(
              '                      data-qa="bloko-tree-selector-item-text ',
            );
            n.b("bloko-tree-selector-item-text-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(n.rp("<labelTemplate0", e, t, "                    "));
            n.b("                </span>");
            n.b("\n" + o);
            n.b("            </label>");
            n.b("\n" + o);
            n.b("        </div>");
            n.b("\n" + o);
            n.b(n.rp("<afterLabelWrapperTemplate1", e, t, "        "));
            n.b("    </div>");
            n.b("\n" + o);
            n.b('    <div class="Bloko-TreeSelector-List ');
            if (!n.s(n.f("expanded", e, t, 1), e, t, 1, 0, 0, "")) {
              n.b(" g-hidden");
            }
            n.b(' bloko-tree-selector__items"');
            n.b("\n" + o);
            n.b('         data-qa="bloko-tree-selector-items ');
            n.b("bloko-tree-selector-items-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b(n.t(n.f("itemsTemplate", e, t, 0)));
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<labelTemplate0": {
              name: "labelTemplate",
              partials: {},
              subs: {},
            },
            "<afterLabelWrapperTemplate1": {
              name: "afterLabelWrapperTemplate",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<div class="Bloko-TreeSelector-Element {{!\n          }}bloko-tree-selector-item {{!\n          }}bloko-tree-selector-item_has-children-has-action"\n     data-id="{{id}}"\n     data-qa="bloko-tree-selector-item {{!\n            }}bloko-tree-selector-item-{{id}}">\n    <div class="bloko-form-item Bloko-TreeSelector-SearchContent">\n        <div class="bloko-tree-selector-content Bloko-TreeSelector-Action">\n            <span class="bloko-tree-selector-item-spacer bloko-tree-selector-item-spacer_legacy">\n                <span class="bloko-icon-dynamic Bloko-TreeSelector-Chevron"\n                      data-qa="bloko-tree-selector-toogle-node {{!\n                             }}bloko-tree-selector-toogle-node-{{id}}">\n                    <span class="bloko-icon-link Bloko-TreeSelector-Icon"></span>{{!\n              }}</span>{{!\n           }}</span>{{!\n           }}<label class="bloko-checkbox">\n                <input class="bloko-checkbox__input Bloko-TreeSelector-Input"\n                       name="{{ name }}"\n                       value="{{id}}"\n                       data-qa="bloko-tree-selector-input {{!\n                              }}bloko-tree-selector-input-{{id}}"\n                       autocomplete="off"\n                       type="checkbox"\n                       {{#disabled}}\n                           disabled="disabled"\n                       {{/disabled}}\n                       {{#selected}}\n                           checked="checked"\n                       {{/selected}}/>\n                <span class="bloko-checkbox__text"\n                      data-qa="bloko-tree-selector-item-text {{!\n                             }}bloko-tree-selector-item-text-{{id}}">\n                    {{>labelTemplate}}\n                </span>\n            </label>\n        </div>\n        {{>afterLabelWrapperTemplate}}\n    </div>\n    <div class="Bloko-TreeSelector-List {{^expanded}} g-hidden{{/expanded}} bloko-tree-selector__items"\n         data-qa="bloko-tree-selector-items {{!\n                }}bloko-tree-selector-items-{{id}}">{{{itemsTemplate}}}\n    </div>\n</div>\n',
        n,
      );
    },
    858055: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="Bloko-TreeSelector-Element ');
            n.b("bloko-tree-selector-item ");
            n.b('bloko-tree-selector-item_has-children-has-action"');
            n.b("\n" + o);
            n.b('     data-id="');
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('     data-qa="bloko-tree-selector-item ');
            n.b("bloko-tree-selector-item-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-form-item Bloko-TreeSelector-SearchContent">',
            );
            n.b("\n" + o);
            n.b(
              '        <div class="bloko-tree-selector-content Bloko-TreeSelector-Action">',
            );
            n.b("\n" + o);
            n.b(
              '            <span class="bloko-tree-selector-item-spacer bloko-tree-selector-item-spacer_legacy">',
            );
            n.b("\n" + o);
            n.b(
              '                <span class="bloko-icon-dynamic Bloko-TreeSelector-Chevron"',
            );
            n.b("\n" + o);
            n.b(
              '                      data-qa="bloko-tree-selector-toogle-node ',
            );
            n.b("bloko-tree-selector-toogle-node-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(
              '                    <span class="bloko-icon-link Bloko-TreeSelector-Icon"></span>',
            );
            n.b("</span>");
            n.b("</span>");
            n.b('<label class="bloko-radio">');
            n.b("\n" + o);
            n.b(
              '                <input class="bloko-radio__input Bloko-TreeSelector-Input"',
            );
            n.b("\n" + o);
            n.b('                       name="');
            n.b(n.v(n.f("name", e, t, 0)));
            n.b("-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       type="radio"');
            n.b("\n" + o);
            n.b('                       value="');
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('                       autocomplete="off"');
            n.b("\n" + o);
            n.b('                       data-qa="bloko-tree-selector-input ');
            n.b("bloko-tree-selector-input-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            if (n.s(n.f("disabled", e, t, 1), e, t, 0, 1291, 1362, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('                           disabled="disabled"');
                n.b("\n" + o);
              });
              e.pop();
            }
            if (n.s(n.f("selected", e, t, 1), e, t, 0, 1412, 1481, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b('                           checked="checked"');
                n.b("\n" + o);
                n.b("                       ");
              });
              e.pop();
            }
            n.b("/>");
            n.b("\n" + o);
            n.b('                <span class="bloko-radio__text"');
            n.b("\n" + o);
            n.b(
              '                      data-qa="bloko-tree-selector-item-text ',
            );
            n.b("bloko-tree-selector-item-text-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b("\n" + o);
            n.b(n.rp("<labelTemplate0", e, t, "                    "));
            n.b("                </span>");
            n.b("\n" + o);
            n.b("            </label>");
            n.b("\n" + o);
            n.b("        </div>");
            n.b("\n" + o);
            n.b(n.rp("<afterLabelWrapperTemplate1", e, t, "        "));
            n.b("    </div>");
            n.b("\n" + o);
            n.b('    <div class="Bloko-TreeSelector-List ');
            if (!n.s(n.f("expanded", e, t, 1), e, t, 1, 0, 0, "")) {
              n.b("g-hidden");
            }
            n.b(' bloko-tree-selector__items"');
            n.b("\n" + o);
            n.b('        data-qa="bloko-tree-selector-items ');
            n.b("bloko-tree-selector-items-");
            n.b(n.v(n.f("id", e, t, 0)));
            n.b('">');
            n.b(n.t(n.f("itemsTemplate", e, t, 0)));
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<labelTemplate0": {
              name: "labelTemplate",
              partials: {},
              subs: {},
            },
            "<afterLabelWrapperTemplate1": {
              name: "afterLabelWrapperTemplate",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<div class="Bloko-TreeSelector-Element {{!\n          }}bloko-tree-selector-item {{!\n          }}bloko-tree-selector-item_has-children-has-action"\n     data-id="{{id}}"\n     data-qa="bloko-tree-selector-item {{!\n            }}bloko-tree-selector-item-{{id}}">\n    <div class="bloko-form-item Bloko-TreeSelector-SearchContent">\n        <div class="bloko-tree-selector-content Bloko-TreeSelector-Action">\n            <span class="bloko-tree-selector-item-spacer bloko-tree-selector-item-spacer_legacy">\n                <span class="bloko-icon-dynamic Bloko-TreeSelector-Chevron"\n                      data-qa="bloko-tree-selector-toogle-node {{!\n                             }}bloko-tree-selector-toogle-node-{{id}}">\n                    <span class="bloko-icon-link Bloko-TreeSelector-Icon"></span>{{!\n              }}</span>{{!\n          }}</span>{{!\n          }}<label class="bloko-radio">\n                <input class="bloko-radio__input Bloko-TreeSelector-Input"\n                       name="{{name}}-{{id}}"\n                       type="radio"\n                       value="{{id}}"\n                       autocomplete="off"\n                       data-qa="bloko-tree-selector-input {{!\n                              }}bloko-tree-selector-input-{{id}}"\n                       {{#disabled}}\n                           disabled="disabled"\n                       {{/disabled}}\n                       {{#selected}}\n                           checked="checked"\n                       {{/selected}}/>\n                <span class="bloko-radio__text"\n                      data-qa="bloko-tree-selector-item-text {{!\n                             }}bloko-tree-selector-item-text-{{id}}">\n                    {{>labelTemplate}}\n                </span>\n            </label>\n        </div>\n        {{>afterLabelWrapperTemplate}}\n    </div>\n    <div class="Bloko-TreeSelector-List {{^expanded}}g-hidden{{/expanded}} bloko-tree-selector__items"\n        data-qa="bloko-tree-selector-items {{!\n               }}bloko-tree-selector-items-{{id}}">{{{itemsTemplate}}}\n    </div>\n</div>\n',
        n,
      );
    },
    285136: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b(
              '<div class="bloko-tree-selector-popup-result-list Bloko-TreeSelectorPopup-ResultList ',
            );
            if (n.s(n.f("hidden", e, t, 1), e, t, 0, 96, 104, "{{ }}")) {
              n.rs(e, t, function (e, t, o) {
                o.b("g-hidden");
              });
              e.pop();
            }
            n.b('">');
            n.b("\n" + o);
            if (n.s(n.f("elements", e, t, 1), e, t, 0, 135, 1239, "{{ }}")) {
              n.rs(e, t, function (e, t, n) {
                n.b(
                  '        <div class="Bloko-TreeSelectorPopup-ResultListElement"',
                );
                n.b("\n" + o);
                n.b('             data-id="');
                n.b(n.v(n.f("id", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b(
                  '             data-qa="bloko-tree-selector-popup-result-item ',
                );
                n.b("bloko-tree-selector-popup-result-item-");
                n.b(n.v(n.f("id", e, t, 0)));
                n.b('">');
                n.b("\n" + o);
                n.b('            <div class="bloko-form-item">');
                n.b("\n" + o);
                n.b('                <label class="bloko-checkbox">');
                n.b("\n" + o);
                n.b(
                  '                    <input class="bloko-checkbox__input Bloko-TreeSelectorPopup-ResultListElement-Input"',
                );
                n.b("\n" + o);
                n.b('                           name="');
                n.b(n.v(n.f("name", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('                           value="');
                n.b(n.v(n.f("id", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b(
                  '                           data-qa="bloko-tree-selector-popup-result-item-input ',
                );
                n.b("bloko-tree-selector-popup-result-item-input-");
                n.b(n.v(n.f("id", e, t, 0)));
                n.b('"');
                n.b("\n" + o);
                n.b('                           autocomplete="off"');
                n.b("\n" + o);
                n.b('                           checked="checked"');
                n.b("\n" + o);
                n.b('                           type="checkbox"/>');
                n.b("\n" + o);
                n.b('                    <span class="bloko-checkbox__text"');
                n.b("\n" + o);
                n.b(
                  '                          data-qa="bloko-tree-selector-popup-result-item-text ',
                );
                n.b("bloko-tree-selector-popup-result-item-text-");
                n.b(n.v(n.f("id", e, t, 0)));
                n.b('">');
                n.b(n.v(n.f("text", e, t, 0)));
                n.b("</span>");
                n.b("\n" + o);
                n.b("                </label>");
                n.b("\n" + o);
                n.b("            </div>");
                n.b("\n" + o);
                n.b("        </div>");
                n.b("\n" + o);
              });
              e.pop();
            }
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-tree-selector-popup-result-list Bloko-TreeSelectorPopup-ResultList {{#hidden}}g-hidden{{/hidden}}">\n    {{#elements}}\n        <div class="Bloko-TreeSelectorPopup-ResultListElement"\n             data-id="{{id}}"\n             data-qa="bloko-tree-selector-popup-result-item {{!\n                }}bloko-tree-selector-popup-result-item-{{id}}">\n            <div class="bloko-form-item">\n                <label class="bloko-checkbox">\n                    <input class="bloko-checkbox__input Bloko-TreeSelectorPopup-ResultListElement-Input"\n                           name="{{name}}"\n                           value="{{id}}"\n                           data-qa="bloko-tree-selector-popup-result-item-input {{!\n                              }}bloko-tree-selector-popup-result-item-input-{{id}}"\n                           autocomplete="off"\n                           checked="checked"\n                           type="checkbox"/>\n                    <span class="bloko-checkbox__text"\n                          data-qa="bloko-tree-selector-popup-result-item-text {{!\n                             }}bloko-tree-selector-popup-result-item-text-{{id}}">{{text}}</span>\n                </label>\n            </div>\n        </div>\n    {{/elements}}\n</div>\n',
        n,
      );
    },
    323085: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-tree-selector-popup-search">');
            n.b("\n" + o);
            n.b('    <input type="search"');
            n.b("\n" + o);
            n.b(
              '           class="bloko-input-text Bloko-TreeSelectorPopup-Search"',
            );
            n.b("\n" + o);
            n.b('           placeholder="');
            n.b(n.v(n.f("searchPlaceholder", e, t, 0)));
            n.b('"');
            n.b("\n" + o);
            n.b('           data-qa="bloko-tree-selector-popup-search"/>');
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {},
          subs: {},
        },
        '<div class="bloko-tree-selector-popup-search">\n    <input type="search"\n           class="bloko-input-text Bloko-TreeSelectorPopup-Search"\n           placeholder="{{searchPlaceholder}}"\n           data-qa="bloko-tree-selector-popup-search"/>\n</div>\n',
        n,
      );
    },
    683454: function (e, t, o) {
      var n = o(305485);
      e.exports = new n.Template(
        {
          code: function (e, t, o) {
            var n = this;
            n.b((o = o || ""));
            n.b('<div class="bloko-modal-header">');
            n.b("\n" + o);
            n.b('    <h2 class="bloko-modal-title">');
            n.b(n.v(n.f("title", e, t, 0)));
            n.b("</h2>");
            n.b("\n" + o);
            n.b(n.rp("<search0", e, t, "    "));
            n.b(
              '    <div class="bloko-tree-selector-popup-hint Bloko-TreeSelectorPopup-Hint"></div>',
            );
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n" + o);
            n.b(
              '<div class="bloko-tree-selector-popup-result Bloko-TreeSelectorPopup-ResultContainer" />',
            );
            n.b("\n" + o);
            n.b('<div class="bloko-tree-selector-popup">');
            n.b("\n" + o);
            n.b('    <div class="Bloko-TreeSelectorPopup-ResultContainerXS">');
            n.b("\n" + o);
            n.b('        <div class="Bloko-TreeSelectorPopup-Result" />');
            n.b("\n" + o);
            n.b("    </div>");
            n.b("\n" + o);
            n.b(
              '    <div class="Bloko-TreeSelectorPopup-NotFoundHint g-hidden">',
            );
            n.b(n.v(n.f("notFound", e, t, 0)));
            n.b("</div>");
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-tree-selector-popup-content Bloko-TreeSelectorPopup-SearchTreeSelector g-hidden"></div>',
            );
            n.b("\n" + o);
            n.b(
              '    <div class="bloko-tree-selector-popup-content Bloko-TreeSelectorPopup"></div>',
            );
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n" + o);
            n.b('<div class="Bloko-TreeSelector-Error"></div>');
            n.b("\n" + o);
            n.b('<div class="bloko-modal-footer">');
            n.b("\n" + o);
            n.b('    <span class="bloko-form-spacer">');
            n.b("\n" + o);
            n.b('        <button type="button"');
            n.b("\n" + o);
            n.b(
              '                class="bloko-button Bloko-TreeSelectorPopup-Cancel"',
            );
            n.b("\n" + o);
            n.b('                data-qa="bloko-tree-selector-popup-cancel">');
            n.b("\n" + o);
            n.b("            ");
            n.b(n.v(n.f("cancel", e, t, 0)));
            n.b("\n" + o);
            n.b("        </button>");
            n.b("\n" + o);
            n.b("    </span>");
            n.b('<span class="bloko-form-spacer">');
            n.b("\n" + o);
            n.b('        <button type="button"');
            n.b("\n" + o);
            n.b(
              '                class="bloko-button bloko-button_primary Bloko-TreeSelectorPopup-Submit"',
            );
            n.b("\n" + o);
            n.b('                data-qa="bloko-tree-selector-popup-submit">');
            n.b("\n" + o);
            n.b('            <span class="bloko-button__content">');
            n.b(n.v(n.f("submit", e, t, 0)));
            n.b("</span>");
            n.b("\n" + o);
            n.b('            <span class="bloko-button__loading">');
            n.b("\n" + o);
            n.b(
              '                <span class="bloko-icon bloko-icon_loading bloko-icon_initial-inverted"></span>',
            );
            n.b("\n" + o);
            n.b("            </span>");
            n.b("\n" + o);
            n.b("        </button>");
            n.b("\n" + o);
            n.b("    </span>");
            n.b("\n" + o);
            n.b("</div>");
            n.b("\n");
            return n.fl();
          },
          partials: {
            "<search0": {
              name: "search",
              partials: {},
              subs: {},
            },
          },
          subs: {},
        },
        '<div class="bloko-modal-header">\n    <h2 class="bloko-modal-title">{{title}}</h2>\n    {{>search}}\n    <div class="bloko-tree-selector-popup-hint Bloko-TreeSelectorPopup-Hint"></div>\n</div>\n<div class="bloko-tree-selector-popup-result Bloko-TreeSelectorPopup-ResultContainer" />\n<div class="bloko-tree-selector-popup">\n    <div class="Bloko-TreeSelectorPopup-ResultContainerXS">\n        <div class="Bloko-TreeSelectorPopup-Result" />\n    </div>\n    <div class="Bloko-TreeSelectorPopup-NotFoundHint g-hidden">{{notFound}}</div>\n    <div class="bloko-tree-selector-popup-content Bloko-TreeSelectorPopup-SearchTreeSelector g-hidden"></div>\n    <div class="bloko-tree-selector-popup-content Bloko-TreeSelectorPopup"></div>\n</div>\n<div class="Bloko-TreeSelector-Error"></div>\n<div class="bloko-modal-footer">\n    <span class="bloko-form-spacer">\n        <button type="button"\n                class="bloko-button Bloko-TreeSelectorPopup-Cancel"\n                data-qa="bloko-tree-selector-popup-cancel">\n            {{cancel}}\n        </button>\n    </span>{{!\n    }}<span class="bloko-form-spacer">\n        <button type="button"\n                class="bloko-button bloko-button_primary Bloko-TreeSelectorPopup-Submit"\n                data-qa="bloko-tree-selector-popup-submit">\n            <span class="bloko-button__content">{{submit}}</span>\n            <span class="bloko-button__loading">\n                <span class="bloko-icon bloko-icon_loading bloko-icon_initial-inverted"></span>\n            </span>\n        </button>\n    </span>\n</div>\n',
        n,
      );
    },
    523033: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => k,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(347526);
      var r = o.n(l);
      var s = o(845807);
      var a = o.n(s);
      var c = o(456486);
      var d = o.n(c);
      var b = o(433856);
      var u = o.n(b);
      var h = o(336336);
      var p = o.n(h);
      const k = a().build({
        defaults: {
          suggestSearchStartRadiusKm: 5,
          suggestResultsLimit: 10,
        },
        create: function (e, t) {
          const o = i()(e);
          const n = (t.dataProviderBuilder || p().bind(null, t.ymapsPromise))({
            prefix: t.prefix,
            suggestResultsLimit: t.suggestResultsLimit,
            suggestSearchStartPoint: t.suggestSearchStartPoint,
            suggestSearchStartRadiusKm: t.suggestSearchStartRadiusKm,
          });
          const l = u()(t.ymapsPromise);
          const s = o.find(".Bloko-Address-Input");
          const c = o.find(".Bloko-Address-ResolveLocation");
          const b = o.find(".Bloko-Address-Loader");
          const h = a().make(r(), s.get(0), {
            limit: t.suggestResultsLimit,
            dataProvider: n,
            suggestStartInputLength: 0,
          });
          const k = d().extend({
            setLocation(e) {
              g(e);
            },
            clearLocation() {
              g({
                fullAddress: "",
                coordinates: null,
                city: null,
                street: null,
                building: null,
              });
              h.clear();
            },
          });
          function g(e) {
            s.val(e.fullAddress);
            k._trigger("change", e);
          }
          s.on("selected.suggest autoselected.suggest", (e, t) => {
            if (t.location) {
              g(t.location);
            } else {
              l.resolveLocationByAddress(t.fullAddress)
                .then((e) => {
                  g(e);
                  k._trigger("geocode.address");
                })
                .catch(console.error);
            }
          });
          s.on("focus", () => {
            k._trigger("focus");
          });
          c.on("click", () => {
            const e = setTimeout(() => {
              c.addClass("g-hidden");
              b.removeClass("g-hidden");
            }, 200);
            l.resolveCurrentLocation()
              .then((e) => {
                g(e);
                k._trigger("geolocation.address");
              })
              .catch(console.error)
              .finally(() => {
                clearTimeout(e);
                c.removeClass("g-hidden");
                b.addClass("g-hidden");
              });
          });
          return k;
        },
        componentName: "bloko/blocks/address",
      });
    },
    361946: function (e, t, o) {
      "use strict";

      function n(e) {
        return Object.keys(e).reduce((t, o) => {
          if (typeof e[o] == "object") {
            const i = n(e[o]);
            Object.keys(i).forEach((e) => {
              if (t[e]) {
                t[e] += `, ${i[e]}`;
              } else {
                t[e] = i[e];
              }
            });
          } else {
            t[o] = e[o];
          }
          return t;
        }, {});
      }
      function i(e) {
        return n(e.properties.get("metaDataProperty.GeocoderMetaData"));
      }
      function l(e) {
        return e.CountryName;
      }
      function r(e) {
        return e.CountryNameCode;
      }
      function s(e) {
        return (
          e.LocalityName ||
          e.SubAdministrativeAreaName ||
          e.AdministrativeAreaName
        );
      }
      function a(e) {
        return e.filter((e) => e).join(", ");
      }
      function c(e) {
        return a([
          e.DependentLocalityName,
          e.ThoroughfareName,
          e.ThoroughfareNumber,
          e.DependentThoroughfareName,
          e.DependentThoroughfareNumber,
        ]);
      }
      function d(e) {
        return a([
          e.PremiseName,
          e.PremiseNumber,
          e.SubPremiseName,
          e.SubPremiseNumber,
        ]);
      }
      function b(e) {
        const t = e.geoObjects.get(0);
        const o = u(t);
        return {
          fullAddress: t.getAddressLine() || t.getCountry(),
          coordinates: t.geometry.getCoordinates(),
          country: o.country || "",
          countyCode: o.countyCode || "",
          city: o.city || "",
          street: o.street || "",
          building: o.building || "",
        };
      }
      function u(e) {
        const t = i(e);
        const o = t.kind === "metro";
        return {
          country: l(t),
          countyCode: r(t),
          city: s(t),
          street: c(t),
          building: o ? "" : d(t),
        };
      }
      o.r(t);
      o.d(t, {
        convertGeoCodeResult: () => b,
        getDividedAddress: () => u,
      });
    },
    855956: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(746091);
      const i = (e) => ({
        resolveLocationByAddress: (t) =>
          e.then((e) => e.geocode(t)).then(n.convertGeoCodeResult),
        resolveCurrentLocation: () =>
          e
            .then((e) =>
              e.geolocation.get({
                mapStateAutoApply: true,
                autoReverseGeocode: true,
              }),
            )
            .then(n.convertGeoCodeResult),
      });
    },
    641006: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(531436);
      var i = o.n(n);
      const l = (e, t) => {
        const o = t.suggestResultsLimit;
        let n;
        if (t.suggestSearchStartPoint) {
          n = i().getBoundPoints(
            t.suggestSearchStartPoint,
            t.suggestSearchStartRadiusKm,
          );
        }
        return (i) =>
          e
            .then((e) =>
              e.suggest(`${t.prefix || ""}${i}`, {
                results: o,
                boundedBy: n,
              }),
            )
            .then((e) => ({
              items: e.map((e, t) => ({
                id: t,
                text: e.displayName,
                fullAddress: e.value,
              })),
            }));
      };
    },
    958365: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ANIMATION_DEFAULT_TIMEOUT: () => c,
        default: () => d,
      });
      var n = o(581262);
      const i = "bloko-animation-fade-enter";
      const l = "bloko-animation-fade-enter-active";
      const r = "bloko-animation-fade-exit";
      const s = "bloko-animation-fade-exit-active";
      var a = o(343856);
      const c = 300;
      const d = (e) => {
        let { timeout: t = c, nodeRef: o, ...d } = e;
        return (0, a.jsx)(n.Z, {
          nodeRef: o,
          timeout: t,
          classNames: {
            enter: i,
            enterActive: l,
            exit: r,
            exitActive: s,
          },
          exit: false,
          ...d,
        });
      };
    },
    357314: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(845807);
      var r = o.n(l);
      var s = o(428612);
      var a = o.n(s);
      var c = o(857726);
      var d = o.n(c);
      var b = o(236349);
      var u = o.n(b);
      const h = r().build({
        create: function (e, t) {
          let o;
          let n;
          function l() {
            d()(() => {
              u()(o[0], n, t.maxHeight);
            })();
          }
          if (e.nodeName === "TEXTAREA") {
            o = i()(e);
            n = t.minHeight || o.outerHeight();
            o.css({
              overflow: "hidden",
            });
            o[0].value += " ";
            o[0].value = o[0].value.slice(0, -1);
            i()(window).on("resize", l);
            i()(document).on("possible-resize", l);
            o.on("input change", l);
            l();
          } else {
            a().log(
              "out error",
              new Error("Autogrow: Given element is not textarea"),
            );
          }
        },
        componentName: "bloko/blocks/autogrow",
      });
    },
    434234: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
      });
      const n = function () {
        return `${arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0}px`;
      };
      const i = (e) => parseInt(e, 10) || 0;
      const l = (e) =>
        window.getComputedStyle(e).boxSizing === "border-box"
          ? e.scrollHeight +
            i(window.getComputedStyle(e).borderTopWidth) +
            i(window.getComputedStyle(e).borderBottomWidth)
          : e.scrollHeight -
            ((e) =>
              i(window.getComputedStyle(e).paddingTop) +
              i(window.getComputedStyle(e).paddingBottom))(e);
      const r = (e, t, o) => {
        const r = t || i(window.getComputedStyle(e).minHeight);
        const s = i(window.getComputedStyle(e).marginBottom);
        e.style.marginBottom = n(e.offsetHeight - r + s);
        e.style.height = n(r);
        const a = Math.max(r, l(e));
        const c = o && a > o;
        e.style.height = n(c ? o : a);
        e.style.overflow = c ? "auto" : "hidden";
        e.style.marginBottom = n();
        if (
          c &&
          Math.max(e.selectionStart, e.selectionEnd) === e.value.length
        ) {
          e.scrollTop = e.scrollHeight;
        }
      };
    },
    460858: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        BadgeAppearance: () => s,
        default: () => d,
      });
      var n = o(882177);
      var i = o.n(n);
      const l = {
        "bloko-badge": "bloko-badge",
        "bloko-badge_primary": "bloko-badge_primary",
        "bloko-badge_warning": "bloko-badge_warning",
        "bloko-badge_success": "bloko-badge_success",
        "bloko-badge_tertiary": "bloko-badge_tertiary",
        "bloko-badge_inversed": "bloko-badge_inversed",
      };
      var r = o(343856);
      let s;
      var a;
      (a = s ||= {}).Primary = "primary";
      a.Warning = "warning";
      a.Default = "default";
      a.Success = "success";
      a.Tertiary = "tertiary";
      a.Inversed = "inversed";
      const c = (e) =>
        (e = Math.trunc(e)) >= 1000
          ? `${Math.floor(e / 1000)}K`
          : e > 99
            ? "99+"
            : String(e);
      const d = (e) => {
        let { value: t, hidden: o, appearance: n = s.Default } = e;
        if (o) {
          return null;
        } else {
          return (0, r.jsx)("span", {
            className: i()(l["bloko-badge"], {
              [l[`bloko-badge_${n}`]]: n !== s.Default,
            }),
            children: c(t),
          });
        }
      };
    },
    748002: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        BreakpointContext: () => i,
        default: () => l,
      });
      var n = o(394280);
      const i = (0, n.createContext)({
        renderRestriction: false,
      });
      const l = () => (0, n.useContext)(i);
    },
    355299: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => d,
      });
      var n = o(394280);
      var i = o(802720);
      var l = o.n(i);
      var r = o(21119);
      var s = o.n(r);
      var a = o(10469);
      var c = o(343856);
      const d = (e) => {
        let {
          storedBreakpointValue: t,
          storeActualBreakpointValueInCookie: o = true,
          forceUseStoredBreakpoint: i = false,
          renderRestriction: r = false,
          children: d,
        } = e;
        const b = s()(t);
        const u = !!i && !!t;
        (0, n.useEffect)(() => {
          if (o) {
            l().set("device_breakpoint", b, 336);
          }
        }, [b, o]);
        const h = (0, n.useMemo)(
          () => ({
            breakpoint: u ? t : b,
            renderRestriction: !!t && !!r,
          }),
          [b, u, t, r],
        );
        return (0, c.jsx)(a.BreakpointContext.Provider, {
          value: h,
          children: d,
        });
      };
    },
    769246: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ButtonKind: () => c,
        default: () => u,
      });
      o(394280);
      var n = o(241929);
      var i = o.n(n);
      var l = o(563457);
      var r = o.n(l);
      var s = o(416431);
      var a = o(343856);
      let c;
      (function (e) {
        e[(e.Primary = l.ButtonKind.Primary)] = "Primary";
        e[(e.Warning = l.ButtonKind.Warning)] = "Warning";
        e[(e.Success = l.ButtonKind.Success)] = "Success";
        e[(e.Inversed = l.ButtonKind.Inversed)] = "Inversed";
      })((c ||= {}));
      const d = {
        [c.Primary]: n.BadgeAppearance.Primary,
        [c.Warning]: n.BadgeAppearance.Warning,
        [c.Success]: n.BadgeAppearance.Success,
        [c.Inversed]: n.BadgeAppearance.Inversed,
      };
      const b = function (e, t = l.ButtonAppearance.Filled) {
        if (e === c.Inversed && t === l.ButtonAppearance.Filled) {
          return n.BadgeAppearance.Default;
        } else if (e) {
          return d[e];
        } else {
          return n.BadgeAppearance.Default;
        }
      };
      const u = (e) => {
        let { badgeValue: t, kind: o, children: n, ...c } = e;
        const d = t
          ? (0, a.jsx)("span", {
              className: s.Z["bloko-button__badge"],
              children: (0, a.jsx)(i(), {
                value: t,
                appearance: b(o, c.appearance),
              }),
            })
          : null;
        return (0, a.jsxs)(r(), {
          ...c,
          kind: o,
          iconPosition: c.icon ? l.ButtonIconPosition.Left : undefined,
          children: [n, d],
        });
      };
    },
    969296: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => c,
      });
      var n = o(394280);
      var i = o(563457);
      var l = o.n(i);
      var r = o(416431);
      var s = o(343856);
      const a = (e) => {
        let { id: t, ...o } = e;
        return (0, s.jsx)("label", {
          htmlFor: t,
          ...o,
        });
      };
      const c = (e) => {
        let { onChange: t, inputAttributes: o, ...i } = e;
        const [c, d] = (0, n.useState)(!!o.checked);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("input", {
              type: "checkbox",
              checked: c,
              onChange: (e) => {
                d(!c);
                if (t != null) {
                  t(e);
                }
              },
              ...o,
              className: r.Z["bloko-button-check-helper"],
            }),
            (0, s.jsx)(l(), {
              Element: a,
              id: o.id,
              ...i,
            }),
          ],
        });
      };
    },
    398546: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(416431);
      var r = o(343856);
      const s = (e) => {
        let { Element: t = "div", stretched: o, ...n } = e;
        return (0, r.jsx)(t, {
          className: i()(l.Z["bloko-button-group"], {
            [l.Z["bloko-button-group_stretched"]]: o,
          }),
          ...n,
        });
      };
    },
    433868: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      o(394280);
      var n = o(882177);
      var i = o.n(n);
      var l = o(416431);
      var r = o(343856);
      const s = (e) => {
        let { flexible: t, light: o, scale: n, innerRef: s, ...a } = e;
        return (0, r.jsx)("button", {
          className: i()(l.Z["bloko-button-select"], {
            [l.Z["bloko-button-select_flexible"]]: t,
            [l.Z["bloko-button-select_light"]]: o,
            [l.Z[`bloko-button-select_${n}`]]: n,
          }),
          type: "button",
          ref: s,
          ...a,
        });
      };
    },
    701991: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ButtonAppearance: () => g,
        ButtonGroup: () => c.a,
        ButtonIconPosition: () => h,
        ButtonKind: () => u,
        ButtonScale: () => p,
        ButtonType: () => k,
        default: () => C,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(919683);
      var s = o.n(r);
      var a = o(103942);
      var c = o.n(a);
      var d = o(416431);
      var b = o(343856);
      let u;
      let h;
      let p;
      let k;
      let g;
      (function (e) {
        e.Primary = "primary";
        e.Secondary = "secondary";
        e.Warning = "warning";
        e.Success = "success";
        e.Inversed = "inversed";
      })((u ||= {}));
      (function (e) {
        e.Left = "left";
        e.Right = "right";
      })((h ||= {}));
      (function (e) {
        e.Small = "small";
        e.Large = "large";
      })((p ||= {}));
      (function (e) {
        e.Submit = "submit";
        e.Button = "button";
      })((k ||= {}));
      (function (e) {
        e.Filled = "filled";
        e.Outlined = "outlined";
        e.Flat = "flat";
      })((g ||= {}));
      const m = (e, t) =>
        e &&
        (0, b.jsx)(
          "span",
          {
            className: l()(d.Z["bloko-button__icon"], {
              [d.Z[`bloko-button__icon_${t}`]]: t,
            }),
            children: e,
          },
          "icon",
        );
      const _ = (e) =>
        (0, b.jsx)(
          s(),
          {
            useSpan: true,
            children: e,
          },
          "children",
        );
      const f = (e, t, o, n) =>
        t
          ? (0, b.jsxs)(
              s(),
              {
                useSpan: true,
                children: [
                  (0, b.jsx)("span", {
                    className: d.Z["bloko-button__content"],
                    children: e,
                  }),
                  (0, b.jsx)("span", {
                    className: d.Z["bloko-button__loading"],
                    children: t,
                  }),
                ],
              },
              "children",
            )
          : o && n === "right"
            ? [_(e), m(o, n)]
            : [m(o, n), _(e)];
      const v = (e) => {
        let {
          scale: t,
          kind: o,
          type: n = k.Button,
          children: i,
          pressed: r,
          innerRef: s,
          Element: a = "button",
          icon: c,
          iconPosition: u,
          stretched: h,
          collapsible: p,
          loading: m,
          invalid: _,
          appearance: v = g.Filled,
          ...C
        } = e;
        const w = {};
        if (a === "button" && n) {
          w.type = n;
        }
        if (s) {
          w.ref = s;
        }
        return (0, b.jsx)(a, {
          className: l()(d.Z["bloko-button"], {
            [d.Z[`bloko-button_kind-${o}`]]: o,
            [d.Z["bloko-button_icon-only"]]: c && i === undefined && !t,
            [d.Z[`bloko-button_icon-only-${t}`]]: c && i === undefined && t,
            [d.Z[`bloko-button_scale-${t}`]]: t,
            [d.Z["bloko-button_pressed"]]: r,
            [d.Z["bloko-button_stretched"]]: h,
            [d.Z["bloko-button_collapsible"]]: p,
            [d.Z["bloko-button_loading"]]: !!m,
            [d.Z["bloko-button_invalid"]]: _,
            [d.Z["bloko-button_appearance-outlined"]]: v === g.Outlined,
            [d.Z["bloko-button_appearance-flat"]]: v === g.Flat,
          }),
          ...w,
          ...C,
          children: f(i, m, c, u),
        });
      };
      const C = (0, n.memo)(v);
    },
    178466: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => d,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(585614);
      var r = o(955624);
      var s = o(191312);
      var a = o(747820);
      var c = o(343856);
      const d = (e) => {
        let { kind: t, disabled: o, onClick: n, ...d } = e;
        const b = o ? l.Z.Gray50 : l.Z.Gray60;
        return (0, c.jsx)("span", {
          ...d,
          onClick: n,
          className: i()(a.Z["bloko-calendar__switcher-arrow"], {
            [a.Z["bloko-calendar__switcher-arrow_back"]]: t === "left",
            [a.Z["bloko-calendar__switcher-arrow_next"]]: t === "right",
            [a.Z["bloko-calendar__switcher-arrow_disabled"]]: o,
          }),
          children:
            t === "left"
              ? (0, c.jsx)(r.Z, {
                  initial: b,
                })
              : (0, c.jsx)(s.Z, {
                  initial: b,
                }),
        });
      };
    },
    117219: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => b,
      });
      var n = o(59213);
      var i = o(332996);
      var l = o.n(i);
      var r = o(246189);
      var s = o.n(r);
      var a = o(742334);
      var c = o.n(a);
      var d = o(343856);
      const b = (e) => {
        let {
          kind: t,
          translate: o,
          date: i,
          initialDates: r,
          onClick: a,
          onPick: b,
          showInterval: u,
        } = e;
        switch (t) {
          case n.CalendarPickerAndSwitcherKind.Month:
            return (0, d.jsx)(s(), {
              translate: o,
              date: i,
              onPick: b,
            });
          case n.CalendarPickerAndSwitcherKind.Year:
            return (0, d.jsx)(c(), {
              date: i,
              onPick: b,
            });
          default:
            return (0, d.jsx)(l(), {
              initialDates: r,
              translate: o,
              onClick: a,
              showInterval: u,
            });
        }
      };
    },
    674505: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(93400);
      var s = o(59213);
      var a = o(945483);
      var c = o.n(a);
      var d = o(747820);
      var b = o(343856);
      const u = {
        month: {
          back: "bloko-calendar-prev-month",
          next: "bloko-calendar-next-month",
        },
        year: {
          back: "bloko-calendar-prev-year",
          next: "bloko-calendar-next-year",
        },
      };
      const h = (e) => {
        let {
          onSwitch: t,
          onArrowClick: o,
          kind: i,
          visiblePicker: a,
          children: h,
          disabled: p,
        } = e;
        const k = a !== s.CalendarPickerAndSwitcherKind.Day || p;
        const g =
          i === s.CalendarPickerAndSwitcherKind.Month
            ? r.subMonths
            : r.subYears;
        const m =
          i === s.CalendarPickerAndSwitcherKind.Month
            ? r.addMonths
            : r.addYears;
        const _ = (0, n.useCallback)(
          () => t(a === i ? s.CalendarPickerAndSwitcherKind.Day : i),
          [i, t, a],
        );
        return (0, b.jsxs)("span", {
          className: d.Z["bloko-calendar__switcher"],
          children: [
            (0, b.jsx)(c(), {
              kind: "left",
              disabled: k,
              onClick: () => o(g),
              "data-qa": u[i].back,
            }),
            (0, b.jsx)("span", {
              className: l()(d.Z["bloko-calendar__name"], {
                [d.Z["bloko-calendar__name_months"]]:
                  i === s.CalendarPickerAndSwitcherKind.Month,
                [d.Z["bloko-calendar__name_years"]]:
                  i === s.CalendarPickerAndSwitcherKind.Year,
                [d.Z["bloko-calendar__name_disabled"]]: p,
              }),
              onClick: _,
              children: h,
            }),
            (0, b.jsx)(c(), {
              kind: "right",
              disabled: k,
              onClick: () => o(m),
              "data-qa": u[i].next,
            }),
          ],
        });
      };
    },
    787857: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => d,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(171189);
      var s = o(93400);
      var a = o(747820);
      var c = o(343856);
      const d = (e) => {
        let { initialDates: t, translate: o, onClick: i, showInterval: d } = e;
        return (0, c.jsxs)(n.Fragment, {
          children: [
            (0, c.jsx)("div", {
              className: a.Z["bloko-calendar__weekdays"],
              children: r.WEEKDAYS_ORDER.map((e) =>
                (0, c.jsx)(
                  "span",
                  {
                    className: a.Z["bloko-calendar__weekday"],
                    children: o.weekday[e],
                  },
                  e,
                ),
              ),
            }),
            (0, c.jsx)("div", {
              className: a.Z["bloko-calendar__days"],
              children: t.map((e) => {
                let {
                  date: t,
                  isDisabled: o,
                  isHighlighted: n,
                  isWeekend: r,
                  isToday: b,
                  isBegin: u,
                  isEnd: h,
                } = e;
                return (0, c.jsx)(
                  "span",
                  {
                    className: l()(a.Z["bloko-calendar__day"], {
                      [a.Z["bloko-calendar__day_disabled"]]:
                        o || i === undefined,
                      [a.Z["bloko-calendar__day_weekend"]]: r,
                      [a.Z["bloko-calendar__day_selected"]]: n && !d,
                      [a.Z["bloko-calendar__day_begin"]]: u,
                      [a.Z["bloko-calendar__day_end"]]: h,
                      [a.Z["bloko-calendar__day_interval"]]: d && n && !h && !u,
                      [a.Z["bloko-calendar__day_today"]]: b,
                    }),
                    onClick: () =>
                      !o && (i == null ? undefined : i((0, s.toISO)(t))),
                    "data-qa": (0, s.toISO)(t),
                    children: t.getDate(),
                  },
                  t.getTime(),
                );
              }),
            }),
          ],
        });
      };
    },
    434107: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(93400);
      var r = o(747820);
      var s = o(343856);
      const a = (e) => {
        let { translate: t, date: o, onPick: n } = e;
        return (0, s.jsx)("ol", {
          className: r.Z["bloko-calendar__months"],
          children: t.month.map((e, t) =>
            (0, s.jsxs)(
              "li",
              {
                className: i()(r.Z["bloko-calendar__month"], {
                  [r.Z["bloko-calendar__month_selected"]]: o.getMonth() === t,
                }),
                onClick: () => n(t, l.setMonth),
                children: [
                  (0, s.jsx)("div", {
                    className: i()(r.Z["bloko-calendar__month-number"], {
                      [r.Z["bloko-calendar__month-number_selected"]]:
                        o.getMonth() === t,
                    }),
                    children: t + 1,
                  }),
                  (0, s.jsx)("div", {
                    className: r.Z["bloko-calendar__month-name"],
                    children: e,
                  }),
                ],
              },
              e,
            ),
          ),
        });
      };
    },
    951679: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => b,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(171189);
      var s = o(93400);
      var a = o(747820);
      var c = o(343856);
      const d = [...Array(r.YEARS_IN_LIST).keys()];
      const b = (e) => {
        let { date: t, onPick: o } = e;
        const i = (0, n.useRef)(null);
        const b = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          const e = r.UPPER_YEAR_LISTS_LIMITS[0];
          const o =
            r.UPPER_YEAR_LISTS_LIMITS[r.UPPER_YEAR_LISTS_LIMITS.length - 1] -
            r.YEARS_IN_LIST +
            1;
          if (t.getFullYear() > e) {
            if (i.current) {
              i.current.scrollTop = 0;
            }
          } else if (t.getFullYear() < o) {
            if (i.current) {
              i.current.scrollTop = i.current.scrollHeight;
            }
          } else {
            if (!i.current || !b.current) {
              return;
            }
            i.current.scrollTop =
              b.current.offsetTop -
              i.current.offsetTop -
              i.current.getBoundingClientRect().height / 2;
          }
        }, [t]);
        return (0, c.jsx)("div", {
          ref: i,
          className: a.Z["bloko-calendar__years"],
          children: r.UPPER_YEAR_LISTS_LIMITS.map((e) =>
            (0, c.jsxs)(
              n.Fragment,
              {
                children: [
                  (0, c.jsxs)("div", {
                    className: a.Z["bloko-calendar__years-range"],
                    children: [e, "\u2009–\u2009", e - r.YEARS_IN_LIST + 1],
                  }),
                  (0, c.jsx)("div", {
                    className: a.Z["bloko-calendar__years-list"],
                    children: d.map((n) => {
                      const i = e - n;
                      return (0, c.jsx)(
                        "span",
                        {
                          ref: t.getFullYear() === i ? b : null,
                          className: l()(
                            a.Z["bloko-calendar__years-list-item"],
                            {
                              [a.Z["bloko-calendar__years-list-item_selected"]]:
                                t.getFullYear() === i,
                            },
                          ),
                          onClick: () => o(i, s.setYear),
                          children: i,
                        },
                        i,
                      );
                    }),
                  }),
                ],
              },
              e,
            ),
          ),
        });
      };
    },
    363484: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => p,
      });
      var n = o(394280);
      var i = o(93400);
      var l = o(59213);
      var r = o(128653);
      var s = o(837230);
      var a = o.n(s);
      var c = o(46019);
      var d = o.n(c);
      var b = o(747820);
      var u = o(343856);
      const h = (e) => {
        let {
          initialDate: t,
          highlighted: o = [],
          disabled: s = [],
          disabledWeekdays: c = [],
          disablePartMonth: h = true,
          language: p = r.CalendarLanguage.Ru,
          translations: k,
          onDateChange: g,
          onDateClick: m,
          disableSwitchers: _ = false,
          disableDaysBeforeDate: f,
          disableDaysAfterDate: v,
          showInterval: C,
          source: w,
        } = e;
        const x = (0, n.useMemo)(() => (0, l.translator)(p, k), [p, k]);
        const [y, S] = (0, n.useState)((0, i.startOfMonth)((0, i.toDate)(t)));
        const [T, E] = (0, n.useState)(l.CalendarPickerAndSwitcherKind.Day);
        const L = (0, l.prepareCalendarDates)(
          y,
          o.map((e) => (0, i.toDate)(e)),
          s,
          c,
          h,
          f,
          v,
          C,
        );
        const I = (0, n.useCallback)(
          (e) => {
            if (!_ && T === l.CalendarPickerAndSwitcherKind.Day) {
              const t = e(y, 1);
              S(t);
              if (g != null) {
                g((0, i.toISO)(t));
              }
            }
          },
          [y, _, g, T],
        );
        const B = (0, n.useCallback)(
          (e, t) => {
            const o = t(y, e);
            S(o);
            E(l.CalendarPickerAndSwitcherKind.Day);
            if (g != null) {
              g((0, i.toISO)(o));
            }
          },
          [y, g],
        );
        const M = (0, n.useCallback)(
          (e) => {
            if (!_) {
              E(e);
            }
          },
          [_],
        );
        return (0, u.jsxs)("div", {
          className: b.Z["bloko-calendar"],
          source: w,
          children: [
            (0, u.jsxs)("div", {
              className: b.Z["bloko-calendar__switcher-wrapper"],
              "data-qa": "bloko-calendar-current-month",
              "data-year-month": (0, i.toISO)(y).substring(0, 7),
              children: [
                (0, u.jsx)(d(), {
                  kind: l.CalendarPickerAndSwitcherKind.Month,
                  onSwitch: M,
                  onArrowClick: I,
                  visiblePicker: T,
                  disabled: _,
                  children: x.month[y.getMonth()],
                }),
                (0, u.jsx)(d(), {
                  kind: l.CalendarPickerAndSwitcherKind.Year,
                  onSwitch: M,
                  onArrowClick: I,
                  visiblePicker: T,
                  disabled: _,
                  children: y.getFullYear(),
                }),
              ],
            }),
            (0, u.jsx)("div", {
              className: b.Z["bloko-calendar__base"],
              children: (0, u.jsx)(a(), {
                showInterval: C,
                kind: T,
                translate: x,
                date: y,
                initialDates: L,
                onClick: m,
                onPick: B,
              }),
            }),
          ],
        });
      };
      const p = (0, n.memo)(h);
    },
    597032: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(394280);
      var i = o(718286);
      var l = o.n(i);
      var r = o(59213);
      var s = o(343856);
      const a = (e) => {
        let { initialDate: t, start: o, end: i, onDateClick: a, ...c } = e;
        const [d, b] = (0, n.useState)(
          (0, r.makeHighlightedInterval)({
            startString: o,
            endString: i,
          }),
        );
        const u = (0, n.useCallback)(
          (e) => {
            if (d.length === 0 || d.length > 1) {
              b([e]);
            } else {
              const t = (0, r.makeHighlightedInterval)({
                startString: d[0],
                endString: e,
              });
              a({
                start: t[0],
                end: t[t.length - 1],
              });
              b(t);
            }
          },
          [d, a],
        );
        return (0, s.jsx)(l(), {
          ...c,
          initialDate: t,
          highlighted: d,
          onDateClick: u,
          showInterval: d.length > 1,
        });
      };
    },
    265434: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(718286);
      var l = o.n(i);
      var r = o(343856);
      const s = (e) => {
        let { initialDate: t, highlighted: o = [], onDateClick: i, ...s } = e;
        const [a, c] = (0, n.useState)(o);
        const d = (0, n.useCallback)(
          (e) => {
            let t;
            if (a.includes(e)) {
              t = a.filter((t) => t !== e);
              i({
                highlighted: t,
              });
            } else {
              t = [...a, e];
              i({
                highlighted: t,
                date: e,
              });
            }
            c(t);
          },
          [a, i],
        );
        return (0, r.jsx)(l(), {
          ...s,
          initialDate: t,
          highlighted: a,
          onDateClick: d,
        });
      };
    },
    967518: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(718286);
      var l = o.n(i);
      var r = o(343856);
      const s = (e) => {
        let { initialDate: t, highlighted: o, onDateClick: i, ...s } = e;
        const [a, c] = (0, n.useState)(o);
        const d = (0, n.useCallback)(
          (e) => {
            if (a === e) {
              i();
              c(undefined);
            } else {
              i(e);
              c(e);
            }
          },
          [a, i],
        );
        return (0, r.jsx)(l(), {
          ...s,
          initialDate: t,
          highlighted: a ? [a] : [],
          onDateClick: d,
        });
      };
    },
    84579: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => O,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(665164);
      var r = o.n(l);
      var s = o(955624);
      var a = o(585614);
      var c = o(191312);
      var d = o(607621);
      var b = o(845807);
      var u = o.n(b);
      var h = o(456486);
      var p = o.n(h);
      var k = o(182093);
      var g = o.n(k);
      var m = o(867318);
      var _ = o.n(m);
      var f = o(321046);
      var v = o.n(f);
      var C = o(93400);
      const w = "bloko-calendar__day_selected";
      const x = "bloko-calendar__day_disabled";
      const y = "bloko-calendar__day_today";
      const S = "bloko-calendar__day_weekend";
      const T = ".Bloko-Calendar-Previous-Month";
      const E = ".Bloko-Calendar-Next-Month";
      const L = ".Bloko-Calendar-Previous-Year";
      const I = ".Bloko-Calendar-Next-Year";
      const B = ".Bloko-Calendar-CurrentMonthDay";
      const M = "Bloko-Calendar-DateSelected";
      const N = i().View.extend({
        events: {
          "click .Bloko-Calendar-Previous-Month": "previousMonth",
          "click .Bloko-Calendar-Next-Month": "nextMonth",
          "click .Bloko-Calendar-Previous-Year": "previousYear",
          "click .Bloko-Calendar-Next-Year": "nextYear",
          "click .Bloko-Calendar-Dates": "select",
        },
        initialize() {
          this.listenTo(this.model, "change:disabledDates", this.disableDays);
          this.listenTo(this.model, "change:month", this.render);
          this.listenTo(this.model, "change:year", this.render);
          this.listenTo(this.model, "change:days", this.render);
          this.listenTo(this.model, "change:selectedDate", function () {
            this.highlightSelectedDay();
            this.trigger(M, this.model.get("selectedDate"));
          });
          this.listenTo(
            this.model,
            "change:isPreviousMonthDisabled",
            this.render,
          );
          this.listenTo(
            this.model,
            "change:isPreviousYearDisabled",
            this.render,
          );
          this.listenTo(this.model, "change:isNextMonthDisabled", this.render);
          this.listenTo(this.model, "change:isNextYearDisabled", this.render);
          this.render();
          if (this.model.options.selectedDate) {
            this.selectDate(this.model.options.selectedDate);
          }
        },
        renderIcons() {
          for (const e of [
            this.previousMonthIcon,
            this.nextMonthIcon,
            this.nextYearIcon,
            this.previousYearIcon,
          ]) {
            if (e) {
              e.destroy();
            }
          }
          this.previousMonthIcon = u().make(
            d.Z,
            r()(T, this.$calendar).get(0),
            {
              IconComponent: s.Z,
              iconProps: {
                initial: this.model.get("isPreviousMonthDisabled")
                  ? a.Z.Gray50
                  : a.Z.Gray60,
              },
            },
          );
          this.previousYearIcon = u().make(d.Z, r()(L, this.$calendar).get(0), {
            IconComponent: s.Z,
            iconProps: {
              initial: this.model.get("isPreviousYearDisabled")
                ? a.Z.Gray50
                : a.Z.Gray60,
            },
          });
          this.nextMonthIcon = u().make(d.Z, r()(E, this.$calendar).get(0), {
            IconComponent: c.Z,
            iconProps: {
              initial: this.model.get("isNextMonthDisabled")
                ? a.Z.Gray50
                : a.Z.Gray60,
            },
          });
          this.nextYearIcon = u().make(d.Z, r()(I, this.$calendar).get(0), {
            IconComponent: c.Z,
            iconProps: {
              initial: this.model.get("isNextYearDisabled")
                ? a.Z.Gray50
                : a.Z.Gray60,
            },
          });
        },
        render() {
          this.$calendar = r()(this.template(this.model.toJSON()));
          this.renderIcons();
          this.disableDays();
          this.highlightToday();
          this.highlightWeekend();
          if (this.model.get("selectedDate")) {
            this.highlightSelectedDay();
          }
          if (
            this.model.options.autoSelectFirstAvailableDate &&
            !this.model.get("selectedDate")
          ) {
            this.autoSelectFirstAvailableDate();
          }
          if (this.model.options.range) {
            this.setMonthSwitchers();
            this.setYearSwitchers();
          }
          this.$el.html(this.$calendar);
        },
        setMonthSwitchers() {
          const e = new Date(
            this.model.get("currentOpenedDate").getFullYear(),
            this.model.get("currentOpenedDate").getMonth(),
          ).getTime();
          this.model.set(
            "isPreviousMonthDisabled",
            new Date(
              this.model.options.range.from.getFullYear(),
              this.model.options.range.from.getMonth(),
            ).getTime() === e,
          );
          this.model.set(
            "isNextMonthDisabled",
            new Date(
              this.model.options.range.to.getFullYear(),
              this.model.options.range.to.getMonth(),
            ).getTime() === e,
          );
        },
        setYearSwitchers() {
          this.model.set(
            "isPreviousYearDisabled",
            (0, C.differenceInCalendarMonths)(
              this.model.get("currentOpenedDate"),
              this.model.options.range.from,
            ) < 12,
          );
          this.model.set(
            "isNextYearDisabled",
            (0, C.differenceInCalendarMonths)(
              this.model.options.range.to,
              this.model.get("currentOpenedDate"),
            ) < 12,
          );
        },
        template: (e) => _().render(e),
        previousMonth(e) {
          e.stopPropagation();
          if (!this.model.get("isPreviousMonthDisabled")) {
            this.model.set(
              "currentOpenedDate",
              (0, C.subMonths)(this.model.get("currentOpenedDate"), 1),
            );
          }
        },
        nextMonth(e) {
          if (e) {
            e.stopPropagation();
          }
          if (!this.model.get("isNextMonthDisabled")) {
            this.model.set(
              "currentOpenedDate",
              (0, C.addMonths)(this.model.get("currentOpenedDate"), 1),
            );
          }
        },
        previousYear(e) {
          e.stopPropagation();
          if (!this.model.get("isPreviousYearDisabled")) {
            this.model.set(
              "currentOpenedDate",
              (0, C.subYears)(this.model.get("currentOpenedDate"), 1),
            );
          }
        },
        nextYear(e) {
          if (e) {
            e.stopPropagation();
          }
          if (!this.model.get("isNextYearDisabled")) {
            this.model.set(
              "currentOpenedDate",
              (0, C.addYears)(this.model.get("currentOpenedDate"), 1),
            );
          }
        },
        select(e) {
          const t = r()(e.target).closest(B);
          const o = t.data("date");
          if (o && !t.hasClass(x)) {
            const e = new Date(this.model.get("currentOpenedDate"));
            e.setDate(o);
            this.selectDate(e);
          }
        },
        selectDate(e) {
          if (
            !(0, C.isSameMonth)({
              date: e,
              inDate: this.model.get("currentOpenedDate"),
            })
          ) {
            this.model.set(
              "currentOpenedDate",
              new Date(e.getFullYear(), e.getMonth()),
            );
          }
          this.model.set("selectedDate", e);
        },
        getDayElement(e, t, o) {
          return r()(
            `${B}[data-date='${e}'][data-month='${t}'][data-year='${o}']`,
            this.$calendar,
          );
        },
        highlightSelectedDay() {
          const e = this.model.get("selectedDate");
          if (
            (0, C.isSameMonth)({
              date: e,
              inDate: this.model.get("currentOpenedDate"),
            })
          ) {
            r()(B, this.$calendar).removeClass(w);
            const t = e.getDate();
            const o = e.getMonth();
            const n = e.getFullYear();
            this.getDayElement(t, o, n).addClass(w);
          }
        },
        highlightToday() {
          const e = new Date();
          if (
            (0, C.isSameMonth)({
              date: e,
              inDate: this.model.get("currentOpenedDate"),
            })
          ) {
            const e = this.model.get("days").filter((e) => {
              let { today: t } = e;
              return t === true;
            });
            const { dayNumber: t, month: o, year: n } = e[0];
            this.getDayElement(t, o, n).addClass(y);
          }
        },
        highlightWeekend() {
          this.model
            .get("days")
            .filter((e) => {
              let { weekend: t } = e;
              return t === true;
            })
            .forEach((e) => {
              let { dayNumber: t, month: o, year: n } = e;
              return this.getDayElement(t, o, n).addClass(S);
            });
        },
        autoSelectFirstAvailableDate() {
          let e = false;
          r()(B, this.$calendar).each((t, o) => {
            const n = r()(o);
            return (
              !!n.hasClass(x) ||
              ((e = true),
              this.selectDate(
                new Date(
                  this.model.get("currentOpenedDate").getFullYear(),
                  this.model.get("currentOpenedDate").getMonth(),
                  n.data("date"),
                ),
              ),
              false)
            );
          });
          if (!e) {
            this.nextMonth();
          }
        },
        disableDays() {
          this.model
            .get("days")
            .filter((e) => {
              let { disabled: t } = e;
              return t === true;
            })
            .forEach((e) => {
              let { dayNumber: t, month: o, year: n } = e;
              return this.getDayElement(t, o, n).addClass(x);
            });
        },
        setDisabledDates(e) {
          this.model.set("disabledDates", e);
          if (this.model.options.autoSelectFirstAvailableDate) {
            this.autoSelectFirstAvailableDate();
          }
        },
        getSelectedDate() {
          return this.model.get("selectedDate");
        },
      });
      function P(e) {
        const t = e ? new Date(e) : new Date();
        t.setHours(0, 0, 0, 0);
        return t;
      }
      const O = u().build({
        defaults: {
          range: null,
          initialDate: new Date(),
          selectedDate: null,
          disabledDates: [],
          disabledWeekDays: [],
          autoSelectFirstAvailableDate: false,
          disableDaysBeforeDate: null,
          disableDaysAfterDate: null,
          disableInitialDate: false,
        },
        create(e, t) {
          if (
            !t.translations ||
            !Array.isArray(t.translations.weekdays) ||
            !Array.isArray(t.translations.months)
          ) {
            throw new Error(
              "Bloko/Calendar: No or incorrect required param: translations",
            );
          }
          t.range = t.range
            ? {
                from: P(t.range.from),
                to: P(t.range.to),
              }
            : t.range;
          t.disabledDates = t.disabledDates.map((e) => P(e));
          t.initialDate = P(t.initialDate);
          t.selectedDate = t.selectedDate ? P(t.selectedDate) : null;
          const o = new N({
            model: new (v())(t),
            el: e,
          });
          if (g().mobile()) {
            r()(e).addClass("bloko-calendar-reset-tap-highlighting");
          }
          const n = p().extend({
            selectDate(e) {
              o.selectDate(P(e));
            },
            setDisabledDates(e) {
              o.setDisabledDates(e.map((e) => P(e)));
            },
            getSelectedDate: () => o.getSelectedDate(),
          });
          o.on(M, (e) => {
            n._trigger(M, e);
          });
          return n;
        },
        componentName: "bloko/blocks/calendar",
      });
    },
    230494: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(93400);
      var r = o(59213);
      const s = i().Model.extend({
        constructor(e) {
          this.options = e;
          i().Model.call(this, {
            currentOpenedDate: e.initialDate,
            selectedDate: null,
            disabledDates: e.disabledDates,
            month: this.options.translations.months[e.initialDate.getMonth()],
            year: e.initialDate.getFullYear(),
            weekdays: this.options.translations.weekdays,
            days: this.prepareCalendarDates(e.initialDate),
            isPreviousMonthDisabled: false,
            isNextMonthDisabled: false,
            previousMonthArrowKind: "action",
            nextMonthArrowKind: "action",
            isPreviousYearDisabled: false,
            isNextYearDisabled: false,
            previousYearArrowKind: "action",
            nextYearArrowKind: "action",
          });
        },
        initialize() {
          this.on("change:currentOpenedDate", function (e, t) {
            this.set({
              month: this.options.translations.months[t.getMonth()],
              year: t.getFullYear(),
              days: this.prepareCalendarDates(t),
            });
          });
        },
        prepareCalendarDates(e) {
          const {
            disabledDates: t,
            disabledWeekDays: o,
            disableDaysBeforeDate: n,
            disableDaysAfterDate: i,
          } = this.options;
          const s = t.map((e) => (0, l.toISO)(e));
          return (0, r.prepareCalendarDates)(
            e,
            [],
            s,
            o.map((e) => (e === 7 ? 0 : e)),
            true,
            n,
            i,
          ).map((e) => {
            let { date: t, isDisabled: o, isWeekend: n, isToday: i } = e;
            return {
              dayNumber: t.getDate(),
              month: t.getMonth(),
              year: t.getFullYear(),
              iso: (0, l.toISO)(t),
              disabled: o,
              weekend: n,
              today: i,
            };
          });
        },
      });
    },
    924409: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        MAX_DATES_IN_CALENDAR: () => i,
        MONTHS: () => d,
        UPPER_YEAR_LISTS_LIMITS: () => a,
        WEEKDAYS: () => b,
        WEEKDAYS_AMOUNT: () => s,
        WEEKDAYS_ORDER: () => r,
        WEEKENDS: () => l,
        YEARS_IN_LIST: () => c,
      });
      var n = o(128653);
      const i = 42;
      const l = [0, 6];
      const r = [1, 2, 3, 4, 5, 6, 0];
      const s = 7;
      const a = [2039, 2019, 1999, 1979, 1959, 1939, 1919];
      const c = 20;
      const d = {
        [n.CalendarLanguage.Ru]: Object.values(n.MonthRu),
        [n.CalendarLanguage.En]: Object.values(n.MonthEn),
      };
      const b = {
        [n.CalendarLanguage.Ru]: [
          n.WeekdayRu.Sun,
          n.WeekdayRu.Mon,
          n.WeekdayRu.Tue,
          n.WeekdayRu.Wed,
          n.WeekdayRu.Thu,
          n.WeekdayRu.Fri,
          n.WeekdayRu.Sat,
        ],
        [n.CalendarLanguage.En]: [
          n.WeekdayEn.Sun,
          n.WeekdayEn.Mon,
          n.WeekdayEn.Tue,
          n.WeekdayEn.Wed,
          n.WeekdayEn.Thu,
          n.WeekdayEn.Fri,
          n.WeekdayEn.Sat,
        ],
      };
    },
    383211: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        addDays: () => s,
        addMonths: () => p,
        addYears: () => _,
        differenceInCalendarMonths: () => v,
        eachDay: () => u,
        getDaysInMonth: () => l,
        isSameMonth: () => g,
        lastDayOfMonth: () => i,
        setMonth: () => h,
        setYear: () => m,
        startOfMonth: () => d,
        subDays: () => b,
        subMonths: () => k,
        subYears: () => f,
        toDate: () => c,
        toISO: () => a,
      });
      const n = (e) => e.split(/[T ]/)[0];
      const i = (e) => {
        const t = new Date(e);
        t.setFullYear(t.getFullYear(), t.getMonth() + 1, 0);
        return t;
      };
      const l = (e) => i(e).getDate();
      const r = (e) => {
        const t = ((e) => {
          const t = /^(\d{4})/.exec(e)[1];
          return {
            year: parseInt(t, 10),
            restDateString: e.slice(t.length),
          };
        })(n(e));
        const o = /^-?(\d{2})-?(\d{2})$/.exec(t.restDateString);
        const i = new Date(0);
        const l = parseInt(o[1], 10) - 1;
        const r = parseInt(o[2], 10);
        i.setUTCFullYear(t.year, l, r);
        return i;
      };
      const s = (e, t) => {
        const o = new Date(e);
        o.setDate(o.getDate() + t);
        return o;
      };
      const a = (e) =>
        n(
          new Date(
            Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
          ).toISOString(),
        );
      const c = (e) => {
        const t = r(e);
        return new Date(
          t.getTime() +
            ((e) => new Date(e.getTime()).getTimezoneOffset() * 60 * 1000)(t),
        );
      };
      const d = (e) => {
        const t = new Date(e);
        t.setDate(1);
        return t;
      };
      const b = (e, t) => s(e, -t);
      const u = (e, t) => {
        const o = new Date(e);
        const n = new Date(t);
        const i = [];
        while (o.getTime() <= n.getTime()) {
          const e = new Date(o);
          i.push(e);
          o.setDate(o.getDate() + 1);
        }
        return i;
      };
      const h = (e, t) => {
        const o = c(a(e));
        const n = t;
        const i = o.getFullYear();
        const r = o.getDate();
        const s = new Date(0);
        s.setFullYear(i, n);
        s.setHours(0, 0, 0, 0);
        const d = l(s);
        o.setMonth(n, Math.min(r, d));
        return o;
      };
      const p = (e, t) => {
        const o = c(a(e));
        const n = o.getMonth() + t;
        return h(o, n);
      };
      const k = (e, t) => p(e, -t);
      const g = (e) => {
        let { date: t, inDate: o } = e;
        return (
          !!t &&
          t.getFullYear() === o.getFullYear() &&
          t.getMonth() === o.getMonth()
        );
      };
      const m = (e, t) => {
        const o = c(a(e));
        const n = t;
        o.setFullYear(n);
        return o;
      };
      const _ = (e, t) => {
        const o = c(a(e));
        const n = o.getFullYear() + t;
        return m(o, n);
      };
      const f = (e, t) => _(e, -t);
      const v = (e, t) => {
        const o = c(a(e));
        const n = c(a(t));
        return (
          (o.getFullYear() - n.getFullYear()) * 12 +
          (o.getMonth() - n.getMonth())
        );
      };
    },
    554296: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        CalendarEnrichOptionName: () => s,
        CalendarPickerAndSwitcherKind: () => l,
        calculateDisabledDates: () => c,
        calculateWeekends: () => d,
        enrichIfPresent: () => a,
        makeHighlightedInterval: () => u,
        prepareCalendarDates: () => b,
        translator: () => r,
      });
      var n = o(171189);
      var i = o(93400);
      let l;
      (function (e) {
        e.Day = "day";
        e.Month = "month";
        e.Year = "year";
      })((l ||= {}));
      const r = (e, t) => ({
        month: (t == null ? undefined : t.months) || n.MONTHS[e],
        weekday: (t == null ? undefined : t.weekdays) || n.WEEKDAYS[e],
      });
      let s;
      (function (e) {
        e.IsHighlighted = "isHighlighted";
        e.IsDisabled = "isDisabled";
        e.IsWeekend = "isWeekend";
        e.IsToday = "isToday";
        e.IsBegin = "isBegin";
        e.IsEnd = "isEnd";
      })((s ||= {}));
      const a = (e, t, o) => {
        const n = t.map((e) => (0, i.toISO)(e));
        return e.map((e) => ({
          ...e,
          [o]: n.includes((0, i.toISO)(e.date)),
        }));
      };
      const c = (e, t, o, l, r, s, a) => {
        const c = s
          ? (0, i.eachDay)(e[0].date, (0, i.toDate)((0, i.toISO)(new Date(s))))
              .slice(0, -1)
              .map((e) => (0, i.toISO)(e))
          : [];
        const d = a
          ? (0, i.eachDay)(
              (0, i.toDate)((0, i.toISO)(new Date(a))),
              e[n.MAX_DATES_IN_CALENDAR - 1].date,
            )
              .slice(1)
              .map((e) => (0, i.toISO)(e))
          : [];
        return t.concat(
          e
            .filter((e) => {
              let { date: t } = e;
              return (
                (o && t.getMonth() !== l.getMonth()) ||
                r.includes(t.getDay()) ||
                c.includes((0, i.toISO)(t)) ||
                d.includes((0, i.toISO)(t))
              );
            })
            .map((e) => {
              let { date: t } = e;
              return t;
            }),
        );
      };
      const d = (e) =>
        e
          .filter((e) => {
            let { date: t } = e;
            return n.WEEKENDS.includes(t.getDay());
          })
          .map((e) => {
            let { date: t } = e;
            return t;
          });
      const b = function (e, t = [], o = [], l = []) {
        let r =
          !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
        let b = arguments.length > 5 ? arguments[5] : undefined;
        let u = arguments.length > 6 ? arguments[6] : undefined;
        let h = arguments.length > 7 ? arguments[7] : undefined;
        const p = ((0, i.startOfMonth)(e).getDay() || n.WEEKDAYS_AMOUNT) - 1;
        const k = (0, i.subDays)((0, i.startOfMonth)(e), p);
        const g = (0, i.addMonths)((0, i.lastDayOfMonth)(e), 1);
        let m = (0, i.eachDay)(k, g)
          .slice(0, n.MAX_DATES_IN_CALENDAR)
          .map((e) => ({
            date: e,
          }));
        m = a(m, t, s.IsHighlighted);
        m = a(
          m,
          c(
            m,
            o.map((e) => (0, i.toDate)(e)),
            r,
            e,
            l,
            b,
            u,
          ),
          s.IsDisabled,
        );
        m = a(m, d(m), s.IsWeekend);
        m = a(m, [new Date()], s.IsToday);
        if (h) {
          m = a(m, [t[0]], s.IsBegin);
          m = a(m, [t[t.length - 1]], s.IsEnd);
        }
        return m;
      };
      const u = (e) => {
        let { startString: t, endString: o } = e;
        if (!t || !o) {
          return [];
        }
        let n = (0, i.toDate)(t);
        let l = (0, i.toDate)(o);
        if (n > l) {
          const e = n;
          n = l;
          l = e;
        }
        return (0, i.eachDay)(n, l).map((e) => (0, i.toISO)(e));
      };
    },
    907121: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        IntervalCalendarPicker: () => r.a,
        MultipleCalendarPicker: () => a.a,
        SingleCalendarPicker: () => d.a,
        default: () => b,
      });
      var n = o(718286);
      var i = o.n(n);
      var l = o(645284);
      var r = o.n(l);
      var s = o(260725);
      var a = o.n(s);
      var c = o(886639);
      var d = o.n(c);
      const b = i();
    },
    128245: function (e, t, o) {
      "use strict";

      let n;
      let i;
      let l;
      let r;
      let s;
      o.r(t);
      o.d(t, {
        CalendarLanguage: () => s,
        MonthEn: () => r,
        MonthRu: () => l,
        WeekdayEn: () => i,
        WeekdayRu: () => n,
        default: () => a,
      });
      (function (e) {
        e.Mon = "пн";
        e.Tue = "вт";
        e.Wed = "ср";
        e.Thu = "чт";
        e.Fri = "пт";
        e.Sat = "сб";
        e.Sun = "вс";
      })((n ||= {}));
      (function (e) {
        e.Mon = "mon";
        e.Tue = "tue";
        e.Wed = "wed";
        e.Thu = "thu";
        e.Fri = "fri";
        e.Sat = "sat";
        e.Sun = "sun";
      })((i ||= {}));
      (function (e) {
        e.Jan = "Январь";
        e.Feb = "Февраль";
        e.Mar = "Март";
        e.Apr = "Апрель";
        e.May = "Май";
        e.Jun = "Июнь";
        e.Jul = "Июль";
        e.Aug = "Август";
        e.Sep = "Сентябрь";
        e.Oct = "Октябрь";
        e.Nov = "Ноябрь";
        e.Dec = "Декабрь";
      })((l ||= {}));
      (function (e) {
        e.Jan = "January";
        e.Feb = "February";
        e.Mar = "March";
        e.Apr = "April";
        e.May = "May";
        e.Jun = "June";
        e.Jul = "July";
        e.Aug = "August";
        e.Sep = "September";
        e.Oct = "October";
        e.Nov = "November";
        e.Dec = "December";
      })((r ||= {}));
      (function (e) {
        e.En = "en";
        e.Ru = "ru";
      })((s ||= {}));
      const a = {
        weekdays: Object.values(n),
        months: Object.values(l),
      };
    },
    908867: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => u,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      const r = "bloko-checkbox";
      const s = "bloko-checkbox__text";
      const a = "bloko-checkbox__input";
      const c = "bloko-checkbox__opening-content";
      const d = "bloko-checkbox_invalid";
      var b = o(343856);
      const u = (e) => {
        let {
          children: t,
          invalid: o,
          innerRef: i,
          openingContent: u,
          indeterminate: h = false,
          source: p,
          labelProps: k,
          wrapperProps: g,
          ...m
        } = e;
        const _ = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          if (_.current) {
            _.current.indeterminate = h;
          }
        }, [h]);
        return (0, b.jsxs)("label", {
          className: l()(r, {
            [d]: o,
          }),
          ...g,
          ref: i,
          source: p,
          children: [
            (0, b.jsx)("input", {
              ...m,
              ref: _,
              className: a,
              type: "checkbox",
            }),
            (0, b.jsxs)("span", {
              ...k,
              suppressHydrationWarning: true,
              className: s,
              children: [
                t,
                u
                  ? (0, b.jsx)("div", {
                      className: c,
                      suppressHydrationWarning: true,
                      children: u,
                    })
                  : null,
              ],
            }),
          ],
        });
      };
    },
    720220: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(231039);
      var i = o(343856);
      const l = (e) => {
        const {
          children: t,
          innerRef: o,
          labelProps: l,
          wrapperProps: r,
          source: s,
          ...a
        } = e;
        return (0, i.jsxs)("label", {
          className: n.Z["bloko-chips-chip"],
          ...r,
          ref: o,
          source: s,
          children: [
            (0, i.jsx)("input", {
              ...a,
              type: "checkbox",
              className: n.Z["bloko-chips-chip__input"],
            }),
            (0, i.jsx)("span", {
              className: n.Z["bloko-chips-chip__content"],
              ...l,
              children: t,
            }),
          ],
        });
      };
    },
    23004: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(231039);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "a", ...o } = e;
        return (0, i.jsx)(t, {
          className: n.Z["bloko-chips-chip-link"],
          ...o,
        });
      };
    },
    721519: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(231039);
      var i = o(343856);
      const l = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("p", {
          className: n.Z["bloko-chips-multiline-container"],
          children: t,
        });
      };
    },
    337992: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(231039);
      var i = o(343856);
      const l = (e) => {
        const {
          children: t,
          innerRef: o,
          labelProps: l,
          wrapperProps: r,
          source: s,
          ...a
        } = e;
        return (0, i.jsxs)("label", {
          className: n.Z["bloko-chips-chip"],
          ...r,
          ref: o,
          source: s,
          children: [
            (0, i.jsx)("input", {
              ...a,
              type: "radio",
              className: n.Z["bloko-chips-chip__input"],
            }),
            (0, i.jsx)("span", {
              className: n.Z["bloko-chips-chip__content"],
              ...l,
              children: t,
            }),
          ],
        });
      };
    },
    600737: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(720220);
      var l = o(343856);
      const r = (e) => (0, n.isValidElement)(e) && e.type === i.default;
      const s = (e) => {
        let { children: t } = e;
        const o = (0, n.useRef)(n.Children.toArray(t).filter(r));
        const [i, s] = (0, n.useState)(
          ((e) => {
            const t = e.map((e) => !!e.props.checked);
            if (t[0] || !t.some(Boolean)) {
              return t.map((e, t) => t === 0);
            } else {
              return t;
            }
          })(o.current),
        );
        const a = (0, n.useCallback)(
          (e, t) => {
            const o = ((e, t, o) => {
              let n;
              const i = e === 0;
              n = [...o];
              n[e] = t;
              if (i) {
                n = new Array(o.length).fill(false);
                n[0] = true;
                return n;
              }
              const [, ...l] = n;
              n[0] = !l.some(Boolean);
              return n;
            })(e, t.target.checked, i);
            s(o);
          },
          [i],
        );
        return (0, l.jsx)(l.Fragment, {
          children: o.current.map((e, t) =>
            (0, n.cloneElement)(e, {
              checked: i[t],
              onChange: (o) => {
                const n = e.props.onChange;
                if (n) {
                  n(o);
                }
                a(t, o);
              },
            }),
          ),
        });
      };
    },
    53999: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        CheckboxChip: () => n.default,
        LinkChip: () => i.default,
        MultiLineContainer: () => l.default,
        RadioChip: () => r.default,
        ResetChipsWrapper: () => s.default,
      });
      var n = o(720220);
      var i = o(23004);
      var l = o(721519);
      var r = o(337992);
      var s = o(600737);
    },
    191694: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(563483);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "div", ...o } = e;
        return (0, i.jsx)(t, {
          className: n.Z["bloko-columns-row"],
          ...o,
        });
      };
    },
    455921: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(563483);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "div", ...o } = e;
        return (0, i.jsx)(t, {
          className: n.Z["bloko-columns-wrapper"],
          ...o,
        });
      };
    },
    761799: function (e, t, o) {
      "use strict";

      o.r(t);
    },
    17259: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ColumnsRow: () => c.a,
        ColumnsWrapper: () => b.a,
        default: () => p,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(10469);
      var r = o.n(l);
      var s = o(549155);
      var a = o(453870);
      var c = o.n(a);
      var d = o(332493);
      var b = o.n(d);
      var u = o(563483);
      var h = o(343856);
      const p = (e) => {
        let {
          Element: t = "div",
          xs: o,
          s: n,
          m: l,
          l: a,
          container: c,
          ...d
        } = e;
        if (
          ((e, t) => {
            let { breakpoint: o, renderRestriction: n } = t;
            if (!o || !n) {
              return true;
            }
            const i = [o, s.Breakpoint.M].find((t) => e[t] !== undefined);
            return !!i && e[i] !== "0";
          })(
            {
              xs: o,
              s: n,
              m: l,
              l: a,
            },
            r()(),
          )
        ) {
          return (0, h.jsx)(t, {
            className: i()(u.Z["bloko-column"], {
              [u.Z["bloko-column_container"]]: c,
              [u.Z[`bloko-column_xs-${o}`]]: o,
              [u.Z[`bloko-column_s-${n}`]]: n,
              [u.Z[`bloko-column_m-${l}`]]: l,
              [u.Z[`bloko-column_l-${a}`]]: a,
            }),
            ...d,
          });
        } else {
          return null;
        }
      };
    },
    488209: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(257549);
      var l = o.n(i);
      var r = o(343856);
      const s = (e) => {
        let { forceReload: t } = e;
        const o = (0, n.useRef)(null);
        const [i, s] = (0, n.useState)(false);
        (0, n.useEffect)(() => {
          s(true);
        }, []);
        return (0, r.jsxs)("div", {
          style: {
            display: "none",
          },
          children: [
            (0, r.jsx)(l(), {
              ref: o,
              base: 1,
            }),
            i &&
              (0, r.jsx)(l(), {
                base: 1,
                ref: (e) => {
                  var n;
                  if (
                    e &&
                    (e == null ? undefined : e.className) !==
                      (o == null || (n = o.current) === null || n === undefined
                        ? undefined
                        : n.className)
                  ) {
                    t(true);
                  }
                },
              }),
          ],
        });
      };
    },
    348075: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(712499);
      var l = o.n(i);
      var r = o(343856);
      const s = (e) => {
        let { children: t } = e;
        const [o, i] = (0, n.useState)(false);
        return (0, r.jsxs)(
          n.Fragment,
          {
            children: [
              t,
              (0, r.jsx)(l(), {
                forceReload: i,
              }),
            ],
          },
          o ? "client-version" : "host-version",
        );
      };
    },
    223927: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(394280);
      var i = o(644830);
      var l = o.n(i);
      var r = o(479272);
      var s = o.n(r);
      var a = o(20189);
      var c = o(320125);
      var d = o(343856);
      const b = (e) => `- ${e}`;
      const u = (e) => {
        let {
          value: t = c.EMPTY_ARRAY,
          crossedOutValue: o = c.EMPTY_ARRAY,
          collection: i,
          nested: r = false,
          stretched: u,
          removable: h = true,
          removeItems: p,
          renderNestedTag: k = (e) => {
            let {
              item: { text: t },
            } = e;
            return t;
          },
          renderNestedTagHeader: g = (e) => {
            let { text: t } = e;
            return t;
          },
          crossedOutValueNameTransformation: m = b,
          renderAfterTags: _,
          renderAfterTagsRef: f,
        } = e;
        const v = (0, n.useCallback)(() => {
          if (!i || !i.getTopLevel().length) {
            return [];
          }
          return [
            ...(r
              ? (0, a.filterTreeByIdsWithParents)(i, t)
              : i.getExistModels(t)),
            ...i.getExistModels(o).map((e) => ({
              ...e,
              text: m(e.text),
            })),
          ];
        }, [t, i, r, o, m]);
        const [C, w] = (0, n.useState)(v());
        const x = (0, n.useRef)(true);
        (0, n.useEffect)(() => {
          if (x.current) {
            x.current = false;
          } else {
            w(v());
          }
        }, [v]);
        const y = (0, n.useCallback)(
          (e) => {
            w(
              C.map((t) =>
                t.id !== e
                  ? t
                  : {
                      ...t,
                      collapsed: !t.collapsed,
                    },
              ),
            );
          },
          [C],
        );
        if (r) {
          return (0, d.jsx)(l(), {
            nested: true,
            removable: h,
            renderAfterTags: _,
            renderAfterTagsRef: f,
            items: C.map((e) => {
              let {
                id: t,
                text: o,
                collapsed: n,
                items: i = c.EMPTY_ARRAY,
              } = e;
              return (0, d.jsx)(
                s(),
                {
                  expanded: !n,
                  onRemove: () =>
                    p(
                      i
                        .map((e) => {
                          let { id: t } = e;
                          return t;
                        })
                        .concat([t]),
                    ),
                  onToggle: () => y(t),
                  items: i.map((e) =>
                    (0, d.jsx)(
                      s(),
                      {
                        expanded: true,
                        onRemove: () => p([e.id]),
                        children: k({
                          id: t,
                          item: e,
                        }),
                      },
                      e.id,
                    ),
                  ),
                  children: g({
                    id: t,
                    text: o,
                  }),
                },
                t,
              );
            }),
          });
        } else {
          return (0, d.jsx)(l(), {
            stretched: u,
            removable: h,
            renderAfterTags: _,
            renderAfterTagsRef: f,
            items: C.map((e) => {
              let { id: t, text: o } = e;
              return (0, d.jsx)(
                s(),
                {
                  onRemove: () => p([t]),
                  children: o,
                },
                t,
              );
            }),
          });
        }
      };
      const h = (0, n.memo)(u);
    },
    891806: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => N,
      });
      var n = o(521611);
      var i = o(219247);
      var l = o(585614);
      var r = o(607621);
      var s = o(497700);
      var a = o.n(s);
      var c = o(845807);
      var d = o.n(c);
      var b = o(387218);
      var u = o.n(b);
      var h = o(20189);
      var p = o(494226);
      var k = o.n(p);
      var g = o(105650);
      var m = o.n(g);
      var _ = o(936973);
      var f = o.n(_);
      var v = o(153623);
      var C = o.n(v);
      var w = o(858496);
      var x = o.n(w);
      var y = o(223370);
      var S = o.n(y);
      var T = o(723530);
      var E = o.n(T);
      var L = o(417535);
      var I = o.n(L);
      var B = o(267312);
      var M = o.n(B);
      const N = d().build({
        defaults: {
          singleChoice: false,
          leavesOnly: false,
          template: k(),
        },
        create: function (e, t) {
          const o = {};
          const s = t.template;
          const c = [
            {
              name: "suggest",
              component: x(),
              params: {
                selfParams: t.suggestParams,
                singleChoice: t.singleChoice,
                leavesOnly: t.leavesOnly,
              },
            },
            {
              name: "tagList",
              component: E(),
              params: {
                selfParams: t.tagListParams,
              },
            },
            {
              name: "nestedTagList",
              component: f(),
              params: {
                selfParams: t.nestedTagListParams,
              },
            },
            {
              name: "treeSelectorPopup",
              component: M(),
              params: {
                selfParams: t.treeSelectorPopupParams,
                singleChoice: t.singleChoice,
                leavesOnly: t.leavesOnly,
              },
            },
          ];
          const b = [];
          const p = (0, h.fromTree)(t.dataJSON, (e) => {
            if (e.selected) {
              b.push(e.id);
            }
          });
          let k = t.selected;
          if (!k) {
            const e = new (u())(p, {
              singleChoice: t.singleChoice,
              leavesOnly: t.leavesOnly,
            });
            k = new (a())(e);
          }
          k.set(b);
          if (!e.querySelector(".Bloko-CompositeSelection")) {
            const o = c.reduce((e, t) => {
              if (t.params.selfParams) {
                e[t.name] = true;
              }
              return e;
            }, {});
            e.innerHTML = s.render(
              {
                ...t.templateData,
                trl: t.trl,
                components: o,
              },
              {
                tagListTemplate: o.tagList ? S() : null,
                nestedTagListTemplate: o.nestedTagList ? m() : null,
                treeSelectorPopupTemplate: o.treeSelectorPopup ? I() : null,
                suggestTemplate: o.suggest ? C() : null,
              },
            );
            if (o.suggest) {
              d().make(
                r.Z,
                e.querySelector(".Bloko-CompositeSelection-SuggestIcon"),
                {
                  IconComponent: i.Z,
                  iconProps: {
                    initial: l.Z.Gray50,
                    highlight: l.Z.Gray60,
                  },
                },
              );
            }
          }
          c.forEach((t) => {
            if (t.params && t.params.selfParams) {
              const i = t.name;
              const l = e.querySelector(
                `.Bloko-CompositeSelection-${i.charAt(0).toUpperCase()}${i.slice(1)}`,
              );
              if (l) {
                o[i] = d().make(
                  t.component,
                  l,
                  n.ZP.extend(t.params, {
                    collection: p,
                    selected: k,
                  }),
                );
              }
            }
          });
          return {
            selected: k,
            collection: p,
            components: o,
          };
        },
        componentName: "bloko/blocks/compositeSelection",
      });
    },
    320125: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        EMPTY_ARRAY: () => n,
      });
      const n = [];
    },
    640741: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(394280);
      var i = o(20189);
      const l = (e) => {
        let { selected: t, collection: o, singleCategory: l, maxItems: r } = e;
        return (0, n.useMemo)(() => {
          const e = (0, i.getIdsWithNoParentsInSameList)(o, t);
          if (r && e.length >= r) {
            return o
              .toList()
              .map((e) => {
                let { id: t } = e;
                return t;
              })
              .filter((e) => !t.includes(e));
          }
          if (l && (!r || e.length < r)) {
            const e = (0, i.getParentsHashMap)(o, t);
            if (Object.keys(e).length) {
              return o
                .toList()
                .map((e) => {
                  let { id: t } = e;
                  return t;
                })
                .filter((t) => {
                  const n = o.getParentId(t);
                  return !n || !e[n];
                });
            }
          }
          return [];
        }, [t, o, l, r]);
      };
    },
    851210: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = (e) => {
        let {
          value: t,
          excludedValue: o,
          collection: i,
          expandTreeOnShowPopup: l,
        } = e;
        const [r, s] = (0, n.useState)([]);
        (0, n.useEffect)(() => {
          if (l) {
            const e = t
              .concat(o)
              .reduce((e, t) => e.concat(i.getParentIds(t)), []);
            s([...new Set(e)]);
          }
        }, [t, i, l, o]);
        return [r, s];
      };
    },
    757353: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => p,
      });
      var n = o(394280);
      var i = o(804203);
      var l = o(806537);
      var r = o(219247);
      var s = o(585614);
      var a = o(17666);
      var c = o.n(a);
      var d = o(685177);
      var b = o.n(d);
      var u = o(20189);
      var h = o(343856);
      const p = (e) => {
        let {
          collection: o,
          selectionStrategy: a,
          value: d,
          selected: p,
          excluded: k,
          withTagList: g,
          singleChoice: m,
          maxItems: _,
          showTreeSelectorPopup: f,
          onBlur: v,
          onChange: C,
          onFocus: w,
        } = e;
        const x = !!o.getTopLevel().length;
        let y;
        if (!g && m && d[0]) {
          y = o.getModel(d[0]);
        }
        const [S, T] = (0, n.useState)(y?.text || "");
        (0, n.useEffect)(() => {
          if (!g && m && d[0]) {
            const e = o.getModel(d[0]);
            T(e ? e.text : "");
          } else {
            T("");
          }
        }, [d, o, g, m]);
        const E = (0, n.useCallback)(
          (e) =>
            (0, h.jsx)(i.Z, {
              children: (0, h.jsx)(l.Z, {
                ...e,
                onClick: f,
                children: (0, h.jsx)(r.Z, {
                  initial: s.Z.Gray50,
                  highlighted: s.Z.Gray60,
                }),
              }),
            }),
          [f],
        );
        const L = (0, n.useCallback)(
          (e, t) =>
            (0, h.jsx)(c(), {
              ...e,
              onChange: (t, o) => {
                var n;
                T(t);
                if ((n = e.onChange) !== null && n !== undefined) {
                  n.call(e, t, o);
                }
              },
              disabled: !x || e.disabled,
              onBlur: v,
              onFocus: w,
              showLoading: !x,
              icon: E(t),
            }),
          [x, v, w, E],
        );
        const I = (0, n.useCallback)(
          (e, t) => {
            if (e && e.id) {
              const t = [String(e.id)];
              const n = a.add(p, t);
              const i = (0, u.removeExcludedFromSelected)(
                (0, u.getIdsWithNoParentsInSameList)(o, n),
                a.exclude(n, k, t),
              );
              if (C != null) {
                C(
                  i[0],
                  (0, u.narrowDownExcludedFromChildrenToParents)(o, i[1]),
                );
              }
              if (v != null) {
                v();
              }
            } else if (m && !t) {
              if (C != null) {
                C([], []);
              }
              if (v != null) {
                v();
              }
            }
          },
          [a, p, o, m, v, C, k],
        );
        const B = (0, n.useCallback)(
          (e, t, o) =>
            (0, h.jsx)(b(), {
              autoSelect: true,
              ...o,
              value: {
                text: S,
              },
              onChange: I,
              children: L(e, t),
            }),
          [L, S, I],
        );
        const M = g && _ && p.length === _;
        return (0, n.useCallback)(
          function ({
            suggest: e,
            iconLinkProps: t,
            suggestProps: o,
            ...n
          } = {}) {
            if (M) {
              return null;
            } else if (e) {
              return B(n, t, o);
            } else {
              return L(n, t);
            }
          },
          [B, L, M],
        );
      };
    },
    945619: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(428612);
      var l = o.n(i);
      var r = o(20189);
      const s = (e) => {
        let {
          value: t,
          excludedValue: o,
          selectionStrategy: i,
          collection: s,
          maxItems: a,
          setMaxCountError: c,
        } = e;
        const d = (0, n.useCallback)(() => {
          const e = !!s.getTopLevel().length;
          if (i === undefined || !e) {
            return [[], []];
          }
          const n = t.map((e) => String(e));
          if (a && n.length > a) {
            l().log(
              "out error",
              new Error("compositeSelection: Value items more than maxItems"),
            );
            n.length = a;
          }
          return (0, r.removeExcludedFromSelected)(
            i.add([], n),
            (0, r.extendExcludedFromParentsToChildren)(s, n, o),
          );
        }, [t, i, s, a, o]);
        const [b, u] = (0, n.useState)(d);
        const h = (0, n.useRef)(true);
        const p = (0, n.useCallback)(
          (e, t) => {
            let o = e;
            const n = (0, r.getIdsWithNoParentsInSameList)(s, e, t);
            c(false);
            if (a && n.length > a) {
              n.length = a;
              o = i.add([], n);
              c(true);
            }
            u(
              (0, r.removeExcludedFromSelected)(
                i.add([], n),
                (0, r.extendExcludedFromParentsToChildren)(s, o, t),
              ),
            );
          },
          [s, i, a, c],
        );
        (0, n.useEffect)(() => {
          if (h.current) {
            h.current = false;
            return;
          }
          const e = d();
          p(e[0], e[1]);
        }, [d, p, h]);
        const k = (0, n.useMemo)(
          () => (0, r.filterTreeByIdsWithParents)(s, b[0]),
          [s, b],
        );
        return {
          selected: b[0],
          selectedTree: k,
          setSelected: p,
          excluded: b[1],
        };
      };
    },
    22494: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(394280);
      var i = o(20189);
      const l = (e) => {
        let {
          collection: t,
          value: o,
          excludedValue: l,
          selected: r,
          excluded: s,
          selectionStrategy: a,
          onChange: c,
          onFocus: d,
          onBlur: b,
          setVisible: u,
          setSelected: h,
        } = e;
        const p = (0, n.useCallback)(() => {
          u(false);
          h(o, l);
          if (b != null) {
            b();
          }
        }, [u, b, h, o, l]);
        const k = (0, n.useCallback)(
          (e) => {
            if (c != null) {
              c(
                (0, i.getIdsWithNoParentsInSameList)(t, e, s),
                (0, i.narrowDownExcludedFromChildrenToParents)(t, s),
              );
            }
            if (b != null) {
              b();
            }
          },
          [t, b, c, s],
        );
        return {
          handleTreeSelectorPopupClose: p,
          handleTreeSelectorPopupSubmit: k,
          handleTreeSelectorChange: (0, n.useCallback)(
            (e, t) => {
              const o = [e];
              const n = t ? a.add(r, o) : a.remove(r, o);
              h(n, a.exclude(n, s, o));
            },
            [r, a, h, s],
          ),
          showTreeSelectorPopup: (0, n.useCallback)(() => {
            u(true);
            if (d != null) {
              d();
            }
          }, [d, u]),
        };
      };
    },
    210459: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => S,
      });
      var n = o(394280);
      var i = o(602910);
      var l = o.n(i);
      var r = o(971625);
      var s = o.n(r);
      var a = o(18332);
      var c = o.n(a);
      var d = o(20189);
      var b = o(342228);
      var u = o.n(b);
      var h = o(384090);
      var p = o.n(h);
      var k = o(227285);
      var g = o.n(k);
      var m = o(204790);
      var _ = o.n(m);
      var f = o(14213);
      var v = o.n(f);
      var C = o(216711);
      var w = o.n(C);
      var x = o(320125);
      var y = o(343856);
      const S = (e) => {
        let {
          children: t,
          collection: o,
          title: i,
          contentAfterTitle: r,
          value: a,
          excludedValue: b = x.EMPTY_ARRAY,
          leavesOnly: h,
          singleChoice: k,
          treeFilter: m,
          maxItems: f,
          singleCategory: C,
          LabelComponent: S,
          IconComponent: T,
          showSelectedList: E,
          searchWithClear: L,
          clearSearchOnChange: I,
          constantlySuggested: B,
          suggestedNotFound: M,
          searchHint: N,
          expandTreeOnShowPopup: P = true,
          onChange: O,
          onBlur: D,
          onFocus: Z,
          onChangeFilterQuery: A,
          trl: R,
          footerExtra: j,
          host: $,
          checkSelectable: F,
          withExcluded: H,
          exclusionWithTwoLines: W,
        } = e;
        const [q, V] = (0, n.useState)(false);
        const [z, U] = (0, n.useState)(false);
        const [Y, G] = (0, n.useState)(false);
        const K = (0, n.useMemo)(
          () =>
            new (c())(o, {
              singleChoice: k,
              singleCategory: C,
              leavesOnly: h,
              checkSelectable: F,
              withExcluded: H,
            }),
          [o, k, h, F, H, C],
        );
        const {
          selected: X,
          selectedTree: Q,
          setSelected: J,
          excluded: ee,
        } = v()({
          value: a,
          excludedValue: b,
          selectionStrategy: K,
          collection: o,
          maxItems: f,
          setMaxCountError: G,
        });
        const te = p()({
          selected: X,
          collection: o,
          singleCategory: C,
          maxItems: f,
        });
        const [oe] = g()({
          value: a,
          collection: o,
          excludedValue: b,
          expandTreeOnShowPopup: P,
        });
        const {
          handleTreeSelectorPopupClose: ne,
          handleTreeSelectorPopupSubmit: ie,
          handleTreeSelectorChange: le,
          showTreeSelectorPopup: re,
        } = w()({
          collection: o,
          value: a,
          excludedValue: b,
          selected: X,
          excluded: ee,
          selectionStrategy: K,
          onChange: O,
          onFocus: Z,
          onBlur: D,
          setVisible: V,
          setSelected: J,
        });
        const se = _()({
          collection: o,
          selectionStrategy: K,
          value: a,
          selected: X,
          excluded: ee,
          withTagList: z,
          singleChoice: k,
          maxItems: f,
          showTreeSelectorPopup: re,
          onBlur: D,
          onChange: O,
          onFocus: Z,
        });
        const ae = (0, n.useCallback)(
          (e) => {
            const [t, n] = e.reduce(
              (t, o) => {
                const n = e.length > 1 ? [o] : e;
                t[0] = K.remove(t[0], n);
                t[1] = K.exclude(t[0], t[1], n);
                return t;
              },
              [a, b],
            );
            if (O != null) {
              O(
                ...(0, d.removeExcludedFromSelected)(
                  (0, d.getIdsWithNoParentsInSameList)(o, t, n),
                  (0, d.narrowDownExcludedFromChildrenToParents)(o, n),
                ),
              );
            }
            if (D != null) {
              D();
            }
          },
          [a, O, D, b, K, o],
        );
        const ce = (0, n.useMemo)(
          () =>
            b.length
              ? (0, d.narrowDownExcludedFromChildrenToParents)(o, b)
              : x.EMPTY_ARRAY,
          [o, b],
        );
        const de = (0, n.useCallback)(
          function (e = {}) {
            if (!z) {
              U(true);
            }
            return (0, y.jsx)(u(), {
              value: a,
              crossedOutValue: W ? x.EMPTY_ARRAY : ce,
              collection: o,
              removeItems: ae,
              ...e,
            });
          },
          [a, o, ae, z, ce, W],
        );
        const be = (0, n.useCallback)(
          function (e = {}) {
            if (W) {
              if (!z) {
                U(true);
              }
              return (0, y.jsx)(u(), {
                value: ce,
                collection: o,
                removeItems: ae,
                ...e,
              });
            } else {
              return null;
            }
          },
          [o, ae, z, ce, W],
        );
        const ue = (0, n.useCallback)(
          () =>
            j == null
              ? undefined
              : j({
                  hideTreeSelectorPopup: ne,
                  submitTreeSelectorPopup: ie,
                }),
          [j, ie, ne],
        );
        return (0, y.jsxs)(n.Fragment, {
          children: [
            (0, y.jsx)(s(), {
              visible: q,
              selected: X,
              onClose: ne,
              onSubmit: ie,
              onChangeFilterQuery: A,
              title: i,
              contentAfterTitle: r,
              trl: R,
              searchWithClear: L,
              clearSearchOnChange: I,
              error: Y && R.maxCountError ? R.maxCountError : undefined,
              footerExtra: ue(),
              hint: N || undefined,
              host: $,
              children: (0, y.jsx)(l(), {
                checkSelectable: F,
                collection: o,
                expanded: oe,
                indeterminateWithParents: !H,
                onChange: le,
                leavesOnly: h,
                singleChoice: k,
                disabled: te,
                LabelComponent: S,
                IconComponent: T,
                showSelectedList: E,
                suggestedNotFound: M,
                constantlySuggested: B,
                treeFilter: m,
              }),
            }),
            t({
              renderTagList: de,
              renderExcludedTagList: be,
              renderInput: se,
              showTreeSelectorPopup: re,
              selectedTree: Q,
            }),
          ],
        });
      };
    },
    864418: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(113931);
      var i = o.n(n);
      var l = o(845807);
      var r = o.n(l);
      var s = o(20189);
      const a = r().build({
        defaults: {
          removable: true,
        },
        create: function (e, t) {
          const o = t.collection;
          const n = t.selected;
          const l = i().create(e, t.selfParams);
          let r = false;
          l.on("Bloko-TagList-Removed", (e) => {
            if (!r) {
              n.remove([e.id]);
            }
          });
          const a = function () {
            r = true;
            l.set((0, s.filterTreeByIdsWithParents)(o, n.get()));
            r = false;
          };
          n.on("change", a);
          a();
          return l;
        },
        componentName: "blocks/compositeSelection/nestedTagListProxy",
      });
    },
    929415: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => c,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(347526);
      var r = o.n(l);
      var s = o(845807);
      var a = o.n(s);
      const c = a().build({
        create: function (e, t) {
          const o = t.collection;
          const n = t.selected;
          const l = i()(e);
          if (!t.selfParams.data && !t.selfParams.remote) {
            let e = o.toList();
            if (t.leavesOnly) {
              e = e.filter((e) => o.getChildrenIds(e.id).length === 0);
            }
            t.selfParams.data = {
              items: e,
            };
          }
          const s = a().make(r(), e, t.selfParams);
          function c() {
            const e = n.get();
            if (t.singleChoice) {
              if (e.length) {
                s.selectItemByData(o.getModel(e[e.length - 1]));
              } else if (s.getSelected()) {
                s.clear();
              }
            }
          }
          l.on("selected.suggest autoselected.suggest", (e, o) => {
            n.add([o.id]);
            if (!t.singleChoice) {
              s.clear();
            }
          });
          l.on("unselected.suggest", () => {
            if (t.singleChoice) {
              n.set([]);
            }
          });
          n.on("change", c);
          c();
          return s;
        },
        componentName: "blocks/compositeSelection/suggestProxy",
      });
    },
    341413: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(597755);
      var i = o.n(n);
      var l = o(845807);
      var r = o.n(l);
      var s = o(20189);
      const a = r().build({
        defaults: {
          removable: true,
        },
        create: function (e, t) {
          const o = t.collection;
          const n = t.selected;
          const l = i().create(e, t.selfParams);
          let r = false;
          function a() {
            r = true;
            const e = (0, s.getIdsWithNoParentsInSameList)(o, n.get()).map(
              (e) => {
                const t = o.getModel(e);
                return {
                  id: e,
                  hiddenValue: e,
                  text: t.text,
                  additional: t.additional,
                };
              },
            );
            l.set(e);
            r = false;
          }
          l.on("Bloko-TagList-Removed", (e) => {
            if (!r) {
              n.remove([e.id]);
            }
          });
          n.on("change", a);
          a();
          return l;
        },
        componentName: "blocks/compositeSelection/tagListProxy",
      });
    },
    419353: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(867410);
      var i = o.n(n);
      var l = o(845807);
      var r = o.n(l);
      const s = r().build({
        defaults: {
          treeSelector: {
            type: "checkbox",
          },
        },
        create: function (e, t) {
          const o = t.collection;
          const n = t.selected;
          const l = t.selfParams;
          const s = document.createElement("div");
          s.className = "g-hidden";
          document.body.appendChild(s);
          l.treeSelector.dataJSON = o.toTree();
          if (t.singleChoice) {
            l.treeSelector.type = "radio";
          }
          if (t.leavesOnly) {
            l.treeSelector.leavesOnly = true;
          }
          const a = r().make(i(), s, l);
          const c = a.treeSelector;
          function d() {
            c.setSelected(n.get());
          }
          e.addEventListener("click", () => {
            a.modal.show();
          });
          a.on("Bloko-TreeSelectorPopup-Changed", () => {
            const e = c.getSelected().map((e) => e.id);
            n.set(e);
          });
          n.on("change", d);
          d();
          return a;
        },
        componentName: "blocks/compositeSelection/treeSelectorPopupProxy",
      });
    },
    371511: function (e, t, o) {
      "use strict";

      o.r(t);
    },
    587891: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      o(394280);
      var n = o(882177);
      var i = o.n(n);
      var l = o(843679);
      var r = o(343856);
      const s = (e) => {
        let {
          children: t,
          main: o,
          count: n,
          autosize: s,
          vertical: a,
          ...c
        } = e;
        return (0, r.jsx)("div", {
          ...c,
          className: i()({
            [l.Z["bloko-control-group__minor"]]: !o && !s && !a,
            [l.Z["bloko-control-group__main"]]: o,
            [l.Z["bloko-control-group__main_col-1-2"]]: o && n === 2,
            [l.Z["bloko-control-group__main_col-1-3"]]: o && n === 3,
            [l.Z["bloko-control-group__content-sized"]]: s,
            [l.Z["bloko-control-group__vertical-item"]]: a,
          }),
          children: t,
        });
      };
    },
    29191: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ControlGroupItem: () => a.default,
        default: () => b,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(882177);
      var r = o.n(l);
      var s = o(843679);
      var a = o(587891);
      var c = o(343856);
      const d = (e) =>
        typeof e == "object" &&
        e !== null &&
        "type" in e &&
        e.type === a.default;
      const b = (e) => {
        let { children: t, autosize: o, vertical: n, ...l } = e;
        const a = {
          autosize: o,
          vertical: n,
          count: i()
            .Children.toArray(t)
            .filter((e) => d(e) && e.props.main).length,
        };
        return (0, c.jsx)("div", {
          ...l,
          className: r()(s.Z["bloko-control-group"], {
            [s.Z["bloko-control-group_auto-size"]]: o,
            [s.Z["bloko-control-group_vertical"]]: n,
          }),
          children: i().Children.map(t, (e) =>
            d(e) ? i().cloneElement(e, a) : e,
          ),
        });
      };
    },
    404325: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => d,
      });
      var n = o(394280);
      var i = o(287330);
      var l = o.n(i);
      var r = o(343856);
      const s = (e) => e;
      const a = (e) => e;
      const c = (e) => {
        let {
          value: t,
          one: o,
          some: n,
          many: i,
          zero: c = "",
          formatValue: d = a,
          format: b = s,
          hasValue: u = true,
        } = e;
        if (t === 0) {
          return (0, r.jsx)("span", {
            suppressHydrationWarning: true,
            children: b(c),
          });
        }
        const h = l()({
          one: o,
          some: n,
          many: i,
          value: t,
        });
        return (0, r.jsx)(r.Fragment, {
          children: u
            ? (0, r.jsxs)("span", {
                suppressHydrationWarning: true,
                children: [d(t), "\xA0", b(h)],
              })
            : (0, r.jsx)("span", {
                suppressHydrationWarning: true,
                children: b(h),
              }),
        });
      };
      const d = (0, n.memo)(c);
    },
    460910: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => u,
        isValidOptionElement: () => h,
      });
      var n = o(394280);
      var i = o(229209);
      var l = o.n(i);
      var r = o(549155);
      var s = o(405505);
      var a = o(43484);
      var c = o.n(a);
      var d = o(343856);
      const b = (e) => {
        let { children: t, value: o, disabled: i, searchText: a, ...b } = e;
        const {
          selectedValue: u,
          selectValue: h,
          focusedValue: p,
          setFocusedValue: k,
          scrollTo: g,
        } = (0, n.useContext)(c());
        const m = (0, n.useRef)(null);
        const _ = o === u;
        const f = o === p;
        (0, n.useLayoutEffect)(() => {
          if (f && m.current) {
            g(m.current.offsetTop, m.current.offsetHeight);
          }
        }, [f, g]);
        return (0, d.jsx)(l(), {
          "data-qa": s.dataQa.option,
          ...b,
          "aria-selected": _,
          role: "option",
          selected: _,
          disabled: i,
          focused: f,
          ref: m,
          onClick: () => {
            if (!i) {
              h(o);
            }
          },
          onMouseEnter: () => {
            if ((0, r.getBreakpoint)() !== r.Breakpoint.XS) {
              k(i ? undefined : o);
            }
          },
          children: t,
        });
      };
      const u = b;
      const h = (e) => (0, n.isValidElement)(e) && e.type === b;
    },
    738000: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(468013);
      var i = o(891799);
      var l = o.n(i);
      var r = o(343856);
      const s = (e) => {
        let { children: t, ...o } = e;
        return (0, r.jsx)(n.FormHint, {
          ...o,
          children: (0, r.jsx)(l(), {
            children: t,
          }),
        });
      };
    },
    9321: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        dataQa: () => n,
      });
      const n = {
        wrapper: "bloko-custom-select-wrapper",
        select: "bloko-custom-select-select",
        searchInput: "bloko-custom-select-search-input",
        option: "bloko-custom-select-option",
        hiddenInput: "bloko-custom-select-hidden-select",
        optionList: "bloko-custom-select-option-list",
      };
    },
    799581: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = (0, n.createContext)({
        focusedValue: undefined,
        selectedValue: undefined,
        selectValue: () => {},
        setFocusedValue: () => {},
        scrollTo: () => {},
      });
    },
    920128: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => W,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(665164);
      var r = o.n(l);
      var s = o(521611);
      var a = o(557883);
      var c = o(585614);
      var d = o(607621);
      var b = o(125702);
      var u = o.n(b);
      var h = o(845807);
      var p = o.n(h);
      var k = o(764626);
      var g = o.n(k);
      var m = o(456486);
      var _ = o.n(m);
      var f = o(771674);
      var v = o.n(f);
      var C = o(549155);
      var w = o(387501);
      var x = o.n(w);
      var y = o(151192);
      var S = o.n(y);
      var T = o(62374);
      var E = o.n(T);
      var L = o(772151);
      var I = o.n(L);
      var B = o(428300);
      var M = o.n(B);
      const N = {
        hidden: "g-hidden",
        focused: "bloko-custom-select__select_focus",
        selected: "bloko-select-dropdown-option_selected",
        optionFocused: "bloko-select-dropdown-option_focused",
        disabled: "bloko-custom-select_disabled",
        disabledOption: "bloko-select-dropdown-option_disabled",
        customOptions: "Bloko-CustomSelect-OptionItem",
        customSelect: "Bloko-CustomSelect",
        disabledOptionBindings: "Bloko-CustomSelect-OptionItemDisabled",
        layer: {
          floating: "bloko-custom-select__content_layer-floating",
          overlay: "bloko-custom-select__content_layer-overlay",
          topmost: "bloko-custom-select__content_layer-topmost",
          "above-content": "bloko-custom-select__content_layer-above-content",
          "overlay-content":
            "bloko-custom-select__content_layer-overlay-content",
          "above-overlay-content":
            "bloko-custom-select__content_layer-above-overlay-content",
        },
      };
      const P = ".Bloko-CustomSelect-NativeSelect";
      const O = ".Bloko-CustomSelect";
      const D = ".Bloko-CustomSelect-OptionsContainer";
      const Z = ".Bloko-CustomSelect-Options";
      const A = ".Bloko-CustomSelect-OptionItem";
      const R = ".Bloko-CustomSelect-Selected";
      const j = ".Bloko-CustomSelect-Search";
      const $ = ".Bloko-CustomSelect-SearchIcon";
      let F = false;
      const H = i().View.extend({
        events: {
          "click .Bloko-CustomSelect": "show",
          "click .Bloko-CustomSelect-OptionItem": "_change",
          "mousemove .Bloko-CustomSelect-OptionItem": "_mouseMove",
          "focus .Bloko-CustomSelect-OptionsContainer": "_focusList",
          "blur .Bloko-CustomSelect-OptionsContainer": "_blurList",
          "keydown .Bloko-CustomSelect": "_keyboardControlOnSelect",
          "keydown .Bloko-CustomSelect-OptionsContainer":
            "_keyboardControlOnOptions",
          "keypress .Bloko-CustomSelect-OptionsContainer": "_nativeSearch",
          "keypress .Bloko-CustomSelect": "_nativeSearch",
          "input .Bloko-CustomSelect-Search": "_changeSearchInput",
          "change .Bloko-CustomSelect-Search": "_changeSearchInput",
        },
        initialize(e) {
          this._customSelectOptionTemplate = e.optionTemplate;
          this._customPlaceholderTemplate = e.placeholderTemplate;
          this._selectIndex = 0;
          this._isOpen = false;
          this._isDisabled = e.disabled;
          this._filterQuery = "";
          this._searchDateStart = new Date();
          this._isSearch = e.search;
          this._searchPlaceholder = e.searchPlaceholder;
          this._afterOptionsData = e.afterOptionsData;
          this._afterOptionsTemplate = e.afterOptionsTemplate;
          this.$select = this.$(P);
          this._dataJSON = e.templateJSON.map((e, t) => {
            if (e.selected) {
              this._selectIndex = t;
            }
            return {
              index: t,
              data: e,
            };
          });
          this.$customSelectContainer = r()(
            this.template(this._getTemplateJSON()),
          );
          this.$customSelect = this.$customSelectContainer.filter(O);
          this.$customOptionsContainer = this.$customSelectContainer.filter(D);
          this.$customOptionsContainer.addClass(N.layer[e.layer]);
          this.$customOptions = r()(A, this.$customOptionsContainer);
          this.$customOptions.eq(this._selectIndex).addClass(N.selected);
          this.$customOptionsList = r()(Z, this.$customOptionsContainer);
          this.$customSelectPlaceholder = r()(R, this.$customSelect);
          this.$searchInput = r()(j, this.$customOptionsContainer);
          const t = r()($, this.$customOptionsContainer).get(0);
          if (t) {
            p().make(d.Z, t, {
              IconComponent: a.Z,
              iconProps: {
                initial: c.Z.Gray80,
              },
            });
          }
          this._dataJSON = this._dataJSON.map((e, t) => {
            e.searchText = this.$customOptions
              .eq(t)
              .text()
              .toLowerCase()
              .trim();
            return e;
          });
          this._createNativeOptions();
          this._checkDisabledAll(this._dataJSON);
          this.$el.append(this.$customSelectContainer);
          this.$select.addClass(N.hidden);
          this.$select.prop("disabled", false);
          if (this._isDisabled) {
            this.disable();
          }
          this._focusIndex = this._selectIndex;
        },
        _getTemplateJSON() {
          return r().extend(
            {
              options: this._dataJSON,
              placeholder:
                this._dataJSON[this._selectIndex] &&
                this._dataJSON[this._selectIndex].data,
              search: this._isSearch,
              searchPlaceholder: this._searchPlaceholder,
            },
            this._afterOptionsData,
          );
        },
        _createNativeOptions() {
          this.$select.html(this._prepareNativeOptions(this._dataJSON));
        },
        _addToNativeSelect(e) {
          this.$select.append(this._prepareNativeOptions(e));
        },
        _prepareNativeOptions(e) {
          return e.map((e, t) => {
            const o = r()("<option>").text(e.data.text).val(e.data.value);
            if (e.data.selected) {
              this._selectIndex = t;
              o.prop("selected", true);
            }
            if (e.data.disabled) {
              o.prop("disabled", true);
            }
            return o;
          });
        },
        _keyboardControlOnSelect(e) {
          switch (e.keyCode) {
            case b.KeyCode.ArrowUp:
            case b.KeyCode.ArrowDown:
              this.show();
              e.preventDefault();
              break;
            case b.KeyCode.ESC:
              this.hide();
              break;
            case b.KeyCode.Enter:
              r()(this.$select.prop("form")).submit();
          }
        },
        _checkDisabledAll(e) {
          this._isDisabledOptions = !e.some((e) => !e.data.disabled);
        },
        _keyboardControlOnOptions(e) {
          switch (e.keyCode) {
            case b.KeyCode.ArrowUp:
              e.preventDefault();
              if (!this.$customOptions.length || this._isDisabledOptions) {
                break;
              }
              this._keyUp();
              this._focusItems();
              this._scrollToFocus();
              break;
            case b.KeyCode.ArrowDown:
              e.preventDefault();
              if (!this.$customOptions.length || this._isDisabledOptions) {
                break;
              }
              this._keyDown();
              this._focusItems();
              this._scrollToFocus();
              break;
            case b.KeyCode.Enter:
              e.preventDefault();
              if (!this.$customOptions.length) {
                break;
              }
              this._change(e);
              break;
            case b.KeyCode.ESC:
              this.hide();
              break;
            case b.KeyCode.Tab:
              e.preventDefault();
              if (this._isOpen) {
                break;
              }
              this.hide();
          }
        },
        _keyUp() {
          do {
            this._focusIndex =
              (this._focusIndex <= 0
                ? this._dataJSON.length
                : this._focusIndex) - 1;
          } while (
            this.$customOptions
              .eq(this._focusIndex)
              .hasClass(N.disabledOptionBindings)
          );
        },
        _keyDown() {
          do {
            this._focusIndex =
              this._focusIndex === this._dataJSON.length - 1
                ? 0
                : this._focusIndex + 1;
          } while (
            this.$customOptions
              .eq(this._focusIndex)
              .hasClass(N.disabledOptionBindings)
          );
        },
        _changeSearchInput() {
          if (!this._isOpen) {
            return;
          }
          this.$customOptions
            .removeClass(N.hidden)
            .removeClass(N.disabledOptionBindings);
          const e = this._dataJSON.filter((e) => {
            const t = v().match(this.$searchInput.val(), e.searchText);
            if (this._isSearch && !t) {
              this.$customOptions
                .eq(e.index)
                .addClass(N.hidden)
                .addClass(N.disabledOptionBindings);
            }
            if (e.disabled) {
              this.$customOptions
                .eq(e.index)
                .addClass(N.disabledOptionBindings);
            }
            return t;
          });
          this._checkDisabledAll(e);
          if (this._isDisabledOptions) {
            this.$customOptions.removeClass(N.optionFocused);
            this._focusIndex = -1;
          } else {
            this._focusSearchItem(e);
          }
        },
        _nativeSearch(e) {
          if (this._isSearch && this._isOpen) {
            return;
          }
          const t = u().getChar(e);
          if (!t) {
            return;
          }
          if (new Date() - this._searchDateStart > 200) {
            this._filterQuery = "";
          }
          this._searchDateStart = new Date();
          this._filterQuery += t;
          const o = this._dataJSON.filter((e) =>
            v().match(this._filterQuery, e.searchText),
          );
          if (this._isOpen) {
            this._focusSearchItem(o);
          } else if (o.length && !o[0].disabled) {
            this._selectIndex = o[0].index;
            this._change();
          }
        },
        _focusSearchItem(e) {
          if (e.length && !e[0].disabled) {
            this._focusIndex = e[0].index;
            this._focusItems();
            this._scrollToFocus();
          } else {
            this.$customOptions.removeClass(N.optionFocused);
            this._focusIndex = -1;
          }
        },
        _scrollToFocus() {
          if (!this._isOpen) {
            return;
          }
          const e = x().getRelativeMetrics(
            this.$customOptions.eq(this._focusIndex).get(0),
          );
          const t = this._metricsOptionsList.height - e.top - e.height;
          let o = e.top + this.$customOptionsList.scrollTop();
          if (t < 0) {
            this.$customOptionsList.scrollTop(o);
          } else if (e.top < 0) {
            o = o + e.height - this._metricsOptionsList.height;
            this.$customOptionsList.scrollTop(o);
          }
        },
        _mouseMove(e) {
          if (this._mouseCoordsY === e.clientY) {
            return;
          }
          let t = r()(e.target);
          for (this._mouseCoordsY = e.clientY; !t.hasClass(N.customOptions); ) {
            t = t.parent();
          }
          if (!t.hasClass(N.disabledOptionBindings)) {
            this._focusIndex = this.$customOptions.index(t);
            this._focusItems();
          }
        },
        _focusItems() {
          this.$customOptions.removeClass(N.optionFocused);
          this.$customOptions.eq(this._focusIndex).addClass(N.optionFocused);
        },
        _blurList() {
          F = false;
          this._handlerBlur = window.setTimeout(() => {
            this.hide(true);
          }, 150);
        },
        _focusList() {
          clearTimeout(this._handlerBlur);
        },
        _change(e) {
          if (e && this._focusIndex === -1) {
            this.hide();
            return null;
          }
          if (e) {
            this._selectIndex = this._focusIndex;
          }
          const t = this._dataJSON[this._selectIndex].data;
          this.$customOptions.removeClass(N.selected);
          this.$select.val(t.value);
          this.$customOptions.eq(this._selectIndex).addClass(N.selected);
          this.$customSelectPlaceholder.html(this.templatePlaceholder(t));
          this.$select[0].dispatchEvent(g()("change"));
          this.trigger("Bloko-CustomSelect-Selected", t);
          this.hide();
          return t;
        },
        show() {
          if (!this._isDisabled && !this._isOpen) {
            F = true;
            this.$customOptionsContainer.removeClass(N.hidden);
            this._metricsOptionsList = x().getMetrics(
              this.$customOptionsList.get(0),
            );
            this._isOpen = true;
            if (
              this._selectIndex >= 0 &&
              this._dataJSON[this._selectIndex] &&
              !this._dataJSON[this._selectIndex].data.disabled
            ) {
              this.$customOptions
                .eq(this._selectIndex)
                .addClass(N.optionFocused);
            }
            if (this._isSearch && (0, C.getBreakpoint)() !== C.Breakpoint.XS) {
              this.$searchInput.focus();
            } else {
              this.$customSelect.addClass(N.focused);
              this.$customOptionsContainer.focus();
            }
          }
        },
        hide(e) {
          if (this._isOpen) {
            this._isOpen = false;
            this.$customOptionsContainer.addClass(N.hidden);
            if (!F || !e) {
              this.$customSelect.focus();
            }
            this.$customSelect.removeClass(N.focused);
            this.$customOptions.removeClass(N.optionFocused);
            this._focusIndex = this._selectIndex;
          }
        },
        change(e) {
          for (let t = 0; t < this._dataJSON.length; t++) {
            if (this._dataJSON[t].data.value === e) {
              this._selectIndex = t;
              return this._change();
            }
          }
          return null;
        },
        add(e) {
          const t = r()
            .extend(true, [], e)
            .map((e) => ({
              data: e,
            }));
          const o = {
            options: t,
          };
          const n = r()("<div>").append(this.templateOptions(o)).children();
          this._addToNativeSelect(t);
          t.forEach((e, t) => {
            this._dataJSON.push({
              index: this._dataJSON.length,
              searchText: n.eq(t).text().trim().toLowerCase(),
              data: e.data,
            });
            if (e.data.selected) {
              this._selectIndex = this._dataJSON.length - 1;
            }
          });
          this._checkDisabledAll(this._dataJSON);
          this.$customOptionsList.append(n);
          this.$customOptions = this.$(A);
          this._change();
        },
        disable() {
          this.$customSelect.removeAttr("tabindex");
          this.$el.addClass(N.disabled);
          this._isDisabled = true;
          this.hide();
          this.$select.prop("disabled", true);
        },
        enable() {
          this.$customSelect.attr("tabindex", "0");
          this.$el.removeClass(N.disabled);
          this._isDisabled = false;
          this.$select.prop("disabled", false);
        },
        templatePlaceholder(e) {
          return this._customPlaceholderTemplate.render(e);
        },
        templateOptions(e) {
          return I().render(e, {
            customSelectOption: this._customSelectOptionTemplate,
          });
        },
        template(e) {
          const t = {
            customSelectOptions: I(),
            customSelectOption: this._customSelectOptionTemplate,
            customSelectPlaceholder: this._customPlaceholderTemplate,
          };
          if (this._afterOptionsTemplate) {
            t.customSelectAfterOptions = this._afterOptionsTemplate;
          }
          return S().render(e, t);
        },
      });
      const W = p().build({
        defaults: {
          disabled: false,
          search: false,
          templateJSON: [],
          layer: "above-content",
          optionTemplate: E(),
          placeholderTemplate: M(),
          afterOptionsTemplate: null,
          afterOptionsData: {},
        },
        create(e, t) {
          const o = new H(
            s.ZP.extend(
              {
                el: e,
              },
              t,
            ),
          );
          const n = _().extend({
            show() {
              o.show();
            },
            hide() {
              o.hide();
            },
          });
          n.change = function (e) {
            o.change(e);
          };
          n.add = function (e) {
            o.add(e);
            this._trigger("Bloko-CustomSelect-Added", r().extend(true, [], e));
          };
          n.disable = function () {
            o.disable();
            this._trigger("Bloko-CustomSelect-Disabled");
          };
          n.enable = function () {
            o.enable();
            this._trigger("Bloko-CustomSelect-Enabled");
          };
          o.on("Bloko-CustomSelect-Selected", (e) => {
            n._trigger("Bloko-CustomSelect-Selected", e);
          });
          return n;
        },
        componentName: "bloko/blocks/customSelect",
      });
    },
    243146: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(405505);
      var s = o(557883);
      var a = o(17666);
      var c = o.n(a);
      var d = o(549155);
      var b = o(867065);
      var u = o(343856);
      const h = (e) => {
        let { hasTitle: t, ...o } = e;
        const i = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          if ((0, d.getBreakpoint)() !== d.Breakpoint.XS && i.current) {
            i.current.focus();
          }
        }, []);
        return (0, u.jsx)("div", {
          className: l()(b.Z["bloko-custom-select__search"], {
            [b.Z["bloko-custom-select__search_with-title"]]: t,
          }),
          children: (0, u.jsx)(c(), {
            ...o,
            ref: i,
            "data-qa": r.dataQa.searchInput,
            icon: (0, u.jsx)(s.Z, {}),
          }),
        });
      };
    },
    523864: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(665682);
      var l = o(118565);
      var r = o.n(l);
      const s = () => {
        const e = (0, n.useRef)(null);
        const [t, o] = (0, n.useState)({
          minWidth: "none",
        });
        (0, n.useLayoutEffect)(() => {
          const t = () => {
            if (e.current) {
              o({
                minWidth: `${e.current.offsetWidth}px`,
              });
            }
          };
          t();
          const n = r()(t, i.DEBOUNCE_DELAY_MS);
          window.addEventListener("resize", n);
          return () => {
            window.removeEventListener("resize", n);
          };
        }, []);
        return {
          selectInputRef: e,
          dropStyle: t,
        };
      };
    },
    700477: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => u,
      });
      var n = o(394280);
      var i = o(272963);
      var l = o.n(i);
      var r = o(189026);
      var s = o.n(r);
      var a = o(429427);
      var c = o.n(a);
      var d = o(343856);
      const b = (e) => (0, n.isValidElement)(e) && e.type === l();
      const u = (e) => {
        let {
          children: t,
          search: o,
          searchPlaceholder: i,
          title: l,
          filterThrottleMs: r,
          asyncFilterFunction: a,
        } = e;
        const {
          filterQuery: u,
          setFilterQuery: h,
          filteredOptions: p,
        } = s()(t, b, a, r);
        const k = (0, n.useCallback)(
          () =>
            o &&
            (0, d.jsx)(c(), {
              placeholder: i,
              value: u,
              onChange: (e) => h(e),
              hasTitle: !!l,
            }),
          [u, h, o, i, l],
        );
        return {
          filteredOptions: p,
          setFilterQuery: h,
          renderSearchField: k,
        };
      };
    },
    733791: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = (e) => {
        let { onFocus: t, onBlur: o } = e;
        const [i, l] = (0, n.useState)(false);
        return {
          isFocused: i,
          setInputFocus: (e) => {
            l(true);
            if (t != null) {
              t(e);
            }
          },
          setInputBlur: (e) => {
            l(false);
            if (o != null) {
              o(e);
            }
          },
        };
      };
    },
    233136: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = (e) => {
        let { filteredOptions: t } = e;
        const o = (0, n.useMemo)(
          () =>
            t
              .filter((e) => (0, n.isValidElement)(e))
              .filter((e) => !e.props.disabled)
              .map((e) => e.props.value),
          [t],
        );
        const [i, l] = (0, n.useState)(o[0]);
        (0, n.useEffect)(() => {
          l(o[0]);
        }, [o]);
        return {
          focusedValue: i,
          setFocusedValue: l,
          moveFocusedValue: (e) => {
            const t = i ? o.indexOf(i) : -1;
            const n = o.length - 1;
            const r = Math.max(Math.min(t + e, n), 0);
            l(o[r]);
          },
          optionValues: o,
        };
      };
    },
    241693: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(394280);
      var i = o(125702);
      const l = (e) => {
        let {
          focusedValue: t,
          moveFocusedValue: o,
          isExpanded: l,
          toggleExpanded: r,
          isFocused: s,
          selectValue: a,
        } = e;
        const c = (0, n.useCallback)(
          (e) => {
            if (l) {
              switch (e.keyCode) {
                case i.KeyCode.ArrowUp:
                  o(-1);
                  break;
                case i.KeyCode.ArrowDown:
                  o(1);
                  break;
                case i.KeyCode.ESC:
                  r(false);
                  break;
                case i.KeyCode.Enter:
                  if (t) {
                    a(t);
                  }
                  break;
                default:
                  return;
              }
              e.preventDefault();
            } else if (s && e.keyCode === i.KeyCode.Enter) {
              r(true);
            }
          },
          [t, l, s, o, a, r],
        );
        (0, n.useEffect)(() => {
          document.addEventListener("keydown", c);
          return () => {
            document.removeEventListener("keydown", c);
          };
        }, [c]);
      };
    },
    174140: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = () => {
        const e = (0, n.useRef)(null);
        const t = (0, n.useCallback)((t, o) => {
          if (!e.current) {
            return;
          }
          const n = e.current;
          if (n.scrollTop > t) {
            n.scrollTop = t;
          } else if (t + o > n.scrollTop + n.clientHeight) {
            n.scrollTop = t + o - n.clientHeight;
          }
        }, []);
        return {
          optionsListRef: e,
          scrollTo: t,
        };
      };
    },
    904923: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = (e) => {
        let {
          expanded: t,
          disabled: o,
          optionValues: i,
          setFocusedValue: l,
          value: r,
          onOpen: s,
          onClose: a,
          selectInputRef: c,
        } = e;
        const [d, b] = (0, n.useState)(false);
        const u = (0, n.useRef)(false);
        const h = (0, n.useCallback)(
          function () {
            if (
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : !d
            ) {
              var e;
              if (o) {
                return;
              }
              b(true);
              l(r && i.includes(r) ? r : i[0]);
              if (s != null) {
                s();
              }
              if (c != null && (e = c.current) !== null && e !== undefined) {
                e.blur();
              }
            } else {
              var t;
              b(false);
              if (a != null) {
                a();
              }
              if (c != null && (t = c.current) !== null && t !== undefined) {
                t.focus();
              }
            }
          },
          [d, o, l, i, r, s, c, a],
        );
        (0, n.useEffect)(() => {
          if (typeof t == "boolean" && u.current !== t) {
            h(t);
            u.current = t;
          }
        }, [t, h]);
        return {
          isExpanded: d,
          toggleExpanded: h,
        };
      };
    },
    186285: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        CustomSelectLayer: () => c.DropLayer,
        CustomSelectOption: () => h.a,
        CustomSelectOptionSecondaryText: () => k.a,
        dataQa: () => g.dataQa,
        default: () => R,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(214891);
      var s = o.n(r);
      var a = o(304650);
      var c = o(665682);
      var d = o(956741);
      var b = o.n(d);
      var u = o(272963);
      var h = o.n(u);
      var p = o(279787);
      var k = o.n(p);
      var g = o(405505);
      var m = o(43484);
      var _ = o.n(m);
      var f = o(213592);
      var v = o.n(f);
      var C = o(712530);
      var w = o.n(C);
      var x = o(215571);
      var y = o.n(x);
      var S = o(652881);
      var T = o.n(S);
      var E = o(151119);
      var L = o.n(E);
      var I = o(857486);
      var B = o.n(I);
      var M = o(676543);
      var N = o.n(M);
      var P = o(867065);
      var O = o(343856);
      const D = {
        ...a.defaultProps,
        behavior: a.BEHAVIOR,
        baseClassNames: a.BASE_CLASS_NAMES,
        host: null,
        placement: c.DropPlacement.BottomStart,
      };
      const Z = 200;
      const A = (e) => {
        let {
          placeholderTemplate: t,
          filteredOptions: o,
          value: i,
          emptyPlaceholder: l,
        } = e;
        if (!i && l) {
          return l;
        }
        if (i && t) {
          return t(i);
        }
        const r = o.find(
          (e) => (0, n.isValidElement)(e) && e.props.value === i,
        );
        return (0, n.isValidElement)(r) && r.props.children;
      };
      const R = (e) => {
        let {
          value: t,
          defaultValue: o,
          onChange: i,
          wrapperProps: r,
          layer: a = c.DropLayer.AboveContent,
          disabled: d,
          invalid: u,
          light: h,
          flexible: p,
          expanded: k,
          autoClose: m = true,
          children: f,
          source: C,
          search: x,
          onOpen: S,
          onClose: E,
          onFocus: I,
          onBlur: M,
          searchPlaceholder: R,
          emptyPlaceholder: j,
          placeholderTemplate: $,
          afterOptionsTemplate: F,
          searchFilterFunction: H,
          searchFilterThrottleMs: W = Z,
          title: q,
          ...V
        } = e;
        const { selectInputRef: z, dropStyle: U } = v()();
        const { optionsListRef: Y, scrollTo: G } = B()();
        const {
          isFocused: K,
          setInputFocus: X,
          setInputBlur: Q,
        } = y()({
          onFocus: I,
          onBlur: M,
        });
        const { value: J, onChange: ee } = b()({
          controlledValue: t,
          defaultValue: o,
          onChangeProp: i,
        });
        const {
          filteredOptions: te,
          renderSearchField: oe,
          setFilterQuery: ne,
        } = w()({
          children: f,
          search: x,
          searchPlaceholder: R,
          title: q,
          filterThrottleMs: W,
          asyncFilterFunction: H,
        });
        const {
          focusedValue: ie,
          setFocusedValue: le,
          moveFocusedValue: re,
          optionValues: se,
        } = T()({
          filteredOptions: te,
        });
        const { isExpanded: ae, toggleExpanded: ce } = N()({
          expanded: k,
          disabled: d,
          optionValues: se,
          setFocusedValue: le,
          value: J,
          onOpen: S,
          onClose: E,
          selectInputRef: z,
        });
        const de = (0, n.useRef)(null);
        const be = (0, n.useCallback)(
          (e) => {
            ee(e);
            ne("");
            ce(false);
          },
          [ee, ne, ce],
        );
        L()({
          focusedValue: ie,
          moveFocusedValue: re,
          isExpanded: ae,
          toggleExpanded: ce,
          isFocused: K,
          selectValue: be,
        });
        const ue = (0, n.useMemo)(
          () => ({
            focusedValue: ie,
            selectedValue: J,
            selectValue: be,
            setFocusedValue: le,
            scrollTo: G,
          }),
          [ie, G, be, le, J],
        );
        const he = (0, n.useCallback)(
          () =>
            (0, O.jsxs)("div", {
              style: U,
              children: [
                oe(),
                (0, O.jsx)("div", {
                  className: P.Z["bloko-custom-select__option-list"],
                  ref: Y,
                  "data-qa": g.dataQa.optionList,
                  children: te,
                }),
                F
                  ? (0, O.jsx)("div", {
                      className: P.Z["bloko-custom-select__after-options"],
                      children: F(),
                    })
                  : null,
              ],
            }),
          [F, U, te, Y, oe],
        );
        return (0, O.jsx)(_().Provider, {
          value: ue,
          children: (0, O.jsxs)("div", {
            "data-qa": g.dataQa.wrapper,
            ...r,
            className: l()(P.Z["bloko-custom-select"], {
              [P.Z["bloko-custom-select_disabled"]]: d,
              [P.Z["bloko-custom-select_invalid"]]: u,
              [P.Z["bloko-custom-select_light"]]: h,
              [P.Z["bloko-custom-select_flexible"]]: p,
            }),
            onFocus: X,
            onBlur: Q,
            tabIndex: 0,
            source: C,
            ref: z,
            children: [
              (0, O.jsx)(s(), {
                ...D,
                show: ae,
                onClose: () => ce(false),
                closeByClickOutside: m,
                layer: a,
                title: q,
                render: he,
                stretchOnXS: x,
                flexible: true,
                activatorRef: de,
                children: (0, O.jsx)("div", {
                  ref: de,
                  className: l()(P.Z["bloko-custom-select__select"], {
                    [P.Z["bloko-custom-select__select_focus"]]: K || ae,
                  }),
                  "data-qa": g.dataQa.select,
                  onClick: () => ce(),
                  children: (0, O.jsx)("div", {
                    className: l()(P.Z["bloko-custom-select__placeholder"], {
                      [P.Z["bloko-custom-select__placeholder_empty"]]: !J,
                    }),
                    suppressHydrationWarning: true,
                    children: A({
                      placeholderTemplate: $,
                      filteredOptions: te,
                      value: J,
                      emptyPlaceholder: j,
                    }),
                  }),
                }),
              }),
              (0, O.jsx)("input", {
                "data-qa": g.dataQa.hiddenInput,
                ...V,
                type: "hidden",
                value: J || "",
                readOnly: true,
              }),
            ],
          }),
        });
      };
    },
    188997: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => v,
      });
      var n = o(394280);
      var i = o(727158);
      var l = o.n(i);
      var r = o(581262);
      var s = o(882177);
      var a = o.n(s);
      var c = o(806537);
      var d = o(487153);
      var b = o(836522);
      var u = o(518039);
      var h = o(856768);
      var p = o(284831);
      var k = o(201962);
      var g = o(411303);
      var m = o(766032);
      var _ = o(343856);
      function f(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      class v extends n.PureComponent {
        constructor() {
          super(...arguments);
          f(this, "state", {
            show: this.props.show,
            animate: false,
            isFirstRender: true,
          });
          f(this, "dropRef", (0, n.createRef)());
          f(this, "sizeBoxRef", (0, n.createRef)());
          f(this, "arrowRef", (0, n.createRef)());
          f(this, "resizeObserver", undefined);
          f(this, "baseResizeObserver", undefined);
          f(this, "placement", null);
          f(this, "clickedInsideTheDrop", false);
          f(
            this,
            "handleResize",
            (0, p.default)(() => {
              this.placement = null;
              this.setupDropElement();
            }),
          );
          f(this, "setupWidth", () => {
            if (
              this.props.behavior.setupFullWidthOnXS &&
              this.state.show &&
              this.dropRef.current
            ) {
              (0, k.setupWidth)(this.dropRef.current, this.getHost());
            }
          });
          f(this, "callOnClose", () => {
            if (this.props.show) {
              if (this.state.show && this.props.show) {
                var e;
                var t;
                if (this.clickedInsideTheDrop) {
                  this.clickedInsideTheDrop = false;
                  return;
                }
                if (
                  (e = this.props) !== null &&
                  e !== undefined &&
                  (t = e.onClose) !== null &&
                  t !== undefined
                ) {
                  t.call(e);
                }
              }
            } else {
              this.clickedInsideTheDrop = false;
            }
          });
          f(this, "preventCloseCallback", () => {
            this.clickedInsideTheDrop = true;
          });
          f(this, "updateDropPosition", () => {
            var e;
            if (
              !this.state.show ||
              !this.dropRef.current ||
              (e = this.props.activatorRef) === null ||
              e === undefined ||
              !e.current
            ) {
              return;
            }
            let t = g.PLACEMENT_DOWN_SEQUENCE;
            if (this.props.onlySetPlacement) {
              t = [this.props.placement];
            }
            const o = (0, k.updatePosition)({
              behavior: this.props.behavior,
              placementSequence: t,
              activatorElement: this.props.activatorRef.current,
              dropElement: this.dropRef.current,
              sizeBox: this.sizeBoxRef.current,
              host: this.getHost(),
              placement: this.placement || this.props.placement,
              classNames: [
                u.Z["bloko-drop"],
                ...this.props.baseClassNames,
                (0, g.makeDropLayerClass)(this.props.layer),
                ...g.FLEXIBLE_CLASS.split(" "),
                ...g.FULLSCREEN_ON_XS_CLASS.split(" "),
                g.STRETCH_ON_XS_CLASS,
                g.CLICKABLE_CLASS,
              ],
              arrow: this.arrowRef.current,
              arrowSize: this.props.behavior.arrowSize,
            });
            this.placement = o.placement;
            if (this.dropRef.current) {
              (0, m.default)(this.dropRef.current);
            }
          });
        }
        initializeObserver() {
          this.resizeObserver =
            window?.ResizeObserver &&
            new window.ResizeObserver(() => {
              if (this.state.show && this.dropRef.current) {
                this.handleResize();
              }
            });
        }
        componentDidMount() {
          var e;
          var t;
          var o;
          var n;
          const i = this.getHost();
          if (i === document.body) {
            this.initializeObserver();
          }
          if ((e = window) !== null && e !== undefined && e.ResizeObserver) {
            this.baseResizeObserver = new window.ResizeObserver(
              this.updateDropPosition,
            );
          }
          this.setState({
            isFirstRender: false,
          });
          if (this.state.show) {
            this.setupDropElement();
          }
          if (
            (t = this.props.activatorRef) !== null &&
            t !== undefined &&
            (o = t.current) !== null &&
            o !== undefined &&
            (n = o.addEventListener) !== null &&
            n !== undefined
          ) {
            n.call(o, "click", this.preventCloseCallback);
          }
          if (this.resizeObserver) {
            this.resizeObserver.observe(i);
          } else {
            window.addEventListener("resize", this.handleResize);
          }
          if (this.props.closeByClickOutside) {
            document.addEventListener("click", this.callOnClose);
          }
        }
        componentDidUpdate(e) {
          var t;
          if (this.dropRef.current) {
            (0, m.default)(this.dropRef.current);
          }
          if (this.props.show && !e.show) {
            this.setState(
              {
                show: true,
              },
              () => {
                this.setupDropElement();
              },
            );
          }
          if (!this.props.show && e.show) {
            this.setState(
              {
                animate: true,
                show: false,
              },
              () => {
                this.placement = null;
              },
            );
          }
          if (
            this.baseResizeObserver &&
            (t = this.sizeBoxRef) !== null &&
            t !== undefined &&
            t.current
          ) {
            this.baseResizeObserver.observe(this.sizeBoxRef.current);
          }
          this.updateDropPosition();
        }
        componentWillUnmount() {
          var e;
          var t;
          var o;
          if (!this.resizeObserver) {
            window.removeEventListener("resize", this.handleResize);
          }
          if (this.resizeObserver) {
            this.resizeObserver.disconnect();
          }
          if (this.baseResizeObserver) {
            this.baseResizeObserver.disconnect();
          }
          document.removeEventListener("click", this.callOnClose);
          if (
            (e = this.props.activatorRef) !== null &&
            e !== undefined &&
            (t = e.current) !== null &&
            t !== undefined &&
            (o = t.removeEventListener) !== null &&
            o !== undefined
          ) {
            o.call(t, "click", this.preventCloseCallback);
          }
        }
        setupDropElement() {
          if (this.dropRef.current) {
            (0, k.setInitialCSSMetrics)(this.dropRef.current);
          }
          this.setupWidth();
          this.updateDropPosition();
        }
        getHost() {
          return this.props.host || document.body;
        }
        renderTitle() {
          if (this.props.title) {
            return (0, _.jsxs)("div", {
              className: u.Z["bloko-drop__title"],
              children: [
                (0, _.jsx)("div", {
                  className: u.Z["bloko-drop__title-text"],
                  children: this.props.title,
                }),
                (0, _.jsx)("div", {
                  className: u.Z["bloko-drop__close"],
                  children: (0, _.jsx)(c.Z, {
                    onClick: this.props.onClose,
                    "data-qa": "bloko-drop-down-close-button",
                    children: (0, _.jsx)(d.Z, {}),
                  }),
                }),
              ],
            });
          } else {
            return null;
          }
        }
        renderBody() {
          if (this.state.show || this.state.animate) {
            return (0, _.jsxs)(n.Fragment, {
              children: [
                this.props.render(),
                this.props.behavior.showArrow &&
                  (0, _.jsx)("div", {
                    className: b.Z["bloko-drop__arrow"],
                    ref: this.arrowRef,
                  }),
              ],
            });
          } else {
            return null;
          }
        }
        renderDrop() {
          const {
            children: e,
            placement: t,
            host: o,
            show: n,
            layer: i,
            render: l,
            onClose: s,
            onlySetPlacement: c,
            closeByClickOutside: d,
            dataQa: b,
            flexible: h,
            baseClassNames: p,
            behavior: k,
            title: m,
            stretchOnXS: f,
            paddingWrapperClassName: v,
            activatorRef: C,
            ...w
          } = this.props;
          const x = a()(
            [u.Z["bloko-drop"], ...p, (0, g.makeDropLayerClass)(i)],
            {
              [g.FLEXIBLE_CLASS]: h,
              [g.FULLSCREEN_ON_XS_CLASS]: k.fullScreenOnXS,
              [g.STRETCH_ON_XS_CLASS]: k.fullScreenOnXS && f,
            },
          );
          return (0, _.jsx)(r.Z, {
            in: this.state.show,
            timeout: {
              enter: g.ANIMATION_TIMEOUT_MS,
              exit: 0,
            },
            onExited: () => {
              this.setState({
                animate: false,
              });
            },
            unmountOnExit: true,
            classNames: {
              enterActive: u.Z["bloko-drop_active-enter"],
              enterDone: u.Z["bloko-drop_done-enter"],
            },
            nodeRef: this.dropRef,
            children: (0, _.jsx)("div", {
              ...w,
              "data-qa": b,
              ref: this.dropRef,
              onClick: this.preventCloseCallback,
              className: x,
              children: (0, _.jsxs)("div", {
                ref: this.sizeBoxRef,
                className: a()("bloko-drop__padding-wrapper", {
                  [v || ""]: v,
                }),
                children: [this.renderTitle(), this.renderBody()],
              }),
            }),
          });
        }
        renderOverlay() {
          return (
            this.props.behavior.fullScreenOnXS &&
            (0, h.getBreakpoint)() === h.Breakpoint.XS &&
            this.state.show &&
            (0, _.jsx)("div", {
              className: "bloko-drop__overlay",
              onClick: this.callOnClose,
            })
          );
        }
        render() {
          if (this.state.isFirstRender) {
            return this.props.children;
          } else {
            return (0, _.jsxs)(_.Fragment, {
              children: [
                this.props.children,
                l().createPortal(this.renderOverlay(), document.body),
                l().createPortal(this.renderDrop(), this.getHost()),
              ],
            });
          }
        }
      }
      v.displayName = "blocks/drop/Base/DropBase";
    },
    999217: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(394280);
      var i = o(343856);
      const l = (e) => {
        let { DropElement: t, children: o, onClose: l, render: r, ...s } = e;
        const [a, c] = (0, n.useState)(false);
        const d = (0, n.useCallback)(() => {
          c(false);
          if (l != null) {
            l();
          }
        }, [l]);
        const b = (0, n.useCallback)(
          (e) => {
            var t;
            var n;
            if ((t = (n = o.props).onClick) !== null && t !== undefined) {
              t.call(n, e);
            }
            c(!a);
            if (a) {
              if (l != null) {
                l();
              }
            }
          },
          [a, l, o.props],
        );
        const u = (0, n.useCallback)(() => r(d), [r, d]);
        return (0, i.jsx)(t, {
          ...s,
          show: a,
          onClose: d,
          render: u,
          children: (0, n.cloneElement)(o, {
            onClick: b,
          }),
        });
      };
    },
    300442: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        DownLayer: () => a.DownLayer,
        DownPlacement: () => a.DownPlacement,
        default: () => c,
      });
      var n = o(704744);
      var i = o.n(n);
      var l = o(713786);
      var r = o.n(l);
      var s = o(343856);
      var a = o(586746);
      const c = (e) =>
        (0, s.jsx)(i(), {
          ...e,
          DropElement: r(),
          children: e.children,
        });
    },
    767013: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      o(394280);
      var n = o(324085);
      var i = o(343856);
      const l = (e) =>
        (0, i.jsx)("div", {
          ...e,
          className: n.Z["bloko-drop-down-no-paddings"],
        });
    },
    205188: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        BASE_CLASS_NAMES: () => s,
        BEHAVIOR: () => c,
        DownLayer: () => n.DropLayer,
        DownPlacement: () => l,
        PADDING_WRAPPER_CLASS_NAME: () => a,
        defaultProps: () => r,
      });
      var n = o(665682);
      var i = o(324085);
      const l = n.DropPlacement;
      const r = {
        layer: n.DropLayer.AboveContent,
        onlySetPlacement: false,
        placement: n.DropPlacement.BottomStart,
        dataQa: "bloko-drop-down",
        showCloseButton: false,
      };
      const s = [i.Z["bloko-drop_down"], i.Z["bloko-drop_theme-light"]];
      const a = i.Z["bloko-drop__padding-wrapper_down"];
      const c = {
        showArrow: false,
        arrowSize: 0,
        setupFullWidthOnXS: true,
        placementOffset: 0,
        alignToActivatorBorders: true,
        fullScreenOnXS: true,
      };
    },
    449037: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        Click: () => u,
        DownLayer: () => c.DropLayer,
        DownPlacement: () => d.DownPlacement,
        default: () => h,
      });
      var n = o(962904);
      var i = o.n(n);
      var l = o(845807);
      var r = o.n(l);
      var s = o(479658);
      var a = o.n(s);
      var c = o(665682);
      var d = o(205188);
      const b = r().build({
        defaults: {
          ...d.defaultProps,
          host: "body",
          onShow() {},
          onClose() {},
        },
        create(e, t) {
          let {
            host: o,
            showCloseButton: n,
            layer: l,
            placement: r,
            html: s,
            onlySetPlacement: c,
            onShow: b,
            onClose: u,
            flexible: h,
            dataQa: p,
            title: k,
          } = t;
          return i()(e, {
            host: o,
            layer: l,
            placement: r,
            html: s,
            onlySetPlacement: c,
            onShow: b,
            onClose: u,
            flexible: h,
            dataQa: p,
            title: k,
            baseClassNames: d.BASE_CLASS_NAMES,
            behavior: d.BEHAVIOR,
            template: a(),
            templateData: {
              showCloseButton: !k && n,
            },
            selectors: {
              component: "Bloko-Drop-Down",
              content: "Bloko-Drop-Down-Content",
            },
            closeByClickOutside: true,
          });
        },
        componentName: "drop/Down/down",
      });
      const u = (0, n.clickBaseFabric)(b);
      const h = b;
    },
    229423: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        DownLayer: () => b.DownLayer,
        DownPlacement: () => b.DownPlacement,
        default: () => p,
      });
      var n = o(394280);
      var i = o(214891);
      var l = o.n(i);
      var r = o(806537);
      var s = o(561539);
      var a = o(585614);
      var c = o(487153);
      var d = o(549155);
      var b = o(586746);
      var u = o(324085);
      var h = o(343856);
      const p = (e) => {
        const {
          render: t,
          showCloseButton: o,
          onClose: i,
          ...p
        } = {
          host: null,
          ...b.defaultProps,
          ...e,
        };
        const k = (0, n.useCallback)(() => {
          if (!o || p.title) {
            return t();
          }
          const e = (0, d.getBreakpoint)() === d.Breakpoint.XS;
          return (0, h.jsxs)("div", {
            className: u.Z["bloko-drop__content-wrapper"],
            children: [
              (0, h.jsx)("div", {
                className: u.Z["bloko-drop__content"],
                children: t(),
              }),
              (0, h.jsx)("div", {
                className: u.Z["bloko-drop__close"],
                children: (0, h.jsx)(r.Z, {
                  onClick: i,
                  "data-qa": "bloko-drop-down-close-button",
                  children: e
                    ? (0, h.jsx)(s.Z, {
                        initial: a.Z.Gray80,
                        highlighted: a.Z.Gray60,
                      })
                    : (0, h.jsx)(c.Z, {
                        initial: a.Z.Gray80,
                        highlighted: a.Z.Gray60,
                      }),
                }),
              }),
            ],
          });
        }, [o, p.title, t, i]);
        return (0, h.jsx)(l(), {
          ...p,
          render: k,
          onClose: i,
          baseClassNames: b.BASE_CLASS_NAMES,
          paddingWrapperClassName: b.PADDING_WRAPPER_CLASS_NAME,
          behavior: b.BEHAVIOR,
          closeByClickOutside: true,
          children: p.children,
        });
      };
    },
    398056: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(343856);
      const r = (e) => {
        let { children: t, onHover: o, DropElement: r, show: s, ...a } = e;
        const [c, d] = (0, n.useState)(null);
        const b = (0, n.useCallback)((e) => {
          d(e);
        }, []);
        const u = (0, n.useCallback)((e) => {
          d(e);
        }, []);
        const h = ((e) => {
          const t = (0, n.useRef)(true);
          return {
            onMouseEnter: () => e(true),
            onMouseLeave: () => e(false),
            onTouchStart: (0, n.useCallback)(() => {
              t.current = true;
            }, []),
            onTouchCancel: (0, n.useCallback)(() => {
              t.current = false;
            }, []),
            onTouchMove: (0, n.useCallback)(() => {
              t.current = false;
            }, []),
            onTouchEnd: (0, n.useCallback)(() => {
              e(t.current);
              t.current = false;
            }, [e]),
          };
        })(b);
        (0, n.useEffect)(() => {
          if (c !== null && o) {
            o(c);
          }
        }, [c, o]);
        if (!t) {
          return null;
        }
        const p =
          typeof t == "string"
            ? (0, l.jsx)("span", {
                children: t,
              })
            : t;
        return (0, l.jsx)(r, {
          ...a,
          onExternalClose: u,
          show: s === false ? s : c,
          children: i().isValidElement(p) && i().cloneElement(p, h),
        });
      };
    },
    22771: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        InfoLayer: () => a.InfoLayer,
        InfoPlacement: () => a.InfoPlacement,
        InfoTheme: () => a.InfoTheme,
        default: () => c,
      });
      var n = o(704744);
      var i = o.n(n);
      var l = o(517102);
      var r = o.n(l);
      var s = o(343856);
      var a = o(757754);
      const c = (e) =>
        (0, s.jsx)(i(), {
          ...e,
          DropElement: r(),
          children: e.children,
        });
    },
    799729: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ANIMATION_TIMEOUT_MS: () => l,
        ARROW_SIZE: () => r,
        BASE_CLASS_NAME: () => b,
        BEHAVIOR: () => h,
        InfoLayer: () => n.DropLayer,
        InfoPlacement: () => a,
        InfoTheme: () => c,
        PADDING_WRAPPER_CLASS_NAME: () => u,
        PLACEMENT_INFO_SEQUENCE: () => s,
        default: () => d,
      });
      var n = o(665682);
      var i = o(546529);
      const l = 32;
      const r = 5;
      const s = n.PLACEMENT_DOWN_SEQUENCE;
      const a = n.DropPlacement;
      let c;
      (function (e) {
        e.Light = "light";
        e.Dark = "dark";
        e.Bright = "bright";
        e.Info = "info";
        e.Neural = "neural";
      })((c ||= {}));
      const d = {
        theme: c.Dark,
        layer: n.DropLayer.AboveContent,
        placement: a.BottomStart,
        showCloseButton: true,
        closeByClickOutside: true,
        dataQa: "bloko-drop-info",
        show: false,
      };
      const b = i.Z["bloko-drop_info"];
      const u = i.Z["bloko-drop__padding-wrapper_info"];
      const h = {
        showArrow: true,
        arrowSize: r,
        setupFullWidthOnXS: false,
        placementOffset: n.DISTANCE + r,
        alignToActivatorBorders: false,
        fullScreenOnXS: false,
      };
    },
    423011: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        InfoLayer: () => b.DropLayer,
        InfoPlacement: () => u.InfoPlacement,
        InfoTheme: () => u.InfoTheme,
        default: () => k,
      });
      var n = o(394280);
      var i = o(214891);
      var l = o.n(i);
      var r = o(981747);
      var s = o(585614);
      var a = o(806537);
      var c = o(487153);
      var d = o(546529);
      var b = o(665682);
      var u = o(799729);
      var h = o(343856);
      const p = {
        [u.InfoTheme.Light]: s.Z.Gray80,
        [u.InfoTheme.Dark]: s.Z.White,
        [u.InfoTheme.Bright]: s.Z.White,
        [u.InfoTheme.Info]: s.Z.White,
        [u.InfoTheme.Neural]: s.Z.White,
      };
      const k = (e) => {
        const {
          theme: t,
          showCloseButton: o,
          render: i,
          onClose: s,
          ...b
        } = {
          host: null,
          ...u.default,
          ...e,
        };
        const k = (0, n.useMemo)(
          () => [u.BASE_CLASS_NAME, (0, r.getThemeClass)(t)],
          [t],
        );
        const g = (0, n.useCallback)(
          () =>
            o
              ? (0, h.jsxs)("div", {
                  className: d.Z["bloko-drop__content-wrapper"],
                  children: [
                    (0, h.jsx)("div", {
                      className: d.Z["bloko-drop__content"],
                      children: i(),
                    }),
                    (0, h.jsx)("div", {
                      className: d.Z["bloko-drop__close"],
                      children: (0, h.jsx)(a.Z, {
                        onClick: s,
                        "data-qa": "bloko-drop-info-close-button",
                        children: (0, h.jsx)(c.Z, {
                          initial: p[t],
                        }),
                      }),
                    }),
                  ],
                })
              : i(),
          [o, i, t, s],
        );
        return (0, h.jsx)(l(), {
          ...b,
          onClose: s,
          onlySetPlacement: false,
          behavior: u.BEHAVIOR,
          baseClassNames: k,
          paddingWrapperClassName: u.PADDING_WRAPPER_CLASS_NAME,
          render: g,
        });
      };
    },
    254077: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        Click: () => k,
        InfoLayer: () => b.DropLayer,
        InfoPlacement: () => u.InfoPlacement,
        InfoTheme: () => u.InfoTheme,
        default: () => g,
      });
      var n = o(962904);
      var i = o.n(n);
      var l = o(981747);
      var r = o(585614);
      var s = o(845807);
      var a = o.n(s);
      var c = o(219965);
      var d = o.n(c);
      var b = o(665682);
      var u = o(799729);
      const h = {
        [u.InfoTheme.Light]: r.Z.Gray80,
        [u.InfoTheme.Dark]: r.Z.White,
        [u.InfoTheme.Bright]: r.Z.White,
        [u.InfoTheme.Info]: r.Z.White,
        [u.InfoTheme.Neural]: r.Z.White,
      };
      const p = a().build({
        defaults: {
          ...u.default,
          host: document.body,
          onShow: () => {},
        },
        create(e, t) {
          let {
            placement: o,
            layer: n,
            theme: r,
            html: s,
            host: a,
            closeByClickOutside: c,
            onClose: b,
            onShow: p,
            showCloseButton: k,
            dataQa: g,
            flexible: m,
          } = t;
          return i()(e, {
            placement: o,
            layer: n,
            html: s,
            host: a,
            closeByClickOutside: c,
            onClose: b,
            onShow: p,
            dataQa: g,
            flexible: m,
            baseClassNames: [u.BASE_CLASS_NAME, (0, l.getThemeClass)(r)],
            behavior: u.BEHAVIOR,
            template: d(),
            templateData: {
              showCloseButton: k,
              icon: h[r],
            },
            selectors: {
              content: "Bloko-Info-Content",
              component: "Bloko-Info",
              arrow: "Bloko-Info-Arrow",
            },
            onlySetPlacement: false,
          });
        },
        componentName: "drop/Info/info",
      });
      const k = (0, n.clickBaseFabric)(p);
      const g = p;
    },
    607932: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => v,
      });
      var n = o(394280);
      var i = o(581262);
      var l = o(882177);
      var r = o.n(l);
      var s = o(665682);
      var a = o(806537);
      var c = o(487153);
      var d = o(585614);
      var b = o(804203);
      const u = "bloko-info-inline";
      const h = "bloko-info-inline_no-indent";
      const p = "bloko-info-inline_with-pointer";
      const k = "bloko-info-inline__content";
      const g = "bloko-info-inline__content_without-close";
      const m = "bloko-info-inline__close";
      var _ = o(518039);
      var f = o(343856);
      const v = (e) => {
        let {
          children: t,
          show: o = false,
          showCloseButton: l = true,
          render: v,
          onClose: C,
          withPointer: w,
          dataQa: x = "bloko-drop-info-inline",
          noIndent: y,
          ...S
        } = e;
        const T = (0, n.useRef)(null);
        const E = (0, n.useCallback)(
          () =>
            (0, f.jsx)(i.Z, {
              in: o,
              timeout: {
                enter: s.ANIMATION_TIMEOUT_MS,
                exit: 0,
              },
              unmountOnExit: true,
              classNames: {
                enterActive: _.Z["bloko-drop_active-enter"],
                enterDone: _.Z["bloko-drop_done-enter"],
              },
              nodeRef: T,
              children: (0, f.jsx)("div", {
                ref: T,
                "data-qa": x,
                ...S,
                children: (0, f.jsx)("div", {
                  className: r()(u, {
                    [h]: y,
                    [p]: w,
                  }),
                  children: (0, f.jsx)("div", {
                    className: r()(k, {
                      [g]: !l,
                    }),
                    children: (0, f.jsxs)(f.Fragment, {
                      children: [
                        v(),
                        l
                          ? (0, f.jsx)("div", {
                              className: m,
                              children: (0, f.jsx)(b.Z, {
                                children: (0, f.jsx)(a.Z, {
                                  onClick: C,
                                  children: (0, f.jsx)(c.Z, {
                                    initial: d.Z.Gray50,
                                    highlighted: d.Z.Gray60,
                                  }),
                                }),
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                }),
              }),
            }),
          [l, v, C, o, w, x, y, S],
        );
        return (0, f.jsxs)("div", {
          children: [t, E()],
        });
      };
    },
    693310: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => u,
      });
      var n = o(665682);
      var i = o(487153);
      var l = o(585614);
      var r = o(607621);
      var s = o(845807);
      var a = o.n(s);
      var c = o(271611);
      var d = o.n(c);
      const b = a().build({
        defaults: {
          onClose: () => {},
          showCloseButton: true,
          dataQa: "bloko-drop-info-inline",
        },
        create(e, t) {
          let o;
          let s;
          const c = {
            show(e = false) {
              const { infoInlineNode: t, hostNode: i } = o;
              if (!s) {
                if (e) {
                  s = true;
                  i.appendChild(t);
                  return;
                }
                s = true;
                t.classList.add("bloko-drop_active-enter");
                i.appendChild(t);
                setTimeout(
                  () => t.classList.add("bloko-drop_done-enter"),
                  n.ANIMATION_TIMEOUT_MS,
                );
                setTimeout(() => {
                  t.classList.remove("bloko-drop_done-enter");
                  t.classList.remove("bloko-drop_active-enter");
                }, n.ANIMATION_TIMEOUT_MS + n.ENTER_ANIMATION_MS);
              }
            },
            hide() {
              if (s) {
                o.hostNode.removeChild(o.infoInlineNode);
                s = false;
              }
            },
            toggle(e) {
              if (arguments.length === 0 ? !s : e) {
                this.show();
              } else {
                this.hide();
              }
            },
            changeOptions(n) {
              let {
                host: s = t.host || e.parentNode,
                html: b = t.html,
                dataQa: u = t.dataQa,
                showCloseButton: h = t.showCloseButton,
                withPointer: p = t.withPointer,
                show: k = t.show,
              } = n;
              const g = typeof s == "string" ? document.querySelector(s) : s;
              const m = d().render({
                withPointer: p ? "bloko-info-inline_with-pointer" : "",
                closeButton: h
                  ? ""
                  : "bloko-info-inline__content_without-close",
                showCloseButton: h,
                dataQa: u,
              });
              const _ = document.createElement("div");
              _.innerHTML = m;
              const f = _.firstChild;
              if (typeof b == "string") {
                f.querySelector(".Bloko-InfoInline-Content").innerHTML = b;
              } else if (b) {
                f.querySelector(".Bloko-InfoInline-Content").appendChild(b);
              }
              if (h) {
                a().make(r.Z, f.querySelector(".Bloko-Drop-BodyIconClose"), {
                  CrossScaleSmallEnclosedFalse: i.Z,
                  iconProps: {
                    initial: l.Z.Gray50,
                    highlighted: l.Z.Gray60,
                  },
                });
                f.addEventListener("click", function (e) {
                  if (e.target.closest(".Bloko-Drop-Close")) {
                    c.toggle();
                  }
                });
              }
              o = {
                infoInlineNode: f,
                hostNode: g,
              };
              if (k) {
                this.show(k);
              }
              return this;
            },
          };
          c.changeOptions(t);
          return c;
        },
        componentName: "drop/InfoInline/infoInline",
      });
      const u = b;
    },
    820969: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        MenuItem: () => l.MenuItem,
        MenuLayer: () => s.MenuLayer,
        MenuPlacement: () => s.MenuPlacement,
        default: () => c,
      });
      var n = o(704744);
      var i = o.n(n);
      var l = o(110622);
      var r = o.n(l);
      var s = o(304650);
      var a = o(343856);
      const c = (e) =>
        (0, a.jsx)(i(), {
          ...e,
          DropElement: r(),
        });
    },
    472337: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => c,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(56696);
      var s = o(343856);
      const a = (e) => {
        let {
          Element: t = "a",
          selected: o,
          selectable: n,
          innerRef: i,
          ...a
        } = e;
        return (0, s.jsx)(t, {
          ...a,
          ref: i,
          className: l()(r.Z["bloko-drop-menu-item"], {
            [r.Z["bloko-drop-menu-item_selected"]]: o,
            [r.Z["bloko-drop-menu-item_selectable"]]: n,
          }),
        });
      };
      const c = (0, n.memo)(a);
    },
    650743: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        BASE_CLASS_NAMES: () => s,
        BEHAVIOR: () => c,
        MenuLayer: () => n.DropLayer,
        MenuPlacement: () => l,
        PADDING_WRAPPER_CLASS_NAME: () => a,
        defaultProps: () => r,
      });
      var n = o(665682);
      var i = o(719435);
      const l = n.DropPlacement;
      const r = {
        layer: n.DropLayer.AboveContent,
        onlySetPlacement: false,
        placement: l.BottomStart,
        dataQa: "bloko-drop-menu",
      };
      const s = [i.Z["bloko-drop_menu"], i.Z["bloko-drop_theme-light"]];
      const a = i.Z["bloko-drop__padding-wrapper_menu"];
      const c = {
        showArrow: false,
        arrowSize: 0,
        setupFullWidthOnXS: true,
        placementOffset: 0,
        alignToActivatorBorders: true,
        fullScreenOnXS: true,
      };
    },
    214630: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        MenuItem: () => r.a,
        MenuLayer: () => s.MenuLayer,
        MenuPlacement: () => s.MenuPlacement,
        default: () => c,
      });
      var n = o(214891);
      var i = o.n(n);
      var l = o(295479);
      var r = o.n(l);
      var s = o(304650);
      o(719435);
      var a = o(343856);
      const c = (e) => {
        const t = {
          ...s.defaultProps,
          host: null,
          ...e,
        };
        return (0, a.jsx)(i(), {
          ...t,
          behavior: s.BEHAVIOR,
          baseClassNames: s.BASE_CLASS_NAMES,
          paddingWrapperClassName: s.PADDING_WRAPPER_CLASS_NAME,
          closeByClickOutside: true,
        });
      };
    },
    202641: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        Click: () => u,
        MenuLayer: () => c.DropLayer,
        MenuPlacement: () => d.MenuPlacement,
        default: () => h,
      });
      var n = o(962904);
      var i = o.n(n);
      var l = o(845807);
      var r = o.n(l);
      var s = o(288536);
      var a = o.n(s);
      var c = o(665682);
      var d = o(650743);
      const b = r().build({
        defaults: {
          ...d.defaultProps,
          host: "body",
          onShow() {},
          onClose() {},
        },
        create(e, t) {
          let {
            host: o,
            layer: n,
            placement: l,
            html: r,
            onlySetPlacement: s,
            onShow: c,
            onClose: b,
            flexible: u,
            dataQa: h,
            title: p,
          } = t;
          return i()(e, {
            host: o,
            layer: n,
            placement: l,
            html: r,
            onlySetPlacement: s,
            onShow: c,
            onClose: b,
            flexible: u,
            dataQa: h,
            title: p,
            baseClassNames: d.BASE_CLASS_NAMES,
            behavior: d.BEHAVIOR,
            template: a(),
            selectors: {
              component: "Bloko-DropMenu",
              content: "Bloko-DropMenu-Content",
            },
            closeByClickOutside: true,
          });
        },
        componentName: "drop/Menu/menu",
      });
      const u = (0, n.clickBaseFabric)(b);
      const h = b;
    },
    749230: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => d,
      });
      var n = o(394280);
      var i = o(771674);
      var l = o.n(i);
      var r = o(947870);
      var s = o.n(r);
      const a = (e) => {
        if (!(0, n.isValidElement)(e) || !e.props) {
          return "";
        }
        const t = e;
        if (t.props.searchText) {
          return t.props.searchText;
        }
        const o = e;
        if (o.props.children && typeof o.props.children != "boolean") {
          if (
            (0, n.isValidElement)(o.props.children) &&
            o.props.children.props
          ) {
            return a(o.props.children);
          } else if (Array.isArray(o.props.children)) {
            return o.props.children
              .map((e) => (typeof e == "string" ? e : a(e)))
              .join(" ");
          } else {
            return o.props.children.toString();
          }
        } else {
          return "";
        }
      };
      const c = (e, t, o) =>
        n.Children.toArray(e).filter(
          (e) => !!o(e) && (!t || l().match(t, a(e))),
        );
      const d = function (e, t, o, i = 200) {
        const [l, r] = (0, n.useState)("");
        const [a, d] = (0, n.useState)(o ? [] : c(e, l, t));
        const b = (0, n.useMemo)(
          () =>
            s()((e, n) => {
              if (o) {
                o(e, n).then((e) => e && d(e));
              } else {
                d(c(e, n, t));
              }
            }, i),
          [i, o, t],
        );
        (0, n.useEffect)(() => {
          b(e, l);
        }, [e, l, b]);
        return {
          filterQuery: l,
          setFilterQuery: r,
          filteredOptions: a,
        };
      };
    },
    510005: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        Context: () => r,
        default: () => s,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(343856);
      const r = i().createContext({
        setShow: () => {
          throw new Error("Add TipProvider in root App");
        },
        showedId: null,
      });
      const s = (e) => {
        let { children: t } = e;
        const [o, i] = (0, n.useState)(null);
        return (0, l.jsx)(r.Provider, {
          value: {
            setShow: i,
            showedId: o,
          },
          children: t,
        });
      };
    },
    22966: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        TipLayer: () => l.TipLayer,
        TipPlacement: () => l.TipPlacement,
        TipProvider: () => a.a,
        TipTheme: () => l.TipTheme,
        default: () => d,
      });
      var n = o(968009);
      var i = o.n(n);
      var l = o(948038);
      var r = o.n(l);
      var s = o(941144);
      var a = o.n(s);
      var c = o(343856);
      const d = (e) => {
        let { children: t, ...o } = e;
        return (0, c.jsx)(i(), {
          DropElement: r(),
          ...o,
          children: t,
        });
      };
    },
    517073: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ANIMATION_TIMEOUT_MS: () => r,
        ARROW_SIZE: () => s,
        BASE_CLASS_NAMES: () => a,
        PLACEMENT_TIP_SEQUENCE: () => d,
        TipLayer: () => n.DropLayer,
        TipPlacement: () => c,
        TipTheme: () => b,
        default: () => u,
      });
      var n = o(665682);
      var i = o(387501);
      var l = o(973911);
      const r = 32;
      const s = 5;
      const a = [l.Z["bloko-drop"], l.Z["bloko-drop_tip"]];
      const c = {
        Top: i.Placement.Top,
        Right: i.Placement.Right,
        Bottom: i.Placement.Bottom,
        Left: i.Placement.Left,
      };
      const d = Object.values(c);
      let b;
      (function (e) {
        e.Dark = "dark";
        e.Attention = "attention";
      })((b ||= {}));
      const u = {
        theme: b.Dark,
        layer: n.DropLayer.AboveContent,
        placement: c.Top,
        dataQa: "bloko-drop-tip",
        show: false,
        host: null,
        flexible: false,
      };
    },
    472770: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        TipLayer: () => h.TipLayer,
        TipPlacement: () => h.TipPlacement,
        TipProvider: () => u.a,
        TipTheme: () => h.TipTheme,
        default: () => C,
      });
      var n = o(394280);
      var i = o(727158);
      var l = o.n(i);
      var r = o(581262);
      var s = o(981747);
      var a = o(665682);
      var c = o(368165);
      var d = o.n(c);
      var b = o(941144);
      var u = o.n(b);
      var h = o(393755);
      var p = o.n(h);
      var k = o(973911);
      var g = o(836522);
      var m = o(343856);
      function _(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      let f = 0;
      class v extends n.Component {
        constructor(e) {
          super(e);
          _(this, "updateTipPosition", () => {
            var e;
            if (
              this.state.show &&
              this.dropRef.current &&
              this.props.placement &&
              (e = this.props.activatorRef) !== null &&
              e !== undefined &&
              e.current
            ) {
              const e = this.props.layer
                ? [
                    ...h.BASE_CLASS_NAMES,
                    (0, a.makeDropLayerClass)(this.props.layer),
                  ]
                : [...h.BASE_CLASS_NAMES];
              if (this.props.flexible) {
                e.push(a.FLEXIBLE_CLASS);
              }
              (0, s.updatePosition)({
                placementSequence: h.PLACEMENT_TIP_SEQUENCE,
                activatorElement: this.props.activatorRef.current,
                dropElement: this.dropRef.current,
                host: this.getHost(),
                placement: this.props.placement,
                classNames: e,
                arrowSize: h.ARROW_SIZE,
                arrow: this.arrowRef.current,
                behavior: {
                  placementOffset: a.DISTANCE + h.ARROW_SIZE,
                  alignToActivatorBorders: false,
                  fullScreenOnXS: false,
                  setupFullWidthOnXS: false,
                  arrowSize: 0,
                  showArrow: false,
                },
              });
              if (this.props.theme) {
                this.dropRef.current.classList.add(
                  (0, s.getThemeClass)(this.props.theme),
                );
              }
            }
          });
          f += 1;
          this.dropRef = (0, n.createRef)();
          this.arrowRef = (0, n.createRef)();
          this.state = {
            uid: f,
            show: false,
          };
        }
        componentDidMount() {
          window.addEventListener("resize", this.updateTipPosition);
          if (this.props.show) {
            this.setState({
              show: true,
            });
            this.props.context.setShow(this.state.uid);
          }
        }
        componentDidUpdate(e, t) {
          if (this.dropRef.current) {
            d()(this.dropRef.current);
          }
          const { showedId: o, setShow: n } = this.props.context;
          if (this.state.show && !t.show && this.dropRef.current) {
            (0, s.setInitialCSSMetrics)(this.dropRef.current);
          }
          if (
            o === e.context.showedId &&
            this.state.show === t.show &&
            this.props.show &&
            o !== this.state.uid
          ) {
            this.setState({
              show: true,
            });
            n(this.state.uid);
          }
          if (
            o !== e.context.showedId &&
            this.state.show &&
            o !== this.state.uid
          ) {
            this.props.onExternalClose(false);
          } else if (this.props.show !== e.show) {
            this.setState({
              show: !!this.props.show,
            });
          }
          this.updateTipPosition();
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.updateTipPosition);
        }
        getHost() {
          var e;
          var t;
          return (
            this.props.host ||
            ((e = this.props.activatorRef) === null ||
            e === undefined ||
            (t = e.current) === null ||
            t === undefined
              ? undefined
              : t.parentNode)
          );
        }
        renderTip() {
          const {
            children: e,
            placement: t,
            theme: o,
            context: n,
            host: i,
            show: l,
            layer: s,
            render: c,
            dataQa: d,
            onExternalClose: b,
            flexible: u,
            activatorRef: p,
            ..._
          } = this.props;
          const f = s
            ? [...h.BASE_CLASS_NAMES, (0, a.makeDropLayerClass)(s)]
            : [...h.BASE_CLASS_NAMES];
          if (u) {
            f.push(a.FLEXIBLE_CLASS);
          }
          return (0, m.jsx)(r.Z, {
            in: this.state.show,
            timeout: {
              enter: h.ANIMATION_TIMEOUT_MS,
              exit: 0,
            },
            unmountOnExit: true,
            classNames: {
              enterActive: k.Z["bloko-drop_active-enter"],
              enterDone: k.Z["bloko-drop_done-enter"],
            },
            nodeRef: this.dropRef,
            children: (0, m.jsxs)("div", {
              className: f.join(" "),
              ref: this.dropRef,
              ..._,
              children: [
                (0, m.jsx)("div", {
                  "data-qa": d,
                  children: c(),
                }),
                (0, m.jsx)("div", {
                  className: g.Z["bloko-drop__arrow"],
                  ref: this.arrowRef,
                }),
              ],
            }),
          });
        }
        render() {
          return (0, m.jsxs)(n.Fragment, {
            children: [
              this.props.children,
              this.props.host
                ? l().createPortal(this.renderTip(), this.props.host)
                : this.renderTip(),
            ],
          });
        }
      }
      v.displayName = "drop/Tip/index/TipComponent";
      _(v, "defaultProps", p());
      const C = (e) =>
        (0, m.jsx)(b.Context.Consumer, {
          children: (t) =>
            (0, m.jsx)(v, {
              ...p(),
              ...e,
              context: t,
            }),
        });
    },
    37165: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        TipLayer: () => b.TipLayer,
        TipPlacement: () => b.TipPlacement,
        TipTheme: () => b.TipTheme,
        default: () => m,
      });
      var n = o(981747);
      var i = o(665682);
      var l = o(368165);
      var r = o.n(l);
      var s = o(845807);
      var a = o.n(s);
      var c = o(857726);
      var d = o.n(c);
      var b = o(393755);
      var u = o.n(b);
      var h = o(227793);
      var p = o.n(h);
      let k;
      const g = a().build({
        defaults: {
          ...u(),
          host: undefined,
          onExternalClose: () => {},
        },
        create(e, t) {
          let o;
          let l;
          const s = d()((t) => {
            const {
              tipNode: l,
              hostNode: r,
              placement: s,
              theme: a,
              layer: c,
              arrowRef: d,
              flexible: u,
            } = o;
            (0, n.updatePosition)({
              activatorElement: e,
              placement: s,
              host: r,
              placementSequence: b.PLACEMENT_TIP_SEQUENCE,
              classNames: [
                ...b.BASE_CLASS_NAMES,
                (0, i.makeDropLayerClass)(c),
                u ? i.FLEXIBLE_CLASS : "",
                t ? "" : "bloko-drop_active-enter",
                "Bloko-Tip",
              ],
              dropElement: l,
              arrow: d,
              arrowSize: b.ARROW_SIZE,
              behavior: {
                placementOffset: i.DISTANCE + b.ARROW_SIZE,
                alignToActivatorBorders: false,
              },
            });
            l.classList.add((0, n.getThemeClass)(a));
          });
          const a = {
            show() {
              const { tipNode: e, hostNode: t, onExternalClose: c } = o;
              if (!l) {
                if (k) {
                  k.hide();
                  c();
                }
                k = a;
                l = true;
                e.classList.add("bloko-drop_active-enter");
                r()(e);
                t.appendChild(e);
                (0, n.setInitialCSSMetrics)(e);
                s();
                window.addEventListener("resize", s);
                setTimeout(
                  () => e.classList.add("bloko-drop_done-enter"),
                  b.ANIMATION_TIMEOUT_MS,
                );
                setTimeout(() => {
                  e.classList.remove("bloko-drop_done-enter");
                  e.classList.remove("bloko-drop_active-enter");
                }, b.ANIMATION_TIMEOUT_MS + i.ENTER_ANIMATION_MS);
              }
            },
            hide() {
              if (l) {
                o.hostNode.removeChild(o.tipNode);
                k = null;
                l = false;
                window.removeEventListener("resize", s);
              }
            },
            toggle(e) {
              if (arguments.length === 0 ? !l : e) {
                this.show();
              } else {
                this.hide();
              }
            },
            changeOptions(r) {
              let {
                host: s = t.host || e.parentNode,
                html: a = t.html,
                placement: c = t.placement,
                theme: d = t.theme,
                layer: b = t.layer,
                dataQa: u = t.dataQa,
                onExternalClose: h = t.onExternalClose,
                flexible: k = t.flexible,
              } = r;
              const g = l;
              if (l) {
                this.hide();
              }
              const m = typeof s == "string" ? document.querySelector(s) : s;
              const _ = p().render({
                layer: (0, i.makeDropLayerClass)(b),
                placement: (0, n.getPlacementClass)(c).join(" "),
                theme: (0, n.getThemeClass)(d),
                dataQa: u,
              });
              const f = document.createElement("div");
              f.innerHTML = _;
              const v = f.firstChild;
              if (typeof a == "string") {
                v.querySelector(".Bloko-Tip-Content").innerHTML = a;
              } else if (a) {
                v.querySelector(".Bloko-Tip-Content").appendChild(a);
              }
              const C = v.querySelector(".Bloko-Tip-Arrow");
              o = {
                tipNode: v,
                hostNode: m,
                placement: c,
                theme: d,
                layer: b,
                arrowRef: C,
                onExternalClose: h,
                flexible: k,
              };
              if (g) {
                this.show();
              }
              return this;
            },
          };
          a.changeOptions(t);
          return a;
        },
        componentName: "drop/Tip/tip",
      });
      const m = g;
    },
    788585: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(665682);
      const i = {
        x: {
          start(e) {
            let { elementMetrics: t, alignToActivatorBorders: o } = e;
            if (o || t.width >= n.MIN_SIZE_TO_PLACE_DROP_AT_THE_START) {
              return {
                left: t.left,
              };
            } else {
              return {
                left: t.left + t.width / 2 - n.OFFSET_TO_ARROW_X,
              };
            }
          },
          center(e) {
            let { elementMetrics: t, dropElementMetrics: o } = e;
            return {
              left: t.left + (t.width - o.width) / 2,
            };
          },
          end(e) {
            let {
              elementMetrics: t,
              dropElementMetrics: o,
              alignToActivatorBorders: i,
            } = e;
            if (i || t.width >= n.MIN_SIZE_TO_PLACE_DROP_AT_THE_START) {
              return {
                left: t.right - o.width,
              };
            } else {
              return {
                left: t.left + t.width / 2 - o.width + n.OFFSET_TO_ARROW_X,
              };
            }
          },
        },
        y: {
          start(e) {
            let { elementMetrics: t, alignToActivatorBorders: o } = e;
            if (o || t.height >= n.MIN_SIZE_TO_PLACE_DROP_AT_THE_START) {
              return {
                top: t.top,
              };
            } else {
              return {
                top: t.top + t.height / 2 - n.OFFSET_TO_ARROW_Y,
              };
            }
          },
          center(e) {
            let { elementMetrics: t, dropElementMetrics: o } = e;
            return {
              top: t.top + (t.height - o.height) / 2,
            };
          },
          end(e) {
            let {
              elementMetrics: t,
              dropElementMetrics: o,
              alignToActivatorBorders: i,
            } = e;
            if (i || t.height >= n.MIN_SIZE_TO_PLACE_DROP_AT_THE_START) {
              return {
                top: t.bottom - o.height,
              };
            } else {
              return {
                top: t.top + t.height / 2 - o.height + n.OFFSET_TO_ARROW_Y,
              };
            }
          },
        },
      };
    },
    356521: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(665682);
      var i = o(183871);
      const l = {
        x: {
          start(e) {
            let { elementMetrics: t, dropElementMetrics: o } = e;
            const l = (0, i.getIntersectionX)(t, o);
            if (l) {
              if (t.width > n.MIN_SIZE_TO_PLACE_DROP_AT_THE_START) {
                return {
                  left: l.start + n.OFFSET_TO_ARROW_X - o.left,
                };
              } else {
                return {
                  left: (l.end - l.start) / 2 + l.start - o.left,
                };
              }
            } else {
              return {};
            }
          },
          center(e) {
            let { elementMetrics: t, dropElementMetrics: o, arrowSize: n } = e;
            return {
              left: Math.min(
                Math.max(t.left - o.left + t.width / 2, n),
                o.width - n * 2,
              ),
            };
          },
          end(e) {
            let { elementMetrics: t, dropElementMetrics: o } = e;
            const l = (0, i.getIntersectionX)(t, o);
            if (l) {
              if (t.width > n.MIN_SIZE_TO_PLACE_DROP_AT_THE_START) {
                return {
                  left: l.end - n.OFFSET_TO_ARROW_X - o.left,
                };
              } else {
                return {
                  left: (l.end - l.start) / 2 + l.start - o.left,
                };
              }
            } else {
              return {};
            }
          },
        },
        y: {
          start(e) {
            let { elementMetrics: t, dropElementMetrics: o } = e;
            const l = (0, i.getIntersectionY)(t, o);
            if (l) {
              if (t.height > n.MIN_SIZE_TO_PLACE_DROP_AT_THE_START) {
                return {
                  top: l.start + n.OFFSET_TO_ARROW_Y - o.top,
                };
              } else {
                return {
                  top: (l.end - l.start) / 2 + l.start - o.top,
                };
              }
            } else {
              return {};
            }
          },
          center(e) {
            let { elementMetrics: t, dropElementMetrics: o, arrowSize: n } = e;
            return {
              top: Math.min(
                Math.max(t.top - o.top + t.height / 2, n),
                o.height - n * 2,
              ),
            };
          },
          end(e) {
            let { elementMetrics: t, dropElementMetrics: o } = e;
            const l = (0, i.getIntersectionY)(t, o);
            if (l) {
              if (t.height > n.MIN_SIZE_TO_PLACE_DROP_AT_THE_START) {
                return {
                  top: l.start + n.OFFSET_TO_ARROW_Y - o.top,
                };
              } else {
                return {
                  top: (l.end - l.start) / 2 + l.start - o.top,
                };
              }
            } else {
              return {};
            }
          },
        },
      };
    },
    705685: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        clickBaseFabric: () => p,
        default: () => k,
      });
      var n = o(487153);
      var i = o(585614);
      var l = o(561539);
      var r = o(607621);
      var s = o(845807);
      var a = o.n(s);
      var c = o(857726);
      var d = o.n(c);
      var b = o(201962);
      var u = o(411303);
      var h = o(766032);
      function p(e) {
        return a().build({
          create(t, o) {
            const n = a().make(e, t, o);
            t.addEventListener("click", () => n.toggle());
            return n;
          },
          componentName: "blocks/drop/classic",
        });
      }
      const k = function (e, t) {
        let {
          placement: s,
          layer: c,
          onlySetPlacement: p,
          html: k,
          host: g,
          closeByClickOutside: m,
          onClose: _,
          onShow: f,
          dataQa: v,
          flexible: C,
          template: w,
          baseClassNames: x,
          selectors: y,
          behavior: S,
          templateData: T = {},
          title: E,
        } = t;
        const L = typeof g == "string" ? document.querySelector(g) : g;
        let I;
        let B;
        let M;
        let N = false;
        let P = false;
        let O = e;
        let D = s;
        const Z = d()(() => {
          (0, b.setInitialCSSMetrics)(I);
          if (S.setupFullWidthOnXS) {
            (0, b.setupWidth)(I, L);
          }
          if (!N) {
            return;
          }
          let e = u.PLACEMENT_DOWN_SEQUENCE;
          if (p) {
            e = [D];
          }
          const t = (0, b.updatePosition)({
            behavior: S,
            placementSequence: e,
            activatorElement: O,
            dropElement: I,
            host: L,
            placement: D,
            classNames: [
              "bloko-drop",
              ...x,
              y.component,
              "bloko-drop_active-enter",
              "bloko-drop_done-enter",
              (0, u.makeDropLayerClass)(c),
              ...u.FLEXIBLE_CLASS.split(" "),
              ...u.FULLSCREEN_ON_XS_CLASS.split(" "),
            ],
            arrowSize: S.arrowSize,
            arrow: B,
            useDynamic: true,
          });
          D = t.placement;
          (0, h.default)(I);
        });
        const A =
          L === document.body &&
          window?.ResizeObserver &&
          new window.ResizeObserver(() => {
            if (N) {
              Z();
            }
          });
        const R = {
          show() {
            if (!N) {
              N = true;
              I.classList.add("bloko-drop_active-enter");
              L.appendChild(I);
              Z();
              if (A) {
                A.observe(L);
              } else {
                window.addEventListener("resize", Z);
              }
              setTimeout(() => {
                I.classList.add("bloko-drop_done-enter");
                f();
              }, u.ANIMATION_TIMEOUT_MS);
              setTimeout(() => {
                I.classList.remove("bloko-drop_done-enter");
                I.classList.remove("bloko-drop_active-enter");
              }, u.ANIMATION_TIMEOUT_MS + u.ENTER_ANIMATION_MS);
            }
          },
          getContent: () => M,
          hide() {
            if (N) {
              _();
              L.removeChild(I);
              N = false;
              if (!A) {
                window.removeEventListener("resize", Z);
              }
              if (A) {
                A.unobserve(L);
              }
            }
          },
          toggle(e) {
            if (arguments.length === 0 ? !N : e) {
              R.show();
            } else {
              R.hide();
            }
          },
          setPosition(e, t = s) {
            R.hide();
            O = e;
            D = t;
          },
        };
        function j() {
          R.hide();
          P = true;
        }
        const $ = w.render({
          layer: (0, u.makeDropLayerClass)(c),
          cssClasses: x.join(" "),
          templateData: T,
          flexible: C ? u.FLEXIBLE_CLASS : "",
          dataQa: v,
          title: E,
        });
        const F = document.createElement("div");
        F.innerHTML = $;
        I = F.firstChild;
        if (T.showCloseButton) {
          a().make(r.Z, F.querySelector(".Bloko-Drop-BodyIconClose"), {
            IconComponent: n.Z,
            iconProps: {
              initial: T.icon ?? i.Z.Gray80,
              highlighted: i.Z.Gray60,
            },
          });
        }
        const W = F.querySelector(".Bloko-Drop-TitleIconClose");
        if (W) {
          a().make(r.Z, W, {
            IconComponent: l.Z,
            iconProps: {
              initial: T.icon ?? i.Z.Gray80,
              highlighted: i.Z.Gray60,
            },
          });
        }
        M = y.content ? I.querySelector(`.${y.content}`) : I;
        if (y.arrow) {
          B = I.querySelector(`.${y.arrow}`);
        }
        if (typeof k == "string") {
          M.innerHTML = k;
        } else if (k) {
          M.appendChild(k);
        }
        window.addEventListener("click", function (e) {
          if (N) {
            if (!e.target.closest) {
              if (m && P) {
                j();
              }
              P = true;
              return;
            }
            if (m && P && e.target.closest(`.${y.component}`) === null) {
              j();
            }
            if (e.target.closest(".Bloko-Drop-Close")) {
              j();
            }
            P = true;
          } else {
            P = true;
          }
        });
        if (m) {
          O.addEventListener("click", () => {
            P = false;
          });
        }
        return R;
      };
    },
    201962: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        calculateRectangle: () => v,
        getPlacementClass: () => m,
        getThemeClass: () => f,
        setInitialCSSMetrics: () => S,
        setupWidth: () => T,
        updateCSSMetrics: () => _,
        updatePosition: () => x,
      });
      var n = o(549155);
      var i = o(387501);
      var l = o.n(i);
      var r = o(200829);
      var s = o.n(r);
      var a = o(74730);
      var c = o.n(a);
      var d = o(665682);
      var b = o(570093);
      var u = o.n(b);
      var h = o(680394);
      var p = o.n(h);
      var k = o(836522);
      var g = o(518039);
      function m(e) {
        return k.Z[`bloko-drop_${e.split("-")[0]}`].split(" ");
      }
      function _(e, t) {
        if (e && t) {
          if (e.style.length > 0) {
            e.removeAttribute("style");
          }
          Object.keys(t).forEach((o) => {
            e.style.setProperty(
              o,
              d.RESERVED_CSS_VALUES.includes(`${t[o]}`)
                ? `${t[o]}`
                : `${t[o]}px`,
            );
          });
        }
      }
      function f(e) {
        return g.Z[`bloko-drop_theme-${e}`];
      }
      function v(e, t, o) {
        const n = e.top + o.top;
        const i = e.left + o.left;
        const l = n + t.height;
        return {
          top: n,
          right: i + t.width,
          bottom: l,
          left: i,
          width: t.width,
          height: t.height,
        };
      }
      function C(e) {
        let {
          behavior: t,
          placement: o,
          align: n,
          host: i,
          dropElement: r,
          elementMetrics: a,
          dropElementMetrics: b,
          viewportMetrics: h,
          elementOffset: k,
          arrowSize: g = 0,
        } = e;
        let m = {
          left: 0,
          top: 0,
        };
        if (i !== document.body) {
          const e = l().getRelativeMetrics(r);
          const t = l().getMetrics(r);
          m = {
            left: t.left - e.left,
            top: t.top - e.top,
          };
        }
        const _ = p()[o]({
          offset: t.placementOffset,
          elementMetrics: a,
          dropElementMetrics: b,
        });
        const { possibleToChange: f } = _;
        const C = {
          ..._.metrics,
          ...s()[f][n]({
            elementMetrics: a,
            alignToActivatorBorders: t.alignToActivatorBorders,
            dropElementMetrics: b,
          }),
        };
        const w = l().getScrollbarWidth();
        const x = {
          left: h.left + d.GUARD_SIZE,
          right: h.right - d.GUARD_SIZE,
          width: h.width - d.GUARD_SIZE * 2,
          height: h.height - d.GUARD_SIZE * 2,
          top: h.top + d.GUARD_SIZE,
          bottom: h.bottom - d.GUARD_SIZE,
        };
        const y = {
          ...h,
          width: h.width - w,
          right: h.right - w,
        };
        const S = l().checkIfRectangleInRectangle(v(C, b, k), y);
        const T = {
          left: k.left - m.left,
          top: k.top - m.top,
        };
        if (S.length === 0) {
          return {
            metrics: C,
            arrow:
              n === "center"
                ? undefined
                : c()[f][n]({
                    elementMetrics: a,
                    dropElementMetrics: v(C, b, T),
                    arrowSize: g,
                  }),
            success: true,
          };
        }
        if (
          (function (e, t) {
            return d.DIRECTION_MAPPING[t].every((t) => e.includes(t));
          })(S, f)
        ) {
          return {
            metrics: C,
            arrow: c()[f][n]({
              elementMetrics: a,
              dropElementMetrics: v(C, b, T),
              arrowSize: g,
            }),
            success: false,
          };
        }
        let E = u()[f]({
          metrics: v(C, b, k),
          viewport: x,
          elementMetrics: a,
        });
        if (!E.success) {
          E = u()[f]({
            metrics: v(C, b, k),
            viewport: y,
            elementMetrics: a,
          });
        }
        const L = {
          top: E.metrics.top - m.top,
          right: E.metrics.right,
          left: E.metrics.left - m.left,
          bottom: E.metrics.bottom,
          width: E.metrics.width,
          height: E.metrics.height,
        };
        return {
          metrics: L,
          arrow: c()[f][n]({
            elementMetrics: a,
            dropElementMetrics: L,
            arrowSize: g,
          }),
          success: E.success,
        };
      }
      function w(e) {
        if (e.align === "center") {
          return e.placement;
        } else {
          return `${e.placement}-${e.align}`;
        }
      }
      function x(e) {
        let {
          host: t,
          behavior: o,
          activatorElement: i,
          placement: r,
          dropElement: s,
          sizeBox: a,
          classNames: c,
          arrowSize: b,
          arrow: u,
          placementSequence: h,
        } = e;
        const p = (function (e) {
          let {
            placement: t,
            element: o,
            behavior: i,
            dropElement: r,
            sizeBox: s,
            host: a,
            arrowSize: c,
            placementSequence: d,
          } = e;
          const b = [...d];
          const u = b.indexOf(t);
          const h = b
            .slice(u)
            .concat(b.slice(0, u))
            .map((e) => {
              const [t, o = "center"] = e.split("-");
              return {
                placement: t,
                align: o,
              };
            });
          if (i.fullScreenOnXS && (0, n.getBreakpoint)() === n.Breakpoint.XS) {
            return {
              placement: w(h[0]),
              metrics: {},
              arrow: undefined,
            };
          }
          const p =
            a === document.body ? l().getMetrics(o) : l().getRelativeMetrics(o);
          const k = l().getMetrics(s || r);
          const g = l().getViewportMetrics();
          const m = l().getMetrics(o);
          const _ = {
            left: m.left - p.left,
            top: m.top - p.top,
          };
          const f = C({
            behavior: i,
            placement: h[0].placement,
            align: h[0].align,
            elementMetrics: p,
            dropElementMetrics: k,
            viewportMetrics: g,
            elementOffset: _,
            host: a,
            dropElement: r,
            arrowSize: c,
          });
          if (!f.success) {
            for (let e = 1; e < h.length; e++) {
              const t = C({
                behavior: i,
                placement: h[e].placement,
                align: h[e].align,
                elementMetrics: p,
                host: a,
                dropElement: r,
                dropElementMetrics: k,
                viewportMetrics: g,
                elementOffset: _,
                arrowSize: c,
              });
              if (t.success) {
                return {
                  placement: w(h[e]),
                  metrics: t.metrics,
                  arrow: t.arrow,
                };
              }
            }
          }
          return {
            placement: w(h[0]),
            metrics: f.metrics,
            arrow: f.arrow,
          };
        })({
          element: i,
          dropElement: s,
          sizeBox: a,
          placement: r,
          host: t,
          arrowSize: b,
          behavior: o,
          placementSequence: h,
        });
        _(s, p.metrics);
        if (u) {
          u.style.top = "";
          u.style.left = "";
          _(u, p.arrow);
        }
        [...s.classList].forEach((e) => {
          if (!c.includes(e)) {
            s.classList.remove(e);
          }
        });
        s.classList.add(...m(p.placement));
        if (o.fullScreenOnXS) {
          s.classList.add(...d.FULLSCREEN_ON_XS_CLASS.split(" "));
        }
        return {
          placement: p.placement,
        };
      }
      const y = -9999;
      function S(e) {
        _(e, {
          left: y,
          top: y,
        });
      }
      function T(e, t) {
        if (
          (0, n.getBreakpoint)() === n.Breakpoint.XS &&
          t !== document.body &&
          document.querySelector(".xs-friendly")
        ) {
          e.style.width = "";
          e.style.width = window.innerWidth - l().getScrollbarWidth() + "px";
        } else {
          e.style.width = "";
        }
      }
    },
    411303: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ANIMATION_TIMEOUT_MS: () => y,
        ARROW_SIZE: () => T,
        CLICKABLE_CLASS: () => p,
        DEBOUNCE_DELAY_MS: () => x,
        DIRECTION_MAPPING: () => f,
        DISTANCE: () => C,
        DropLayer: () => i.a,
        DropPlacement: () => a,
        ENTER_ANIMATION_MS: () => S,
        FLEXIBLE_CLASS: () => b,
        FULLSCREEN_ON_XS_CLASS: () => u,
        GUARD_SIZE: () => d,
        MIN_SIZE_TO_PLACE_DROP_AT_THE_START: () => g,
        OFFSET_TO_ARROW_X: () => m,
        OFFSET_TO_ARROW_Y: () => _,
        OPPOSITE_DIRECTIONS: () => v,
        PLACEMENT_DOWN_SEQUENCE: () => c,
        RESERVED_CSS_VALUES: () => k,
        STRETCH_ON_XS_CLASS: () => h,
        makeDropLayerClass: () => w,
      });
      var n = o(212938);
      var i = o.n(n);
      var l = o(387501);
      var r = o(836522);
      var s = o(518039);
      const a = {
        TopStart: l.Placement.TopStart,
        TopEnd: l.Placement.TopEnd,
        RightStart: l.Placement.RightStart,
        RightEnd: l.Placement.RightEnd,
        BottomStart: l.Placement.BottomStart,
        BottomEnd: l.Placement.BottomEnd,
        LeftStart: l.Placement.LeftStart,
        LeftEnd: l.Placement.LeftEnd,
      };
      const c = Object.values(a);
      const d = 15;
      const b = r.Z["bloko-drop_flexible"];
      const u = r.Z["bloko-drop_fullscreen-on-xs"];
      const h = s.Z["bloko-drop_stretch-on-xs"];
      const p = s.Z["bloko-drop_clickable"];
      const k = ["auto"];
      const g = 50;
      const m = 25;
      const _ = 21;
      const f = {
        x: ["left", "right"],
        y: ["top", "bottom"],
      };
      const v = [f.x, f.y];
      const C = 5;
      const w = (e) => s.Z[`bloko-drop_layer-${e}`];
      const x = 100;
      const y = 32;
      const S = 300;
      const T = 5;
    },
    63491: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(387501);
      var i = o.n(n);
      var l = o(665682);
      var r = o(183871);
      const s = {
        x(e) {
          let { metrics: t, viewport: o, elementMetrics: n } = e;
          let s = (0, r.getIntersectionX)(t, o);
          if (!s) {
            return {
              success: false,
              metrics: t,
            };
          }
          const { start: a, end: c } = s;
          const d = {
            ...t,
          };
          if (t.left !== a) {
            d.left = a;
            d.right = d.left + d.width;
          }
          if (t.right !== c) {
            d.right = c;
            d.left = d.right - d.width;
          }
          s = (0, r.getIntersectionX)(
            d,
            n,
            Math.min(l.OFFSET_TO_ARROW_X + l.GUARD_SIZE, n.width),
          );
          if (s) {
            return {
              success: i().isRectangleInRectangle(d, o),
              metrics: d,
            };
          } else {
            return {
              success: false,
              metrics: t,
            };
          }
        },
        y(e) {
          let { metrics: t, viewport: o, elementMetrics: n } = e;
          let s = (0, r.getIntersectionY)(t, o);
          if (!s) {
            return {
              success: false,
              metrics: t,
            };
          }
          const { start: a, end: c } = s;
          const d = {
            ...t,
          };
          if (t.top !== a) {
            d.top = a;
            d.bottom = d.top + d.height;
          }
          if (t.bottom !== c) {
            d.bottom = c;
            d.top = d.bottom - d.height;
          }
          s = (0, r.getIntersectionY)(
            d,
            n,
            Math.min(l.OFFSET_TO_ARROW_Y + l.GUARD_SIZE, n.height),
          );
          if (s) {
            return {
              success: i().isRectangleInRectangle(d, o),
              metrics: d,
            };
          } else {
            return {
              success: false,
              metrics: t,
            };
          }
        },
      };
    },
    929988: function (e, t, o) {
      "use strict";

      function n(e, t, o = 0) {
        const n = {
          start: 0,
          end: 0,
        };
        if (e.left > t.right - o || t.left > e.right - o) {
          return null;
        } else {
          if (e.left > t.left) {
            n.start = e.left;
          } else {
            n.start = t.left;
          }
          if (e.right > t.right) {
            n.end = t.right;
          } else {
            n.end = e.right;
          }
          return n;
        }
      }
      function i(e, t, o = 0) {
        const n = {
          start: 0,
          end: 0,
        };
        if (e.top > t.bottom - o || t.top > e.bottom - o) {
          return null;
        } else {
          if (e.top > t.top) {
            n.start = e.top;
          } else {
            n.start = t.top;
          }
          if (e.bottom > t.bottom) {
            n.end = t.bottom;
          } else {
            n.end = e.bottom;
          }
          return n;
        }
      }
      o.r(t);
      o.d(t, {
        getIntersectionX: () => n,
        getIntersectionY: () => i,
      });
    },
    733563: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ClickDown: () => r.a,
        ClickInfo: () => d.a,
        ClickMenu: () => g.a,
        Down: () => i.a,
        HoverTip: () => y.a,
        Info: () => a.a,
        InfoInline: () => u.a,
        Menu: () => p.a,
        MenuItem: () => _.a,
        Tip: () => v.a,
        TipContext: () => C.Context,
        TipProvider: () => w.a,
      });
      var n = o(713786);
      var i = o.n(n);
      var l = o(546754);
      var r = o.n(l);
      var s = o(517102);
      var a = o.n(s);
      var c = o(419773);
      var d = o.n(c);
      var b = o(30762);
      var u = o.n(b);
      var h = o(110622);
      var p = o.n(h);
      var k = o(115113);
      var g = o.n(k);
      var m = o(295479);
      var _ = o.n(m);
      var f = o(948038);
      var v = o.n(f);
      var C = o(941144);
      var w = o.n(C);
      var x = o(554537);
      var y = o.n(x);
    },
    650068: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = {
        top(e) {
          let { elementMetrics: t, dropElementMetrics: o, offset: n } = e;
          return {
            metrics: {
              top: t.top - o.height - n,
            },
            possibleToChange: "x",
          };
        },
        bottom(e) {
          let { elementMetrics: t, offset: o } = e;
          return {
            metrics: {
              top: t.bottom + o,
            },
            possibleToChange: "x",
          };
        },
        left(e) {
          let { elementMetrics: t, dropElementMetrics: o, offset: n } = e;
          return {
            metrics: {
              left: t.left - o.width - n,
            },
            possibleToChange: "y",
          };
        },
        right(e) {
          let { elementMetrics: t, offset: o } = e;
          return {
            metrics: {
              left: t.right + o,
            },
            possibleToChange: "y",
          };
        },
      };
    },
    766032: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
      });
      var n = o(385539);
      var i = o.n(n);
      var l = o(665682);
      const r = (e) => {
        i()(e, () => {
          requestAnimationFrame(() => {
            e.classList.add(l.CLICKABLE_CLASS);
          });
        });
      };
    },
    785428: function (e, t, o) {
      "use strict";

      o.r(t);
    },
    624590: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(394280);
      var i = o.n(n);
      const l = "bloko-external-link";
      var r = o(343856);
      const s = (e, t) => {
        let {
          children: o,
          onClick: n,
          target: i = "_blank",
          href: s,
          ...a
        } = e;
        return (0, r.jsx)("button", {
          className: l,
          ...a,
          ref: t,
          onClick: (e) => {
            if (n != null) {
              n(e);
            }
            window.open(s, i, "noopener");
          },
          children: o,
        });
      };
      const a = i().forwardRef(s);
    },
    254606: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => d,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(385539);
      var s = o.n(r);
      var a = o(428272);
      var c = o(343856);
      const d = (e) => {
        let {
          Element: t = "div",
          children: o,
          show: i = false,
          source: r,
          ...d
        } = e;
        const b = (0, n.useRef)(null);
        const [u, h] = (0, n.useState)(i);
        (0, n.useEffect)(() => {
          if (i) {
            h(true);
            if (u && b.current) {
              (e = b.current).classList.remove(a.Z["bloko-form-error_hidden"]);
              e.style.height = "auto";
              const t =
                e.clientHeight -
                parseInt(getComputedStyle(e).paddingBottom, 10) +
                "px";
              b.current.classList.add(a.Z["bloko-form-error_entering"]);
              b.current.style.height = "0";
              requestAnimationFrame(() => {
                if (b.current) {
                  b.current.style.height = t;
                }
              });
            }
          } else if (b.current) {
            b.current.classList.add(a.Z["bloko-form-error_exiting"]);
            b.current.style.height = "0";
            return s()(b.current, () => {
              h(false);
            });
          }
          var e;
        }, [i, u, o]);
        if (u) {
          return (0, c.jsx)(t, {
            ...d,
            className: l()(
              a.Z["bloko-form-error"],
              a.Z["bloko-form-error_hidden"],
            ),
            ref: b,
            source: r,
            children: o,
          });
        } else {
          return null;
        }
      };
    },
    42465: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(428272);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "div", ...o } = e;
        return (0, i.jsx)(t, {
          className: n.Z["bloko-form-hint"],
          ...o,
        });
      };
    },
    970992: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(428272);
      var r = o(343856);
      const s = (e) => {
        let {
          Element: t = "div",
          baseline: o = false,
          text: n = false,
          children: s,
          innerRef: a,
          ...c
        } = e;
        return (0, r.jsx)(t, {
          ...c,
          ref: a,
          className: i()({
            [l.Z["bloko-form-item-baseline"]]: o,
            [l.Z["bloko-form-item"]]: !o,
            [l.Z["bloko-form-item-text"]]: n,
          }),
          children: s,
        });
      };
    },
    985427: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(428272);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "div", children: o, ...l } = e;
        return (0, i.jsx)(t, {
          ...l,
          className: n.Z["bloko-form-item-group"],
          children: o,
        });
      };
    },
    967828: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        FormLegendScale: () => s,
        default: () => a,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(428272);
      var r = o(343856);
      let s;
      (function (e) {
        e.Small = "small";
        e.Large = "large";
      })((s ||= {}));
      const a = (e) => {
        let { Element: t = "div", children: o, scale: n, ...s } = e;
        return (0, r.jsx)(t, {
          ...s,
          className: i()(l.Z["bloko-form-legend"], {
            [l.Z[`bloko-form-legend_for-${n}`]]: n,
          }),
          children: o,
        });
      };
    },
    894069: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(428272);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "div", children: o, ...l } = e;
        return (0, i.jsx)(t, {
          ...l,
          className: n.Z["bloko-form-one-column"],
          children: o,
        });
      };
    },
    765323: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(428272);
      var i = o(343856);
      const l = (e) => {
        let { ...t } = e;
        return (0, i.jsx)("span", {
          ...t,
          className: n.Z["bloko-form-required"],
        });
      };
    },
    875506: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(428272);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "div", children: o, ...l } = e;
        return (0, i.jsx)(t, {
          ...l,
          className: n.Z["bloko-form-separator"],
          children: o,
        });
      };
    },
    317272: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(428272);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "div", children: o, ...l } = e;
        return (0, i.jsx)(t, {
          ...l,
          className: n.Z["bloko-form-spacer"],
          children: o,
        });
      };
    },
    898808: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        FormError: () => n.default,
        FormHint: () => i.default,
        FormItem: () => l.default,
        FormItemGroup: () => r.default,
        FormLegend: () => s.default,
        FormOneColumn: () => a.default,
        FormRequired: () => c.default,
        FormSeparator: () => d.default,
        FormSpacer: () => b.default,
      });
      var n = o(254606);
      var i = o(42465);
      var l = o(970992);
      var r = o(985427);
      var s = o(967828);
      var a = o(894069);
      var c = o(765323);
      var d = o(875506);
      var b = o(317272);
    },
    78458: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => v,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(155258);
      var r = o.n(l);
      var s = o(845807);
      var a = o.n(s);
      var c = o(764626);
      var d = o.n(c);
      var b = o(669406);
      var u = o.n(b);
      var h = o(182093);
      var p = o.n(h);
      var k = o(960300);
      var g = o.n(k);
      const m = p().android() || p().IEMobile();
      const _ = ".Bloko-FormattedNumericInput-Visible";
      const f = ".Bloko-FormattedNumericInput-Hidden";
      const v = a().build({
        defaults: {
          groupSeparator: "\u2009",
          groupSize: 3,
        },
        create: function (e, t) {
          const o = i()(e);
          const n = o.find(f);
          const l = o.find(_);
          if (m) {
            t.groupSeparator = "";
          }
          a().make(r(), l[0], t);
          l.on("input change", () => {
            n.val(
              u().format(l.val(), {
                groupSeparator: "",
                decimalMark: ".",
                decimalLength: t.decimalLength,
                allowNegative: t.allowNegative,
              }),
            );
            n[0].dispatchEvent(d()("change"));
          });
          if (t.maxLength) {
            const e = g()(t.maxLength, t.groupSeparator, t.groupSize, m);
            l.attr("maxLength", e);
          }
        },
        componentName: "bloko/blocks/formattedNumericInput",
      });
    },
    494331: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = (e, t, o, n) => {
        const i = parseInt(`${e}`, 10);
        if (i) {
          if (n) {
            return i;
          } else {
            return Math.floor(i + (i - t.length) / o);
          }
        }
      };
    },
    177664: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => v,
      });
      var n = o(394280);
      var i = o(424487);
      var l = o.n(i);
      var r = o(606838);
      var s = o.n(r);
      var a = o(669406);
      var c = o.n(a);
      var d = o(857726);
      var b = o.n(d);
      var u = o(182093);
      var h = o.n(u);
      var p = o(638040);
      var k = o.n(p);
      var g = o(960300);
      var m = o.n(g);
      var _ = o(343856);
      const f =
        typeof window != "undefined" && (h().android() || h().IEMobile());
      const v = (0, n.forwardRef)((e, t) => {
        let {
          value: o,
          onChange: i,
          groupSeparator: r = "\u2009",
          groupSize: a = 3,
          decimalMark: d = ",",
          decimalLength: u,
          allowNegative: h,
          ...p
        } = e;
        const g = (0, n.useCallback)(
          (e) =>
            c().format(e, {
              groupSeparator: "",
              decimalMark: ".",
              decimalLength: u,
              allowNegative: h,
            }),
          [h, u],
        );
        const v = (0, n.useCallback)(
          (e) => {
            const t = String(e);
            let o = c().format(t, {
              groupSeparator: f ? "" : r,
              groupSize: a,
              decimalMark: d,
              allowNegative: h,
              decimalLength: u,
            });
            const n = t.charAt(t.length - 1);
            if (n === d) {
              o += n;
            }
            return o;
          },
          [r, a, d, h, u],
        );
        const C = (0, n.useCallback)(
          (e, t) => {
            let n = k().getCaretPosition(e) + s()(e.value, t, r);
            if (v(o) === t) {
              n -= 1;
            }
            b()(() => k().setCaretPosition(e, n))();
          },
          [o, v, r],
        );
        const w = (0, n.useCallback)(
          (e, t) => {
            let { element: o } = t;
            if (!f) {
              C(o, v(e));
            }
            const n = e.charAt(e.length - 1);
            const l = g(e) + (n === d ? n : "");
            i(l, {
              element: o,
            });
          },
          [d, C, v, g, i],
        );
        p.maxLength &&= m()(p.maxLength, r, a, f);
        return (0, _.jsx)(l(), {
          ref: t,
          value: v(o),
          decimalMark: d,
          decimalLength: u,
          onChange: w,
          groupSeparator: r,
          allowNegative: h,
          ...p,
        });
      });
    },
    493312: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => E,
      });
      var n = o(882177);
      var i = o.n(n);
      const l = "bloko-gap";
      const r = "bloko-gap_top";
      const s = "bloko-gap_m-top";
      const a = "bloko-gap_right";
      const c = "bloko-gap_m-right";
      const d = "bloko-gap_bottom";
      const b = "bloko-gap_m-bottom";
      const u = "bloko-gap_left";
      const h = "bloko-gap_m-left";
      const p = "bloko-gap_s-top";
      const k = "bloko-gap_s-right";
      const g = "bloko-gap_s-bottom";
      const m = "bloko-gap_s-left";
      const _ = "bloko-gap_xs-top";
      const f = "bloko-gap_xs-right";
      const v = "bloko-gap_xs-bottom";
      const C = "bloko-gap_xs-left";
      const w = "bloko-gap_l-top";
      const x = "bloko-gap_l-right";
      const y = "bloko-gap_l-bottom";
      const S = "bloko-gap_l-left";
      var T = o(343856);
      const E = (e) => {
        let {
          top: t,
          right: o,
          left: n,
          bottom: E,
          mTop: L,
          mRight: I,
          mLeft: B,
          mBottom: M,
          sTop: N,
          sRight: P,
          sBottom: O,
          sLeft: D,
          xsTop: Z,
          xsRight: A,
          xsLeft: R,
          xsBottom: j,
          lTop: $,
          lRight: F,
          lBottom: H,
          lLeft: W,
          Element: q = "div",
          ...V
        } = e;
        return (0, T.jsx)(q, {
          className: i()(l, {
            [r]: t,
            [a]: o,
            [u]: n,
            [d]: E,
            [p]: N,
            [k]: P,
            [m]: D,
            [g]: O,
            [s]: L,
            [c]: I,
            [h]: B,
            [b]: M,
            [_]: Z,
            [f]: A,
            [C]: R,
            [v]: j,
            [w]: $,
            [x]: F,
            [S]: W,
            [y]: H,
          }),
          ...V,
        });
      };
    },
    972869: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      const r = {
        "bloko-h-spacing-container": "bloko-h-spacing-container",
        "bloko-h-spacing-container_base-0": "bloko-h-spacing-container_base-0",
        "bloko-h-spacing-container_base-1": "bloko-h-spacing-container_base-1",
        "bloko-h-spacing-container_base-2": "bloko-h-spacing-container_base-2",
        "bloko-h-spacing-container_base-3": "bloko-h-spacing-container_base-3",
        "bloko-h-spacing-container_base-4": "bloko-h-spacing-container_base-4",
        "bloko-h-spacing-container_base-5": "bloko-h-spacing-container_base-5",
        "bloko-h-spacing-container_base-6": "bloko-h-spacing-container_base-6",
        "bloko-h-spacing-container_base-7": "bloko-h-spacing-container_base-7",
        "bloko-h-spacing-container_base-8": "bloko-h-spacing-container_base-8",
        "bloko-h-spacing-container_base-9": "bloko-h-spacing-container_base-9",
        "bloko-h-spacing-container_base-10":
          "bloko-h-spacing-container_base-10",
        "bloko-h-spacing-container_base-11":
          "bloko-h-spacing-container_base-11",
        "bloko-h-spacing-container_base-12":
          "bloko-h-spacing-container_base-12",
        "bloko-h-spacing-container_base-13":
          "bloko-h-spacing-container_base-13",
        "bloko-h-spacing-container_base-14":
          "bloko-h-spacing-container_base-14",
      };
      var s = o(343856);
      const a = (0, n.forwardRef)((e, t) => {
        let { base: o = 0, children: n } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: l()(
            r["bloko-h-spacing-container"],
            r[`bloko-h-spacing-container_base-${o}`],
          ),
          children: n,
        });
      });
    },
    830914: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        spacingMultipliers: () => a,
        default: () => c,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      const r = {
        "bloko-h-spacing": "bloko-h-spacing",
        "bloko-h-spacing_base-0": "bloko-h-spacing_base-0",
        "bloko-highlight-indents": "bloko-highlight-indents",
        "bloko-h-spacing_base-1": "bloko-h-spacing_base-1",
        "bloko-h-spacing_base-2": "bloko-h-spacing_base-2",
        "bloko-h-spacing_base-3": "bloko-h-spacing_base-3",
        "bloko-h-spacing_base-4": "bloko-h-spacing_base-4",
        "bloko-h-spacing_base-5": "bloko-h-spacing_base-5",
        "bloko-h-spacing_base-6": "bloko-h-spacing_base-6",
        "bloko-h-spacing_base-7": "bloko-h-spacing_base-7",
        "bloko-h-spacing_base-8": "bloko-h-spacing_base-8",
        "bloko-h-spacing_base-9": "bloko-h-spacing_base-9",
        "bloko-h-spacing_base-10": "bloko-h-spacing_base-10",
        "bloko-h-spacing_base-11": "bloko-h-spacing_base-11",
        "bloko-h-spacing_base-12": "bloko-h-spacing_base-12",
        "bloko-h-spacing_base-13": "bloko-h-spacing_base-13",
        "bloko-h-spacing_base-14": "bloko-h-spacing_base-14",
      };
      var s = o(343856);
      const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      const c = (0, n.forwardRef)((e, t) => {
        let { base: o, source: n } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: l()(r["bloko-h-spacing"], r[`bloko-h-spacing_base-${o}`]),
          source: n,
        });
      });
    },
    932370: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(660670);
      var i = o(343856);
      const l = (e) => {
        let { children: t, ...o } = e;
        return (0, i.jsx)("div", {
          ...o,
          className: n.Z["bloko-header-subheader"],
          children: t,
        });
      };
    },
    581021: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        H1: () => b,
        H1Promo: () => f,
        H1Section: () => k,
        H2: () => u,
        H2Promo: () => v,
        H2Section: () => g,
        H3: () => h,
        H3Promo: () => C,
        H3Section: () => m,
        H4: () => p,
        H4Promo: () => w,
        H4Section: () => _,
        SubHeader: () => s.a,
        default: () => x,
      });
      var n;
      var i = o(882177);
      var l = o.n(i);
      var r = o(219613);
      var s = o.n(r);
      var a = o(660670);
      var c = o(343856);
      (function (e) {
        e.Standard = "standard";
        e.Promo = "promo";
        e.Section = "section";
      })((n ||= {}));
      const d = (e) => {
        let {
          children: t,
          level: o = 1,
          type: i = n.Standard,
          lite: r,
          Element: s,
          source: d,
          ...b
        } = e;
        const u = s || `h${o}`;
        const h = `bloko-header-${i !== n.Standard ? `${i}-` : ""}${o}`;
        return (0, c.jsx)(u, {
          "data-qa": `bloko-header-${o}`,
          ...b,
          className: l()(a.Z[h], {
            [a.Z[`${h}_lite`]]: r,
          }),
          source: d,
          children: t,
        });
      };
      const b = (e) =>
        (0, c.jsx)(d, {
          ...e,
        });
      const u = (e) =>
        (0, c.jsx)(d, {
          ...e,
          level: 2,
        });
      const h = (e) =>
        (0, c.jsx)(d, {
          ...e,
          level: 3,
        });
      const p = (e) =>
        (0, c.jsx)(d, {
          ...e,
          level: 4,
        });
      const k = (e) =>
        (0, c.jsx)(d, {
          ...e,
          type: n.Section,
        });
      const g = (e) =>
        (0, c.jsx)(d, {
          ...e,
          type: n.Section,
          level: 2,
        });
      const m = (e) =>
        (0, c.jsx)(d, {
          ...e,
          type: n.Section,
          level: 3,
        });
      const _ = (e) =>
        (0, c.jsx)(d, {
          ...e,
          type: n.Section,
          level: 4,
        });
      const f = (e) =>
        (0, c.jsx)(d, {
          ...e,
          type: n.Promo,
        });
      const v = (e) =>
        (0, c.jsx)(d, {
          ...e,
          type: n.Promo,
          level: 2,
        });
      const C = (e) =>
        (0, c.jsx)(d, {
          ...e,
          type: n.Promo,
          level: 3,
        });
      const w = (e) =>
        (0, c.jsx)(d, {
          ...e,
          type: n.Promo,
          level: 4,
        });
      const x = d;
    },
    804203: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => s,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(219187);
      var r = o(343856);
      const s = (e) => {
        let { stretched: t, ...o } = e;
        return (0, r.jsx)("span", {
          className: i()(l.Z["bloko-icon-dynamic"], {
            [l.Z["bloko-icon-dynamic_full-width"]]: t,
          }),
          ...o,
        });
      };
    },
    806537: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => a,
      });
      var n = o(394280);
      var i = o(563457);
      var l = o(219187);
      var r = o(343856);
      const s = (e) => {
        let {
          Element: t = "button",
          disabled: o = false,
          children: n,
          innerRef: s,
          source: a,
          ...c
        } = e;
        const d = {};
        if (t === "button" || t === "input") {
          d.type = i.ButtonType.Button;
        }
        if (s) {
          d.ref = s;
        }
        return (0, r.jsx)(t, {
          ...d,
          ...c,
          className: l.Z["bloko-icon-link"],
          disabled: o,
          source: a,
          children: n,
        });
      };
      const a = (0, n.memo)(s);
    },
    607621: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => s,
      });
      var n = o(620745);
      var i = o(845807);
      var l = o.n(i);
      var r = o(343856);
      const s = l().build({
        create(e, t) {
          let { Element: o, IconComponent: i, iconProps: l } = t;
          const s = document.createElement(o ?? "span");
          if (!o) {
            s.classList.add("bloko-icon-react-root");
          }
          e.appendChild(s);
          const a = (0, n.createRoot)(s);
          a.render(
            (0, r.jsx)(i, {
              ...l,
            }),
          );
          return {
            change: (e) => {
              a.render(
                (0, r.jsx)(i, {
                  ...e,
                }),
              );
            },
            destroy: () => {
              a.unmount();
              s.remove();
            },
          };
        },
        componentName: "blocks/icon/IconReactRenderer",
      });
    },
    649936: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(219187);
      var i = o(343856);
      const l = (e) => {
        let { children: t, innerRef: o, ...l } = e;
        return (0, i.jsx)("span", {
          className: n.Z["bloko-icon-vertical-alignment"],
          ref: o,
          ...l,
          children: t,
        });
      };
    },
    585614: function (e, t, o) {
      "use strict";

      var n;
      o.d(t, {
        Z: () => i,
      });
      (function (e) {
        e.White = "white";
        e.Black = "black";
        e.SpecialRedBranded = "special-red-branded";
        e.SpecialBlackJack = "special-black-jack";
        e.Gray10 = "gray-10";
        e.Gray20 = "gray-20";
        e.Gray30 = "gray-30";
        e.Gray40 = "gray-40";
        e.Gray50 = "gray-50";
        e.Gray60 = "gray-60";
        e.Gray70 = "gray-70";
        e.Gray80 = "gray-80";
        e.Red10 = "red-10";
        e.Red20 = "red-20";
        e.Red30 = "red-30";
        e.Red40 = "red-40";
        e.Red50 = "red-50";
        e.Red60 = "red-60";
        e.Red70 = "red-70";
        e.Red80 = "red-80";
        e.Yellow10 = "yellow-10";
        e.Yellow20 = "yellow-20";
        e.Yellow30 = "yellow-30";
        e.Yellow40 = "yellow-40";
        e.Yellow50 = "yellow-50";
        e.Yellow60 = "yellow-60";
        e.Yellow70 = "yellow-70";
        e.Yellow80 = "yellow-80";
        e.Orange10 = "orange-10";
        e.Orange20 = "orange-20";
        e.Orange30 = "orange-30";
        e.Orange40 = "orange-40";
        e.Orange50 = "orange-50";
        e.Orange60 = "orange-60";
        e.Orange70 = "orange-70";
        e.Orange80 = "orange-80";
        e.Blue10 = "blue-10";
        e.Blue20 = "blue-20";
        e.Blue30 = "blue-30";
        e.Blue40 = "blue-40";
        e.Blue50 = "blue-50";
        e.Blue60 = "blue-60";
        e.Blue70 = "blue-70";
        e.Blue80 = "blue-80";
        e.Violet10 = "violet-10";
        e.Violet20 = "violet-20";
        e.Violet30 = "violet-30";
        e.Violet40 = "violet-40";
        e.Violet50 = "violet-50";
        e.Violet60 = "violet-60";
        e.Violet70 = "violet-70";
        e.Violet80 = "violet-80";
        e.Green10 = "green-10";
        e.Green20 = "green-20";
        e.Green30 = "green-30";
        e.Green40 = "green-40";
        e.Green50 = "green-50";
        e.Green60 = "green-60";
        e.Green70 = "green-70";
        e.Green80 = "green-80";
      })((n ||= {}));
      const i = n;
    },
    120710: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => s,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(219187);
      var r = o(343856);
      const s = (e, t) => (o) => {
        let { initial: n, highlighted: s, ...a } = o;
        return (0, r.jsx)(e, {
          ...a,
          className: i()(l.Z["bloko-icon"], {
            [l.Z["bloko-icon_loader"]]: t === "Loader",
            [l.Z[`bloko-icon_initial-${n}`]]: !!n,
            [l.Z[`bloko-icon_highlighted-${s}`]]: !!s,
          }),
        });
      };
    },
    655318: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M15.3333 2.66668V6.66668M15.3333 6.66668H11.3333M15.3333 6.66668L12.24 3.76001C11.5235 3.04315 10.637 2.51948 9.66342 2.23786C8.6898 1.95624 7.6607 1.92584 6.67215 2.14952C5.6836 2.37319 4.76783 2.84363 4.01027 3.51696C3.25271 4.19028 2.67807 5.04453 2.33996 6.00001M0.666626 13.3333V9.33334M0.666626 9.33334H4.66663M0.666626 9.33334L3.75996 12.24C4.47646 12.9569 5.36287 13.4805 6.3365 13.7622C7.31012 14.0438 8.33922 14.0742 9.32777 13.8505C10.3163 13.6268 11.2321 13.1564 11.9896 12.4831C12.7472 11.8097 13.3218 10.9555 13.66 10",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Arrow",
      );
    },
    165654: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M3.3335 7.99998H12.6668M12.6668 7.99998L8.00016 3.33331M12.6668 7.99998L8.00016 12.6666",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Arrow",
      );
    },
    370342: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M14 6L14 2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.0799 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85318 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5746 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4802 12.6667 11.9201 12.6667 10.8V9.33333",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Arrow",
      );
    },
    219247: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M3.33337 8H12.6667M3.33337 4H12.6667M3.33337 12H12.6667",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Bars",
      );
    },
    371410: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M14 6.66665H2M10.6667 1.33331V3.99998M5.33333 1.33331V3.99998M5.2 14.6666H10.8C11.9201 14.6666 12.4802 14.6666 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5746C14 13.1468 14 12.5868 14 11.4666V5.86665C14 4.74654 14 4.18649 13.782 3.75867C13.5903 3.38234 13.2843 3.07638 12.908 2.88463C12.4802 2.66665 11.9201 2.66665 10.8 2.66665H5.2C4.0799 2.66665 3.51984 2.66665 3.09202 2.88463C2.71569 3.07638 2.40973 3.38234 2.21799 3.75867C2 4.18649 2 4.74654 2 5.86665V11.4666C2 12.5868 2 13.1468 2.21799 13.5746C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6666 4.0799 14.6666 5.2 14.6666Z",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Calendar",
      );
    },
    860564: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M20 6L10 16L5 11",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Checkmark",
      );
    },
    261471: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M13.3333 4L6.66659 10.6667L3.33325 7.33333",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Checkmark",
      );
    },
    7367: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M12 6L8 10L4 6",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Chevron",
      );
    },
    955624: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M10 12L6 8L10 4",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Chevron",
      );
    },
    191312: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M6 12L10 8L6 4",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Chevron",
      );
    },
    898469: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M12 10L8 6L4 10",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Chevron",
      );
    },
    728813: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97018 4.3867 9.71999L10.0467 4.06665",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Clip",
      );
    },
    561539: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M18 6L6 18M6 6L18 18",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Cross",
      );
    },
    487153: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M12 4L4 12M4 4L12 12",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Cross",
      );
    },
    860129: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsxs)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M8.00008 8.66668C8.36827 8.66668 8.66675 8.3682 8.66675 8.00001C8.66675 7.63182 8.36827 7.33334 8.00008 7.33334C7.63189 7.33334 7.33341 7.63182 7.33341 8.00001C7.33341 8.3682 7.63189 8.66668 8.00008 8.66668Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M12.6667 8.66668C13.0349 8.66668 13.3334 8.3682 13.3334 8.00001C13.3334 7.63182 13.0349 7.33334 12.6667 7.33334C12.2986 7.33334 12.0001 7.63182 12.0001 8.00001C12.0001 8.3682 12.2986 8.66668 12.6667 8.66668Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M3.33341 8.66668C3.7016 8.66668 4.00008 8.3682 4.00008 8.00001C4.00008 7.63182 3.7016 7.33334 3.33341 7.33334C2.96522 7.33334 2.66675 7.63182 2.66675 8.00001C2.66675 8.3682 2.96522 8.66668 3.33341 8.66668Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        "Ellipsis",
      );
    },
    820795: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsxs)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M8.66659 7.99992C8.66659 7.63173 8.36811 7.33325 7.99992 7.33325C7.63173 7.33325 7.33325 7.63173 7.33325 7.99992C7.33325 8.36811 7.63173 8.66659 7.99992 8.66659C8.36811 8.66659 8.66659 8.36811 8.66659 7.99992Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M8.66659 3.33325C8.66659 2.96506 8.36811 2.66658 7.99992 2.66658C7.63173 2.66658 7.33325 2.96506 7.33325 3.33325C7.33325 3.70144 7.63173 3.99992 7.99992 3.99992C8.36811 3.99992 8.66659 3.70144 8.66659 3.33325Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M8.66659 12.6666C8.66659 12.2984 8.36811 11.9999 7.99992 11.9999C7.63173 11.9999 7.33325 12.2984 7.33325 12.6666C7.33325 13.0348 7.63173 13.3333 7.99992 13.3333C8.36811 13.3333 8.66659 13.0348 8.66659 12.6666Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        "Ellipsis",
      );
    },
    9380: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsxs)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M0.666656 7.99999C0.666656 7.99999 3.33332 2.66666 7.99999 2.66666C12.6667 2.66666 15.3333 7.99999 15.3333 7.99999C15.3333 7.99999 12.6667 13.3333 7.99999 13.3333C3.33332 13.3333 0.666656 7.99999 0.666656 7.99999Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M7.99999 9.99999C9.10456 9.99999 9.99999 9.10456 9.99999 7.99999C9.99999 6.89542 9.10456 5.99999 7.99999 5.99999C6.89542 5.99999 5.99999 6.89542 5.99999 7.99999C5.99999 9.10456 6.89542 9.99999 7.99999 9.99999Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        "Eye",
      );
    },
    876270: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("g", {
              children: (0, i.jsx)("path", {
                d: "M11.96 11.96C10.8204 12.8287 9.43273 13.3099 7.99999 13.3333C3.33332 13.3333 0.666656 7.99999 0.666656 7.99999C1.49592 6.45459 2.64608 5.10439 4.03999 4.03999M6.59999 2.82666C7.05888 2.71924 7.5287 2.66555 7.99999 2.66666C12.6667 2.66666 15.3333 7.99999 15.3333 7.99999C14.9286 8.75706 14.446 9.46981 13.8933 10.1267M9.41332 9.41332C9.23022 9.60982 9.00942 9.76743 8.76409 9.87674C8.51876 9.98605 8.25392 10.0448 7.98538 10.0496C7.71684 10.0543 7.4501 10.0049 7.20106 9.90432C6.95203 9.80373 6.7258 9.65401 6.53589 9.46409C6.34597 9.27418 6.19625 9.04795 6.09566 8.79892C5.99507 8.54988 5.94567 8.28314 5.95041 8.0146C5.95515 7.74606 6.01393 7.48122 6.12324 7.23589C6.23255 6.99056 6.39016 6.76976 6.58666 6.58666M0.666656 0.666656L15.3333 15.3333",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          }),
        "Eye",
      );
    },
    317177: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
            }),
          }),
        "Loader",
      );
    },
    572005: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M1 8.33334L13.6667 2.33334L7.66667 15L6.33333 9.66668L1 8.33334Z",
              fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Location",
      );
    },
    557883: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Lupa",
      );
    },
    390713: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("g", {
              children: (0, i.jsx)("path", {
                d: "M7.33331 2.66669H4.53331C3.41321 2.66669 2.85316 2.66669 2.42533 2.88467C2.04901 3.07642 1.74305 3.38238 1.5513 3.75871C1.33331 4.18653 1.33331 4.74658 1.33331 5.86669V11.4667C1.33331 12.5868 1.33331 13.1468 1.5513 13.5747C1.74305 13.951 2.04901 14.257 2.42533 14.4487C2.85316 14.6667 3.41321 14.6667 4.53331 14.6667H10.1333C11.2534 14.6667 11.8135 14.6667 12.2413 14.4487C12.6176 14.257 12.9236 13.951 13.1153 13.5747C13.3333 13.1468 13.3333 12.5868 13.3333 11.4667V8.66669M5.3333 10.6667H6.44966C6.77578 10.6667 6.93884 10.6667 7.09229 10.6298C7.22834 10.5972 7.3584 10.5433 7.47769 10.4702C7.61225 10.3878 7.72755 10.2724 7.95815 10.0418L14.3333 3.66669C14.8856 3.1144 14.8856 2.21897 14.3333 1.66669C13.781 1.1144 12.8856 1.1144 12.3333 1.66668L5.95814 8.04185C5.72753 8.27245 5.61223 8.38775 5.52978 8.52231C5.45667 8.6416 5.4028 8.77166 5.37014 8.90771C5.3333 9.06116 5.3333 9.22422 5.3333 9.55034V10.6667Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          }),
        "Pen",
      );
    },
    389057: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M8.00016 3.33334V12.6667M3.3335 8.00001H12.6668",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Plus",
      );
    },
    749950: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("g", {
              children: (0, i.jsx)("path", {
                d: "M4.00016 6.00001V1.33334H12.0002V6.00001M4.00016 12H2.66683C2.31321 12 1.97407 11.8595 1.72402 11.6095C1.47397 11.3594 1.3335 11.0203 1.3335 10.6667V7.33334C1.3335 6.97972 1.47397 6.64058 1.72402 6.39053C1.97407 6.14049 2.31321 6.00001 2.66683 6.00001H13.3335C13.6871 6.00001 14.0263 6.14049 14.2763 6.39053C14.5264 6.64058 14.6668 6.97972 14.6668 7.33334V10.6667C14.6668 11.0203 14.5264 11.3594 14.2763 11.6095C14.0263 11.8595 13.6871 12 13.3335 12H12.0002M4.00016 9.33334H12.0002V14.6667H4.00016V9.33334Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          }),
        "Printer",
      );
    },
    988940: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("g", {
              children: (0, i.jsx)("path", {
                d: "M6.05992 6.00001C6.21665 5.55446 6.52602 5.17875 6.93322 4.93943C7.34042 4.70012 7.81918 4.61264 8.2847 4.69248C8.75022 4.77233 9.17246 5.01436 9.47664 5.3757C9.78081 5.73703 9.94729 6.19436 9.94658 6.66668C9.94658 8.00001 7.94658 8.66668 7.94658 8.66668M7.99992 11.3333H8.00659M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 1.33333,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          }),
        "Question",
      );
    },
    456500: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M10.6667 4.00001V3.46668C10.6667 2.71994 10.6667 2.34657 10.5213 2.06136C10.3935 1.81047 10.1895 1.6065 9.93865 1.47867C9.65344 1.33334 9.28007 1.33334 8.53333 1.33334H7.46667C6.71993 1.33334 6.34656 1.33334 6.06135 1.47867C5.81046 1.6065 5.60649 1.81047 5.47866 2.06136C5.33333 2.34657 5.33333 2.71994 5.33333 3.46668V4.00001M6.66667 7.66668V11M9.33333 7.66668V11M2 4.00001H14M12.6667 4.00001V11.4667C12.6667 12.5868 12.6667 13.1468 12.4487 13.5747C12.2569 13.951 11.951 14.2569 11.5746 14.4487C11.1468 14.6667 10.5868 14.6667 9.46667 14.6667H6.53333C5.41323 14.6667 4.85318 14.6667 4.42535 14.4487C4.04903 14.2569 3.74307 13.951 3.55132 13.5747C3.33333 13.1468 3.33333 12.5868 3.33333 11.4667V4.00001",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Trash",
      );
    },
    773315: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.8973 7.71C12.5119 8.14202 12.2021 8.6348 11.9805 9.168C12.0055 8.90902 11.9341 8.64993 11.7799 8.43943C11.6095 8.20737 11.3534 8.05142 11.0676 8.00551C10.7817 7.9596 10.4891 8.02745 10.2534 8.19429C10.137 8.27651 10.0381 8.38077 9.96248 8.50105C9.88688 8.62133 9.83606 8.75526 9.81294 8.8951C9.78983 9.03495 9.79488 9.17794 9.8278 9.31584C9.86072 9.45374 9.92086 9.58382 10.0048 9.69857C10.1751 9.93082 10.4311 10.0869 10.717 10.1328C11.003 10.1788 11.2957 10.1108 11.5312 9.94372C11.6411 9.86572 11.731 9.77057 11.8019 9.666C11.6098 10.2988 11.542 10.9622 11.6022 11.6203L11.7708 13.4289L10.0783 12.7071C9.4169 12.4241 8.70397 12.2785 7.98357 12.2794C7.26443 12.2794 6.56519 12.4209 5.90357 12.7007L4.2093 13.4177L4.38313 11.6091C4.44195 11.0006 4.38832 10.392 4.23395 9.80914C4.41895 9.98248 4.65897 10.0867 4.91295 10.1041C5.16694 10.1214 5.41912 10.0508 5.62638 9.90429C5.74288 9.8221 5.8418 9.71786 5.91743 9.59758C5.99306 9.4773 6.0439 9.34336 6.06702 9.2035C6.09014 9.06364 6.08507 8.92063 6.05212 8.78272C6.01917 8.64481 5.95898 8.51473 5.87503 8.4C5.70459 8.16794 5.44857 8.01199 5.16269 7.96608C4.87681 7.92017 4.5842 7.98802 4.34854 8.15486C4.22478 8.24242 4.12103 8.35485 4.04407 8.48481C3.9671 8.61478 3.91863 8.75937 3.90184 8.90914C3.69309 8.46902 3.42276 8.06028 3.09881 7.695L1.88368 6.32871L3.68259 5.93314C4.16778 5.826 4.63049 5.65114 5.06032 5.41886C5.03033 5.56412 5.03118 5.71397 5.06282 5.85889C5.09446 6.0038 5.1562 6.1406 5.24411 6.26057C5.41434 6.49288 5.67034 6.64907 5.9563 6.69507C6.24225 6.74107 6.53496 6.67316 6.77059 6.50614C6.88701 6.42399 6.98586 6.31982 7.06145 6.19963C7.13705 6.07943 7.18789 5.9456 7.21104 5.80584C7.2342 5.66608 7.22921 5.52316 7.19637 5.38532C7.16352 5.24748 7.10347 5.11744 7.01968 5.00272C6.92849 4.87803 6.8115 4.77407 6.67652 4.69779C6.54154 4.62152 6.39168 4.57469 6.23697 4.56043C6.5568 4.25059 6.83511 3.9013 7.06508 3.52114L8.00778 1.95986L8.94616 3.52414C9.17968 3.91157 9.46076 4.26471 9.78292 4.57671C9.55132 4.5742 9.32492 4.64475 9.13643 4.77814C9.01991 4.8603 8.92096 4.96451 8.84528 5.08476C8.7696 5.20501 8.71869 5.33893 8.69549 5.47877C8.6723 5.61862 8.67727 5.76164 8.71013 5.89957C8.74298 6.0375 8.80307 6.16763 8.88692 6.28243C9.05736 6.51449 9.31338 6.67044 9.59926 6.71635C9.88514 6.76226 10.1777 6.69441 10.4134 6.52757C10.5946 6.39947 10.7315 6.21918 10.8056 6.01123C10.8798 5.80327 10.8874 5.57773 10.8277 5.36529C11.2891 5.631 11.792 5.82814 12.3196 5.94643L14.1185 6.348L12.899 7.71086L12.8973 7.71ZM16 5.73857L13.6476 5.214C12.7343 5.00916 11.8725 4.62273 11.1143 4.07811C10.3561 3.53349 9.71737 2.84202 9.23676 2.04557L8.00865 0L6.77622 2.04171C6.29304 2.83683 5.65201 3.52645 4.89197 4.06879C4.13193 4.61114 3.2687 4.99491 2.35459 5.19686L0 5.71457L1.58962 7.50171C2.20654 8.19636 2.67374 9.00862 2.96256 9.88863C3.25138 10.7686 3.35572 11.6979 3.26919 12.6193L3.0413 14.985L5.25708 14.0473C6.11661 13.6825 7.04207 13.495 7.97708 13.4961C8.92541 13.4961 9.84692 13.6847 10.7165 14.0554L12.9297 15L12.7092 12.6343C12.6253 11.7124 12.7325 10.7833 13.024 9.90395C13.3155 9.02459 13.7852 8.21354 14.4043 7.52057L16 5.73857ZM7.29297 10.2926C7.17648 10.3748 7.07757 10.479 7.00193 10.5993C6.92629 10.7195 6.87543 10.8534 6.85227 10.9933C6.82912 11.1331 6.83413 11.2761 6.86702 11.4141C6.8999 11.552 6.96002 11.6821 7.04389 11.7969C7.21431 12.0287 7.47016 12.1845 7.75584 12.2304C8.04151 12.2763 8.33392 12.2086 8.56951 12.042C8.68603 11.9598 8.78499 11.8556 8.86067 11.7354C8.93635 11.6151 8.98725 11.4812 9.01045 11.3414C9.03365 11.2015 9.02867 11.0585 8.99582 10.9206C8.96297 10.7826 8.90288 10.6525 8.81903 10.5377C8.64859 10.3057 8.39257 10.1497 8.10669 10.1038C7.82081 10.0579 7.52863 10.1257 7.29297 10.2926Z",
              fill: "#F8C632",
            }),
          }),
        "Hr",
      );
    },
    795742: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsxs)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M8.91783 2.98095C9.50217 2.88148 10.0992 2.69005 10.7079 2.41239L10.716 2.40868L10.724 2.40469C10.9032 2.31508 11.0278 2.24646 11.3725 2.03548C12.017 1.6439 12.2597 1.5625 12.5634 1.5625C13.1586 1.5625 13.6991 1.79676 14.1793 2.26296L14.2046 2.28832C14.6716 2.76921 14.9051 3.30486 14.9051 3.89913C14.9051 4.19505 14.8215 4.43568 14.4274 5.08433C14.2386 5.39108 14.1586 5.52227 14.0771 5.6985L14.0763 5.69983L14.0628 5.7224L14.0517 5.74628C13.7673 6.35795 13.582 6.95863 13.4828 7.53759C13.4397 7.74561 13.4221 7.94151 13.4082 8.09536C13.4073 8.10594 13.4063 8.11632 13.4054 8.12649L13.4044 8.13775L13.4039 8.14905C13.403 8.16877 13.402 8.1884 13.4011 8.20803C13.3971 8.28891 13.3932 8.36966 13.3932 8.45492C13.3932 8.53323 13.3969 8.61149 13.4007 8.69158C13.4017 8.71416 13.4028 8.73688 13.4038 8.75979L13.4043 8.77158L13.4054 8.78334C13.422 8.96632 13.4494 9.15632 13.4797 9.35833L13.4808 9.36578L13.4821 9.37319C13.5858 9.9462 13.7705 10.5472 14.0501 11.1603L14.0538 11.1684L14.0578 11.1764C14.1451 11.351 14.2084 11.4761 14.4284 11.8271C14.8212 12.4738 14.9051 12.7146 14.9051 13.0158C14.9051 13.5924 14.6317 14.1793 14.1515 14.6696C13.6734 15.1377 13.1443 15.3625 12.5583 15.3625C12.2262 15.3625 11.9494 15.2628 11.2716 14.8492L11.2693 14.8478C11.1918 14.8011 11.129 14.7631 11.0763 14.7312C10.9389 14.6479 10.8707 14.6066 10.7932 14.5634L10.7756 14.5458L10.6945 14.5084C10.0768 14.2237 9.48128 14.044 8.90897 13.9452C8.69435 13.9017 8.50149 13.8842 8.34475 13.8701C8.3367 13.8693 8.32873 13.8686 8.32087 13.8679C8.18699 13.8557 8.08238 13.8557 8.00083 13.8557H7.9975H7.99507C7.90754 13.8557 7.80896 13.8557 7.67103 13.8677L7.66907 13.8679C7.48657 13.8845 7.29239 13.9117 7.09223 13.9424L7.0922 13.9423L7.07922 13.9446C6.50621 14.0483 5.90523 14.233 5.29215 14.5126L5.28403 14.5163L5.27604 14.5203C5.13948 14.5886 5.06886 14.6323 4.83303 14.7783C4.79828 14.7998 4.75995 14.8235 4.71729 14.8499C4.03957 15.2634 3.76318 15.3625 3.43665 15.3625C2.83993 15.3625 2.29606 15.1272 1.82328 14.6545L1.79456 14.6257C1.32471 14.1466 1.09497 13.6117 1.09497 13.0208C1.09497 12.7236 1.17492 12.487 1.56738 11.841C1.74047 11.561 1.79263 11.4641 1.8643 11.331L1.86951 11.3213L1.8731 11.3146L1.87649 11.3079L1.93716 11.1865L1.9373 11.1866L1.94263 11.1752C2.22802 10.5668 2.41308 9.96061 2.51212 9.38779C2.55473 9.182 2.57255 8.98338 2.58623 8.83093C2.58738 8.8181 2.5885 8.8056 2.5896 8.79345C2.60177 8.65957 2.60177 8.55495 2.60177 8.47339V8.47008V8.46785C2.60177 8.3764 2.60177 8.28429 2.5903 8.14965C2.57842 7.96507 2.55026 7.76583 2.52011 7.56987L2.52018 7.56986L2.51874 7.56141C2.41945 6.98225 2.22803 6.37914 1.94404 5.76296L1.94405 5.76295L1.94268 5.76002C1.85444 5.57178 1.78111 5.44524 1.57431 5.10224L1.57432 5.10223L1.57194 5.09837C1.17481 4.45302 1.09497 4.21626 1.09497 3.91429C1.09497 3.31982 1.32478 2.78745 1.78515 2.30415L1.80909 2.2832L1.82076 2.27299L1.83177 2.26208C2.30448 1.79366 2.84387 1.5625 3.43665 1.5625C3.7447 1.5625 3.99172 1.64807 4.64339 2.04097C4.97549 2.2442 5.10067 2.32019 5.29076 2.4094C5.90477 2.70263 6.50338 2.88218 7.07417 2.98546L7.07487 2.98559C7.28976 3.02416 7.48906 3.04652 7.67258 3.05788C7.80691 3.0693 7.89909 3.0693 7.99481 3.0693H7.9975H8.00256H8.00497C8.0925 3.0693 8.19109 3.0693 8.32903 3.05731L8.33098 3.05713C8.50443 3.04136 8.70158 3.01966 8.91783 2.98095ZM8.91783 2.98095C8.91706 2.98108 8.91628 2.98121 8.91551 2.98134L8.8318 2.4884L8.92013 2.98053C8.91937 2.98067 8.9186 2.98081 8.91783 2.98095Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              }),
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.04281 5.10193C8.04228 5.10193 8.04174 5.10193 8.04121 5.10193C8.04068 5.10193 8.04014 5.10193 8.03961 5.10193H5.88464C5.6085 5.10193 5.38464 5.32579 5.38464 5.60193C5.38464 5.87807 5.6085 6.10193 5.88464 6.10193H7.54121L7.54119 11.5055C7.54119 11.7817 7.76504 12.0055 8.04119 12.0055C8.31733 12.0055 8.54119 11.7817 8.54119 11.5055L8.54121 6.10193H10.2089C10.4851 6.10193 10.7089 5.87807 10.7089 5.60193C10.7089 5.32579 10.4851 5.10193 10.2089 5.10193H8.04281Z",
                fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              }),
            ],
          }),
        "Talantix",
      );
    },
    972125: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M8.8889 8.83331H10.9259L11.3333 6.33331H8.8889V5.08331C8.8889 4.24998 9.14964 3.83331 10.1111 3.83331H11.3333V1.41665C11.3333 1.41665 10.8029 1.33331 9.43808 1.33331C8.07408 1.33331 6.44445 2.63831 6.44445 4.66665V6.33331H4V8.83331H6.44445V14.6666H8.8889V8.83331Z",
              fill: "#177AE6",
            }),
          }),
        "Facebook",
      );
    },
    704917: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M8.8889 8.83331H10.9259L11.3333 6.33331H8.8889V5.08331C8.8889 4.24998 9.14964 3.83331 10.1111 3.83331H11.3333V1.41665C11.3333 1.41665 10.8029 1.33331 9.43808 1.33331C8.07408 1.33331 6.44445 2.63831 6.44445 4.66665V6.33331H4V8.83331H6.44445V14.6666H8.8889V8.83331Z",
              fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
            }),
          }),
        "Facebook",
      );
    },
    835037: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.77946 8.21896C6.8879 8.21521 6.03391 7.85378 5.40348 7.21339C4.77304 6.573 4.41723 5.70553 4.41354 4.79989C4.41587 3.88941 4.76978 3.0162 5.39919 2.36797C6.0286 1.71974 6.88327 1.34824 7.77946 1.33332C8.22561 1.33263 8.66745 1.42218 9.07918 1.59674C9.49092 1.77131 9.86432 2.02739 10.1776 2.35005C10.4909 2.67272 10.7378 3.05552 10.904 3.47612C11.0701 3.89673 11.1522 4.34672 11.1454 4.79989C11.151 5.25048 11.0678 5.69765 10.9007 6.11506C10.7335 6.53249 10.4858 6.91169 10.1721 7.23033C9.85843 7.54896 9.48512 7.8006 9.0742 7.97039C8.66328 8.14019 8.22305 8.2247 7.77946 8.21896ZM7.77946 3.37527C7.59129 3.37516 7.40501 3.41352 7.23173 3.48807C7.05845 3.56261 6.90172 3.67181 6.77087 3.80918C6.64 3.94653 6.5377 4.10923 6.47002 4.2876C6.40236 4.46596 6.37072 4.65633 6.377 4.84736C6.37421 5.03305 6.40896 5.21733 6.47906 5.38883C6.54918 5.56034 6.65316 5.71541 6.7846 5.84448C6.91605 5.97354 7.07214 6.07386 7.24326 6.13923C7.41437 6.20458 7.59687 6.23361 7.77946 6.22449C7.96091 6.22891 8.14139 6.19664 8.31045 6.1296C8.4795 6.06254 8.63377 5.96203 8.76425 5.8339C8.89474 5.70577 8.99887 5.55257 9.07057 5.38322C9.14227 5.21385 9.18013 5.03172 9.18193 4.84736C9.18821 4.65633 9.15655 4.46596 9.08889 4.2876C9.02123 4.10923 8.91891 3.94653 8.78806 3.80918C8.65719 3.67181 8.50046 3.56261 8.32718 3.48807C8.15391 3.41352 7.96764 3.37516 7.77946 3.37527ZM9.13518 11.0682L11.0519 12.9677C11.1409 13.0581 11.2116 13.1654 11.2598 13.2836C11.308 13.4017 11.3328 13.5284 11.3328 13.6562C11.3328 13.7841 11.308 13.9108 11.2598 14.0289C11.2116 14.1471 11.1409 14.2544 11.0519 14.3448C10.969 14.4456 10.8653 14.5266 10.7481 14.5822C10.631 14.6378 10.5033 14.6666 10.374 14.6666C10.2447 14.6666 10.117 14.6378 9.9999 14.5822C9.88278 14.5266 9.7791 14.4456 9.69616 14.3448L7.77946 12.4453L5.90951 14.3448C5.81856 14.4392 5.70921 14.5133 5.58847 14.5624C5.46773 14.6114 5.33824 14.6344 5.20828 14.6297C4.94914 14.6199 4.70135 14.5192 4.50704 14.3448C4.41799 14.2544 4.34735 14.1471 4.29915 14.0289C4.25095 13.9108 4.22614 13.7841 4.22614 13.6562C4.22614 13.5284 4.25095 13.4017 4.29915 13.2836C4.34735 13.1654 4.41799 13.0581 4.50704 12.9677L6.4705 11.0682C5.76901 10.8456 5.09464 10.5429 4.46029 10.1659C4.24365 10.0216 4.08924 9.79894 4.02845 9.54313C3.96767 9.28733 4.00507 9.0176 4.13305 8.7888C4.20439 8.67384 4.29801 8.57481 4.40821 8.49775C4.51841 8.42069 4.64289 8.36721 4.77408 8.34056C4.90527 8.31389 5.04042 8.31463 5.17132 8.34272C5.30223 8.37079 5.42613 8.42563 5.53552 8.50388C6.21977 8.92314 7.00373 9.14472 7.80284 9.14472C8.60193 9.14472 9.38589 8.92314 10.0702 8.50388C10.1795 8.42563 10.3034 8.37079 10.4343 8.34272C10.5652 8.31463 10.7004 8.31389 10.8316 8.34056C10.9628 8.36721 11.0873 8.42069 11.1975 8.49775C11.3077 8.57481 11.4013 8.67384 11.4726 8.7888C11.6052 9.01205 11.6499 9.27788 11.5979 9.53317C11.5459 9.78848 11.401 10.0144 11.1921 10.1659C10.5415 10.5431 9.85158 10.8457 9.13518 11.0682Z",
              fill: "#F38231",
            }),
          }),
        "Ok",
      );
    },
    833709: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.77946 8.21896C6.8879 8.21521 6.03391 7.85378 5.40348 7.21339C4.77304 6.573 4.41723 5.70553 4.41354 4.79989C4.41587 3.88941 4.76978 3.0162 5.39919 2.36797C6.0286 1.71974 6.88327 1.34824 7.77946 1.33332C8.22561 1.33263 8.66745 1.42218 9.07918 1.59674C9.49092 1.77131 9.86432 2.02739 10.1776 2.35005C10.4909 2.67272 10.7378 3.05552 10.904 3.47612C11.0701 3.89673 11.1522 4.34672 11.1454 4.79989C11.151 5.25048 11.0678 5.69765 10.9007 6.11506C10.7335 6.53249 10.4858 6.91169 10.1721 7.23033C9.85843 7.54896 9.48512 7.8006 9.0742 7.97039C8.66328 8.14019 8.22305 8.2247 7.77946 8.21896ZM7.77946 3.37527C7.59129 3.37516 7.40501 3.41352 7.23173 3.48807C7.05845 3.56261 6.90172 3.67181 6.77087 3.80918C6.64 3.94653 6.5377 4.10923 6.47002 4.2876C6.40236 4.46596 6.37072 4.65633 6.377 4.84736C6.37421 5.03305 6.40896 5.21733 6.47906 5.38883C6.54918 5.56034 6.65316 5.71541 6.7846 5.84448C6.91605 5.97354 7.07214 6.07386 7.24326 6.13923C7.41437 6.20458 7.59687 6.23361 7.77946 6.22449C7.96091 6.22891 8.14139 6.19664 8.31045 6.1296C8.4795 6.06254 8.63377 5.96203 8.76425 5.8339C8.89474 5.70577 8.99887 5.55257 9.07057 5.38322C9.14227 5.21385 9.18013 5.03172 9.18193 4.84736C9.18821 4.65633 9.15655 4.46596 9.08889 4.2876C9.02123 4.10923 8.91891 3.94653 8.78806 3.80918C8.65719 3.67181 8.50046 3.56261 8.32718 3.48807C8.15391 3.41352 7.96764 3.37516 7.77946 3.37527ZM9.13518 11.0682L11.0519 12.9677C11.1409 13.0581 11.2116 13.1654 11.2598 13.2836C11.308 13.4017 11.3328 13.5284 11.3328 13.6562C11.3328 13.7841 11.308 13.9108 11.2598 14.0289C11.2116 14.1471 11.1409 14.2544 11.0519 14.3448C10.969 14.4456 10.8653 14.5266 10.7481 14.5822C10.631 14.6378 10.5033 14.6666 10.374 14.6666C10.2447 14.6666 10.117 14.6378 9.9999 14.5822C9.88278 14.5266 9.7791 14.4456 9.69616 14.3448L7.77946 12.4453L5.90951 14.3448C5.81856 14.4392 5.70921 14.5133 5.58847 14.5624C5.46773 14.6114 5.33824 14.6344 5.20828 14.6297C4.94914 14.6199 4.70135 14.5192 4.50704 14.3448C4.41799 14.2544 4.34735 14.1471 4.29915 14.0289C4.25095 13.9108 4.22614 13.7841 4.22614 13.6562C4.22614 13.5284 4.25095 13.4017 4.29915 13.2836C4.34735 13.1654 4.41799 13.0581 4.50704 12.9677L6.4705 11.0682C5.76901 10.8456 5.09464 10.5429 4.46029 10.1659C4.24365 10.0216 4.08924 9.79894 4.02845 9.54313C3.96767 9.28733 4.00507 9.0176 4.13305 8.7888C4.20439 8.67384 4.29801 8.57481 4.40821 8.49775C4.51841 8.42069 4.64289 8.36721 4.77408 8.34056C4.90527 8.31389 5.04042 8.31463 5.17132 8.34272C5.30223 8.37079 5.42613 8.42563 5.53552 8.50388C6.21977 8.92314 7.00373 9.14472 7.80284 9.14472C8.60193 9.14472 9.38589 8.92314 10.0702 8.50388C10.1795 8.42563 10.3034 8.37079 10.4343 8.34272C10.5652 8.31463 10.7004 8.31389 10.8316 8.34056C10.9628 8.36721 11.0873 8.42069 11.1975 8.49775C11.3077 8.57481 11.4013 8.67384 11.4726 8.7888C11.6052 9.01205 11.6499 9.27788 11.5979 9.53317C11.5459 9.78848 11.401 10.0144 11.1921 10.1659C10.5415 10.5431 9.85158 10.8457 9.13518 11.0682Z",
              fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
            }),
          }),
        "Ok",
      );
    },
    973195: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M0.204448 7.90049C1.58943 7.10475 3.13552 6.44037 4.58007 5.77324C7.06505 4.67969 9.56019 3.60678 12.0804 2.60608C12.5711 2.43552 13.4518 2.26908 13.5385 3.02699C13.4911 4.0999 13.2968 5.16594 13.1628 6.23197C12.8243 8.57725 12.4324 10.9136 12.0506 13.2513C11.9193 14.0298 10.9838 14.4329 10.3854 13.9342C8.94757 12.9212 7.49828 11.9184 6.07878 10.8819C5.61306 10.3888 6.04493 9.68111 6.45989 9.32966C7.6445 8.11232 8.90087 7.07792 10.0232 5.79799C10.3265 5.03526 9.43157 5.67832 9.13644 5.87502C7.51453 7.0401 5.93256 8.2767 4.22334 9.30009C3.35011 9.80216 2.33201 9.37368 1.45878 9.09376C0.676263 8.75607 -0.470443 8.41563 0.204448 7.90049Z",
              fill: "#27A5E4",
            }),
          }),
        "Telegram",
      );
    },
    639593: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M0.204448 7.90049C1.58943 7.10475 3.13552 6.44037 4.58007 5.77324C7.06505 4.67969 9.56019 3.60678 12.0804 2.60608C12.5711 2.43552 13.4518 2.26908 13.5385 3.02699C13.4911 4.0999 13.2968 5.16594 13.1628 6.23197C12.8243 8.57725 12.4324 10.9136 12.0506 13.2513C11.9193 14.0298 10.9838 14.4329 10.3854 13.9342C8.94757 12.9212 7.49828 11.9184 6.07878 10.8819C5.61306 10.3888 6.04493 9.68111 6.45989 9.32966C7.6445 8.11232 8.90087 7.07792 10.0232 5.79799C10.3265 5.03526 9.43157 5.67832 9.13644 5.87502C7.51453 7.0401 5.93256 8.2767 4.22334 9.30009C3.35011 9.80216 2.33201 9.37368 1.45878 9.09376C0.676263 8.75607 -0.470443 8.41563 0.204448 7.90049Z",
              fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
            }),
          }),
        "Telegram",
      );
    },
    973267: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 17,
            height: 16,
            viewBox: "0 0 17 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M0.538371 7.90055C1.92335 7.10481 3.46944 6.44043 4.914 5.7733C7.39898 4.67975 9.89411 3.60684 12.4143 2.60614C12.9051 2.43558 13.7857 2.26914 13.8724 3.02705C13.825 4.09997 13.6307 5.166 13.4967 6.23204C13.1582 8.57731 12.7663 10.9136 12.3845 13.2514C12.2532 14.0299 11.3177 14.4329 10.7193 13.9343C9.2815 12.9212 7.83221 11.9185 6.4127 10.882C5.94698 10.3889 6.37886 9.68117 6.79381 9.32972C7.97842 8.11238 9.23479 7.07798 10.3571 5.79806C10.6604 5.03533 9.7655 5.67839 9.47036 5.87509C7.84845 7.04016 6.26649 8.27676 4.55726 9.30015C3.68403 9.80222 2.66594 9.37374 1.79271 9.09382C1.01019 8.75613 -0.13652 8.41569 0.538371 7.90055V7.90055Z",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 0.666667,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Telegram",
      );
    },
    141275: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.4315 5.69229C13.4483 5.75935 13.4567 5.86832 13.4567 6.01921C13.4567 7.22631 13.1622 8.3915 12.5733 9.51478C11.9675 10.7051 11.1178 11.6523 10.024 12.3565C8.8293 13.1445 7.45791 13.5384 5.90983 13.5384C4.42906 13.5384 3.0745 13.1445 1.84613 12.3565C2.03123 12.3733 2.24156 12.3816 2.47714 12.3816C3.70551 12.3816 4.80767 12.0044 5.78363 11.25C5.19469 11.25 4.67726 11.0781 4.23135 10.7344C3.78543 10.3908 3.47834 9.95905 3.31007 9.43933C3.47834 9.4561 3.6382 9.46448 3.78964 9.46448C4.02522 9.46448 4.26079 9.43933 4.49637 9.38904C3.8906 9.25491 3.38579 8.94475 2.98195 8.45856C2.5781 7.97237 2.37618 7.41911 2.37618 6.7988V6.7485C2.74637 6.96645 3.1418 7.08381 3.56248 7.10057C3.20911 6.84909 2.92305 6.53055 2.7043 6.14495C2.48555 5.75935 2.37618 5.33603 2.37618 4.87498C2.37618 4.41394 2.50238 3.97385 2.75478 3.55471C3.41103 4.37621 4.21452 5.03006 5.16524 5.51625C6.11596 6.00245 7.12978 6.27069 8.20671 6.32099C8.17305 6.1198 8.15623 5.91862 8.15623 5.71744C8.15623 5.24801 8.27401 4.80792 8.50959 4.39717C8.74517 3.98642 9.06488 3.66369 9.46873 3.42898C9.87257 3.19426 10.3101 3.0769 10.7812 3.0769C11.1682 3.0769 11.5258 3.15235 11.8539 3.30324C12.1821 3.45412 12.4723 3.65531 12.7247 3.90679C13.3305 3.78943 13.8942 3.57986 14.4158 3.27809C14.2139 3.8984 13.8269 4.3846 13.2548 4.73667C13.7596 4.66961 14.2644 4.5271 14.7692 4.30915C14.399 4.84564 13.9531 5.30669 13.4315 5.69229Z",
              fill: "#01C0FF",
            }),
          }),
        "Twitter",
      );
    },
    23621: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.4315 5.69229C13.4483 5.75935 13.4567 5.86832 13.4567 6.01921C13.4567 7.22631 13.1622 8.3915 12.5733 9.51478C11.9675 10.7051 11.1178 11.6523 10.024 12.3565C8.8293 13.1445 7.45791 13.5384 5.90983 13.5384C4.42906 13.5384 3.0745 13.1445 1.84613 12.3565C2.03123 12.3733 2.24156 12.3816 2.47714 12.3816C3.70551 12.3816 4.80767 12.0044 5.78363 11.25C5.19469 11.25 4.67726 11.0781 4.23135 10.7344C3.78543 10.3908 3.47834 9.95905 3.31007 9.43933C3.47834 9.4561 3.6382 9.46448 3.78964 9.46448C4.02522 9.46448 4.26079 9.43933 4.49637 9.38904C3.8906 9.25491 3.38579 8.94475 2.98195 8.45856C2.5781 7.97237 2.37618 7.41911 2.37618 6.7988V6.7485C2.74637 6.96645 3.1418 7.08381 3.56248 7.10057C3.20911 6.84909 2.92305 6.53055 2.7043 6.14495C2.48555 5.75935 2.37618 5.33603 2.37618 4.87498C2.37618 4.41394 2.50238 3.97385 2.75478 3.55471C3.41103 4.37621 4.21452 5.03006 5.16524 5.51625C6.11596 6.00245 7.12978 6.27069 8.20671 6.32099C8.17305 6.1198 8.15623 5.91862 8.15623 5.71744C8.15623 5.24801 8.27401 4.80792 8.50959 4.39717C8.74517 3.98642 9.06488 3.66369 9.46873 3.42898C9.87257 3.19426 10.3101 3.0769 10.7812 3.0769C11.1682 3.0769 11.5258 3.15235 11.8539 3.30324C12.1821 3.45412 12.4723 3.65531 12.7247 3.90679C13.3305 3.78943 13.8942 3.57986 14.4158 3.27809C14.2139 3.8984 13.8269 4.3846 13.2548 4.73667C13.7596 4.66961 14.2644 4.5271 14.7692 4.30915C14.399 4.84564 13.9531 5.30669 13.4315 5.69229Z",
              fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
            }),
          }),
        "Twitter",
      );
    },
    988048: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsxs)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M13.3136 2.01369C12.9592 1.69166 11.4293 0.730381 8.23708 0.716457C8.23708 0.716457 4.45702 0.468099 2.62206 2.13015C1.60077 3.13852 1.25672 4.63804 1.219 6.46794C1.18127 8.29784 0.985827 11.7936 4.33297 12.7235C4.33297 12.7235 4.3198 15.3187 4.31829 15.5468C4.31829 15.7063 4.3436 15.8154 4.43474 15.838C4.50031 15.8539 4.59854 15.82 4.68209 15.7367C5.21729 15.1992 6.93073 13.1321 6.93073 13.1321C9.22976 13.2822 11.0589 12.8283 11.2556 12.764C11.7194 12.6149 14.2281 12.3994 14.6526 8.97001C15.0914 5.43501 14.4914 3.02206 13.3136 2.01369Z",
                fill: "#7360F2",
              }),
              (0, i.jsx)("path", {
                d: "M9.86018 6.31753C9.81866 5.48056 9.39351 5.04097 8.58472 4.99878",
                stroke: "white",
                strokeWidth: 0.426842,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M10.9551 6.68464C10.972 5.90488 10.741 5.25339 10.2622 4.73018C9.7812 4.20511 9.11537 3.91599 8.26093 3.85345",
                stroke: "white",
                strokeWidth: 0.426842,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M12.0762 7.12312C12.0659 5.77001 11.6616 4.70434 10.8632 3.9261C10.0649 3.14786 9.07207 2.75461 7.8847 2.74634",
                stroke: "white",
                strokeWidth: 0.426842,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M8.62697 9.17611C8.62697 9.17611 8.92698 9.20143 9.0885 9.00243L9.40344 8.60623C9.55534 8.40977 9.92193 8.28445 10.2809 8.48445C10.5499 8.63788 10.8111 8.80467 11.0635 8.98421C11.3017 9.1594 11.7896 9.56649 11.7911 9.56649C12.0235 9.7627 12.0772 10.0508 11.9189 10.3546C11.9189 10.3564 11.9177 10.3594 11.9177 10.3609C11.7434 10.663 11.5221 10.9355 11.2622 11.168C11.2592 11.1696 11.2592 11.1711 11.2564 11.1726C11.0306 11.3613 10.8087 11.4685 10.5908 11.4944C10.5587 11.5 10.5261 11.502 10.4936 11.5004C10.3975 11.5014 10.3019 11.4867 10.2105 11.4569L10.2035 11.4465C9.86775 11.3518 9.30724 11.1149 8.3738 10.5999C7.83364 10.3054 7.31939 9.96575 6.83656 9.58447C6.59456 9.39347 6.36371 9.18874 6.14516 8.97129L6.12187 8.948L6.09858 8.92471L6.07529 8.90142C6.06744 8.89383 6.05984 8.88598 6.05199 8.87813C5.83455 8.65958 5.62982 8.42873 5.43882 8.18673C5.0576 7.70395 4.7179 7.18979 4.42336 6.64974C3.90842 5.71605 3.67145 5.15604 3.57677 4.81984L3.56639 4.81275C3.53671 4.72137 3.52208 4.62578 3.52309 4.52971C3.52132 4.49718 3.52328 4.46457 3.52892 4.43249C3.55609 4.21493 3.66352 3.9929 3.8512 3.7664C3.85272 3.76362 3.85424 3.76362 3.85576 3.76058C4.08824 3.50065 4.3607 3.27948 4.66286 3.10538C4.66438 3.10538 4.66742 3.10386 4.66919 3.10386C4.97299 2.94563 5.2611 2.9993 5.45705 3.23044C5.45857 3.23196 5.8649 3.71982 6.03934 3.95805C6.21889 4.21065 6.38569 4.47207 6.53909 4.74135C6.73909 5.10009 6.61378 5.46744 6.41732 5.61884L6.02111 5.93378C5.8211 6.0953 5.84743 6.3953 5.84743 6.3953C5.84743 6.3953 6.43428 8.61635 8.62697 9.17611Z",
                fill: "white",
              }),
            ],
          }),
        "Viber",
      );
    },
    145742: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.23708 0.716457C11.4293 0.730381 12.9592 1.69166 13.3136 2.01369C14.4914 3.02206 15.0914 5.43501 14.6526 8.97001C14.2705 12.057 12.1996 12.5398 11.4516 12.7142C11.3686 12.7336 11.3019 12.7491 11.2556 12.764C11.0589 12.8283 9.22976 13.2822 6.93073 13.1321C6.93073 13.1321 5.21729 15.1992 4.68209 15.7367C4.59854 15.82 4.50031 15.8539 4.43474 15.838C4.3436 15.8154 4.31829 15.7063 4.31829 15.5468C4.3198 15.3187 4.33297 12.7235 4.33297 12.7235C1.09706 11.8245 1.1722 8.52734 1.21485 6.65573C1.21631 6.5914 1.21774 6.52875 1.219 6.46794C1.25672 4.63804 1.60077 3.13852 2.62206 2.13015C4.45702 0.468099 8.23708 0.716457 8.23708 0.716457ZM7.67127 2.74487C7.67209 2.62701 7.76831 2.53212 7.88617 2.53294C9.12473 2.54157 10.1716 2.9539 11.0122 3.7733C11.8598 4.59956 12.2789 5.72444 12.2896 7.12151C12.2905 7.23938 12.1956 7.33566 12.0778 7.33655C11.9599 7.33745 11.8636 7.24263 11.8627 7.12476C11.8528 5.81563 11.4633 4.80917 10.7142 4.07895C9.95814 3.34187 9.01937 2.96769 7.8832 2.95978C7.76533 2.95895 7.67045 2.86274 7.67127 2.74487ZM8.27649 3.64061C8.15894 3.63201 8.05667 3.72033 8.04806 3.83789C8.03946 3.95544 8.12778 4.05771 8.24534 4.06632C9.05794 4.12579 9.6682 4.39777 10.1048 4.87427C10.5427 5.35276 10.7576 5.94922 10.7418 6.68003C10.7392 6.79787 10.8327 6.89547 10.9505 6.89802C11.0684 6.90057 11.166 6.80711 11.1685 6.68927C11.1864 5.86056 10.9393 5.15396 10.4196 4.58602C9.89412 4.01244 9.17273 3.70621 8.27649 3.64061ZM8.37159 4.98769C8.37773 4.86998 8.47813 4.77953 8.59584 4.78568C9.03623 4.80865 9.40263 4.94196 9.66359 5.21177C9.92355 5.48055 10.051 5.85603 10.0733 6.30699C10.0792 6.42471 9.98849 6.52488 9.87076 6.53072C9.75304 6.53656 9.65287 6.44586 9.64703 6.32814C9.62788 5.94211 9.52197 5.67932 9.35677 5.50851C9.19257 5.33874 8.942 5.23116 8.5736 5.21194C8.45589 5.2058 8.36545 5.1054 8.37159 4.98769ZM9.0885 9.00239C8.92698 9.20138 8.62697 9.17607 8.62697 9.17607C6.43428 8.61631 5.84743 6.39526 5.84743 6.39526C5.84743 6.39526 5.8211 6.09526 6.02111 5.93374L6.41732 5.6188C6.61378 5.4674 6.73909 5.10005 6.53909 4.74131C6.38569 4.47203 6.21889 4.21061 6.03934 3.95801C5.8649 3.71978 5.45857 3.23192 5.45705 3.2304C5.2611 2.99926 4.97299 2.94559 4.66919 3.10382C4.66827 3.10382 4.66701 3.10423 4.6658 3.10462L4.66579 3.10462L4.66579 3.10462C4.66467 3.10499 4.66359 3.10534 4.66286 3.10534C4.3607 3.27943 4.08824 3.50061 3.85576 3.76054C3.85496 3.76212 3.85417 3.76288 3.85338 3.76364C3.85265 3.76433 3.85193 3.76503 3.8512 3.76636C3.66352 3.99286 3.55609 4.21489 3.52892 4.43245C3.52328 4.46453 3.52132 4.49714 3.52309 4.52966C3.52208 4.62574 3.53671 4.72133 3.56639 4.81271L3.57677 4.8198C3.67145 5.156 3.90842 5.71601 4.42336 6.6497C4.7179 7.18975 5.0576 7.70391 5.43882 8.18669C5.62982 8.42869 5.83455 8.65954 6.05199 8.87809L6.05979 8.88594C6.06494 8.89115 6.07006 8.89632 6.07529 8.90138L6.14516 8.97125C6.36371 9.1887 6.59456 9.39343 6.83656 9.58443C7.31939 9.96571 7.83364 10.3054 8.3738 10.5999C9.30724 11.1148 9.86775 11.3518 10.2035 11.4465L10.2105 11.4569C10.3019 11.4866 10.3975 11.5013 10.4936 11.5004C10.5261 11.502 10.5587 11.4999 10.5908 11.4943C10.8087 11.4685 11.0306 11.3613 11.2564 11.1726C11.2577 11.1718 11.2584 11.1711 11.2591 11.1704L11.2602 11.1693C11.2607 11.1689 11.2613 11.1684 11.2622 11.168C11.5221 10.9354 11.7434 10.663 11.9177 10.3609C11.9177 10.3604 11.9178 10.3597 11.918 10.3589C11.9181 10.3586 11.9181 10.3584 11.9182 10.3581L11.9183 10.358C11.9185 10.3571 11.9187 10.3563 11.9188 10.3555C11.9189 10.3552 11.9189 10.3549 11.9189 10.3546C12.0772 10.0508 12.0235 9.76266 11.7911 9.56645C11.7908 9.56645 11.7719 9.55093 11.74 9.52463L11.7398 9.52444L11.7397 9.52439L11.7396 9.52432C11.6078 9.41573 11.255 9.12501 11.0635 8.98417C10.8111 8.80463 10.5499 8.63784 10.2809 8.48441C9.92193 8.28441 9.55534 8.40973 9.40344 8.60619L9.0885 9.00239Z",
              fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
            }),
          }),
        "Viber",
      );
    },
    712863: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsxs)("svg", {
            width: 16,
            height: 17,
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M9.6434 6.51056C9.5936 6.51057 9.54571 6.49143 9.50963 6.45711C9.47355 6.42279 9.45205 6.37591 9.44956 6.32618C9.41661 5.66677 9.10592 5.34387 8.47186 5.30975C8.42134 5.30574 8.37439 5.28214 8.34103 5.244C8.30766 5.20585 8.29052 5.15618 8.29325 5.10558C8.29599 5.05498 8.31839 5.00744 8.35567 4.97312C8.39296 4.9388 8.44218 4.9204 8.49283 4.92185C9.32948 4.96795 9.7946 5.44574 9.83747 6.30682C9.83874 6.3323 9.83498 6.35779 9.8264 6.38182C9.81782 6.40585 9.8046 6.42796 9.78747 6.44688C9.77035 6.4658 9.74967 6.48116 9.72661 6.49209C9.70355 6.50302 9.67857 6.50929 9.65308 6.51056H9.6434Z",
                fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              }),
              (0, i.jsx)("path", {
                d: "M10.6404 6.84473H10.6358C10.5843 6.84352 10.5354 6.82191 10.4998 6.78466C10.4642 6.7474 10.4449 6.69755 10.4461 6.64605C10.4611 5.98203 10.2714 5.44432 9.8662 5.00226C9.46102 4.56019 8.90901 4.32049 8.17308 4.26656C8.12161 4.2628 8.07375 4.23875 8.04001 4.19969C8.00627 4.16064 7.98943 4.10979 7.99319 4.05832C7.99695 4.00685 8.021 3.95898 8.06006 3.92524C8.09911 3.89151 8.14996 3.87467 8.20143 3.87843C9.02955 3.93904 9.68597 4.22876 10.1527 4.73928C10.6194 5.24979 10.8515 5.8956 10.8345 6.65412C10.8334 6.70495 10.8126 6.75336 10.7763 6.78898C10.74 6.82461 10.6912 6.84462 10.6404 6.84473Z",
                fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              }),
              (0, i.jsx)("path", {
                d: "M11.6607 7.24346C11.6095 7.2434 11.5603 7.2231 11.5239 7.18698C11.4875 7.15085 11.4669 7.10182 11.4664 7.05055C11.4574 5.86288 11.1154 4.9557 10.4207 4.27762C9.73437 3.60923 8.86729 3.26627 7.84326 3.25889C7.81775 3.2588 7.7925 3.25369 7.76896 3.24384C7.74542 3.23399 7.72406 3.2196 7.70608 3.2015C7.66977 3.16493 7.64948 3.11544 7.64966 3.06391C7.64984 3.01238 7.67049 2.96303 7.70706 2.92672C7.74362 2.89041 7.79312 2.87012 7.84465 2.8703H7.84626C8.97378 2.8786 9.9312 3.25843 10.692 3.99966C11.4528 4.74089 11.8451 5.76838 11.8553 7.04825C11.8556 7.09974 11.8355 7.14927 11.7994 7.18596C11.7633 7.22265 11.7141 7.2435 11.6626 7.24392L11.6607 7.24346Z",
                fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              }),
              (0, i.jsx)("path", {
                d: "M6.33367 6.3708C6.32947 6.35803 6.32593 6.34687 6.323 6.33745C6.32371 6.32533 6.32524 6.31075 6.3282 6.29542C6.33715 6.2492 6.35161 6.23138 6.35734 6.22651L6.71473 5.94242C7.02598 5.7006 7.17086 5.18512 6.91098 4.71899L6.911 4.71898L6.90947 4.71631C6.76431 4.46149 6.60647 4.2141 6.43656 3.97507L6.43658 3.97505L6.43382 3.97127C6.34875 3.8551 6.21152 3.68372 6.09938 3.54585C6.04248 3.47589 5.99059 3.4128 5.95283 3.36708L5.90776 3.31267L5.89505 3.29742L5.89122 3.29283L5.8894 3.29068L5.88902 3.29024C5.8889 3.2901 5.88879 3.28996 5.88867 3.28982C5.75393 3.13107 5.57577 3.02129 5.36803 2.98649C5.17105 2.95349 4.97255 2.99194 4.78906 3.082C4.77404 3.08794 4.75942 3.09499 4.74533 3.10311C4.43953 3.2793 4.1638 3.50314 3.92851 3.7662C3.92483 3.77031 3.92126 3.77451 3.91779 3.7788C3.91523 3.78188 3.91263 3.7851 3.91003 3.78846C3.71726 4.02307 3.58561 4.27775 3.54963 4.55115C3.54186 4.59876 3.53888 4.64702 3.54073 4.69521C3.54054 4.81541 3.55935 4.93491 3.59649 5.04928C3.60277 5.06861 3.61077 5.08722 3.62034 5.10491C3.72651 5.4502 3.95704 5.97313 4.40144 6.77897C4.67849 7.28685 4.99798 7.7704 5.35651 8.22444C5.53829 8.45477 5.73314 8.67448 5.9401 8.88249L5.94069 8.88308C5.94099 8.88338 5.94166 8.88406 5.94262 8.88503C5.9467 8.88915 5.95595 8.8985 5.96344 8.90583L5.9831 8.92549L6.0043 8.94669L6.00431 8.9467L6.02551 8.9679L6.0261 8.96849C6.23409 9.17543 6.45377 9.37026 6.68408 9.55203C7.13818 9.91062 7.62183 10.2301 8.12984 10.5071C8.93552 10.9516 9.45875 11.182 9.80359 11.2882C9.82122 11.2977 9.83977 11.3057 9.85903 11.312C9.97371 11.3494 10.0936 11.3683 10.2141 11.3681C10.2617 11.3697 10.3093 11.3667 10.3562 11.3592C10.6311 11.3245 10.8864 11.1923 11.1206 10.9983C11.1237 10.9959 11.1266 10.9935 11.1295 10.9911C11.1337 10.9877 11.1379 10.9842 11.142 10.9805C11.405 10.7452 11.6288 10.4696 11.8052 10.1639C11.8137 10.149 11.8211 10.1335 11.8273 10.1176C11.9165 9.93481 11.9546 9.73701 11.9214 9.54063C11.8863 9.33242 11.7758 9.15408 11.6162 9.01936C11.6129 9.01653 11.6095 9.01378 11.606 9.0111L11.593 9.00038L11.5395 8.95634C11.4941 8.91894 11.4311 8.86717 11.3612 8.8103C11.2235 8.6982 11.0522 8.5607 10.9363 8.47541L10.9363 8.47538L10.932 8.47234C10.6932 8.30245 10.4461 8.14461 10.1915 7.99943L10.1915 7.99941L10.1886 7.99779C9.72189 7.73778 9.20737 7.88321 8.96539 8.19392L8.68158 8.55095C8.67651 8.55679 8.65826 8.57131 8.61183 8.58035C8.59474 8.58368 8.57858 8.58525 8.56569 8.58589C7.69154 8.35119 7.13123 7.79252 6.78335 7.27564C6.60696 7.01355 6.4878 6.76568 6.41309 6.58411C6.37584 6.49357 6.34993 6.42023 6.33367 6.3708ZM11.1575 10.965C11.1569 10.9655 11.1554 10.9671 11.1531 10.9694L11.1569 10.9656L11.1575 10.965Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 0.666667,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M13.3136 1.97707C12.9592 1.65504 11.4293 0.69376 8.23708 0.679836C8.23708 0.679836 4.45702 0.431478 2.62206 2.09353C1.60077 3.1019 1.25672 4.60142 1.219 6.43132C1.18127 8.26122 0.985827 11.757 4.33297 12.6869C4.33297 12.6869 4.3198 15.2821 4.31829 15.5102C4.31829 15.6697 4.3436 15.7788 4.43474 15.8013C4.50031 15.8173 4.59854 15.7834 4.68209 15.7001C5.21729 15.1626 6.93073 13.0955 6.93073 13.0955C9.22976 13.2456 11.0589 12.7917 11.2556 12.7274C11.7194 12.5783 14.2281 12.3628 14.6526 8.93338C15.0914 5.39839 14.4914 2.98544 13.3136 1.97707Z",
                stroke:
                  "var(--bloko-icon-color, var(--bloko-icon-color-default))",
                strokeWidth: 0.666667,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        "Viber",
      );
    },
    896206: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M8.70977 12.6666C3.59933 12.6666 0.684458 9.16314 0.563004 3.33331H3.1229C3.20698 7.61226 5.09415 9.42474 6.58898 9.79844V3.33331H8.99949V7.02367C10.4756 6.86484 12.0263 5.18316 12.5495 3.33331H14.96C14.5582 5.61293 12.8766 7.29461 11.6807 7.98597C12.8766 8.54653 14.7919 10.0133 15.5206 12.6666H12.8672C12.2973 10.8915 10.8774 9.51816 8.99949 9.33131V12.6666H8.70977Z",
              fill: "#0077FF",
            }),
          }),
        "Vk",
      );
    },
    473001: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M8.70977 12.6666C3.59933 12.6666 0.684458 9.16314 0.563004 3.33331H3.1229C3.20698 7.61226 5.09415 9.42474 6.58898 9.79844V3.33331H8.99949V7.02367C10.4756 6.86484 12.0263 5.18316 12.5495 3.33331H14.96C14.5582 5.61293 12.8766 7.29461 11.6807 7.98597C12.8766 8.54653 14.7919 10.0133 15.5206 12.6666H12.8672C12.2973 10.8915 10.8774 9.51816 8.99949 9.33131V12.6666H8.70977Z",
              fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
            }),
          }),
        "Vk",
      );
    },
    964151: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M8.00006 1.33331C4.32413 1.33331 1.33342 4.32404 1.33342 7.99998C1.33342 9.14781 1.62994 10.2765 2.19225 11.2724L1.34414 14.2985C1.31632 14.398 1.34327 14.5046 1.41516 14.5785C1.47052 14.6356 1.54588 14.6666 1.62327 14.6666C1.64646 14.6666 1.66994 14.6637 1.69284 14.6582L4.85109 13.8759C5.81543 14.3936 6.90151 14.6666 8.00006 14.6666C11.676 14.6666 14.6667 11.6759 14.6667 7.99998C14.6667 4.32404 11.676 1.33331 8.00006 1.33331ZM11.3537 10.3524C11.2111 10.7472 10.527 11.1075 10.1983 11.1559C9.90324 11.1991 9.52991 11.2177 9.12006 11.089C8.87165 11.0107 8.55281 10.9069 8.14441 10.7327C6.4276 10.0006 5.30645 8.2936 5.22065 8.18085C5.13514 8.0681 4.52181 7.26462 4.52181 6.43302C4.52181 5.60143 4.96384 5.19244 5.12094 5.02317C5.27804 4.85389 5.46326 4.81157 5.57746 4.81157C5.69166 4.81157 5.80558 4.81302 5.90558 4.81766C6.01079 4.82288 6.15195 4.77795 6.29079 5.10781C6.4334 5.44636 6.77572 6.27795 6.81804 6.36288C6.86094 6.44752 6.88934 6.54636 6.83253 6.65911C6.77572 6.77186 6.74731 6.8423 6.66152 6.94114C6.57572 7.03998 6.48181 7.16143 6.4047 7.23737C6.31891 7.32172 6.22992 7.41302 6.32963 7.5823C6.42934 7.75157 6.77282 8.30491 7.2818 8.75302C7.93542 9.32868 8.48702 9.50723 8.65803 9.59186C8.82904 9.6765 8.92904 9.6623 9.02875 9.54955C9.12846 9.4365 9.45658 9.05592 9.57049 8.88694C9.6844 8.71795 9.79861 8.74578 9.95571 8.8023C10.1128 8.85853 10.9543 9.26723 11.1253 9.35186C11.2963 9.4365 11.4105 9.47882 11.4534 9.54926C11.4963 9.6194 11.4963 9.95795 11.3537 10.3524Z",
              fill: "#66D072",
            }),
          }),
        "Whatsapp",
      );
    },
    870754: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M8.00006 1.33331C4.32413 1.33331 1.33342 4.32404 1.33342 7.99998C1.33342 9.14781 1.62994 10.2765 2.19225 11.2724L1.34414 14.2985C1.31632 14.398 1.34327 14.5046 1.41516 14.5785C1.47052 14.6356 1.54588 14.6666 1.62327 14.6666C1.64646 14.6666 1.66994 14.6637 1.69284 14.6582L4.85109 13.8759C5.81543 14.3936 6.90151 14.6666 8.00006 14.6666C11.676 14.6666 14.6667 11.6759 14.6667 7.99998C14.6667 4.32404 11.676 1.33331 8.00006 1.33331ZM11.3537 10.3524C11.2111 10.7472 10.527 11.1075 10.1983 11.1559C9.90324 11.1991 9.52991 11.2177 9.12006 11.089C8.87165 11.0107 8.55281 10.9069 8.14441 10.7327C6.4276 10.0006 5.30645 8.2936 5.22065 8.18085C5.13514 8.0681 4.52181 7.26462 4.52181 6.43302C4.52181 5.60143 4.96384 5.19244 5.12094 5.02317C5.27804 4.85389 5.46326 4.81157 5.57746 4.81157C5.69166 4.81157 5.80558 4.81302 5.90558 4.81766C6.01079 4.82288 6.15195 4.77795 6.29079 5.10781C6.4334 5.44636 6.77572 6.27795 6.81804 6.36288C6.86094 6.44752 6.88934 6.54636 6.83253 6.65911C6.77572 6.77186 6.74731 6.8423 6.66152 6.94114C6.57572 7.03998 6.48181 7.16143 6.4047 7.23737C6.31891 7.32172 6.22992 7.41302 6.32963 7.5823C6.42934 7.75157 6.77282 8.30491 7.2818 8.75302C7.93542 9.32868 8.48702 9.50723 8.65803 9.59186C8.82904 9.6765 8.92904 9.6623 9.02875 9.54955C9.12846 9.4365 9.45658 9.05592 9.57049 8.88694C9.6844 8.71795 9.79861 8.74578 9.95571 8.8023C10.1128 8.85853 10.9543 9.26723 11.1253 9.35186C11.2963 9.4365 11.4105 9.47882 11.4534 9.54926C11.4963 9.6194 11.4963 9.95795 11.3537 10.3524Z",
              fill: "var(--bloko-icon-color, var(--bloko-icon-color-default))",
            }),
          }),
        "Whatsapp",
      );
    },
    999190: function (e, t, o) {
      "use strict";

      o.d(t, {
        Z: () => l,
      });
      var n = o(120710);
      var i = o(343856);
      const l = (0, n.Z)(
        (e) =>
          (0, i.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M10.2471 11.4873L10.2468 11.4874C9.92489 11.5345 9.49578 11.5581 9.0197 11.4086L9.01939 11.4085C8.76671 11.3289 8.43602 11.2213 8.01299 11.0409C7.09624 10.6499 6.35004 10.0049 5.828 9.45521C5.56547 9.1788 5.35608 8.92273 5.20666 8.72835C5.13188 8.63107 5.07207 8.54918 5.02823 8.48802C5.00782 8.45956 4.99086 8.43556 4.97791 8.41724L4.97522 8.41343L4.95921 8.39087C4.95536 8.38548 4.95392 8.38353 4.95392 8.38353L4.95372 8.38327L4.952 8.381C4.90301 8.31641 4.71665 8.07074 4.54126 7.72972C4.36622 7.38939 4.18681 6.92518 4.18681 6.43302C4.18681 5.51957 4.65426 5.02805 4.84242 4.8302C4.85466 4.81733 4.86572 4.8057 4.8754 4.79528C5.10689 4.54585 5.38759 4.47657 5.57746 4.47657C5.69374 4.47657 5.81355 4.47803 5.9211 4.48302L5.92217 4.48307C5.89271 4.48161 6.08207 4.46979 6.22704 4.53733C6.40045 4.61811 6.51499 4.77694 6.59956 4.97784C6.64785 5.0925 6.719 5.26357 6.79339 5.44242C6.82932 5.52882 6.86601 5.61704 6.90125 5.70159C6.95557 5.83193 7.00649 5.95372 7.04638 6.04803C7.06636 6.09525 7.08329 6.13492 7.09637 6.16503L7.11232 6.20129C7.1156 6.2086 7.11731 6.21224 7.11781 6.21332C7.11786 6.21342 7.1179 6.2135 7.11792 6.21356C7.11793 6.21356 7.11793 6.21356 7.11793 6.21356C7.11801 6.21374 7.11799 6.2137 7.11787 6.21347L6.81804 6.36288C6.86094 6.44752 6.88934 6.54636 6.83253 6.65911C6.82415 6.67573 6.8164 6.69144 6.80898 6.70645C6.76609 6.79325 6.73466 6.85687 6.66152 6.94114C6.63261 6.97444 6.60279 7.0103 6.57299 7.04613C6.51435 7.11664 6.45583 7.18701 6.4047 7.23737L10.2471 11.4873ZM10.2471 11.4873C10.4736 11.454 10.7716 11.3274 11.0249 11.1672M10.2471 11.4873L11.0249 11.1672M10.0691 8.48708C10.0689 8.48702 10.0688 8.48696 10.0686 8.48689L9.95571 8.8023L10.0691 8.48708ZM10.0691 8.48708C10.1684 8.52274 10.4379 8.64892 10.6794 8.76401C10.932 8.88437 11.1866 9.00844 11.2739 9.05162C11.2966 9.06287 11.3229 9.07548 11.3501 9.08852C11.402 9.11334 11.4571 9.13974 11.497 9.16136C11.5583 9.19458 11.668 9.25789 11.7392 9.37448L10.0691 8.48708ZM11.0249 11.1672C11.2696 11.0124 11.5579 10.7729 11.6687 10.4663L11.0249 11.1672ZM2.51483 11.3628L2.55237 11.2289L2.48397 11.1077C1.95009 10.1622 1.66842 9.09022 1.66842 7.99998C1.66842 4.50905 4.50915 1.66831 8.00006 1.66831C11.491 1.66831 14.3317 4.50905 14.3317 7.99998C14.3317 11.4909 11.491 14.3316 8.00006 14.3316C6.9567 14.3316 5.92506 14.0722 5.00953 13.5808L4.89582 13.5197L4.77054 13.5507L1.6876 14.3144L2.51483 11.3628ZM1.34414 14.2985C1.31632 14.398 1.34327 14.5046 1.41516 14.5785L1.34414 14.2985Z",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 0.67,
            }),
          }),
        "Whatsapp",
      );
    },
    760607: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => w,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(120710);
      var r = o(343856);
      const s = (0, l.Z)(
        (e) =>
          (0, r.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M3.3335 8H12.6668",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 1.33333,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        "Minus",
      );
      var a = o(389057);
      var c = o(607621);
      var d = o(155258);
      var b = o.n(d);
      var u = o(125702);
      var h = o(891914);
      var p = o.n(h);
      var k = o(845807);
      var g = o.n(k);
      var m = o(334036);
      var _ = o.n(m);
      const f = ".Bloko-IncrementalNumericInput-Minus";
      const v = ".Bloko-IncrementalNumericInput-Plus";
      const C = ".Bloko-IncrementalNumericInput-InputContainer";
      const w = g().build({
        defaults: {
          min: 0,
          max: null,
          step: 1,
        },
        create(e, t) {
          let o;
          let n;
          const l = i()(e);
          const r = i()(_().render());
          const d = r.find(f);
          const h = r.find(v);
          let k = parseInt(l.val(), 10) || 0;
          let m = 0;
          function w(e) {
            const o = e * t.step;
            let n = (k || 0) + o;
            if (t.min !== null) {
              n = Math.max(t.min, n);
            }
            if (t.max !== null) {
              n = Math.min(t.max, n);
            }
            (function (e) {
              if (e !== k) {
                k = e;
                l.val(k);
                S();
                T();
                l.trigger("change");
              }
            })(n);
          }
          function x(e, t) {
            (function (e) {
              const t = e.timeStamp - m;
              m = e.timeStamp;
              if (t < 300 && e.originalEvent.touches.length === 1) {
                e.preventDefault();
              }
            })(t);
            let o = false;
            const n = t.originalEvent.touches[0].screenX;
            const l = t.originalEvent.touches[0].screenY;
            function r(e) {
              const t = e.originalEvent.touches[0];
              const i = Math.sqrt(
                Math.pow(t.screenX - n, 2) + Math.pow(t.screenY - l, 2),
              );
              o = i > 5;
            }
            i()(document).one("touchend", () => {
              i()(document).off("touchmove", r);
              o = true;
            });
            i()(document).on("touchmove", r);
            setTimeout(() => {
              if (!o) {
                y(e, t);
              }
              i()(document).off("touchmove", r);
            }, 200);
          }
          function y(e, t) {
            if (t.button === p().BUTTON_LEFT || t.type === "touchstart") {
              clearTimeout(o);
              clearTimeout(n);
              i()(document).one("mouseup touchend", () => {
                clearTimeout(o);
                clearTimeout(n);
              });
              n = setTimeout(() => {
                o = setInterval(w.bind(null, e), 100);
              }, 300);
            }
          }
          function S() {
            d.prop("disabled", t.min !== null && k <= t.min);
            h.prop("disabled", t.max !== null && k >= t.max);
          }
          function T() {
            const e = l.val();
            const o =
              (t.min === null || e >= t.min) && (t.max === null || e <= t.max);
            l.trigger("Bloko-IncrementalNumericInput-Validation", {
              isValid: o,
              min: t.min,
              max: t.max,
              value: e,
            });
          }
          g().make(
            c.Z,
            i()(".Bloko-IncrementalNumericInput-MinusIcon", d).get(0),
            {
              IconComponent: s,
              iconProps: {},
            },
          );
          g().make(
            c.Z,
            i()(".Bloko-IncrementalNumericInput-PlusIcon", h).get(0),
            {
              IconComponent: a.Z,
              iconProps: {},
            },
          );
          r.insertAfter(l);
          l.appendTo(r.find(C));
          g().make(b(), l[0], {
            decimalLength: 0,
          });
          l.on("input change", () => {
            const e = parseInt(l.val(), 10);
            if (e !== k) {
              k = e;
              T();
              S();
            }
          });
          l.on("keydown", (e) => {
            if (
              [u.KeyCode.ArrowUp, u.KeyCode.ArrowDown].indexOf(e.keyCode) !== -1
            ) {
              e.preventDefault();
              w(e.keyCode === u.KeyCode.ArrowUp ? 1 : -1);
            }
          });
          d.on("mousedown", y.bind(null, -1));
          d.on("click", w.bind(null, -1));
          h.on("mousedown", y.bind(null, 1));
          h.on("click", w.bind(null, 1));
          d.on("touchstart", x.bind(null, -1));
          h.on("touchstart", x.bind(null, 1));
          S();
        },
        componentName: "bloko/blocks/incrementalNumericInput",
      });
    },
    514113: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        InformationKind: () => c,
        default: () => b,
      });
      var n = o(882177);
      var i = o.n(n);
      const l = "bloko-information";
      const r = "bloko-information_success";
      const s = "bloko-information_warning";
      var a = o(343856);
      let c;
      var d;
      (d = c ||= {}).Success = "success";
      d.Warning = "warning";
      const b = (e) => {
        let { kind: t, ...o } = e;
        return (0, a.jsx)("div", {
          "data-qa": "bloko-information",
          ...o,
          className: i()(l, {
            [r]: t === c.Success,
            [s]: t === c.Warning,
          }),
        });
      };
    },
    151556: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => c,
      });
      var n = o(585614);
      var i = o(876270);
      var l = o(9380);
      var r = o(607621);
      var s = o(845807);
      var a = o.n(s);
      const c = a().build({
        create: function (e) {
          const t = e.querySelector(".Bloko-InputPassword-Input");
          const o = e.querySelector(".Bloko-InputPassword-Toggle");
          const s = e.querySelector(".Bloko-InputPassword-Icon");
          let c = false;
          const d = {
            initial: n.Z.Gray50,
            highlighted: n.Z.Gray60,
          };
          const b = a().make(r.Z, s, {
            IconComponent: c ? i.Z : l.Z,
            iconProps: d,
          });
          function u(e, o) {
            const n = e ? "text" : "password";
            if (!o) {
              b.change({
                iconProps: {
                  ...d,
                  crossed: e,
                },
              });
            }
            t.setAttribute("type", n);
          }
          u(c, true);
          o.addEventListener("click", () => {
            c = !c;
            u(c);
          });
        },
        componentName: "blocks/inputText/InputPasswordClassic",
      });
    },
    221274: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        InputIconPosition: () => C,
        InputScale: () => f,
        InputType: () => m,
        default: () => x,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(882177);
      var r = o.n(l);
      var s = o(804203);
      var a = o(806537);
      var c = o(487153);
      var d = o(585614);
      var b = o(390259);
      var u = o.n(b);
      var h = o(953705);
      var p = o.n(h);
      const k = {
        "bloko-input-text": "bloko-input-text",
        "bloko-input-text_invalid": "bloko-input-text_invalid",
        "focus-visible": "focus-visible",
        "bloko-input-text-wrapper_sized": "bloko-input-text-wrapper_sized",
        "bloko-input-text_sized": "bloko-input-text_sized",
        "bloko-input-text_scale-small": "bloko-input-text_scale-small",
        "bloko-input-text_scale-large": "bloko-input-text_scale-large",
        "bloko-input-text_name": "bloko-input-text_name",
        "bloko-input-text_light": "bloko-input-text_light",
        "bloko-input-text-wrapper": "bloko-input-text-wrapper",
        "bloko-icon": "bloko-icon",
        "bloko-icon-react-root": "bloko-icon-react-root",
        "bloko-icon-link": "bloko-icon-link",
        "bloko-icon-dynamic": "bloko-icon-dynamic",
        "bloko-input-text-wrapper_icon-left":
          "bloko-input-text-wrapper_icon-left",
        "bloko-input-text-wrapper_icon-right":
          "bloko-input-text-wrapper_icon-right",
        "bloko-input-text__prefix": "bloko-input-text__prefix",
        "bloko-input-text__prefix_small": "bloko-input-text__prefix_small",
        "bloko-input-text__prefix_large": "bloko-input-text__prefix_large",
        "bloko-input-text__prefix_with-icon-left":
          "bloko-input-text__prefix_with-icon-left",
        "bloko-input-text__inner-wrapper": "bloko-input-text__inner-wrapper",
        "bloko-input__postfix-container": "bloko-input__postfix-container",
        "bloko-input__postfix-container_small":
          "bloko-input__postfix-container_small",
        "bloko-input__postfix-container_large":
          "bloko-input__postfix-container_large",
        "bloko-input__postfix-container_with-icon-left":
          "bloko-input__postfix-container_with-icon-left",
        "bloko-input__postfix-container_with-icon-right":
          "bloko-input__postfix-container_with-icon-right",
        "bloko-input__postfix-text": "bloko-input__postfix-text",
        "bloko-input__value-ghost": "bloko-input__value-ghost",
      };
      var g = o(343856);
      let m;
      var _;
      let f;
      var v;
      let C;
      var w;
      (_ = m ||= {}).Text = "text";
      _.Password = "password";
      _.Number = "number";
      _.Search = "search";
      _.Date = "date";
      _.Time = "time";
      _.Month = "month";
      _.Email = "email";
      _.Tel = "tel";
      _.Url = "url";
      (v = f ||= {}).Small = "small";
      v.Normal = "normal";
      v.Large = "large";
      (w = C ||= {}).Left = "left";
      w.Right = "right";
      const x = i().forwardRef((e, t) => {
        var o;
        const {
          scale: i,
          size: l,
          capitalize: b,
          invalid: h,
          source: _,
          type: f = m.Text,
          defaultValue: v = "",
          value: w,
          onChange: x,
          icon: y = null,
          iconPosition: S = C.Right,
          prefix: T = null,
          postfix: E = null,
          showClearButton: L = false,
          showLoading: I = false,
          disabled: B = false,
          light: M = false,
          innerRightElement: N,
          ...P
        } = e;
        const O = w !== undefined;
        const [D, Z] = (0, n.useState)(v);
        const A = O ? w : D;
        const R = (0, n.useCallback)(
          (e) => {
            if (!O) {
              Z(e.target.value);
            }
            if (x != null) {
              x(e.target.value, {
                element: e.target,
                event: e,
              });
            }
          },
          [O, x],
        );
        const j = (0, n.useRef)();
        const $ = (0, n.useCallback)(
          (e) => {
            j.current = e;
            ((e, t) => {
              if (t !== null) {
                if (typeof t == "function") {
                  t(e);
                }
                if ("current" in t) {
                  t.current = e;
                }
              }
            })(e, t);
          },
          [t],
        );
        const [F, H] = (0, n.useState)(0);
        const W = (0, n.useCallback)(
          (e) => {
            H(e && N ? e.offsetWidth : 0);
          },
          [N],
        );
        const q = p()();
        const [V, z] = (0, n.useState)(0);
        const U = (0, n.useCallback)(
          (e) => {
            z(e && T ? e.offsetWidth : 0);
          },
          [T],
        );
        const Y = (0, n.useCallback)(() => {
          if (j.current) {
            j.current.focus();
            if (!O) {
              Z("");
            }
            if (x != null) {
              x("", {
                element: j.current,
              });
            }
          }
        }, [O, x]);
        const G = (0, n.useMemo)(
          () =>
            (0, g.jsx)(s.Z, {
              children: (0, g.jsx)(a.Z, {
                Element: "button",
                title: "Clear",
                onClick: Y,
                "data-qa": "bloko-input-clear-icon",
                children: (0, g.jsx)(c.Z, {
                  initial: d.Z.Gray50,
                  highlighted: d.Z.Gray60,
                }),
              }),
            }),
          [Y],
        );
        const K = I ? (0, g.jsx)(u(), {}) : null;
        const X = L && A.trim().length > 0 ? G : null;
        const Q = K || y || X;
        const J =
          !q &&
          N &&
          (0, g.jsx)("div", {
            ref: W,
            className: r()(k["bloko-input-text__inner-wrapper"]),
            children: N,
          });
        const ee = {
          paddingLeft: V || undefined,
          paddingRight: F || undefined,
        };
        const te = (0, n.useCallback)(() => {
          if (j.current) {
            j.current.select();
          }
        }, []);
        return (0, g.jsxs)("fieldset", {
          className: r()(k["bloko-input-text-wrapper"], {
            [k["bloko-input-text-wrapper_icon-left"]]: Q && S === C.Left,
            [k["bloko-input-text-wrapper_icon-right"]]: Q && S === C.Right,
            [k["bloko-input-text-wrapper_sized"]]: l,
          }),
          source: _,
          disabled: B,
          children: [
            !q &&
              T &&
              (0, g.jsx)("label", {
                className: r()(k["bloko-input-text__prefix"], {
                  [k[`bloko-input-text__prefix_${i}`]]: i,
                  [k["bloko-input-text__prefix_with-icon-left"]]:
                    y && S === C.Left,
                }),
                ref: U,
                onClick: te,
                "data-qa": "bloko-input-prefix",
                children: T,
              }),
            (0, g.jsx)("input", {
              ...P,
              ref: $,
              type: f,
              size: l,
              style: ee,
              suppressHydrationWarning: true,
              className: r()(k["bloko-input-text"], {
                [k[`bloko-input-text_scale-${i}`]]: i,
                [k["bloko-input-text_sized"]]: l,
                [k["bloko-input-text_name"]]: b,
                [k["bloko-input-text_invalid"]]: h,
                [k["bloko-input-text_light"]]: M,
                "focus-visible":
                  (o = j.current) === null || o === undefined
                    ? undefined
                    : o.classList.contains("focus-visible"),
              }),
              value: A,
              onChange: R,
              disabled: B,
              source: _,
            }),
            !q &&
              A &&
              E &&
              (0, g.jsx)("div", {
                className: r()(k["bloko-input__postfix-container"], {
                  [k[`bloko-input__postfix-container_with-icon-${S}`]]: !!y,
                  [k[`bloko-input__postfix-container_${i}`]]: i,
                }),
                style: ee,
                children: (0, g.jsxs)("div", {
                  className: k["bloko-input__postfix-text"],
                  children: [
                    (0, g.jsx)("span", {
                      className: k["bloko-input__value-ghost"],
                      children: A,
                    }),
                    "\xA0",
                    E,
                  ],
                }),
              }),
            Q || J,
          ],
        });
      });
    },
    953519: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(585614);
      var r = o(804203);
      var s = o(806537);
      var a = o(876270);
      var c = o(9380);
      var d = o(17666);
      var b = o.n(d);
      var u = o(343856);
      const h = i().forwardRef((e, t) => {
        let { onToggle: o, ...i } = e;
        const [h, p] = (0, n.useState)(false);
        const k = h ? d.InputType.Text : d.InputType.Password;
        const g = (0, n.useCallback)(() => {
          const e = !h;
          p(e);
          if (o != null) {
            o(e);
          }
        }, [h, o]);
        const m = (0, n.useMemo)(
          () => ({
            initial: l.Z.Gray50,
            highlighted: l.Z.Gray60,
            "aria-label": "Показать пароль",
          }),
          [],
        );
        const _ = (0, n.useMemo)(
          () =>
            (0, u.jsx)(r.Z, {
              "data-qa": "bloko-input-password-icon",
              onClick: g,
              children: (0, u.jsx)(s.Z, {
                Element: "button",
                children: h
                  ? (0, u.jsx)(a.Z, {
                      ...m,
                    })
                  : (0, u.jsx)(c.Z, {
                      ...m,
                    }),
              }),
            }),
          [g, m, h],
        );
        return (0, u.jsx)(b(), {
          type: k,
          ref: t,
          icon: _,
          "aria-label": "Введите пароль",
          ...i,
        });
      });
    },
    929119: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => m,
        LinkIconPosition: () => p,
        LinkAppearance: () => u,
        LinkKind: () => d,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(882177);
      var r = o.n(l);
      var s = o(804203);
      const a = {
        "bloko-link": "bloko-link",
        "focus-visible": "focus-visible",
        "bloko-link_disable-visited": "bloko-link_disable-visited",
        "bloko-link_underlined": "bloko-link_underlined",
        "bloko-link__content": "bloko-link__content",
        "bloko-link_pseudo": "bloko-link_pseudo",
        "bloko-link_kind-success": "bloko-link_kind-success",
        "bloko-link_kind-inversed-secondary":
          "bloko-link_kind-inversed-secondary",
        "bloko-link_kind-secondary": "bloko-link_kind-secondary",
        "bloko-link_kind-tertiary": "bloko-link_kind-tertiary",
        "bloko-link_kind-warning": "bloko-link_kind-warning",
        "bloko-link_kind-inversed": "bloko-link_kind-inversed",
        "bloko-link_loading": "bloko-link_loading",
        "bloko-link_with-icon": "bloko-link_with-icon",
        "bloko-icon": "bloko-icon",
      };
      var c = o(343856);
      let d;
      var b;
      let u;
      var h;
      let p;
      var k;
      (b = d ||= {}).Success = "success";
      b.Secondary = "secondary";
      b.Tertiary = "tertiary";
      b.Warning = "warning";
      b.Inversed = "inversed";
      b.InversedSecondary = "inversed-secondary";
      (h = u ||= {}).Underlined = "underlined";
      h.Pseudo = "pseudo";
      h.Loading = "loading";
      (k = p ||= {}).Left = "left";
      k.Right = "right";
      const g = (e, t) => {
        let {
          icon: o,
          iconPosition: l,
          disableVisited: d,
          appearance: b,
          kind: h,
          Element: k,
          children: g,
          ...m
        } = e;
        let _ = g;
        let f = n.Fragment;
        const v = (b === u.Underlined || b === undefined) && "href" in m;
        if (o) {
          f = b !== u.Loading ? s.Z : n.Fragment;
          const e = (0, c.jsx)("span", {
            className: a["bloko-link__content"],
            children: g,
          });
          _ =
            l === p.Left
              ? (0, c.jsxs)(c.Fragment, {
                  children: [o, " ", e],
                })
              : (0, c.jsxs)(c.Fragment, {
                  children: [e, " ", o],
                });
        }
        const C = i().useCallback(
          function (e, n = {}) {
            return (0, c.jsx)(f, {
              children: (0, c.jsx)(e, {
                ...n,
                ...m,
                className: r()(a["bloko-link"], {
                  [a[`bloko-link_kind-${h}`]]: h,
                  [a["bloko-link_with-icon"]]: o,
                  [a[`bloko-link_${b}`]]: b,
                  [a["bloko-link_disable-visited"]]: d,
                }),
                ref: t,
                children: _,
              }),
            });
          },
          [f, m, h, o, b, d, t, _],
        );
        if (k === undefined) {
          if (v) {
            return C("a");
          } else {
            return C("button", {
              type: "button",
            });
          }
        } else {
          return C(k);
        }
      };
      const m = i().forwardRef(g);
    },
    580681: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        LoadingScale: () => a,
        default: () => d,
        LoadingColor: () => i.Z,
      });
      var n = o(317177);
      var i = o(585614);
      var l = o(120710);
      var r = o(343856);
      const s = (0, l.Z)(
        (e) =>
          (0, r.jsx)("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3",
              stroke:
                "var(--bloko-icon-color, var(--bloko-icon-color-default))",
              strokeWidth: 2,
              strokeLinecap: "round",
            }),
          }),
        "Loader",
      );
      let a;
      var c;
      (c = a ||= {}).Small = "Small";
      c.Medium = "Medium";
      const d = (e) => {
        let { scale: t = a.Small, ...o } = e;
        if (t === a.Small) {
          return (0, r.jsx)(n.Z, {
            initial: i.Z.Blue60,
            scale: t,
            ...o,
          });
        } else {
          return (0, r.jsx)(s, {
            initial: i.Z.Blue60,
            scale: t,
            ...o,
          });
        }
      };
    },
    944694: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      const n = "bloko-metro-pin";
      var i = o(343856);
      const l = (e) => {
        let { source: t, color: o = "#ffffff" } = e;
        return (0, i.jsx)("span", {
          className: n,
          source: t,
          style: {
            backgroundColor: o,
          },
        });
      };
    },
    250087: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(825382);
      var l = o.n(i);
      var r = o(343856);
      const s = (e) => {
        let { containerRef: t, handleClose: o, handleClick: s } = e;
        const a = (0, n.useRef)(0);
        const c = window.innerHeight;
        const d = (0, n.useCallback)(
          (e) => {
            let { distance: o } = e;
            if (!!t.current && !(o < 0)) {
              a.current ||= t.current.offsetHeight;
              t.current.style.transform = `translate3d(0, ${o}px, 0)`;
            }
          },
          [t],
        );
        const b = (0, n.useCallback)(() => {
          if (t.current) {
            t.current.style.transition = "all 0.2s";
            t.current.style.transform = "translate3d(0, 0, 0)";
            setTimeout(() => {
              if (t.current) {
                t.current.style.transition = "";
                a.current = 0;
              }
            }, 200);
          }
        }, [t]);
        const u = (0, n.useCallback)(
          (e) => {
            let { distance: n } = e;
            if (!t.current || n < 0) {
              return;
            }
            const i = c - a.current;
            a.current = 0;
            t.current.style.transform = "translate3d(0, 0, 0)";
            t.current.style.top = `${i + n}px`;
            o();
          },
          [c, t, o],
        );
        return (0, r.jsx)(l(), {
          direction: i.SwipeDirection.Vertical,
          onSwipeMove: d,
          onSwipePrevent: b,
          onSwipeEnd: u,
          minSwipePercent: 70,
          children: (e) => {
            let { swipeContainerProps: t } = e;
            return (0, r.jsx)("div", {
              className: "bloko-modal-swipe",
              onClick: s,
              ...t,
            });
          },
        });
      };
    },
    412572: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(951390);
      var r = o(343856);
      const s = (e) => {
        let { visible: t = false, ...o } = e;
        return (0, r.jsx)("div", {
          ...o,
          className: i()(l.Z["bloko-modal-error"], {
            [l.Z["bloko-modal-error_hidden"]]: !t,
          }),
        });
      };
    },
    563944: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => u,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(7367);
      var s = o(350647);
      var a = o.n(s);
      var c = o(38729);
      var d = o(951390);
      var b = o(343856);
      const u = (e) => {
        let { children: t, ...o } = e;
        const [i, s] = (0, n.useState)(false);
        const u = (0, n.useRef)(null);
        const { isBottomSheet: h, modalContainerRef: p } = (0, n.useContext)(
          c.BottomSheetContext,
        );
        const k = (0, n.useCallback)(
          (e, t) => {
            if (!h || p == null || !p.current) {
              e();
              return;
            }
            const o = p.current.style.top;
            p.current.style.top = t;
            e();
            p.current.style.top = o;
          },
          [h, p],
        );
        const g = (0, n.useCallback)(
          () =>
            k(() => {
              if (!u.current) {
                return;
              }
              const e =
                Math.abs(
                  u.current.scrollTop +
                    u.current.offsetHeight -
                    u.current.scrollHeight,
                ) >= 1;
              s(e);
            }, "0px"),
          [k],
        );
        (0, n.useEffect)(() => {
          g();
        }, [g]);
        a()(g);
        (0, n.useEffect)(() => {
          k(() => {
            if (h && u.current && p != null && p.current) {
              u.current.style.display = "none";
              const e = window.innerHeight;
              const t = p.current.offsetHeight;
              const o = e - c.BOTTOM_SHEET_TOP_SPACE - t;
              u.current.style.removeProperty("display");
              u.current.style.maxHeight = `${o}px`;
            }
          }, "auto");
        }, [p, h, k]);
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsxs)("div", {
              ...o,
              className: l()(
                d.Z["bloko-modal-content"],
                d.Z["bloko-modal-content_no-scroll"],
              ),
              children: [
                (0, b.jsx)("div", {
                  className: d.Z["bloko-modal-content-scrollable"],
                  ref: u,
                  onScroll: g,
                  children: (0, b.jsx)("div", {
                    className: d.Z["bloko-modal-content-scrollable-children"],
                    children: t,
                  }),
                }),
                !h &&
                  (0, b.jsx)("div", {
                    className: l()(d.Z["bloko-modal-content-fader"], {
                      [d.Z["bloko-modal-content-fader_visible"]]: i,
                    }),
                  }),
              ],
            }),
            (0, b.jsx)("div", {
              className: l()(d.Z["bloko-modal-content-fader-bottom"], {
                [d.Z["bloko-modal-content-fader-bottom_visible"]]: i,
              }),
              children: h
                ? (0, b.jsx)("div", {
                    className: l()(d.Z["bloko-modal-bottom-sheet-fader"], {
                      [d.Z["bloko-modal-bottom-sheet-fader_visible"]]: i,
                    }),
                  })
                : (0, b.jsx)(r.Z, {}),
            }),
          ],
        });
      };
    },
    273153: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(951390);
      var r = o(343856);
      const s = (e) => {
        let { alignmentLeft: t, source: o, ...n } = e;
        return (0, r.jsx)("div", {
          ...n,
          className: i()(l.Z["bloko-modal-footer"], {
            [l.Z["bloko-modal-footer_left"]]: t,
          }),
          source: o,
        });
      };
    },
    53045: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(951390);
      var r = o(343856);
      const s = (e) => {
        let { outlined: t = false, source: o, ...n } = e;
        return (0, r.jsx)("div", {
          ...n,
          className: i()(l.Z["bloko-modal-header"], {
            [l.Z["bloko-modal-header_outlined"]]: t,
          }),
          source: o,
        });
      };
    },
    656565: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(951390);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "span", source: o, ...l } = e;
        return (0, i.jsx)(t, {
          ...l,
          className: n.Z["bloko-modal-title"],
          source: o,
        });
      };
    },
    874762: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        BOTTOM_SHEET_TOP_SPACE: () => i,
        BottomSheetContext: () => r,
        BottomSheetContextDefaultValue: () => l,
        animationHelperFactory: () => c,
      });
      var n = o(394280);
      const i = 12;
      const l = {
        isBottomSheet: false,
        modalContainerRef: null,
      };
      const r = (0, n.createContext)(l);
      const s = (e, t) => {
        const o = window.innerHeight;
        e.clientHeight = o;
        const n = t.scrollHeight;
        e.top = o - n;
      };
      const a = (e, t) => {
        if (e) {
          e.style.top = t;
        }
      };
      const c = (e) => {
        const t = {
          clientHeight: 0,
          top: 0,
        };
        return {
          beforeOpen: (o) => {
            if (o && e) {
              a(o, "auto");
              s(t, o);
              a(o, `${t.clientHeight}px`);
            }
          },
          open: (o) => {
            if (o && e) {
              a(o, t.top > 0 ? `${t.top}px` : `${i}px`);
            }
          },
          afterOpen: (t) => {
            if (t && e) {
              a(t, "auto");
            }
          },
          beforeClose: (o) => {
            if (o && e) {
              s(t, o);
              a(o, t.top > 0 ? `${t.top}px` : `${i}px`);
            }
          },
          close: (o) => {
            if (o && e) {
              a(o, `${t.clientHeight}px`);
            }
          },
          afterClose: (t) => {
            if (t && e) {
              t.style.removeProperty("top");
            }
          },
        };
      };
    },
    177999: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ModalContent: () => w.a,
        ModalError: () => v.a,
        ModalFooter: () => y.a,
        ModalHeader: () => T.a,
        ModalTitle: () => L.a,
        default: () => P,
      });
      var n = o(394280);
      var i = o(727158);
      var l = o.n(i);
      var r = o(581262);
      var s = o(882177);
      var a = o.n(s);
      var c = o(125702);
      var d = o(21119);
      var b = o.n(d);
      var u = o(953705);
      var h = o.n(u);
      var p = o(549155);
      var k = o(904330);
      var g = o.n(k);
      var m = o(169855);
      var _ = o.n(m);
      var f = o(590917);
      var v = o.n(f);
      var C = o(662739);
      var w = o.n(C);
      var x = o(716387);
      var y = o.n(x);
      var S = o(788162);
      var T = o.n(S);
      var E = o(8814);
      var L = o.n(E);
      var I = o(38729);
      var B = o(951390);
      var M = o(343856);
      const N = (e) => {
        let {
          onClose: t,
          children: o,
          source: i,
          visible: s = false,
          closeButtonShow: d = true,
          backgroundClick: u = true,
          escapePress: k = true,
          host: m,
          useBottomSheet: f = false,
          ...v
        } = e;
        const C = (0, n.useRef)(true);
        const w = (0, n.useRef)(null);
        const x = (0, n.useRef)(null);
        const y = (0, n.useRef)(true);
        const S = h()();
        const T = b()();
        const E = f && T === p.Breakpoint.XS;
        const L = (0, n.useMemo)(() => (0, I.animationHelperFactory)(E), [E]);
        const N = (0, n.useCallback)((e) => {
          e.stopPropagation();
          C.current = true;
        }, []);
        const P = (0, n.useCallback)(() => {
          C.current = false;
        }, []);
        const O = (0, n.useCallback)(() => {
          if (C.current) {
            t();
          } else {
            C.current = true;
          }
        }, [t]);
        const D = (0, n.useCallback)(
          (e) => {
            if (s && e.keyCode === c.KeyCode.ESC) {
              t();
            }
          },
          [t, s],
        );
        const Z = () => {
          if (!y.current) {
            g().enableScroll();
            y.current = true;
          }
        };
        (0, n.useEffect)(() => {
          if (k) {
            document.addEventListener("keydown", D);
          }
          return () => {
            if (k) {
              document.removeEventListener("keydown", D);
            }
          };
        }, [k, D]);
        (0, n.useEffect)(() => Z, []);
        if (S) {
          return null;
        } else {
          return l().createPortal(
            (0, M.jsx)(I.BottomSheetContext.Provider, {
              value: {
                isBottomSheet: E,
                modalContainerRef: w,
              },
              children: (0, M.jsx)(r.Z, {
                appear: true,
                in: s,
                addEndListener: (e) => {
                  if (E) {
                    var t;
                    const o = (t) => {
                      if (t.propertyName === "top" && w.current) {
                        w.current.removeEventListener("transitionend", o);
                        e();
                      }
                    };
                    if ((t = w.current) !== null && t !== undefined) {
                      t.addEventListener("transitionend", o, false);
                    }
                  } else {
                    var o;
                    if ((o = x.current) !== null && o !== undefined) {
                      o.addEventListener("transitionend", e);
                    }
                  }
                },
                mountOnEnter: true,
                unmountOnExit: true,
                onEnter: () => L.beforeOpen(w.current),
                onEntering: () => L.open(w.current),
                onEntered: () => {
                  g().disableScroll();
                  y.current = false;
                  L.afterOpen(w.current);
                },
                onExit: () => L.beforeClose(w.current),
                onExiting: () => {
                  Z();
                  L.close(w.current);
                },
                onExited: () => L.afterClose(w.current),
                classNames: {
                  appear: B.Z["bloko-modal-overlay"],
                  appearActive: `${B.Z["bloko-modal-overlay"]} ${B.Z["bloko-modal-overlay_visible"]}`,
                  enterActive: `${B.Z["bloko-modal-overlay"]} ${B.Z["bloko-modal-overlay_visible"]}`,
                  enterDone: `${B.Z["bloko-modal-overlay"]} ${B.Z["bloko-modal-overlay_visible"]}`,
                  exit: `${a()(B.Z["bloko-modal-overlay"], {
                    [B.Z["bloko-modal-overlay__bottom-sheet"]]: f,
                  })}`,
                  exitActive: B.Z["bloko-modal-overlay"],
                },
                nodeRef: x,
                children: (0, M.jsx)("div", {
                  source: i,
                  onClick: u ? O : undefined,
                  ref: x,
                  children: (0, M.jsxs)("div", {
                    className: a()(
                      B.Z["bloko-modal-container"],
                      B.Z["bloko-modal-container_visible"],
                      {
                        [B.Z["bloko-modal-container_bottom-sheet"]]: f,
                      },
                    ),
                    "data-qa": "bloko-modal",
                    ref: w,
                    children: [
                      f &&
                        (0, M.jsx)(_(), {
                          containerRef: w,
                          handleClose: O,
                          handleClick: N,
                        }),
                      (0, M.jsx)("div", {
                        ...v,
                        onMouseDown: P,
                        onMouseUp: P,
                        className: B.Z["bloko-modal"],
                        onClick: N,
                        onTouchMove: N,
                        children: o,
                      }),
                      d &&
                        (0, M.jsx)("div", {
                          className: B.Z["bloko-modal-close-button"],
                          "data-qa": "bloko-modal-close",
                        }),
                    ],
                  }),
                }),
              }),
            }),
            m || document.body,
          );
        }
      };
      const P = (0, n.memo)(N);
    },
    501227: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => y,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(125702);
      var r = o(845807);
      var s = o.n(r);
      var a = o(456486);
      var c = o.n(a);
      var d = o(904330);
      var b = o.n(d);
      var u = o(385539);
      var h = o.n(u);
      var p = o(299514);
      var k = o.n(p);
      var g = o(504481);
      var m = o.n(g);
      const _ = "modal";
      const f = {
        visible: "bloko-modal-overlay_visible",
      };
      const v = {
        visible: "bloko-modal-container_visible",
      };
      const C = {
        hidden: "bloko-modal-close-button_hidden",
      };
      const w = i()(document);
      const x = i()("body");
      const y = s().build({
        defaults: {
          closeBy: {
            closeButtonClick: true,
            backgroundClick: true,
            escapePress: true,
          },
        },
        create: function (e, t) {
          const o = i()(e);
          const n = o.contents();
          let r;
          let s;
          let a;
          let d;
          let u = true;
          const p = c().extend({
            show: function () {
              if (g()) {
                return;
              }
              s = i()(m().render());
              s.appendTo(x);
              r = i()(k().render());
              d = i()(".Bloko-Modal-CloseButton", r);
              if (!t.closeBy.closeButtonClick) {
                d.addClass(C.hidden);
              }
              a = r.find('[data-attach="modal"]');
              (function () {
                r.on(`click.${_}`, y);
                if (t.closeBy.escapePress) {
                  w.on(`keydown.${_}`, S);
                }
                a.on(`touchmove.${_}`, (e) => {
                  e.stopPropagation();
                });
              })();
              b().disableScroll();
              a.empty().append(n);
              s.addClass(f.visible);
              r.appendTo(x);
              h()(r.get(0), () => {
                p._trigger("showed");
              });
              r.addClass(v.visible);
              a.on("mouseup mousedown", T);
            },
            hide: E,
          });
          function g() {
            return r && r.is(":visible");
          }
          function y(e) {
            const o = e.target;
            const n = w.find(o).length > 0;
            const l = a.find(o).length > 0;
            const r = a.is(o);
            const s = d.is(o);
            const c = i()(o).is(`[data-attach="${_}-hide"]`);
            if (n) {
              if (t.closeBy.closeButtonClick && s && u) {
                E();
              } else if (!t.closeBy.backgroundClick || l || r || !u) {
                if (c) {
                  E();
                }
                u = true;
              } else {
                E();
              }
            }
          }
          function S(e) {
            if (e.which === l.KeyCode.ESC) {
              E();
            }
          }
          function T() {
            u = false;
          }
          function E() {
            if (!g()) {
              return;
            }
            b().enableScroll();
            a.off(`touchmove.${_}`);
            n.off(`touchmove.${_}`);
            w.off(`keydown.${_}`);
            a.off(`touchmove.${_}`);
            a.off("mouseup mousedown", T);
            h()(r.get(0), function () {
              s.detach();
              r.detach();
              o.append(n);
              p._trigger("hid");
            });
            s.removeClass(f.visible);
            r.removeClass(v.visible);
          }
          return p;
        },
        componentName: "bloko/blocks/modal",
      });
    },
    306522: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(845807);
      var i = o.n(n);
      var l = o(68688);
      var r = o.n(l);
      const s = i().build({
        create: function (e, t) {
          let o;
          let n;
          function i(t) {
            o = r().render({
              message: t,
            });
            e.innerHTML = o;
            n = e.querySelector(".Bloko-ModalError-Error");
          }
          i(t.message);
          return {
            show: function () {
              n.classList.remove("bloko-modal-error_hidden");
            },
            hide: function () {
              n.classList.add("bloko-modal-error_hidden");
            },
            setMessage: i,
          };
        },
        componentName: "blocks/modal/modalError",
      });
    },
    386514: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(590570);
      var r = o.n(l);
      var s = o(845807);
      const a = o
        .n(s)()
        .build({
          create(e) {
            const t = i()(".Bloko-Name-Capitalize-Input", e);
            const o = function () {
              t.val((e, t) => r()(t));
            };
            t.addClass("bloko-input-text_name");
            t.on("change", o);
            o();
          },
          componentName: "bloko/blocks/nameCapitalize",
        });
    },
    997985: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        NOTIFICATION_ANIMATION_TIMEOUT_MS: () => d,
        NOTIFICATION_AUTO_CLOSE_TIME_MS: () => c,
        NOTIFICATION_MANAGER_CLASS_CSS: () => u,
        default: () => p,
        NOTIFICATION_MANAGER_CLASS_JS: () => b,
        NotificationKind: () => i.NotificationKind,
      });
      var n = o(394280);
      var i = o(336692);
      var l = o(105025);
      var r = o.n(l);
      var s = o(343856);
      function a(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      const c = 5000;
      const d = 300;
      const b = "Bloko-Notification-Manager";
      const u = "bloko-notification-manager";
      class h extends n.PureComponent {
        constructor() {
          super(...arguments);
          a(this, "id", null);
        }
        componentDidMount() {
          const { context: e, closeFuncRef: t, ...o } = this.props;
          this.id ||= e.addNotification(o);
          if (t != null) {
            t(() => this.id !== null && e.closeNotification(this.id));
          }
        }
        componentDidUpdate(e) {
          const t = e.context.notifications.some((e) => e.id === this.id);
          const o = this.props.context.notifications.some(
            (e) => e.id === this.id,
          );
          var n;
          var i;
          if (t && !o) {
            if ((n = (i = this.props).onClose) !== null && n !== undefined) {
              n.call(i);
            }
          }
          if (this.props.children !== e.children && this.id !== null) {
            this.props.context.updateProps(this.id, {
              children: this.props.children,
            });
          }
        }
        componentWillUnmount() {
          var e;
          var t;
          if ((e = (t = this.props).closeFuncRef) !== null && e !== undefined) {
            e.call(t, null);
          }
          if (this.id) {
            this.props.context.removeNotification(this.id);
            this.id = null;
          }
        }
        render() {
          return null;
        }
      }
      h.displayName =
        "blocks/notificationManager/Notification/NotificationDeclaration";
      const p = (e) => {
        let { autoCloseDelay: t = c, onClose: o, closeFuncRef: i, ...l } = e;
        const a = (0, n.useCallback)(
          (e) => {
            if (i) {
              if (typeof i != "function") {
                i.current = e;
              } else {
                i(e);
              }
            }
          },
          [i],
        );
        return (0, s.jsx)(r().Consumer, {
          children: (e) =>
            (0, s.jsx)(h, {
              autoCloseDelay: t,
              closeFuncRef: a,
              onClose: o,
              ...l,
              context: e,
            }),
        });
      };
    },
    680049: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(326334);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "div", ...o } = e;
        return (0, i.jsx)(t, {
          className: n.Z["bloko-notification__footer"],
          ...o,
        });
      };
    },
    83790: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(326334);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "div", ...o } = e;
        return (0, i.jsx)(t, {
          className: n.Z["bloko-notification__heading"],
          ...o,
        });
      };
    },
    567264: function (e, t, o) {
      "use strict";

      let n;
      o.r(t);
      o.d(t, {
        NOTIFICATION_EXTRA_TYPES: () => i,
        NotificationKind: () => n,
      });
      (function (e) {
        e.Ok = "ok";
        e.Error = "error";
        e.Delete = "delete";
        e.Message = "message";
        e.Question = "question";
        e.Rating = "rating";
        e.Special = "special";
      })((n ||= {}));
      const i = [n.Message, n.Question, n.Rating, n.Special];
    },
    762020: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = o
        .n(n)()
        .createContext({
          notifications: [],
          addNotification: () => 0,
          removeNotification: () => {},
          closeNotification: () => {},
          closeFuncRefs: {},
          updateProps: () => {},
        });
    },
    207990: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        NotificationManagerConsumer: () => x,
        default: () => y,
        idCounter: () => v,
      });
      var n = o(394280);
      var i = o(727158);
      var l = o.n(i);
      var r = o(581262);
      var s = o(882177);
      var a = o.n(s);
      var c = o(487153);
      var d = o(585614);
      var b = o(527777);
      var u = o.n(b);
      var h = o(771058);
      var p = o(336692);
      var k = o(105025);
      var g = o.n(k);
      var m = o(326334);
      var _ = o(343856);
      function f(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      const v = {
        value: 0,
      };
      const C = u()();
      class w extends n.PureComponent {
        constructor() {
          super(...arguments);
          f(this, "nodeRef", (0, n.createRef)());
          f(this, "state", {
            visible: true,
          });
          f(this, "timerId", null);
          f(this, "hide", () => {
            if (this.timerId) {
              C.clearTimeout(this.timerId);
            }
            this.timerId = null;
            this.setState({
              visible: false,
            });
          });
          f(this, "onMouseEnter", () => {
            C.pause();
          });
          f(this, "onMouseLeave", () => {
            C.resume();
          });
        }
        componentDidMount() {
          this.props.context.closeFuncRefs[this.props.id] = this.hide;
          if (this.props.autoClose) {
            this.setupAutoclose();
          }
        }
        componentWillUnmount() {
          this.props.context.closeFuncRefs[this.props.id] = null;
          if (this.timerId) {
            C.clearTimeout(this.timerId);
          }
        }
        setupAutoclose() {
          if (!this.timerId && this.props.autoCloseDelay) {
            this.timerId = C.setTimeout(() => {
              this.timerId = null;
              this.hide();
            }, this.props.autoCloseDelay);
          }
        }
        render() {
          const {
            children: e,
            id: t,
            onClose: o,
            kind: n,
            autoClose: i,
            autoCloseDelay: l,
            dataQa: s,
            ...b
          } = this.props;
          return (0, _.jsx)(r.Z, {
            in: this.state.visible,
            timeout: {
              exit: h.NOTIFICATION_ANIMATION_TIMEOUT_MS,
            },
            enter: false,
            unmountOnExit: true,
            onExited: () => (o == null ? undefined : o(t)),
            classNames: {
              exit: `${m.Z["bloko-notification"]} ${m.Z["bloko-notification_inactive"]}`,
              exitActive: `${m.Z["bloko-notification"]} ${m.Z["bloko-notification_inactive"]}`,
            },
            source: this.props.source,
            nodeRef: this.nodeRef,
            children: (0, _.jsx)("div", {
              ...b,
              ref: this.nodeRef,
              className: a()(m.Z["bloko-notification"], {
                [m.Z[`bloko-notification_${n}`]]: n,
              }),
              "data-qa": s,
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
              children: (0, _.jsx)("div", {
                className: m.Z["bloko-notification__wrapper"],
                children: (0, _.jsxs)("div", {
                  className: m.Z["bloko-notification__plate"],
                  children: [
                    (0, _.jsx)("div", {
                      className: m.Z["bloko-notification__icon"],
                    }),
                    (0, _.jsxs)("div", {
                      className: m.Z["bloko-notification__body"],
                      children: [
                        (0, _.jsx)("div", {
                          className: m.Z["bloko-notification__content"],
                          children: e,
                        }),
                        (0, _.jsx)("div", {
                          className: m.Z["bloko-notification__close"],
                          "data-qa": "notification-close-button",
                          onClick: this.hide,
                          children: (0, _.jsx)(c.Z, {
                            initial:
                              n && p.NOTIFICATION_EXTRA_TYPES.includes(n)
                                ? d.Z.White
                                : d.Z.Gray80,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }
      }
      w.displayName = "blocks/notificationManager/index/Notification";
      f(w, "defaultProps", {
        dataQa: "bloko-notification",
      });
      class x extends n.PureComponent {
        constructor() {
          super(...arguments);
          f(this, "state", {
            isServerENV: true,
          });
          f(this, "portalRoot", null);
        }
        componentDidMount() {
          const t =
            this.props.notificationManagerClass ??
            h.NOTIFICATION_MANAGER_CLASS_JS;
          this.portalRoot = document.querySelector(`.${t}`);
          if (!this.portalRoot) {
            this.portalRoot = document.createElement("div");
            this.portalRoot.className = `${t} ${h.NOTIFICATION_MANAGER_CLASS_CSS}`;
            document.body.appendChild(this.portalRoot);
          }
          this.setState({
            isServerENV: false,
          });
        }
        render() {
          if (this.state.isServerENV) {
            return null;
          } else {
            return (
              this.portalRoot &&
              l().createPortal(
                (0, _.jsx)(g().Consumer, {
                  children: (e) =>
                    e.notifications.map((t) =>
                      (0, _.jsx)(
                        w,
                        {
                          id: t.id,
                          context: e,
                          onClose: e.removeNotification,
                          ...t.props,
                        },
                        t.id,
                      ),
                    ),
                }),
                this.portalRoot,
              )
            );
          }
        }
      }
      x.displayName =
        "blocks/notificationManager/index/NotificationManagerConsumer";
      class y extends n.PureComponent {
        constructor() {
          super(...arguments);
          f(this, "state", {
            notifications: [],
          });
          f(this, "closeFuncRefs", {});
          f(this, "addNotification", (e) => {
            const t = (v.value += 1);
            this.setState((o) => ({
              notifications: [
                {
                  id: t,
                  props: e,
                },
                ...o.notifications,
              ],
            }));
            return t;
          });
          f(this, "removeNotification", (e) => {
            this.setState((t) => ({
              notifications: t.notifications.filter((t) => t.id !== e),
            }));
          });
          f(this, "closeNotification", (e) => {
            var t;
            var o;
            if (
              (t = this.closeFuncRefs) !== null &&
              t !== undefined &&
              (o = t[e]) !== null &&
              o !== undefined
            ) {
              o.call(t);
            }
          });
          f(this, "updateProps", (e, t) => {
            this.setState((o) => {
              const n = o.notifications.findIndex((t) => {
                let { id: o } = t;
                return e === o;
              });
              return {
                notifications: [
                  ...o.notifications.slice(0, n),
                  {
                    id: e,
                    props: {
                      ...o.notifications[n].props,
                      ...t,
                    },
                  },
                  ...o.notifications.slice(n + 1),
                ],
              };
            });
          });
        }
        render() {
          const e = {
            notifications: this.state.notifications,
            addNotification: this.addNotification,
            removeNotification: this.removeNotification,
            closeFuncRefs: this.closeFuncRefs,
            closeNotification: this.closeNotification,
            updateProps: this.updateProps,
          };
          return (0, _.jsxs)(g().Provider, {
            value: e,
            children: [
              this.props.withConsumer &&
                (0, _.jsx)(x, {
                  notificationManagerClass: this.props.notificationManagerClass,
                }),
              this.props.children,
            ],
          });
        }
      }
      y.displayName = "blocks/notificationManager/index/NotificationManager";
      f(y, "defaultProps", {
        withConsumer: true,
      });
    },
    603668: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        NotificationKind: () => k.NotificationKind,
        default: () => w,
      });
      var n;
      var i = o(487153);
      var l = o(585614);
      var r = o(607621);
      var s = o(527777);
      var a = o.n(s);
      var c = o(705229);
      var d = o.n(c);
      var b = o(845807);
      var u = o.n(b);
      var h = o(387501);
      var p = o.n(h);
      var k = o(336692);
      var g = o(77869);
      var m = o.n(g);
      const _ = d()
        ? (e, t) => {
            if (d()) {
              ((e, t, o) => {
                e.addEventListener(t, function n(i) {
                  e.removeEventListener(t, n);
                  o(i);
                });
              })(e, d(), t);
            }
          }
        : (e, t) => {
            t();
          };
      const f = a()();
      const v =
        (n = window.bloko) !== null && n !== undefined && n.isTest ? 10 : 5000;
      const C =
        document.querySelector(".Bloko-Notification-Manager") ||
        document.body.appendChild(
          (() => {
            const e = document.createElement("div");
            e.className = "bloko-notification-manager";
            return e;
          })(),
        );
      C.addEventListener("mouseenter", () => {
        f.pause();
      });
      C.addEventListener("mouseleave", () => {
        f.resume();
      });
      const w = {
        create: (e) => {
          let {
            content: t,
            type: o,
            onClose: n,
            autoClose: s,
            autoCloseDelay: a = v,
          } = e;
          const c = ((e) => {
            let { type: t, content: o } = e;
            const n = document.createElement("div");
            n.innerHTML = m().render({
              type: t,
              inverted: k.NOTIFICATION_EXTRA_TYPES.includes(t),
            });
            const i = n.firstElementChild;
            const l = i.querySelector(".Bloko-Notification-Content");
            if (typeof o == "string") {
              l.innerHTML = o;
            } else {
              l.appendChild(p().getElement(o));
            }
            return i;
          })({
            content: t,
            type: o,
          });
          let d;
          if (s) {
            d = f.setTimeout(h, a);
          }
          const b = c.querySelector(".Bloko-Notification-Close");
          function h() {
            if (!c.classList.contains("bloko-notification_inactive")) {
              c.classList.add("bloko-notification_inactive");
              _(c, () => {
                c.remove();
                if (n != null) {
                  n();
                }
              });
            }
          }
          if (c) {
            u().make(r.Z, b, {
              IconComponent: i.Z,
              iconProps: {
                initial: k.NOTIFICATION_EXTRA_TYPES.includes(o)
                  ? l.Z.White
                  : l.Z.Gray80,
              },
            });
          }
          c.addEventListener("click", (e) => {
            if (
              e.target instanceof Element &&
              e.target.closest(".Bloko-Notification-Close")
            ) {
              f.clearTimeout(d);
              h();
            }
          });
          C.insertBefore(c, C.firstElementChild);
          return {
            close: h,
          };
        },
      };
    },
    837979: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = (e, t, o) => t.split(o).length - e.trim().split(o).length;
    },
    588600: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        NumericInput: () => p,
        default: () => k,
      });
      var n = o(394280);
      var i = o(948038);
      var l = o.n(i);
      var r = o(17666);
      var s = o.n(r);
      var a = o(787726);
      var c = o.n(a);
      var d = o(857726);
      var b = o.n(d);
      var u = o(343856);
      const h = {};
      const p = (0, n.forwardRef)((e, t) => {
        let {
          decimalLength: o = 2,
          decimalMark: a = ",",
          groupSeparator: d = "",
          allowNegative: p = false,
          errors: k = h,
          useParentNodeAsTooltipHost: g,
          onChange: m,
          tipProps: _,
          source: f,
          ...v
        } = e;
        const [C, w] = (0, n.useState)(null);
        const [x, y] = (0, n.useState)(null);
        const S = (0, n.useRef)(null);
        const T = (0, n.useCallback)((e, t) => {
          e.selectionStart = t;
          e.selectionEnd = t;
        }, []);
        const E = (0, n.useCallback)(
          (e) => {
            b()(T)(e, e.selectionStart ? e.selectionStart - 1 : 0);
          },
          [T],
        );
        const L = (0, n.useCallback)(() => C && k[C], [k, C]);
        const I = (0, n.useCallback)(() => {
          w(null);
          y(null);
        }, []);
        const B = (0, n.useCallback)(() => {
          I();
          if (x) {
            clearTimeout(x);
          }
        }, [x, I]);
        const M = (0, n.useCallback)(
          (e, t) => {
            const [n] = c().validate(e, {
              decimalLength: o,
              decimalMark: a,
              groupSeparator: d,
              allowNegative: p,
            });
            if (!n) {
              B();
              m(e, t);
              return;
            }
            E(t.element);
            w(n);
            if (x) {
              clearTimeout(x);
            }
            y(setTimeout(I, 2000));
          },
          [o, a, d, E, x, I, B, m, p],
        );
        return (0, u.jsx)(l(), {
          show: !!C,
          theme: i.TipTheme.Attention,
          placement: i.TipPlacement.Top,
          render: L,
          onExternalClose: B,
          activatorRef: S,
          ..._,
          children: (0, u.jsx)(s(), {
            ref: (e) => {
              if (typeof t == "function") {
                t(e);
              }
              if (t && "current" in t) {
                t.current = e;
              }
              S.current = e;
            },
            type: r.InputType.Text,
            onChange: M,
            source: f,
            ...v,
          }),
        });
      });
      const k = (0, n.memo)(p);
    },
    122058: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => C,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(732603);
      var r = o.n(l);
      var s = o(125702);
      var a = o.n(s);
      var c = o(845807);
      var d = o.n(c);
      var b = o(669406);
      var u = o.n(b);
      var h = o(787726);
      var p = o.n(h);
      var k = o(182093);
      var g = o.n(k);
      var m = o(638040);
      var _ = o.n(m);
      var f = o(606838);
      var v = o.n(f);
      const C = d().build({
        defaults: {
          groupSeparator: "",
          decimalMark: ",",
          decimalLength: 2,
          allowNegative: false,
          trls: {},
          useParentNodeAsTooltipHost: false,
        },
        create: function (e, t) {
          if (e.tagName === "INPUT" && e.type === "number") {
            throw new Error(
              "NumericInput can't work with input[type=number]. Use inputmode=decimal|numeric instead.",
            );
          }
          const o = i()(e);
          let n;
          const s = new RegExp(
            (t.decimalLength === 0
              ? ""
              : `\\${t.allowNegative ? "-|" : ""}${t.decimalMark}|`) + "\\d",
          );
          const c = d().make(r(), e, {
            theme: l.TipTheme.Attention,
            placement: l.TipPlacement.Top,
            host: t.useParentNodeAsTooltipHost ? e.parentNode : "body",
          });
          function b(e) {
            if (t.trls[e] !== undefined) {
              c.changeOptions({
                html: t.trls[e],
              }).show();
              if (n) {
                clearTimeout(n);
              }
              n = window.setTimeout(() => {
                c.hide();
                n = null;
              }, 2000);
            }
          }
          function h(n) {
            const i = e.value;
            let l = u().format(i, t);
            if (i === l) {
              return;
            }
            const r = i.charAt(i.length - 1);
            const s = l.split(t.decimalMark).length - 1;
            if (t.decimalLength !== 0 && s === 0 && r === t.decimalMark) {
              l += r;
            }
            if (n) {
              o.val(l);
            } else {
              const n = _().getCaretPosition(e);
              o.val(l);
              const r = v()(i, l, t.groupSeparator);
              _().setCaretPosition(e, n + r);
            }
          }
          h(true);
          if (g().android()) {
            let n = "";
            o.on("change input", () => {
              const o = e.value;
              const i = p().validate(o, t);
              if (i.length === 0) {
                n = o;
                if (c) {
                  c.hide();
                }
                h(false);
              } else {
                e.value = n;
                b(i[0]);
              }
            });
          } else {
            o.on(g().IEMobile() ? "keydown" : "keypress", function (o) {
              if (o.altKey || o.ctrlKey || o.metaKey) {
                return;
              }
              const n = a().getChar(o);
              if (n === null) {
                return;
              }
              if (!s.test(n)) {
                o.preventDefault();
                b("notNumber");
                return;
              }
              const i = _().getCaretPosition(e);
              const l = e.value;
              const r = (l.substr(0, i) + n + l.substr(i)).replace(
                t.groupSeparator,
                "",
              );
              const d = p().validate(r, t);
              if (d.length > 0) {
                o.preventDefault();
                b(d[0]);
              } else if (c) {
                c.hide();
              }
            }).on("input change", () => {
              h(false);
            });
          }
        },
        componentName: "bloko/blocks/numericInput",
      });
    },
    129460: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      o(394280);
      var n = o(882177);
      var i = o.n(n);
      var l = o(872727);
      var r = o(343856);
      const s = (e) => {
        const {
          children: t,
          invalid: o,
          innerRef: n,
          labelProps: s,
          wrapperProps: a,
          source: c,
          ...d
        } = e;
        return (0, r.jsxs)("label", {
          className: i()(l.Z["bloko-radio"], {
            [l.Z["bloko-radio_invalid"]]: o,
          }),
          ...a,
          ref: n,
          source: c,
          children: [
            (0, r.jsx)("input", {
              ...d,
              type: "radio",
              className: l.Z["bloko-radio__input"],
            }),
            (0, r.jsx)("span", {
              ...s,
              className: l.Z["bloko-radio__text"],
              children: t,
            }),
          ],
        });
      };
    },
    449035: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      o(394280);
      var n = o(872727);
      var i = o(343856);
      const l = (e) =>
        (0, i.jsx)("span", {
          ...e,
          className: n.Z["bloko-radio__opening-content"],
        });
    },
    56820: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
      });
      var n = o(446600);
      var i = o.n(n);
      var l = o(343856);
      const r = (e) => {
        let { children: t, reversed: o, ...n } = e;
        if (o) {
          return (0, l.jsxs)("label", {
            className: "bloko-radio-reversed-wrapper",
            children: [
              (0, l.jsx)("div", {
                suppressHydrationWarning: true,
                children: t,
              }),
              (0, l.jsx)("div", {
                className: "bloko-radio-reversed-wrapper__control",
                children: (0, l.jsx)(i(), {
                  ...n,
                }),
              }),
            ],
          });
        } else {
          return (0, l.jsx)(i(), {
            ...n,
            children: t,
          });
        }
      };
    },
    169396: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      o(394280);
      o(832397);
      var n = o(343856);
      const i = (e) =>
        (0, n.jsx)("option", {
          ...e,
          suppressHydrationWarning: true,
        });
    },
    334574: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => u,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(467469);
      var s = o.n(r);
      var a = o(832397);
      var c = o(343856);
      function d(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      class b extends n.PureComponent {
        constructor() {
          super(...arguments);
          d(this, "hasChanged", false);
          d(this, "state", {
            value: "",
          });
          d(this, "onChange", (e) => {
            this.hasChanged = true;
            this.setState({
              value: e.target.value,
            });
            if (this.props.onChange) {
              this.props.onChange(e);
            }
          });
          d(
            this,
            "showPlaceholder",
            () =>
              !this.props.value &&
              !this.state.value &&
              (!this.props.defaultValue || !!this.hasChanged),
          );
        }
        componentDidUpdate(e) {
          if (e.value !== this.props.value) {
            this.setState({
              value: this.props.value,
            });
          }
        }
        render() {
          const { placeholder: e, ref: t, source: o, ...n } = this.props;
          return (0, c.jsxs)("div", {
            className: l()(a.Z["bloko-select-wrapper"], {
              [a.Z["bloko-select-wrapper_flexible"]]: n.flexible,
            }),
            source: o,
            children: [
              this.showPlaceholder() &&
                (0, c.jsx)("div", {
                  className: a.Z["bloko-select-placeholder"],
                  children: (0, c.jsx)("span", {
                    className: a.Z["bloko-select-placeholder-text"],
                    children: e,
                  }),
                }),
              (0, c.jsx)(s(), {
                ...n,
                ref: t,
                onChange: this.onChange,
              }),
            ],
          });
        }
      }
      b.displayName =
        "blocks/select/SelectWithPlaceholder/SelectWithPlaceholderRaw";
      const u = (0, n.forwardRef)((e, t) =>
        (0, c.jsx)(b, {
          ...e,
          ref: t,
        }),
      );
    },
    461845: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        Option: () => a.default,
        SelectRaw: () => b,
        SelectScale: () => d,
        default: () => k,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(882177);
      var r = o.n(l);
      var s = o(832397);
      var a = o(169396);
      var c = o(343856);
      let d;
      (function (e) {
        e.Small = "small";
        e.Large = "large";
      })((d ||= {}));
      class b extends n.PureComponent {
        render() {
          const {
            children: e,
            flexible: t,
            light: o,
            invalid: n,
            scale: i,
            ...l
          } = this.props;
          return (0, c.jsx)("select", {
            className: r()(s.Z["bloko-select"], {
              [s.Z["bloko-select_flexible"]]: t,
              [s.Z["bloko-select_light"]]: o,
              [s.Z["bloko-select_invalid"]]: n,
              [s.Z[`bloko-select_scale-${i}`]]: i,
            }),
            suppressHydrationWarning: true,
            ...l,
            children: e,
          });
        }
      }
      var u;
      var h;
      var p;
      b.displayName = "blocks/select/index/SelectRaw";
      u = b;
      p = {
        invalid: false,
        flexible: false,
        light: false,
        disabled: false,
      };
      if (
        (h = (function (e) {
          var t = (function (e, t) {
            if (typeof e != "object" || e === null) {
              return e;
            }
            var o = e[Symbol.toPrimitive];
            if (o !== undefined) {
              var n = o.call(e, t || "default");
              if (typeof n != "object") {
                return n;
              }
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return (t === "string" ? String : Number)(e);
          })(e, "string");
          if (typeof t == "symbol") {
            return t;
          } else {
            return String(t);
          }
        })((h = "defaultProps"))) in u
      ) {
        Object.defineProperty(u, h, {
          value: p,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        u[h] = p;
      }
      const k = i().forwardRef((e, t) =>
        (0, c.jsx)(b, {
          ...e,
          ref: t,
        }),
      );
    },
    435625: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(937285);
      var i = o(343856);
      const l = (e) =>
        (0, i.jsx)("span", {
          ...e,
          className: n.Z["bloko-select-dropdown-option__text"],
        });
    },
    698880: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(937285);
      var s = o(343856);
      const a = (0, n.forwardRef)((e, t) => {
        let {
          children: o,
          selected: n,
          disabled: i,
          focused: a,
          focusableByHover: c,
          source: d,
          ...b
        } = e;
        return (0, s.jsx)("div", {
          ...b,
          ref: t,
          className: l()(r.Z["bloko-select-dropdown-option"], {
            [r.Z["bloko-select-dropdown-option_selected"]]: n,
            [r.Z["bloko-select-dropdown-option_disabled"]]: i,
            [r.Z["bloko-select-dropdown-option_focused"]]: a,
            [r.Z["bloko-select-dropdown-option_focusable-by-hover"]]: c,
          }),
          source: d,
          children: o,
        });
      });
    },
    323863: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => d,
      });
      var n = o(882177);
      var i = o.n(n);
      const l = "bloko-share";
      const r = "bloko-share__content";
      const s = "bloko-share__counter";
      const a = "bloko-share__counter_inverted";
      var c = o(343856);
      const d = (e) => {
        let { Element: t = "a", icon: o, count: n, inverted: d, ...b } = e;
        return (0, c.jsx)(t, {
          ...b,
          className: l,
          children: (0, c.jsxs)("span", {
            className: r,
            children: [
              o,
              n !== undefined &&
                (0, c.jsx)("span", {
                  className: i()(s, {
                    [a]: d,
                  }),
                  children: n,
                }),
            ],
          }),
        });
      };
    },
    19437: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(166548);
      var i = o(343856);
      const l = (e) => {
        let { children: t, width: o } = e;
        return (0, i.jsx)("div", {
          style: {
            width: `${o}px`,
          },
          className: n.Z["bloko-slide__item"],
          children: t,
        });
      };
    },
    764049: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => k,
      });
      var n = o(394280);
      var i = o(825382);
      var l = o.n(i);
      var r = o(350647);
      var s = o.n(r);
      var a = o(857359);
      var c = o.n(a);
      var d = o(729809);
      var b = o.n(d);
      var u = o(166548);
      var h = o(343856);
      const p = {
        swipeOptions: {},
        transitionTiming: 500,
      };
      const k = (e) => {
        let {
          children: t,
          activeItem: o,
          swipeOptions: i = p.swipeOptions,
          transitionTiming: r = p.transitionTiming,
          onChange: a,
        } = e;
        const d = (0, n.useRef)();
        const k = (0, n.useRef)(null);
        const [g, m] = (0, n.useState)(0);
        const [_, f] = (0, n.useState)(0);
        const v = (0, n.useCallback)(() => {
          if (d.current) {
            m(d.current.getBoundingClientRect().width);
          }
        }, []);
        (0, n.useEffect)(() => {
          v();
        }, [v]);
        s()(v);
        const {
          onSwipeMove: C,
          onSwipeEnd: w,
          onSwipePrevent: x,
        } = b()({
          lastItemIndex: n.Children.count(t) - 1,
          activeItemIndex: o,
          setSlideOffset: f,
          slideOnChange: a,
          slideContainerElRef: k,
        });
        return (0, h.jsx)(l(), {
          onSwipeMove: C,
          onSwipeEnd: w,
          onSwipePrevent: x,
          ...i,
          children: (e) => {
            let {
              swipeContainerProps: { ref: i, ...l },
            } = e;
            return (0, h.jsx)("div", {
              ...l,
              ref: (e) => {
                i.current = e;
                d.current = e;
              },
              className: u.Z["bloko-slide"],
              children:
                !!g &&
                (0, h.jsx)("div", {
                  className: u.Z["bloko-slide__container"],
                  style: {
                    transitionDuration: `${r}ms`,
                    transform: `translateX(-${g * o - _}px)`,
                  },
                  ref: k,
                  children: n.Children.map(t, (e) => {
                    if (
                      ((e) => (0, n.isValidElement)(e) && e.type === c())(e)
                    ) {
                      return (0, n.cloneElement)(e, {
                        width: g,
                      });
                    }
                    throw new Error("Children must be slide");
                  }),
                }),
            });
          },
        });
      };
    },
    929394: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(665164);
      var r = o.n(l);
      var s = o(521611);
      var a = o(294897);
      var c = o.n(a);
      var d = o(845807);
      var b = o.n(d);
      const u = i().View.extend({
        initialize(e) {
          this.swipe = b().make(c(), this.$el[0], e.swipeOptions);
          this.$container = this.$(".Bloko-Slide-Container");
          this.$current = this.$(".Bloko-Slide-Current");
          this.lazyLoad = e.lazyLoad;
          this.changeItemCallback = e.changeItemCallback;
          this.transitionTiming = e.transitionTiming;
          this.swipe
            .on("bloko-swipe-move", (e) => {
              this.$current.css(
                "transform",
                `translate3d( ${e.distance}px, 0, 0)`,
              );
            })
            .on("bloko-swipe-end", this.swipeItem.bind(this))
            .on("bloko-swipe-prevent", this.setStartState.bind(this));
        },
        setStartState() {
          const e = function () {
            this.$current.css("transition", "");
          }.bind(this);
          this.$current.css(
            "transition",
            `all ${this.transitionTiming}ms ease`,
          );
          this.$current.css("transform", "translate3d(0, 0, 0)");
          this.$current.one("transitionend", e);
        },
        animateSwipe(e) {
          let t = (this.$container.width() + this.$current.width()) / 2;
          if (e < 0) {
            t = -t;
          }
          this.$current.css("transform", `translate3d(${t}px, 0, 0)`);
          window.setTimeout(this.setStartState.bind(this), 0);
        },
        swipeItem(e) {
          const t = e.direction;
          if (this.lazyLoad) {
            const e = this.changeItemCallback(t);
            if (e.then) {
              e.then((e) => {
                this.$current = r()(e);
                this.animateSwipe(t);
              });
              return;
            } else {
              this.$current = r()(e);
              this.animateSwipe(t);
              return;
            }
          }
          const o = this.$(".Bloko-Slide-Item");
          let n = o.index(this.$current) + t;
          if (n >= o.length) {
            n = 0;
          }
          if (n < 0) {
            n = o.length - 1;
          }
          this.$current.removeClass("Bloko-Slide-Current");
          this.$current.addClass("g-hidden");
          this.$current = o.eq(n);
          this.$current.removeClass("g-hidden");
          this.$current.addClass("Bloko-Slide-Current");
          this.animateSwipe(t);
        },
      });
      const h = b().build({
        defaults: {
          lazyLoad: false,
          transitionTiming: 500,
          swipeOptions: undefined,
        },
        create(e, t) {
          new u(
            s.ZP.extend(
              {
                el: e,
              },
              t,
            ),
          );
        },
        componentName: "bloko/blocks/slide",
      });
    },
    471961: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = (e) => {
        let {
          setSlideOffset: t,
          slideOnChange: o,
          slideContainerElRef: i,
          activeItemIndex: l,
          lastItemIndex: r,
        } = e;
        return {
          onSwipeMove: (0, n.useCallback)(
            (e) => {
              if (i.current) {
                i.current.style.transitionProperty = "none";
              }
              t(e.distance);
            },
            [t, i],
          ),
          onSwipeEnd: (0, n.useCallback)(
            (e) => {
              let { direction: n } = e;
              const s = l + n;
              if (s > r) {
                if (o != null) {
                  o(0);
                }
              } else if (s < 0) {
                if (o != null) {
                  o(r);
                }
              } else if (o != null) {
                o(s);
              }
              if (i.current) {
                i.current.style.transitionProperty = "transform";
              }
              t(0);
            },
            [l, r, t, i, o],
          ),
          onSwipePrevent: (0, n.useCallback)(() => {
            t(0);
          }, [t]),
        };
      };
    },
    191536: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => b,
      });
      var n = o(845807);
      var i = o.n(n);
      var l = o(328261);
      var r = o.n(l);
      var s = o(740586);
      var a = o.n(s);
      var c = o(750318);
      var d = o.n(c);
      const b = i().build({
        defaults: {
          from: 0,
          to: 100,
          stepSize: 1,
          value: null,
          type: "slider",
          style: "primary",
          disabled: false,
          onChange: null,
          onInput: null,
          showMarks: false,
          labels: null,
          fromInput: null,
          toInput: null,
          valueInput: null,
        },
        create(e, t) {
          const o = t && t.type === "range" ? new (a())(e, t) : new (d())(e, t);
          const n = {
            set(e) {
              o.set(e);
            },
            get: () => o.get(),
            toggleDisabled(e) {
              o.toggleDisabled(e);
            },
            setAvailable(e) {
              o.setAvailable(e);
            },
            onChange(e) {
              o.onChange(e);
            },
            onInput(e) {
              o.onInput(e);
            },
          };
          window.setTimeout(() => {
            r().resolve(e, "slider", n);
          }, 0);
          return n;
        },
        componentName: "bloko/blocks/slider",
      });
    },
    92394: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => g,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(125702);
      var r = o(891914);
      var s = o.n(r);
      var a = o(387501);
      var c = o.n(a);
      var d = o(351250);
      var b = o.n(d);
      let u = null;
      const h = function (e) {
        e.preventDefault();
        u.process(e, false);
      };
      i()(document).on("touchstart", (e) => {
        if (e.originalEvent.touches.length > 1) {
          i()(document).off("touchmove", h);
          if (u) {
            u.finish();
            u = null;
          }
        }
      });
      i()(document).on("mouseup touchend", (e) => {
        if (u) {
          e.preventDefault();
          u.process(e, true);
          u = null;
          i()(document).off("touchmove mousemove", h);
        }
      });
      const p = function (e) {
        const t = e.originalEvent;
        const o = t.type.indexOf("touch") === 0;
        const n = t.type.indexOf("mouse") === 0;
        let i;
        let l;
        let r = t.type.indexOf("pointer") === 0;
        const s = t;
        if (t.type.indexOf("MSPointer") === 0) {
          r = true;
        }
        if (o) {
          i = t.changedTouches[0].pageX;
          l = t.changedTouches[0].pageY;
        }
        if (n || r) {
          i = t.clientX;
          l = t.clientY;
        }
        s.points = [i, l];
        return s;
      };
      const k = function (e) {
        this.params = e;
        this.lastX = c().getRelativeMetrics(e.element).left;
        this.offsetX = e.event.points[0] - this.lastX;
      };
      k.prototype = {
        process(e, t) {
          let o = p(e).points[0] - this.offsetX;
          o = Math.min(
            Math.max(
              o,
              this.params.percentsMin,
              this.params.availablePercentsMin,
            ),
            this.params.percentsMax,
            this.params.availablePercentsMax,
          );
          this.lastX = o;
          this.params.onChange(o, t);
        },
        finish() {
          this.params.onChange(this.lastX, true);
        },
      };
      const g = {
        template: b(),
        bindings: {
          leftPin: ".Bloko-Slider-LeftPin",
          rightPin: ".Bloko-Slider-RightPin",
          scaleLine: ".Bloko-Slider-ScaleLine",
          rangeMark: ".Bloko-Slider-RangeMark",
          availableMark: ".Bloko-Slider-AvailableMark",
          labels: ".Bloko-Slider-Label",
        },
        cssClasses: {
          disabled: "bloko-slider_disabled",
        },
        _init(e, t) {
          this.$element = i()(e);
          this.options = i().extend({}, t);
          this.options.available ||= {
            from: this.options.from,
            to: this.options.to,
          };
          this.cachedUnitMin = null;
          this.cachedUnitMax = null;
          const o = i()(
            this.template.render({
              marks: this._createMarks(),
              labels: this._createLabels(),
              isRange: this.options.type === "range",
              hasLabels: this.options.labels && this.options.labels.length,
              isSecondary: this.options.style === "secondary",
            }),
          );
          this.$element.append(o);
          this.$markup = o;
          this._initBindings(o);
          this._initMetrics();
          this._initEventListeners();
          if (this.options.onChange) {
            this.$markup.on("Bloko-Slider-Change", this.options.onChange);
          }
          if (this.options.onInput) {
            this.$markup.on("Bloko-Slider-Input", this.options.onInput);
          }
          this.unitMin = this.options.available.from;
          this.unitMax = this.options.available.to;
          this.set(this.options.value);
          this.toggleDisabled(this.options.disabled);
        },
        onInput(e) {
          this.$markup.on("Bloko-Slider-Input", e);
        },
        onChange(e) {
          this.$markup.on("Bloko-Slider-Change", e);
        },
        _createLabels() {
          if (!this.options.labels) {
            return null;
          }
          const e = this.options.to - this.options.from;
          const t = this.options.from;
          const o = this.options.available;
          return this.options.labels.map((n) => ({
            offset: ((n[0] - t) / e) * 100,
            text: n[1],
            available: n[0] >= o.from && n[0] <= o.to,
          }));
        },
        _set(e, t) {
          e = this._ensureValuesInRange(e);
          this.unitMin = e[0];
          this.unitMax = e[1];
          if (this.unitMin !== this.options.available.from) {
            this.unitMin =
              Math.round(this.unitMin / this.options.stepSize) *
              this.options.stepSize;
          }
          if (this.unitMax !== this.options.available.to) {
            this.unitMax =
              Math.round(this.unitMax / this.options.stepSize) *
              this.options.stepSize;
          }
          this.unitMin = this._inRange(this.unitMin, [
            this.options.available.from,
            this.unitMax,
          ]);
          this.unitMax = this._inRange(this.unitMax, [
            this.unitMin,
            this.options.available.to,
          ]);
          this.percentsMin = this._convertUnitsToPercents(this.unitMin);
          this.percentsMax = this._convertUnitsToPercents(this.unitMax);
          this.availablePercentsMin = this._convertUnitsToPercents(
            this.options.available.from,
          );
          this.availablePercentsMax = this._convertUnitsToPercents(
            this.options.available.to,
          );
          this._render();
          this.$markup.trigger("Bloko-Slider-Input", this.get());
          if (
            !!t &&
            (this.cachedUnitMin !== this.unitMin ||
              this.unitMax !== this.cachedUnitMax)
          ) {
            this.$markup.trigger("Bloko-Slider-Change", this.get());
            this.cachedUnitMin = this.unitMin;
            this.cachedUnitMax = this.unitMax;
          }
          if (this.percentsMin === 100) {
            this.$leftPin.css("z-index", 4);
          }
        },
        set(e) {
          if (!this.disabled) {
            this._set(this._ensureValuesValid(e), true);
          }
        },
        setAvailable(e) {
          this.options.available.from = this._inRange(e.from, [
            this.options.from,
            this.options.to,
          ]);
          this.options.available.to = this._inRange(e.to, [
            this.options.from,
            this.options.to,
          ]);
          this._set(this.get(), true);
        },
        toggleDisabled(e) {
          this.disabled = e === undefined ? !this.disabled : e;
          this.$scaleLine.toggleClass(this.cssClasses.disabled, this.disabled);
          this.$leftPin.prop("disabled", this.disabled);
          this.$rightPin.prop("disabled", this.disabled);
        },
        _moveByKeyboard(e, t) {
          let o = this.options.stepSize;
          if (e.shiftKey) {
            o *= 10;
            o = Math.min((this.options.to - this.options.from) / 10, o);
            o = Math.round(o / this.options.stepSize) * this.options.stepSize;
            o = Math.max(o, this.options.stepSize);
          }
          let n = t;
          switch (e.keyCode) {
            case l.KeyCode.ArrowDown:
            case l.KeyCode.ArrowLeft:
              n -= o;
              e.preventDefault();
              break;
            case l.KeyCode.ArrowUp:
            case l.KeyCode.ArrowRight:
              n += o;
              e.preventDefault();
          }
          return n;
        },
        _inRange: (e, t) => Math.max(Math.min(e, t[1]), t[0]),
        _initEventListeners() {
          const e = this.$leftPin.add(this.$rightPin);
          e.on("focus touchstart mousedown", (t) => {
            e.css("z-index", 3);
            i()(t.target).css("z-index", 4);
          });
          this.$scaleLine.on("click", this._onClick.bind(this));
          this.$leftPin.on(
            "touchstart mousedown",
            this._createMovement.bind(this, true),
          );
          this.$rightPin.on(
            "touchstart mousedown",
            this._createMovement.bind(this, false),
          );
          this.$leftPin.on("keydown", this._keyboardControl.bind(this, true));
          this.$rightPin.on("keydown", this._keyboardControl.bind(this, false));
        },
        _initBindings(e) {
          this.$leftPin = i()(this.bindings.leftPin, e);
          this.$rightPin = i()(this.bindings.rightPin, e);
          this.$scaleLine = e;
          this.$rangeMark = i()(this.bindings.rangeMark, e);
          this.$availableMark = i()(this.bindings.availableMark, e);
        },
        _render() {
          this.$leftPin.css("left", `${this.percentsMin}%`);
          this.$rightPin.css("left", `${this.percentsMax}%`);
          this.$rangeMark.css({
            left: `${this.percentsMin}%`,
            right: 100 - this.percentsMax + "%",
          });
          this.$availableMark.css({
            left: `${this.availablePercentsMin}%`,
            right: 100 - this.availablePercentsMax + "%",
          });
        },
        _initMetrics() {
          if (this.options.type === "range") {
            this.leftPinMetrics = c().getRelativeMetrics(this.$leftPin.get(0));
          }
          this.rightPinMetrics = c().getRelativeMetrics(this.$rightPin.get(0));
          const e = c().getMetrics(this.$scaleLine.get(0));
          this.scaleLineSize = e.width;
          this.scaleLinePosition = e.left;
          this.unitsInPixel =
            (this.options.to - this.options.from) / this.scaleLineSize;
        },
        _createMovement(e, t) {
          if (this.disabled || t.button === s().BUTTON_RIGHT) {
            return;
          }
          i()(document).on("touchmove mousemove", h);
          this._initMetrics();
          const o = p(t);
          const n = this._createMovementOptions(e);
          n.onChange = this._pinMoved.bind(this, e);
          n.event = o;
          n.availablePercentsMin =
            (this.options.available.from - this.options.from) /
            this.unitsInPixel;
          n.availablePercentsMax =
            (this.options.available.to - this.options.from) / this.unitsInPixel;
          u = new k(n);
        },
        _createMarks() {
          if (!this.options.showMarks) {
            return null;
          }
          const e = [];
          for (
            let t = this.options.from + this.options.stepSize;
            t < this.options.to;
            t += this.options.stepSize
          ) {
            e.push({
              offset: this._convertUnitsToPercents(t),
            });
          }
          return e;
        },
        _onClick(e) {
          if (
            this.disabled ||
            e.target === this.$leftPin[0] ||
            e.target === this.$rightPin[0]
          ) {
            return;
          }
          this._initMetrics();
          const t =
            window.pageXOffset === undefined
              ? document.documentElement.scrollLeft
              : window.pageXOffset;
          const o = e.clientX + t - this.scaleLinePosition;
          const n = this._convertPxToUnits(o);
          this._setPositionByClick(o, n);
        },
        _convertPxToUnits(e) {
          return e * this.unitsInPixel + this.options.from;
        },
        _convertUnitsToPercents(e) {
          return (
            ((e - this.options.from) / (this.options.to - this.options.from)) *
            100
          );
        },
      };
    },
    611139: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(904386);
      var r = o.n(l);
      const s = function (e, t) {
        this._init(e, t);
      };
      s.prototype = i().extend({}, r(), {
        _ensureValuesInRange(e) {
          const t = e[0] === null ? this.unitMin : e[0];
          const o = e[1] === null ? this.unitMax : e[1];
          return [
            this._inRange(t, [this.options.available.from, this.unitMax]),
            this._inRange(o, [this.unitMin, this.options.available.to]),
          ];
        },
        _ensureValuesValid: (e) => {
          if (e == null) {
            e = [null, null];
          }
          e.forEach((t, o) => {
            t = parseInt(t, 10);
            e[o] = isNaN(t) ? null : t;
          });
          return e;
        },
        get() {
          return [this.unitMin, this.unitMax];
        },
        _createMovementOptions(e) {
          let t;
          t = e
            ? {
                element: this.$leftPin.get(0),
                percentsMin: 0,
                percentsMax: this.rightPinMetrics.left,
              }
            : {
                element: this.$rightPin.get(0),
                percentsMin: this.leftPinMetrics.left,
                percentsMax: this.scaleLineSize,
              };
          return t;
        },
        _pinMoved(e, t, o) {
          const n = this._convertPxToUnits(t);
          this._set(e ? [n, null] : [null, n], o);
        },
        _setPositionByClick(e, t) {
          const o = Math.abs(e - this.leftPinMetrics.left);
          const n = Math.abs(e - this.rightPinMetrics.left);
          if (o === n && e < this.leftPinMetrics.left) {
            this._set([t, null]);
          } else {
            this._set(o < n ? [t, null] : [null, t]);
          }
        },
        _keyboardControl(e, t) {
          let o = this.get();
          o = e ? o[0] : o[1];
          o = this._moveByKeyboard(t, o);
          this._set(e ? [o, null] : [null, o]);
        },
      });
      const a = s;
    },
    78767: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(904386);
      var r = o.n(l);
      const s = function (e, t) {
        this._init(e, t);
      };
      s.prototype = i().extend({}, r(), {
        _ensureValuesInRange(e) {
          e = e === null ? this.unitMax : e;
          e = this._inRange(e, [
            this.options.available.from,
            this.options.available.to,
          ]);
          return [this.options.available.from, e];
        },
        _ensureValuesValid: (e) => {
          e = parseInt(e, 10);
          if (isNaN(e)) {
            return null;
          } else {
            return e;
          }
        },
        get() {
          return this.unitMax;
        },
        _createMovementOptions() {
          return {
            element: this.$rightPin.get(0),
            percentsMin: 0,
            percentsMax: this.scaleLineSize,
          };
        },
        _pinMoved(e, t, o) {
          const n = this._convertPxToUnits(t);
          this._set(n, o);
        },
        _setPositionByClick(e, t) {
          this._set(t);
        },
        _keyboardControl(e, t) {
          let o = this.get();
          o = this._moveByKeyboard(t, o);
          this._set(o);
        },
      });
      const a = s;
    },
    867182: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        SocialIconView: () => a,
        default: () => b,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      const r = {
        "bloko-social-icon": "bloko-social-icon",
        "bloko-social-icon_dnr": "bloko-social-icon_dnr",
        "bloko-social-icon_esia": "bloko-social-icon_esia",
        "bloko-social-icon_fb": "bloko-social-icon_fb",
        "bloko-social-icon_gplus": "bloko-social-icon_gplus",
        "bloko-social-icon_instagram": "bloko-social-icon_instagram",
        "bloko-social-icon_mail": "bloko-social-icon_mail",
        "bloko-social-icon_ok": "bloko-social-icon_ok",
        "bloko-social-icon_telegram": "bloko-social-icon_telegram",
        "bloko-social-icon_twitter": "bloko-social-icon_twitter",
        "bloko-social-icon_vk": "bloko-social-icon_vk",
        "bloko-social-icon_more": "bloko-social-icon_more",
        "bloko-social-icon_viber": "bloko-social-icon_viber",
        "bloko-social-icon_dzen": "bloko-social-icon_dzen",
        "bloko-social-icon_outlined": "bloko-social-icon_outlined",
        "bloko-social-icon_button": "bloko-social-icon_button",
      };
      var s = o(343856);
      let a;
      var c;
      (c = a ||= {}).Mail = "mail";
      c.OK = "ok";
      c.FB = "fb";
      c.VK = "vk";
      c.GPlus = "gplus";
      c.Twitter = "twitter";
      c.Telegram = "telegram";
      c.Instagram = "instagram";
      c.Dnr = "dnr";
      c.ESIA = "esia";
      c.More = "more";
      c.Viber = "viber";
      c.Dzen = "dzen";
      const d = (e) => {
        let { Element: t = "span", view: o, button: n, outlined: i, ...a } = e;
        const c = l()(r["bloko-social-icon"], {
          [r["bloko-social-icon_button"]]: n,
          [r["bloko-social-icon_outlined"]]: i,
          [r[`bloko-social-icon_${o}`]]: o,
        });
        return (0, s.jsx)(t, {
          ...a,
          className: c,
        });
      };
      const b = (0, n.memo)(d);
    },
    762473: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => u,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(987598);
      var r = o.n(l);
      var s = o(845807);
      const a = "stateChanger";
      const c = `Bloko-StateChanger-Action.${a}`;
      const d = `Bloko-StateChanger-Reset.${a}`;
      const b = "Bloko-StateChanger-StateChange";
      const u = o
        .n(s)()
        .build({
          defaults: {
            initial: null,
            className: "",
            selectorToHide: "[data-state-changer-hide]",
            selectorToDisable: "[data-state-changer-disable]",
          },
          create: function (e, t) {
            const o = i()(e);
            function n() {
              o.trigger(c, t.initial);
            }
            function l(e, t) {
              const o = e.filter(t);
              if (o.length) {
                return o;
              } else {
                return e;
              }
            }
            function s(e, o) {
              const n = l(e, t.selectorToDisable);
              const i = n.filter(":input");
              n.filter(":not(:input)").toggleClass(t.className, o);
              i.prop("disabled", o);
              n.trigger(b, {
                action: o ? "disable" : "enable",
              });
            }
            function a(e, o) {
              l(e, t.selectorToHide)
                .toggleClass(r().Hidden, o)
                .trigger(b, {
                  action: o ? "hide" : "show",
                });
            }
            function u(e, t) {
              a(e, !t);
            }
            const h = {
              show: u,
              hide: a,
              enable: function (e, t) {
                s(e, !t);
              },
              disable: s,
              swap: function (e, t) {
                u(e, t);
                a(i()("[data-change-group]", o).not(e), t);
              },
            };
            o.on(c, (e, t) => {
              [].concat(t.action).forEach((e) => {
                h[e](
                  o.find(`[data-change-group~=${t.target}]`),
                  t.state === undefined || t.state,
                );
              }, null);
            });
            if (t.initial) {
              n();
              o.on(d, n);
            }
            return h;
          },
          componentName: "bloko/blocks/stateChanger",
        });
    },
    563622: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(995020);
      var r = o(343856);
      const s = (e) => {
        let {
          title: t,
          info: o,
          infoNoWrap: n,
          done: s,
          current: a,
          link: c,
          iconOnly: d,
          Element: b = "span",
          source: u,
          ...h
        } = e;
        return (0, r.jsxs)(b, {
          className: i()(l.Z["bloko-stepwise-step"], {
            [l.Z["bloko-stepwise-step_done"]]: s,
            [l.Z["bloko-stepwise-step_current"]]: a,
            [l.Z["bloko-stepwise-step_link"]]: c,
            [l.Z["bloko-stepwise-step_icon-only"]]: d,
          }),
          source: u,
          ...h,
          children: [
            t &&
              (0, r.jsx)("span", {
                className: l.Z["bloko-stepwise-step__title"],
                children: t,
              }),
            o &&
              (0, r.jsx)("span", {
                className: i()(l.Z["bloko-stepwise-step__info"], {
                  [l.Z["bloko-stepwise-step__info_nowrap"]]: n,
                }),
                children: o,
              }),
          ],
        });
      };
    },
    128575: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        StepwiseStep: () => r.a,
        default: () => c,
      });
      var n = o(882177);
      var i = o.n(n);
      var l = o(807544);
      var r = o.n(l);
      var s = o(995020);
      var a = o(343856);
      const c = (e) => {
        let { children: t, embeddable: o, ...n } = e;
        return (0, a.jsx)("div", {
          className: i()(s.Z["bloko-stepwise"], {
            [s.Z["bloko-stepwise_embeddable"]]: o,
          }),
          ...n,
          children: (0, a.jsx)("div", {
            className: s.Z["bloko-stepwise__steps"],
            children: t,
          }),
        });
      };
    },
    991226: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        SuggestLayer: () => b.a,
        default: () => B,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(727158);
      var r = o.n(l);
      var s = o(284882);
      var a = o(882177);
      var c = o.n(a);
      var d = o(212938);
      var b = o.n(d);
      var u = o(387501);
      var h = o.n(u);
      var p = o(857726);
      var k = o.n(p);
      var g = o(591187);
      var m = o.n(g);
      var _ = o(323492);
      var f = o.n(_);
      var v = o(495046);
      var C = o.n(v);
      var w = o(943582);
      var x = o.n(w);
      var y = o(34302);
      var S = o(139664);
      var T = o(343856);
      function E(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      const L = (e, t, o) => {
        e.addEventListener(t, o);
        return () => {
          e.removeEventListener(t, o);
        };
      };
      class I extends i().PureComponent {
        constructor() {
          super(...arguments);
          E(
            this,
            "highlightedItemIndex",
            this.props.autoHighlightFirstSuggest ? 0 : -1,
          );
          E(
            this,
            "transitionStyles",
            (0, y.getTransitionStyles)(this.props.fadeTime),
          );
          E(this, "pickerRef", i().createRef());
          E(this, "elementMetrics", {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            right: 0,
            bottom: 0,
          });
          E(this, "unsubscribe", {});
          E(
            this,
            "startCheckingElementMetrics",
            k()(() => {
              if (!this.props.enabled || !this.props.element) {
                return;
              }
              const e =
                this.props.elementWrapperRef &&
                this.props.elementWrapperRef.current
                  ? this.props.elementWrapperRef.current
                  : this.props.element;
              const t = h().getMetrics(e);
              const { left: o, top: n, width: i, height: l } = t;
              if (
                Object.keys({
                  left: o,
                  top: n,
                  width: i,
                  height: l,
                }).some((e) => t[e] !== this.elementMetrics[e])
              ) {
                this.updatePosition();
              }
              this.startCheckingElementMetrics();
            }),
          );
          E(this, "handleKeyDown", (e) => {
            const { enabled: t, items: o } = this.props;
            this.handleMouseMove = this.mouseMoveHandler;
            this.keyboardHandler(!t || !o.length, e, this.highlightedItemIndex);
          });
          E(this, "handleMouseEnter", (e) => {
            this.updateHighlight(e);
          });
          E(this, "mouseMoveHandler", (e) => {
            this.handleMouseMove = undefined;
            this.updateHighlight(e);
          });
          E(this, "handleMouseMove", this.mouseMoveHandler);
          E(this, "handleMouseDown", (e, t) => {
            const { items: o } = this.props;
            e.preventDefault();
            this.selectItem(o[t]);
          });
          E(this, "emitHide", () => {
            var e;
            var t;
            if ((e = (t = this.props).onHide) !== null && e !== undefined) {
              e.call(t);
            }
          });
          E(this, "emitShow", () => {
            var e;
            var t;
            if ((e = (t = this.props).onShow) !== null && e !== undefined) {
              e.call(t);
            }
          });
          E(this, "selectItem", (e) => {
            var t;
            var o;
            if (
              (t = (o = this.props).onItemSelect) !== null &&
              t !== undefined
            ) {
              t.call(o, e);
            }
          });
          E(this, "selectHighlighted", () => {
            if (this.highlightedItemIndex !== -1) {
              this.selectItem(this.props.items[this.highlightedItemIndex]);
            }
          });
          E(this, "updateHighlight", (e) => {
            if (this.pickerRef.current) {
              this.highlightedItemIndex = (0, y.updateHighlight)(
                this.pickerRef.current,
                e,
              );
            }
          });
          E(
            this,
            "keyboardHandler",
            (0, y.createKeyboardHandler)(
              this.updateHighlight,
              this.emitHide,
              this.emitShow,
              this.selectHighlighted,
            ),
          );
          E(this, "updatePosition", () => {
            if (!this.pickerRef || !this.pickerRef.current) {
              return;
            }
            const e =
              this.props.elementWrapperRef &&
              this.props.elementWrapperRef.current
                ? this.props.elementWrapperRef.current
                : this.props.element;
            this.elementMetrics = (0, y.setMetrics)(
              e,
              this.pickerRef.current,
              0,
              this.props.onScreen,
            );
          });
          E(this, "renderItem", (e, t) => {
            const {
              itemKey: o,
              itemContent: n,
              autoHighlightFirstSuggest: i,
            } = this.props;
            return (0, T.jsx)(
              m(),
              {
                index: t,
                highlighted: t === 0 && i,
                handleMouseDown: this.handleMouseDown,
                handleMouseEnter: this.handleMouseEnter,
                handleMouseMove: this.handleMouseMove,
                children: n(e),
              },
              o(e),
            );
          });
        }
        componentDidMount() {
          this.unsubscribe = {
            resize: L(window, "resize", k()(this.updatePosition)),
            keydown: L(this.props.element, "keydown", this.handleKeyDown),
          };
          this.updatePosition();
          this.startCheckingElementMetrics();
        }
        componentWillUnmount() {
          var e;
          var t;
          var o;
          var n;
          if ((e = (t = this.unsubscribe).resize) !== null && e !== undefined) {
            e.call(t);
          }
          if (
            (o = (n = this.unsubscribe).keydown) !== null &&
            o !== undefined
          ) {
            o.call(n);
          }
        }
        componentDidUpdate(e) {
          this.updatePosition();
          const { items: t, element: o, fadeTime: n, enabled: i } = this.props;
          var l;
          var r;
          if (i && !e.enabled) {
            this.startCheckingElementMetrics();
          }
          if (e.items !== t) {
            this.highlightedItemIndex = this.props.autoHighlightFirstSuggest
              ? 0
              : -1;
          }
          if (e.fadeTime !== n) {
            this.transitionStyles = (0, y.getTransitionStyles)(n);
          }
          if (e.element !== o) {
            if (
              (l = (r = this.unsubscribe).keydown) !== null &&
              l !== undefined
            ) {
              l.call(r);
            }
            this.unsubscribe.keydown = L(o, "keydown", this.handleKeyDown);
          }
        }
        renderItems(e, t) {
          return (0, T.jsx)(f(), {
            children: e.map((e, o) => t(e, o)),
          });
        }
        render() {
          if (!this.props.element) {
            return null;
          }
          const {
            layer: e,
            fadeTime: t,
            enabled: o,
            items: n,
            renderItems: i,
          } = this.props;
          const { stateStyles: l, defaultStyle: a } = this.transitionStyles;
          return r().createPortal(
            (0, T.jsx)(s.ZP, {
              in: o && n.length > 0,
              appear: true,
              mountOnEnter: true,
              unmountOnExit: true,
              timeout: t,
              nodeRef: this.pickerRef,
              children: (t) =>
                (0, T.jsx)("div", {
                  ref: this.pickerRef,
                  style: {
                    ...a,
                    ...l[t],
                  },
                  className: c()(S.Z.suggest, C().layer[e]),
                  children: (i || this.renderItems)(n, this.renderItem),
                }),
            }),
            document.body,
          );
        }
      }
      I.displayName = "blocks/suggest/SuggestPicker/SuggestPicker";
      E(I, "defaultProps", {
        autoHighlightFirstSuggest: x().AUTO_SELECT_FIRST_SUGGEST,
        items: [],
        itemContent: (e) => e.text,
        itemKey: (e) => e.id || e.text,
        layer: x().LAYER,
        enabled: true,
        fadeTime: x().DROPDOWN_FADE_TIME,
      });
      const B = I;
    },
    511440: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      o(394280);
      var n = o(882177);
      var i = o.n(n);
      var l = o(139664);
      var r = o(241532);
      var s = o(343856);
      const a = (e) => {
        let {
          index: t,
          highlighted: o = false,
          children: n,
          handleMouseEnter: a,
          handleMouseDown: c,
          handleMouseMove: d,
        } = e;
        return (0, s.jsx)("li", {
          className: i()(l.Z.suggest__item, {
            [r.default.state.highlighted]: o,
          }),
          onMouseDown: (e) => {
            c(e, t);
          },
          onMouseMove: () => {
            if (d != null) {
              d(t);
            }
          },
          onMouseEnter: () => {
            if (a != null) {
              a(t);
            }
          },
          children: n,
        });
      };
    },
    846854: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(139664);
      var i = o(343856);
      const l = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("ul", {
          className: n.Z.suggest__items,
          "data-qa": "bloko-suggest-list",
          children: t,
        });
      };
    },
    251593: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      o(394280);
      var n = o(139664);
      var i = o(343856);
      const l = (e) => {
        let { Element: t = "span", children: o } = e;
        return (0, i.jsx)(t, {
          className: n.Z["suggest__text-hint"],
          children: o,
        });
      };
    },
    751571: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
      });
      var n = o(145662);
      var i = o.n(n);
      var l = o(326185);
      const r = (e, t) => (o) => {
        const n = (0, l.unescape)(e).replace(t, encodeURIComponent(o));
        return i()
          .get(n)
          .then((e) => e.data);
      };
    },
    681677: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(771674);
      var i = o.n(n);
      const l = (e) => (t) => {
        const o = e.filter((e) => {
          let { text: o } = e;
          return i().match(t, o);
        });
        return new Promise((e) => {
          setTimeout(
            () =>
              e({
                items: o,
              }),
            0,
          );
        });
      };
    },
    241532: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(139664);
      const i = {
        element: n.Z.suggest__item,
        state: {
          highlighted: n.Z.suggest__item_state_highlighted,
        },
        hover: {
          enable: n.Z.suggest__items_hover_enabled,
        },
        layer: {
          floating: n.Z["suggest_layer-floating"],
          overlay: n.Z["suggest_layer-overlay"],
          topmost: n.Z["suggest_layer-topmost"],
          "above-content": n.Z["suggest_layer-above-content"],
          "overlay-content": n.Z["suggest_layer-overlay-content"],
          "above-overlay-content": n.Z["suggest_layer-above-overlay-content"],
        },
        highlightSelector: "Bloko-Suggest-Highlight",
      };
    },
    178738: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(212938);
      const i = {
        AUTOSELECT: false,
        AUTO_SELECT_FIRST_SUGGEST: true,
        ALLOW_PICKER: true,
        FIELD: "text",
        WILDCARD: "%QUERY%",
        LIMIT: 10,
        SUGGEST_START_INPUT_LENGTH: 2,
        SELECTION_ON_BLUR: true,
        THROTTLE: 300,
        TEST_THROTTLE: 0,
        SELECT_EXACT_MATCH_ON_BLUR: false,
        DELIMITER: false,
        LAYER: o.n(n)().AboveContent,
        DROPDOWN_FADE_TIME: 120,
        SEARCH_ON_FOCUS: false,
      };
    },
    162248: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        SuggestLayer: () => l.a,
        default: () => p,
      });
      var n = o(394280);
      var i = o(212938);
      var l = o.n(i);
      var r = o(118565);
      var s = o.n(r);
      var a = o(991226);
      var c = o(178738);
      var d = o(675029);
      o(139664);
      var b = o(343856);
      function u(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      class h extends n.PureComponent {
        constructor() {
          var e;
          super(...arguments);
          e = this;
          u(this, "defaultSearchValue", this.getDefaultSearchValue());
          u(this, "state", {
            pickerItems: [],
            pickerEnabled: false,
            value: this.props.defaultValue ? this.props.defaultValue : null,
            search: this.defaultSearchValue,
            preparedSearchValue: (0, d.normalizeText)(this.defaultSearchValue),
          });
          u(this, "componentDidUpdate", (e) => {
            if (this.props.value !== e.value) {
              this.setState(
                h.getStateByValue(this.props.value, this.props.itemText),
              );
            }
          });
          u(this, "isControlled", () => this.props.value !== undefined);
          u(this, "inputRef", (e) => {
            const { passedInputRef: t } = this;
            if (t && t.hasOwnProperty("current")) {
              t.current = e;
            } else if (typeof t == "function") {
              t(e);
            }
            this.inputRefElement = e;
          });
          u(this, "renderClonedInputElement", () => {
            const e = this.props.children;
            this.passedInputRef = e.ref;
            this.passedInputOnChange = e.props.onChange;
            this.passedInputOnBlur = e.props.onBlur;
            this.passedInputOnFocus = e.props.onFocus;
            const t = {
              onChange: this.handleInputChange,
              onBlur: this.handleInputBlur,
              onFocus: this.handleInputFocus,
              ref: this.inputRef,
              source: this.props.source,
              autoComplete: "off",
              "aria-autocomplete": "list",
            };
            return (0, n.cloneElement)(e, {
              ...t,
              value: this.state.search,
            });
          });
          u(this, "updatePicker", (e) => {
            const {
              suggestStartInputLength: t,
              dataProvider: o,
              itemText: n,
              autoSelect: i,
              limit: l,
              allowPicker: r,
            } = this.props;
            this.setState({
              preparedSearchValue: e,
            });
            if (r) {
              if (e.length < t) {
                this.setState({
                  pickerItems: [],
                  pickerEnabled: false,
                });
              } else {
                o(e)
                  .then((t) => {
                    const { items: o } = t;
                    if (e === this.state.preparedSearchValue) {
                      this.setState({
                        pickerEnabled: true,
                        pickerItems: o.slice(0, l),
                      });
                      if (
                        i &&
                        o.length === 1 &&
                        (0, d.normalizeText)(n(o[0])) === e
                      ) {
                        this.handleItemSelect(o[0]);
                      }
                    }
                  })
                  .catch(() => {
                    if (e === this.state.preparedSearchValue) {
                      this.setState({
                        pickerItems: [],
                        pickerEnabled: false,
                      });
                    }
                  });
              }
            }
          });
          u(
            this,
            "updatePickerDebounced",
            s()(this.updatePicker, this.props.debounceDelay),
          );
          u(this, "handleInputFocus", function () {
            if (e.passedInputOnFocus) {
              e.passedInputOnFocus(...arguments);
            }
            const { itemText: t, searchOnFocus: o } = e.props;
            const { search: n, value: i } = e.state;
            if (i && t(i) && !o) {
              return;
            }
            const l = (0, d.normalizeText)(n);
            e.updatePickerDebounced(l);
          });
          u(this, "handleInputChange", function (t) {
            if (e.passedInputOnChange) {
              for (
                var o = arguments.length,
                  n = new Array(o > 1 ? o - 1 : 0),
                  i = 1;
                i < o;
                i++
              ) {
                n[i - 1] = arguments[i];
              }
              e.passedInputOnChange(t, ...n);
            }
            const l = t.target ? t.target.value : t;
            const r = (0, d.normalizeText)(l);
            e.setState({
              search: l,
            });
            if (r !== e.state.preparedSearchValue) {
              if (e.state.value) {
                e.handleItemSelect(null, l);
              }
              e.updatePickerDebounced(r);
            }
          });
          u(this, "handleInputBlur", function () {
            if (e.passedInputOnBlur) {
              e.passedInputOnBlur(...arguments);
            }
            const {
              itemText: t,
              selectOnBlur: o,
              selectExactMatchOnBlur: n,
              allowPicker: i,
            } = e.props;
            const { pickerItems: l, search: r, pickerEnabled: s } = e.state;
            e.setState({
              pickerEnabled: false,
            });
            if (s && i) {
              let i;
              if (o) {
                i = l[0];
              } else {
                if (!n) {
                  return;
                }
                {
                  const e = (0, d.normalizeText)(r);
                  i = l.find((o) => (0, d.normalizeText)(t(o)) === e) || null;
                }
              }
              e.handleItemSelect(i);
            }
          });
          u(this, "handleItemSelect", (e, t) => {
            const o = e ? Object.assign({}, e) : null;
            const { onChange: n } = this.props;
            if (n) {
              n(o, t);
            }
            if (!this.isControlled()) {
              this.selectItem(o);
            }
          });
          u(this, "handlePickerHide", () => {
            this.setState({
              pickerEnabled: false,
            });
          });
          u(this, "handlePickerShow", () => {
            this.setState({
              pickerEnabled: true,
            });
          });
        }
        static getDerivedStateFromProps(e, t) {
          if (e.value === undefined) {
            return null;
          }
          if (!e.value) {
            return {
              value: null,
            };
          }
          const o = {
            ...e.value,
          };
          return h.getStateByValue(
            o,
            e.itemText,
            !t.value || !(0, d.isObjectsEqual)(t.value, o),
          );
        }
        static getStateByValue(e, t) {
          let o =
            !(arguments.length > 2) ||
            arguments[2] === undefined ||
            arguments[2];
          if (!e) {
            return {
              value: null,
            };
          }
          const n = t(e);
          const i = {
            value: e,
            search: n,
            preparedSearchValue: (0, d.normalizeText)(n),
          };
          if (o) {
            i.pickerEnabled = false;
          }
          return i;
        }
        componentWillUnmount() {
          this.updatePickerDebounced.cancel();
        }
        getDefaultSearchValue() {
          const { defaultValue: e, defaultSearch: t, itemText: o } = this.props;
          if (e) {
            return o(e);
          } else {
            return t || "";
          }
        }
        selectItem(e = null) {
          this.setState(h.getStateByValue(e, this.props.itemText));
        }
        renderPicker() {
          const {
            itemContent: e,
            itemKey: t,
            renderItems: o,
            autoHighlightFirstSuggest: n,
            layer: i,
            allowPicker: l,
          } = this.props;
          const { pickerEnabled: r, pickerItems: s } = this.state;
          if (this.inputRefElement) {
            return (0, b.jsx)(a.default, {
              element: this.inputRefElement,
              elementWrapperRef: this.props.positionElementRef,
              items: s,
              itemContent: e,
              itemKey: t,
              renderItems: o,
              onItemSelect: this.handleItemSelect,
              autoHighlightFirstSuggest: n,
              onHide: this.handlePickerHide,
              onShow: this.handlePickerShow,
              layer: i,
              enabled: r && l,
            });
          } else {
            return null;
          }
        }
        render() {
          return (0, b.jsxs)(n.Fragment, {
            children: [this.renderClonedInputElement(), this.renderPicker()],
          });
        }
      }
      h.displayName = "blocks/suggest/index/Suggest";
      u(h, "defaultProps", {
        autoSelect: c.default.AUTOSELECT,
        allowPicker: c.default.ALLOW_PICKER,
        selectOnBlur: c.default.SELECTION_ON_BLUR,
        selectExactMatchOnBlur: c.default.SELECT_EXACT_MATCH_ON_BLUR,
        limit: c.default.LIMIT,
        itemText: (e) => e[c.default.FIELD],
        suggestStartInputLength: c.default.SUGGEST_START_INPUT_LENGTH,
        debounceDelay: c.default.THROTTLE,
        searchOnFocus: c.default.SEARCH_ON_FOCUS,
      });
      const p = h;
    },
    5296: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => D,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(521611);
      var r = o(987598);
      var s = o.n(r);
      var a = o(845807);
      var c = o.n(a);
      var d = o(857726);
      var b = o.n(d);
      var u = o(267387);
      var h = o.n(u);
      var p = o(592755);
      var k = o.n(p);
      var g = o(495046);
      var m = o.n(g);
      var _ = o(943582);
      var f = o.n(_);
      var v = o(975809);
      var C = o.n(v);
      var w = o(12684);
      var x = o.n(w);
      var y = o(105249);
      var S = o.n(y);
      var T = o(34302);
      const E = window.bloko && window.bloko.isTest;
      const L = "suggest";
      const I = E ? 0 : 120;
      const B = ".Bloko-Suggest-Item";
      const M = ".Bloko-Suggest-List";
      const N = ".Bloko-Suggest-Highlight";
      const P = i()(window);
      const O = function (e, t) {
        const o = i()(e);
        const n = o;
        const r = t.hidden;
        let a;
        let c;
        let d;
        let u;
        let p;
        let g;
        let _;
        let f;
        let v;
        let w = true;
        let x = [];
        let y = null;
        let E = false;
        const O = t.suggestStartInputLength;
        const D = (0, T.createKeyboardHandler)(Y, A, z, function () {
          j($(J()));
        });
        function Z() {
          const e = q().find(M);
          if (!e.hasClass(m().hover.enable)) {
            e.addClass(m().hover.enable);
            e.find(B).removeClass(l.ZP.values(m().state).join(" "));
          }
        }
        function A() {
          if (w) {
            return;
          }
          w = true;
          const e = function () {
            if (w) {
              q().detach();
              o.trigger(`hid.${L}`);
              a = undefined;
            }
          };
          if (q().hasClass(s().AnimFade)) {
            q().one("transitionend", e);
          } else {
            setTimeout(e, 0);
          }
          q().removeClass(s().AnimFadeIn);
          P.off(`resize.${L}`);
        }
        function R(e) {
          clearTimeout(p);
          setTimeout(A, I);
          if (i().isPlainObject(e)) {
            d = null;
            if (v) {
              v.val(e.id);
            }
            te(e);
          }
        }
        function j(e) {
          a = true;
          R(e);
          const i = e[t.field];
          n.val(i);
          if (i) {
            c = (0, T.normalizeText)(i);
          }
          n.trigger("input");
          o.trigger(`selected.${L}`, [e]);
        }
        function $(e) {
          return x[i()(e).data("datum-id")];
        }
        function F() {
          return n.val().trim();
        }
        function H() {
          return (0, T.normalizeText)(F()) !== c;
        }
        function W(e) {
          j($(e.currentTarget));
        }
        function q() {
          return (f ||= (function () {
            const e = i()(C().render());
            e.on(`mousedown.${L} touchstart.${L}`, () => {
              E = true;
            })
              .on(`mousemove.${L}`, Z)
              .on(`click.${L}`, B, W);
            return e;
          })());
        }
        function V() {
          const e = q();
          (0, T.setMetrics)(n.get(0), e.get(0), t.rightpadding);
          const o = t.layer;
          e.removeClass(l.ZP.values(m().layer).join(" "));
          e.addClass(m().layer[o]);
        }
        function z() {
          if (w && _) {
            if (!!d && !(F().length < O)) {
              w = false;
              q().detach().addClass(s().AnimFade).appendTo(document.body);
              V();
              q().addClass(s().AnimFadeIn);
              P.on(`resize.${L}`, b()(V));
              o.trigger(`showed.${L}`);
            }
          }
        }
        function U() {
          x = [];
          d = null;
          c = null;
          q().html("");
        }
        function Y(e) {
          const t = q();
          const o = t.find(B);
          const n = (0, T.updateHighlight)(t.get(0), e);
          o.removeClass(m().highlightSelector);
          if (n !== -1) {
            o.eq(n).addClass(m().highlightSelector);
          }
        }
        function G(e, n) {
          if (F() !== e) {
            return;
          }
          if (
            !i().isPlainObject(n) ||
            !Array.isArray(n.items) ||
            !n.items.length
          ) {
            if (!w) {
              o.one(`hid.${L}`, U);
            }
            o.trigger(`Bloko-Suggest-NotFound.${L}`);
            A();
            return;
          }
          const l = Object.assign({}, n, {
            items: n.items.slice(0, t.limit).map((e, t) =>
              Object.assign({}, e, {
                datumId: t,
                id: String(e.id),
              }),
            ),
            delimiter: t.delimiter,
          });
          if (
            t.autoselect &&
            l.items.length === 1 &&
            l.items[0][t.field].toUpperCase() === e.toUpperCase()
          ) {
            R((r = l.items[0]));
            o.trigger(`autoselected.${L}`, [r]);
            return;
          }
          var r;
          if (JSON.stringify(l) === d) {
            z();
            return;
          }
          d = JSON.stringify(l);
          x = l.items;
          const s = q();
          s.html(
            (function (e) {
              const o = {
                item: t.template,
              };
              return S().render(e, o);
            })(l),
          );
          s.find(B).hover(
            (e) => {
              i()(e.currentTarget)
                .addClass(m().state.highlighted)
                .addClass(m().highlightSelector);
            },
            (e) => {
              i()(e.currentTarget)
                .removeClass(m().state.highlighted)
                .removeClass(m().highlightSelector);
            },
          );
          if (t.autoselectfirstsuggest) {
            Y(0);
          }
          if (w) {
            z();
          } else {
            V();
          }
        }
        function K(e) {
          if (F() === e) {
            o.trigger(`Bloko-Suggest-NotFound.${L}`);
            U();
          }
        }
        function X() {
          const e = F();
          if (e.length < O) {
            o.trigger(`Bloko-Suggest-MinQueryLength.${L}`);
            A();
            return;
          }
          u(e).then(G.bind(null, e), K.bind(null, e));
        }
        function Q() {
          clearTimeout(g);
          c = (0, T.normalizeText)(F());
          if (v) {
            v.val("");
          }
          y = null;
          o.trigger(`unselected.${L}`);
          clearTimeout(p);
          p = setTimeout(X, t.throttle);
        }
        function J() {
          return q().find(B).filter(N);
        }
        function ee(e) {
          const t = J().index();
          q().find(M).removeClass(m().hover.enable);
          D(w, e, t);
        }
        function te(e) {
          y = {
            id: e.id,
          };
          y[t.field] = e[t.field];
        }
        function oe(e) {
          ne(h()(e, t.wildcard));
        }
        function ne(e) {
          u = e;
        }
        n.prop("autocomplete", "off");
        _ = document.activeElement === n[0];
        const ie = F();
        if (ie) {
          c = (0, T.normalizeText)(ie);
        }
        if (r) {
          v =
            n.next().attr("name") === r
              ? n.next()
              : i()("<input>", {
                  type: "hidden",
                  name: r,
                  value: "",
                }).insertAfter(n);
          v.val(t.hiddenValue);
          v.addClass(t.hiddenClasses);
        }
        if (t.dataProvider) {
          ne(t.dataProvider);
        } else if (t.remote) {
          oe(t.remote);
        } else {
          ne(k()(t.data.items));
        }
        (function () {
          n.on(`focus.${L}`, () => {
            _ = true;
            if (H()) {
              Q();
            } else {
              clearTimeout(g);
              g = setTimeout(z, t.throttle);
            }
          })
            .on(`blur.${L}`, () => {
              if (document.activeElement !== this) {
                _ = false;
                if (!E) {
                  (function () {
                    if (!a && !w) {
                      if (t.selectExactMatchOnBlur) {
                        const e = (0, T.normalizeText)(F());
                        const o = l.ZP.find(
                          x,
                          (o) => (0, T.normalizeText)(o[t.field]) === e,
                        );
                        if (o) {
                          j(o);
                        }
                      }
                      if (t.selectonblur) {
                        const e = q().find(B);
                        if (e.length) {
                          j($(e.first()));
                        }
                      }
                      A();
                    }
                  })();
                }
              }
            })
            .on(`input.${L} change.${L}`, () => {
              if (H()) {
                Q();
              }
            })
            .on(`keydown.${L}`, ee);
          i()(document).on(`mouseup.${L} touchend.${L}`, () => {
            E = false;
          });
        })();
        return {
          selectItem: R,
          selectItemByData: function (e) {
            clearTimeout(p);
            setTimeout(A, I);
            if (!i().isPlainObject(e)) {
              return;
            }
            d = null;
            const l = e[t.field];
            if (l) {
              n.val(l);
              c = (0, T.normalizeText)(l);
              n.trigger("input");
              if (v) {
                v.val(e.id);
              }
              te(e);
              o.trigger(`selected.${L}`, [e]);
            }
          },
          getSelected: function () {
            return y;
          },
          clear: function () {
            n.val("").trigger("change");
            A();
          },
          changeRemote: function (e) {
            if (!t.dataProvider) {
              oe(e);
            }
          },
        };
      };
      const D = c().build({
        defaults: {
          limit: f().LIMIT,
          wildcard: f().WILDCARD,
          throttle: E ? f().TEST_THROTTLE : f().THROTTLE,
          autoselect: f().AUTOSELECT,
          selectonblur: f().SELECTION_ON_BLUR,
          selectExactMatchOnBlur: f().SELECT_EXACT_MATCH_ON_BLUR,
          autoselectfirstsuggest: f().AUTO_SELECT_FIRST_SUGGEST,
          delimiter: f().DELIMITER,
          rightpadding: 0,
          layer: "above-content",
          field: f().FIELD,
          template: x(),
          suggestStartInputLength: f().SUGGEST_START_INPUT_LENGTH,
        },
        create(e, t) {
          if (
            !t ||
            (typeof t.dataProvider != "function" &&
              typeof t.remote != "string" &&
              typeof t.data != "object")
          ) {
            throw new Error(
              `${L}: should be passed one of the following params: {Function} dataProvider | {String} remote | {Object} data`,
            );
          }
          return new O(e, t);
        },
        componentName: "bloko/blocks/suggest",
      });
    },
    772430: function (e, t, o) {
      "use strict";

      o.r(t);
    },
    770191: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(862424);
      var l = o(267387);
      var r = o.n(l);
      const s = (e) => {
        let { remote: t, wildcard: o } = e;
        const l = (0, n.useContext)(i.TranslationLangContext);
        return (0, n.useMemo)(() => r()(t.replace("{lang}", l), o), [l, t, o]);
      };
    },
    675029: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        createKeyboardHandler: () => b,
        getTransitionStyles: () => u,
        isObjectsEqual: () => d,
        normalizeText: () => c,
        setMetrics: () => h,
        updateHighlight: () => p,
      });
      var n = o(125702);
      var i = o(549155);
      var l = o(387501);
      var r = o.n(l);
      var s = o(495046);
      var a = o.n(s);
      const c = (e) => e.trim().toUpperCase();
      const d = (e, t) => {
        const o = Object.getOwnPropertyNames(e);
        const n = Object.getOwnPropertyNames(t);
        if (o.length !== n.length) {
          return false;
        }
        for (let n = 0; n < o.length; n++) {
          const i = o[n];
          if (e[i] !== t[i]) {
            return false;
          }
        }
        return true;
      };
      const b = (e, t, o, i) => (l, r, s) => {
        if (l) {
          if (r.keyCode === n.KeyCode.ArrowDown) {
            r.preventDefault();
            o();
          }
        } else {
          switch (r.keyCode) {
            case n.KeyCode.ESC:
              r.preventDefault();
              t();
              break;
            case n.KeyCode.ArrowUp:
              r.preventDefault();
              e(s - 1);
              break;
            case n.KeyCode.ArrowDown:
              r.preventDefault();
              e(s + 1);
              break;
            case n.KeyCode.Enter:
              if (s === -1) {
                break;
              }
              r.preventDefault();
              i();
          }
        }
      };
      const u = (e) => ({
        stateStyles: {
          entering: {
            opacity: 0,
          },
          entered: {
            opacity: 1,
          },
        },
        defaultStyle: {
          transition: `opacity ${e}ms ease-in-out`,
          opacity: 0,
        },
      });
      const h = function (e, t, o = 0, n = false) {
        const l = r().getElement(t);
        const s = r().getMetrics(e);
        const { left: a, top: c, height: d, width: b } = s;
        let u;
        let h;
        let p;
        l.style.maxHeight = "";
        l.style.left = "-9999px";
        l.style.top = "-9999px";
        if (n) {
          const t = r().getBoundingClientRect(e);
          u = r().getBoundingClientRect(l);
          h = window.innerHeight;
          p = h - t.top - t.height - 10;
        } else {
          u = r().getMetrics(l);
          h = r().getWindowScrollHeight();
          p = h - c - d - 10;
        }
        const k = h > 0;
        const g = Math.max(p, 105);
        const m = k && u.height > g ? g : "";
        let _ = {
          left: a,
          top: c + d,
          width: b + o,
          right: "",
          maxHeight: m,
        };
        if ((0, i.getBreakpoint)() === i.Breakpoint.XS) {
          _ = {
            left: 0,
            top: _.top,
            width: "auto",
            right: 0,
            maxHeight: n ? m : "",
          };
        }
        Object.keys(_).forEach((e) => {
          const t = _[e];
          const o = typeof t == "number" && !isNaN(t);
          l.style[e] = o ? `${t}px` : String(t);
        });
        return s;
      };
      const p = (e, t) => {
        const o = [...e.querySelectorAll(`.${a().element}`)];
        const n = o.find((e) => e.classList.contains(a().state.highlighted));
        const i = o.length - 1;
        let l;
        l = t < -1 ? i : t > i ? -1 : t;
        if (!!n && (l === -1 || n !== o[l])) {
          n.classList.remove(a().state.highlighted);
        }
        if (l === -1) {
          return -1;
        }
        o[l].classList.add(a().state.highlighted);
        const s = r().getMetrics(e);
        const c = r().getMetrics(o[l]);
        if (!r().isRectangleInRectangle(c, s)) {
          const t = o[l].offsetTop < e.scrollTop;
          const n = o[l].offsetTop;
          e.scrollTop = t ? n : n + o[l].offsetHeight - e.offsetHeight;
        }
        return l;
      };
    },
    98894: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        ACTION_STATES: () => l,
        CLICK_REGION_THRESHOLD: () => n,
        MAX_HORIZONTAL_SWIPE_ANGLE: () => i,
        SwipeDirection: () => r,
      });
      const n = 10;
      const i = 45;
      const l = {
        NONE: null,
        TOUCH: "TOUCH",
        MOUSE: "MOUSE",
      };
      let r;
      (function (e) {
        e.Horizontal = "horizontal";
        e.Vertical = "vertical";
      })((r ||= {}));
    },
    737539: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        SwipeDirection: () => i.SwipeDirection,
        default: () => c,
      });
      var n = o(394280);
      var i = o(98894);
      var l = o(470028);
      var r = o(248837);
      var s = o(343856);
      const a = {
        quickSwipePercent: 6,
        minSwipePercent: 20,
        maxBorderOffsetPercent: 20,
        direction: i.SwipeDirection.Horizontal,
      };
      const c = (e) => {
        let {
          children: t,
          quickSwipePercent: o = a.quickSwipePercent,
          minSwipePercent: c = a.minSwipePercent,
          maxBorderOffsetPercent: d = a.maxBorderOffsetPercent,
          onSwipePrevent: b,
          onSwipeEnd: u,
          onSwipeStart: h,
          onSwipeMove: p,
          direction: k = a.direction,
          ...g
        } = e;
        const m = (0, n.useRef)(null);
        const _ = (0, n.useRef)({
          type: i.ACTION_STATES.NONE,
          moveStarted: false,
          isSwipingHorizontally: false,
          clientX: 0,
          clientY: 0,
          swipeDistance: 0,
          isQuickSwipe: false,
          quickSwipeTimeout: null,
          isScrolling: false,
          directionWay: k,
        });
        const f = (0, n.useCallback)((e) => {
          Object.assign(_.current, e);
        }, []);
        const {
          swipeMove: v,
          swipeStart: C,
          swipeEnd: w,
        } = (0, r.default)({
          quickSwipePercent: o,
          minSwipePercent: c,
          maxBorderOffsetPercent: d,
          containerEl: m,
          setSwipeDetails: f,
          swipeDetails: _,
          onSwipePrevent: b,
          onSwipeEnd: u,
          onSwipeStart: h,
          onSwipeMove: p,
          direction: k,
        });
        const {
          onTouchStart: x,
          onTouchMove: y,
          onTouchEnd: S,
          onTouchCancel: T,
          onMouseDown: E,
          onMouseMove: L,
          onMouseUp: I,
          onMouseLeave: B,
        } = (0, l.default)({
          setSwipeDetails: f,
          swipeDetails: _,
          swipeMove: v,
          swipeStart: C,
          swipeEnd: w,
        });
        (0, n.useEffect)(() => {
          var e;
          var t;
          var o;
          var n;
          if (m != null && (e = m.current) !== null && e !== undefined) {
            e.addEventListener("touchstart", x, {
              passive: false,
            });
          }
          if (m != null && (t = m.current) !== null && t !== undefined) {
            t.addEventListener("touchmove", y, {
              passive: false,
            });
          }
          if (m != null && (o = m.current) !== null && o !== undefined) {
            o.addEventListener("touchend", S, {
              passive: false,
            });
          }
          if (m != null && (n = m.current) !== null && n !== undefined) {
            n.addEventListener("touchcancel", T, {
              passive: false,
            });
          }
          return () => {
            var e;
            var t;
            var o;
            var n;
            if (m != null && (e = m.current) !== null && e !== undefined) {
              e.removeEventListener("touchstart", x);
            }
            if (m != null && (t = m.current) !== null && t !== undefined) {
              t.removeEventListener("touchmove", y);
            }
            if (m != null && (o = m.current) !== null && o !== undefined) {
              o.removeEventListener("touchend", S);
            }
            if (m != null && (n = m.current) !== null && n !== undefined) {
              n.removeEventListener("touchcancel", T);
            }
          };
        }, [T, S, y, x]);
        const M = (0, n.useMemo)(
          () => ({
            ref: m,
            onMouseDown: E,
            onMouseMove: L,
            onMouseUp: I,
            onMouseLeave: B,
          }),
          [E, B, L, I],
        );
        return (0, s.jsx)(n.Fragment, {
          children:
            t &&
            t({
              swipeContainerProps: M,
              ...g,
            }),
        });
      };
    },
    581514: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(521611);
      var r = o(845807);
      var s = o.n(r);
      var a = o(456486);
      var c = o.n(a);
      var d = o(98894);
      var b = o(793567);
      const u = i().View.extend({
        events: {
          "touchstart .Bloko-Swipe": "swipeStartTouch",
          "touchmove .Bloko-Swipe": "swipeMoveTouch",
          "touchend .Bloko-Swipe": "swipeEndTouch",
          "touchleave .Bloko-Swipe": "swipeEndTouch",
          "mousedown .Bloko-Swipe": "swipeStartMouse",
          "mousemove .Bloko-Swipe": "swipeMoveMouse",
          "mouseup .Bloko-Swipe": "swipeEndMouse",
          "mouseleave .Bloko-Swipe": "swipeEndMouse",
          "MSPointerDown .Bloko-Swipe": "swipeStartMouse",
          "MSPointerMove .Bloko-Swipe": "swipeMoveMouse",
          "MSPointerUp .Bloko-Swipe": "swipeEndMouse",
        },
        initialize(e) {
          this.$container = this.$(".Bloko-Swipe");
          this.quickSwipePercent = e.quickSwipePercent;
          this.minSwipePercent = e.minSwipePercent;
          this.maxBorderOffsetPercent = e.maxBorderOffsetPercent;
          this.setSwipeDetails = this.setSwipeDetails.bind(this);
        },
        swipeStartTouch(e) {
          this.type = d.ACTION_STATES.TOUCH;
          const t = e.originalEvent.changedTouches[0];
          this.moveStart(t.pageX, t.pageY);
        },
        swipeMoveTouch(e) {
          if (this.type !== d.ACTION_STATES.TOUCH) {
            e.preventDefault();
          } else {
            const t = e.originalEvent.changedTouches[0];
            this.swipeMove(e, t.pageX, t.pageY);
          }
        },
        swipeEndTouch() {
          if (this.type === d.ACTION_STATES.TOUCH) {
            this.swipeEnd();
            this.type = d.ACTION_STATES.NONE;
          }
        },
        swipeStartMouse(e) {
          if (this.type !== d.ACTION_STATES.TOUCH) {
            this.type = d.ACTION_STATES.MOUSE;
            this.moveStart(e.pageX, e.pageY);
          }
        },
        swipeMoveMouse(e) {
          if (this.type === d.ACTION_STATES.MOUSE) {
            this.swipeMove(e, e.pageX, e.pageY);
          }
        },
        swipeEndMouse() {
          if (this.type === d.ACTION_STATES.MOUSE) {
            this.swipeEnd();
            this.type = d.ACTION_STATES.NONE;
          }
        },
        setSwipeDetails(e) {
          Object.keys(e).forEach((t) => {
            this[t] = e[t];
          });
        },
        moveStart(e, t) {
          (0, b.swipeStart)(e, t, {
            getSwipeDetails: (e) => this[e],
            setSwipeDetails: this.setSwipeDetails,
          });
        },
        swipeMove(e, t, o) {
          (0, b.swipeMove)(e, t, o, {
            onSwipeMove: (e) => this.trigger("bloko-swipe-move", e),
            onSwipeStart: (e) => this.trigger("bloko-swipe-start", e),
            getSwipeDetails: (e) => this[e],
            setSwipeDetails: this.setSwipeDetails,
          });
        },
        swipeEnd() {
          (0, b.swipeEnd)(
            this.quickSwipePercent,
            this.minSwipePercent,
            this.maxBorderOffsetPercent,
            {
              onSwipePrevent: (e) => this.trigger("bloko-swipe-prevent", e),
              onSwipeEnd: (e) => this.trigger("bloko-swipe-end", e),
              getContainerBoundingClientRect: () => ({
                width: this.$container.width(),
                left: this.$container.offset().left,
              }),
              getSwipeDetails: (e) => this[e],
              setSwipeDetails: this.setSwipeDetails,
            },
          );
        },
      });
      const h = s().build({
        defaults: {
          quickSwipePercent: 6,
          minSwipePercent: 20,
          maxBorderOffsetPercent: 20,
        },
        create(e, t) {
          const o = new u(
            l.ZP.extend(
              {
                el: e,
              },
              t,
            ),
          );
          const n = c().extend({});
          o.on("bloko-swipe-prevent", (e) => {
            n._trigger("bloko-swipe-prevent", e);
          })
            .on("bloko-swipe-start", (e) => {
              n._trigger("bloko-swipe-start", e);
            })
            .on("bloko-swipe-end", (e) => {
              n._trigger("bloko-swipe-end", e);
            })
            .on("bloko-swipe-move", (e) => {
              n._trigger("bloko-swipe-move", e);
            });
          return n;
        },
        componentName: "bloko/blocks/swipe",
      });
    },
    793567: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        swipeEnd: () => r,
        swipeMove: () => l,
        swipeStart: () => s,
      });
      var n = o(98894);
      const i = (e, t) => ({
        type: e("type"),
        clientX: e("clientX"),
        clientY: e("clientY"),
        distance: e("swipeDistance"),
        isQuickSwipe: e("isQuickSwipe"),
        direction: t,
      });
      const l = (e, t, o, i) => {
        let {
          directionWay: l = n.SwipeDirection.Horizontal,
          onSwipeMove: r,
          onSwipeStart: s,
          getSwipeDetails: a,
          setSwipeDetails: c,
        } = i;
        if (!a("moveStarted") || a("isScrolling")) {
          return;
        }
        const d = t - a("clientX");
        const b = o - a("clientY");
        c({
          swipeDistance:
            a("swipeDistance") + (l === n.SwipeDirection.Horizontal ? d : b),
          clientX: t,
          clientY: o,
        });
        if (!a("isSwipingHorizontally")) {
          if (
            (Math.atan2(Math.abs(b), Math.abs(d)) * 180) / Math.PI >
              n.MAX_HORIZONTAL_SWIPE_ANGLE &&
            l === n.SwipeDirection.Horizontal
          ) {
            c({
              isScrolling: true,
            });
            return;
          }
          c({
            isSwipingHorizontally: true,
          });
          if (s != null) {
            s({
              type: a("type"),
            });
          }
          c({
            isQuickSwipe: true,
          });
          c({
            quickSwipeTimeout: setTimeout(() => {
              c({
                isQuickSwipe: false,
              });
            }, 500),
          });
        }
        if (a("type") === n.ACTION_STATES.TOUCH) {
          e.preventDefault();
        }
        if (r != null) {
          r({
            type: a("type"),
            clientX: a("clientX"),
            clientY: a("clientY"),
            distance: a("swipeDistance"),
          });
        }
      };
      const r = (e, t, o, l) => {
        let {
          directionWay: r = n.SwipeDirection.Horizontal,
          getContainerBoundingClientRect: s,
          onSwipePrevent: a,
          onSwipeEnd: c,
          getSwipeDetails: d,
          setSwipeDetails: b,
        } = l;
        if (!d("moveStarted")) {
          return;
        }
        const u = s();
        if (!u) {
          return;
        }
        b({
          moveStarted: false,
          isScrolling: false,
        });
        const h = u[n.SwipeDirection.Horizontal ? "width" : "height"];
        const p = u[n.SwipeDirection.Horizontal ? "left" : "top"];
        const k = d("quickSwipeTimeout");
        if (
          d("isQuickSwipe") &&
          Math.abs(d("swipeDistance")) < n.CLICK_REGION_THRESHOLD
        ) {
          const e = r === n.SwipeDirection.Horizontal ? "clientX" : "clientY";
          if (d(e) >= p && d(e) < p + (h * o) / 100) {
            if (c != null) {
              c(i(d, -1));
            }
            if (k) {
              clearTimeout(k);
            }
            return;
          }
          if (d(e) <= p + h && d(e) > p + h * (1 - o / 100)) {
            if (c != null) {
              c(i(d, 1));
            }
            if (k) {
              clearTimeout(k);
            }
            return;
          }
        }
        if (d("isQuickSwipe") && Math.abs(d("swipeDistance")) > (h * e) / 100) {
          if (c != null) {
            c(i(d, d("swipeDistance") > 0 ? -1 : 1));
          }
          if (k) {
            clearTimeout(k);
          }
          return;
        }
        if (Math.abs(d("swipeDistance")) > (h * t) / 100) {
          if (c != null) {
            c(i(d, d("swipeDistance") > 0 ? -1 : 1));
          }
        } else if (a != null) {
          a({
            type: d("type"),
            distance: d("swipeDistance"),
          });
        }
      };
      const s = (e, t, o) => {
        let {
          setSwipeDetails: i,
          directionWay: l = n.SwipeDirection.Horizontal,
        } = o;
        i({
          moveStarted: true,
          isSwipingHorizontally: false,
          clientX: e,
          clientY: t,
          swipeDistance: 0,
          directionWay: l,
        });
      };
    },
    470028: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(394280);
      var i = o(98894);
      const l = (e) => {
        let {
          setSwipeDetails: t,
          swipeDetails: o,
          swipeMove: l,
          swipeStart: r,
          swipeEnd: s,
        } = e;
        const a = (0, n.useCallback)(
          (e) => {
            if (o.current.type !== i.ACTION_STATES.TOUCH) {
              t({
                type: i.ACTION_STATES.MOUSE,
              });
              r(e.pageX, e.pageY);
            }
          },
          [o, t, r],
        );
        const c = (0, n.useCallback)(
          (e) => {
            if (o.current.type === i.ACTION_STATES.MOUSE) {
              l(e, e.pageX, e.pageY);
            }
          },
          [o, l],
        );
        const d = (0, n.useCallback)(() => {
          if (o.current.type === i.ACTION_STATES.MOUSE) {
            s();
            t({
              type: i.ACTION_STATES.NONE,
            });
          }
        }, [o, s, t]);
        const b = (0, n.useCallback)(
          (e) => {
            t({
              type: i.ACTION_STATES.TOUCH,
            });
            const o = e.changedTouches[0];
            r(o.pageX, o.pageY);
          },
          [t, r],
        );
        const u = (0, n.useCallback)(
          (e) => {
            if (o.current.type !== i.ACTION_STATES.TOUCH) {
              e.preventDefault();
            } else {
              const t = e.changedTouches[0];
              l(e, t.pageX, t.pageY);
            }
          },
          [o, l],
        );
        const h = (0, n.useCallback)(() => {
          if (o.current.type === i.ACTION_STATES.TOUCH) {
            s();
            t({
              type: i.ACTION_STATES.NONE,
            });
          }
        }, [o, s, t]);
        return {
          onTouchStart: b,
          onTouchMove: u,
          onTouchEnd: h,
          onTouchCancel: h,
          onMouseDown: a,
          onMouseMove: c,
          onMouseUp: d,
          onMouseLeave: d,
        };
      };
    },
    248837: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(394280);
      var i = o(793567);
      const l = (e) => {
        let {
          quickSwipePercent: t,
          minSwipePercent: o,
          maxBorderOffsetPercent: l,
          containerEl: r,
          swipeDetails: s,
          setSwipeDetails: a,
          onSwipePrevent: c,
          onSwipeEnd: d,
          onSwipeStart: b,
          onSwipeMove: u,
          direction: h,
        } = e;
        return {
          swipeMove: (0, n.useCallback)(
            (e, t, o) => {
              (0, i.swipeMove)(e, t, o, {
                directionWay: h,
                onSwipeMove: u,
                onSwipeStart: b,
                getSwipeDetails: (e) => s.current[e],
                setSwipeDetails: a,
              });
            },
            [h, u, b, a, s],
          ),
          swipeStart: (0, n.useCallback)(
            (e, t) => {
              (0, i.swipeStart)(e, t, {
                directionWay: h,
                setSwipeDetails: a,
              });
            },
            [h, a],
          ),
          swipeEnd: (0, n.useCallback)(() => {
            (0, i.swipeEnd)(t, o, l, {
              directionWay: h,
              onSwipePrevent: c,
              onSwipeEnd: d,
              getSwipeDetails: (e) => s.current[e],
              setSwipeDetails: a,
              getContainerBoundingClientRect: () => {
                var e;
                var t;
                if (
                  r == null ||
                  (e = r.current) === null ||
                  e === undefined ||
                  (t = e.getBoundingClientRect) === null ||
                  t === undefined
                ) {
                  return undefined;
                } else {
                  return t.call(e);
                }
              },
            });
          }, [h, r, l, o, d, c, t, a, s]),
        };
      };
    },
    295040: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        TabDropdown: () => u,
        TabItem: () => h,
        default: () => b,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(882177);
      var r = o.n(l);
      var s = o(56696);
      var a = o(867396);
      var c = o(343856);
      function d(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      const b = (0, n.forwardRef)((e, t) => {
        let {
          Element: o = "button",
          children: n,
          active: i,
          defaultActive: l,
          id: r,
          searchText: s,
          onClick: a,
          ...d
        } = e;
        return (0, c.jsx)(o, {
          ...d,
          onClick: a,
          draggable: false,
          ref: t,
          children: n,
        });
      });
      class u extends n.PureComponent {
        constructor() {
          super(...arguments);
          d(this, "onTabClick", (e) => {
            var t;
            var o;
            if ((t = (o = this.props).onClick) !== null && t !== undefined) {
              t.call(o, e);
            }
          });
        }
        render() {
          const { children: e, active: t } = this.props;
          return i().cloneElement(e, {
            className: r()(
              s.Z["bloko-drop-menu-item"],
              s.Z["bloko-drop-menu-item_selectable"],
              {
                [s.Z["bloko-drop-menu-item_selected"]]: this.props.active,
              },
            ),
            onClick: this.onTabClick,
            active: t,
          });
        }
      }
      u.displayName = "blocks/tabs/Tab/TabDropdown";
      class h extends n.PureComponent {
        constructor() {
          super(...arguments);
          d(this, "elementRef", (0, n.createRef)());
          d(this, "preventScrollOnFocus", false);
          d(this, "setActiveTab", () => {
            var e;
            var t;
            if (this.props.active) {
              if (
                (e = (t = this.props).setElement) !== null &&
                e !== undefined
              ) {
                e.call(t, this.elementRef.current);
              }
            }
          });
          d(this, "onFocus", () => {
            var e;
            var t;
            if (!this.preventScrollOnFocus) {
              if (
                (e = (t = this.props).setElement) !== null &&
                e !== undefined
              ) {
                e.call(t, this.elementRef.current);
              }
            }
            this.preventScrollOnFocus = false;
          });
          d(this, "onMouseDown", () => {
            this.preventScrollOnFocus = true;
          });
          d(this, "onTabClick", (e) => {
            var t;
            var o;
            if ((t = (o = this.props).onClick) !== null && t !== undefined) {
              t.call(o, e);
            }
          });
        }
        componentDidMount() {
          this.setActiveTab();
        }
        componentDidUpdate(e) {
          if (this.props.active !== e.active) {
            this.setActiveTab();
          }
        }
        render() {
          const { children: e, active: t } = this.props;
          return i().cloneElement(e, {
            className: r()(a.Z["bloko-tabs__item"], {
              [a.Z["bloko-tabs__item_active"]]: t,
            }),
            onClick: this.onTabClick,
            onFocus: this.onFocus,
            onMouseDown: this.onMouseDown,
            tabIndex: 0,
            active: t,
            ref: this.elementRef,
          });
        }
      }
      h.displayName = "blocks/tabs/Tab/TabItem";
    },
    306908: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => x,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(110622);
      var r = o.n(l);
      var s = o(189026);
      var a = o.n(s);
      var c = o(806537);
      var d = o(219247);
      var b = o(585614);
      var u = o(452528);
      var h = o.n(u);
      var p = o(257549);
      var k = o.n(p);
      var g = o(125702);
      var m = o(813052);
      var _ = o(849225);
      var f = o.n(_);
      var v = o(867396);
      var C = o(343856);
      const w = (e) => (0, n.isValidElement)(e) && e.type === m.TabDropdown;
      const x = (e) => {
        let {
          dropdownVisible: t,
          setDropdownVisible: o,
          children: s,
          menuParams: p,
          hasSearchSupport: m,
          searchPlaceholder: _,
          emptySearchResultMessage: x,
        } = e;
        const {
          filterQuery: y,
          setFilterQuery: S,
          filteredOptions: T,
        } = a()(s, w);
        const E = m
          ? ((e, t) =>
              n.Children.map(e, (e) => {
                if (w(e)) {
                  return i().cloneElement(e, {
                    onClick: (o) => {
                      var n;
                      var i;
                      t("");
                      if (
                        (n = (i = e.props).onClick) !== null &&
                        n !== undefined
                      ) {
                        n.call(i, o);
                      }
                    },
                  });
                }
              }))(T, S)
          : T;
        const L = m && n.Children.count(E) === 0 && n.Children.count(s) > 0;
        const I = (0, n.useRef)(null);
        const B = (0, n.useCallback)(
          (e) => {
            if (t && e.keyCode === g.KeyCode.ESC) {
              o(false);
            }
          },
          [o, t],
        );
        (0, n.useEffect)(() => {
          document.addEventListener("keydown", B);
          return () => {
            document.removeEventListener("keydown", B);
          };
        }, [B]);
        return (0, C.jsx)(r(), {
          placement: l.MenuPlacement.BottomEnd,
          ...p,
          activatorRef: I,
          show: t,
          onClose: () => o(false),
          render: () =>
            (0, C.jsxs)(C.Fragment, {
              children: [
                m &&
                  (0, C.jsx)(f(), {
                    filterQuery: y,
                    setFilterQuery: S,
                    placeholder: _,
                  }),
                (0, C.jsx)("div", {
                  className: v.Z["bloko-tabs__dropdown-items-container"],
                  children:
                    L && x
                      ? (0, C.jsxs)("div", {
                          className: v.Z["bloko-tabs__dropdown-items-empty"],
                          children: [
                            (0, C.jsx)(k(), {
                              base: 6,
                            }),
                            (0, C.jsx)(h(), {
                              importance: u.TextImportance.Tertiary,
                              children: x,
                            }),
                            (0, C.jsx)(k(), {
                              base: 6,
                            }),
                          ],
                        })
                      : E,
                }),
              ],
            }),
          children: (0, C.jsx)("div", {
            className: v.Z["bloko-tabs__icon-container"],
            ref: I,
            children: (0, C.jsx)(c.Z, {
              onClick: () => o(!t),
              children: (0, C.jsx)(d.Z, {
                initial: b.Z.Gray50,
              }),
            }),
          }),
        });
      };
    },
    627624: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => b,
      });
      var n = o(394280);
      var i = o(557883);
      var l = o(585614);
      var r = o(17666);
      var s = o.n(r);
      var a = o(549155);
      var c = o(867396);
      var d = o(343856);
      const b = (e) => {
        let { filterQuery: t, setFilterQuery: o, placeholder: r } = e;
        const b = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          if ((0, a.getBreakpoint)() !== a.Breakpoint.XS && b.current) {
            b.current.focus();
          }
        }, []);
        return (0, d.jsx)("div", {
          className: c.Z["bloko-tabs__search"],
          children: (0, d.jsx)(s(), {
            "data-qa": "bloko-tabs-search",
            value: t,
            placeholder: r,
            onChange: o,
            ref: b,
            icon: (0, d.jsx)(i.Z, {
              initial: l.Z.Gray40,
            }),
          }),
        });
      };
    },
    379268: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => D,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(194122);
      var r = o(219247);
      var s = o(585614);
      var a = o(607621);
      var c = o(41469);
      var d = o(845807);
      var b = o.n(d);
      var u = o(764626);
      var h = o.n(u);
      var p = o(857726);
      var k = o.n(p);
      var g = o(385539);
      var m = o.n(g);
      var _ = o(729693);
      var f = o.n(_);
      var v = o(324412);
      var C = o.n(v);
      var w = o(373714);
      var x = o.n(w);
      var y = o(607605);
      var S = o.n(y);
      var T = o(853524);
      var E = o.n(T);
      var L = o(266308);
      var I = o.n(L);
      const B =
        "bloko-drop-menu-item bloko-drop-menu-item_selectable Bloko-Tabs-Dropdown-Item";
      function M(e, t, o) {
        e.removeClass(o);
        e.eq(t).addClass(o);
      }
      function N(e, t, o) {
        let { showLeftGlare: n, showRightGlare: i } = o;
        e.toggleClass("bloko-tabs-right-glare_showed", i);
        t.toggleClass("bloko-tabs-left-glare_showed", n);
      }
      function P(e, t, o) {
        const n = (function (e) {
          const t = [];
          e.each((e, o) => {
            const n = i()(o).clone().removeClass().addClass(B);
            t.push(n.get(0).outerHTML);
          });
          return t;
        })(e);
        const c = i()(
          x().render({
            items: n,
          }),
        );
        b().make(a.Z, i()(".Bloko-Tabs-More-Icon", c).get(0), {
          IconComponent: r.Z,
          iconProps: {
            initial: s.Z.Gray50,
          },
        });
        t.append(c);
        const d = i()(f().dropdownData, c);
        const u = d.children();
        const h = b().make(l.Click, c.get(0), {
          ...o,
          placement: l.MenuPlacement.BottomEnd,
          html: c.get(0).querySelector(".Bloko-Tabs-Dropdown-Data"),
        });
        return {
          $moreButton: c,
          $dropdownItems: u,
          $dropdown: d,
          dropdownInstance: h,
        };
      }
      function O(e, t) {
        if (parseInt(e.css("margin-left"), 10) !== t) {
          e[0].dispatchEvent(h()("Bloko-Tabs-Will-Move"));
          m()(e.get(0), () => {
            e[0].dispatchEvent(h()("Bloko-Tabs-Moved"));
          });
        }
        e.css({
          "margin-left": t,
        });
      }
      const D = b().build({
        defaults: {
          cssClasses: {
            dropdownActiveTab: "bloko-drop-menu-item_selected",
          },
        },
        create: function (e, t) {
          const o = i()(e);
          const n = i()(f().container, o);
          const l = n.find(f().tab);
          const r = i()(C().render());
          const s = i()(S().render());
          const a = i()(I().render());
          let d;
          let u = null;
          (function (e, t, o) {
            e.append(t);
            t.append(o);
          })(n, a, l);
          const {
            $moreButton: p,
            $dropdownItems: g,
            $dropdown: _,
            dropdownInstance: v,
          } = P(l, n, t.menuParams);
          let w = false;
          const x = function (e) {
            if (
              w &&
              (e !== u ||
                (arguments.length > 1 &&
                  arguments[1] !== undefined &&
                  arguments[1]))
            ) {
              const t = (0, c.getActiveTabMarginLeft)({
                tabsWrapperElement: o[0],
                tabsContainerElement: n[0],
                tabsItemsElement: a[0],
                activeTabElement: e,
              });
              const i = (0, c.getAdaptiveSettings)({
                tabsWrapperElement: o[0],
                tabsItemsElement: a[0],
                tabsMarginLeft: t,
              });
              O(n, i.tabsMarginLeft);
              N(s, r, i);
              p.toggleClass(
                "bloko-tabs__icon-container_hidden",
                !i.isAdaptiveMode,
              );
              if (!i.isAdaptiveMode || !!o.is(":hidden")) {
                v.hide();
              }
              u = e;
            }
          };
          l.on("focus", (e) => x(e.target));
          const y = k()((e, t, i) => {
            const l = (0, c.getClientX)(e);
            const d = (0, c.getAdaptiveSettings)({
              tabsWrapperElement: o[0],
              tabsItemsElement: a[0],
              tabsMarginLeft: t + l - i,
            });
            O(n, d.tabsMarginLeft);
            N(s, r, d);
          });
          function T() {
            return d;
          }
          const L = (e) => {
            n.append(r).append(s);
            (function (e, t, o) {
              t.on("click", f().dropdownItem, (t) => {
                const n = i()(t.currentTarget);
                if (n[0].tagName === "A") {
                  return;
                }
                const l = n.index();
                e().setActiveTab(l);
                o.hide();
              });
            })(T, _, v);
            M(g, e.index, t.cssClasses.dropdownActiveTab);
            w = true;
            x(l.eq(e.index).get(0));
          };
          e.addEventListener("Bloko-Tabs-Init", (e) => {
            let { detail: t } = e;
            return L(t);
          });
          e.addEventListener("Bloko-Tabs-Changed", (e) => {
            let { detail: o } = e;
            M(g, (n = o).index, t.cssClasses.dropdownActiveTab);
            x(l.eq(n.index).get(0));
            return;
            var n;
          });
          l.on("touchstart mousedown", (e) => {
            const t = parseInt(n.css("margin-left"), 10);
            const o = (0, c.getClientX)(e);
            let l = true;
            const r = (e) => {
              if (l) {
                n.addClass("bloko-tabs-scroll");
                if ((0, c.isScrollExceedsThreshold)(o, e)) {
                  l = false;
                  n.addClass("bloko-tabs-scroll_ongoing");
                }
              } else {
                y(e, t, o);
              }
            };
            const s = () => {
              n.removeClass("bloko-tabs-scroll bloko-tabs-scroll_ongoing");
              i()(document).off("touchmove mousemove", r);
              i()(document).off("touchend mouseup", s);
            };
            i()(document).on("touchmove mousemove", r);
            i()(document).on("touchend mouseup", s);
          });
          d = b().make(E(), e, t);
          i()(window).on(
            "resize",
            k()(() => x(u, true)),
          );
          m()(n.get(0), () => {
            n[0].dispatchEvent(h()("Bloko-Tabs-Moved"));
          });
          l.each((e, t) => {
            i()(t).attr("draggable", false);
          });
          return {
            tabs: d,
          };
        },
        componentName: "blocks/tabs/adaptiveTabs",
      });
    },
    364418: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = {
        tab: ".Bloko-Tabs-Tab",
        tabBody: ".Bloko-Tabs-Body",
        container: ".Bloko-Tabs-Container",
        dropdownData: ".Bloko-Tabs-Dropdown-Data",
        dropdownItem: ".Bloko-Tabs-Dropdown-Item",
        moreButton: ".Bloko-Tabs-More-Button",
      };
    },
    124204: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => u,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(845807);
      var r = o.n(l);
      var s = o(182093);
      var a = o.n(s);
      var c = o(285511);
      var d = o.n(c);
      function b(e) {
        if (typeof e != "string") {
          return "";
        } else {
          return e;
        }
      }
      const u = r().build({
        create: function (e) {
          const t = i()(e);
          const o = i()(".Bloko-Tabs-Tab", e);
          const n = {};
          let l = 0;
          o.each((e, t) => {
            const o = b(t.hash);
            if (o) {
              n[o] = e;
              if (o === b(window.location.hash)) {
                l = e;
              }
            }
          });
          const s = r().make(d(), e, {
            activeTabIndex: l,
          }).tabs;
          function c(e) {
            if (e !== l) {
              l = e;
              s.setActiveTab(l);
              t.trigger("Bloko-HashTabs-Changed", {
                index: l,
              });
            }
          }
          e.addEventListener("Bloko-Tabs-Changed", (e) => {
            let { detail: t } = e;
            const n = b(o.eq(t.index).get(0).hash);
            if (n === "") {
              if (b(o.eq(l).get(0).hash) !== "") {
                if (a().historyApi()) {
                  window.history.pushState(
                    "",
                    document.title,
                    window.location.href.split("#")[0],
                  );
                } else {
                  window.location.hash = "";
                }
              }
            } else {
              window.location.hash = n;
            }
            c(t.index);
          });
          i()(window).on("hashchange", () => {
            let e = l;
            const t = b(window.location.hash);
            if (t === "") {
              if (b(o.eq(l).get(0).hash) !== "") {
                e = 0;
              }
            } else if (t in n) {
              e = n[t];
            }
            c(e);
          });
          t.trigger("Bloko-HashTabs-Init", {
            index: l,
          });
          return {
            tabs: s,
          };
        },
        componentName: "blocks/tabs/hashTabs",
      });
    },
    229204: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        Tab: () => g.default,
        default: () => C,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(41469);
      var s = o(350647);
      var a = o.n(s);
      var c = o(857726);
      var d = o.n(c);
      var b = o(947870);
      var u = o.n(b);
      var h = o(693150);
      var p = o.n(h);
      var k = o(867396);
      var g = o(295040);
      var m = o(306908);
      var _ = o(343856);
      const f = (e) => (0, n.isValidElement)(e) && e.type === g.default;
      const v = (e) => {
        let {
          children: t,
          addProperties: o,
          setDropdownVisible: i,
          onChange: l,
        } = e;
        return n.Children.map(t, (e) => {
          if (f(e)) {
            if (o.inDropDown) {
              return (0, _.jsx)(g.TabDropdown, {
                ...e.props,
                onClick: (t) => {
                  var o;
                  var n;
                  l(e.props.id);
                  i(false);
                  if ((o = (n = e.props).onClick) !== null && o !== undefined) {
                    o.call(n, t);
                  }
                },
                children: e,
              });
            } else {
              return (0, _.jsx)(g.TabItem, {
                ...e.props,
                onClick: (t) => {
                  var o;
                  var n;
                  l(e.props.id);
                  if ((o = (n = e.props).onClick) !== null && o !== undefined) {
                    o.call(n, t);
                  }
                },
                ...o,
                children: e,
              });
            }
          }
        });
      };
      const C = (e) => {
        let {
          children: t,
          menuParams: o,
          onChange: i,
          isNarrow: s,
          source: c,
          hasSearchSupport: b,
          searchPlaceholder: h,
          emptySearchResultMessage: C,
          ...w
        } = e;
        const x = (0, n.useRef)(null);
        const y = (0, n.useRef)(null);
        const S = (0, n.useRef)(null);
        const [T, E] = (0, n.useState)();
        const [L, I] = (0, n.useState)(true);
        const [B, M] = (0, n.useState)(false);
        const [N, P] = (0, n.useState)(false);
        const [O, D] = (0, n.useState)(false);
        const [Z, A] = (0, n.useState)();
        const [R, j] = (0, n.useState)();
        const {
          isScrollOngoing: $,
          isScrollStarted: F,
          onScrollStart: H,
        } = p()({
          tabsTrainRef: S,
          tabsWrapperRef: x,
          tabsItemsRef: y,
          setShowedLeftGlare: M,
          setShowedRightGlare: P,
        });
        const W = ((e) =>
          (0, n.useMemo)(() => n.Children.toArray(e).filter((e) => !!e), [e]))(
          t,
        );
        const q = (0, n.useMemo)(() => {
          const e = n.Children.map(W, (e) => {
            if (!f(e)) {
              return;
            }
            if (e.props.active) {
              j(false);
            } else if (e.props.defaultActive) {
              j(true);
            }
            const t =
              Z !== undefined
                ? e.props.id === Z
                : e.props.defaultActive || e.props.active;
            if (t) {
              A(e.props.id);
            }
            if (R && e.props.active) {
              throw new Error("defaultActive is setted, Tabs is uncontrolled");
            }
            if (R === false && e.props.defaultActive) {
              throw new Error("active is setted, Tabs is controlled");
            }
            return (0, _.jsx)(g.default, {
              ...e.props,
              active: t,
            });
          });
          if (R) {
            return e;
          } else {
            return [];
          }
        }, [Z, W, R]);
        const V = (e) => {
          if (R) {
            A(e);
          }
          if (i != null) {
            i(e);
          }
        };
        const z = v({
          children: R ? q : W,
          setDropdownVisible: D,
          onChange: V,
          addProperties: {
            setElement: E,
          },
        });
        const U = v({
          children: R ? q : W,
          setDropdownVisible: D,
          onChange: V,
          addProperties: {
            inDropDown: true,
          },
        });
        const Y = (0, n.useMemo)(
          () =>
            u()(
              d()(() =>
                ((e) => {
                  let {
                    tabsWrapperRef: t,
                    tabsItemsRef: o,
                    setIsAdaptiveMode: n,
                    setDropdownVisible: i,
                    setShowedLeftGlare: l,
                    setShowedRightGlare: s,
                    tabsTrainRef: a,
                    activeTabElement: c,
                  } = e;
                  if (!t.current || !o.current || !a.current || !c) {
                    return;
                  }
                  const d = (0, r.getActiveTabMarginLeft)({
                    tabsWrapperElement: t.current,
                    tabsItemsElement: o.current,
                    activeTabElement: c,
                  });
                  const b = (0, r.getAdaptiveSettings)({
                    tabsWrapperElement: t.current,
                    tabsItemsElement: o.current,
                    tabsMarginLeft: d,
                  });
                  n(b.isAdaptiveMode);
                  if (!b.isAdaptiveMode) {
                    i(false);
                  }
                  a.current.style.marginLeft = `${b.tabsMarginLeft}px`;
                  l(b.showLeftGlare);
                  s(b.showRightGlare);
                })({
                  tabsWrapperRef: x,
                  tabsItemsRef: y,
                  setIsAdaptiveMode: I,
                  setDropdownVisible: D,
                  setShowedLeftGlare: M,
                  setShowedRightGlare: P,
                  tabsTrainRef: S,
                  activeTabElement: T,
                }),
              ),
              40,
            ),
          [T],
        );
        a()(Y);
        (0, n.useEffect)(() => {
          Y();
        }, [Y]);
        return (0, _.jsx)("div", {
          className: l()(k.Z["bloko-tabs-wrapper"], {
            [k.Z["bloko-tabs-wrapper_narrow"]]: s,
          }),
          ...w,
          ref: x,
          source: c,
          children: (0, _.jsxs)("div", {
            className: l()(k.Z["bloko-tabs"], {
              [k.Z["bloko-tabs-scroll"]]: F,
              [k.Z["bloko-tabs-scroll_ongoing"]]: $,
            }),
            ref: S,
            children: [
              (0, _.jsx)("div", {
                className: k.Z["bloko-tabs__items"],
                ref: y,
                onTouchStart: H,
                onMouseDown: H,
                children: z,
              }),
              (0, _.jsx)("div", {
                className: l()(k.Z["bloko-tabs-left-glare"], {
                  [k.Z["bloko-tabs-left-glare_showed"]]: B,
                }),
              }),
              (0, _.jsx)("div", {
                className: l()(k.Z["bloko-tabs-right-glare"], {
                  [k.Z["bloko-tabs-right-glare_showed"]]: N,
                }),
              }),
              L &&
                (0, _.jsx)(m.default, {
                  dropdownVisible: O,
                  setDropdownVisible: D,
                  menuParams: o,
                  hasSearchSupport: b,
                  searchPlaceholder: h,
                  emptySearchResultMessage: C,
                  children: U,
                }),
            ],
          }),
        });
      };
    },
    453198: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(521611);
      var i = o(845807);
      var l = o.n(i);
      var r = o(764626);
      var s = o.n(r);
      var a = o(387501);
      var c = o.n(a);
      var d = o(729693);
      var b = o.n(d);
      const u = window.bloko && window.bloko.isTest ? 1 : 100;
      const h = l().build({
        defaults: {
          cssClasses: {
            activeTab: "bloko-tabs__item_active",
          },
        },
        create: function (e, t) {
          const o = e.querySelector(b().container);
          const i = [...o.querySelectorAll(b().tab)];
          const l = [...e.querySelectorAll(b().tabBody)];
          let r;
          function a(e) {
            return typeof e == "number" && e !== r && e >= 0 && e < i.length;
          }
          function d() {
            i.forEach((e, o) =>
              e.classList.toggle(t.cssClasses.activeTab, o === r),
            );
            const e = l[r];
            l.forEach((e) => e.classList.add("g-hidden"));
            if (e) {
              e.classList.remove("g-hidden");
            }
          }
          function h(t) {
            r = t;
            d();
            e.dispatchEvent(
              s()("Bloko-Tabs-Changed", {
                index: r,
              }),
            );
          }
          function p() {
            i.forEach((e, o) => {
              e.setAttribute("offset", -e.offsetLeft);
              e.setAttribute("width", c().getOuterWidth(e));
              if (
                r === undefined &&
                e.classList.contains(t.cssClasses.activeTab)
              ) {
                r = o;
              }
            });
            r = r || 0;
            e.dispatchEvent(
              s()("Bloko-Tabs-Init", {
                index: r,
              }),
            );
            d();
          }
          o.addEventListener("click", (e) => {
            let { target: t } = e;
            const n = t.closest(b().tab);
            if (n) {
              (function (e) {
                if (e.tagName === "A") {
                  return;
                }
                const t = i.indexOf(e);
                if (a(t)) {
                  const e = s()("Bloko-Tabs-Will-Change");
                  o.dispatchEvent(e, {
                    index: t,
                  });
                  if (!e.defaultPrevented) {
                    h(t);
                  }
                }
              })(n);
            }
          });
          if (a(t.activeTabIndex)) {
            r = t.activeTabIndex;
          }
          if (c().isVisible(o)) {
            p();
          } else {
            const e = n.ZP.debounce(() => {
              if (c().isVisible(o)) {
                p();
                window.removeEventListener("resize", e);
              }
            }, u);
            window.addEventListener("resize", e);
          }
          return {
            setActiveTab: function (e) {
              if (a(e)) {
                if (r !== undefined) {
                  i[r].blur();
                }
                h(e);
              }
            },
          };
        },
        componentName: "bloko/blocks/tabs",
      });
    },
    400346: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(41469);
      var l = o(857726);
      var r = o.n(l);
      const s = (e) => {
        let {
          tabsTrainRef: t,
          tabsItemsRef: o,
          tabsWrapperRef: l,
          setShowedLeftGlare: s,
          setShowedRightGlare: a,
        } = e;
        const c = (0, n.useRef)(false);
        const d = (0, n.useRef)(0);
        const b = (0, n.useRef)(0);
        const [u, h] = (0, n.useState)(false);
        const [p, k] = (0, n.useState)(false);
        const g = r()((e) => {
          if (!t.current || !l.current || !o.current || !b.current) {
            return;
          }
          const n = (0, i.getClientX)(e);
          const r = (0, i.getAdaptiveSettings)({
            tabsWrapperElement: l.current,
            tabsItemsElement: o.current,
            tabsMarginLeft: d.current + n - b.current,
          });
          t.current.style.marginLeft = `${r.tabsMarginLeft}px`;
          s(r.showLeftGlare);
          a(r.showRightGlare);
        });
        const m = (e) => {
          if (c.current) {
            h(true);
            if ((0, i.isScrollExceedsThreshold)(b.current, e)) {
              c.current = false;
              k(true);
            }
          } else {
            g(e);
          }
        };
        return {
          isScrollStarted: u,
          isScrollOngoing: p,
          onScrollStart: (e) => {
            var o;
            c.current = true;
            h(false);
            k(false);
            b.current = (0, i.getClientX)(e);
            if (
              (o = t.current) !== null &&
              o !== undefined &&
              o.style.marginLeft
            ) {
              d.current = parseInt(t.current.style.marginLeft, 10);
            }
            const n = () => {
              h(false);
              k(false);
              document.removeEventListener("mousemove", m);
              document.removeEventListener("touchmove", m);
              document.removeEventListener("mouseup", n);
              document.removeEventListener("touchend", n);
            };
            document.addEventListener("mousemove", m);
            document.addEventListener("touchmove", m);
            document.addEventListener("mouseup", n);
            document.addEventListener("touchend", n);
          },
        };
      };
    },
    103602: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => k,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(665164);
      var r = o.n(l);
      var s = o(702595);
      var a = o.n(s);
      var c = o(832587);
      var d = o.n(c);
      var b = o(264677);
      var u = o.n(b);
      var h = o(597755);
      var p = o.n(h);
      const k = r().extend({}, p(), {
        createPublicInterface(e) {
          const t = p().createPublicInterface.call(this, e);
          r().extend(
            t,
            {
              updateTag: e.updateTag.bind(e),
              getCount: e.getCount.bind(e),
            },
            i().Events,
          );
          e.on("Bloko-TagList-Updated", (e, o) => {
            t.trigger("Bloko-TagList-Updated", e, o);
          });
          return t;
        },
        createView(e, t) {
          const o = d().extend(this.getOptions(t));
          return new (u())({
            collection: new (a())(null, {
              model: o,
            }),
            el: e,
            options: t,
          });
        },
      });
    },
    274863: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => M,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(732603);
      var r = o.n(l);
      var s = o(389057);
      var a = o(585614);
      var c = o(487153);
      var d = o(607621);
      var b = o(845807);
      var u = o.n(b);
      var h = o(950676);
      var p = o.n(h);
      var k = o(240428);
      var g = o.n(k);
      var m = o(771951);
      var _ = o.n(m);
      var f = o(171807);
      var v = o.n(f);
      var C = o(693471);
      var w = o.n(C);
      var x = o(344237);
      var y = o.n(x);
      var S = o(26016);
      var T = o.n(S);
      var E = o(523136);
      var L = o.n(E);
      var I = o(762870);
      var B = o.n(I);
      const M = y().extend({
        _defaults: i().extend({}, y().prototype._defaults, {
          tooltipParams: {},
        }),
        template(e) {
          return g().render(e, {
            textSection: L(),
            textTemplate: this.options.textTemplate || B(),
            hiddenSection: v(),
            removeSection: T(),
            increaseSection: w(),
            decreaseSection: _(),
            countSection: p(),
          });
        },
        renderIcons(e) {
          const t = e.get("id");
          i()(".Bloko-TagList-Tag", this.$el).each((e, o) => {
            if (t && t === o.dataset.tagId) {
              this.initDecreaseIcon(o);
              this.initIncreaseIcon(o);
              this.renderRemoveIcon(o);
            }
          });
        },
        events: i().extend({}, y().prototype.events, {
          "click .Bloko-TagList-Increase": "increase",
          "click .Bloko-TagList-Decrease": "decrease",
          "mouseover .Bloko-TagList-Count": "showCountHint",
          "mouseout .Bloko-TagList-Count": "hideCountHint",
        }),
        tips: {},
        initTags() {
          const e = [];
          i()(".Bloko-TagList-Tag", this.$el).each((t, o) => {
            const n = i()(o);
            const l = n.data("tag-id");
            const r = i()(".Bloko-TagList-Text", o).text().trim();
            const s = i()(".Bloko-TagList-Count", n);
            const a = parseInt(s.text(), 10) || 0;
            const c = !!i()(
              ".Bloko-TagList-Increase, .Bloko-TagList-Decrease",
              o,
            ).length;
            if (c) {
              this.initIncreaseIcon(o);
              this.initDecreaseIcon(o);
            }
            e.push({
              id: l,
              text: r,
              hiddenValue: l,
              count: a,
              countable: c,
            });
          });
          this.setTags(e);
        },
        initIncreaseIcon(e) {
          const t = e.querySelector(".Bloko-TagList-IncreaseIcon");
          if (t) {
            u().make(d.Z, t, {
              IconComponent: s.Z,
              iconProps: {
                initial: a.Z.White,
                highlighted: a.Z.Gray60,
              },
            });
          }
        },
        initDecreaseIcon(e) {
          const t = e.querySelector(".Bloko-TagList-DecreaseIcon");
          if (t) {
            u().make(d.Z, t, {
              IconComponent: c.Z,
              iconProps: {
                initial: a.Z.Gray50,
                highlighted: a.Z.Gray60,
              },
            });
          }
        },
        increase(e) {
          const t = this.getTagFromEvent(e);
          this.trigger("Bloko-TagList-Updated", t.get("id"), true);
        },
        decrease(e) {
          const t = this.getTagFromEvent(e);
          this.trigger("Bloko-TagList-Updated", t.get("id"), false);
        },
        showCountHint(e) {
          const t = this.getTagFromEvent(e);
          if (this.options.tooltipParams.content) {
            this.getTipInstance(t.get("id"), e.target).show();
          }
        },
        hideCountHint(e) {
          const t = this.getTagFromEvent(e);
          if (this.options.tooltipParams.content) {
            this.getTipInstance(t.get("id"), e.target).hide();
          }
        },
        getTipInstance(e, t) {
          this.tips[e] =
            this.tips[e] ||
            u().make(r(), t, {
              ...this.options.tooltipParams,
              html: this.options.tooltipParams.content,
            });
          return this.tips[e].changeOptions({
            ...this.options.tooltipParams,
            html: this.options.tooltipParams.content,
          });
        },
        updateTag(e, t) {
          this.tags.get(e).set(
            i().extend(
              {},
              {
                voted: t.voted,
                count: t.count,
              },
            ),
          );
          return this;
        },
        getCount(e) {
          return this.tags.get(e).get("count");
        },
      });
    },
    908031: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(363005);
      var l = o(790613);
      var r = o(343856);
      const s = (e) => {
        let {
          items: t = [],
          animateNew: o = true,
          removable: s = false,
          stretched: a = false,
          selectable: c = false,
          selectableByClick: d = true,
          editable: b = false,
          countable: u = false,
          tooltipParams: h,
          nested: p = false,
          renderAfterTags: k,
          renderAfterTagsRef: g,
          source: m,
        } = e;
        if (t.length > 0) {
          return (0, r.jsx)("div", {
            className: i.Z["bloko-tag-list"],
            source: m,
            children: (0, l.default)(
              o,
              t,
              (e, t) =>
                (0, n.cloneElement)(e, {
                  ...t,
                  animateNew: o,
                  removable: s,
                  stretched: a,
                  selectable: c,
                  selectableByClick: d,
                  editable: b,
                  countable: u,
                  tooltipParams: h,
                  nested: p,
                }),
              undefined,
              k,
              g,
            ),
          });
        } else {
          return null;
        }
      };
    },
    843564: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => N,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(665164);
      var r = o.n(l);
      var s = o(390713);
      var a = o(487153);
      var c = o(261471);
      var d = o(585614);
      var b = o(456500);
      var u = o(607621);
      var h = o(125702);
      var p = o(845807);
      var k = o.n(p);
      var g = o(638040);
      var m = o.n(g);
      var _ = o(406914);
      var f = o.n(_);
      var v = o(256496);
      var C = o.n(v);
      var w = o(171807);
      var x = o.n(w);
      var y = o(112210);
      var S = o.n(y);
      var T = o(26016);
      var E = o.n(T);
      var L = o(523136);
      var I = o.n(L);
      var B = o(762870);
      var M = o.n(B);
      const N = i().View.extend({
        tagName: "span",
        className: "Bloko-TagList",
        _defaults: {
          hiddenFieldName: "",
          defaultSelected: true,
          cssClasses: {
            animated: "bloko-tag_animated",
          },
          bindings: {
            tag: ".Bloko-TagList-Tag",
          },
        },
        template(e) {
          return S()
            .render(e, {
              textSection: I(),
              textTemplate: this.options.textTemplate || M(),
              hiddenSection: x(),
              removeSection: E(),
              editableSection: C(),
              editableAction: f(),
            })
            .trim();
        },
        makeTemplateData(e) {
          return {
            items: [].concat(e.toJSON()),
            hidden: this.options.hiddenFieldName,
            stretched: this.options.stretched,
          };
        },
        events: {
          "click .Bloko-TagList-Remove": "removeTagOnClick",
          "click .Bloko-TagList-Selectable": "selectTag",
          "click .Bloko-TagList-EditCancel": "cancelEdit",
          "click .Bloko-TagList-EditAction": "editAction",
          "click .Bloko-TagList-EditDone": "editDone",
          "blur .Bloko-TagList-EditInput": "blurEditInput",
          "keydown .Bloko-TagList-EditInput": "keyDown",
        },
        initialize(e) {
          this.tags = this.collection;
          this.options = r().extend({}, this._defaults, e.options);
          this.listenTo(this.tags, "add", this.renderTagAdd);
          this.listenTo(this.tags, "change", this.renderTagChange);
          this.listenTo(this.tags, "remove", this.renderTagRemove);
        },
        initTags() {
          const e = [];
          r()(".Bloko-TagList-Tag", this.$el).each((t, o) => {
            const n = r()(o);
            const i = n.attr("data-tag-id");
            e.push({
              id: i,
              text: n.text().trim(),
              hiddenValue: i,
            });
          });
          this.setTags(e);
        },
        $nodeByTagId(e) {
          return this.$(`[data-tag-id="${this.escapeId(e)}"]`);
        },
        escapeId: (e) =>
          e.toString().replace(/\\/g, "\\\\").replace(/"/g, '\\"'),
        renderTagAdd(e) {
          var t;
          if (this.$nodeByTagId(e.get("id")).length === 0) {
            this.$el.append(this.template(this.makeTemplateData(e)));
            if ((t = this.renderIcons) !== null && t !== undefined) {
              t.call(this, e);
            }
          }
          this.trigger("Bloko-TagList-Added", e.toJSON());
          return this;
        },
        renderTagChange(e) {
          var t;
          this.$nodeByTagId(e.get("id")).replaceWith(
            this.template(this.makeTemplateData(e)),
          );
          if ((t = this.renderIcons) !== null && t !== undefined) {
            t.call(this, e);
          }
          this.trigger("Bloko-TagList-Changed", e.toJSON());
          return this;
        },
        renderTagRemove(e) {
          this.$nodeByTagId(e.get("id")).remove();
          this.trigger("Bloko-TagList-Removed", e.toJSON());
          return this;
        },
        renderIcons(e) {
          const t = this.$nodeByTagId(e.get("id")).get(0);
          if (t) {
            this.renderRemoveIcon(t);
            this.renderIcon(t, ".Bloko-TagList-EditAction", s.Z);
            this.renderIcon(t, ".Bloko-TagList-EditCancel", a.Z);
            this.renderIcon(t, ".Bloko-TagList-EditDone", c.Z, {
              initial: d.Z.Green60,
            });
            this.renderIcon(t, ".Bloko-TagList-EditAction", s.Z);
          }
        },
        renderRemoveIcon(e) {
          this.renderIcon(e, ".Bloko-TagList-Remove", b.Z);
        },
        renderIcon(e, t, o, n = {}) {
          const i = e.querySelectorAll(t);
          for (const e of [...i]) {
            k().make(u.Z, e, {
              IconComponent: o,
              iconProps: {
                initial: d.Z.Gray50,
                highlighted: d.Z.Gray60,
                ...n,
              },
            });
          }
        },
        selectTag(e) {
          const t = this.getTagFromEvent(e);
          if (this.options.defaultSelected) {
            this.toggleSelect(t.get("id"), !t.get("selected"));
          }
          this.trigger("Bloko-TagList-ToggleSelected", t.toJSON());
          return this;
        },
        setTags(e) {
          e = [].concat(e);
          this.tags.set(e, {
            parse: true,
          });
          return this;
        },
        getTag(e) {
          return this.tags.get(e).toJSON();
        },
        getTags() {
          return this.tags.toJSON();
        },
        addTag(e) {
          e = [].concat(e);
          this.tags.add(e, {
            parse: true,
          });
          return this;
        },
        removeTag(e) {
          this.tags.remove(String(e));
          return this;
        },
        setTagText(e, t) {
          const o = this.tags.get(e);
          if (o) {
            if (t.length === 0) {
              this.removeTag(e);
              return;
            }
            o.set({
              edited: false,
              text: t,
            });
          }
        },
        toggleSelect(e, t) {
          const o = this.tags.get(e);
          if (o) {
            o.set("selected", t);
          }
          return this;
        },
        toggleDisabled(e, t) {
          const o = this.tags.get(e);
          if (o) {
            o.set("disabled", t);
          }
          return this;
        },
        getTagId: (e) =>
          r()(e).attr("data-tag-id") ||
          r()(e).closest(".Bloko-TagList-Tag").attr("data-tag-id"),
        getTagFromEvent(e) {
          const t = this.getTagId(e.currentTarget);
          return this.tags.get(t);
        },
        removeTagOnClick(e) {
          const t = this.getTagId(e.currentTarget);
          this.removeTag(t);
        },
        cancelEdit(e) {
          clearTimeout(this.blurTimeout);
          const t = this.getTagFromEvent(e);
          if (t.get("edited")) {
            this.setTagText(t, t.previous("text"));
          }
        },
        keyDown(e) {
          if (e.keyCode === h.KeyCode.Enter) {
            e.preventDefault();
            this.editDone(e);
          } else if (e.keyCode === h.KeyCode.ESC) {
            e.preventDefault();
            r()(e.currentTarget).blur();
            this.cancelEdit(e);
          }
        },
        blurEditInput(e) {
          this.blurTimeout = setTimeout(() => {
            this.editDone(e);
          }, 250);
        },
        editAction(e) {
          const t = this.getTagFromEvent(e);
          const o = r()(e.currentTarget).closest(".Bloko-TagList-Tag");
          const n = r()(".Bloko-TagList-SectionText", o).outerWidth();
          t.set("edited", true);
          const i = this.$nodeByTagId(t.get("id"));
          const l = r()(".Bloko-TagList-EditInput", i);
          const s = this.calculateInputWidth(i, n);
          l.outerWidth(s);
          m().setCaretPosition(l[0], l.val().length);
        },
        editDone(e) {
          clearTimeout(this.blurTimeout);
          const t = this.getTagFromEvent(e);
          const o = r()(e.currentTarget).closest(".Bloko-TagList-Tag");
          const n = r()(".Bloko-TagList-EditInput", o);
          this.setTagText(t.id, n.val().trim());
        },
        calculateInputWidth(e, t) {
          let o;
          const n = this.$el.width();
          let i = t;
          r()(".Bloko-TagList-EditControl", e).each((e, t) => {
            i += r()(t).outerWidth();
          });
          if (i > n) {
            o = i - n;
            t -= o;
          }
          return t;
        },
        setHiddenValue(e, t) {
          if (this.options.hiddenFieldName) {
            r()(".Bloko-TagList-Value", this.$nodeByTagId(e)).val(t);
          }
        },
      });
    },
    120701: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => b,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(702595);
      var r = o.n(l);
      var s = o(170656);
      var a = o.n(s);
      var c = o(597755);
      var d = o.n(c);
      const b = i().extend({}, d(), {
        createPublicInterface(e) {
          const t = d().createPublicInterface.call(this, e);
          i().extend(t, {
            toggleExpanded: e.toggleExpanded.bind(e),
          });
          return t;
        },
        createView(e, t) {
          return new (a())({
            collection: new (r())(null, {
              model: this.createTagModel(t),
            }),
            el: e,
            options: i().extend(
              {
                renderHiddenParentField: true,
              },
              t,
            ),
          });
        },
      });
    },
    885402: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => T,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(521611);
      var r = o(898469);
      var s = o(7367);
      var a = o(585614);
      var c = o(607621);
      var d = o(845807);
      var b = o.n(d);
      var u = o(171807);
      var h = o.n(u);
      var p = o(344237);
      var k = o.n(p);
      var g = o(201434);
      var m = o.n(g);
      var _ = o(755365);
      var f = o.n(_);
      var v = o(26016);
      var C = o.n(v);
      var w = o(523136);
      var x = o.n(w);
      var y = o(762870);
      var S = o.n(y);
      const T = k().extend({
        template(e) {
          return m().render(e, {
            textSection: x(),
            textTemplate: this.options.textTemplate || S(),
            hiddenSection: h(),
            removeSection: C(),
            nestedChildSection: f(),
          });
        },
        childTemplate(e) {
          return f().render(e, {
            textSection: x(),
            textTemplate: this.options.textTemplate || S(),
            hiddenSection: h(),
            removeSection: C(),
          });
        },
        makeTemplateData(e) {
          return {
            items: [].concat(e.toJSON()),
            renderHiddenParentField:
              this.options.renderHiddenParentField ||
              e.get("children").length === 0,
            hidden: this.options.hiddenFieldName,
            childHidden: this.options.hiddenChildFieldName,
          };
        },
        events: i().extend({}, k().prototype.events, {
          "click .Bloko-TagList-Expand": "toggleExpandedOnClick",
        }),
        initialize(e) {
          this.parentsToRender = [];
          k().prototype.initialize.apply(this, [e]);
          this.listenTo(this.tags, "update", this.renderTagUpdate);
        },
        initTags(e) {
          const t = [];
          i()(".Bloko-TagList-ParentTag", this.$el).each((o, n) => {
            const l = i()(n);
            const r = l.attr("data-tag-id");
            t.push({
              id: r,
              hiddenValue: r,
              text: l.find(".Bloko-TagList-Text").eq(0).text().trim(),
              expanded: e || false,
              items: [],
            });
            const s = t[t.length - 1].items;
            l.find(".Bloko-TagList-Children .Bloko-TagList-Tag").each(
              (e, t) => {
                const o = i()(t);
                const n = o.attr("data-tag-id");
                s.push({
                  id: n,
                  hiddenValue: n,
                  text: o.text().trim(),
                });
              },
            );
          });
          this.setTags(t);
        },
        renderTagAdd(e) {
          if (e.has("parent")) {
            this.parentsToRender.push(e.get("parent"));
            this.trigger("Bloko-TagList-Added", e.toJSON());
          } else {
            k().prototype.renderTagAdd.apply(this, [e]);
          }
          return this;
        },
        renderTagUpdate(e, t) {
          if (t.add) {
            l.ZP.unique(this.parentsToRender).forEach((t) => {
              this.renderTagChange(e.get(t));
            });
          }
          this.parentsToRender = [];
        },
        renderTagChange(e) {
          var t;
          const o = this.$nodeByTagId(e.get("id"));
          if (e.has("parent")) {
            o.replaceWith(this.childTemplate(this.makeTemplateData(e)));
          } else {
            o.replaceWith(this.template(this.makeTemplateData(e)));
          }
          if ((t = this.renderIcons) !== null && t !== undefined) {
            t.call(this, e);
          }
          this.trigger("Bloko-TagList-Changed", e.toJSON());
          return this;
        },
        removeTag(e) {
          const t = this.tags.get(e);
          const o = t.get("children");
          const n = t.get("parent");
          if (o) {
            o.forEach((e) => {
              this.tags.remove(e);
            });
            t.set("children", [], {
              silent: true,
            });
          }
          if (n) {
            const t = this.tags.get(n);
            t.attributes.children.splice(t.attributes.children.indexOf(e), 1);
            if (t.get("children").length === 0) {
              this.tags.remove(n);
            } else {
              this.trigger("Bloko-TagList-Changed", t.toJSON());
            }
          }
          this.tags.remove(e);
          return this;
        },
        renderIcons(e) {
          const t = this.$nodeByTagId(e.get("id")).get(0);
          if (t) {
            this.renderRemoveIcon(t);
            this.renderExpandenIcon(t, e.get("expanded"));
          }
        },
        renderExpandenIcon(e, t) {
          const o = e.querySelectorAll(".Bloko-TagList-ExpandedIcon");
          for (const e of [...o]) {
            b().make(c.Z, e, {
              IconComponent: t ? r.Z : s.Z,
              iconProps: {
                initial: a.Z.Gray50,
                highlighted: a.Z.Gray60,
                "data-qa": "bloko-tag__" + (t ? "collapse" : "expand"),
              },
            });
          }
        },
        toggleExpanded(e, t) {
          const o = this.tags.get(e);
          o.set("expanded", t !== undefined ? t : !o.get("expanded"));
          return this;
        },
        toggleExpandedOnClick(e) {
          const t = this.getTagId(e.currentTarget);
          this.toggleExpanded(t);
        },
      });
    },
    322700: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => T,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(948038);
      var s = o.n(r);
      var a = o(585614);
      var c = o(898469);
      var d = o(7367);
      var b = o(487153);
      var u = o(261471);
      var h = o(390713);
      var p = o(389057);
      var k = o(456500);
      var g = o(804203);
      var m = o(17666);
      var _ = o.n(m);
      var f = o(638040);
      var v = o.n(f);
      var C = o(363005);
      var w = o(790613);
      var x = o(343856);
      function y(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      class S extends n.PureComponent {
        constructor() {
          super(...arguments);
          y(this, "state", {
            editing: false,
            showTooltip: false,
            prevItemsLength: this.props.items ? this.props.items.length : 0,
            highlight: false,
          });
          y(this, "inputRef", (0, n.createRef)());
          y(this, "currentRef", this.props.nodeRef || (0, n.createRef)());
          y(
            this,
            "select",
            () =>
              this.props.selectableByClick &&
              this.props.onSelect &&
              this.props.onSelect(),
          );
          y(this, "remove", () => this.props.onRemove && this.props.onRemove());
          y(
            this,
            "increaseCount",
            () => this.props.onCountIncrease && this.props.onCountIncrease(),
          );
          y(
            this,
            "decreaseCount",
            () => this.props.onCountDecrease && this.props.onCountDecrease(),
          );
          y(this, "toggle", () => this.props.onToggle && this.props.onToggle());
          y(this, "startEditing", () => {
            if (this.currentRef.current) {
              this.currentRef.current.style.width = `${this.currentRef.current.offsetWidth}px`;
            }
            this.setState(
              {
                editing: true,
              },
              () => {
                if (this.inputRef.current) {
                  v().setCaretPosition(
                    this.inputRef.current,
                    this.inputRef.current.value.length,
                  );
                }
              },
            );
          });
          y(this, "cancelEditing", () => {
            if (this.currentRef.current) {
              this.currentRef.current.style.width = "";
            }
            this.setState({
              editing: false,
            });
          });
          y(this, "confirmEditing", () => {
            const t = this.inputRef.current?.value || "";
            this.setState(
              {
                editing: false,
              },
              () => {
                if (this.props.onEdit) {
                  this.props.onEdit(t);
                }
              },
            );
          });
          y(this, "showTooltip", () =>
            this.setState({
              showTooltip: true,
            }),
          );
          y(this, "hideTooltip", () =>
            this.setState({
              showTooltip: false,
            }),
          );
          y(this, "renderChildren", () =>
            (0, w.default)(
              this.props.animateNew,
              this.props.items,
              this.renderChild,
              this.onChildAnimationComplete,
            ),
          );
          y(this, "renderChild", (e, t) => {
            const { removable: o } = this.props;
            return (0, n.cloneElement)(e, {
              ...t,
              child: true,
              removable: o,
            });
          });
          y(this, "onChildAnimationComplete", () => {
            this.setState({
              highlight: false,
            });
          });
          y(this, "render", () =>
            this.props.nested ? this.renderNestedTag() : this.renderInlineTag(),
          );
        }
        static getDerivedStateFromProps(e, t) {
          if (e.animateNew) {
            if (e.items && e.items.length > t.prevItemsLength) {
              return {
                prevItemsLength: e.items.length,
                highlight: true,
              };
            } else {
              return {
                highlight: e.isNew,
              };
            }
          } else {
            return null;
          }
        }
        componentDidUpdate(e) {
          if (this.currentRef.current && this.props.text !== e.text) {
            this.currentRef.current.style.width = "";
          }
        }
        renderTextSection() {
          const {
            children: e,
            selectable: t,
            disabled: o,
            nested: n,
            items: i,
            expanded: r,
          } = this.props;
          const { editing: s } = this.state;
          if (s) {
            return null;
          }
          if (t) {
            return (0, x.jsx)("button", {
              type: "button",
              className: l()(
                C.Z["bloko-tag__section"],
                C.Z["bloko-tag__section_text"],
                {
                  [C.Z["bloko-tag__section_active"]]: !o,
                },
              ),
              disabled: o,
              onClick: this.select,
              children: (0, x.jsx)("span", {
                "data-qa": "bloko-tag__text bloko-tag__selectable",
                children: e,
              }),
            });
          }
          const b = {
            initial: a.Z.Gray50,
            "data-qa": l()({
              "bloko-tag__collapse": r,
              "bloko-tag__expand": !r,
            }),
          };
          if (n && i && i.length > 0) {
            return (0, x.jsxs)("button", {
              type: "button",
              className: l()(
                C.Z["bloko-tag__section"],
                C.Z["bloko-tag__section_text"],
                {
                  [C.Z["bloko-tag__section_active"]]: !o,
                },
              ),
              disabled: o,
              onClick: this.toggle,
              children: [
                (0, x.jsx)("span", {
                  "data-qa": "bloko-tag__text",
                  children: e,
                }),
                r
                  ? (0, x.jsx)(c.Z, {
                      ...b,
                    })
                  : (0, x.jsx)(d.Z, {
                      ...b,
                    }),
              ],
            });
          } else {
            return (0, x.jsx)("span", {
              className: l()(
                C.Z["bloko-tag__section"],
                C.Z["bloko-tag__section_text"],
              ),
              "data-qa": "bloko-tag__text",
              children: e,
            });
          }
        }
        renderEditSection() {
          const { text: e, editable: t, disabled: o } = this.props;
          const { editing: i } = this.state;
          const r = o ? undefined : a.Z.Gray60;
          if (t) {
            if (i) {
              return (0, x.jsxs)(n.Fragment, {
                children: [
                  (0, x.jsx)("span", {
                    className: l()(
                      C.Z["bloko-tag__section"],
                      C.Z["bloko-tag__section_edit"],
                    ),
                    children: (0, x.jsx)(_(), {
                      ref: this.inputRef,
                      scale: m.InputScale.Small,
                      "data-qa": "bloko-tag-edit-input",
                      defaultValue: e,
                    }),
                  }),
                  (0, x.jsx)("button", {
                    type: "button",
                    className: C.Z["bloko-tag-button"],
                    "data-qa": "bloko-tag-edit-cancel",
                    disabled: o,
                    onClick: this.cancelEditing,
                    children: (0, x.jsx)(g.Z, {
                      children: (0, x.jsx)(b.Z, {
                        initial: a.Z.Gray50,
                        highlighted: r,
                      }),
                    }),
                  }),
                  (0, x.jsx)("button", {
                    type: "button",
                    className: C.Z["bloko-tag-button"],
                    "data-qa": "bloko-tag-edit-done",
                    disabled: o,
                    onClick: this.confirmEditing,
                    children: (0, x.jsx)(g.Z, {
                      children: (0, x.jsx)(u.Z, {
                        initial: a.Z.Green60,
                        highlighted: r,
                      }),
                    }),
                  }),
                ],
              });
            } else {
              return (0, x.jsx)("button", {
                type: "button",
                className: C.Z["bloko-tag-button"],
                "data-qa": "bloko-tag-edit-action",
                disabled: o,
                onClick: this.startEditing,
                children: (0, x.jsx)(g.Z, {
                  children: (0, x.jsx)(h.Z, {
                    initial: a.Z.Gray50,
                    highlighted: r,
                  }),
                }),
              });
            }
          } else {
            return null;
          }
        }
        renderCountValue() {
          const { count: e, tooltipParams: t } = this.props;
          const { showTooltip: o } = this.state;
          if (t) {
            const { content: n, ...i } = t;
            return (0, x.jsx)(s(), {
              ...i,
              onExternalClose: this.hideTooltip,
              show: o,
              render: () => n,
              children: (0, x.jsx)("div", {
                className: l()(
                  C.Z["bloko-tag__section"],
                  C.Z["bloko-tag__section_count"],
                ),
                "data-qa": "bloko-tag__count",
                onMouseOver: this.showTooltip,
                onMouseLeave: this.hideTooltip,
                children: e,
              }),
            });
          }
          return (0, x.jsx)("div", {
            className: l()(
              C.Z["bloko-tag__section"],
              C.Z["bloko-tag__section_count"],
            ),
            "data-qa": "bloko-tag__count",
            children: e,
          });
        }
        renderCountControls() {
          const { disabled: e, voted: t } = this.props;
          if (!t) {
            return (0, x.jsx)("button", {
              type: "button",
              className: l()(
                C.Z["bloko-tag-button"],
                C.Z["bloko-tag-button_increase"],
              ),
              "data-qa": "bloko-tag__increase",
              disabled: e,
              onClick: this.increaseCount,
              children: (0, x.jsx)(g.Z, {
                children: (0, x.jsx)(p.Z, {
                  initial: a.Z.White,
                }),
              }),
            });
          }
          const o = e ? undefined : a.Z.Gray60;
          return (0, x.jsx)("button", {
            type: "button",
            className: C.Z["bloko-tag-button"],
            "data-qa": "bloko-tag__decrease",
            disabled: e,
            onClick: this.decreaseCount,
            children: (0, x.jsx)(g.Z, {
              children: (0, x.jsx)(b.Z, {
                initial: a.Z.Gray50,
                highlighted: o,
              }),
            }),
          });
        }
        renderCountSection() {
          const { count: e = 0, countable: t, changeable: o } = this.props;
          if (t) {
            return (0, x.jsxs)(n.Fragment, {
              children: [
                e > 0 && this.renderCountValue(),
                o && this.renderCountControls(),
              ],
            });
          } else {
            return null;
          }
        }
        renderRemoveSection() {
          const { removable: e, disabled: t } = this.props;
          const { editing: o } = this.state;
          if (!e || o) {
            return null;
          }
          const n = t ? undefined : a.Z.Gray60;
          return (0, x.jsx)("button", {
            className: C.Z["bloko-tag-button"],
            "data-qa": "bloko-tag__cross",
            type: "button",
            disabled: t,
            onClick: this.remove,
            children: (0, x.jsx)(g.Z, {
              children: (0, x.jsx)(k.Z, {
                initial: a.Z.Gray50,
                highlighted: n,
              }),
            }),
          });
        }
        renderIconSection() {
          const { icon: e } = this.props;
          if (e) {
            return (0, x.jsx)("div", {
              className: l()(
                C.Z["bloko-tag__section"],
                C.Z["bloko-tag__section_icon"],
              ),
              "data-qa": "bloko-tag__icon",
              children: (0, x.jsx)("span", {
                children: e,
              }),
            });
          } else {
            return null;
          }
        }
        renderInlineTag() {
          const {
            stretched: e,
            selectable: t,
            isNew: o,
            selected: n,
            disabled: i,
            countable: r,
            child: s,
            additionalDataQa: a,
            kind: c,
          } = this.props;
          return (0, x.jsxs)("div", {
            ref: this.currentRef,
            className: l()(C.Z["bloko-tag"], {
              [C.Z["bloko-tag_inline"]]: !e && !s,
              [C.Z["bloko-tag_animated"]]: o,
              [C.Z["bloko-tag_selectable"]]: t,
              [C.Z["bloko-tag_selected"]]: n,
              [C.Z["bloko-tag_disabled"]]: i,
              [C.Z["bloko-tag_countable"]]: r,
              [C.Z["bloko-tag_child"]]: s,
              [C.Z[`bloko-tag_${c}`]]: Boolean(c),
            }),
            "data-qa": l()(C.Z["bloko-tag"], C.Z["bloko-tag_inline"], {
              [C.Z["bloko-tag_selected"]]: n,
              [C.Z["bloko-tag_disabled"]]: i,
              [C.Z["bloko-tag_child"]]: s,
              [C.Z[`bloko-tag_${c}`]]: Boolean(c),
              [a]: a !== "",
            }),
            children: [
              this.renderIconSection(),
              this.renderTextSection(),
              this.renderEditSection(),
              this.renderCountSection(),
              this.renderRemoveSection(),
            ],
          });
        }
        renderNestedTag() {
          const {
            disabled: e,
            expanded: t,
            items: o,
            additionalDataQa: n,
            nodeRef: i,
          } = this.props;
          const { highlight: r } = this.state;
          return (0, x.jsxs)("div", {
            ref: i,
            className: C.Z["bloko-nested-tag"],
            "data-qa": l()("bloko-tag bloko-tag_parent", {
              [n]: n !== "",
            }),
            children: [
              (0, x.jsxs)("div", {
                className: l()(C.Z["bloko-tag"], C.Z["bloko-tag_parent"], {
                  [C.Z["bloko-tag_animated"]]: r,
                  [C.Z["bloko-tag_disabled"]]: e,
                }),
                children: [
                  this.renderTextSection(),
                  this.renderRemoveSection(),
                ],
              }),
              (0, x.jsx)("div", {
                className: l()(C.Z["bloko-nested-tag__children"], {
                  [C.Z["bloko-nested-tag__children_visible"]]:
                    t && o && o.length,
                }),
                children: this.renderChildren(),
              }),
            ],
          });
        }
      }
      y(S, "defaultProps", {
        text: "",
        removable: false,
        stretched: false,
        selected: false,
        editable: false,
        isNew: false,
        selectable: false,
        selectableByClick: true,
        disabled: false,
        countable: false,
        changeable: true,
        voted: false,
        animateNew: true,
        nested: false,
        child: false,
        additionalDataQa: "",
        items: [],
        icon: null,
        kind: undefined,
      });
      const T = S;
    },
    141002: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(665164);
      var r = o.n(l);
      var s = o(702595);
      var a = o.n(s);
      var c = o(459324);
      var d = o.n(c);
      var b = o(344237);
      var u = o.n(b);
      const h = {
        create(e, t) {
          const o = this.createView(e, t);
          return this.createPublicInterface(o);
        },
        createView(e, t) {
          return new (u())({
            collection: new (a())(null, {
              model: this.createTagModel(t),
            }),
            el: e,
            options: t,
          });
        },
        createTagModel(e) {
          return d().extend(this.getOptions(e));
        },
        getOptions: (e) =>
          e
            ? {
                removable: !!e.removable,
                editable: !!e.editable,
                selectable: !!e.selectable,
                newTag: e.animateNew === undefined || !!e.animateNew,
              }
            : {
                editable: false,
                removable: false,
                selectable: false,
                newTag: true,
              },
        createPublicInterface(e) {
          const t = r().extend(
            {
              get: e.getTag.bind(e),
              getAll: e.getTags.bind(e),
              set: e.setTags.bind(e),
              add: e.addTag.bind(e),
              remove: e.removeTag.bind(e),
              setTagText: e.setTagText.bind(e),
              getTagElement: e.$nodeByTagId.bind(e),
              toggleSelect: e.toggleSelect.bind(e),
              toggleDisabled: e.toggleDisabled.bind(e),
              setHiddenValue: e.setHiddenValue.bind(e),
              initTags: e.initTags.bind(e),
            },
            i().Events,
          );
          e.on("Bloko-TagList-Added", (e) => {
            t.trigger("Bloko-TagList-Added", e);
          });
          e.on("Bloko-TagList-Changed", (e) => {
            t.trigger("Bloko-TagList-Changed", e);
          });
          e.on("Bloko-TagList-Removed", (e) => {
            t.trigger("Bloko-TagList-Removed", e);
          });
          e.on("Bloko-TagList-ToggleSelected", (e) => {
            t.trigger("Bloko-TagList-ToggleSelected", e);
          });
          return t;
        },
      };
    },
    790613: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(844810);
      var l = o(284882);
      var r = o(343856);
      const s = (e, t, o, s, a, c) =>
        e
          ? (0, r.jsxs)(i.Z, {
              exit: false,
              component: null,
              children: [
                t.map((e) => {
                  const t = (0, n.createRef)();
                  if ((0, n.isValidElement)(e)) {
                    return (0, r.jsx)(
                      l.ZP,
                      {
                        timeout: 800,
                        onEntered: s,
                        nodeRef: t,
                        children: (n) =>
                          o(e, {
                            isNew: n === "entering",
                            nodeRef: t,
                          }),
                      },
                      e.key,
                    );
                  } else {
                    return null;
                  }
                }),
                a &&
                  (0, r.jsx)(l.ZP, {
                    nodeRef: c,
                    timeout: 800,
                    onEntered: s,
                    children: a,
                  }),
              ],
            })
          : (0, r.jsxs)(n.Fragment, {
              children: [
                t.map((e) => ((0, n.isValidElement)(e) ? o(e) : null)),
                a == null ? undefined : a(),
              ],
            });
    },
    784947: function (e, t, o) {
      "use strict";

      let n;
      o.r(t);
      o.d(t, {
        TagKind: () => n,
      });
      (function (e) {
        e.Success = "success";
      })((n ||= {}));
    },
    992897: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => _,
        TextSize: () => p,
        TextImportance: () => g,
      });
      var n = o(882177);
      var i = o.n(n);
      const l = "bloko-text";
      const r = "bloko-text_small";
      const s = "bloko-text_large";
      const a = "bloko-text_extra-large";
      const c = "bloko-text_strong";
      const d = "bloko-text_secondary";
      const b = "bloko-text_tertiary";
      const u = "bloko-text_italic";
      var h = o(343856);
      let p;
      var k;
      let g;
      var m;
      (k = p ||= {}).Small = "small";
      k.Medium = "medium";
      k.Large = "large";
      k.ExtraLarge = "extra-large";
      (m = g ||= {}).Primary = "primary";
      m.Secondary = "secondary";
      m.Tertiary = "tertiary";
      const _ = (e) => {
        let {
          children: t,
          Element: o = "div",
          size: n = p.Medium,
          strong: k = false,
          italic: m = false,
          importance: _ = g.Primary,
          innerRef: f,
          ...v
        } = e;
        return (0, h.jsx)(o, {
          ...v,
          className: i()(l, {
            [r]: n === p.Small,
            [s]: n === p.Large,
            [a]: n === p.ExtraLarge,
            [c]: k,
            [u]: m,
            [d]: _ === g.Secondary,
            [b]: _ === g.Tertiary,
          }),
          ref: f,
          children: t,
        });
      };
    },
    548399: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(394280);
      var i = o.n(n);
      var l = o(882177);
      var r = o.n(l);
      var s = o(236349);
      var a = o.n(s);
      var c = o(956741);
      var d = o.n(c);
      var b = o(481313);
      var u = o(343856);
      const h = i().forwardRef((e, t) => {
        const {
          rows: o,
          cols: i,
          invalid: l = false,
          noresize: s = false,
          source: c,
          autogrow: h,
          minHeight: p,
          maxHeight: k,
          defaultValue: g,
          value: m,
          onChange: _,
          ...f
        } = e;
        const v = (0, n.useRef)(null);
        const { value: C, onChange: w } = d()({
          controlledValue: m,
          defaultValue: g,
          onChangeProp: _,
        });
        (0, n.useLayoutEffect)(() => {
          if (h && v.current) {
            a()(v.current, p, k);
          }
        }, [h, p, k, C, v]);
        return (0, u.jsx)("textarea", {
          ...f,
          value: C,
          onChange: w,
          ref: (e) => {
            v.current = e;
            if (typeof t == "function") {
              t(e);
            } else if (t) {
              t.current = e;
            }
          },
          className: r()(b.Z["bloko-textarea"], {
            [b.Z["bloko-textarea_sized-rows"]]: o,
            [b.Z["bloko-textarea_sized-cols"]]: i,
            [b.Z["bloko-textarea_invalid"]]: l,
            [b.Z["bloko-textarea_noresize"]]: s || h,
          }),
          rows: h ? undefined : o,
          cols: i,
          source: c,
        });
      });
    },
    761245: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        TextareaIconPosition: () => d,
        default: () => b,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(314756);
      var s = o.n(r);
      var a = o(481313);
      var c = o(343856);
      let d;
      (function (e) {
        e.Top = "top";
        e.Bottom = "bottom";
      })((d ||= {}));
      const b = (0, n.forwardRef)((e, t) => {
        const {
          icon: o,
          innerRef: n,
          iconPosition: i = d.Top,
          source: r,
          ...b
        } = e;
        return (0, c.jsxs)("span", {
          ref: n,
          className: a.Z["bloko-textarea-wrapper"],
          source: r,
          children: [
            (0, c.jsx)(s(), {
              ...b,
              ref: t,
            }),
            (0, c.jsx)("span", {
              className: l()(a.Z["bloko-textarea-icon"], {
                [a.Z["bloko-textarea-icon_bottom"]]: i === d.Bottom,
              }),
              children: o,
            }),
          ],
        });
      });
    },
    612719: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(845807);
      var r = o.n(l);
      var s = o(764626);
      var a = o.n(s);
      var c = o(328261);
      var d = o.n(c);
      const b = "toggle";
      const u = r().build({
        defaults: {
          name: "",
          expandClass: "bloko-toggle_expand",
        },
        create: function (e, t) {
          const o = i()(e);
          function n(e) {
            const n = i()(`[data-toggle-container="${t.name}"]`);
            const l = n.length > 0 ? n : o;
            if (!(i()(e.target).closest(l).length > 0)) {
              s(false);
            }
          }
          function l() {
            let e;
            if (t.expandClass) {
              e = !o.hasClass(t.expandClass);
            } else if (t.collapseClass) {
              e = o.hasClass(t.collapseClass);
            }
            return e;
          }
          function r(e) {
            if (e) {
              i()(document).on(`click.${b}`, n);
            } else {
              i()(document).off(`click.${b}`, n);
            }
          }
          function s(n) {
            if (t.collapseClass) {
              o.toggleClass(t.collapseClass, !n);
            }
            if (t.expandClass) {
              o.toggleClass(t.expandClass, n);
            }
            if (t.closeByClick) {
              r(n);
            }
            e.dispatchEvent(
              a()("Bloko-Toggle-Switch", {
                isClosed: l(),
              }),
            );
            o.trigger("possible-resize");
          }
          function c(e, t) {
            e.preventDefault();
            s((t || (l() ? "expand" : "collapse")) === "expand");
          }
          function u() {
            if (window.location.hash.substr(1) === t.showOnHash) {
              s(true);
            }
          }
          o.on(`Bloko-Toggle-Click.${b}`, c);
          o.on(`click.${b}`, `[data-toggle="${t.name}"]`, c);
          if (t.closeByClick) {
            o.on(`Bloko-Toggle-ConfigureClose.${b}`, (e, t) => {
              r(t);
            });
            if (!l()) {
              r(true);
            }
          }
          if (t.active) {
            s(true);
          }
          if (t.showOnHash) {
            u();
            i()(window).on("hashchange", u);
          }
          d().resolve(e, b, this);
          return {
            expand() {
              s(true);
            },
            collapse() {
              s(false);
            },
            toggle() {
              s(!l());
            },
            isClosed: () => l(),
          };
        },
        componentName: "bloko/blocks/toggle",
      });
      const h = {
        create: (e, t) => r().make(u, i()(e).get(0), t),
      };
    },
    487730: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      const n = "bloko-translate-guard";
      var i = o(343856);
      const l = (e) => {
        let { useSpan: t, ...o } = e;
        if (o.children) {
          if (t) {
            return (0, i.jsx)("span", {
              ...o,
            });
          } else {
            return (0, i.jsx)("div", {
              className: n,
              ...o,
            });
          }
        } else {
          return null;
        }
      };
    },
    453913: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(178549);
      var s = o.n(r);
      var a = o(461317);
      var c = o.n(a);
      var d = o(517330);
      var b = o(343856);
      const u = (e) => {
        const {
          collection: t,
          expanded: o = [],
          inputName: n,
          indeterminate: i,
          parentId: r,
          items: a,
          singleChoice: h,
          leavesOnly: p,
          selected: k,
          disabled: g,
          LabelComponent: m,
          IconComponent: _,
          onChange: f,
          onExpansion: v,
          checkSelectableId: C,
        } = e;
        const w = a || t.getTopLevel();
        return (0, b.jsx)(b.Fragment, {
          children: w.map((a) => {
            const w = o.includes(a.id);
            const x = t.hasChildren(a.id);
            const y = (!p || !x) && C(a.id);
            const S = ((e, t) =>
              l()(d.Z["bloko-tree-selector-item"], {
                [d.Z["bloko-tree-selector-item_has-children-has-action"]]:
                  e && t,
                [d.Z["bloko-tree-selector-item_no-children-no-action"]]:
                  !e && !t,
                [d.Z["bloko-tree-selector-item_no-children"]]: !e,
              }))(x, y);
            return (0, b.jsxs)(
              "div",
              {
                className: S,
                "data-qa": l()(c().item, `${c().item}-${a.id}`, {
                  [c().expanded]: w,
                }),
                children: [
                  (0, b.jsxs)("div", {
                    className: d.Z["bloko-tree-selector-item-content"],
                    children: [
                      _ &&
                        (0, b.jsx)("div", {
                          className: d.Z["bloko-tree-selector-item-icon"],
                          children: (0, b.jsx)(_, {
                            id: a.id,
                            text: a.text,
                            additional: a.additional,
                            collection: t,
                          }),
                        }),
                      (0, b.jsx)(s(), {
                        parentId: r,
                        id: a.id,
                        name: n,
                        hasAction: y,
                        hasChildren: x,
                        disabled: g.includes(a.id),
                        selected: k.includes(a.id),
                        expanded: w,
                        indeterminate: i.includes(a.id),
                        onExpansion: v,
                        onChange: f,
                        singleChoice: h,
                        children: m
                          ? (0, b.jsx)(m, {
                              id: a.id,
                              text: a.text,
                              additional: a.additional,
                              collection: t,
                            })
                          : a.text,
                      }),
                    ],
                  }),
                  x &&
                    w &&
                    (0, b.jsx)("div", {
                      className: d.Z["bloko-tree-selector__items"],
                      "data-qa": `${c().items} ${c().items}-${a.id}`,
                      children: (0, b.jsx)(u, {
                        ...e,
                        items: t.getChildren(a.id),
                        parentId: a.id,
                      }),
                    }),
                ],
              },
              a.id,
            );
          }),
        });
      };
      const h = (0, n.memo)(u);
    },
    650970: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => k,
      });
      var n = o(394280);
      var i = o(844810);
      var l = o(187103);
      var r = o.n(l);
      var s = o(752323);
      var a = o.n(s);
      var c = o(468013);
      const d = "bloko-tree-selector-selected";
      const b = "bloko-tree-selector-selected-list";
      var u = o(343856);
      const h = "bloko-tree-selector-selected-list";
      const p = "bloko-tree-selector-selected-list-item";
      const k = (e) => {
        let { items: t, onClick: o } = e;
        const l = (0, n.useRef)(null);
        const s = (0, n.useRef)(null);
        return (0, u.jsx)(r(), {
          in: !!t.length,
          nodeRef: l,
          unmountOnExit: true,
          children: (0, u.jsx)("div", {
            className: d,
            "data-qa": h,
            ref: l,
            children: (0, u.jsx)("div", {
              className: b,
              "data-qa": h,
              children: (0, u.jsx)(i.Z, {
                component: null,
                exit: false,
                children: t.map((e) =>
                  (0, u.jsx)(
                    r(),
                    {
                      nodeRef: s,
                      children: (0, u.jsxs)("div", {
                        "data-qa": `${p} ${p}-${e.id}`,
                        ref: s,
                        children: [
                          (0, u.jsx)(a(), {
                            checked: true,
                            onChange: (t) => {
                              let { target: n } = t;
                              if (o == null) {
                                return undefined;
                              } else {
                                return o(e.id, n.checked);
                              }
                            },
                            children: e.text,
                          }),
                          (0, u.jsx)(c.FormSeparator, {}),
                        ],
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
            }),
          }),
        });
      };
    },
    874026: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(394280);
      var i = o(606248);
      const l = (e) => {
        let { initialValue: t, controlledExpanded: o, onExpand: l } = e;
        const [r, s] = (0, n.useState)(t);
        const a = (0, n.useRef)(t);
        const c = (0, n.useRef)(l);
        const d = (0, n.useCallback)((e) => {
          var t;
          if ((t = c.current) !== null && t !== undefined) {
            t.call(c, e.slice());
          }
          if (!(0, i.isEqualArrays)(a.current, e)) {
            s(e);
          }
        }, []);
        const b = (0, n.useCallback)(
          (e) => {
            let t;
            if (a.current.includes(e)) {
              t = a.current.filter((t) => t !== e);
            } else {
              t = a.current.slice();
              t.push(e);
            }
            d(t);
          },
          [d],
        );
        (0, n.useEffect)(() => {
          c.current = l;
        }, [l]);
        (0, n.useEffect)(() => {
          a.current = r;
        }, [r]);
        (0, n.useEffect)(() => {
          if (o) {
            d(o.slice());
          }
        }, [o, d]);
        return [r, d, b];
      };
    },
    403482: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
        getIndeterminateParentIds: () => l,
      });
      var n = o(394280);
      var i = o(606248);
      function l(e, t) {
        return [
          ...t.reduce((o, n) => {
            e.getParentIds(n).forEach((e) => {
              if (!t.includes(e)) {
                o.add(e);
              }
            });
            return o;
          }, new Set()),
        ];
      }
      const r = (e) => {
        let { initialCollection: t, selected: o } = e;
        const [r, s] = (0, n.useState)([]);
        (0, n.useEffect)(() => {
          const e = l(t, o);
          s((t) => ((0, i.isEqualArrays)(t, e) ? t : e));
        }, [o, t]);
        return [r, s];
      };
    },
    751610: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => w,
        isValidTreeSelectorDummyElement: () => x,
      });
      var n = o(394280);
      var i = o(771674);
      var l = o.n(i);
      var r = o(953705);
      var s = o.n(r);
      var a = o(20189);
      var c = o(486305);
      var d = o.n(c);
      var b = o(837796);
      var u = o.n(b);
      var h = o(33136);
      var p = o.n(h);
      var k = o(571212);
      var g = o.n(k);
      o(517330);
      var m = o(343856);
      let _ = 0;
      const f = [];
      const v = () => true;
      const C = (e) => {
        let {
          leavesOnly: t,
          singleChoice: o,
          showSelectedList: i,
          selected: r = f,
          initialExpanded: c = f,
          constantlySuggested: b = f,
          disabled: h = f,
          onChange: k,
          inputName: C,
          collection: w,
          expanded: x,
          LabelComponent: y,
          IconComponent: S,
          onExpand: T,
          contentFilterQuery: E = "",
          treeFilter: L,
          onChangeFilterQuery: I,
          suggestedNotFound: B = f,
          wrapperTreeProps: M,
          checkSelectable: N = v,
          indeterminateWithParents: P = true,
        } = e;
        const [O, D] = (0, n.useState)(w);
        const Z = (0, n.useRef)(
          C ||
            (function () {
              const e = `bloko-tree-selector-default-name-${_}`;
              _ += 1;
              return e;
            })(),
        );
        const A = (0, n.useRef)(w.getExistModels(B));
        const R = (0, n.useRef)(w.getExistModels(b));
        const j = (0, n.useRef)("");
        const $ = L || a.filterWithParents;
        const [F] = g()({
          initialCollection: w,
          selected: P ? r : f,
        });
        const [H, W, q] = p()({
          initialValue: x ? x.slice() : c.slice(),
          controlledExpanded: x,
          onExpand: T,
        });
        const V = (0, n.useCallback)(
          (e, t) => {
            if (I != null) {
              I(e.slice(), t);
            }
          },
          [I],
        );
        const z = s()();
        (0, n.useEffect)(() => {
          const e = E.trim();
          const t = e !== j.current.trim();
          if (t && (o = e) && o.length) {
            const o = [];
            const n = $(w, (t) => l().match(e, t.text));
            n.toList().forEach((e) => {
              if (n.hasChildren(e.id)) {
                if (t) {
                  o.push(e.id);
                }
              } else {
                w.walkChildren(e.id, (e, t) => {
                  n.addModel(
                    {
                      ...e,
                    },
                    t[0].id,
                  );
                });
              }
            });
            const i = n.toList().map((e) => e.id);
            if (!i.length && A.current.length) {
              A.current.forEach((e) =>
                n.addModel({
                  ...e,
                }),
              );
            } else {
              R.current.forEach((e) => {
                if (!i.includes(e.id)) {
                  n.addModel({
                    ...e,
                  });
                }
              });
            }
            D(n);
            j.current = E;
            V(i, e);
            W(o);
          } else if (t) {
            const t = c.slice();
            D(w);
            V(
              w.toList().map((e) => e.id),
              e,
            );
            j.current = E;
            W(t);
          }
          var o;
        }, [w, E, $, V, c, r, W]);
        const U = (0, n.useCallback)((e) => N(e, w), [N, w]);
        const Y = (0, n.useCallback)(() => {
          const e = o ? r : r.filter((e) => !O.hasChildren(e));
          const t = O.getExistModels(e);
          return (0, m.jsx)(u(), {
            items: t,
            onClick: k,
          });
        }, [O, k, r, o]);
        if (z) {
          return null;
        }
        const G = i && !E;
        return (0, m.jsxs)(m.Fragment, {
          children: [
            G && Y(),
            (0, m.jsx)("div", {
              ...M,
              children: (0, m.jsx)(d(), {
                inputName: Z.current,
                collection: O,
                leavesOnly: t,
                singleChoice: o,
                selected: r,
                expanded: H,
                disabled: h,
                indeterminate: F,
                LabelComponent: y,
                IconComponent: S,
                onChange: k,
                onExpansion: q,
                checkSelectableId: U,
              }),
            }),
          ],
        });
      };
      const w = C;
      const x = (e) => (0, n.isValidElement)(e) && e.type === C;
    },
    117720: function (e, t, o) {
      "use strict";

      o.r(t);
    },
    149946: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => b,
      });
      var n = o(394280);
      var i = o(752323);
      var l = o.n(i);
      var r = o(27528);
      var s = o.n(r);
      var a = o(461317);
      var c = o.n(a);
      var d = o(343856);
      const b = (e) => {
        let {
          id: t,
          name: o,
          parentId: i,
          singleChoice: r,
          selected: a,
          disabled: b,
          indeterminate: u,
          onChange: h,
          onKeyDown: p,
          children: k,
        } = e;
        const g = {
          disabled: b,
          checked: a,
          onChange: (0, n.useCallback)(
            (e) => {
              if (h) {
                h(t, e.target.checked);
              }
            },
            [t, h],
          ),
          onKeyDown: p,
          "data-qa": `${c().input} ${c().input}-${t}`,
          labelProps: {
            "data-qa": `${c().text} ${c().text}-${t}`,
          },
          children: k,
        };
        if (r) {
          return (0, d.jsx)(s(), {
            ...g,
            name: `${o}-${t}${i ? `-${i}` : ""}`,
          });
        } else {
          return (0, d.jsx)(l(), {
            ...g,
            name: o,
            indeterminate: u,
          });
        }
      };
    },
    698612: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => p,
      });
      var n = o(394280);
      var i = o(804203);
      var l = o(806537);
      var r = o(7367);
      var s = o(585614);
      var a = o(191312);
      var c = o(461317);
      var d = o.n(c);
      var b = o(517330);
      var u = o(343856);
      const h = (e) => {
        let { id: t, hasAction: o, expanded: n, onKeyDown: c, onClick: h } = e;
        const p = o
          ? {}
          : {
              tabIndex: 0,
              onKeyDown: c,
            };
        return (0, u.jsx)("span", {
          className: b.Z["bloko-tree-selector-item-spacer"],
          children: (0, u.jsx)(i.Z, {
            children: (0, u.jsx)(l.Z, {
              Element: "span",
              onClick: h,
              "data-qa": `${d().toggle} ${d().toggle}-${t}`,
              ...p,
              children: n
                ? (0, u.jsx)(r.Z, {
                    initial: s.Z.Gray60,
                    highlighted: s.Z.Gray50,
                  })
                : (0, u.jsx)(a.Z, {
                    initial: s.Z.Gray60,
                    highlighted: s.Z.Gray50,
                  }),
            }),
          }),
        });
      };
      const p = (0, n.memo)(h);
    },
    676141: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => c,
      });
      var n = o(394280);
      var i = o(461317);
      var l = o.n(i);
      var r = o(517330);
      var s = o(343856);
      const a = (e) => {
        let { id: t, hasChildren: o, onClick: n, children: i } = e;
        if (o) {
          return (0, s.jsx)("div", {
            className: r.Z["bloko-tree-selector-item__text"],
            "data-qa": `${l().text} ${l().text}-${t}`,
            onClick: n,
            children: i,
          });
        } else {
          return (0, s.jsx)(s.Fragment, {
            children: i,
          });
        }
      };
      const c = (0, n.memo)(a);
    },
    51434: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => p,
      });
      var n = o(394280);
      var i = o(125702);
      var l = o(817849);
      var r = o.n(l);
      var s = o(880824);
      var a = o.n(s);
      var c = o(710702);
      var d = o.n(c);
      var b = o(517330);
      var u = o(343856);
      const h = (e) => {
        let {
          id: t,
          name: o,
          parentId: l,
          hasAction: s = false,
          singleChoice: c = false,
          hasChildren: h = false,
          selected: p = false,
          expanded: k = false,
          disabled: g = false,
          indeterminate: m = false,
          onChange: _,
          onExpansion: f,
          children: v,
        } = e;
        const C = (0, n.useCallback)(
          (e) => {
            switch (e.keyCode) {
              case i.KeyCode.ArrowLeft:
                if (k && f) {
                  f(t);
                }
                e.preventDefault();
                break;
              case i.KeyCode.ArrowRight:
                if (!k && f) {
                  f(t);
                }
                e.preventDefault();
            }
          },
          [k, t, f],
        );
        const w = (0, n.useCallback)(() => f && f(t), [t, f]);
        return (0, u.jsxs)("div", {
          className: b.Z["bloko-tree-selector-content"],
          children: [
            h &&
              (0, u.jsx)(a(), {
                id: t,
                hasAction: s,
                onKeyDown: C,
                onClick: w,
                expanded: k,
              }),
            s &&
              (0, u.jsx)(r(), {
                id: t,
                parentId: l,
                onKeyDown: C,
                onChange: _,
                singleChoice: c,
                indeterminate: m,
                selected: p,
                disabled: g,
                name: o,
                children: v,
              }),
            !s &&
              (0, u.jsx)(d(), {
                id: t,
                hasChildren: h,
                onClick: w,
                children: v,
              }),
          ],
        });
      };
      const p = (0, n.memo)(h);
    },
    987490: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = {
        expanded: "bloko-tree-selector-item-expanded",
        item: "bloko-tree-selector-item",
        items: "bloko-tree-selector-items",
        text: "bloko-tree-selector-item-text",
        input: "bloko-tree-selector-input",
        toggle: "bloko-tree-selector-toogle-node",
      };
    },
    449617: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        TreeSelectorDummy: () => a.a,
        default: () => p,
        isValidTreeSelector: () => h,
        isValidTreeSelectorElement: () => u,
      });
      var n = o(394280);
      var i = o(18332);
      var l = o.n(i);
      var r = o(20189);
      var s = o(602910);
      var a = o.n(s);
      var c = o(343856);
      const d = [];
      const b = (e) => {
        let {
          data: t,
          leavesOnly: o,
          singleChoice: i,
          initialSelected: s = d,
          initialExpanded: b = d,
          disabled: u = d,
          LabelComponent: h,
          IconComponent: p,
          onChange: k,
          onExpand: g,
          contentFilterQuery: m = "",
          treeFilter: _,
          onChangeFilterQuery: f,
          showSelectedList: v,
          wrapperTreeProps: C,
          suggestedNotFound: w,
          checkSelectable: x,
        } = e;
        const [y, S] = (0, n.useState)(s);
        const T = (0, n.useRef)((0, r.fromTree)(t));
        const E = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          E.current = new (l())(T.current, {
            singleChoice: i,
            leavesOnly: o,
            checkSelectable: x,
          });
        }, [x, i, o]);
        const L = (0, n.useCallback)(
          (e, t) => {
            if (E.current) {
              const o = t ? E.current.add(y, [e]) : E.current.remove(y, [e]);
              S(o);
              if (k != null) {
                k(e, t, o);
              }
            }
          },
          [y, k],
        );
        return (0, c.jsx)(a(), {
          collection: T.current,
          singleChoice: i,
          leavesOnly: o,
          selected: y,
          disabled: u,
          initialExpanded: b,
          LabelComponent: h,
          IconComponent: p,
          onChange: L,
          onExpand: g,
          contentFilterQuery: m,
          onChangeFilterQuery: f,
          treeFilter: _,
          showSelectedList: v,
          wrapperTreeProps: C,
          suggestedNotFound: w,
          checkSelectable: x,
        });
      };
      const u = (e) => (0, n.isValidElement)(e) && e.type === b;
      const h = (e) =>
        (0, n.isValidElement)(e) && (e.type === a() || e.type === b);
      const p = b;
    },
    745653: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => z,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(7367);
      var r = o(191312);
      var s = o(585614);
      var a = o(607621);
      var c = o(845807);
      var d = o.n(c);
      var b = o(456486);
      var u = o.n(b);
      var h = o(771674);
      var p = o.n(h);
      var k = o(477386);
      var g = o.n(k);
      var m = o(543210);
      var _ = o.n(m);
      var f = o(122306);
      var v = o.n(f);
      var C = o(785772);
      var w = o.n(C);
      var x = o(275475);
      var y = o.n(x);
      var S = o(988005);
      var T = o.n(S);
      var E = o(885652);
      var L = o.n(E);
      var I = o(945169);
      var B = o.n(I);
      var M = o(368776);
      var N = o.n(M);
      var P = o(927089);
      var O = o.n(P);
      var D = o(105658);
      var Z = o.n(D);
      var A = o(858055);
      var R = o.n(A);
      var j = o(670924);
      var $ = o.n(j);
      var F = o(770545);
      var H = o.n(F);
      var W = o(456882);
      var q = o.n(W);
      const V = function (e) {
        const t = i()(e.el);
        const o = e.collection;
        const n = o.get();
        const c = e.modelsHandler;
        new (q())(c);
        const b = e.labelTemplate || N();
        const h = L();
        let k;
        let m;
        let f;
        let C = [];
        const w = `bloko-tree-selector-default-name-${Math.random()}`;
        const x = u().extend({
          setSelected: function (t) {
            switch (e.type) {
              case "checkbox":
                I(t, false);
                break;
              case "radio":
                A(t, true);
            }
          },
          getSelected: function () {
            return o
              .getByAttributes({
                selected: true,
                disabled: false,
              })
              .map((e) => c.toJSON(e));
          },
          addSelected: function (t) {
            if (e.type === "radio") {
              h.error(h.WRONG_TYPE_RADIO);
              return;
            }
            I(t, true);
          },
          toggleDisabled: function (e) {
            if (typeof e == "function") {
              j("disabled", e);
            } else {
              h.error(h.METHOD_ARGUMENT_NOT_FUNCTION);
            }
          },
          filterByContent: function (e) {
            const t = e.trim();
            o.get().forEach((e) => {
              const o = p().match(t, e.attributes.searchText);
              if (o && e.attributes.parent) {
                W(e.attributes.parent);
                z(e.attributes.parent, !!t);
              }
              c.set(e, {
                consistFilterQuery: o,
              });
            });
            const n = o.getByAttributes({
              consistFilterQuery: true,
            });
            const i = n.reduce((e, t) => {
              const o = t.attributes;
              let n = t.attributes.parent;
              for (o && o.items && o.items.length && (e[o.id] = true); n; ) {
                e[n.attributes.id] = false;
                n = n.attributes.parent;
              }
              return e;
            }, {});
            n.filter((e) => i[e.attributes.id]).forEach((e) => {
              H(e.attributes.items);
              c.set(e, {
                expanded: false,
              });
              if (e.attributes.items.length) {
                V(e.attributes.items, false);
              }
            });
            o.get().forEach((e) => {
              c.set(e, {
                hidden: !e.attributes.consistFilterQuery,
              });
            });
          },
          toggleExpanded: function (e) {
            if (typeof e == "function") {
              j("expanded", e);
            } else {
              h.error(h.METHOD_ARGUMENT_NOT_FUNCTION);
            }
          },
          change: function (t) {
            switch (e.type) {
              case "checkbox":
                t.forEach((e) => {
                  const t = o.getById(e);
                  if (t.length) {
                    t.forEach((e) => {
                      P(e, !e.attributes.selected);
                    });
                  } else {
                    h.error(h.ITEM_NOT_FOUND);
                  }
                });
                D();
                break;
              case "radio":
                A(t);
            }
          },
          getItem: function (e) {
            const t = o.getById(e);
            const n = t.length ? t[0] : null;
            return c.toJSON(n);
          },
          getAllItems: function (e) {
            return o.getById(e).map((e) => c.toJSON(e));
          },
        });
        switch (e.type) {
          case "checkbox":
            k = y();
            m = e.leavesOnly ? O() : Z();
            f = e.leavesOnly ? _() : v();
            break;
          case "radio":
            k = T();
            m = e.leavesOnly ? O() : R();
            f = e.leavesOnly ? _() : v();
            break;
          default:
            throw new Error(
              `BlokoTreeSelector: the wrong type: "${e.type}", can be "checkbox" or "radio"`,
            );
        }
        const S = e.afterLabelTemplate ? f : null;
        if (e.dataJSON) {
          const u = (function t(n, l) {
            let r = "";
            const s = [];
            let a = false;
            let c = false;
            for (let d = 0, u = n.length; d < u; d++) {
              let p;
              const g = {
                attributes: {
                  id: n[d].id.toString() || null,
                  text: n[d].text || "",
                  name: w,
                  parent: null,
                  items: [],
                  expanded: !!n[d].expanded || false,
                  selected: !!n[d].selected || false,
                  disabled: !!n[d].disabled || false,
                  changed: false,
                  indeterminate: false,
                  additional: n[d].additional
                    ? i().extend(true, {}, n[d].additional)
                    : null,
                },
                view: {},
              };
              if (g.id === null) {
                h.error(h.ID_IS_NULL);
              }
              if (l) {
                g.attributes.parent = l;
                if (!e.leavesOnly && e.type === "checkbox") {
                  if (l.attributes.selected) {
                    g.attributes.selected = true;
                  }
                }
                if (g.attributes.selected) {
                  a = true;
                } else {
                  c = true;
                }
                s.push(g);
                if (d === u - 1) {
                  if (!e.leavesOnly && e.type === "checkbox") {
                    l.attributes.indeterminate = a && c;
                    l.attributes.selected = !c;
                  }
                  if (e.leavesOnly) {
                    l.attributes.selected = false;
                  }
                  l.attributes.items = s;
                }
              }
              o.add(g);
              if (n[d].items && n[d].items.length) {
                r += t(n[d].items, g);
              } else {
                p = k.render(g.attributes, {
                  labelTemplate: b,
                  afterLabelWrapperTemplate: S,
                  afterLabelTemplate: e.afterLabelTemplate,
                });
                r += p;
              }
            }
            if (l) {
              return m.render(
                i().extend(
                  {
                    itemsTemplate: r,
                  },
                  l.attributes,
                ),
                {
                  labelTemplate: b,
                  elementTemplate: k,
                  afterLabelWrapperTemplate: S,
                  afterLabelTemplate: e.afterLabelTemplate,
                  iconsTemplate: B(),
                },
              );
            }
            return r;
          })(e.dataJSON);
          let p = i()(g().render()).append(u);
          p.find(".Bloko-TreeSelector-Element").each((e, t) => {
            n[e].view.el = t;
            n[e].view.action = t.querySelector(".Bloko-TreeSelector-Action");
            n[e].view.input = n[e].view.action.querySelector(
              ".Bloko-TreeSelector-Input",
            );
            n[e].view.list = t.querySelector(".Bloko-TreeSelector-List");
            n[e].view.icon = t.querySelector(".Bloko-TreeSelector-Icon");
            if (n[e].view.icon) {
              n[e].view.iconComponent = d().make(a.Z, n[e].view.icon, {
                IconComponent: n[e].attributes.expanded ? l.Z : r.Z,
                iconProps: {
                  initial: s.Z.Gray60,
                  highlighted: s.Z.Gray50,
                },
              });
            }
            n[e].attributes.searchText = i()(
              t.querySelector(".Bloko-TreeSelector-SearchContent"),
            ).text();
            i()(n[e].view.list).detach();
          });
          if (!e.leavesOnly && e.type === "checkbox") {
            o.getByAttributes({
              indeterminate: true,
            }).forEach((e) => {
              c.set(e, {
                indeterminate: false,
              });
              E(e);
            });
          }
          if (e.type === "radio") {
            const e = o.getByAttributes({
              selected: true,
            });
            const t = e.length;
            if (t) {
              for (let o = 0; o < t - 1; o++) {
                e[o].attributes.selected = false;
              }
              const n = e[t - 1];
              C = o.getById(n.attributes.id);
              C.forEach((e) => {
                e.attributes.selected = true;
              });
            }
          }
          t.append(p);
          p = null;
        }
        function E(e) {
          c.set(e, {
            indeterminate: true,
          });
          if (e.attributes.parent) {
            E(e.attributes.parent);
          }
        }
        function I(e, t) {
          let n = t || false;
          if (!e || e.length) {
            e.forEach((e) => {
              const t = o.getById(e);
              if (t.length) {
                if (!n) {
                  M();
                  n = true;
                }
                t.forEach((e) => {
                  P(e, true);
                });
              } else {
                h.error(h.ITEM_NOT_FOUND);
              }
            });
            D();
          } else {
            M();
          }
        }
        function M() {
          o.get().forEach((e) => {
            c.set(e, {
              selected: false,
              indeterminate: false,
            });
          });
        }
        function P(t, o) {
          if (t.attributes.items.length && e.leavesOnly) {
            h.error(h.ELEMENT_NOT_SELECTABLE);
          } else {
            c.set(t, {
              selected: o,
              indeterminate: false,
            });
            if (t.attributes.items && !e.leavesOnly) {
              $(t.attributes.items, t.attributes.selected);
            }
            if (t.attributes.parent && !e.leavesOnly) {
              F(t.attributes.parent, t.attributes.selected);
            }
          }
        }
        function D() {
          const e = o.getByAttributes({
            changed: true,
          });
          const t = [];
          e.forEach((e) => {
            t.push(c.toJSON(e));
            c.set(e, {
              changed: false,
            });
          });
          if (t.length) {
            x._trigger("Bloko-TreeSelector-Changed", t);
          }
        }
        function A(t, n) {
          if (!t.length) {
            M();
            D();
            return;
          }
          const i = t[t.length - 1];
          const l = o.getById(i);
          if (l.length) {
            C.forEach((e) => {
              c.set(e, {
                selected: false,
                indeterminate: false,
              });
            });
            C = l;
            l.forEach((t) => {
              if (t.attributes.items.length && e.leavesOnly) {
                h.error(h.ELEMENT_NOT_SELECTABLE);
              } else {
                c.set(t, {
                  selected: n !== undefined ? n : !t.attributes.selected,
                });
              }
            });
            D();
          } else {
            h.error(h.ITEM_NOT_FOUND);
          }
        }
        function j(e, t) {
          o.get().forEach((o) => {
            const n = {};
            n[e] = !!t(c.toJSON(o));
            c.set(o, n);
          });
        }
        function $(t, n) {
          t.forEach((t) => {
            o.getById(t.attributes.id).forEach((t) => {
              c.set(t, {
                selected: n,
                indeterminate: false,
              });
              if (t.attributes.items.length) {
                $(t.attributes.items, n);
              }
              if (t.attributes.parent && !e.leavesOnly) {
                F(t.attributes.parent, n);
              }
            });
          });
        }
        function F(e, t) {
          let o = true;
          let n = false;
          e.attributes.items.forEach((e) => {
            if (e.attributes.selected !== t) {
              o = false;
            }
            if (e.attributes.indeterminate) {
              n = true;
            }
          });
          if (e.attributes.selected || o) {
            c.set(e, {
              selected: t,
            });
          }
          c.set(e, {
            indeterminate: false,
          });
          if (!o || n) {
            c.set(e, {
              indeterminate: true,
            });
          } else {
            c.set(e, {
              indeterminate: false,
            });
          }
          if (e.attributes.parent) {
            F(e.attributes.parent, t);
          }
        }
        function H(e) {
          e.forEach((e) => {
            c.set(e, {
              consistFilterQuery: true,
              hidden: false,
            });
            if (e.attributes.items) {
              H(e.attributes.items);
            }
          });
        }
        function W(e) {
          c.set(e, {
            consistFilterQuery: true,
            hidden: false,
          });
          if (e.attributes.parent) {
            W(e.attributes.parent);
          }
        }
        function V(e, t) {
          e.forEach((e) => {
            const o = e.attributes.items;
            if (o.length) {
              c.set(e, {
                expanded: t,
              });
              V(o, t);
            }
          });
        }
        function z(e, t) {
          c.set(e, {
            expanded: t,
          });
          if (e.attributes.parent) {
            z(e.attributes.parent, t);
          }
        }
        return x;
      };
      const z = d().build({
        create(e, t) {
          const o = new ($())();
          const n = new (w())([]);
          const i = new V({
            el: e,
            modelsHandler: o,
            collection: n,
            type: t.type,
            leavesOnly: t.leavesOnly,
            labelTemplate: t.labelTemplate,
            afterLabelTemplate: t.afterLabelTemplate,
            dataJSON: t.dataJSON,
          });
          new (H())({
            el: e,
            treeSelectorInterface: i,
            modelsHandler: o,
            collection: n,
            type: t.type,
          });
          return i;
        },
        componentName: "bloko/blocks/treeSelector",
      });
    },
    228310: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(665164);
      var r = o.n(l);
      function s(e) {
        const t = {};
        return r().extend(
          {
            get: function () {
              return e;
            },
            add: function (o) {
              e.push(o);
              t[o.attributes.id] = t[o.attributes.id] || [];
              t[o.attributes.id].push(o);
            },
            getById: function (e) {
              return t[e] || [];
            },
            getByAttributes: function (t) {
              return e.filter((e) => {
                const o = e.attributes;
                let n = true;
                for (const e in t) {
                  if (o[e] !== t[e]) {
                    n = false;
                  }
                }
                return n;
              });
            },
          },
          i().Events,
        );
      }
    },
    272490: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(428612);
      var i = o.n(n);
      const l = {
        ID_IS_NULL: "BlokoTreeSelector: ID not passed",
        ITEM_NOT_FOUND: "BlokoTreeSelector: the selected item can not be found",
        WRONG_TYPE_RADIO:
          'BlokoTreeSelector: add to selected items can not be, because type="radio"',
        METHOD_ARGUMENT_NOT_FUNCTION:
          "BlokoTreeSelector: method got no argument function",
        ELEMENT_NOT_SELECTABLE: "BlokoTreeSelector: element not selectable",
        error(e, t) {
          i().log("log error", new Error(e.replace("{{#message}}", t)));
        },
      };
    },
    296641: function (e, t, o) {
      "use strict";

      function n(e, t) {
        e.forEach((e) => {
          t(e);
          if (e.items && e.items.length) {
            n(e.items, t);
          }
        });
        return e;
      }
      o.r(t);
      o.d(t, {
        default: () => i,
      });
      const i = {
        walker: n,
        getSelectedItemsWithoutSelectedParent: function (e) {
          const t = e.reduce((e, t) => {
            if (t.items && t.items.length) {
              e[t.id] = true;
            }
            return e;
          }, {});
          return e.filter((e) => !t[e.parent]);
        },
        getSelectedItemsLeavesOnly: function (e) {
          return e.reduce((e, t) => {
            var o;
            if ((o = t.items) !== null && o !== undefined && o.length) {
              return e;
            } else {
              return e.concat(t);
            }
          }, []);
        },
        getUniqueItems: function (e, t = (e) => e.id) {
          const o = new Map();
          e.forEach((e) => {
            const n = t(e);
            o.set(n, e);
          });
          return [...o.values()];
        },
        sort: function (e, t) {
          e.sort(t);
          return n(e, (e) => {
            if (e.items && e.items.length) {
              e.items.sort(t);
            }
          });
        },
      };
    },
    444138: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(665164);
      var r = o.n(l);
      function s() {
        const e = r().extend(
          {
            set: function (t, o) {
              if (typeof o == "object") {
                for (const n in o) {
                  if (n !== "expanded" || t.attributes.items.length !== 0) {
                    if (o[n] !== t.attributes[n]) {
                      t.attributes[n] = o[n];
                      if (n === "selected") {
                        t.attributes.changed = true;
                      }
                      e.trigger(`change:${n}`, t);
                    }
                  }
                }
              }
            },
            toJSON: function (e) {
              if (!e) {
                return null;
              }
              const t = e.attributes;
              return {
                id: t.id,
                text: t.text,
                name: t.name,
                parent: t.parent ? t.parent.attributes.id : null,
                expanded: t.expanded,
                selected: t.selected,
                disabled: t.disabled,
                items: t.items.map((e) => e.attributes.id),
                additional: t.additional
                  ? r().extend(true, {}, t.additional)
                  : null,
              };
            },
          },
          i().Events,
        );
        return e;
      }
    },
    194801: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => d,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(665164);
      var r = o.n(l);
      var s = o(125702);
      var a = o(182093);
      var c = o.n(a);
      const d = i().View.extend({
        initialize(e) {
          this.treeSelectorInterface = e.treeSelectorInterface;
          this.modelsHandler = e.modelsHandler;
          this.collection = e.collection;
          const t = c().IE() || c().IEMobile();
          if (e.type === "checkbox" && t) {
            this.delegateEvents({
              "click .Bloko-TreeSelector-Chevron": "toggleList",
              "click .Bloko-TreeSelector-Expanded": "toggleList",
              "click .Bloko-TreeSelector-Input": "changeByEvent",
              "keydown .Bloko-TreeSelector-Input": "keyboardControlIE",
              "keydown .Bloko-TreeSelector-Action": "keyboardControl",
            });
          } else {
            this.delegateEvents({
              "click .Bloko-TreeSelector-Chevron": "toggleList",
              "click .Bloko-TreeSelector-Expanded": "toggleList",
              "change .Bloko-TreeSelector-Action": "changeByEvent",
              "keydown .Bloko-TreeSelector-Action": "keyboardControl",
            });
          }
        },
        keyboardControl(e) {
          switch (e.keyCode) {
            case s.KeyCode.ArrowLeft:
              this.toggleList(e, false);
              e.preventDefault();
              break;
            case s.KeyCode.ArrowRight:
              this.toggleList(e, true);
              e.preventDefault();
          }
        },
        keyboardControlIE(e) {
          if (e.keyCode === s.KeyCode.Space) {
            this.changeByEvent(e);
            e.preventDefault();
          }
        },
        toggleList(e, t) {
          const o = this._getCurrentIdByEvent(e);
          this.collection.getById(o).forEach((e) => {
            if (e.attributes.items) {
              this.modelsHandler.set(e, {
                expanded: t || !e.attributes.expanded,
              });
            }
          });
          return false;
        },
        changeByEvent(e) {
          const t = this._getCurrentIdByEvent(e);
          this.treeSelectorInterface.change([t]);
        },
        _getCurrentIdByEvent: (e) =>
          r()(e.target).closest(".Bloko-TreeSelector-Element").attr("data-id"),
      });
    },
    334280: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => d,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(7367);
      var r = o(191312);
      var s = o(585614);
      var a = o(461317);
      var c = o.n(a);
      function d(e) {
        function t(e) {
          e.view.$el ||= i()(e.view.el);
        }
        function o(e) {
          const t = e.attributes.items;
          if (!e.attributes.expanded || !t || !t.length) {
            return [];
          }
          const n = t.reduce((e, t) => {
            const n = o(t);
            if (n.length) {
              Array.prototype.push.apply(e, n);
            }
            return e;
          }, []);
          return t.concat(n);
        }
        e.on("change:selected", (e) => {
          e.view.input.checked = e.attributes.selected;
        });
        e.on("change:expanded", (e) => {
          var n;
          var a;
          e.view.$icon ||= i()(e.view.icon);
          e.view.$list ||= i()(e.view.list);
          t(e);
          if (e.attributes.expanded) {
            e.view.$el.append(e.view.$list);
          } else {
            e.view.$list.detach();
          }
          o(e).forEach((e) => {
            if (e.view.input) {
              e.view.input.disabled = !!e.attributes.disabled;
            }
          });
          if (
            (n = e.view.iconComponent) !== null &&
            n !== undefined &&
            (a = n.change) !== null &&
            a !== undefined
          ) {
            a.call(n, {
              IconComponent: e.attributes.expanded ? l.Z : r.Z,
              iconProps: {
                initial: s.Z.Gray60,
                highlighted: s.Z.Gray50,
              },
            });
          }
          e.view.$list.toggleClass("g-hidden");
          e.view.$el.attr(
            "data-qa",
            `${c().item} ${c().item}-${e.attributes.id} ${e.attributes.expanded ? c().expanded : ""}`,
          );
        });
        e.on("change:indeterminate", (e) => {
          e.view.input.indeterminate = e.attributes.indeterminate;
        });
        e.on("change:disabled", (e) => {
          if (
            e.view.input &&
            (function (e) {
              let t = e.attributes.parent;
              while (t) {
                if (!t.attributes.expanded) {
                  return false;
                }
                t = t.attributes.parent;
              }
              return true;
            })(e)
          ) {
            e.view.input.disabled = !!e.attributes.disabled;
          }
        });
        e.on("change:hidden", (e) => {
          t(e);
          if (e.attributes.parent) {
            if (e.attributes.hidden) {
              e.view.$el.detach();
            } else {
              i()(e.attributes.parent.view.list).append(e.view.$el);
            }
          } else {
            e.view.$el.toggleClass("g-hidden", e.attributes.hidden);
          }
        });
      }
    },
    618773: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        isEqualArrays: () => n,
      });
      const n = (e, t) => {
        if (e.length !== t.length) {
          return false;
        }
        const o = t.slice().sort();
        return e
          .slice()
          .sort()
          .every((e, t) => e === o[t]);
      };
    },
    427121: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => k,
      });
      var n = o(394280);
      var i = o(563457);
      var l = o.n(i);
      var r = o(468013);
      var s = o(390259);
      var a = o.n(s);
      var c = o(15275);
      var d = o(381867);
      var b = o.n(d);
      var u = o(331207);
      var h = o(343856);
      const p = (e) => {
        let {
          showLoadingOnSubmit: t,
          disabledSubmit: o,
          trlCancel: n,
          trlSubmit: d,
          onSubmit: p,
          onClose: k,
          footerExtra: g,
        } = e;
        return (0, h.jsx)(c.ModalFooter, {
          children: (0, h.jsxs)("div", {
            className: u.Z["bloko-tree-selector-popup-footer"],
            children: [
              g &&
                (0, h.jsx)("div", {
                  className: u.Z["bloko-tree-selector-popup-footer-extra"],
                  children: g,
                }),
              (0, h.jsx)(r.FormSpacer, {
                children: (0, h.jsx)(l(), {
                  "data-qa": b().cancel,
                  onClick: k,
                  children: n,
                }),
              }),
              (0, h.jsx)(r.FormSpacer, {
                children: (0, h.jsx)(l(), {
                  kind: i.ButtonKind.Primary,
                  disabled: o,
                  onClick: p,
                  "data-qa": b().submit,
                  loading: t
                    ? (0, h.jsx)(a(), {
                        initial: s.LoadingColor.White,
                      })
                    : undefined,
                  children: d,
                }),
              }),
            ],
          }),
        });
      };
      const k = (0, n.memo)(p);
    },
    464993: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => u,
      });
      var n = o(394280);
      var i = o(17666);
      var l = o.n(i);
      var r = o(15275);
      var s = o(381867);
      var a = o.n(s);
      var c = o(331207);
      var d = o(343856);
      const b = (e) => {
        let {
          contentFilterQuery: t,
          searchWithClear: o,
          title: n,
          search: s,
          hint: b,
          trlPlaceholder: u = "",
          onSearch: h,
          contentAfterTitle: p,
        } = e;
        const k = {
          type: i.InputType.Search,
          "data-qa": a().search,
          placeholder: u,
          value: t,
          onChange: h,
          showClearButton: o,
        };
        if (n || s || b) {
          return (0, d.jsxs)(r.ModalHeader, {
            children: [
              (0, d.jsx)(r.ModalTitle, {
                children: n,
              }),
              p,
              s &&
                (0, d.jsx)("div", {
                  className: c.Z["bloko-tree-selector-popup-search"],
                  children: (0, d.jsx)(l(), {
                    ...k,
                  }),
                }),
              b &&
                (0, d.jsx)("div", {
                  className: c.Z["bloko-tree-selector-popup-hint"],
                  children: b,
                }),
            ],
          });
        } else {
          return null;
        }
      };
      const u = (0, n.memo)(b);
    },
    117494: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => p,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      var r = o(282824);
      var s = o.n(r);
      var a = o(602910);
      var c = o.n(a);
      var d = o(381867);
      var b = o.n(d);
      var u = o(331207);
      var h = o(343856);
      const p = (e) => {
        let {
          onChangeFilterQuery: t,
          onChange: o,
          onExpand: i,
          selected: a,
          expanded: d,
          controlledSelected: p,
          contentFilterQuery: k,
          trlNotFound: g = "",
          children: m,
        } = e;
        const [_, f] = (0, n.useState)(false);
        const v = (0, n.useCallback)(
          (e, o) => {
            f(!e.length);
            if (t != null) {
              t(e, o);
            }
          },
          [t],
        );
        if (!(0, r.isValidTreeSelector)(m)) {
          throw new Error("Children must be TreeSelector or TreeSelectorDummy");
        }
        const C = m.props.showSelectedList;
        return (0, h.jsxs)("div", {
          className: l()(u.Z["bloko-tree-selector-popup"], {
            [u.Z["bloko-tree-selector-popup__with-selected"]]: C,
          }),
          children: [
            _ &&
              g &&
              (0, h.jsx)("div", {
                className: u.Z["bloko-tree-selector-popup-not-found"],
                "data-qa": b().notFound,
                children: g,
              }),
            (0, r.isValidTreeSelector)(m) &&
              (0, n.cloneElement)(m, {
                onChange: o,
                onExpand: i,
                ...(m.type === s() && {
                  initialSelected: a,
                }),
                initialExpanded: d,
                ...(m.type === c() && {
                  selected: p,
                }),
                contentFilterQuery: k,
                onChangeFilterQuery: v,
                wrapperTreeProps: {
                  className: l()(u.Z["bloko-tree-selector-popup-content"], {
                    [u.Z["bloko-tree-selector-popup-content__with-selected"]]:
                      C,
                  }),
                },
              }),
          ],
        });
      };
    },
    687478: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = {
        submit: "bloko-tree-selector-popup-submit",
        cancel: "bloko-tree-selector-popup-cancel",
        search: "bloko-tree-selector-popup-search",
        notFound: "bloko-tree-selector-popup-not-found",
      };
    },
    727314: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(394280);
      var i = o(282824);
      var l = o(602910);
      var r = o(606248);
      const s = (e) => {
        let {
          children: t,
          clearSearchOnChange: o,
          setContentFilterQuery: s,
          controlledSelected: a,
          onSubmit: c,
          setSelected: d,
          setExpanded: b,
          hideOnSubmitClick: u,
          onClose: h,
          onChange: p,
        } = e;
        const k = (0, n.useRef)(
          ((0, i.isValidTreeSelectorElement)(t) && t.props.initialSelected) ||
            [],
        );
        const g = (0, n.useRef)(
          ((0, i.isValidTreeSelector)(t) && t.props.initialExpanded) || [],
        );
        const m = (0, n.useCallback)(
          function (e, n, i = []) {
            var r;
            var a;
            if ((0, l.isValidTreeSelectorDummyElement)(t)) {
              if ((r = (a = t.props).onChange) !== null && r !== undefined) {
                r.call(a, e, n);
              }
            } else {
              k.current = i;
            }
            if (o) {
              s("");
            }
          },
          [t, o, s],
        );
        const _ = (0, n.useCallback)((e) => {
          g.current = e;
        }, []);
        const f = (0, n.useCallback)(() => {
          const e = (0, l.isValidTreeSelectorDummyElement)(t) ? a : k.current;
          const o = g.current;
          if (c) {
            c(e.slice());
          } else {
            d((t) =>
              (0, r.isEqualArrays)(t, e) ? t : (p == null || p(e.slice()), e),
            );
          }
          b((e) => ((0, r.isEqualArrays)(e, o) ? e : o));
          if (u) {
            s("");
            h();
          }
        }, [t, a, u, p, h, c, s, b, d]);
        return {
          handleTreeSelectorExpand: _,
          handleTreeSelectorChange: m,
          handleSubmit: f,
          handleSearch: (0, n.useCallback)(
            (e) => {
              s(e || "");
            },
            [s],
          ),
        };
      };
    },
    460477: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => h,
      });
      var n = o(394280);
      var i = o(15275);
      var l = o.n(i);
      var r = o(282824);
      o(331207);
      var s = o(427121);
      var a = o(464993);
      var c = o(117494);
      var d = o(727314);
      var b = o(343856);
      const u = [];
      const h = (e) => {
        let {
          selected: t = u,
          children: o,
          visible: h,
          onClose: p,
          title: k,
          search: g = true,
          hint: m,
          trl: _,
          searchWithClear: f,
          disabledSubmit: v,
          showLoadingOnSubmit: C,
          onChange: w,
          onSubmit: x,
          error: y,
          hideOnSubmitClick: S = true,
          onChangeFilterQuery: T,
          clearSearchOnChange: E,
          contentAfterTitle: L,
          footerExtra: I,
          host: B,
        } = e;
        if (!(0, r.isValidTreeSelector)(o)) {
          throw new Error("Children must be TreeSelector or TreeSelectorDummy");
        }
        const [M, N] = (0, n.useState)("");
        const [P, O] = (0, n.useState)(o.props.initialExpanded || []);
        const [D, Z] = (0, n.useState)(
          (0, r.isValidTreeSelectorElement)(o)
            ? o.props.initialSelected || []
            : t,
        );
        const {
          handleSubmit: A,
          handleTreeSelectorChange: R,
          handleTreeSelectorExpand: j,
          handleSearch: $,
        } = (0, d.default)({
          children: o,
          controlledSelected: t,
          onClose: p,
          setSelected: Z,
          setContentFilterQuery: N,
          setExpanded: O,
          clearSearchOnChange: E,
          hideOnSubmitClick: S,
          onSubmit: x,
          onChange: w,
        });
        const F = {
          hint: m,
          search: g,
          title: k,
          searchWithClear: f,
          contentFilterQuery: M,
          onSearch: $,
          trlPlaceholder: _.searchPlaceholder,
          contentAfterTitle: L,
        };
        const H = {
          selected: D,
          expanded: P,
          controlledSelected: t,
          contentFilterQuery: M,
          onChangeFilterQuery: T,
          onChange: R,
          onExpand: j,
          trlNotFound: _.notFound,
          children: o,
        };
        const W = {
          disabledSubmit: v,
          showLoadingOnSubmit: C,
          onClose: p,
          footerExtra: I,
          onSubmit: A,
          trlCancel: _.cancel,
          trlSubmit: _.submit,
        };
        return (0, b.jsxs)(l(), {
          visible: h,
          onClose: p,
          host: B,
          children: [
            (0, b.jsx)(a.default, {
              ...F,
            }),
            (0, b.jsx)(c.default, {
              ...H,
            }),
            (0, b.jsx)(i.ModalError, {
              visible: !!y,
              children: y,
            }),
            (0, b.jsx)(s.default, {
              ...W,
            }),
          ],
        });
      };
    },
    243052: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => L,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(521611);
      var r = o(860910);
      var s = o.n(r);
      var a = o(115085);
      var c = o.n(a);
      var d = o(984885);
      var b = o.n(d);
      var u = o(174555);
      var h = o.n(u);
      var p = o(845807);
      var k = o.n(p);
      var g = o(456486);
      var m = o.n(g);
      var _ = o(607981);
      var f = o.n(_);
      var v = o(549155);
      var C = o(441940);
      var w = o.n(C);
      var x = o(323085);
      var y = o.n(x);
      var S = o(683454);
      var T = o.n(S);
      const E = function (e) {
        const t = i()(e.el);
        const o = e.search === undefined || !!e.search;
        const n = e.searchTreeSelector || null;
        const r = e.autoHide === undefined || !!e.autoHide;
        const a = !!e.showResultList;
        let d = false;
        t.append(
          T().render(
            i().extend(e.trl, {
              title: e.title,
            }),
            {
              search: o ? y() : null,
            },
          ),
        );
        const u = i()(".Bloko-TreeSelectorPopup", t);
        const p = i()(".Bloko-TreeSelectorPopup-SearchTreeSelector", t);
        const g = i()(".Bloko-TreeSelectorPopup-Result", t);
        const _ = i()(".Bloko-TreeSelectorPopup-ResultContainer", t);
        const C = i()(".Bloko-TreeSelectorPopup-ResultContainerXS", t);
        const x = i()(".Bloko-TreeSelectorPopup-Submit", t);
        i()(".Bloko-TreeSelectorPopup-Cancel", t).on("click", function () {
          S.hide();
        });
        const S = k().make(s(), t.get(0));
        const E = k().make(b(), u.get(0), e.treeSelector);
        const L = n
          ? k().make(b(), p.get(0), {
              ...e.treeSelector,
              ...n,
            })
          : null;
        let I = E;
        let B = L;
        const M = (function () {
          if (!a) {
            return null;
          }
          const t = k().make(w(), g.get(0), {
            items: h().getUniqueItems(I.getSelected()),
            treeSelectorType: e.treeSelector.type,
            onChange: (e) => {
              V(e.map((e) => e.id));
            },
          });
          q();
          i()(window).on("resize", l.ZP.debounce(q, 150));
          return t;
        })();
        let N = false;
        const P = new (f())(x);
        const O = m().extend({
          treeSelector: E,
          searchTreeSelector: L,
          modal: S,
          loadingSetter: P,
          setErrorMessage: function (e) {
            F.setMessage(e);
          },
          showError: function () {
            F.show();
          },
          hideError: function () {
            F.hide();
          },
          disableSubmit: function () {
            x.prop("disabled", true);
          },
          enableSubmit: function () {
            x.prop("disabled", false);
          },
          submitPopup: function (e) {
            if (e) {
              O._trigger("Bloko-TreeSelectorPopup-Changed", $);
            }
            d = true;
            S.hide();
          },
          setHintElement: function (e) {
            i()(".Bloko-TreeSelectorPopup-Hint", t).empty().append(e);
          },
          setSelected: V,
          change: function (e) {
            I.change(e);
          },
          toggleDisabled: function (e) {
            var t;
            I.toggleDisabled(e);
            if ((t = B) !== null && t !== undefined) {
              t.toggleDisabled(e);
            }
          },
        });
        const D = i()(".Bloko-TreeSelector-Element", u);
        const Z = i()(".Bloko-TreeSelector-Element", p);
        const A = i()(".Bloko-TreeSelectorPopup-NotFoundHint", t);
        const R = i()(".Bloko-TreeSelector-Error", t);
        let j;
        let $ = [];
        const F = k().make(c(), R.get(0), {
          message: e.trl && e.trl.errorMessage ? e.trl.errorMessage : "",
        });
        function H(e) {
          var t;
          $ = $.concat(e);
          j = h().getUniqueItems(I.getSelected());
          if ((t = B) !== null && t !== undefined) {
            t.setSelected(j.map((e) => e.id));
          }
          W(j);
          O._trigger("Bloko-TreeSelectorPopup-SelectedChanged", e);
        }
        function W(e) {
          if (M) {
            M.setValue(e);
            M.toggle(!N && e.length > 0);
          }
        }
        function q() {
          if ((0, v.getBreakpoint)() !== v.Breakpoint.XS) {
            _.append(g);
          } else {
            C.append(g);
          }
        }
        function V(e) {
          var t;
          if (!(I.setSelected(e), e != null && e.length)) {
            if ((t = B) !== null && t !== undefined) {
              t.setSelected([]);
            }
            W([]);
          }
        }
        if (o) {
          i()(".Bloko-TreeSelectorPopup-Search", t).on(
            "input change",
            l.ZP.throttle((e) => {
              var t;
              if (
                (function (e) {
                  if (!n) {
                    return false;
                  }
                  const t = e == null ? undefined : e.trim();
                  return (t && I !== L) || (!t && I === L);
                })(e.target.value)
              ) {
                (function () {
                  I.off("Bloko-TreeSelector-Changed", H);
                  const e = I;
                  I = B;
                  B = e;
                  I.on("Bloko-TreeSelector-Changed", H);
                  u.toggleClass("g-hidden");
                  p.toggleClass("g-hidden");
                })();
              }
              I.filterByContent(e.target.value);
              A.toggleClass(
                "g-hidden",
                !!(I === L ? Z : D).not(".g-hidden").length,
              );
              N =
                (t = e.target.value) === null || t === undefined
                  ? undefined
                  : t.trim();
              if (M != null) {
                M.toggle(!N && I.getSelected().length > 0);
              }
            }, 150),
          );
        }
        S.on("showed", function () {
          d = false;
          $ = [];
          j = h().getUniqueItems(I.getSelected());
        });
        S.on("hid", function () {
          if (!d) {
            j = h().getSelectedItemsWithoutSelectedParent(j);
            I.setSelected(j.map((e) => e.id));
          }
        });
        I.on("Bloko-TreeSelector-Changed", H);
        x.on("click", function () {
          if (r) {
            d = true;
            S.hide();
          }
          O._trigger("Bloko-TreeSelectorPopup-Changed", $);
        });
        return O;
      };
      const L = k().build({
        create: (e, t) =>
          new E({
            el: e,
            treeSelector: t.treeSelector,
            autoHide: t.autoHide,
            search: t.search,
            searchTreeSelector: t.searchTreeSelector,
            showResultList: t.showResultList,
            trl: t.trl,
            title: t.title,
          }),
        componentName: "bloko/blocks/treeSelectorPopup",
      });
    },
    580376: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(845807);
      var i = o.n(n);
      var l = o(285136);
      var r = o.n(l);
      var s = o(296641);
      const a = i().build({
        create: function (e, t) {
          const o = t.onChange;
          const n = document.createElement("div");
          let i = null;
          function l(l) {
            const a =
              t.treeSelectorType === "checkbox"
                ? s.default.getSelectedItemsLeavesOnly(l)
                : l;
            var c;
            c = a;
            n.innerHTML = r().render({
              hidden: !c.length,
              elements: c,
            });
            e.innerHTML = "";
            i = n.firstChild;
            i.addEventListener("click", (e) => {
              o(c.filter((t) => t.id !== e.target.value));
            });
            e.append(i);
          }
          l(t.items || []);
          return {
            setValue: l,
            toggle: function (e) {
              var t;
              if ((t = i) !== null && t !== undefined) {
                t.classList.toggle("g-hidden", !e);
              }
            },
          };
        },
        componentName: "blocks/treeSelectorPopup/treeSelectorPopupResultList",
      });
    },
    93584: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      const r = {
        "bloko-v-spacing-container": "bloko-v-spacing-container",
        "bloko-v-spacing-container_base-0": "bloko-v-spacing-container_base-0",
        "bloko-v-spacing-container_base-1": "bloko-v-spacing-container_base-1",
        "bloko-v-spacing-container_base-2": "bloko-v-spacing-container_base-2",
        "bloko-v-spacing-container_base-3": "bloko-v-spacing-container_base-3",
        "bloko-v-spacing-container_base-4": "bloko-v-spacing-container_base-4",
        "bloko-v-spacing-container_base-5": "bloko-v-spacing-container_base-5",
        "bloko-v-spacing-container_base-6": "bloko-v-spacing-container_base-6",
        "bloko-v-spacing-container_base-7": "bloko-v-spacing-container_base-7",
        "bloko-v-spacing-container_base-8": "bloko-v-spacing-container_base-8",
        "bloko-v-spacing-container_base-9": "bloko-v-spacing-container_base-9",
        "bloko-v-spacing-container_base-10":
          "bloko-v-spacing-container_base-10",
        "bloko-v-spacing-container_base-11":
          "bloko-v-spacing-container_base-11",
        "bloko-v-spacing-container_base-12":
          "bloko-v-spacing-container_base-12",
        "bloko-v-spacing-container_base-13":
          "bloko-v-spacing-container_base-13",
        "bloko-v-spacing-container_base-14":
          "bloko-v-spacing-container_base-14",
        "bloko-v-spacing-container_xs-0": "bloko-v-spacing-container_xs-0",
        "bloko-v-spacing-container_xs-1": "bloko-v-spacing-container_xs-1",
        "bloko-v-spacing-container_xs-2": "bloko-v-spacing-container_xs-2",
        "bloko-v-spacing-container_xs-3": "bloko-v-spacing-container_xs-3",
        "bloko-v-spacing-container_xs-4": "bloko-v-spacing-container_xs-4",
        "bloko-v-spacing-container_xs-5": "bloko-v-spacing-container_xs-5",
        "bloko-v-spacing-container_xs-6": "bloko-v-spacing-container_xs-6",
        "bloko-v-spacing-container_xs-7": "bloko-v-spacing-container_xs-7",
        "bloko-v-spacing-container_xs-8": "bloko-v-spacing-container_xs-8",
        "bloko-v-spacing-container_xs-9": "bloko-v-spacing-container_xs-9",
        "bloko-v-spacing-container_xs-10": "bloko-v-spacing-container_xs-10",
        "bloko-v-spacing-container_xs-11": "bloko-v-spacing-container_xs-11",
        "bloko-v-spacing-container_xs-12": "bloko-v-spacing-container_xs-12",
        "bloko-v-spacing-container_xs-13": "bloko-v-spacing-container_xs-13",
        "bloko-v-spacing-container_xs-14": "bloko-v-spacing-container_xs-14",
      };
      var s = o(343856);
      const a = (0, n.forwardRef)((e, t) => {
        let { base: o, xs: n, children: i } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: l()(
            r["bloko-v-spacing-container"],
            r[`bloko-v-spacing-container_base-${o}`],
            {
              [r[`bloko-v-spacing-container_xs-${n}`]]: n !== undefined,
            },
          ),
          children: i,
        });
      });
    },
    242696: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        spacingMultipliers: () => a,
        default: () => c,
      });
      var n = o(394280);
      var i = o(882177);
      var l = o.n(i);
      const r = {
        "bloko-v-spacing": "bloko-v-spacing",
        "bloko-highlight-indents": "bloko-highlight-indents",
        "bloko-v-spacing_base-0": "bloko-v-spacing_base-0",
        "bloko-v-spacing_base-1": "bloko-v-spacing_base-1",
        "bloko-v-spacing_base-2": "bloko-v-spacing_base-2",
        "bloko-v-spacing_base-3": "bloko-v-spacing_base-3",
        "bloko-v-spacing_base-4": "bloko-v-spacing_base-4",
        "bloko-v-spacing_base-5": "bloko-v-spacing_base-5",
        "bloko-v-spacing_base-6": "bloko-v-spacing_base-6",
        "bloko-v-spacing_base-7": "bloko-v-spacing_base-7",
        "bloko-v-spacing_base-8": "bloko-v-spacing_base-8",
        "bloko-v-spacing_base-9": "bloko-v-spacing_base-9",
        "bloko-v-spacing_base-10": "bloko-v-spacing_base-10",
        "bloko-v-spacing_base-11": "bloko-v-spacing_base-11",
        "bloko-v-spacing_base-12": "bloko-v-spacing_base-12",
        "bloko-v-spacing_base-13": "bloko-v-spacing_base-13",
        "bloko-v-spacing_base-14": "bloko-v-spacing_base-14",
        "bloko-v-spacing_xs-0": "bloko-v-spacing_xs-0",
        "bloko-v-spacing_xs-1": "bloko-v-spacing_xs-1",
        "bloko-v-spacing_xs-2": "bloko-v-spacing_xs-2",
        "bloko-v-spacing_xs-3": "bloko-v-spacing_xs-3",
        "bloko-v-spacing_xs-4": "bloko-v-spacing_xs-4",
        "bloko-v-spacing_xs-5": "bloko-v-spacing_xs-5",
        "bloko-v-spacing_xs-6": "bloko-v-spacing_xs-6",
        "bloko-v-spacing_xs-7": "bloko-v-spacing_xs-7",
        "bloko-v-spacing_xs-8": "bloko-v-spacing_xs-8",
        "bloko-v-spacing_xs-9": "bloko-v-spacing_xs-9",
        "bloko-v-spacing_xs-10": "bloko-v-spacing_xs-10",
        "bloko-v-spacing_xs-11": "bloko-v-spacing_xs-11",
        "bloko-v-spacing_xs-12": "bloko-v-spacing_xs-12",
        "bloko-v-spacing_xs-13": "bloko-v-spacing_xs-13",
        "bloko-v-spacing_xs-14": "bloko-v-spacing_xs-14",
      };
      var s = o(343856);
      const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      const c = (0, n.forwardRef)((e, t) => {
        let { base: o, xs: n, source: i } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: l()(r["bloko-v-spacing"], r[`bloko-v-spacing_base-${o}`], {
            [r[`bloko-v-spacing_xs-${n}`]]: n !== undefined,
          }),
          source: i,
        });
      });
    },
    478091: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = {
        set(e, t, o) {
          if (e === undefined) {
            return;
          }
          let n = `${e}=${t || ""};path=/`;
          if (o !== undefined) {
            const e = new Date();
            e.setTime(e.getTime() + o * 3600000);
            n += `;expires=${e.toUTCString()}`;
          }
          document.cookie = n;
        },
        get(e) {
          let t = null;
          this.getAll()
            .reverse()
            .some((o) => o.name === e && ((t = o.value), true));
          return t;
        },
        getAll: () =>
          (document.cookie ? document.cookie.split("; ") : []).map((e) => {
            const t = e.split("=");
            let o;
            try {
              o = decodeURIComponent(t[1]);
            } catch (e) {
              o = t[1];
            }
            return {
              name: t[0],
              value: o,
            };
          }),
        remove(e) {
          this.set(e, "", -1);
        },
      };
    },
    725723: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = () => {
        const e = {};
        return {
          setTimeout: (t, o) => {
            const n = window.setTimeout(l, o);
            const i = Date.now() + o;
            e[n] = {
              cb: l,
              delay: o,
              scheduledTime: i,
            };
            return n;
            function l() {
              delete e[n];
              t();
            }
          },
          clearTimeout: (t) => {
            window.clearTimeout(t);
            delete e[t];
          },
          pause: () => {
            Object.entries(e).forEach((e) => {
              let [t, o] = e;
              window.clearTimeout(Number(t));
              o.delay = o.scheduledTime - Date.now();
            });
          },
          resume: () => {
            Object.values(e).forEach((e) => {
              window.setTimeout(e.cb, e.delay);
              e.scheduledTime = Date.now() + e.delay;
            });
          },
        };
      };
    },
    320356: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        getActiveTabMarginLeft: () => l,
        getAdaptiveSettings: () => r,
        getClientX: () => c,
        isScrollExceedsThreshold: () => s,
      });
      const n = 34;
      const i = 10;
      function l(e) {
        let {
          tabsWrapperElement: t,
          tabsItemsElement: o,
          activeTabElement: n,
        } = e;
        const i = t.getBoundingClientRect().width;
        const l = n.getBoundingClientRect().left;
        return (
          (i - n.getBoundingClientRect().width) / 2 -
          (l - o.getBoundingClientRect().left)
        );
      }
      function r(e) {
        let {
          tabsWrapperElement: t,
          tabsItemsElement: o,
          tabsMarginLeft: i,
        } = e;
        const l = t.getBoundingClientRect().width;
        const r = o.getBoundingClientRect().width;
        const s = n * 1.5 + r;
        const a = s > l;
        if (i > 0) {
          i = 0;
        }
        if (i + s < l) {
          i = l - s;
        }
        let c = i < 0;
        let d = i + s > l;
        if (!a) {
          i = 0;
          c = false;
          d = false;
        }
        return {
          isAdaptiveMode: a,
          tabsMarginLeft: i,
          showLeftGlare: c,
          showRightGlare: d,
        };
      }
      function s(e, t) {
        const o = c(t);
        return Math.abs(e - o) > i;
      }
      const a = (e) => Boolean(e.touches);
      function c(e) {
        if (a(e)) {
          return e.touches[0].clientX;
        } else {
          return e.clientX;
        }
      }
    },
    991102: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = (function () {
        if (
          typeof window == "undefined" ||
          (window.bloko && window.bloko.isTest)
        ) {
          return false;
        }
        const e = document.createElement("fakeElement");
        const t = {
          WebkitAnimation: "webkitAnimationEnd",
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MsAnimation: "msAnimationEnd",
          MozAnimation: "animationend",
        };
        for (const o of Object.keys(t)) {
          if (e.style[o] !== undefined) {
            return t[o];
          }
        }
        return false;
      })();
    },
    616261: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      const n = " ʼ’'`-";
      const i = "(?:[{prefix}]|^)[^{prefix}]*".replace(/\{prefix\}/g, n);
      function l() {
        return (
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ""
        ).replace(new RegExp(i, "g"), (e) => {
          const t = new RegExp("[{prefix}]".replace("{prefix}", n), "g");
          const o = e.search(t) === -1 ? 1 : 2;
          return e.slice(0, o).toUpperCase() + e.slice(o).toLowerCase();
        });
      }
    },
    772847: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      var n = o(521611);
      var i = o(456486);
      var l = o.n(i);
      var r = o(510829);
      var s = o.n(r);
      const a = function (e) {
        const t = l().extend(this);
        const o = e || s();
        const i = new Set();
        function r(e) {
          const o = (function (e, t) {
            const o = {
              added: [],
              removed: [],
            };
            e.forEach((e) => {
              if (!t.has(e)) {
                o.removed.push(e);
              }
            });
            t.forEach((t) => {
              if (!e.has(t)) {
                o.added.push(t);
              }
            });
            return o;
          })(e, i);
          if (o.added.length || o.removed.length) {
            t._trigger("change", o);
          }
        }
        return n.ZP.extend(t, {
          get: function () {
            return [...i.values()];
          },
          set: function (e) {
            const t = new Set(i.values());
            o.set(i, e);
            r(t);
          },
          add: function (e) {
            const t = new Set(i.values());
            o.add(i, e);
            r(t);
          },
          remove: function (e) {
            const t = new Set(i.values());
            o.remove(i, e);
            r(t);
          },
          contains: function (e) {
            return i.has(e);
          },
        });
      };
    },
    402270: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = function () {
        return function (e, t, o) {
          if (o) {
            return !e.has(t) && (e.size && e.clear(), e.add(t), true);
          } else {
            return !!e.has(t) && (e.delete(t), true);
          }
        };
      };
    },
    615468: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(243781);
      var i = o.n(n);
      const l = function (e, t, o) {
        function n(o, n) {
          let i = false;
          const l = e.getChildren(n).every((n) => {
            const l = t(n.id, e);
            i = i || l;
            return o.has(n.id) || !l;
          });
          if (i) {
            return l;
          } else {
            return o.has(n);
          }
        }
        return function (l, r, s) {
          if (i()(l, r, s) && !o.withExcluded) {
            e.walkParents(r, (o) => {
              if (t(o.id, e)) {
                i()(l, o.id, n(l, o.id));
              }
            });
          }
          (function (o, n, l) {
            e.walkChildren(n, (n) => {
              if (t(n.id, e)) {
                i()(o, n.id, l);
              }
            });
          })(l, r, s);
          (function (o, l) {
            if (e.hasChildren(l)) {
              e.getChildrenIds(l)
                .reduce((o, n) => {
                  const i = e
                    .getParentIdsDuplicates(n)
                    .filter((n) => n !== l && !o.includes(n) && t(n, e));
                  return o.concat(i);
                }, [])
                .forEach((e) => i()(o, e, n(o, e)));
            }
          })(l, r);
        };
      };
    },
    159400: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = function (e, t) {
        function o(o, i, l) {
          if (o.length) {
            l.forEach((r) => {
              if (t(r, e)) {
                if (i.has(r)) {
                  i.delete(r);
                  e.walkChildren(r, (e) => {
                    let { id: t } = e;
                    return n({
                      excluded: i,
                      ids: l,
                      items: o,
                      childId: t,
                      isAdding: false,
                    });
                  });
                } else {
                  const { isParentExcluded: t, isParentSelected: s } =
                    (function (e, t, o, n = []) {
                      const i = e.getParentId(o);
                      return {
                        isParentSelected: i
                          ? t.includes(i)
                          : e.getTopLevel().includes(o),
                        isParentExcluded: Boolean(i && n.includes(i)),
                      };
                    })(e, o, r, [...i]);
                  const a = s || t;
                  if (a) {
                    i.add(r);
                  }
                  e.walkChildren(r, (e) => {
                    let { id: t } = e;
                    return n({
                      excluded: i,
                      ids: l,
                      items: o,
                      childId: t,
                      isAdding: a,
                    });
                  });
                }
              }
            });
          } else {
            i.clear();
          }
        }
        function n(e) {
          let { excluded: t, ids: n, items: i, childId: l, isAdding: r } = e;
          return !n.includes(l) && (r ? !t.has(l) : t.has(l)) && o(i, t, [l]);
        }
        return o;
      };
    },
    491583: function (e, t, o) {
      "use strict";

      function n(e, t, o) {
        if (o && !e.has(t)) {
          e.add(t);
          return true;
        } else {
          return !o && !!e.has(t) && (e.delete(t), true);
        }
      }
      o.r(t);
      o.d(t, {
        default: () => n,
      });
    },
    251770: function (e, t, o) {
      "use strict";

      function n(e, t) {
        t.forEach((t) => {
          e.add(t);
        });
      }
      o.r(t);
      o.d(t, {
        default: () => i,
      });
      const i = {
        add: n,
        remove: function (e, t) {
          t.forEach((t) => {
            e.delete(t);
          });
        },
        set(e, t) {
          e.clear();
          n(e, t);
        },
      };
    },
    885370: function (e, t, o) {
      "use strict";

      var n;
      o.r(t);
      o.d(t, {
        default: () => i,
      });
      (function (e) {
        e.NoTransition = "g-notransition";
        e.AnimFade = "g-anim-fade";
        e.AnimFadeIn = "g-anim-fade_in";
        e.Hidden = "g-hidden";
        e.ScrollMeasure = "scroll-measure";
      })((n ||= {}));
      const i = n;
    },
    631: function (e, t, o) {
      "use strict";

      let n;
      o.r(t);
      o.d(t, {
        KeyCode: () => n,
        default: () => l,
      });
      (function (e) {
        e[(e.ArrowLeft = 37)] = "ArrowLeft";
        e[(e.ArrowUp = 38)] = "ArrowUp";
        e[(e.ArrowRight = 39)] = "ArrowRight";
        e[(e.ArrowDown = 40)] = "ArrowDown";
        e[(e.Comma = 44)] = "Comma";
        e[(e.Period = 46)] = "Period";
        e[(e.Enter = 13)] = "Enter";
        e[(e.ESC = 27)] = "ESC";
        e[(e.Tab = 9)] = "Tab";
        e[(e.Shift = 16)] = "Shift";
        e[(e.Space = 32)] = "Space";
        e[(e.SpecialChar = 32)] = "SpecialChar";
        e[(e.Delete = 46)] = "Delete";
        e[(e.BackSpace = 8)] = "BackSpace";
      })((n ||= {}));
      const i = {
        188: n.Comma,
        190: n.Period,
      };
      const l = {
        getChar: (e) =>
          e.which
            ? e.which < n.SpecialChar
              ? null
              : String.fromCharCode(i[e.which] || e.which)
            : null,
      };
    },
    154534: function (e, t, o) {
      "use strict";

      var n;
      o.r(t);
      o.d(t, {
        default: () => i,
      });
      (function (e) {
        e.AboveContent = "above-content";
        e.Floating = "floating";
        e.Overlay = "overlay";
        e.OverlayContent = "overlay-content";
        e.AboveOverlayContent = "above-overlay-content";
        e.Topmost = "topmost";
      })((n ||= {}));
      const i = n;
    },
    944675: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = {
        BUTTON_LEFT: 0,
        BUTTON_RIGHT: 2,
      };
    },
    289536: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(428612);
      var r = o.n(l);
      const s = {
        build: (e) =>
          function (t, o, n) {
            if (n !== true) {
              r().log(
                "out error",
                new Error(
                  `[${e.componentName}] Direct call is prohibited (use Components.make)`,
                ),
              );
            }
            if (!t || !("nodeName" in t)) {
              throw new TypeError(
                `[${e.componentName}] First argument is not of type Element`,
              );
            }
            const l = i().extend(true, {}, e.defaults || {}, o);
            return e.create.call(null, t, l);
          },
        init(e, t) {
          if (!e || !("nodeName" in e)) {
            throw new TypeError("First argument is not of type Element");
          }
          if (!t) {
            throw new TypeError(
              "Import Function as a second argument is required",
            );
          }
          const o = this;
          const n = [];
          i()("script[data-name]", e).each((e, l) => {
            const s = i()(l);
            const a = s.data("name");
            let c;
            let d = s.attr("data-params");
            c = s.data("for") === "prev" ? s.prev().get(0) : l.parentNode;
            let b = {};
            if (d && d.length) {
              d = d.trim().replace(/(\n|\r)/g, "");
              try {
                b = JSON.parse(d);
              } catch (e) {
                r().log(
                  "out error",
                  new Error(`Syntax Error in JSON params in component ${a}`),
                  {
                    paramsString: d.replace(/\s{2,}/g, " "),
                  },
                );
                return;
              }
            }
            const u = i().Deferred();
            t(a).then(
              (e) => {
                let t;
                try {
                  t = o.make(e, c, b, a);
                } catch (e) {
                  r().log("out error", e, {
                    explain: `Error while creating ${a}`,
                  });
                  u.reject();
                }
                u.resolve(t);
              },
              (e) => {
                r().log("out error", e, {
                  explain: `Error while loading ${a}`,
                });
                u.reject();
              },
            );
            n.push(u.promise());
          });
          return i().when(...n);
        },
        make: (e, t, o) => e(t, o, true),
      };
    },
    619761: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = o(666040).c;
    },
    66916: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = (e, t) => {
        let o;
        const n = function () {
          for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) {
            i[l] = arguments[l];
          }
          if (o) {
            clearTimeout(o);
          }
          o = setTimeout(() => {
            o = null;
            e.apply(this, i);
          }, t);
        };
        n.cancel = () => {
          if (o) {
            clearTimeout(o);
          }
          o = null;
        };
        return n;
      };
    },
    90507: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        Bound: () => l,
        default: () => a,
      });
      var n = o(387501);
      var i = o.n(n);
      let l;
      (function (e) {
        e.Top = "top";
        e.Bottom = "bottom";
        e.Left = "left";
        e.Right = "right";
      })((l ||= {}));
      const r = (e) => {
        let {
          entry: t,
          rect: o,
          trackingBounds: n = [l.Bottom],
          entryPercent: i = 0,
        } = e;
        const { windowWidth: r, windowHeight: s } = ((e) => {
          var t;
          var o;
          return {
            windowWidth:
              (e == null || (t = e.rootBounds) === null || t === undefined
                ? undefined
                : t.width) ||
              window.innerWidth ||
              document.documentElement.clientWidth,
            windowHeight:
              (e == null || (o = e.rootBounds) === null || o === undefined
                ? undefined
                : o.height) ||
              window.innerHeight ||
              document.documentElement.clientHeight,
          };
        })(t);
        const a = {
          [l.Top]: () => o.top <= s && o.top >= 0,
          [l.Bottom]: () => o.top + o.height <= s && o.top + o.height > 0,
          [l.Left]: () => o.left <= r && o.left > 0,
          [l.Right]: () => o.left + o.width <= r && o.left + o.width > 0,
        };
        let c = true;
        if (i) {
          return ((e, t, o) =>
            e.top + e.height / (1 / t) <= o && e.top + e.height > 0)(o, i, s);
        } else {
          n.some((e) => {
            const t = a[e]();
            c = c && t;
            return !t;
          });
          return c;
        }
      };
      const s = (e, t) => {
        let o = null;
        return (n, l) => {
          if (n) {
            if (!t.onShow) {
              return o;
            }
            if (t.elementLockTime) {
              o = setTimeout(() => {
                o = null;
                var n;
                if (
                  r({
                    entry: l,
                    rect: i().getBoundingClientRect(e),
                    ...t,
                  })
                ) {
                  if ((n = t.onShow) !== null && n !== undefined) {
                    n.call(t);
                  }
                }
              }, t.elementLockTime);
            } else {
              t.onShow();
            }
          } else if (o) {
            clearTimeout(o);
            o = null;
          } else {
            var s;
            if ((s = t.onHide) !== null && s !== undefined) {
              s.call(t);
            }
          }
          return o;
        };
      };
      const a = (e, t) =>
        "IntersectionObserver" in window
          ? ((e, t) => {
              const o = s(e, t);
              let n;
              let i;
              const l = (e) => {
                const l = e[0];
                const s = r({
                  entry: l,
                  rect: l.boundingClientRect,
                  ...t,
                });
                if (s !== n) {
                  i = o(s, l);
                  n = s;
                }
              };
              let a;
              const c = [0, 1];
              if (t.entryPercent) {
                c.push(t.entryPercent);
              }
              try {
                a = new IntersectionObserver(l, {
                  threshold: c,
                  root: t.rootElement,
                  rootMargin: t.rootMargin,
                });
              } catch (e) {
                a = new IntersectionObserver(l, {
                  threshold: c,
                });
              }
              const d = () => {
                n = false;
                a.observe(e);
              };
              d();
              return {
                stopSpying: () => {
                  if (i) {
                    clearTimeout(i);
                  }
                  a.disconnect();
                },
                startSpying: d,
              };
            })(e, t)
          : ((e, t) => {
              const o = {
                trackingInterval: 500,
                ...t,
              };
              const n = s(e, o);
              let l;
              let a;
              let c;
              const d = () => {
                const t = r({
                  rect: i().getBoundingClientRect(e),
                  ...o,
                });
                if (t !== l) {
                  c = n(t);
                  l = t;
                }
              };
              const b = () => {
                l = false;
                a = setInterval(d, o.trackingInterval);
              };
              b();
              return {
                stopSpying: () => {
                  if (c) {
                    clearTimeout(c);
                  }
                  clearInterval(a);
                },
                startSpying: b,
              };
            })(e, t);
    },
    470288: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      const n = /[|![\]^$(){}+=?.*\\]/g;
      const i = (e) => e.replace(n, "\\$&");
    },
    364907: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = (e, t) =>
        new CustomEvent(e, {
          bubbles: true,
          cancelable: true,
          detail: t,
        });
    },
    628147: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(521611);
      const r = {
        _trigger() {
          for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) {
            t[o] = arguments[o];
          }
          i().Events.trigger.call(this, ...t);
        },
        on: i().Events.on,
        off: i().Events.off,
        once: i().Events.once,
      };
      const s = {
        extend: (e) => l.ZP.extend(e, r),
      };
    },
    504414: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(68789);
      var i = o.n(n);
      const l = (e, t) => {
        const o = new RegExp(
          Object.keys(t)
            .map((e) => i()(e))
            .join("|"),
          "g",
        );
        return e.replace(o, (e) => `${t[e]}`);
      };
    },
    567891: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => g,
      });
      var n = o(130845);
      var i = o(68789);
      var l = o.n(i);
      const r = /[её]/g;
      const s = /\s+/g;
      function a(e) {
        return e.replace(s, " ").trim();
      }
      function c(e) {
        return l()(e).replace(r, "[её]");
      }
      const d =
        "qwertyuiopasdfghjkl;'zxcvbnm,QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>`~[].".split(
          "",
        );
      const b =
        "йцукенгшщзфывапролджэячсмитьбЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮёЁхъю".split(
          "",
        );
      function u(e, t) {
        return e.reduce((e, o, n) => {
          e[o] = t[n];
          return e;
        }, {});
      }
      const h = {
        russian: u(d, b),
        english: u(b, d),
      };
      function p(e, t) {
        return e
          .split("")
          .map((e) => t[e] || e)
          .join("");
      }
      const k = (0, n.Z)((e) => {
        const t = a(e);
        if (t.length) {
          const e = ((o = t),
          [
            o.toLowerCase(),
            p(o, h.russian).toLowerCase(),
            p(o, h.english).toLowerCase(),
          ]).map(c);
          const n = new RegExp(`(^|[^a-zа-яё])(${e.join("|")})`);
          return (e) => n.test(a(e).toLowerCase());
        }
        var o;
        return () => true;
      });
      const g = {
        match: function (e, t) {
          return k(e)(t);
        },
      };
    },
    472261: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
      });
      const n = 6378.1;
      const i = 6356.8;
      function l(e) {
        return e * (180 / Math.PI);
      }
      function r(e) {
        return ((n - (n - i)) * Math.abs(e)) / 90;
      }
      function s(e) {
        return r(e) * Math.cos(e * (Math.PI / 180));
      }
      const a = {
        getBoundPoints: function (e, t) {
          const o = e[0];
          const n = e[1];
          const i = l(t / r(o));
          const a = l(t / s(o));
          return [
            [Math.max(o - i, -90), Math.max(n - a, -180)],
            [Math.min(o + i, 90), Math.min(n + a, 180)],
          ];
        },
      };
    },
    687490: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = (e) => {
        let { one: t, some: o, many: n, value: i } = e;
        const l = i % 10;
        const r = i % 100;
        let s;
        s =
          Math.round(i) !== i || (r >= 5 && r <= 20)
            ? n
            : l === 1
              ? t
              : l >= 2 && l <= 4
                ? o
                : n;
        return s;
      };
    },
    439777: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(428612);
      var i = o.n(n);
      var l = o(191100);
      var r = o.n(l);
      const s = function ({
        version: e = "2.1.79",
        lang: t = "ru_RU",
        apiKey: o = "9579efd9-168f-4cdd-8940-2fbd5548bc5b",
        suggestApiKey: n = "ab255225-48b2-4cc9-84e7-25979be3fee2",
        rejectOnError: l = false,
      } = {}) {
        window.blokoYmapsPromise ||= new Promise((s, a) => {
          window.blokoYmapsPromiseResolve = s;
          window.blokoYmapsPromiseReject = (e) => {
            if (l) {
              a(e);
            } else {
              i().log("error", `Ymaps error: ${e}`);
            }
          };
          const c = r()(`https://api-maps.yandex.ru/${e}/`);
          c.params = {
            onload: ["blokoYmapsPromiseResolve"],
            onerror: ["blokoYmapsPromiseReject"],
            lang: [t],
            apikey: [o],
            suggest_apikey: [n],
          };
          const d = document.createElement("script");
          d.onerror = () => {
            const e = `Ymaps loading error: ${c.href}`;
            if (l) {
              a(new Error(e));
            } else {
              i().log("error", e);
            }
          };
          d.src = c.href;
          document.head.appendChild(d);
        });
        return window.blokoYmapsPromise;
      };
    },
    77098: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        childrenInstanceOf: () => r,
        componentInvariants: () => l,
        default: () => a,
        instanceOfDOMNodeOrNull: () => s,
      });
      var n = o(394280);
      var i = o(659864);
      const l = (e) => (t, o, n) => {
        if (!(0, i.isValidElementType)(t[o]) && !e.includes(t[o])) {
          return new TypeError(
            `Invalid prop ${o} supplied to ${n}. Expected one of tags: ${e} or function`,
          );
        }
      };
      const r = (e) => (t, o, i) => {
        if (!n.Children.toArray(t[o]).every((t) => e.includes(t.type))) {
          return new TypeError(
            `Invalid prop ${o} supplied to ${i}. Allowed types ${e.map((e) => {
              let { name: t } = e;
              return t;
            })}`,
          );
        }
      };
      const s = () => (e, t, o) => {
        if (
          e[t] !== null &&
          (typeof window == "undefined" ||
            !("Node" in window) ||
            !(e[t] instanceof window.Node))
        ) {
          return new TypeError(
            `Invalid prop ${t} supplied to ${o}. Allowed types instanceof window.Node or null`,
          );
        }
      };
      const a = {
        componentInvariants: l,
        childrenInstanceOf: r,
        instanceOfDOMNodeOrNull: s,
      };
    },
    945152: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        escape: () => i,
        unescape: () => l,
      });
      const n = (e) => {
        const t = (t) => e[t];
        const o = `(?:${Object.keys(e).join("|")})`;
        const n = RegExp(o);
        const i = RegExp(o, "g");
        return function (e) {
          e = e == null ? "" : `${e}`;
          if (n.test(e)) {
            return e.replace(i, t);
          } else {
            return e;
          }
        };
      };
      const i = n({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      });
      const l = n({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#x27;": "'",
        "&#x60;": "`",
      });
    },
    314040: function () {},
    410345: function (e, t, o) {
      "use strict";

      o.r(t);
    },
    223279: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        Breakpoint: () => r.Breakpoint,
        default: () => c,
      });
      var n = o(394280);
      var i = o(10469);
      var l = o.n(i);
      var r = o(549155);
      var s = o(350647);
      var a = o.n(s);
      const c = (e) => {
        const { breakpoint: t } = l()();
        const o = t ?? (e || r.DEFAULT_BREAKPOINT);
        const [i, s] = (0, n.useState)(o);
        const c = (0, n.useCallback)(() => {
          const e = (0, r.getBreakpoint)();
          s(e);
        }, []);
        (0, n.useEffect)(c);
        a()(c);
        return i;
      };
    },
    222746: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = (e, t) => {
        const o = (0, n.useRef)(e);
        const i = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          o.current = e;
        }, [e]);
        const l = function () {
          for (var e = arguments.length, n = new Array(e), l = 0; l < e; l++) {
            n[l] = arguments[l];
          }
          if (i.current) {
            clearTimeout(i.current);
          }
          i.current = setTimeout(() => {
            var e;
            if ((e = o.current) !== null && e !== undefined) {
              e.apply(this, n);
            }
          }, t);
        };
        l.cancel = () => {
          if (i.current) {
            clearTimeout(i.current);
            i.current = null;
          }
        };
        return l;
      };
    },
    708411: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = (e) => {
        let { controlledValue: t, defaultValue: o, onChangeProp: i } = e;
        const [l, r] = (0, n.useState)(o);
        const s = (0, n.useCallback)(
          (e) => {
            if (i) {
              return i(e);
            } else {
              return r((t = e) != null && t.target ? e.target.value : e);
            }
            var t;
          },
          [i],
        );
        return {
          value: i || t ? t : l,
          onChange: s,
        };
      };
    },
    355290: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      function i(e) {
        const t = (0, n.useRef)(e);
        t.current = e;
        (0, n.useEffect)(() => {
          const e = (e) => t.current(e);
          window.addEventListener("resize", e);
          return () => {
            window.removeEventListener("resize", e);
          };
        }, []);
      }
    },
    277619: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(394280);
      const i = () => {
        const [e, t] = (0, n.useState)(true);
        (0, n.useEffect)(() => {
          t(false);
        }, []);
        return e;
      };
    },
    487074: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        T: () => d,
        TranslationLangContext: () => a,
        default: () => b,
      });
      var n = o(394280);
      var i = o(428612);
      var l = o.n(i);
      var r = o(343856);
      function s(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      const a = (0, n.createContext)("");
      const c = (e) => (e ? ` in "${e.displayName || ""}"` : "");
      class d extends n.PureComponent {
        constructor() {
          super(...arguments);
          s(this, "state", {
            failed: false,
          });
        }
        static getDerivedStateFromError() {
          return {
            failed: true,
          };
        }
        componentDidCatch(e, t) {
          let { componentStack: o } = t;
          l().log("out error", e, {
            componentStack: o,
          });
        }
        render() {
          if (this.state.failed) {
            return null;
          }
          const { Element: e, forwardRef: t, trls: o, ...n } = this.props;
          return (0, r.jsx)(e, {
            ...n,
            trls: o,
            ref: t,
          });
        }
      }
      d.displayName = "common/hooks/useTranslations/T";
      const b = (e, t, o, i) => {
        const r = (0, n.useContext)(a) || o;
        if (!t[r]) {
          const o = `The translation lang "${r}" is undefined${c(e)}`;
          l().log("out error", new Error(o), {
            trls: t,
          });
        }
        return (0, n.useMemo)(
          () =>
            ((e, t, o, n) =>
              o || !("Proxy" in window)
                ? e[t]
                : new Proxy(e[t], {
                    get(e, t) {
                      if (
                        typeof t != "string" ||
                        t === "constructor" ||
                        t === "@@toStringTag" ||
                        t === "$$typeof"
                      ) {
                        return null;
                      }
                      if (t === "undefined") {
                        const t = JSON.stringify(e);
                        const o = `The translation key is undefined${c(n)}"`;
                        l().log("out error", new Error(o), {
                          trls: t,
                          sentryFingerprint: [
                            !!n && n.displayName,
                            "translation-key",
                          ].filter(Boolean),
                        });
                      } else if (!e[t]) {
                        const o = JSON.stringify(e);
                        const i = `The translation key ${t} does not exist${c(n)}"`;
                        l().log("out error", new Error(i), {
                          trls: o,
                          sentryFingerprint: [
                            !!n && n.displayName,
                            "translation-key",
                          ].filter(Boolean),
                        });
                      }
                      return e[t];
                    },
                  }))(t, r, i, e),
          [e, i, r, t],
        );
      };
    },
    466143: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = (e, t) => e.hasOwnProperty(t);
    },
    304819: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
      });
      var n = o(665164);
      var i = o.n(n);
      const l = {
        "bloko-button": "bloko-button_loading",
        "bloko-loading": "bloko-loading_visible",
      };
      function r(e) {
        const t = i()(e);
        const o = (function () {
          for (const e in l) {
            if (t.hasClass(e)) {
              return l[e];
            }
          }
          return null;
        })();
        this.start = function () {
          if (o) {
            t.addClass(o);
          }
        };
        this.stop = function () {
          if (o) {
            t.removeClass(o);
          }
        };
      }
    },
    856768: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        getBreakpoint: () => b,
        Breakpoint: () => i,
        DEFAULT_BREAKPOINT: () => r,
        calculateCurrentBreakpoint: () => a,
      });
      const n = "bloko-media-marker";
      let i;
      var l;
      (l = i ||= {}).XS = "xs";
      l.S = "s";
      l.M = "m";
      l.L = "l";
      const r = i.XS;
      let s;
      const a = () => {
        if (!("getComputedStyle" in window)) {
          return r;
        }
        s =
          s ||
          (function () {
            const e = document.createElement("div");
            e.className = n;
            document.body.appendChild(e);
            return e;
          })();
        return (function (e) {
          if (!e) {
            return r;
          }
          const t = e.getPropertyValue("font-family").replace(/['"]/g, "");
          return (t && Object.values(i).find((e) => e === t)) || r;
        })(window.getComputedStyle(s));
      };
      let c = r;
      const d = () => {
        c = a();
      };
      if (typeof window != "undefined") {
        window.addEventListener("resize", d);
        d();
      }
      const b = () => c;
    },
    955484: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        Placement: () => r,
        PlacementDirection: () => l,
        default: () => b,
      });
      var n = o(987598);
      var i = o.n(n);
      let l;
      let r;
      (function (e) {
        e.Top = "top";
        e.Bottom = "bottom";
        e.Right = "right";
        e.Left = "left";
      })((l ||= {}));
      (function (e) {
        e.Top = "top";
        e.Right = "right";
        e.Bottom = "bottom";
        e.Left = "left";
        e.TopStart = "top-start";
        e.TopEnd = "top-end";
        e.RightStart = "right-start";
        e.RightEnd = "right-end";
        e.BottomStart = "bottom-start";
        e.BottomEnd = "bottom-end";
        e.LeftStart = "left-start";
        e.LeftEnd = "left-end";
      })((r ||= {}));
      const s = {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        right: 0,
        bottom: 0,
      };
      const a = (e) =>
        e && "get" in e && typeof e.get == "function" && e.get(0)
          ? e.get(0)
          : e;
      function c(e, t, o) {
        const n = [];
        if (e < o.left) {
          n.push(r.Left);
        }
        if (e > o.right) {
          n.push(r.Right);
        }
        if (t < o.top) {
          n.push(r.Top);
        }
        if (t > o.bottom) {
          n.push(r.Bottom);
        }
        return n;
      }
      const d = (e) => {
        if (
          e === document.body ||
          getComputedStyle(e).position === "relative" ||
          getComputedStyle(e).position === "sticky"
        ) {
          return e;
        }
        const t = e.parentElement;
        if (t === null) {
          return e;
        } else {
          return d(t);
        }
      };
      const b = {
        getElement: a,
        getBoundingClientRect(e) {
          try {
            return e.getBoundingClientRect();
          } catch (e) {
            return {
              ...s,
            };
          }
        },
        getMetrics(e) {
          const t = a(e);
          const o = {
            ...s,
          };
          if (!t) {
            return o;
          }
          const n = this.getBoundingClientRect(t);
          o.width = n.width;
          o.height = n.height;
          o.left = n.left + window.pageXOffset;
          o.top = n.top + window.pageYOffset;
          o.right = o.left + o.width;
          o.bottom = o.top + o.height;
          return o;
        },
        getRelativeMetrics(e) {
          const t = a(e);
          const o = {
            ...s,
          };
          if (!t) {
            return o;
          }
          const n = this.getBoundingClientRect(t);
          if (window.SVGElement && t instanceof window.SVGElement) {
            const e = this.getBoundingClientRect(d(t));
            o.top = n.top - e.top;
            o.left = n.left - e.left;
          } else if ("offsetTop" in t && "offsetLeft" in t) {
            o.top = t.offsetTop;
            o.left = t.offsetLeft;
          }
          o.width = n.width;
          o.height = n.height;
          o.right = o.left + o.width;
          o.bottom = o.top + o.height;
          return o;
        },
        getDocumentMetrics: () => ({
          width: document.body.scrollWidth,
          height: document.body.scrollHeight,
          left: 0,
          top: 0,
          right: document.body.scrollWidth,
          bottom: document.body.scrollHeight,
        }),
        getViewportMetrics: () => ({
          width: window.innerWidth,
          height: window.innerHeight,
          left: window.pageXOffset,
          top: window.pageYOffset,
          right: window.pageXOffset + window.innerWidth,
          bottom: window.pageYOffset + window.innerHeight,
        }),
        isPointInRectangle: (e, t, o) => c(e, t, o).length === 0,
        isRectangleInRectangle(e, t) {
          return (
            this.isPointInRectangle(e.left, e.top, t) &&
            this.isPointInRectangle(e.right, e.bottom, t)
          );
        },
        checkIfRectangleInRectangle: (e, t) => [
          ...new Set([...c(e.left, e.top, t), ...c(e.right, e.bottom, t)]),
        ],
        getScrollbarWidth() {
          const e = document.createElement("div");
          e.classList.add(i().ScrollMeasure);
          document.body.appendChild(e);
          const t = e.offsetWidth - e.clientWidth;
          document.body.removeChild(e);
          return t;
        },
        getWindowScrollHeight: () =>
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight,
          ),
        getOuterWidth(e) {
          const t = getComputedStyle(e);
          let o = e.offsetWidth;
          o += parseInt(t.marginLeft, 10) + parseInt(t.marginRight, 10);
          return o;
        },
        isVisible: (e) =>
          !!e.offsetWidth || !!e.offsetHeight || !!e.getClientRects().length,
      };
    },
    772802: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        NoscrollCssClasses: () => s,
        default: () => d,
      });
      var n = o(387501);
      var i = o.n(n);
      var l = o(182093);
      var r = o.n(l);
      let s;
      let a;
      (function (e) {
        e.General = "bloko-modal-no-scroll";
        e.Ios = "bloko-modal-no-scroll_ios";
      })((s ||= {}));
      let c = 0;
      const d = {
        enableScroll: () => {
          c -= 1;
          if (!(c > 0)) {
            document.body.style.paddingRight = "";
            document.body.classList.remove(s.General);
            document.body.classList.remove(s.Ios);
            document.documentElement.classList.remove(s.General);
            document.documentElement.classList.remove(s.Ios);
            if (a !== undefined) {
              window.scrollTo(0, a);
              a = undefined;
            }
          }
        },
        disableScroll: () => {
          c += 1;
          if (c > 1) {
            return;
          }
          a = window.pageYOffset;
          const e = parseInt(document.body.style.paddingRight || "0", 10);
          document.body.style.paddingRight = `${e + i().getScrollbarWidth()}px`;
          document.body.classList.add(s.General);
          if (r().ios()) {
            document.body.classList.add(s.Ios);
            document.documentElement.classList.add(s.General);
            document.documentElement.classList.add(s.Ios);
          }
        },
      };
    },
    422874: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      const n = ["-", "−"];
      const i = {
        groupSeparator: "\u2009",
        decimalMark: ",",
        groupSize: 3,
        decimalLength: 2,
        allowNegative: true,
      };
      const l = {
        format: function (e, t) {
          const o = {
            ...i,
            ...t,
          };
          const l = new RegExp(`\\B(?=(\\d{${o.groupSize}})+(?!\\d))`, "g");
          const r = (function (e, t) {
            const o = e.trim();
            const i = t.allowNegative && n.includes(o[0]) ? "-" : "";
            const l = o
              .replace(/[^\d.,]+/g, "")
              .replace(/[.,]/, "#")
              .replace(/[.,]/g, "");
            const r = `${i}${l}`.split("#");
            if (t.decimalLength === null) {
              return r.join(".");
            }
            if (t.decimalLength === 0 || r.length === 1) {
              return r[0];
            }
            return `${r[0]}.${r[1].slice(0, t.decimalLength)}`;
          })(e, o).split(".");
          r[0] = r[0].replace(l, o.groupSeparator).replace(/^-/, "−");
          if (r[0] === "" && r.length === 1) {
            return "";
          } else if (r[1] === "") {
            return r[0];
          } else {
            if (r[0] === "") {
              r[0] = "0";
            }
            return r.join(o.decimalMark);
          }
        },
      };
    },
    468002: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        NumberValidatorError: () => i,
        default: () => l,
      });
      const n = {
        groupSeparator: "\u2009",
        decimalMark: ",",
        decimalLength: 2,
        allowNegative: false,
      };
      let i;
      (function (e) {
        e.NotNumber = "notNumber";
        e.DecimalLength = "decimalLength";
      })((i ||= {}));
      const l = {
        validate: function (e, t) {
          const o = {
            ...n,
            ...t,
          };
          const l = [];
          if (e === "") {
            return l;
          }
          if (
            !(
              o.decimalLength === 0
                ? /^[\d]*$/
                : new RegExp(
                    `^${o.allowNegative ? "-?" : ""}\\d+${o.decimalMark}?\\d*$`,
                  )
            ).test(e.replace("−", "-").split(o.groupSeparator).join(""))
          ) {
            l.push(i.NotNumber);
          }
          if (
            o.decimalLength &&
            (e.split(o.decimalMark)[1] || []).length > o.decimalLength
          ) {
            l.push(i.DecimalLength);
          }
          return l;
        },
      };
    },
    572962: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
      });
      var n = o(665164);
      var i = o.n(n);
      const l = function (e, t) {
        const o = i()(e).first();
        const n = `bloko-ready-${t}`;
        let l = o.data(n);
        if (!l) {
          l = i().Deferred();
          o.data(n, l);
        }
        return l;
      };
      const r = {
        resolve: (e, t, o) => l(e, t).resolve(o),
        getPromise: (e, t) => l(e, t).promise(),
      };
    },
    284831: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = (e) => {
        let t = false;
        return function () {
          for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) {
            n[i] = arguments[i];
          }
          if (!t) {
            window.requestAnimationFrame(() => {
              t = false;
              e(...n);
            });
          }
          t = true;
        };
      };
    },
    464464: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(315462);
      var i = o.n(n);
      var l = o(955484);
      const r = {
        topOffset: 100,
        centered: true,
      };
      const s = (e, t) => {
        if (!e) {
          return;
        }
        const o = {
          ...r,
          ...t,
        };
        const n =
          e.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          (o.centered ? window.innerHeight / 2 : 0) +
          (o.placement === l.Placement.Top ? -o.topOffset : o.topOffset);
        i()({
          top: n,
          speed: o.speed,
          animationStartCallback: o.animationStartCallback,
          animationEndCallback: o.animationEndCallback,
        });
      };
    },
    45431: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(857726);
      var i = o.n(n);
      const l = (e) => {
        let {
          top: t,
          speed: o = 500,
          animationStartCallback: n,
          animationEndCallback: l,
        } = e;
        const r = window.pageYOffset;
        const s = Math.round(t);
        const a = s - r;
        const c = Math.abs((a / 1000) * o);
        const d = document.body.scrollHeight;
        const b = performance.now();
        const u = i()(() => {
          const e = performance.now() - b;
          const t = Math.min(e / c, 1);
          const o = Math.round(
            r +
              a *
                ((i = t) < 0.5
                  ? i * 4 * i * i
                  : (i - 1) * (i * 2 - 2) * (i * 2 - 2) + 1),
          );
          var i;
          window.scrollTo(0, o);
          if (n) {
            n();
          }
          const h = ((e) => {
            const t = window.pageYOffset;
            return e === s || t === s || (r < s && window.innerHeight + t) >= d;
          })(o);
          if (h) {
            if (l) {
              l();
            }
          } else {
            u();
          }
        });
        u();
      };
    },
    638281: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => a,
        mockComponent: () => r,
        mockComponentRenderProp: () => s,
      });
      var n = o(394280);
      var i = o(343856);
      function l(e, t) {
        delete t.type;
        delete t.$$typeof;
        delete t.render;
        for (const o in t) {
          e[o] = t[o];
        }
      }
      const r = function (e, t, { withChildren: o, innerDependence: r } = {}) {
        const s = (0, n.forwardRef)((t, n) => {
          let { children: l, ...s } = t;
          return (0, i.jsxs)("bloko-component-mock", {
            ...s,
            _component: e,
            children: [r ? r(s, n) : null, o ? l : null],
          });
        });
        if (t) {
          l(s, t);
        }
        s.displayName = "bloko-ref";
        return s;
      };
      const s = function (
        e,
        t,
        { withChildren: o, innerDependence: n, renderArguments: r } = {
          renderArguments: [],
        },
      ) {
        const s = (t) => {
          let { render: l, children: s, ...a } = t;
          return (0, i.jsxs)("bloko-component-mock-render-prop", {
            ...a,
            _component: e,
            children: [
              n ? n(a) : null,
              o ? s : null,
              l == null ? undefined : l(...(r || [])),
            ],
          });
        };
        if (t) {
          l(s, t);
        }
        s.displayName = "bloko-component-mock-render-prop";
        return s;
      };
      const a = {};
    },
    335506: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => c,
      });
      var n = o(182093);
      var i = o.n(n);
      var l = o(863247);
      var r = o.n(l);
      var s = o(609582);
      var a = o.n(s);
      const c = i().localStorage() ? a()(window.localStorage) : new (r())();
    },
    792348: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = function () {
        let e = {};
        this.length = 0;
        this.key = function (t) {
          const o = Object.keys(e);
          if (t < o.length) {
            return o[t];
          } else {
            return null;
          }
        };
        this.setItem = function (t, o) {
          if (!e.hasOwnProperty(t)) {
            this.length += 1;
          }
          e[t] = String(o);
        };
        this.getItem = function (t) {
          if (e.hasOwnProperty(t)) {
            return e[t];
          } else {
            return null;
          }
        };
        this.removeItem = function (t) {
          this.length -= 1;
          delete e[t];
        };
        this.clear = function () {
          this.length = 0;
          e = {};
        };
        this.getLength = function () {
          return this.length;
        };
      };
    },
    310493: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => c,
      });
      var n = o(182093);
      var i = o.n(n);
      var l = o(863247);
      var r = o.n(l);
      var s = o(609582);
      var a = o.n(s);
      const c = i().sessionStorage() ? a()(window.sessionStorage) : new (r())();
    },
    871132: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = function (e) {
        return {
          key(t) {
            try {
              return e.key(t);
            } catch (e) {
              return null;
            }
          },
          getItem(t) {
            try {
              return e.getItem(t);
            } catch (e) {
              return null;
            }
          },
          setItem(t, o) {
            try {
              e.setItem(t, o);
            } catch (n) {
              try {
                e.removeItem(t);
                e.setItem(t, o);
              } catch (e) {}
            }
          },
          removeItem(t) {
            try {
              e.removeItem(t);
            } catch (e) {}
          },
          clear() {
            try {
              e.clear();
            } catch (e) {}
          },
          getLength() {
            try {
              return e.length;
            } catch (e) {
              return 0;
            }
          },
        };
      };
    },
    603973: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      const n = function (e) {
        let t;
        return function () {
          if (t === undefined) {
            t = e();
          }
          return t;
        };
      };
      const i = function (e, t) {
        return function () {
          try {
            window[e].setItem(t, t);
            window[e].removeItem(t);
            return true;
          } catch (e) {
            return false;
          }
        };
      };
      let l;
      const r = () => {
        if (l === undefined) {
          l = navigator.userAgent.toLowerCase();
        }
        return l;
      };
      const s = {
        localStorage: n(i("localStorage", "_bloko_hh_test_local_storage")),
        sessionStorage: n(
          i("sessionStorage", "_bloko_hh_test_session_storage"),
        ),
        historyApi: n(() => !!window.history && !!window.history.pushState),
        android: n(
          () =>
            /android/i.test(r()) &&
            !/IEMobile/i.test(r()) &&
            !/(ipad|ipod|iphone)/i.test(r()),
        ),
        IEMobile: n(() => /IEMobile/i.test(r())),
        IE: n(
          () =>
            /MSIE/i.test(r()) ||
            (/trident/.test(r()) && /rv:11/.test(r())) ||
            /edge/.test(r()),
        ),
        mobile: n(() =>
          /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
            r(),
          ),
        ),
        ios: n(() => /(ipad|ipod|iphone)/i.test(r())),
        webkit: n(() => /webkit/i.test(r())),
        touch: n(() => "ontouchstart" in window),
        inputTypeTime: n(() => {
          const e = document.createElement("input");
          e.setAttribute("type", "time");
          return e.type === "time";
        }),
      };
    },
    116216: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = {
        fromString: (e) =>
          e.replace(/^\s*<!--|-->\s*$/g, "").replace(/^\s*\n|\n\s*$/g, ""),
        fromElement(e) {
          if (e instanceof Element) {
            return this.fromString(e.innerHTML);
          } else {
            return "";
          }
        },
      };
    },
    139604: function (e, t, o) {
      "use strict";

      function n(e) {
        this.name = "TextSelectionError";
        this.message = e;
      }
      function i(e) {
        this.name = "TextSelectionArgumentsError";
        this.message = e;
      }
      o.r(t);
      o.d(t, {
        default: () => c,
      });
      n.prototype = Error.prototype;
      i.prototype = Error.prototype;
      const l = function () {
        throw new n("Selection is not supported");
      };
      let r = l;
      let s = l;
      const a =
        typeof window != "undefined" && "document" in window
          ? window.document
          : null;
      if (a && "selectionStart" in a.createElement("input")) {
        r = function (e) {
          return {
            start: e.selectionStart,
            end: e.selectionEnd,
            direction: e.selectionDirection || "none",
          };
        };
        s = function (e, t, o, n) {
          if (e.tagName === "INPUT" && e.type === "number") {
            e.type = "text";
            e.setSelectionRange(t, o, n);
            e.type = "number";
          } else {
            e.setSelectionRange(t, o, n);
          }
        };
      } else if (a && a.selection) {
        r = function (e) {
          const t = a.selection.createRange();
          const o = e.createTextRange();
          const n = o.duplicate();
          o.moveToBookmark(t.getBookmark());
          n.setEndPoint("EndToStart", o);
          return {
            start: n.text.length,
            end: n.text.length + t.text.length,
            direction: "none",
          };
        };
        s = function (e, t, o) {
          const n = e.createTextRange();
          n.collapse(true);
          n.moveStart("character", t);
          n.moveEnd("character", o - t);
          n.select();
        };
      }
      const c = {
        get: (e) => r(e),
        getCaretPosition(e) {
          const t = this.get(e);
          if (t.direction === "forward") {
            return t.end;
          } else {
            return t.start;
          }
        },
        set(e, t, o, n) {
          if (typeof t != "number") {
            throw new i(
              "First argument of textSelection.set() must be a number",
            );
          }
          if (typeof o != "number") {
            o = t;
          }
          if (["forward", "backward", "none"].indexOf(n) === -1) {
            n = "none";
          }
          e.focus();
          s(e, t, o, n);
        },
        setCaretPosition(e, t) {
          this.set(e, t, t);
        },
      };
    },
    436316: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => n,
      });
      const n = (e, t) => {
        let o;
        let n;
        let i;
        const l = function l() {
          for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) {
            s[a] = arguments[a];
          }
          if (o) {
            n = s;
            i = this;
            return;
          }
          e.apply(this, s);
          o = setTimeout(() => {
            o = null;
            if (n) {
              l.apply(i, n);
              n = null;
            }
          }, t);
        };
        l.cancel = () => {
          if (o) {
            clearTimeout(o);
          }
          n = null;
          o = null;
        };
        return l;
      };
    },
    639010: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      const n = (e) => {
        const t = e.indexOf("ms") > -1 ? 1 : 1000;
        return parseFloat(e.trim()) * t;
      };
      const i = (e) => (e ? Math.max(...e.split(",").map(n)) : 0);
      const l = (e, t) => {
        const o = (t) => {
          if (t.target === e) {
            l();
          }
        };
        e.addEventListener("transitionend", o);
        let n = 0;
        function l() {
          r();
          t();
        }
        function r() {
          window.clearTimeout(n);
          e.removeEventListener("transitionend", o);
        }
        const s = window.getComputedStyle(e);
        const a = i(s.getPropertyValue("transition-duration"));
        const c = i(s.getPropertyValue("transition-delay"));
        n = window.setTimeout(l, (c + a) * 1.5);
        return r;
      };
    },
    430237: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => i,
      });
      var n = o(272316);
      const i = o
        .n(n)()
        .Collection.extend({
          converter(e, t, o) {
            if (this.sortFucntion) {
              e.sort(this.sortFucntion.bind(this));
            }
            e.forEach((e) => {
              const n = this.parseItem(e, t);
              this.setupParent(n);
              if (e.items && e.items.length > 0) {
                this.converter(e.items, n, o);
              }
              o.push(n);
              if (t.children) {
                t.children.push(n.id);
              } else {
                t.children = [n.id];
              }
            });
          },
          parseItem: (e, t) => ({
            id: e.id,
            text: e.text,
            children: [],
            parent: t.id,
            removable: e.removable,
            editable: e.editable,
            selectable: e.selectable,
            disabled: e.disabled,
            hiddenValue: e.hiddenValue,
            additional: e.additional,
          }),
          parse(e) {
            const t = [];
            e.forEach((e) => {
              e.id = e.id.toString();
              e.parent &&= e.parent.toString();
              if (e.items) {
                this.converter(e.items, e, t);
              }
              this.setupParent(e);
              e.items = null;
              t.push(e);
            });
            return t;
          },
          setupParent(e) {
            const t = this.get(e.parent);
            if (t) {
              const o = t.get("children");
              if (o.indexOf(e.id) === -1) {
                t.set("children", o.concat([e.id]), {
                  silent: true,
                });
              }
              return true;
            }
            return false;
          },
          toJSON() {
            const e = [];
            this.models.forEach((t) => {
              if (!t.has("parent")) {
                e.push(t.toJSON());
              }
            });
            return e;
          },
        });
    },
    392926: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => s,
      });
      var n = o(665164);
      var i = o.n(n);
      var l = o(459324);
      var r = o.n(l);
      const s = r().extend({
        defaults: i().extend({}, r().defaults, {
          changeable: true,
          voted: false,
          count: 0,
        }),
      });
    },
    567579: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => l,
      });
      var n = o(387218);
      var i = o.n(n);
      function l(e, t) {
        const o = new (i())(e, t);
        return {
          add(e, t) {
            const n = new Set(e);
            o.add(n, t);
            return [...n];
          },
          exclude(e, t, n) {
            const i = new Set(t);
            o.exclude(e, i, n);
            return [...i];
          },
          remove(e, t) {
            const n = new Set(e);
            o.remove(n, t);
            return [...n];
          },
        };
      }
    },
    162541: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
      });
      var n = o(272316);
      var i = o.n(n);
      var l = o(521611);
      const r = i().Model.extend({
        defaults: {
          id: null,
          text: "",
          expanded: false,
          children: [],
          parent: null,
          items: null,
          hiddenValue: null,
          animated: true,
          selectable: false,
          disabled: false,
          editable: false,
          edited: false,
        },
        initialize() {
          this.set("id", this.get("id").toString(), {
            silent: true,
          });
        },
        toJSON(e) {
          const t = l.ZP.clone(this.attributes);
          t.items = [];
          t.removable = this.removable || false;
          t.editable = this.editable || false;
          t.selectable = this.selectable || false;
          t.selected = this.get("selected") || false;
          t.expanded = this.get("expanded") || false;
          t.disabled = this.get("disabled") || false;
          t.isNew =
            this.get("animated") &&
            (this.hasChanged("children") || this.newTag);
          t.hiddenValue = this.get("hiddenValue") || this.get("text");
          if (e) {
            this.newTag = false;
          }
          if (this.get("parent") === null) {
            this.newTag = false;
            if (t.children) {
              t.children.forEach((e) => {
                if (this.collection.get(e)) {
                  t.items.push(this.collection.get(e).toJSON(true));
                }
              });
            }
            t.children = [];
          }
          return t;
        },
      });
    },
    329360: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => g,
      });
      var n = o(882703);
      var i = o.n(n);
      var l = o(769834);
      var r = o.n(l);
      var s = o(104608);
      var a = o.n(s);
      var c = o(243781);
      var d = o.n(c);
      var b = o(428612);
      var u = o.n(b);
      var h = o(20189);
      function p(e, t, o) {
        return t.filter((t) => o(t, e));
      }
      const k = () => true;
      const g = function (e, t) {
        const o = t.checkSelectable || k;
        const n = t.singleChoice
          ? i()()
          : r()(e, o, {
              withExcluded: t.withExcluded,
            });
        const l = a()(e, o);
        function s(o, i) {
          let l = (0, h.filterMissingIds)(e, i);
          if (t.singleCategory) {
            l = (0, h.filterSingleCategory)(e, o, l);
          }
          if (t.singleChoice) {
            l = (function (e) {
              if (e.length > 1) {
                u().log(
                  "out error",
                  new Error("Collection accepts only one ID"),
                );
                return [e[e.length - 1]];
              } else {
                return e;
              }
            })(l);
          }
          if (t.leavesOnly) {
            l = (0, h.filterParents)(e, l);
          }
          if (t.checkSelectable) {
            l = p(e, l, t.checkSelectable);
          }
          if (t.leavesOnly && !t.singleChoice) {
            l.forEach((e) => {
              d()(o, e, true);
            });
          } else {
            l.forEach((e) => {
              n(o, e, true);
            });
          }
        }
        return {
          add: s,
          remove: function (t, o) {
            (0, h.filterMissingIds)(e, o).forEach((e) => {
              n(t, e, false);
            });
          },
          set: function (e, t) {
            e.clear();
            s(e, t);
          },
          exclude: function (o, n, i) {
            const r = t.checkSelectable
              ? p(e, (0, h.filterMissingIds)(e, i), t.checkSelectable)
              : (0, h.filterMissingIds)(e, i);
            l(o, n, r);
          },
        };
      };
    },
    998135: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        createModel: () => l,
        default: () => r,
      });
      var n = o(198166);
      function i(e, t, o) {
        if (
          (t = (function (e) {
            var t = (function (e, t) {
              if (typeof e != "object" || e === null) {
                return e;
              }
              var o = e[Symbol.toPrimitive];
              if (o !== undefined) {
                var n = o.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return (t === "string" ? String : Number)(e);
            })(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          })(t)) in e
        ) {
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = o;
        }
        return e;
      }
      const l = (e) => {
        const t = e[n.CoreField.Id];
        if (typeof t != "string") {
          throw new Error(`Invalid ID: "${JSON.stringify(t)}"`);
        }
        return {
          [n.CoreField.Id]: e[n.CoreField.Id],
          [n.CoreField.Text]: e[n.CoreField.Text],
          ...(n.CoreField.Additional in e
            ? {
                [n.CoreField.Additional]: e[n.CoreField.Additional],
              }
            : {}),
        };
      };
      const r = class {
        constructor() {
          i(this, "models", []);
          i(this, "topLevelModels", []);
          i(this, "modelsById", {});
          i(this, "childrenById", {});
          i(this, "parentsById", {});
        }
        addModel(e, t) {
          const o = l(e);
          const i = o[n.CoreField.Id];
          if (this.getModel(i) === undefined) {
            this.models.push(o);
            this.modelsById[i] = o;
          }
          if (t) {
            this.parentsById[i] = this.parentsById[i] || [];
            this.parentsById[i].push(t);
            this.childrenById[t] = this.childrenById[t] || [];
            this.childrenById[t].push(i);
          } else {
            this.topLevelModels.push(o);
          }
        }
        toList() {
          return this.models.slice();
        }
        getTopLevel() {
          return this.topLevelModels.slice();
        }
        getModel(e) {
          if (this.modelsById.hasOwnProperty(e)) {
            return this.modelsById[e];
          } else {
            return undefined;
          }
        }
        getExistModels(e) {
          return e.reduce((e, t) => {
            const o = this.getModel(t);
            if (o) {
              e.push(o);
            }
            return e;
          }, []);
        }
        getParentId(e) {
          if (this.parentsById.hasOwnProperty(e)) {
            return this.parentsById[e][0];
          } else {
            return undefined;
          }
        }
        getParent(e) {
          const t = this.getParentId(e);
          if (t) {
            return this.getModel(t);
          } else {
            return undefined;
          }
        }
        getParentIdsDuplicates(e) {
          if (this.parentsById.hasOwnProperty(e)) {
            return this.parentsById[e];
          } else {
            return [];
          }
        }
        getParentIds(e, t = []) {
          const o = this.getParentIdsDuplicates(e);
          if (o.length) {
            t.push(...o);
            o.forEach((e) => this.getParentIds(e, t));
          }
          return t;
        }
        getParents(e) {
          const t = this.getParentIds(e);
          return this.getExistModels(t);
        }
        hasChildren(e) {
          return this.childrenById.hasOwnProperty(e);
        }
        getChildrenIds(e) {
          if (this.hasChildren(e)) {
            return this.childrenById[e].slice();
          } else {
            return [];
          }
        }
        getChildren(e) {
          const t = this.getChildrenIds(e);
          return this.getExistModels(t);
        }
        _walk(e, t, o) {
          const n = o ? o.slice() : [];
          e.forEach((e) => {
            t(e, n);
            const o = this.getChildren(e.id);
            if (o && o.length) {
              this._walk(o, t, [e].concat(n));
            }
          });
        }
        walk(e) {
          this._walk(this.getTopLevel(), e);
        }
        walkChildren(e, t) {
          const o = this.getChildren(e);
          if (o.length) {
            const n = this.getExistModels([e]).concat(this.getParents(e));
            this._walk(o, t, n);
          }
        }
        walkParents(e, t) {
          const o = this.getParents(e);
          while (o.length) {
            t(o.shift(), o.slice());
          }
        }
        toTree(e) {
          const t = [];
          const o = {};
          this.walk((n, i) => {
            if (!e || e(n)) {
              const e = {
                ...n,
              };
              o[n.id] = e;
              if (i.length === 0) {
                t.push(e);
              } else {
                const t = o[i[0].id];
                t.items ||= [];
                t.items.push(e);
              }
            }
          });
          return t;
        }
      };
    },
    525634: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        extendExcludedFromParentsToChildren: () => _,
        filterMissingIds: () => d,
        filterParents: () => b,
        filterSingleCategory: () => u,
        filterTreeByIdsWithParents: () => c,
        filterUniqueLeavesOnly: () => p,
        filterWithParents: () => h,
        fromTree: () => r,
        getIdsWithNoParentsInSameList: () => s,
        getParentsHashMap: () => a,
        isNotLeaf: () => k,
        narrowDownExcludedFromChildrenToParents: () => m,
        removeExcludedFromSelected: () => g,
        walk: () => l,
      });
      var n = o(108414);
      var i = o.n(n);
      const l = (e, t, o) => {
        const n = o ? o.slice() : [];
        e.forEach((e) => {
          t(e, n);
          if (e.items && e.items.length) {
            l(e.items, t, [e].concat(n));
          }
        });
      };
      const r = (e, t) => {
        const o = new (i())();
        l(e, (e, n) => {
          if (typeof t == "function") {
            t(e, n);
          }
          o.addModel(e, n.length ? n[0].id : undefined);
        });
        return o;
      };
      const s = function (e, t, o = []) {
        const n = t.reduce((t, n) => {
          t[n] = e.getChildren(n).length > 0 && !o.includes(n);
          return t;
        }, {});
        return t.filter(
          (t) =>
            !e
              .getParentIdsDuplicates(t)
              .some((e) => n.hasOwnProperty(e) && n[e]),
        );
      };
      const a = (e, t) =>
        t.reduce((t, o) => {
          e.getParentIds(o).forEach((e) => {
            t[e] = true;
          });
          return t;
        }, {});
      const c = (e, t) => {
        const o = a(e, t);
        t.forEach((e) => {
          o[e] = true;
        });
        return e.toTree((e) => o.hasOwnProperty(e.id));
      };
      const d = (e, t) => {
        const o = [];
        t.forEach((t) => {
          if (e.getModel(t)) {
            o.push(t);
          }
        });
        return o;
      };
      const b = (e, t) => t.filter((t) => e.getChildrenIds(t).length === 0);
      const u = (e, t, o) => {
        const n = t.values().next().value;
        if (!n) {
          return o;
        }
        const i = e.getParentId(n);
        if (i) {
          return o.filter((t) => e.getParentId(t) === i);
        } else {
          return o;
        }
      };
      const h = (e, t) => {
        const o = new e.constructor();
        const n = new Set();
        e.walk((e, o) => {
          if (t(e)) {
            n.add(e.id);
            o.forEach((e) => {
              n.add(e.id);
            });
          }
        });
        n.forEach((t) => {
          const n = e.getModel(t);
          if (n) {
            const t = e.getParentIdsDuplicates(n.id);
            if (t.length) {
              t.forEach((e) => {
                o.addModel(
                  {
                    ...n,
                  },
                  e,
                );
              });
            } else {
              o.addModel({
                ...n,
              });
            }
          }
        });
        return o;
      };
      const p = (e, t) => {
        const o = new (i())();
        e.walk((n) => {
          if (!o.getModel(n.id) && !e.hasChildren(n.id) && !!t(n)) {
            o.addModel({
              ...n,
            });
          }
        });
        return o;
      };
      const k = (e, t) => t.hasChildren(e);
      const g = (e, t) => [e.filter((e) => !t.includes(e)), t];
      const m = (e, t) => {
        const o = new Map();
        return t.reduce((n, i) => {
          var l;
          const r = e.getParentId(i);
          const s = e.getParentIds(i);
          if (
            n.includes(i) ||
            (r && (l = o.get(r)) !== null && l !== undefined && l.has(i)) ||
            s.some((e) => t.includes(e))
          ) {
            return n;
          }
          const a = e.getChildrenIds(i);
          if (a.length) {
            o.set(i, new Set(a));
          }
          n.push(i);
          return n;
        }, []);
      };
      const _ = (e, t, o) =>
        t.length
          ? o.reduce((o, n) => {
              if (!o.includes(n) && !!e.getModel(n)) {
                e.walkChildren(n, (e) => !t.includes(e.id) && o.push(e.id));
                o.push(n);
              }
              return o;
            }, [])
          : [];
    },
    904263: function (e, t, o) {
      "use strict";

      let n;
      o.r(t);
      o.d(t, {
        CoreField: () => n,
      });
      (function (e) {
        e.Id = "id";
        e.Text = "text";
        e.Additional = "additional";
      })((n ||= {}));
    },
    368095: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        format: () => c,
        formatFromTo: () => u,
        formatNewLine: () => b,
        formatToReactComponent: () => d,
      });
      var n = o(394280);
      var i = o(461859);
      var l = o.n(i);
      var r = o(669406);
      var s = o.n(r);
      var a = o(343856);
      const c = l();
      const d = (e, t) => {
        const o = e;
        Object.keys(t).forEach((t, o) => {
          e = e.replace(t, `#${o}#`);
        });
        const i = e.split(
          new RegExp(
            `${Object.keys(t)
              .map((e, t) => `#${t}#`)
              .join("|")}`,
            "g",
          ),
        );
        const l = Object.keys(t)
          .map((e) => ({
            index: o.indexOf(e),
            value: t[e],
          }))
          .filter((e) => e.index !== -1)
          .sort((e, t) => e.index - t.index);
        return (0, a.jsx)(a.Fragment, {
          children: i.map((e, t) =>
            (0, a.jsxs)(
              n.Fragment,
              {
                children: [e, t !== i.length - 1 && l[t].value],
              },
              t,
            ),
          ),
        });
      };
      const b = (e) => {
        const t = e.split(/\n/gi);
        const o = t.length - 1;
        return (0, a.jsx)(a.Fragment, {
          children: t.map((e, t) =>
            (0, a.jsxs)(
              n.Fragment,
              {
                children: [e, t < o && (0, a.jsx)("br", {})],
              },
              t,
            ),
          ),
        });
      };
      const u = (e, t, o) => {
        let { from: n, to: i } = e;
        let { trlFrom: r, trlTo: a, trlFromTo: c } = t;
        if (n && i) {
          return l()(c, {
            "{0}": s().format(n.toString(), o),
            "{1}": s().format(i.toString(), o),
          });
        } else if (i) {
          return l()(a, {
            "{0}": s().format(i.toString(), o),
          });
        } else if (n) {
          return l()(r, {
            "{0}": s().format(n.toString(), o),
          });
        } else {
          return null;
        }
      };
    },
    213913: function (e, t, o) {
      "use strict";

      o.r(t);
    },
    378971: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        DUMMY_HOST: () => a,
        default: () => b,
      });
      const n = (e) => [null, undefined].includes(e);
      const i = (e) =>
        n(e) || Array.isArray(e) || !["function", "object"].includes(typeof e);
      function l(e) {
        if (!e || Object.prototype.toString.call(e) !== "[object Object]") {
          throw new TypeError("GET параметры должны быть объектом.");
        }
        if (!Object.values(e).every(i)) {
          throw new TypeError(
            "Значение параметра должено быть массивом или примитивом",
          );
        }
        return Object.entries(e)
          .filter((e) => !n(e[1]))
          .reduce((e, t) => {
            let [o, n] = t;
            if (Array.isArray(n)) {
              e.push(...n.map((e) => [o, e]));
            } else {
              e.push([o, n]);
            }
            return e;
          }, []);
      }
      function r(e) {
        const t = l(e);
        return new URLSearchParams(t).toString();
      }
      function s(e) {
        return [...new URLSearchParams(e).entries()].reduce((e, t) => {
          let [o, n] = t;
          if (e[o]) {
            e[o].push(n);
            return e;
          } else {
            e[o] = [n];
            return e;
          }
        }, {});
      }
      const a = "dummy.dummy";
      const c = `https://${a}`;
      function d(e) {
        let t = e;
        t ||= "";
        const o = new URL(t, c);
        const n = {
          params: s(o.search),
          protocol: o.protocol,
          hostname: o.hostname,
          host: o.host,
          port: o.port,
          pathname: o.pathname,
          search: o.search,
          hash: o.hash,
        };
        (function (e, t) {
          Object.defineProperty(e, "href", {
            get: () => {
              o.search = r(e.params);
              o.hash = e.hash;
              return o.href.replace(c, "");
            },
            set(t) {
              o.href = t;
              e.params = s(o.search);
            },
            enumerable: t,
          });
          Object.defineProperty(e, "search", {
            get: () => {
              o.search = r(e.params);
              return o.search;
            },
            set(t) {
              o.search = t;
              e.params = s(o.search);
            },
            enumerable: t,
          });
          Object.defineProperty(e, "host", {
            get: () =>
              o.hostname.replace(a, "") + (o.port === "" ? "" : `:${o.port}`),
            set(t) {
              const [n, i] = t.split(":");
              o.hostname = n;
              if (i) {
                e.port = i;
              } else {
                o.port = "";
              }
            },
            enumerable: t,
          });
          Object.defineProperty(e, "hostname", {
            get: () => o.hostname.replace(a, ""),
            set(e) {
              o.hostname = e;
            },
            enumerable: t,
          });
          Object.defineProperty(e, "port", {
            get: () => (o.port === "0" || o.port === "80" ? "" : o.port),
            set(e) {
              if (isNaN(parseInt(e, 10))) {
                throw new TypeError("Порт должен быть числом");
              }
              o.port = e;
            },
            enumerable: t,
          });
          Object.defineProperty(e, "protocol", {
            get: () => o.protocol,
            set(e) {
              o.protocol = e;
            },
          });
          Object.defineProperty(e, "pathname", {
            get: () =>
              o.pathname.indexOf("/") === 0 ? o.pathname : `/${aContainer.url}`,
            set(e) {
              o.pathname = e;
            },
          });
        })(n, true);
        return n;
      }
      d.stringify = (e) => {
        if (!e) {
          return "";
        }
        let t = e;
        if (!Array.isArray(t)) {
          t = l(t);
        }
        return new URLSearchParams(t).toString();
      };
      const b = d;
    },
    620161: function (e, t, o) {
      "use strict";

      o.r(t);
      o.d(t, {
        default: () => r,
      });
      var n = o(665164);
      var i = o.n(n);
      const l = {
        "bloko-input-text": "bloko-input-text_invalid",
        "bloko-select": "bloko-select_invalid",
        "bloko-textarea": "bloko-textarea_invalid",
        "bloko-custom-select": "bloko-custom-select_invalid",
        "bloko-checkbox": "bloko-checkbox_invalid",
        "bloko-radio": "bloko-radio_invalid",
        "bloko-button": "bloko-button_invalid",
      };
      function r(e) {
        const t = i()(e);
        if (t.data("validity-setter")) {
          return;
        }
        let o = false;
        const n = (function () {
          for (const e in l) {
            if (t.hasClass(e)) {
              return l[e];
            }
          }
          return null;
        })();
        t.on(
          "setInvalid",
          function () {
            o = true;
            if (n) {
              t.addClass(n);
            }
          }.bind(null),
        );
        t.on(
          "setValid",
          function () {
            if (o) {
              o = false;
              if (n) {
                t.removeClass(n);
              }
            }
          }.bind(null),
        );
        t.on("focusin", () => {
          if (n) {
            t.removeClass(n);
          }
        });
        t.on("focusout", () => {
          if (o && n) {
            t.addClass(n);
          }
        });
        t.data("validity-setter", true);
      }
    },
    561624: function (e, t, o) {
      "use strict";

      o.r(t);
      o(674966);
      o(746091);
      o(433856);
      o(336336);
      o(187103);
      o(41994);
      o(236349);
      o(241929);
      o(10469);
      o(677016);
      o(501469);
      o(810337);
      o(103942);
      o(241704);
      o(563457);
      o(945483);
      o(837230);
      o(46019);
      o(332996);
      o(718286);
      o(246189);
      o(742334);
      o(713602);
      o(321046);
      o(171189);
      o(93400);
      o(59213);
      o(770900);
      o(645284);
      o(260725);
      o(886639);
      o(128653);
      o(752323);
      o(652821);
      o(987295);
      o(572856);
      o(698211);
      o(902945);
      o(826313);
      o(453870);
      o(332493);
      o(317784);
      o(428909);
      o(574477);
      o(712499);
      o(175853);
      o(568166);
      o(384090);
      o(227285);
      o(204790);
      o(14213);
      o(216711);
      o(501334);
      o(936973);
      o(858496);
      o(342228);
      o(723530);
      o(267312);
      o(46603);
      o(632991);
      o(963316);
      o(846967);
      o(405505);
      o(43484);
      o(734598);
      o(272963);
      o(279787);
      o(429427);
      o(213592);
      o(712530);
      o(652881);
      o(215571);
      o(151119);
      o(857486);
      o(676543);
      o(44912);
      o(200829);
      o(74730);
      o(214891);
      o(962904);
      o(704744);
      o(981747);
      o(665682);
      o(546754);
      o(586746);
      o(744103);
      o(713786);
      o(635355);
      o(570093);
      o(183871);
      o(968009);
      o(373294);
      o(419773);
      o(757754);
      o(517102);
      o(7619);
      o(30762);
      o(139476);
      o(115113);
      o(304650);
      o(110622);
      o(295479);
      o(194122);
      o(189026);
      o(680394);
      o(368165);
      o(393755);
      o(941144);
      o(554537);
      o(948038);
      o(732603);
      o(372919);
      o(784484);
      o(718817);
      o(417794);
      o(822948);
      o(849255);
      o(607334);
      o(55633);
      o(628488);
      o(24702);
      o(226610);
      o(468013);
      o(565999);
      o(960300);
      o(27644);
      o(701416);
      o(739788);
      o(219613);
      o(883466);
      o(543334);
      o(475611);
      o(125929);
      o(17666);
      o(37219);
      o(86454);
      o(666825);
      o(390259);
      o(345385);
      o(169855);
      o(38729);
      o(590917);
      o(15275);
      o(860910);
      o(662739);
      o(115085);
      o(716387);
      o(788162);
      o(8814);
      o(953890);
      o(336692);
      o(105025);
      o(22271);
      o(771058);
      o(490267);
      o(800555);
      o(877162);
      o(606838);
      o(424487);
      o(155258);
      o(27528);
      o(446600);
      o(475380);
      o(467469);
      o(714263);
      o(997851);
      o(229209);
      o(891799);
      o(42194);
      o(570335);
      o(857359);
      o(736327);
      o(729809);
      o(593366);
      o(904386);
      o(740586);
      o(750318);
      o(796493);
      o(842981);
      o(713701);
      o(807544);
      o(267387);
      o(592755);
      o(495046);
      o(943582);
      o(685177);
      o(347526);
      o(957517);
      o(591187);
      o(323492);
      o(749314);
      o(118447);
      o(13488);
      o(34302);
      o(605374);
      o(825382);
      o(294897);
      o(811094);
      o(975767);
      o(218074);
      o(285511);
      o(729693);
      o(297144);
      o(744492);
      o(813052);
      o(853524);
      o(621020);
      o(849225);
      o(693150);
      o(789998);
      o(264677);
      o(644830);
      o(344237);
      o(113931);
      o(170656);
      o(479272);
      o(597755);
      o(574069);
      o(697468);
      o(452528);
      o(314756);
      o(754334);
      o(878743);
      o(919683);
      o(461317);
      o(33136);
      o(571212);
      o(602910);
      o(486305);
      o(837796);
      o(318443);
      o(817849);
      o(880824);
      o(178549);
      o(710702);
      o(282824);
      o(984885);
      o(785772);
      o(885652);
      o(174555);
      o(670924);
      o(770545);
      o(456882);
      o(606248);
      o(381867);
      o(410909);
      o(971625);
      o(579848);
      o(683012);
      o(322433);
      o(867410);
      o(441940);
      o(257549);
      o(979897);
      o(41469);
      o(705229);
      o(590570);
      o(497700);
      o(882703);
      o(769834);
      o(104608);
      o(243781);
      o(510829);
      o(987598);
      o(125702);
      o(212938);
      o(891914);
      o(802720);
      o(845807);
      o(428612);
      o(118565);
      o(953192);
      o(68789);
      o(764626);
      o(456486);
      o(461859);
      o(771674);
      o(531436);
      o(287330);
      o(835696);
      o(852099);
      o(326185);
      o(91321);
      o(653823);
      o(21119);
      o(755205);
      o(956741);
      o(350647);
      o(953705);
      o(862424);
      o(304991);
      o(607981);
      o(549155);
      o(387501);
      o(904330);
      o(669406);
      o(787726);
      o(328261);
      o(857726);
      o(605916);
      o(315462);
      o(603362);
      o(173566);
      o(863247);
      o(691060);
      o(609582);
      o(182093);
      o(145161);
      o(638040);
      o(947870);
      o(527777);
      o(385539);
      o(702595);
      o(832587);
      o(18332);
      o(459324);
      o(387218);
      o(108414);
      o(20189);
      o(198166);
      o(192591);
      o(543103);
      o(191100);
      o(858957);
    },
    3105: function (e, t, o) {
      "use strict";

      var n = o(522940);
      window.bloko = window.bloko || {};
      window.bloko.getUserAgentDetails = n.T;
    },
  },
]); //# sourceMappingURL=bloko.ba4289b31bf0da83.js.map
//# debugId=f2e6052b-8f8a-4f6b-8e46-716bd15e4ccf
