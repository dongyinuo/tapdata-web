/**
 * @author lg<lirufei0808@gmail.com>
 * @date 2/27/20
 * @description
 */
import PublicAPI from './publicApi'

export default class ClusterVersion extends PublicAPI {
  constructor() {
    super('/api/clusterVersions')
  }
}
