import { Component, h } from '@stencil/core';

@Component({
  tag: 'jsm-button',
  styleUrl: 'button.css',
  shadow: true
})
export class JSMButton {
  render() {
    return <button><slot /></button>;
  }
}
