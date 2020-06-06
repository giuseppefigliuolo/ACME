import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'acme-header',
  styleUrl: 'acme-header.css',
  shadow: true,
})
export class AcmeHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
