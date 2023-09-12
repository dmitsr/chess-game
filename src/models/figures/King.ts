import {Colors} from "../../types";
import {Cell} from "../Cell";
import {Figure} from "./Figure";

export class King extends Figure {
    logo: string;
    $el: HTMLElement;
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.logo = color === Colors.BLACK ? 'king-black' : 'king-white';
        this.$el = document.createElement('div');
        this.$el.className = `chess__item ${this.logo}`
        this.cell.$el.appendChild(this.$el)
    }
}