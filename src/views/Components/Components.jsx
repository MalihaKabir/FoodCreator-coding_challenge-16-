import React from 'react';
// nodejs library that concatenates classes:
import classNames from 'classnames';
// react components for routing our app without refresh
import withStyles from '@material-ui/core/styles/withStyles';
// core components:
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
import App from './Containers/App';
import Footer from 'components/Footer/Footer.jsx';
import componentsStyle from 'assets/jss/material-kit-react/views/components.jsx';

class Components extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Parallax image={require('assets/img/bg4.jpg')}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem className="mt0">
								<div className={classes.brand}>
									<h1 className={classes.title}>Find Your Favourite Recipes.</h1>
									<h3 className={classes.subtitle}>
										Be your home-made-food creator,
										<br />have a happy life <i class="fas fa-smile-beam" />
									</h3>
								</div>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>

				<div className={classNames(classes.main, classes.mainRaised)}>
					<App />
				</div>

				<Footer />
			</div>
		);
	}
}

export default withStyles(componentsStyle)(Components);
