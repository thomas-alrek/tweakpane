import InputValue from '../../model/input-value';
import View from '../../view/view';

import {InputView} from '../../view/input/input';

export interface InputController<T> {
	readonly value: InputValue<T>;
	readonly view: View & InputView<T>;
}
