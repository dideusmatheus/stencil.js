import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'web-button',
  styleUrl: 'web-button.css',
  shadow: true,
})
export class WebButton {
  @Prop() project: 'default' | 'bene' = 'default';

  // Evento que será emitido ao clicar no botão
  @Event() emitClick: EventEmitter<void>;

  private handleClick = () => {
    this.emitClick.emit(); // Emite o evento ao clicar
  };

  render() {
    return (
      <button class={this.project} onClick={this.handleClick}>
        <slot></slot>
      </button>
    );
  }
}
