import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class EventPage extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Content>
					<Card>
						<CardItem header>
							<Text>NativeBase</Text>
						</CardItem>
						<CardItem>
							<Body>
								<Text>
									Your text here
								</Text>
							</Body>
						</CardItem>
						<CardItem footer>
							<Text>GeekyAnts</Text>
						</CardItem>
					</Card>
				</Content>
			</Container>
    );
  }
}
