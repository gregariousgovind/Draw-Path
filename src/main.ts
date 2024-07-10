import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import 'zone.js';

const combinations = [
  {
    id: 'b02c0463-4793-4ab2-814d-fdd71b50262d',
    output: 'output_left',
    input: 'input_left',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '2ab98cf5-2dc3-4567-96a8-5d8320263d07',
    output: 'output_left',
    input: 'input_top',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '7b3f2ba4-3d6f-4867-84bc-620cb6d9f0d9',
    output: 'output_left',
    input: 'input_right',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'f8f21a2b-7360-41f2-b2ed-bc8c02bcbb82',
    output: 'output_left',
    input: 'input_bottom',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '07ccf9e1-3432-44d1-9e5c-7a9e3b63ee32',
    output: 'output_top',
    input: 'input_left',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'e84ee158-8f5b-4b2c-b3b4-d1e3b2b5a25a',
    output: 'output_top',
    input: 'input_top',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'bd68b7de-e54e-4e8a-a920-779b56a4400b',
    output: 'output_top',
    input: 'input_right',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'b0dfad50-68a2-4c2e-b9e9-0de41de9a356',
    output: 'output_top',
    input: 'input_bottom',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '36b775d3-9b32-4b10-bc17-f9875a42bc3e',
    output: 'output_right',
    input: 'input_left',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '1f17c5a5-642d-4f96-b16f-0ab75303ee87',
    output: 'output_right',
    input: 'input_top',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '3c4a0ba4-2b94-46f5-94db-2bbf21b30754',
    output: 'output_right',
    input: 'input_right',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '0e98d802-7dc5-4292-86a3-ae54854523a5',
    output: 'output_right',
    input: 'input_bottom',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'a810c53d-6a60-4035-af70-54c0b88e57e5',
    output: 'output_bottom',
    input: 'input_left',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'd4f6a635-d0e4-4ebd-9308-5d28f052ae9f',
    output: 'output_bottom',
    input: 'input_top',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '8557c21a-8d6a-4ff0-a589-51bf53996e56',
    output: 'output_bottom',
    input: 'input_right',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'd01b1b56-8a84-422e-b03d-6df92f21bb59',
    output: 'output_bottom',
    input: 'input_bottom',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'e16523b0-b23d-4b5b-9ad4-865fa6a1af65',
    output: 'output_top',
    input: 'input_bottom',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '2d8a5907-f0df-43e0-b39e-4d4a12044d94',
    output: 'output_top',
    input: 'input_bottom',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'f108d7f0-21ff-4b5c-83a9-09599bead150',
    output: 'output_right',
    input: 'input_bottom',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'b7d046e7-d764-4ed3-af20-5b68836d1f34',
    output: 'output_bottom',
    input: 'input_top',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: '92e2e62c-6318-4b38-8dc1-56d7ff356aa2',
    output: 'output_bottom',
    input: 'input_left',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'a2b2061d-9ac6-497b-801b-6eb98ed6e5ed',
    output: 'output_bottom',
    input: 'input_right',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'cbeac88f-0703-4d3d-a4b7-b9e589d5f05a',
    output: 'output_left',
    input: 'input_right',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
  {
    id: 'c8af5d8c-b3f4-4d9c-85d6-41ad8e2f073d',
    output: 'output_right',
    input: 'input_left',
    start: { x: 150, y: 200 },
    end: { x: 300, y: 100 },
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Draw Path</h1>
    <form>
      <label for="inputX">Input X:</label>
      <input #inputX type="number" value="150" min="0" max="300" id="inputX" name="inputX" required>
      <label for="inputY">Input Y:</label>
      <input #inputY type="number" value="200" min="0" max="300" id="inputY" name="inputY" required>
      <label for="outputX">Output X:</label>
      <input #outputX type="number" value="300" min="0" max="300" id="outputX" name="outputX" required>
      <label for="outputY">Output Y:</label>
      <input #outputY type="number" value="100" min="0" max="300" id="outputY" name="outputY" required>
      <label for="inputSelect">Input:</label>
      <select #inputSelect id="inputSelect">
        <option *ngFor="let input of inputs | keyvalue">{{ input.key }}</option>
      </select>
      <label for="outputSelect">Output:</label>
      <select #outputSelect id="outputSelect">
        <option *ngFor="let output of outputs | keyvalue">{{ output.key }}</option>
      </select>
      <button type="button" (click)="drawPath(+outputX.value, +outputY.value, +inputX.value, +inputY.value, 5, outputSelect.value, inputSelect.value)">Submit</button>
    </form>
    <svg width="400" height="400">
      <path
        id="test-path-id"
        stroke="black"
        fill="transparent"
        d=""
      />
    </svg>
    <br>
    <ng-container *ngFor="let combination of combinations">
      <h2>From: {{ combination.output }};<br>To: {{ combination.input }};</h2>
      <svg id="{{combination.id}}" width="400" height="400" >
        <path
          [attr.d]="createCurvature(combination.start.x, combination.start.y, combination.end.x, combination.end.y, 5, combination.output, combination.input)"
          stroke="black"
          fill="transparent"
        />
      </svg>
    </ng-container>
  `,
})
export class App {
  combinations: any[] = combinations;

  inputs = {
    input_left: {},
    input_top: {},
    input_right: {},
    input_bottom: {},
  };

  outputs = {
    output_left: {},
    output_top: {},
    output_right: {},
    output_bottom: {},
  };

  drawPath(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    radius: number,
    output: string,
    input: string
  ) {
    let path = this.createCurvature(
      startX,
      startY,
      endX,
      endY,
      radius,
      output,
      input
    )
    document.getElementById("test-path-id")!.setAttribute("d", path);
  }

  createCurvature(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    radius: number,
    output: string,
    input: string
  ): string {
    let points = [{ x: startX, y: startY }];
    let { initialPoints, cStartX, cStartY } = this.getInitialPoints(startX, startY, endX, endY, output);
    let { finalPoints, cEndX, cEndY } = this.getEndPoints(startX, startY, endX, endY, input);
    let connectorPoints = this.getConnectionPoints(cStartX, cStartY, cEndX, cEndY, input, output);

    points = points.concat(initialPoints).concat(connectorPoints).concat(finalPoints);
    points.push({ x: endX, y: endY });

    let arrowHeadPoints = this.drawArrowHead(endX, endY, input);
    points = points.concat(arrowHeadPoints);

    return this.drawPathFromPoints(points);
  }

  getInitialPoints(startX: number, startY: number, endX: number, endY: number, output: string) {
    let points: Array<{ x: number, y: number }> = [];
    const halfX = (startX + endX) / 2;
    const halfY = (startY + endY) / 2;
    const offset = 40;
    let x = 0, y = 0;

    switch (output) {
      case 'output_left':
        if (startX > endX) {
          x = halfX; y = startY;
        } else {
          x = startX - offset; y = startY;
        }
        break;
      case 'output_top':
        if (startY > endY) {
          x = startX; y = halfY;
        } else {
          x = startX; y = startY - offset;
        }
        break;
      case 'output_right':
        if (startX > endX) {
          x = startX + offset; y = startY;
        } else {
          x = halfX; y = startY;
        }
        break;
      case 'output_bottom':
        if (startY > endY) {
          x = startX; y = halfY;
        } else {
          x = startX; y = startY + offset;
        }
        break;
    }
    points.push({ x, y });
    return { initialPoints: points, cStartX: x, cStartY: y };
  }

  getConnectionPoints(startX: number, startY: number, endX: number, endY: number, input: string, output: string) {
    let points: Array<{ x: number, y: number }> = [];
    const halfX = (startX + endX) / 2;
    const halfY = (startY + endY) / 2;
    switch (`${output}-${input}`) {
      case 'output_left-input_left':
        points.push({ x: startX, y: endY });
        break;

      case 'output_left-input_top':
        points.push({ x: startX, y: endY });
        break;

      case 'output_left-input_right':
        points.push({ x: startX, y: halfY }, { x: endX, y: halfY });
        break;

      case 'output_left-input_bottom':
        points.push({ x: startX, y: endY });
        break;

      case 'output_top-input_left':
        points.push({ x: startX, y: endY });
        break;

      case 'output_top-input_top':
        points.push({ x: startX, y: endY });
        break;

      case 'output_top-input_right':
        points.push({ x: endX, y: startY });
        break;

      case 'output_top-input_bottom':
        points.push({ x: startX, y: endY });
        break;

      case 'output_right-input_left':
        points.push({ x: startX, y: endY });
        break;

      case 'output_right-input_top':
        points.push({ x: startX, y: endY });
        break;

      case 'output_right-input_right':
        points.push({ x: endX, y: startY });
        break;

      case 'output_right-input_bottom':
        points.push({ x: endX, y: startY });
        break;

      case 'output_bottom-input_left':
        points.push({ x: startX, y: endY });
        break;

      case 'output_bottom-input_top':
        points.push({ x: startX, y: endY });
        break;

      case 'output_bottom-input_right':
        points.push({ x: endX, y: startY });
        break;

      case 'output_bottom-input_bottom':
        points.push({ x: endX, y: startY });
        break;

      default:
        break;
    }
    return points;
  }

  getEndPoints(startX: number, startY: number, endX: number, endY: number, input: string) {
    let points: Array<{ x: number, y: number }> = [];
    const halfX = (startX + endX) / 2;
    const halfY = (startY + endY) / 2;
    const offset = 40;
    let x = 0, y = 0;

    switch (input) {
      case 'input_left':
        if (startX < endX) {
          x = halfX; y = endY;
        } else {
          x = endX - offset; y = endY;
        }
        break;
      case 'input_top':
        if (startY < endY) {
          x = endX; y = halfY;
        } else {
          x = endX; y = endY - offset;
        }
        break;
      case 'input_right':
        if (startX < endX) {
          x = endX + offset; y = endY;
        } else {
          x = halfX; y = endY;
        }
        break;
      case 'input_bottom':
        if (startY < endY) {
          x = endX; y = endY - offset;
        } else {
          x = endX; y = halfY;
        }
        break;
    }
    points.push({ x, y });
    return { finalPoints: points, cEndX: x, cEndY: y };
  }

  drawArrowHead(endX: number, endY: number, input: string) {
    let points: Array<{ x: number, y: number }> = [];
    switch (input) {
      case 'input_left':
        points.push({ x: endX - 10, y: endY - 8 }, { x: endX, y: endY }, { x: endX - 10, y: endY + 8 });
        break;
      case 'input_top':
        points.push({ x: endX - 8, y: endY - 10 }, { x: endX, y: endY }, { x: endX + 8, y: endY - 10 });
        break;
      case 'input_right':
        points.push({ x: endX + 10, y: endY - 8 }, { x: endX, y: endY }, { x: endX + 10, y: endY + 8 });
        break;
      case 'input_bottom':
        points.push({ x: endX - 8, y: endY + 10 }, { x: endX, y: endY }, { x: endX + 8, y: endY + 10 });
        break;
    }
    return points;
  }

  createHalfCirclePath(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    radius: number
  ): string {
    const centerX = (startX + endX) / 2;
    const centerY = (startY + endY) / 2;
    const angle = Math.atan2(endY - startY, endX - startX);
    const controlX = centerX + radius * Math.cos(angle + Math.PI / 2);
    const controlY = centerY + radius * Math.sin(angle + Math.PI / 2);
    return `Q${controlX},${controlY} ${endX},${endY}`;
  }

  drawPathFromPoints(points: Array<{ x: number, y: number }>): string {
    let path = `M ${points[0].x} ${points[0].y} `;
    for (let i = 1; i < points.length; i++) {
      path += `L ${points[i].x} ${points[i].y} `;
    }
    return path;
  }
}

bootstrapApplication(App);
