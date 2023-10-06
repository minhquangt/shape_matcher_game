// your types here
export enum Shape {
    Circle = 'circle',
    Square = 'square',
    Triangle = 'triangle',
}
export enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
}
export interface ICell {
    shape: Shape;
    color: Color;
    revealed: boolean;
}
