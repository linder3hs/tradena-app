import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef: any = createNavigationContainerRef();

export function navigate(name: string, params: string) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  const popAction = StackActions.pop(1);
  navigationRef.dispatch(popAction);
}
