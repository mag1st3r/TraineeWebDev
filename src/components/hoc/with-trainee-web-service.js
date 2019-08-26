import React from 'react';
import { TraineeWebServiceConsumer } from '../trainee-web-serevice-context/trainee-web-service-context';

const withTraineeWebStoreService = () => (Wrapped) => {

	return (props) => {
		return (
			<TraineeWebServiceConsumer>
				{
					(traineeWebService) => {
						return (<Wrapped {...props}
										 traineeWebService={traineeWebService}/>);
					}
				}
			</TraineeWebServiceConsumer>
		);
	}
};

export default withTraineeWebStoreService