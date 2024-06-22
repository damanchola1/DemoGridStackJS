import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GridstackComponent, NgGridStackOptions, elementCB } from 'gridstack/dist/angular';
import { GridStack, GridStackOptions } from 'gridstack';
import { Test1Component } from '../../components/test1/test1.component';
import { Test2Component } from '../../components/test2/test2.component';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent implements AfterViewInit {

  @ViewChild(GridStack) gridComp?: GridStack;

  constructor() {
    GridstackComponent.addComponentToSelectorType([Test1Component, Test2Component]);
  }

  ngAfterViewInit(): void {
    this.gridComp = GridStack.init(this.gridOptionsFull);
  }

  public gridOptions: GridStackOptions = {
    margin: 2,
    float: false,
    minRow: 1,
    cellHeight: 70,
    alwaysShowResizeHandle: true,
    columnOpts: { breakpoints: [{ w: 768, c: 1 }] },
  }

  private serializedData?: NgGridStackOptions;

  public gridOptionsFull: NgGridStackOptions = {
    ...this.gridOptions,
    children: [ // or call load()/addWidget() with same data
      { x: 0, y: 1, w: 8, h: 1, minW: 2, selector: 'app-test1', id: '1', autoPosition: true },
      { x: 1, y: 0, selector: 'app-test2', id: '2', autoPosition: true },
    ]
  }

  public onChange() {
    this.saveGrid()
  }

  public onResizeStop(data: elementCB) {
    console.log('resizestop ', data.el.gridstackNode);
  }

  public add() {

    const newWidget = { x: 0, y: 1, w: 10, h: 1, minW: 2, selector: 'app-test1', id: '10', autoPosition: true }
    this.gridComp?.addWidget(newWidget);

  }

  public clearGrid() {
    if (!this.gridComp) return;
    this.gridComp.removeAll();
  }

  public saveGrid() {
    this.serializedData = this.gridComp?.save(true, true) as GridStackOptions || ''; // no content, full options
  }

  public loadGrid() {
    if (!this.gridComp) return;
    GridStack.addGrid(this.gridComp.el, this.serializedData);
  }

  public delete() {
    let grid = this.gridComp;
    if (!grid) return;
    let node = grid.engine.nodes[0];
    // delete any children first before subGrid itself...
    if (node?.subGrid && node.subGrid.engine.nodes.length) {
      grid = node.subGrid;
      node = grid.engine.nodes[0];
    }
    if (node) grid.removeWidget(node.el!);
  }

}