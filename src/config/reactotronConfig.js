import reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = reactotron
    .configure({ host: '192.168.56.1' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();
  console.tron = tron;
}

// { host: '192.168.56.1' }
// { host: '192.168.1.2' }
// { host: '192.168.0.2' }
