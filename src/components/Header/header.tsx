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

import { ActionButton } from "../../swc-typing/ActionButton";
import { LightIcon } from "../../swc-typing/Icons";
import { Tooltip } from "../../swc-typing/Tooltip";

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
        <ActionButton id="trigger" quiet>
          <LightIcon slot="icon" size="s" name="user"></LightIcon>
          <Tooltip self-managed placement="bottom" offset={4}>
            Theme Settings
          </Tooltip>
        </ActionButton>

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
                  updateThemeProps(target.value, system, scale);
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
                  updateThemeProps(color, target.value, scale);
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
                  updateThemeProps(color, system, target.value);
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
          <Tooltip self-managed placement="bottom" offset={4}>
            Sign in
          </Tooltip>
        </sp-button>

        <sp-overlay trigger="signin-modal-trigger@click" type="modal">
          <sp-dialog-wrapper headline="Signin form" dismissable underlay>
            <p>I am a modal type overlay.</p>
            <sp-field-label>Enter your email</sp-field-label>
            <sp-textfield placeholder="test@gmail.com"></sp-textfield>
            <sp-action-button>Sign in</sp-action-button>
          </sp-dialog-wrapper>
        </sp-overlay>
      </div>
    </header>
  );
}
