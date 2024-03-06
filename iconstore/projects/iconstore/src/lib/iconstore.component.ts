import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { IconstoreRegistry } from './iconstore-registry.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'lib-iconstore',
  // imports: [],
  // standalone: true,
  template: `
  <ng-content></ng-content>
`,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconstoreComponent {
  private svgIcon!: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconStoreRegistry.getIcon(iconName);
    if (svgData) {
      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }


  constructor(
    private element: ElementRef,
    private iconStoreRegistry: IconstoreRegistry,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }


}
