/*import React from 'react';
import PropTypes from 'prop-types';
*/
import NextHead from 'next/head';

function Head(props) {
	return (
		<NextHead>
      {props.children}
		</NextHead>
	)
}

export default Head;