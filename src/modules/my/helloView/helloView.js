import { api, LightningElement } from 'lwc';

export default class HelloView extends LightningElement {
    @api
    value;

    get valueString() {
        return this.value.toString();
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('increment'));
    }
}
