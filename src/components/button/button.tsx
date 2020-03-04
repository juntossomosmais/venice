import { Component, h, Prop, Element, Watch } from '@stencil/core'

export interface SomeValue {
  name: string;
  value: string;
}

@Component({
  tag: 'jsm-button',
  styleUrl: 'button.css',
  shadow: true
})
export class JSMButton {
  @Element() jsmButton: HTMLElement;

  @Prop() items: string | SomeValue[];

  private _items: SomeValue[];

  @Watch('items')
  dataDidChangeHandler(value: string | SomeValue[]) {
    typeof value === 'string' ? this._items = JSON.parse(value) : this._items = value;
  }

  componentWillLoad() {
    console.log(this.items)
    this.dataDidChangeHandler(this.items);
  }

  render() {
    return (
      <div>
        {this._items && this._items.map((item, i) =>
          <button key={i}>
            <div>{item.name}</div>
          </button>
        )}
      </div>
    )
  }
}
