﻿function parseCount(argument) {
    let result = parseFloat(argument);
    if (isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
  }
  function validateCount(argument) {
    try {
      return parseCount(argument);
    } catch (error) {
      return error;
    }
  }
  class Triangle {
    constructor(a, b, c) {
      if (a > b + c || b > a + c || c > a + b) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
    get perimeter() {
      return this.a + this.b + this.c;
    }
    get area() {
      let p = this.perimeter / 2;
      let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +area.toFixed(3);
    }
  }
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimetr() {
          return "Ошибка! Треугольник не существует";
        }
      }
    }
  }
  