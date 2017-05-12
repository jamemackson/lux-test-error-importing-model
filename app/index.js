import { Application } from 'lux-framework';
// import { default as toPojo } from './utils/model-to-pojo';

class LuxTestErrorImportingModel extends Application {
  constructor(config) {
    // eslint-disable-next-line constructor-super
    return super(config).then(async (/* app */) => {
      // try {
      //   toPojo();
      // } catch (error) {
      //   // console.error(error);
      // }
    });
  }
}

export default LuxTestErrorImportingModel;
