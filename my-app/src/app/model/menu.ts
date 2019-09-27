
/**
 * Menu object
 *
 * @export
 * @interface Menu
 */
export interface Menu {
    link: string;
    intl: string;
    label?: string;
    icon?: string;
    menus?: Menu[]
  }