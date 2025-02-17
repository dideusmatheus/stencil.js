import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'web-button',
  styleUrl: 'web-button.css',
  shadow: true,
})
export class WebButton {
  @Prop() labelBtn = 'defaul label';
  @Prop() typeBtn: 'primary-default' | 'secondary-default' | 'tertiary-default' = 'primary-default';
  @Prop() disableBtn = false;

  // Evento que será emitido ao clicar no botão
  @Event() emitClick: EventEmitter<void>;

  private handleClick = () => {
    this.emitClick.emit(); // Emite o evento ao clicar
  };

  render() {
    const buttonClasses = this.disableBtn ? 'disable-btn' : this.typeBtn;
    const textClasses = `text-button ${this.typeBtn}-text`;

    return (
      <button disabled={this.disableBtn} class={buttonClasses} onClick={this.handleClick}>
        <p class={textClasses}>{this.labelBtn}</p>
        {/* <slot></slot> */}
      </button>
    );
  }
}
