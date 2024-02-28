import { Injectable } from '@angular/core';
import { IconStore } from '../../../../dist/icon-store/icons';

@Injectable({
  providedIn: 'root'
})
export class IconStoreService {
  private registry = new Map<IconStore, string>();

  public registerIcons(icons: IconStore[]): void {
    icons.forEach((icon: any) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: IconStore): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`we could not find the icon with the name ${iconName}`);
    }
    return this.registry.get(iconName);
  }
}
