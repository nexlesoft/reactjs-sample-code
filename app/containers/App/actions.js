import { CHANGE_SELECTEDCOMPONENT } from './constants';

export function changeSelectedComponent(componentName) {
  return {
    type: CHANGE_SELECTEDCOMPONENT,
    componentName,
  };
};

