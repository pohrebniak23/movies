import { RouteNames } from '../../app/providers/AppRouter/AppRouter';

export interface IDropDown {
  name: string;
  link: RouteNames;
  icon?: JSX.Element;
}
