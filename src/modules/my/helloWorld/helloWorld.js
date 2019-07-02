import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track
    value = 0;

    handleIncrement() {
        this.value += 1;
    }
}
