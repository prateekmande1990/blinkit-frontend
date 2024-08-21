import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export async function navigate(routeName: string, params?: object) {
  const isReady = navigationRef.isReady();
  if (isReady) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}

export async function replace(routeName: string, params?: object) {
  const isReady = navigationRef.isReady();
  if (isReady) {
    navigationRef.dispatch(StackActions.replace(routeName, params));
  }
}

export async function resetAndNavigate(routeName: string) {
  const isReady = navigationRef.isReady();
  if (isReady) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      }),
    );
  }
}

export async function goBack() {
  const isReady = navigationRef.isReady();
  if (isReady) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

export async function push(routeName: string, params?: object) {
  const isReady = navigationRef.isReady();
  if (isReady) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
}

export async function prepareNavigation() {
  navigationRef.isReady();
}
