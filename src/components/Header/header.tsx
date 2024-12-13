/* eslint-disable @typescript-eslint/no-explicit-any */
import "./header.css";

import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/avatar/sp-avatar.js";
import "@spectrum-web-components/icon/sp-icon.js";

import "@spectrum-web-components/overlay/sp-overlay.js";
import "@spectrum-web-components/popover/sp-popover.js";
import "@spectrum-web-components/dialog/sp-dialog.js";
import "@spectrum-web-components/picker/sp-picker.js";
import "@spectrum-web-components/dialog/sp-dialog-wrapper.js";
import "@spectrum-web-components/textfield/sp-textfield.js";
import "@spectrum-web-components/field-label/sp-field-label.js";
import "@spectrum-web-components/menu/sp-menu-item.js";
import '@spectrum-web-components/icons-workflow/icons/sp-icon-light.js';
import "@spectrum-web-components/tooltip/sp-tooltip.js";

import { Color, Scale, SystemVariant } from "@spectrum-web-components/theme";

import Logo from "/swc-logo.svg";

interface HeaderProps {
  updateThemeProps: (color: Color, system: SystemVariant, scale: Scale) => void;
  color: Color;
  system: SystemVariant;
  scale: Scale;
}

export function Header({
  updateThemeProps,
  color,
  system,
  scale,
}: HeaderProps) {
  return (
    <header className="header">

      <div className="left-section">
        <img src={Logo} alt="Logo" className="logo" />
        <p className="">SWC Test App</p>
      </div>

      <div className="right-section">
        <sp-action-button id="trigger" quiet>
          <sp-icon-light size="m"></sp-icon-light>
          <sp-tooltip self-managed placement="bottom" offset={4}>
            Theme Settings
          </sp-tooltip>
        </sp-action-button>

        <sp-overlay trigger="trigger@click" placement="bottom" offset={4}>
          <sp-popover>
            <sp-dialog>
              <h2 slot="heading">Welcome Tarat!</h2>

              <sp-field-label for="color-picker">
                Choose theme color
              </sp-field-label>
              <sp-picker
                id="color-picker"
                value={color}
                onchange={(event: any) => {
                  const target = event.target as HTMLInputElement;
                  updateThemeProps(target.value as Color, system, scale);
                }}
              >
                <sp-menu-item value="dark">Dark</sp-menu-item>
                <sp-menu-item value="light">Light</sp-menu-item>
              </sp-picker>

              <sp-field-label for="system-picker">
                Choose theme system
              </sp-field-label>
              <sp-picker
                id="system-picker"
                value={system}
                onchange={(event: any) => {
                  const target = event.target as HTMLInputElement;
                  updateThemeProps(color, target.value as SystemVariant, scale);
                }}
              >
                <sp-menu-item value="spectrum">Spectrum</sp-menu-item>
                <sp-menu-item value="spectrum-two">Spectrum Two</sp-menu-item>
              </sp-picker>

              <sp-field-label for="scale-picker">
                Choose theme scale
              </sp-field-label>
              <sp-picker
                id="scale-picker"
                value={scale}
                onchange={(event: any) => {
                  const target = event.target as HTMLInputElement;
                  updateThemeProps(color, system, target.value as Scale);
                }}
              >
                <sp-menu-item value="medium">Medium</sp-menu-item>
                <sp-menu-item value="large">Large</sp-menu-item>
              </sp-picker>
            </sp-dialog>
          </sp-popover>
        </sp-overlay>

        <sp-button variant="primary" quiet id="signin-modal-trigger">
          sign in
          <sp-tooltip self-managed placement="bottom" offset={4}>
            Sign in
          </sp-tooltip>
        </sp-button>

        <sp-overlay trigger="signin-modal-trigger@click" type="modal">
          <sp-dialog-wrapper headline="Signin form" dismissable underlay>

            <sp-field-label>Enter your email</sp-field-label>
            <div className="modal-inputs">
              <sp-textfield placeholder="test@gmail.com"></sp-textfield>
              <sp-action-button>Sign in</sp-action-button>
            </div>

          </sp-dialog-wrapper>
        </sp-overlay>

      </div>
    </header>
  );
}
