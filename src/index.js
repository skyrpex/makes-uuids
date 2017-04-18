import { memoize } from 'lodash';
import { v4 as uuid } from 'uuid';

const defaultOptions = {
  methodName: 'uuid',
};

export default ({ methodName } = defaultOptions) => ({
  methods: {
    [methodName]: memoize(() => uuid()),
  },
});
