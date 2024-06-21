import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import 'zone.js';

const inputs = {
  input_left: {},
  input_top: {},
  input_right: {},
  input_bottom: {},
};

const outputs = {
  output_left: {},
  output_top: {},
  output_right: {},
  output_bottom: {},
};

const combinations = [
  {
    id: 'b02c0463-4793-4ab2-814d-fdd71b50262d',
    output: 'output_left',
    input: 'input_left',
    start: { x: 174, y: 88 },
    end: { x: 269, y: 32 },
  },
  {
    id: '2ab98cf5-2dc3-4567-96a8-5d8320263d07',
    output: 'output_left',
    input: 'input_top',
    start: { x: 28, y: 187 },
    end: { x: 145, y: 166 },
  },
  {
    id: '7b3f2ba4-3d6f-4867-84bc-620cb6d9f0d9',
    output: 'output_left',
    input: 'input_right',
    start: { x: 282, y: 123 },
    end: { x: 20, y: 217 },
  },
  {
    id: 'f8f21a2b-7360-41f2-b2ed-bc8c02bcbb82',
    output: 'output_left',
    input: 'input_bottom',
    start: { x: 26, y: 153 },
    end: { x: 87, y: 29 },
  },
  {
    id: '07ccf9e1-3432-44d1-9e5c-7a9e3b63ee32',
    output: 'output_top',
    input: 'input_left',
    start: { x: 199, y: 269 },
    end: { x: 109, y: 248 },
  },
  {
    id: 'e84ee158-8f5b-4b2c-b3b4-d1e3b2b5a25a',
    output: 'output_top',
    input: 'input_top',
    start: { x: 292, y: 13 },
    end: { x: 198, y: 60 },
  },
  {
    id: 'bd68b7de-e54e-4e8a-a920-779b56a4400b',
    output: 'output_top',
    input: 'input_right',
    start: { x: 236, y: 292 },
    end: { x: 95, y: 250 },
  },
  {
    id: 'b0dfad50-68a2-4c2e-b9e9-0de41de9a356',
    output: 'output_top',
    input: 'input_bottom',
    start: { x: 39, y: 289 },
    end: { x: 6, y: 113 },
  },
  {
    id: '36b775d3-9b32-4b10-bc17-f9875a42bc3e',
    output: 'output_right',
    input: 'input_left',
    start: { x: 118, y: 203 },
    end: { x: 47, y: 282 },
  },
  {
    id: '1f17c5a5-642d-4f96-b16f-0ab75303ee87',
    output: 'output_right',
    input: 'input_top',
    start: { x: 116, y: 91 },
    end: { x: 81, y: 165 },
  },
  {
    id: '3c4a0ba4-2b94-46f5-94db-2bbf21b30754',
    output: 'output_right',
    input: 'input_right',
    start: { x: 179, y: 190 },
    end: { x: 181, y: 84 },
  },
  {
    id: '0e98d802-7dc5-4292-86a3-ae54854523a5',
    output: 'output_right',
    input: 'input_bottom',
    start: { x: 83, y: 155 },
    end: { x: 165, y: 146 },
  },
  {
    id: 'a810c53d-6a60-4035-af70-54c0b88e57e5',
    output: 'output_bottom',
    input: 'input_left',
    start: { x: 90, y: 207 },
    end: { x: 63, y: 69 },
  },
  {
    id: 'd4f6a635-d0e4-4ebd-9308-5d28f052ae9f',
    output: 'output_bottom',
    input: 'input_top',
    start: { x: 26, y: 184 },
    end: { x: 297, y: 197 },
  },
  {
    id: '8557c21a-8d6a-4ff0-a589-51bf53996e56',
    output: 'output_bottom',
    input: 'input_right',
    start: { x: 39, y: 14 },
    end: { x: 148, y: 190 },
  },
  {
    id: 'd01b1b56-8a84-422e-b03d-6df92f21bb59',
    output: 'output_bottom',
    input: 'input_bottom',
    start: { x: 236, y: 58 },
    end: { x: 89, y: 163 },
  },
  {
    id: 'e16523b0-b23d-4b5b-9ad4-865fa6a1af65',
    output: 'output_top',
    input: 'input_bottom',
    start: { x: 50, y: 50 },
    end: { x: 100, y: 50 },
  },
  {
    id: '2d8a5907-f0df-43e0-b39e-4d4a12044d94',
    output: 'output_top',
    input: 'input_bottom',
    start: { x: 50, y: 50 },
    end: { x: 50, y: 100 },
  },
  {
    id: 'f108d7f0-21ff-4b5c-83a9-09599bead150',
    output: 'output_right',
    input: 'input_bottom',
    start: { x: 100, y: 50 },
    end: { x: 100, y: 100 },
  },
  {
    id: 'b7d046e7-d764-4ed3-af20-5b68836d1f34',
    output: 'output_bottom',
    input: 'input_top',
    start: { x: 100, y: 100 },
    end: { x: 100, y: 50 },
  },
  {
    id: '92e2e62c-6318-4b38-8dc1-56d7ff356aa2',
    output: 'output_bottom',
    input: 'input_left',
    start: { x: 100, y: 100 },
    end: { x: 50, y: 50 },
  },
  {
    id: 'a2b2061d-9ac6-497b-801b-6eb98ed6e5ed',
    output: 'output_bottom',
    input: 'input_right',
    start: { x: 100, y: 100 },
    end: { x: 100, y: 150 },
  },
  {
    id: 'cbeac88f-0703-4d3d-a4b7-b9e589d5f05a',
    output: 'output_left',
    input: 'input_right',
    start: { x: 200, y: 200 },
    end: { x: 300, y: 200 },
  },
  {
    id: 'c8af5d8c-b3f4-4d9c-85d6-41ad8e2f073d',
    output: 'output_right',
    input: 'input_left',
    start: { x: 300, y: 300 },
    end: { x: 200, y: 300 },
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Draw Path</h1>
    <ng-container *ngFor="let combination of combinations">
      <h2>From: {{ combination.output }};<br />To: {{ combination.input }};</h2>
      <svg id="{{combination.id}}" width="300" height="300" >
        <path
          [attr.d]="createCurvature(combination.start.x, combination.start.y, combination.end.x, combination.end.y, 5, combination.output, combination.input)"
          stroke="black"
          fill="transparent"
        />
      </svg>
      <hr />
    </ng-container>
  `,
})
export class App {
  combinations: any[] = combinations;

  createCurvature(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    radius: number,
    output: string,
    input: string
  ): string {
    let halfX = startX + (endX - startX) / 2;
    let path = `M ${startX} ${startY} `;

    let gap = Math.min(Math.abs(startY - endY) / 2, radius * 2);
    radius = Math.min(Math.abs(startY - endY) / 2, radius);
    path += `L ${halfX - gap} ${startY} `;
    path += this.createHalfCirclePath(
      halfX - gap,
      startY,
      halfX,
      startY - gap,
      radius
    );
    if (startY !== endY) {
      path += `L ${halfX} ${endY + gap} `;
      path += this.createHalfCirclePath(
        halfX,
        endY + gap,
        halfX + gap,
        endY,
        -radius
      );
    }
    path += `L ${endX} ${endY}`;

    path += ` M ${endX - 10} ${endY - 8} L ${endX} ${endY} L ${endX - 10} ${
      endY + 8
    }`;

    return path;
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
}

bootstrapApplication(App);