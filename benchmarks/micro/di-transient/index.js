import {createBenchmark} from '../container';

export default createBenchmark(
  (container, ctor) => container.registerTransient(ctor));
