import { Injectable } from '@angular/core';
import { Iconstore } from './iconstore';

@Injectable({
  providedIn: 'root'
})
export class IconstoreRegistry {
  private registry = new Map<string, string>();

  public registerIcons(icons: Iconstore[]): void {
    icons.forEach((icon: Iconstore) => this.registry.set(icon.name, icon.data));
  }


  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`we could not find ${iconName}`);
    }
    return this.registry.get(iconName);
  }


}