/**
 * @author lg<lirufei0808@gmail.com>
 * @date 3/2/20
 * @description
 */
import PublicAPI from "./publicApi";

export default class DataFlowStats extends PublicAPI{

	constructor(){
		super('http://localhost:8080/api/DataFlowStats');
	}
}
