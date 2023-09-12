import {Colors} from "../../types";
import {Cell} from "../Cell";
import {Figure} from "./Figure";

export class Bishop extends Figure {
    logo: string;
    $el: HTMLElement;
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.logo = color === Colors.BLACK ? 'bishop-black' : 'bishop-white';
        this.$el = document.createElement('div');
        this.$el.className = `chess__item ${this.logo}`
        this.cell.$el.appendChild(this.$el)
    }
}