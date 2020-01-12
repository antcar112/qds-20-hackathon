import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
   margin-top: 30px;
   font-size: 16px;
   
   &:hover {
      background: ;
   }

   & svg {
      font-size: 30px;
   }
`;

const VerticalNavLink = props => {
	const [
		isActive,
		setIsActive
	] = useState(false);

	return (
		<StyledLink to={props.path}>
			{props.icon}
			<span>{props.name}</span>
		</StyledLink>
	);
};

export default VerticalNavLink;
