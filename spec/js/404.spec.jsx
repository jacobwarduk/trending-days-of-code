import React from 'react';
import {shallow} from 'enzyme';
import FourOhFour from '../../js/404';

describe('FourOhFour', () => {
	'use strict';
	describe('when rendered', () => {
		let component = shallow(<FourOhFour />);

		it('should render correctly', () => {
			expect(component).toMatchSnapshot();
		});
	});
});
